"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function ProjectCard({ title, description, tags, link, githubLink, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl"
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:from-purple-400 group-hover:to-pink-600 transition-all">
                            {title}
                        </h3>
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
