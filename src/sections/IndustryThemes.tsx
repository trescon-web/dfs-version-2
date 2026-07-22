"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function IndustryThemes() {
  const [activeTab, setActiveTab] = useState(0);

  const themes = [
    {
      icon: Brain,
      title: "AI & Cognitive Finance",
      tag: "TRACK 01 // COGNITIVE",
      desc: "Delve into the integration of Generative AI, machine learning predictive risk assessment, automated credit models, and algorithmic trading platforms driving the next generation of asset management.",
      points: [
        "LLMs in retail banking customer queries",
        "AI-driven financial fraud detection models",
        "Algorithmic market making protocols",
        "Autonomous regulatory compliance audits",
      ],
    },
    {
      icon: Zap,
      title: "Decentralized Finance (DeFi)",
      tag: "TRACK 02 // LIQUIDITY",
      desc: "Explore smart-contract settlement systems, institutional Web3 liquidity vaults, real-world asset tokenization, and digital sovereign payment rails redefining transacting protocols.",
      points: [
        "RWA Tokenization: Real estate & bonds",
        "Cross-border automated market makers",
        "Zero-knowledge proof privacy wrappers",
        "Institutional yield generation models",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Global Policy & Regs",
      tag: "TRACK 03 // COMPLIANCE",
      desc: "Establish compliance blueprints for emerging technology frameworks, data governance standards, cross-border payments, and unified licensing regimes.",
      points: [
        "Cryptocurrency regulatory frameworks",
        "Cross-border sandbox cooperation",
        "Data sovereignty and cloud compliance",
        "Anti-money laundering vector checks",
      ],
    },
    {
      icon: Cpu,
      title: "Digital Sovereign Rails",
      tag: "TRACK 04 // SETTLEMENT",
      desc: "Analyse real-time gross settlement systems, central bank digital currencies (CBDCs), instant clearing integrations, and the hardware infrastructures underpinning them.",
      points: [
        "Wholesale CBDC cross-border settlement",
        "Real-time retail gross payment rails",
        "Interoperability between sovereign ledgers",
        "High-performance cryptographic hardware",
      ],
    },
  ];

  return (
    <section id="themes" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 max-w-2xl">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUMMIT TAXONOMY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Core industry themes
          </h2>
          <p className="text-base text-white/60 leading-relaxed font-medium">
            Discover the technical tracks, roundtables, and policy panels shaping the D33 economic agenda and global financial standards.
          </p>
        </div>

        {/* Dynamic Theme console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical tab list */}
          <div className="lg:col-span-4 flex flex-col space-y-3 w-full">
            {themes.map((t, idx) => {
              const TabIcon = t.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-4 p-5 rounded-xl border text-left transition-premium cursor-pointer ${
                    isActive
                      ? "bg-[#12343f]/40 border-electric-turquoise/40 text-white shadow-lg shadow-electric-turquoise/5"
                      : "bg-[#12343f]/10 border-white/5 text-white/50 hover:text-white hover:border-white/10"
                  }`}
                >
                  <TabIcon className={`w-5 h-5 ${isActive ? "text-electric-turquoise" : "text-white/40"}`} />
                  <span className="font-sans font-bold text-sm tracking-tight">{t.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Card */}
          <div className="lg:col-span-8 h-[380px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-[#12343f]/20 flex flex-col justify-between text-left select-none"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-mono text-[10px] tracking-widest text-electric-turquoise font-bold uppercase">
                    {themes[activeTab].tag}
                  </span>
                  <span className="font-mono text-xs text-white/40 font-bold">
                    Theme Details
                  </span>
                </div>

                {/* Core content */}
                <div className="my-auto space-y-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {themes[activeTab].title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium">
                    {themes[activeTab].desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 pt-4 border-t border-white/5">
                  {themes[activeTab].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center space-x-2 text-xs text-white/50 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-turquoise shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
