"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Cpu, Code2, LineChart, ShieldCheck } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  metric: string;
  metricLabel: string;
  type: "code" | "chart" | "graph";
  content: any; // data or code snippet
}

export default function InnovationShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const cases: CaseStudy[] = [
    {
      id: "vara",
      title: "Sovereign Web3 Sandbox (VARA)",
      subtitle: "Regulatory rules configured directly as software code.",
      icon: ShieldCheck,
      metric: "12 Days",
      metricLabel: "Average Sandbox Audits",
      type: "code",
      content: `// Dubai VARA Smart Compliance API
const VaraSandbox = require('@vara/sandbox');

async function approveSandboxAssets(startupId) {
  const audit = await VaraSandbox.runAutomatedCompliance(startupId, {
    liquidityBuffer: 1.25, // 125% asset coverage
    coldStorageRatio: 0.90, // 90% in secure vault
    amlScanDepth: 4 // neural search layers
  });
  
  if (audit.score >= 95) {
    return await VaraSandbox.issueTemporaryLicense(startupId);
  }
}`
    },
    {
      id: "risk",
      title: "Cognitive Clearing Sandbox",
      subtitle: "Neural networks executing real-time stress clearing tests.",
      icon: Cpu,
      metric: "50k/sec",
      metricLabel: "Simulated Transactions",
      type: "chart",
      content: [
        { label: "Stress A (Liquidity Drop)", value: 92, status: "stable" },
        { label: "Stress B (High Volatility)", value: 87, status: "warning" },
        { label: "Stress C (Cognitive Threat)", value: 98, status: "defended" }
      ]
    },
    {
      id: "corridor",
      title: "Zero-Latency Liquidity Corridor",
      subtitle: "Cross-border sovereign currency corridors routing instantly.",
      icon: LineChart,
      metric: "0.02s",
      metricLabel: "Average Payout Time",
      type: "graph",
      content: {
        points: [30, 45, 60, 40, 75, 95, 120],
        labels: ["Dubai", "Singapore", "London", "Tokyo", "New York"]
      }
    }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = 360;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setActiveSlide(Math.max(0, activeSlide - 1));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setActiveSlide(Math.min(cases.length - 1, activeSlide + 1));
    }
  };

  return (
    <section className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[20%] left-0 w-[450px] h-[450px] ambient-glow glow-blue" style={{ opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
              09 // Innovation Lab
            </span>
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-gradient-white mt-4">
              Real-world Fintech Sandbox Case Studies
            </h2>
            <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
              Explore concrete examples of modern technology sandboxes engineered, tested, and approved inside Dubai's future finance accelerators.
            </p>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 rounded-full bg-graphite border border-border-dark text-foreground/60 hover:text-white hover:border-purple-accent/40 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 rounded-full bg-graphite border border-border-dark text-foreground/60 hover:text-white hover:border-purple-accent/40 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Snap scroll horizontal container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((c) => (
            <div
              key={c.id}
              className="flex-shrink-0 w-full md:w-[650px] snap-start glass-panel p-8 rounded-2xl border border-border-dark flex flex-col md:flex-row gap-8 min-h-[380px]"
            >
              {/* Left detail card */}
              <div className="md:w-[45%] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-3.5 bg-purple-glow rounded-xl border border-purple-accent/20 w-fit text-purple-accent">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {c.subtitle}
                  </p>
                </div>

                {/* Metric */}
                <div className="pt-6 mt-6 border-t border-border-dark/60">
                  <div className="text-3xl font-black font-mono text-gradient-purple leading-none">
                    {c.metric}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold block mt-1.5">
                    {c.metricLabel}
                  </span>
                </div>
              </div>

              {/* Right Interactive Mockup (Code Editor or Infographics) */}
              <div className="md:w-[55%] bg-slate-dark/80 rounded-xl border border-border-dark/60 p-5 flex flex-col justify-center font-mono text-xs overflow-hidden min-h-[220px]">
                
                {/* 1. Code Editor view */}
                {c.type === "code" && (
                  <pre className="text-[10px] text-purple-accent/90 leading-relaxed overflow-x-auto whitespace-pre">
                    <code>{c.content}</code>
                  </pre>
                )}

                {/* 2. Stress Test Bars view */}
                {c.type === "chart" && (
                  <div className="space-y-4 w-full">
                    {c.content.map((bar: any) => (
                      <div key={bar.label} className="space-y-1.5">
                        <div className="flex justify-between text-[9px] font-bold text-foreground/60">
                          <span>{bar.label}</span>
                          <span className={bar.status === "stable" ? "text-emerald-accent" : "text-purple-accent"}>
                            {bar.value}% // {bar.status}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-graphite rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${bar.value}%`,
                              backgroundColor: bar.status === "stable" ? "#10b981" : "#8b5cf6"
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Transaction corridor graph */}
                {c.type === "graph" && (
                  <div className="flex flex-col space-y-4 w-full justify-between h-full py-2">
                    <span className="text-[9px] text-foreground/45 uppercase tracking-wider">Corridor Volume Speed</span>
                    
                    {/* SVG mini trend */}
                    <svg className="w-full h-16" viewBox="0 0 100 40">
                      <path
                        d="M 5 35 Q 25 28, 50 15 T 95 5"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="1.5"
                      />
                      <circle cx="5" cy="35" r="1.5" fill="#10b981" />
                      <circle cx="50" cy="15" r="1.5" fill="#10b981" />
                      <circle cx="95" cy="5" r="1.5" fill="#10b981" className="animate-ping" />
                    </svg>

                    <div className="flex justify-between text-[8px] text-foreground/40 font-mono">
                      <span>{c.content.labels[0]}</span>
                      <span>{c.content.labels[1]}</span>
                      <span>{c.content.labels[4]}</span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

