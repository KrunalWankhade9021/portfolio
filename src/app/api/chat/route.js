import { groq, MODEL } from "@/lib/groq";
import { tools, runTool } from "@/lib/tools";
import { SYSTEM_PROMPT } from "@/lib/ai-prompt";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { messages } = await req.json();

        // 1. Initial Call to Groq
        console.log("DEBUG: SYSTEM_PROMPT imported successfully:", !!SYSTEM_PROMPT);

        // Sanitize messages to remove unsupported fields (like 'reasoning') from previous models
        const cleanMessages = messages.map(m => ({
            role: m.role,
            content: m.content,
            name: m.name,
            tool_calls: m.tool_calls,
            tool_call_id: m.tool_call_id
        }));

        const response = await groq.chat.completions.create({
            model: MODEL,
            messages: [
                { role: "system", content: SYSTEM_PROMPT || "You are a helpful assistant." },
                ...cleanMessages
            ],
            tools: tools,
            tool_choice: "auto",
            max_tokens: 1024,
        });

        const responseMessage = response.choices[0].message;

        // 2. Check for Tool Calls
        if (responseMessage.tool_calls) {
            const toolCalls = responseMessage.tool_calls;

            // Append the assistant's message with tool calls to history
            const newMessages = [
                ...messages,
                responseMessage
            ];

            // Execute each tool
            for (const toolCall of toolCalls) {
                const functionName = toolCall.function.name;
                const functionArgs = JSON.parse(toolCall.function.arguments || "{}");

                console.log(`Executing tool: ${functionName}`);
                const toolResult = await runTool(functionName, functionArgs);

                newMessages.push({
                    tool_call_id: toolCall.id,
                    role: "tool",
                    name: functionName,
                    content: toolResult,
                });
            }

            // 3. Follow-up Call to Groq with Tool Results
            const secondResponse = await groq.chat.completions.create({
                model: MODEL,
                messages: [
                    { role: "system", content: SYSTEM_PROMPT || "You are a helpful assistant." },
                    ...newMessages
                ],
            });

            const finalMsg = secondResponse.choices[0].message;
            if (finalMsg.content) {
                finalMsg.content = cleanResponseText(finalMsg.content);
            }
            return NextResponse.json(finalMsg);
        }

        // No tool calls, just return the response
        if (responseMessage.content) {
            responseMessage.content = cleanResponseText(responseMessage.content);
        }
        return NextResponse.json(responseMessage);

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Helper: Strip tool hallucinations from text
function cleanResponseText(text) {
    if (!text) return "";
    return text
        .replace(/get_\w+\{\}/g, "") // Remove get_skills{}, get_projects{}
        .replace(/<function.*?>.*?<\/function>/gs, "") // Remove XML tags
        .trim();
}
