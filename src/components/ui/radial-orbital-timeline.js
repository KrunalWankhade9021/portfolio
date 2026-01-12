"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RadialOrbitalTimeline({
    timelineData,
}) {
    const [expandedItems, setExpandedItems] = useState({});
    const [viewMode, setViewMode] = useState("orbital");
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [pulseEffect, setPulseEffect] = useState({});
    const [centerOffset, setCenterOffset] = useState({
        x: 0,
        y: 0,
    });
    const [activeNodeId, setActiveNodeId] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef(null);
    const orbitRef = useRef(null);
    const nodeRefs = useRef({});

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleContainerClick = (e) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const calculateNodePosition = (index, total) => {
        // Increased radius to give more space
        const radius = 220;
        // Divide full circle (360 degrees) by number of items
        const angleStep = 360 / total;
        // Calculate current angle including rotation
        const angle = (index * angleStep + rotationAngle) % 360;

        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;

        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(
            0.4,
            Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
        );

        return { x, y, angle, zIndex, opacity };
    };

    const getRelatedItems = (itemId) => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId) => {
        if (!activeNodeId) return false;
        const relatedItems = getRelatedItems(activeNodeId);
        return relatedItems.includes(itemId);
    };

    const toggleItem = (id) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });

            newState[id] = !prev[id];

            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);

                const relatedItems = getRelatedItems(id);
                const newPulseEffect = {};
                relatedItems.forEach((relId) => {
                    newPulseEffect[relId] = true;
                });
                setPulseEffect(newPulseEffect);

                centerViewOnNode(id);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }

            return newState;
        });
    };

    useEffect(() => {
        let rotationTimer;

        if (autoRotate && viewMode === "orbital") {
            rotationTimer = setInterval(() => {
                setRotationAngle((prev) => {
                    const newAngle = (prev + 0.2) % 360; // Slowed down rotation slightly
                    return Number(newAngle.toFixed(3));
                });
            }, 50);
        }

        return () => {
            if (rotationTimer) {
                clearInterval(rotationTimer);
            }
        };
    }, [autoRotate, viewMode]);

    const centerViewOnNode = (nodeId) => {
        if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
        const totalNodes = timelineData.length;
        // Calculate target angle (we want this node at 270 degrees / -90 degrees usually for 'top' or 'bottom' focus, 
        // but code uses 270. Let's trust it.)

        // Position of node i is (i/N)*360.
        // We want (i/N)*360 + rotation = 270 (bottom) or 90 (top) or similar.
        // Code says: targetAngle = (index/total) * 360
        // setRotation = 270 - targetAngle. 
        // This moves the target node to 270 degrees (bottom of circle).

        const targetAngle = (nodeIndex / totalNodes) * 360;
        setRotationAngle(270 - targetAngle);
    };

    if (!isMounted) return <div className="w-full h-[600px] flex items-center justify-center bg-transparent"></div>;

    return (
        <div
            className="w-full h-[600px] flex flex-col items-center justify-center bg-transparent overflow-hidden relative"
            ref={containerRef}
            onClick={handleContainerClick}
        >
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <div
                    className="absolute w-full h-full flex items-center justify-center transform-style-3d"
                    ref={orbitRef}
                    style={{
                        perspective: "1000px",
                        transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
                    }}
                >
                    {/* Central Hub */}
                    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                        <div className="absolute w-28 h-28 rounded-full border border-white/20 animate-ping opacity-70"></div>
                        <div className="absolute w-36 h-36 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
                        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center">
                            <Zap className="text-primary w-6 h-6" />
                        </div>
                    </div>

                    <div className="absolute w-[440px] h-[440px] rounded-full border border-white/10 opacity-30"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 opacity-20"></div>

                    {timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon || Zap;

                        const nodeStyle = {
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            zIndex: isExpanded ? 50 : position.zIndex, // Reduced z-index to stay under header/overlays if needed
                            opacity: isExpanded ? 1 : position.opacity,
                        };

                        return (
                            <div
                                key={item.id}
                                ref={(el) => (nodeRefs.current[item.id] = el)}
                                className="absolute transition-all duration-700 cursor-pointer"
                                style={nodeStyle}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(item.id);
                                }}
                            >
                                {/* Energy Field */}
                                <div
                                    className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                                        }`}
                                    style={{
                                        background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                                        width: `${item.energy * 0.5 + 40}px`,
                                        height: `${item.energy * 0.5 + 40}px`,
                                        left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                        top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                                    }}
                                ></div>

                                {/* Node Icon */}
                                <div
                                    className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${isExpanded
                                            ? "bg-white text-black"
                                            : isRelated
                                                ? "bg-white/50 text-black"
                                                : "glass-panel text-white"
                                        }
                  border-2 
                  ${isExpanded
                                            ? "border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            : isRelated
                                                ? "border-white animate-pulse"
                                                : "border-white/20"
                                        }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : "hover:scale-110"}
                `}
                                >
                                    <Icon size={20} />
                                </div>

                                <div
                                    className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider bg-black/50 px-2 py-0.5 rounded-full
                  transition-all duration-300
                  ${isExpanded ? "text-white opacity-100" : "text-white/70 opacity-0 group-hover:opacity-100"}
                `}
                                >
                                    {item.title}
                                </div>

                                {/* Info Card */}
                                {isExpanded && (
                                    <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-72 bg-black/90 backdrop-blur-xl border-white/20 shadow-2xl z-[60]">
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white to-white/20"></div>
                                        <CardHeader className="pb-3 pt-4 px-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <Badge variant="outline" className="text-[10px] border-white/20 text-white/70">
                                                    {item.category}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-lg text-white font-bold">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="px-4 pb-4">
                                            {/* Render content as list if it contains commas, otherwise text */}
                                            <div className="text-sm text-neutral-300 mb-4">
                                                {item.content}
                                            </div>

                                            <div className="pt-3 border-t border-white/10">
                                                <div className="flex justify-between items-center text-xs mb-1.5 text-white/60">
                                                    <span className="flex items-center">
                                                        <Zap size={10} className="mr-1 text-primary" />
                                                        Proficiency
                                                    </span>
                                                    <span className="font-mono">{item.energy}%</span>
                                                </div>
                                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                        style={{ width: `${item.energy}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
