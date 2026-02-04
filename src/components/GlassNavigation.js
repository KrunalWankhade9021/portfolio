"use client";
import React from 'react';
import { User, Briefcase, Code, Cpu, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { label: "Me", icon: User, color: "text-blue-400", href: "#bio" },
    { label: "Experience", icon: Briefcase, color: "text-purple-400", href: "#experience" },
    { label: "Projects", icon: Code, color: "text-green-400", href: "#odf-spotlight" }, // Pointing to ODF as main project
    { label: "Skills", icon: Cpu, color: "text-pink-400", href: "#skills" },
    { label: "Contact", icon: Mail, color: "text-yellow-400", href: "#contact" },
];

export default function GlassNavigation() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {navItems.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className={`
                            flex flex-col items-center justify-center gap-3 p-6 
                            rounded-2xl border border-white/5 bg-white/5 
                            backdrop-blur-sm hover:bg-white/10 hover:border-white/20 
                            transition-all cursor-pointer group
                            ${index === 4 ? "col-span-2 md:col-span-1" : ""}
                        `}
                    >
                        <div className={`
                            p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform 
                            ${item.color}
                        `}>
                            <item.icon size={24} />
                        </div>
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                            {item.label}
                        </span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
