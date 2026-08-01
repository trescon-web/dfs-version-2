"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Globe, Briefcase, Mic, Rocket, TrendingUp, Landmark, Handshake, Award, Newspaper } from "lucide-react";

export default function AboutDFS2025() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "9200+",
      label: "participants from 118 countries",
      Icon: Globe
    },
    {
      value: "1000+",
      label: "Investors with over USD 4trn assets under management",
      Icon: Briefcase
    },
    {
      value: "300+",
      label: "speakers across 125 sessions",
      Icon: Mic
    },
    {
      value: "200+",
      label: "exhibitors showcasing innovation",
      Icon: Rocket
    },
    {
      value: "USD 30 mn+",
      label: "Media value for participating brands",
      Icon: TrendingUp
    },
    {
      value: "50+",
      label: "Regulators and government authorities",
      Icon: Landmark
    },
    {
      value: "50+",
      label: "MoUs and strategic partnerships",
      Icon: Handshake
    },
    {
      value: "USD 32.5 mn",
      label: "Generated value of PR",
      Icon: Award
    },
    {
      value: "300",
      label: "Media representatives",
      Icon: Newspaper
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
      className="relative py-24 md:py-32 bg-[#02090f] border-t border-white/5 overflow-hidden select-none"
    >
      {/* 100% Full-Bleed Edge-to-Edge High-Definition Keynote Stage Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src={getAssetPath("/images/dfs_nasdaq_keynote.jpg")}
          alt="Dubai FinTech Summit Keynote Stage Auditorium"
          fill
          className="object-cover object-center opacity-85 brightness-105 contrast-105"
          sizes="100vw"
          priority
        />
      </div>

      {/* Crystal Clear Overlay for Vibrant Image Detail & High Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02090f]/90 via-[#02090f]/35 to-[#02090f]/50 pointer-events-none z-0" />

      {/* Explicit High-Priority CSS for Text and Arrow Visibility */}
      <style dangerouslySetInnerHTML={{__html: `
        .dfs25-eyebrow {
          color: #12e9e9 !important;
        }
        .dfs25-heading {
          color: #ffffff !important;
        }
        .dfs25-subtext {
          color: #cbd5e1 !important;
        }
        .dfs25-[#12e9e9] {
          color: #12e9e9 !important;
        }
        .dfs25-stat-val {
          color: #12e9e9 !important;
          transition: color 0.3s ease;
        }
        .dfs25-card:hover .dfs25-stat-val {
          color: #ffffff !important;
        }
        .dfs25-stat-lbl {
          color: #ffffff !important;
        }
        .dfs25-nav-btn {
          background-color: #081726 !important;
          border: 1px solid rgba(18, 233, 233, 0.4) !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4) !important;
          transition: all 0.3s ease;
        }
        .dfs25-nav-btn:hover {
          background-color: #12e9e9 !important;
          border-color: #12e9e9 !important;
        }
        .dfs25-nav-btn svg {
          stroke: #12e9e9 !important;
          color: #12e9e9 !important;
          stroke-width: 2.5px !important;
          transition: all 0.3s ease;
        }
        .dfs25-nav-btn:hover svg {
          stroke: #02090f !important;
          color: #02090f !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full space-y-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase block dfs25-eyebrow">
              RETROSPECTIVE
            </span>
            
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight leading-tight dfs25-heading">
              Dubai FinTech Summit 2025
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed font-semibold dfs25-subtext">
              A record-breaking year that set the stage for an even bigger 2026.
            </p>

            <div className="pt-2">
              <a
                href="https://dubaifintechsummit.com/post-show-report/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-6 py-3.5 bg-[#12e9e9] text-slate-950 font-bold text-xs font-mono tracking-wider uppercase rounded-xl hover:bg-white hover:text-slate-950 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(18,233,233,0.25)] group"
              >
                <span className="text-slate-950 font-bold">DOWNLOAD DFS 2025 POST EVENT REPORT</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={scrollLeft}
              className="p-3.5 rounded-full cursor-pointer dfs25-nav-btn active:scale-90"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3.5 rounded-full cursor-pointer dfs25-nav-btn active:scale-90"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Stat Cards Track */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full py-4 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="snap-start shrink-0 w-[270px] sm:w-[300px] p-7 rounded-[28px] border border-white/15 bg-[#081726] flex flex-col justify-between h-[210px] transition-all duration-300 hover:border-[#12e9e9] hover:bg-[#0c243b] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(18,233,233,0.18)] group relative text-left dfs25-card overflow-hidden"
            >
              {/* Card Header with Lucide Outline Icon */}
              <div className="flex items-center justify-between">
                <stat.Icon className="w-6 h-6 text-[#12e9e9] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#12e9e9]/30 group-hover:bg-[#12e9e9] transition-colors" />
              </div>

              {/* Number & Label */}
              <div className="space-y-2 my-auto">
                <h3 className="text-3xl sm:text-4xl font-[900] tracking-tight dfs25-stat-val">
                  {stat.value}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider leading-relaxed dfs25-stat-lbl">
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

