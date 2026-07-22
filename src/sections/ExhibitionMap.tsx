"use client";
import { useState } from "react";
import { Map, Cpu, Zap, Landmark, Coffee, ArrowRight } from "lucide-react";

interface Zone {
  id: string;
  name: string;
  hall: string;
  icon: any;
  color: string;
  description: string;
  highlights: string[];
  demoSchedule: { time: string; event: string }[];
  svgCoords: { x: number; y: number; w: number; h: number; r?: number };
}

export default function ExhibitionMap() {
  const [selectedZone, setSelectedZone] = useState<string>("startup");

  const zones: Zone[] = [
    {
      id: "startup",
      name: "Startup Pavilion",
      hall: "Hall 2 // North Wing",
      icon: Zap,
      color: "#8b5cf6", // purple
      description: "Home to 120+ early-stage fintech disrupters from across 35 countries showcasing payments, blockchain, AI, and retail digital asset solutions.",
      highlights: ["SME Micro-Lending Platforms", "Biometric Checkout Systems", "Tokenized Equity Pools"],
      demoSchedule: [
        { time: "11:00", event: "Venture Pitch Battles (Heat A)" },
        { time: "14:00", event: "Seed Stage Demo Day Pitches" }
      ],
      svgCoords: { x: 20, y: 20, w: 140, h: 90, r: 8 }
    },
    {
      id: "ai-showcase",
      name: "AI & Innovation Showcase",
      hall: "Hall 2 // South Wing",
      icon: Cpu,
      color: "#10b981", // emerald
      description: "Experience cognitive computing integrations in real-time. Spotlighting corporate implementations and live algorithmic demonstrations.",
      highlights: ["Google DeepMind Predictive Models", "Nvidia GPU-Accelerated Portfolios", "AML Neural Scanners"],
      demoSchedule: [
        { time: "10:00", event: "AlphaFold Financial Modeling Q&A" },
        { time: "15:30", event: "Algorithmic Risk Clearing Demo" }
      ],
      svgCoords: { x: 20, y: 130, w: 140, h: 90, r: 8 }
    },
    {
      id: "country-zones",
      name: "Country Pavilions",
      hall: "Hall 3 // Central Hub",
      icon: Landmark,
      color: "#fbbf24", // gold
      description: "Dedicated country zones connecting trade bodies and fintech startups representing trade delegations from the UK, Singapore, USA, and GCC.",
      highlights: ["UK Innovate Trade Bridge", "MAS Singapore Fintech Sandbox", "Dubai Future District Fund Hub"],
      demoSchedule: [
        { time: "12:00", event: "GCC-Asia Capital Corridor Bilateral Panel" },
        { time: "16:00", event: "UK-UAE Fintech Deal-flow Mixer" }
      ],
      svgCoords: { x: 180, y: 20, w: 140, h: 200, r: 12 }
    },
    {
      id: "main-arena",
      name: "Main Arena & Stages",
      hall: "Hall 4 // Main Hall",
      icon: Map,
      color: "#8b5cf6",
      description: "The main theatre hosting executive keynotes, global panel releases, and policy announcements from regulators and central bankers.",
      highlights: ["2,500 Seat Amphitheatre", "Live Stream Broadcast Center", "VIP Regulatory Boardroom"],
      demoSchedule: [
        { time: "09:00", event: "Ministerial Welcome & Address" },
        { time: "13:30", event: "Stripe Keynote: Economy of the Web" }
      ],
      svgCoords: { x: 340, y: 20, w: 140, h: 110, r: 12 }
    },
    {
      id: "networking-lounge",
      name: "VIP Matchmaking Lounge",
      hall: "Hall 4 // West Wing",
      icon: Coffee,
      color: "#10b981",
      description: "An exclusive space dedicated to pre-scheduled institutional matches, investor speed-dating, and sovereign wealth allocation discussions.",
      highlights: ["Sovereign Fund Meeting Tables", "1-on-1 VC Speed-Dating Pods", "Executive Lounge Bar"],
      demoSchedule: [
        { time: "10:30", event: "VC Investor Speed Dating (Round 1)" },
        { time: "15:00", event: "Family Office Deal-flow Roundtable" }
      ],
      svgCoords: { x: 340, y: 150, w: 140, h: 70, r: 8 }
    }
  ];

  const currentZone = zones.find((z) => z.id === selectedZone) || zones[0];

  return (
    <section id="exhibition" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] ambient-glow glow-blue" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            07 // Exhibition Floor
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
            Interactive Summit Floor Plan
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Navigate the halls of Madinat Jumeirah. Locate the Startup Pavilion, AI Showcase, and VIP Lounges, and explore scheduled live demonstrations.
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Vector Floor Map (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl flex flex-col justify-between min-h-[380px]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Vector Floor Grid</span>
              <span className="text-[10px] font-mono text-emerald-accent bg-emerald-accent/10 px-2 py-0.5 rounded font-bold uppercase">
                Interactive Zone Map
              </span>
            </div>

            {/* Interactive SVG Floor Plan */}
            <div className="relative w-full flex items-center justify-center p-4 bg-midnight/40 rounded-xl border border-border-dark/60 aspect-[5/2.5]">
              <svg
                viewBox="0 0 500 240"
                className="w-full h-full max-w-[480px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background hall guidelines */}
                <rect x="10" y="10" width="480" height="220" rx="16" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                
                {/* Hall Connections */}
                <line x1="160" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />
                <line x1="160" y1="170" x2="180" y2="170" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />
                <line x1="320" y1="110" x2="340" y2="110" stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" />

                {/* Render Zones */}
                {zones.map((zone) => {
                  const isActive = zone.id === selectedZone;
                  return (
                    <g
                      key={zone.id}
                      onClick={() => setSelectedZone(zone.id)}
                      className="cursor-pointer group"
                    >
                      <rect
                        x={zone.svgCoords.x}
                        y={zone.svgCoords.y}
                        width={zone.svgCoords.w}
                        height={zone.svgCoords.h}
                        rx={zone.svgCoords.r || 8}
                        fill={isActive ? zone.color : "rgba(18, 18, 23, 0.45)"}
                        fillOpacity={isActive ? 0.15 : 0.8}
                        stroke={isActive ? zone.color : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth={isActive ? 2 : 1}
                        className="transition-all duration-500 ease-out group-hover:stroke-white/30"
                      />
                      {/* Interactive blinking node */}
                      {isActive && (
                        <circle
                          cx={zone.svgCoords.x + zone.svgCoords.w - 12}
                          cy={zone.svgCoords.y + 12}
                          r="3"
                          fill={zone.color}
                          className="animate-ping"
                        />
                      )}
                      {/* Label Text */}
                      <text
                        x={zone.svgCoords.x + 12}
                        y={zone.svgCoords.y + 24}
                        fill={isActive ? "#ffffff" : "rgba(255, 255, 255, 0.45)"}
                        fontSize="9"
                        fontWeight="bold"
                        className="font-sans transition-colors duration-500 select-none uppercase tracking-wider"
                      >
                        {zone.name.split(" ")[0]}
                      </text>
                      <text
                        x={zone.svgCoords.x + 12}
                        y={zone.svgCoords.y + 36}
                        fill={isActive ? zone.color : "rgba(255, 255, 255, 0.25)"}
                        fontSize="7"
                        className="font-mono transition-colors duration-500 select-none uppercase"
                      >
                        {zone.hall.split(" // ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            {/* Guide Info */}
            <div className="flex space-x-6 text-[10px] font-mono text-foreground/45 mt-4 pt-4 border-t border-border-dark/60">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded bg-purple-accent" />
                <span>Hall 2 & 4 (Specialized Hubs)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded bg-gold-accent" />
                <span>Hall 3 (Central Trade Hub)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Zone Detail Panel (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-6">
              
              {/* Header */}
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-graphite/45 border border-border-dark rounded-xl text-purple-accent">
                  <currentZone.icon className="w-6 h-6" style={{ color: currentZone.color }} />
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-foreground/40 font-bold">
                    {currentZone.hall}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                    {currentZone.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-foreground/60 leading-relaxed">
                {currentZone.description}
              </p>

              {/* Highlights */}
              <div className="pt-4 border-t border-border-dark/40">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">Key Features</h4>
                <ul className="space-y-2 text-xs">
                  {currentZone.highlights.map((h) => (
                    <li key={h} className="flex items-center space-x-2 text-foreground/80">
                      <span className="w-1 h-1 rounded-full bg-purple-accent" style={{ backgroundColor: currentZone.color }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Live Demonstrations */}
              <div className="pt-4 border-t border-border-dark/40">
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">Demo Schedule</h4>
                <div className="space-y-2.5">
                  {currentZone.demoSchedule.map((demo) => (
                    <div
                      key={demo.event}
                      className="flex items-center justify-between p-2 rounded bg-graphite/40 border border-border-dark text-[11px]"
                    >
                      <span className="font-mono text-white font-bold">{demo.time}</span>
                      <span className="text-foreground/75 font-semibold text-right max-w-[70%]">{demo.event}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Matchmaking Action */}
            <div className="pt-8 mt-8 border-t border-border-dark/40">
              <button
                onClick={() => {
                  alert(`Meeting matchmaking algorithm has filtered companies in ${currentZone.name}. Connect with delegation rep via chat.`);
                }}
                className="w-full bg-graphite/45 hover:bg-graphite/80 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border border-border-dark transition-premium"
              >
                <span>Browse Companies in {currentZone.name.split(" ")[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
