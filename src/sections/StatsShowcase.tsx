"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Globe2, Briefcase } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.min(end, 60);
    const frameDuration = (duration * 1000) / totalFrames;
    const increment = Math.ceil(end / totalFrames);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-black tracking-tight text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsShowcase() {
  const [activeDemographic, setActiveDemographic] = useState<number | null>(null);

  const demographics = [
    { label: "C-Level Executives", percentage: 45, color: "#8b5cf6", angleStart: 0, angleEnd: 162 },
    { label: "Investors & VCs", percentage: 30, color: "#10b981", angleStart: 162, angleEnd: 270 },
    { label: "Fintech Founders", percentage: 25, color: "#fbbf24", angleStart: 270, angleEnd: 360 }
  ];

  // SVG dimensions for Donut
  const radius = 60;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] ambient-glow glow-blue" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
              02 // Core Metrics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
              The Epicenter of Financial Momentum
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
            Quantifiable global impact, uniting sovereign wealth with emerging infrastructure to trigger modern partnerships.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Counters Row (6 columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
              <Users className="w-5 h-5 text-purple-accent" />
              <div>
                <div className="flex items-baseline space-x-1">
                  <AnimatedCounter value={10000} suffix="+" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mt-1">
                  Global Attendees
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
              <Globe2 className="w-5 h-5 text-emerald-accent" />
              <div>
                <div className="flex items-baseline space-x-1">
                  <AnimatedCounter value={120} suffix="+" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mt-1">
                  Countries Represented
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
              <Briefcase className="w-5 h-5 text-purple-accent" />
              <div>
                <div className="flex items-baseline space-x-1">
                  <AnimatedCounter value={300} suffix="+" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mt-1">
                  Venture Investors
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
              <TrendingUp className="w-5 h-5 text-emerald-accent" />
              <div>
                <div className="flex items-baseline space-x-1">
                  <AnimatedCounter value={12} suffix="B+" />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mt-1">
                  Capital Represented
                </div>
              </div>
            </div>

            {/* Line Chart: Investment Growth (Col span 4) */}
            <div className="col-span-2 md:col-span-4 glass-card p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Summit Deal-flow Momentum</h3>
                  <p className="text-xs text-foreground/40 mt-1">Total capital brokered and invested year-over-year</p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-accent bg-emerald-accent/10 px-2.5 py-1 rounded">
                  +180% Growth
                </span>
              </div>

              {/* Vector SVG Line Graph */}
              <div className="relative h-48 w-full mt-6">
                <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                  {/* Gradient Area Fill */}
                  <path
                    d="M 0 130 Q 125 110, 250 70 T 500 20 L 500 150 L 0 150 Z"
                    fill="url(#chart-glow)"
                  />

                  {/* Curved Trend Line */}
                  <path
                    d="M 0 130 Q 125 110, 250 70 T 500 20"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Hotspots */}
                  <circle cx="0" cy="130" r="4" fill="#8b5cf6" />
                  <circle cx="125" cy="115" r="4" fill="#8b5cf6" />
                  <circle cx="250" cy="70" r="5" fill="#10b981" className="animate-pulse" />
                  <circle cx="500" cy="20" r="5" fill="#10b981" className="animate-pulse" />
                </svg>

                {/* X-Axis labels */}
                <div className="flex justify-between text-[10px] font-mono text-foreground/30 mt-4">
                  <span>2022 ($2.5B)</span>
                  <span>2023 ($4.1B)</span>
                  <span>2024 ($7.2B)</span>
                  <span>2026 ($12.5B)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Demographic Donut Chart (4 columns) */}
          <div className="lg:col-span-4 glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Attendee Demographics</h3>
              <p className="text-xs text-foreground/40 mt-1">Profile breakdown of summit delegates</p>
            </div>

            {/* Donut rendering */}
            <div className="flex items-center justify-center my-8 relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(255, 255, 255, 0.03)"
                  strokeWidth={strokeWidth}
                />
                
                {/* Sector 1: C-Level */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="#8b5cf6"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (0.45 * circumference)}
                  className="transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveDemographic(0)}
                  onMouseLeave={() => setActiveDemographic(null)}
                />

                {/* Sector 2: Investors */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (0.3 * circumference)}
                  style={{
                    transformOrigin: "80px 80px",
                    transform: "rotate(162deg)"
                  }}
                  className="transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveDemographic(1)}
                  onMouseLeave={() => setActiveDemographic(null)}
                />

                {/* Sector 3: Founders */}
                <circle
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke="#fbbf24"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (0.25 * circumference)}
                  style={{
                    transformOrigin: "80px 80px",
                    transform: "rotate(270deg)"
                  }}
                  className="transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveDemographic(2)}
                  onMouseLeave={() => setActiveDemographic(null)}
                />
              </svg>

              {/* Central Label */}
              <div className="absolute text-center">
                <span className="text-2xl font-black font-mono text-white">
                  {activeDemographic !== null ? `${demographics[activeDemographic].percentage}%` : "10k"}
                </span>
                <p className="text-[9px] uppercase tracking-wider text-foreground/40 font-bold">
                  {activeDemographic !== null ? demographics[activeDemographic].label.split(" ")[0] : "Delegates"}
                </p>
              </div>
            </div>

            {/* Legend links */}
            <div className="space-y-3">
              {demographics.map((demo, idx) => (
                <div
                  key={demo.label}
                  onMouseEnter={() => setActiveDemographic(idx)}
                  onMouseLeave={() => setActiveDemographic(null)}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors cursor-pointer ${
                    activeDemographic === idx ? "bg-graphite/40" : ""
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: demo.color }} />
                    <span className="text-xs text-foreground/75 font-semibold">{demo.label}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">{demo.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
