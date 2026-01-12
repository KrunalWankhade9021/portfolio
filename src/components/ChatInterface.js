"use client";

import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import InputArea from "./InputArea";

const SUGGESTED_QUESTIONS = [
    "Who are you?",
    "What projects have you built?",
    "What is your tech stack?",
    "Tell me about your experience."
];

export default function ChatInterface() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi there! I'm Krunal's AI twin. I can tell you all about his work, skills, and experience. What would you like to know?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async (userMessageContent) => {
        if (!userMessageContent.trim()) return;

        const newMessages = [...messages, { role: "user", content: userMessageContent }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) throw new Error("Failed to fetch response");

            const data = await response.json();
            setMessages([...newMessages, data]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages([
                ...newMessages,
                { role: "assistant", content: "Sorry, I encountered an error. Please try again." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full w-full relative bg-background">
            {/* Header */}
            <header className="absolute top-0 left-0 w-full z-10 glass-panel border-b border-white/5">
                <div className="container h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tight">
                        Krunal <span className="gradient-text">AI</span>
                    </h1>
                    <a
                        href="https://drive.google.com/file/d/1OtXtiH6cnsZCqRJ5RNuHxXqs1MsDMK_R/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </header>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto pt-24 pb-32">
                <div className="container max-w-3xl">
                    {messages.map((msg, i) => (
                        <MessageBubble key={i} message={msg} />
                    ))}

                    {isLoading && <TypingIndicator />}

                    <div ref={scrollRef} />
                </div>
            </div>

            {/* Suggested Questions (only show if few messages) */}
            {messages.length < 3 && !isLoading && (
                <div className="absolute bottom-24 left-0 w-full animate-slide-up">
                    <div className="container max-w-3xl flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {SUGGESTED_QUESTIONS.map((q, i) => (
                            <button
                                key={i}
                                onClick={() => handleSendMessage(q)}
                                className="whitespace-nowrap px-4 py-2 rounded-full glass-panel text-sm hover:bg-primary/20 transition-all border border-white/5"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input Area */}
            <InputArea
                input={input}
                setInput={setInput}
                onSubmit={handleSendMessage}
                isLoading={isLoading}
            />
        </div>
    );
}
