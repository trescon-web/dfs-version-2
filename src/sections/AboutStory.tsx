"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Cpu, Globe, Rocket, Landmark } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  icon: any;
  description: string;
  metrics: { label: string; value: string }[];
  connections: { label: string; angle: number; active: boolean }[];
}

export default function AboutStory() {
  const [activeTab, setActiveTab] = useState<number>(2); // Default to 2026

  const milestones: Milestone[] = [
    {
      year: "2004",
      title: "Establishment of DIFC",
      icon: Landmark,
      description: "Dubai International Financial Centre (DIFC) is established as an independent free zone with its own common-law judiciary. It acts as the gateway connecting Middle East, Africa, and South Asia (MEASA) with global capital markets in London and New York.",
      metrics: [
        { label: "Initial Firms", value: "19" },
        { label: "DIFC Asset Value", value: "$1.2B" }
      ],
      connections: [
        { label: "New York", angle: 180, active: true },
        { label: "London", angle: 135, active: true },
        { label: "Tokyo", angle: 45, active: false },
        { label: "Singapore", angle: 90, active: false }
      ]
    },
    {
      year: "2020",
      title: "Fintech Sandbox Growth",
      icon: Rocket,
      description: "DIFC launches advanced sandbox frameworks, accelerator programs, and the Future District Fund. Fostering localized neobanking licenses, virtual assets, and cross-border API standards that attract global innovators.",
      metrics: [
        { label: "Regulated Fintechs", value: "300+" },
        { label: "Sovereign Funding", value: "$500M+" }
      ],
      connections: [
        { label: "New York", angle: 180, active: true },
        { label: "London", angle: 135, active: true },
        { label: "Tokyo", angle: 45, active: true },
        { label: "Singapore", angle: 90, active: true }
      ]
    },
    {
      year: "2026",
      title: "Dubai Economic Agenda D33",
      icon: Cpu,
      description: "DIFC orchestrates Dubai Future Finance Week, aligning with Dubai's D33 Economic Agenda goal to double the economy's size by 2033. Dubai cements its rank among the top 4 global financial hubs, running tokenised assets and cognitive transaction corridors.",
      metrics: [
        { label: "D33 Fintech Firms", value: "1,500+" },
        { label: "Global Ranking Target", value: "Top 4" }
      ],
      connections: [
        { label: "New York", angle: 180, active: true },
        { label: "London", angle: 135, active: true },
        { label: "Tokyo", angle: 45, active: true },
        { label: "Singapore", angle: 90, active: true },
        { label: "Sovereign Wealth", angle: 0, active: true }
      ]
    }
  ];

  const currentMilestone = milestones[activeTab];

  return (
    <section id="about" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] ambient-glow glow-blue" style={{ opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            01 // Global Convergence
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
            DIFC: The Epicenter of Future Capital
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Connecting global markets and transforming digital economies. Empowered by the Dubai International Financial Centre (DIFC) to fuel the Dubai Economic Agenda D33.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Timeline Details */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            
            {/* Timeline Stepper Headers */}
            <div className="flex space-x-4 border-b border-border-dark pb-4">
              {milestones.map((milestone, idx) => (
                <button
                  key={milestone.year}
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col text-left py-2 px-4 rounded-lg transition-premium cursor-pointer ${
                    activeTab === idx
                      ? "bg-graphite/60 border border-purple-accent/30 text-white shadow-md shadow-purple-glow"
                      : "text-foreground/40 hover:text-foreground hover:bg-graphite/20"
                  }`}
                >
                  <span className="text-2xl font-black font-mono tracking-tight">{milestone.year}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-1">
                    {idx === 0 ? "Inception" : idx === 1 ? "Expansion" : "D33 Horizon"}
                  </span>
                </button>
              ))}
            </div>

            {/* Stepper Content */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-glow rounded-xl border border-purple-accent/35 animate-pulse">
                      <currentMilestone.icon className="w-6 h-6 text-purple-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                      {currentMilestone.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                    {currentMilestone.description}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border-dark">
                    {currentMilestone.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl md:text-3xl font-black font-mono tracking-tight text-gradient-purple">
                          {metric.value}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-foreground/40 font-bold mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Visual Connection Diagram */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-square rounded-full border border-border-dark flex items-center justify-center p-8 bg-slate-dark/30">
              
              {/* Animated pulses */}
              <div className="absolute inset-0 rounded-full border border-purple-accent/10 animate-pulse" />
              
              {/* Outer Orbit */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-border-dark/60 animate-[spin_60s_linear_infinite]" />

              {/* Central Hub: Dubai */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-midnight to-graphite border border-emerald-accent flex flex-col items-center justify-center shadow-lg shadow-emerald-accent/20">
                <Globe className="w-6 h-6 text-emerald-accent animate-spin-slow mb-1" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">DIFC</span>
                <span className="text-[8px] font-semibold text-emerald-accent">CORRIDOR</span>
              </div>

              {/* Orbiting Satellite Nodes */}
              {currentMilestone.connections.map((conn, idx) => {
                const distance = 140; // distance from center
                const rad = (conn.angle * Math.PI) / 180;
                const x = Math.cos(rad) * distance;
                const y = Math.sin(rad) * distance;

                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* SVG Connector Arc */}
                    <svg className="absolute top-1/2 left-1/2 overflow-visible pointer-events-none -z-10" style={{ transform: "translate(-50%, -50%)" }}>
                      <line
                        x1={0}
                        y1={0}
                        x2={-x}
                        y2={-y}
                        stroke={conn.active ? "#8b5cf6" : "rgba(255, 255, 255, 0.05)"}
                        strokeWidth={conn.active ? 1.5 : 1}
                        strokeDasharray={conn.active ? "none" : "3,3"}
                        className="transition-colors duration-700"
                      />
                      {conn.active && (
                        <circle r="3" fill="#10b981">
                          <animateMotion
                            path={`M ${-x} ${-y} L 0 0`}
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </svg>

                    <div
                      className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all duration-700 ${
                        conn.active
                          ? "bg-graphite border-purple-accent/40 text-white shadow-md shadow-purple-glow"
                          : "bg-midnight/30 border-border-dark/30 text-foreground/20"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${conn.active ? "bg-purple-accent animate-ping" : "bg-foreground/20"}`} />
                      <span>{conn.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
