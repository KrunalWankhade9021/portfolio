"use client";
import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIChatHero() {
    const [inputValue, setInputValue] = useState("");

    const handleSend = () => {
        if (!inputValue.trim()) return;
        // Logic to dispatch message to main ChatInterface will go here
        console.log("User asked:", inputValue);

        // For now, we can perhaps scroll to the chat section or trigger a global chat state
        // This is a placeholder action
        const chatSection = document.getElementById('chat-interface');
        if (chatSection) {
            chatSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative z-10">
            {/* Online Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-white/80">Looking for talent?</span>
            </motion.div>

            {/* Avatar & Greeting */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 relative"
            >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                    {/* Placeholder Avatar - replace with actual image later */}
                    <img
                        src="https://api.dicebear.com/7.x/bottts/svg?seed=Repo&backgroundColor=transparent"
                        alt="Krunal Avatar"
                        className="w-full h-full object-cover p-2"
                    />
                </div>
                <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                    className="absolute -bottom-2 -right-2 text-4xl"
                >
                    👋
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-2 tracking-tight"
            >
                Hey, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Krunal</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 flex items-center gap-2"
            >
                <Sparkles size={20} className="text-yellow-400" />
                <span>GenAI Developer</span>
            </motion.div>

            {/* Chat Input */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full max-w-xl relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 pl-6 shadow-2xl active:scale-[0.99] transition-transform">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me anything..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/40 text-lg py-2"
                    />
                    <button
                        onClick={handleSend}
                        className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
