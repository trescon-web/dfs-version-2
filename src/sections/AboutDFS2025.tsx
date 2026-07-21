"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function AboutDFS2025() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "9200+",
      label: "participants from 118 countries"
    },
    {
      value: "1000+",
      label: "Investors with over USD 4trn assets under management"
    },
    {
      value: "300+",
      label: "speakers across 125 sessions"
    },
    {
      value: "200+",
      label: "exhibitors showcasing innovation"
    },
    {
      value: "USD 30 mn+",
      label: "Media value for participating brands"
    },
    {
      value: "50+",
      label: "Regulators and government authorities"
    },
    {
      value: "50+",
      label: "MoUs and strategic partnerships"
    },
    {
      value: "USD 32.5 mn",
      label: "Generated value of PR"
    },
    {
      value: "300",
      label: "Media representatives"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative py-28 bg-[#02090f] bg-cover bg-center no-repeat border-t border-white/5 overflow-hidden"
      style={{ 
        backgroundImage: "url('https://dubaifintechsummit.com/wp-content/uploads/2026/02/Dubai-FinTech-Summit-2025-Bg-Img-scaled.webp')",
      }}
    >
      {/* Dark overlay for ambient blend */}
      <div className="absolute inset-0 bg-slate-950/70 z-0 pointer-events-none" />

      {/* Explicit style overrides to defeat global overrides on text color */}
      <style dangerouslySetInnerHTML={{__html: `
        .dfs25-title {
          color: #ffffff !important;
        }
        .dfs25-desc {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .dfs25-card-val {
          color: #12e8e8 !important;
        }
        .dfs25-card-lbl {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        /* Hide scrollbars globally for this section */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full space-y-12">
        
        {/* Header Row: Title, Description, CTA, and Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
          
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
              RETROSPECTIVE
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight dfs25-title">
              Dubai FinTech Summit 2025
            </h2>
            <p className="text-sm md:text-base leading-relaxed font-semibold dfs25-desc">
              A record‑breaking year that set the stage for an even bigger 2026.
            </p>

            <a
              href="https://dubaifintechsummit.com/post-show-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#12e8e8] text-slate-900 font-bold text-xs font-mono tracking-wider uppercase rounded-xl hover:bg-white hover:text-slate-950 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(18,233,233,0.15)] mt-2"
            >
              <span>Download DFS 2025 Post Event Report</span>
              <div className="p-0.5 bg-slate-950/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollLeft}
              className="p-3 bg-white/5 border border-white/10 hover:border-[#12e8e8]/30 hover:bg-[#12e8e8]/10 text-white rounded-full transition-all duration-300 cursor-pointer active:scale-90"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 bg-white/5 border border-white/10 hover:border-[#12e8e8]/30 hover:bg-[#12e8e8]/10 text-white rounded-full transition-all duration-300 cursor-pointer active:scale-90"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Horizontal Slider Track */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full py-4 scrollbar-none scroll-smooth select-none"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="relative p-8 rounded-[32px] border border-white/5 flex flex-col justify-center w-[280px] h-[220px] shrink-0 text-center shadow-xl group hover:translate-y-[-4px] transition-all duration-300 snap-center"
              style={{
                backgroundImage: "url('https://dubaifintechsummit.com/wp-content/uploads/2026/02/new_dfs-summit-2025-card.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-300 rounded-[32px] pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight dfs25-card-val">
                  {stat.value}
                </h3>
                <p className="text-[11px] leading-relaxed font-bold dfs25-card-lbl uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
