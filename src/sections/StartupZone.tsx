"use client";
import { motion } from "framer-motion";
import { Sparkles, Cpu } from "lucide-react";

export default function StartupZone() {
  const startups = [
    "[ NeuroPay ]",
    "[ SovereignRail ]",
    "[ AssetLedger ]",
    "[ LiquidityX ]",
    "[ CognitiveBank ]",
    "[ ZK-Trust ]",
    "[ QuantHedger ]",
    "[ AtomicClear ]",
  ];

  // Repeat items for seamless infinite loop scroll
  const repeatedStartups = [...startups, ...startups, ...startups];

  return (
    <section id="startups" className="relative py-20 overflow-hidden bg-midnight border-t border-white/5 select-none">

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center space-y-6 mb-12">
        <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
          <Cpu className="w-3.5 h-3.5" />
          <span>STARTUP ZONE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-[800] tracking-[-0.03em] text-gradient-white">
          The epicentre of fintech startups
        </h2>
        <p className="text-xs md:text-sm text-white/50 max-w-xl leading-relaxed">
          Convene with over 100+ hand-selected early and growth-stage companies demonstrating disruptive rails across artificial intelligence and Web3.
        </p>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="marquee-container relative py-4 border-y border-white/5 bg-[#12343f]/10 backdrop-blur-sm">
        {/* Left/Right blur mask layers for high-end cinematic fading edge */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {repeatedStartups.map((st, idx) => (
            <div
              key={idx}
              className="font-mono text-xs md:text-sm font-bold tracking-widest text-white/40 hover:text-electric-turquoise hover:scale-105 transition-all duration-300 px-6 py-2 select-none"
            >
              {st}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

