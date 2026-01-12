"use client";

import { LayoutDashboard, Scale, MousePointerClick, Save, Target, ArrowRight } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DecisionCanvasSpotlight() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                    Decision Canvas
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Interactive Decision-Making Tool for data-driven choices.
                </p>
            </div>

            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<LayoutDashboard className="h-6 w-6 text-cyan-400" />}
                    title="Visual Interface"
                    description="Built a visual decision canvas interface to clearly compare alternatives based on customized criteria."
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Scale className="h-6 w-6 text-orange-400" />}
                    title="Weighted Scoring"
                    description="Designed logic for weighted scoring and real-time feedback to help users identify optimal choices."
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<MousePointerClick className="h-6 w-6 text-pink-400" />}
                    title="Intuitive UX"
                    description={
                        <span className="space-y-2 block text-sm">
                            <span>Implemented an intuitive UI that guides users through problem framing, criteria setup, and result interpretation.</span>
                        </span>
                    }
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Save className="h-6 w-6 text-green-400" />}
                    title="Persistence & History"
                    description="Enabled persistence of decisions and criteria for future reference and iteration. Focused on usability and clarity."
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Target className="h-6 w-6 text-red-400" />}
                    title="Why it matters"
                    description={
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <span>
                                Decision Canvas transforms ambiguous choices into data-driven decisions by combining human judgment with structured evaluation—ideal for product planning and team consensus.
                            </span>
                            {/* 
                <Link 
                    href="#" 
                    className="flex-shrink-0 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-colors text-sm font-medium opacity-50 cursor-not-allowed"
                >
                    Link Coming Soon
                </Link>
                */}
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
