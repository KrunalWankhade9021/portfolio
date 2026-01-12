"use client";

import { Box, Lock, Search, Zap, Database, Globe } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ODFSpotlight() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Featured Project
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A deep dive into high-performance, local-first engineering.
                </p>
            </div>

            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Search className="h-6 w-6 text-indigo-400" />}
                    title="Offline Document Finder (ODF)"
                    description="Privacy-First Semantic Search Engine (Windows Spotlight–style)"
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Zap className="h-6 w-6 text-yellow-400" />}
                    title="Instant Performance"
                    description="Built a fully offline, high-performance document search system that enables instant system-wide file discovery using semantic understanding—without cloud dependencies."
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Lock className="h-6 w-6 text-green-400" />}
                    title="Privacy-First Architecture"
                    description={
                        <span className="space-y-2 block text-sm">
                            <span>Designed a privacy-first semantic search pipeline using vector embeddings and ChromaDB.</span>
                            <span className="block mt-2 font-mono text-xs opacity-80 bg-black/20 p-2 rounded">
                                Implemented hybrid retrieval & ranking (semantic similarity + keyword & filename boosting)
                            </span>
                        </span>
                    }
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Database className="h-6 w-6 text-blue-400" />}
                    title="Smart Indexing"
                    description="Built incremental indexing to avoid reprocessing unchanged files and ensure fast startup. Optimized for low latency, scalability, and offline reliability."
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Globe className="h-6 w-6 text-purple-400" />}
                    title="Why this matters"
                    description={
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <span>
                                Most semantic search systems rely on cloud APIs and compromise privacy. ODF proves that fast, intelligent, and scalable semantic search can run entirely on-device.
                            </span>
                            <Link
                                href="https://github.com/7pk5/ODF"
                                target="_blank"
                                className="flex-shrink-0 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-colors text-sm font-medium"
                            >
                                View on GitHub &rarr;
                            </Link>
                        </div>
                    }
                />
            </ul>
        </div>
    );
}

const GridItem = ({ area, icon, title, description }) => {
    return (
        <li className={cn("min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/50 backdrop-blur-sm p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted/50 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                {title}
                            </h3>
                            <div className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
