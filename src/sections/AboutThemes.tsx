"use client";
import { motion } from "framer-motion";
import { Shield, Database, Send, TrendingUp, Briefcase, Cpu, Leaf, Lock } from "lucide-react";

export default function AboutThemes() {
  const themes = [
    {
      title: "Insurance and risk",
      desc: "Innovating protection for tomorrow",
      icon: Shield,
    },
    {
      title: "Digital assets and tokenisation",
      desc: "Redefining value in digital form",
      icon: Database,
    },
    {
      title: "Payments, cross-border corridors and embedded finance",
      desc: "Seamless global money movement",
      icon: Send,
    },
    {
      title: "Start-up and investor marketplace",
      desc: "Connecting capital with innovation",
      icon: TrendingUp,
    },
    {
      title: "Private capital and WealthTech",
      desc: "Seamless global money movement",
      icon: Briefcase,
    },
    {
      title: "AI, data, and decisioning",
      desc: "Intelligence powering financial choices",
      icon: Cpu,
    },
    {
      title: "Sustainability and ESG finance",
      desc: "Finance driving positive impact",
      icon: Leaf,
    },
    {
      title: "Future-proofing finance",
      desc: "Building resilient financial systems",
      icon: Lock,
    },
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative py-20 bg-[#02090f] border-t border-white/5">
      
      {/* Explicit style overrides to defeat global text overrides on dark sections */}
      <style dangerouslySetInnerHTML={{__html: `
        .theme-section-title {
          color: #ffffff !important;
        }
        .theme-card-title {
          color: #ffffff !important;
          transition: color 300ms ease;
        }
        .theme-card:hover .theme-card-title {
          color: #12e8e8 !important;
        }
        .theme-card-desc {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .theme-icon-wrap {
          color: rgba(255, 255, 255, 0.7) !important;
          transition: all 500ms ease;
        }
        .theme-card:hover .theme-icon-wrap {
          color: #12e8e8 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight theme-section-title">
            Strategic themes
          </h2>
        </div>

        {/* Grid Matrix */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={index}
                variants={itemVars}
                className="relative p-6 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 hover:border-[#12e8e8]/30 transition-all duration-500 group flex flex-col justify-between items-start text-left overflow-hidden shadow-2xl hover:translate-y-[-4px] theme-card"
              >
                {/* Hover gradient glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-transparent via-[#12e8e8]/0 to-[#12e8e8]/10 group-hover:to-[#12e8e8]/20 rounded-3xl transition-all duration-500 pointer-events-none" />

                <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#12e8e8]/30 group-hover:bg-[#12e8e8]/5 transition-all duration-500 theme-icon-wrap">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold transition-colors leading-snug theme-card-title">
                    {theme.title}
                  </h4>
                  <p className="text-xs leading-relaxed font-semibold theme-card-desc">
                    {theme.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
