"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Handshake, Lightbulb, MessageSquare, BarChart } from "lucide-react";

export default function DFFWOverview() {
  const objectives = [
    {
      desc: "Showcase Dubai's leadership in financial innovation and policy.",
      icon: Lightbulb
    },
    {
      desc: "Facilitate cross-sector and cross-border collaboration.",
      icon: Handshake
    },
    {
      desc: "Drive meaningful conversations around regulation, investment, and impact.",
      icon: MessageSquare
    },
    {
      desc: "Support the growth of emerging financial technologies and ecosystems.",
      icon: BarChart
    },
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    initial: { y: 25, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative py-24 bg-white border-t border-b border-slate-100">
      
      {/* Local style overrides to defeat global overrides on text color */}
      <style dangerouslySetInnerHTML={{__html: `
        .dffw-sec-title {
          color: #0f172a !important;
        }
        .dffw-sec-desc {
          color: #475569 !important;
        }
        .dffw-sec-subtitle {
          color: #64748b !important;
        }
        .dffw-card-title {
          color: #0f172a !important;
        }
        .dffw-card-desc {
          color: #475569 !important;
        }
        .obj-card-title {
          color: #ffffff !important;
          transition: color 0.3s ease;
        }
        .group:hover .obj-card-title {
          color: #0b141d !important;
        }
      `}} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-24">
        
        {/* Section 1: Overview split with featured image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-center">
          
          {/* Left Column: Premium Featured Image */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[32px] shadow-2xl border border-slate-100 aspect-[4/3] group cursor-default"
            >
              <img 
                src={getAssetPath("/images/dfs_shaping_markets.jpg")} 
                alt="Dubai Future Finance Week Crowd" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 text-xs font-mono font-bold tracking-widest text-white/90 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase">
                Live from Dubai
              </span>
            </motion.div>
          </div>

          {/* Right Column: Title, Description and Theme/Vision */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488] uppercase block">
                THE NEXT ERA OF FINANCE
              </span>
              <h2 className="text-3xl md:text-5xl font-[800] tracking-tight leading-tight dffw-sec-title">
                Shaping Global Markets
              </h2>
              <p className="text-sm md:text-base leading-relaxed font-semibold dffw-sec-desc">
                Dubai Future Finance Week is a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by the Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.
              </p>
            </div>

            {/* Theme & Vision Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Theme */}
              <div className="relative bg-slate-50 border border-slate-200/60 p-6 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold dffw-card-title">Theme</h3>
                  <p className="text-xs leading-relaxed font-semibold dffw-card-desc">
                    Finance Reimagined: Where innovation meets policy and purpose
                  </p>
                </div>
              </div>

              {/* Card 2: Vision */}
              <div className="relative bg-slate-50 border border-slate-200/60 p-6 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold dffw-card-title">Vision</h3>
                  <p className="text-xs leading-relaxed font-semibold dffw-card-desc">
                    To position Dubai as the global benchmark for shaping the future of finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Objectives - Dark Metric-Style Cards */}
        <div className="w-full relative">
          
          <div className="space-y-4 mb-12 relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488] uppercase block">
              STRATEGIC FOCUS
            </span>
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight leading-tight dffw-sec-title">
              Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-[#0b141d] rounded-3xl p-8 overflow-hidden flex flex-col justify-between min-h-[280px] group border border-white/5 hover:bg-[#12e9e9] hover:border-[#12e9e9] hover:shadow-[0_0_30px_-10px_#12e9e9] transition-all duration-300"
                >
                  {/* Subtle Corner Shape */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#122433] rounded-full opacity-50 group-hover:bg-[#0b141d]/10 transition-colors duration-500" />
                  
                  {/* Top Row: Icon and Tag */}
                  <div className="flex items-start justify-between w-full relative z-10">
                    <div className="w-12 h-12 rounded-full border border-slate-700/60 bg-[#0f1b26] flex items-center justify-center text-slate-300 group-hover:text-[#0b141d] group-hover:border-[#0b141d]/30 group-hover:bg-transparent transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-slate-500 uppercase mt-4 group-hover:text-[#0b141d]/70 transition-colors">
                      OBJ // 0{index + 1}
                    </span>
                  </div>

                  {/* Bottom Content: Objective Text */}
                  <div className="mt-12 relative z-10">
                    <h4 className="text-[15px] md:text-base font-bold text-white leading-relaxed obj-card-title">
                      {obj.desc}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

