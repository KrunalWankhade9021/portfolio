"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: "Offline Document Finder (ODF)",
        description: "A privacy-first semantic search engine that enables instant system-wide file discovery using vector embeddings and ChromaDB. Fully offline, high-performance, and Windows Spotlight-style user experience.",
        tags: ["Python", "ChromaDB", "Semantic Search", "Local-First", "React"],
        githubLink: "https://github.com/7pk5/ODF",
        link: "https://github.com/7pk5/ODF"
    },
    {
        title: "Decision Canvas",
        description: "Open-Source Python library for visualizing classifier decision boundaries. Enables clear, publication-ready plots with a single function call. Supports all scikit-learn classifiers with automatic preprocessing and PCA.",
        tags: ["Python", "Machine Learning", "Scikit-Learn", "Visualization", "Open Source"],
        githubLink: "https://github.com/KrunalWankhade9021/Decesion-Canvas",
        link: "https://github.com/KrunalWankhade9021/Decesion-Canvas"
    }
];

export default function ProjectsGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Exploring the frontiers of Generative AI and Human-Computer Interaction.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </div>
    );
}
