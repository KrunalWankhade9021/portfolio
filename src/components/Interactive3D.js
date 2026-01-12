'use client'

import SplineScene from "@/components/ui/SplineScene";
import { Card } from "@/components/ui/card"
import Spotlight from "@/components/ui/Spotlight"

export default function Interactive3D() {
    return (
        <div className="w-full py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                <span className="gradient-text">Interactive 3D</span>
            </h2>
            <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-white/10">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                <div className="flex h-full flex-col md:flex-row">
                    {/* Left content */}
                    <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pointer-events-none">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Immersive Experiences
                        </h1>
                        <p className="mt-4 text-neutral-300 max-w-lg">
                            Going beyond static interfaces. I build interactive 3D elements that captivate users and elevate the digital journey.
                        </p>
                    </div>

                    {/* Right content */}
                    <div className="flex-1 relative w-full h-full min-h-[300px]">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </Card>
        </div>
    )
}
