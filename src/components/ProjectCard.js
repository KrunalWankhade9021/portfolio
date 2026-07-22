"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCard({ title, description, tags, link, githubLink, index, featured, highlights }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`group relative h-full rounded-2xl border p-6 backdrop-blur-lg transition-all hover:shadow-2xl ${
                featured
                    ? "md:col-span-2 border-purple-400/30 bg-gradient-to-br from-purple-500/10 via-white/5 to-pink-500/10 hover:border-purple-400/50 shadow-lg shadow-purple-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
            }`}
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-purple-400 group-hover:to-pink-600 transition-all">
                                {title}
                            </h3>
                            {featured && (
                                <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-sm">
                                    Featured
                                </span>
                            )}
                        </div>
                        <div className="flex gap-2">
                            {githubLink && (
                                <Link href={githubLink} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                                    <Github size={18} />
                                </Link>
                            )}
                            {link && (
                                <Link href={link} target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                                    <ExternalLink size={18} />
                                </Link>
                            )}
                        </div>
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                        {description}
                    </p>

                    {highlights && highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {highlights.map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-purple-500/10 border border-purple-400/20 text-purple-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
