"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, Clock, MapPin, Play } from "lucide-react";

export default function AgendaPreview() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  const days = [
    {
      label: "Day 01",
      date: "02 November 2026",
      sessions: [
        {
          time: "09:00 - 10:00",
          title: "Inaugural Keynote: Shaping the D33 Agenda",
          speaker: "H.E. Governor of Central Bank & DIFC Board Directors",
          desc: "An analytical opening statement outlining Dubai's strategic initiatives to double economic footprints via cross-border sandboxes, digital sovereign clearing rails, and international VC integrations.",
          track: "POLICY // KEYNOTE",
        },
        {
          time: "10:30 - 11:30",
          title: "Decentralized Settlement & Institutional Liquidity",
          speaker: "Heads of Digital Assets at Barclays, CBD, & Goldman Sachs",
          desc: "A panel discussion assessing real-world asset (RWA) tokenization, institutional yield generation protocols, and smart-contract settlement architectures.",
          track: "WEALTH // DEFI",
        },
        {
          time: "12:00 - 13:00",
          title: "Systemic Stability & Regulatory AI Frameworks",
          speaker: "Ministers of Digital Economy, UAE & SEC Advisory Chairs",
          desc: "Establishing unified audit guidelines for algorithmic credit scoring, fraud detection automation vectors, and compliance ledger integrations.",
          track: "REGULATION // AI",
        },
      ],
    },
    {
      label: "Day 02",
      date: "03 November 2026",
      sessions: [
        {
          time: "09:30 - 10:30",
          title: "Wholesale CBDCs and Cross-Border Rails",
          speaker: "Sovereign Mint Advisors & Central Bankers",
          desc: "Evaluating bilateral sovereign payment ledgers, atomic settlement models, and the scalability constraints of wholesale digital currencies.",
          track: "SETTLEMENT // SOVEREIGN",
        },
        {
          time: "11:00 - 12:00",
          title: "Generative AI in High-Frequency Trading",
          speaker: "Founders of Neural Finance Labs & Quantitative Fund Chairs",
          desc: "An analysis of cognitive architectures deploying machine learning for predictive real-time risk hedging in volatile international markets.",
          track: "COGNITIVE // HFT",
        },
        {
          time: "13:30 - 14:30",
          title: "Global Sandboxes & Venture Capital Allocations",
          speaker: "Partner at Sequoia, Softbank & Middle East VCs",
          desc: "Exploring allocation metrics for next-gen fintech rails, Web3 protocols, and the capital injection strategies for early-stage ecosystems.",
          track: "CAPITAL // ECOSYSTEM",
        },
      ],
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedSession(expandedSession === idx ? null : idx);
  };

  return (
    <section id="agenda" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 flex flex-col items-start w-full">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>AGENDA PREVIEW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Summit schedule preview
          </h2>
          <p className="text-base text-white/60 leading-relaxed font-medium">
            Review our curated preview timeline of keynote addresses, panel discussions, and closed-door regulatory assemblies.
          </p>
        </div>

        {/* Day Selectors */}
        <div className="flex space-x-4 border-b border-white/5 pb-4 mb-8">
          {days.map((day, idx) => {
            const isActive = activeDay === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveDay(idx);
                  setExpandedSession(null);
                }}
                className={`px-6 py-3 rounded-lg text-sm font-bold tracking-wider uppercase transition-premium cursor-pointer ${
                  isActive
                    ? "bg-white text-midnight font-bold shadow-lg shadow-white/5"
                    : "bg-graphite/40 border border-white/5 text-white/50 hover:text-white"
                }`}
              >
                <span>{day.label}</span>
                <span className="block text-[9px] font-mono opacity-60 font-semibold tracking-normal mt-0.5">
                  {day.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline Sessions List */}
        <div className="space-y-4 text-left">
          {days[activeDay].sessions.map((session, idx) => {
            const isExpanded = expandedSession === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-premium ${
                  isExpanded
                    ? "bg-[#12343f]/30 border-electric-turquoise/40 shadow-lg shadow-electric-turquoise/5"
                    : "bg-[#12343f]/10 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Header trigger */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-6 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="space-y-2 max-w-[85%]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-mono text-xs font-bold text-electric-turquoise flex items-center shrink-0">
                        <Clock className="w-3.5 h-3.5 mr-1.5" />
                        {session.time}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase font-bold">
                        {session.track}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {session.title}
                    </h3>
                    <p className="text-xs text-white/60 font-medium">
                      {session.speaker}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-white/40 group-hover:text-white transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-electric-turquoise" : ""
                    }`}
                  />
                </div>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4">
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                          {session.desc}
                        </p>
                        <div className="flex items-center space-x-2 text-[10px] font-mono text-electric-turquoise font-bold uppercase">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Venue: Main Stage Arena</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
