"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  tabLabel: string;
  title: string;
  desc: string;
  image: string;
}

export default function AboutExperience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      tabLabel: "Extended Programme",
      title: "Extended Programme – strategic dialogue, global impact",
      desc: "Engage with global leaders and senior decision-makers across finance, technology, and policy. Each session delivers actionable insights on emerging trends, regulatory evolution, and market-shaping innovations. The extended programme is where influence meets opportunity.",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Extended-programme-global-impact-img.webp",
    },
    {
      tabLabel: "Exhibition Arena",
      title: "Exhibition Arena – the innovation showcase",
      desc: "Experience breakthrough technologies and solutions across start-up arenas and country pavilions. Engage directly with innovators, explore market-ready developments, and discover platforms driving digital transformation.",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Exhibition-arena-innovation-img.webp",
    },
    {
      tabLabel: "FinTech World Cup",
      title: "FinTech World Cup Grand Finale",
      desc: "Watch the world’s top FinTech start-ups compete on the Innovation Stage on Day 2 of the Summit, showcasing transformative solutions to a global audience of investors, regulators, and industry leaders. Winners get access to investors, mentorship, and international exposure to accelerate their journey.",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/02/Fintech-world-cup-grand-finale-img.webp",
    },
  ];

  const currentExp = experiences[activeTab];

  return (
    <section className="relative py-28 bg-[#02090f] border-t border-white/5 overflow-hidden flex items-center justify-center">
      
      {/* Explicit style overrides to defeat global text overrides on dark sections */}
      <style dangerouslySetInnerHTML={{__html: `
        .exp-head-title {
          color: #ffffff !important;
        }
        .exp-head-desc {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .tab-btn-active {
          color: #12e8e8 !important;
          border-color: #12e8e8 !important;
        }
        .tab-btn-inactive {
          color: rgba(255, 255, 255, 0.5) !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .exp-tab-title {
          color: #ffffff !important;
        }
        .exp-tab-desc {
          color: rgba(255, 255, 255, 0.75) !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
            THE SUMMIT ATMOSPHERE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight exp-head-title">
            The Dubai FinTech Summit experience
          </h2>
          <p className="text-sm md:text-base leading-relaxed font-semibold exp-head-desc">
            A unified platform bringing strategic dialogue, breakthrough innovation, and global FinTech talent together.
          </p>
        </div>

        {/* Tab Selector Headers */}
        <div className="flex justify-center border-b border-white/10 pb-px w-full max-w-2xl mx-auto">
          <div className="flex space-x-2 md:space-x-8">
            {experiences.map((exp, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-4 text-sm md:text-base font-bold tracking-wide border-b-2 transition-all duration-300 outline-none cursor-pointer ${
                    isActive ? "tab-btn-active" : "tab-btn-inactive hover:color-white/80"
                  }`}
                >
                  {exp.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="w-full min-h-[380px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center text-left w-full"
            >
              
              {/* Left Column: Text Panel */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight exp-tab-title">
                  {currentExp.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed font-semibold exp-tab-desc">
                  {currentExp.desc}
                </p>
              </div>

              {/* Right Column: Dynamic Image Showcase */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/5 aspect-16/10 group">
                  <img
                    src={currentExp.image}
                    alt={currentExp.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
