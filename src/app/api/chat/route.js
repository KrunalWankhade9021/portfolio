import { groq, MODEL } from "@/lib/groq";
import { tools, runTool } from "@/lib/tools";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { messages } = await req.json();

        // 1. Initial Call to Groq
        const response = await groq.chat.completions.create({
            model: MODEL,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
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
                    { role: "system", content: SYSTEM_PROMPT },
                    ...newMessages
                ],
            });

            return NextResponse.json(secondResponse.choices[0].message);
        }

        // No tool calls, just return the response
        return NextResponse.json(responseMessage);

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
