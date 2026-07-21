"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ConnectingCapitals() {
  const [activeStatIdx, setActiveStatIdx] = useState(0);

  const pillars = [
    {
      eyebrow: "CROSS-BORDER ALIGNMENT",
      title: "Global Regulatory Hub",
      description: "Uniting central bank governors, financial authorities, and policymakers to synchronize international regulatory frameworks.",
      icon: (
        <svg className="w-6 h-6 text-[#12E9E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19h16"/>
          <path d="M4 15h16"/>
          <path d="M4 11h16"/>
          <path d="M2 8l10-6 10 6Z"/>
          <path d="M6 11v4"/>
          <path d="M10 11v4"/>
          <path d="M14 11v4"/>
          <path d="M18 11v4"/>
        </svg>
      )
    },
    {
      eyebrow: "EAST-WEST BRIDGING",
      title: "Strategic Financial Corridors",
      description: "Connecting institutional capital allocators, sovereign wealth funds, and high-growth markets across continents.",
      icon: (
        <svg className="w-6 h-6 text-[#12E9E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>
      )
    },
    {
      eyebrow: "NEXT-GEN INFRASTRUCTURE",
      title: "Digital Money & Tokenisation",
      description: "Accelerating institutional adoption of CBDCs, tokenised real-world assets, and instant cross-border settlement.",
      icon: (
        <svg className="w-6 h-6 text-[#12E9E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      eyebrow: "INSTITUTIONAL CAPITAL",
      title: "Sovereign & VC Allocation",
      description: "Matchmaking top global venture funds, family offices, and institutional investors with breakthrough digital platforms.",
      icon: (
        <svg className="w-6 h-6 text-[#12E9E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      eyebrow: "FUTURE CONVERGENCE",
      title: "C-Suite & Founder Leadership",
      description: "A premier assembly of founders, CEOs, and pioneers driving scale across the global financial ecosystem.",
      icon: (
        <svg className="w-6 h-6 text-[#12E9E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1v10"/>
          <path d="M19 8a7 7 0 0 1-14 0"/>
          <rect x="9" y="5" width="6" height="8" rx="3"/>
          <path d="M12 18v5"/>
          <path d="M8 23h8"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIdx((prev) => (prev + 1) % pillars.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="capitals" className="relative py-16 md:py-20 overflow-hidden bg-[#030d16] border-t border-white/5 flex items-center w-full">
      
      {/* Explicit style overrides to defeat global theme CSS color rules */}
      <style dangerouslySetInnerHTML={{__html: `
        #capitals h2 {
          color: #ffffff !important;
        }
        #capitals h2 span {
          color: #12E9E9 !important;
        }
        #capitals p {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        #capitals a span {
          color: #ffffff !important;
        }
        #capitals h3 {
          color: #ffffff !important;
        }
        #capitals p.stat-desc {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}} />

      {/* Background graphic: Glowing cyan chevron graphic */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/global_capitals_chevron_bg.png"
          alt="Connecting Capitals Chevron Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Subtle gradient overlay for legibility while keeping full chevron glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02090f]/70 via-transparent to-[#02090f]/30 pointer-events-none z-0" />

      {/* Decorative linear shine */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#12E9E9]/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6 text-left space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-[2px] bg-[#12E9E9] shrink-0" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#12E9E9] uppercase" style={{ color: "#12E9E9" }}>
                  A GLOBAL FINANCIAL CONVERGENCE
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-tight text-white" style={{ color: "#ffffff" }}>
                Connecting <br />
                the world's <br />
                <span style={{ color: "#12E9E9" }}>financial capitals</span>
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed font-semibold text-white/85 max-w-xl" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
                CEOs, regulators, founders, investors and policymakers from every major financial hub converge in Dubai to shape the next era of global finance.
              </p>
            </div>

            {/* Custom CTA Capsule Button */}
            <a
              href="#network"
              className="btn-unified mt-6 group"
            >
              <span>Explore Global Network</span>
              <span className="text-xs transform group-hover:translate-x-1.5 transition-transform">→</span>
            </a>
          </div>

          {/* Right Column: Sliding Pillar Card (without big numbers) */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end relative z-10 w-full">
            
            {/* Auto-sliding premium card */}
             <div className="w-full max-w-[440px] bg-gradient-to-b from-[#061f2e]/90 to-[#030d16]/95 border border-white/10 p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md min-h-[340px] md:min-h-[360px]">
              
              {/* Corner decorative light path */}
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-[#12E9E9]/10 to-transparent rounded-bl-full pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStatIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full space-y-6"
                >
                  {/* Top: Icon & Pillar counter */}
                  <div className="flex items-start justify-between">
                    <div className="p-3.5 bg-[#12E9E9]/10 border border-[#12E9E9]/20 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                      {pillars[activeStatIdx].icon}
                    </div>
                    
                    {/* Active index counter */}
                    <span className="text-[10px] font-mono font-bold text-white/30 tracking-wider" style={{ color: "rgba(255, 255, 255, 0.3)" }}>
                      PILLAR {String(activeStatIdx + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Center: Eyebrow, Title & Description without big numbers */}
                  <div className="space-y-2.5 text-left">
                    <span className="font-mono font-bold tracking-widest text-[#12E9E9] uppercase text-xs block" style={{ color: "#12E9E9" }}>
                      {pillars[activeStatIdx].eyebrow}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight" style={{ color: "#ffffff" }}>
                      {pillars[activeStatIdx].title}
                    </h3>

                    <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed pt-1 stat-desc" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      {pillars[activeStatIdx].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom: Sliding indicators */}
              <div className="flex items-center space-x-2.5 pt-4 border-t border-white/5 mt-4">
                {pillars.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStatIdx(idx)}
                    className="h-1.5 rounded-full transition-all duration-500 cursor-pointer"
                    style={{
                      width: activeStatIdx === idx ? "28px" : "6px",
                      backgroundColor: activeStatIdx === idx ? "#12E9E9" : "rgba(255, 255, 255, 0.15)"
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
