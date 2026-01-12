"use client";
import React from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { resumeData } from "@/data/resume";
import { Code, Database, Brain, Terminal, Server, ChartBar, Cpu } from "lucide-react";

export default function SkillsOrbital() {
    const categories = [
        { name: "Programming", icon: Code },
        { name: "Machine Learning & AI", icon: Brain },
        { name: "Data & Analytics", icon: ChartBar },
        { name: "Core Specializations", icon: Cpu },
        { name: "Databases & Tools", icon: Database },
    ];

    const timelineData = resumeData.skills.map((skill, index) => {
        const category = categories.find(c => c.name === skill.category) || categories[0];
        return {
            id: index + 1,
            title: skill.category,
            date: "Current",
            content: skill.items.join(", "),
            category: "Skills",
            icon: category.icon,
            relatedIds: [],
            status: "completed",
            energy: 85 + (index * 2), // varied energy levels
        };
    });

    // Link nodes in a ring (1->2->3->4->5->1)
    timelineData.forEach((item, i) => {
        const nextIndex = (i + 1) % timelineData.length;
        item.relatedIds.push(timelineData[nextIndex].id);
    });

    return (
        <div className="w-full relative py-12">
            <h2 className="text-3xl font-bold text-center mb-0 relative z-10">
                Technical <span className="gradient-text">Skills Radius</span>
            </h2>
            <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
    );
}
