"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Presentation, Globe, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

/**
 * Custom viewport counter animation hook
 */
function Counter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix (e.g., "10,000+" -> number: 10000, suffix: "+")
  const numericString = value.replace(/[^0-9]/g, "");
  const target = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active) {
          let start = 0;
          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeProgress * target);
            
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          active = false; // Trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  // Format count with commas
  const formattedCount = count.toLocaleString();

  return (
    <span ref={countRef}>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
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

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Business Leaders",
    },
    {
      icon: TrendingUp,
      value: "1,000+",
      label: "Investors",
    },
    {
      icon: Presentation,
      value: "300+",
      label: "Speakers",
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries",
    },
    {
      icon: Award,
      value: "199+",
      label: "Exhibitors & Partners",
      fullWidth: true,
    },
  ];

  return (
    <section id="impact" className="relative py-16 md:py-20 overflow-hidden bg-[#02090f] border-t border-b border-white/5 flex items-center justify-center">
      
      {/* Explicit style overrides to defeat global theme CSS color rules */}
      <style dangerouslySetInnerHTML={{__html: `
        #impact h2 {
          color: #ffffff !important;
        }
        #impact p {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        #impact .metric-value {
          color: #ffffff !important;
        }
        #impact .group:hover .metric-value {
          color: #12e8e8 !important;
        }
        #impact .metric-label {
          color: #c5a880 !important;
        }
        #impact .metric-icon {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        #impact .group:hover .metric-icon {
          color: #12e8e8 !important;
        }
        #impact .metric-badge-text {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        #impact .metric-scene {
          color: rgba(255, 255, 255, 0.2) !important;
        }
        #impact .group:hover .metric-scene {
          color: rgba(18, 232, 232, 0.3) !important;
        }
      `}} />

      {/* 1. Full cover background looping video with enhanced opacity */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={getAssetPath("/videos/dfs-hero-video.mp4")} type="video/mp4" />
        </video>
        {/* Ambient cinematic masking layers */}
        <div className="absolute inset-0 bg-[#02090f]/65 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02090f] via-transparent to-[#02090f]/40" />
      </div>

      {/* 2. Holographic Card Matrix (Floating on Video) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center space-y-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase metric-badge-text" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            <Shield className="w-3.5 h-3.5 text-[#12e8e8]" />
            <span>SUMMIT PERFORMANCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white" style={{ color: "#ffffff" }}>
            Impact at a glance
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-xl font-semibold metric-subheading" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            A full look at the milestones from our record-breaking global event.
          </p>
        </div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full relative z-10"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVars}
                className={`relative p-6 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 hover:border-[#12e8e8]/30 transition-all duration-500 group flex flex-col justify-between items-start text-left overflow-hidden shadow-2xl hover:translate-y-[-6px] ${
                  stat.fullWidth ? "col-span-2 lg:col-span-1" : "col-span-1"
                }`}
              >
                {/* Decorative hover glows inside card */}
                <div className="absolute -inset-px bg-gradient-to-br from-transparent via-[#12e8e8]/0 to-[#12e8e8]/10 group-hover:to-[#12e8e8]/20 rounded-3xl transition-all duration-500 pointer-events-none z-0" />
                <div className="absolute top-[-50px] right-[-50px] w-[100px] h-[100px] bg-[#12e8e8]/5 group-hover:bg-[#12e8e8]/10 rounded-full blur-[25px] transition-all duration-500 pointer-events-none z-0" />

                {/* Top header line */}
                <div className="flex items-center justify-between w-full relative z-10 mb-8">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#12e8e8]/30 group-hover:bg-[#12e8e8]/5 transition-all duration-500 metric-icon" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    <IconComponent className="w-5 h-5" style={{ color: "inherit" }} />
                  </div>
                  <span className="font-mono text-[9px] font-bold tracking-wider transition-colors metric-scene" style={{ color: "rgba(255, 255, 255, 0.2)" }}>
                    METRIC // 0{index + 1}
                  </span>
                </div>

                {/* Content details */}
                <div className="space-y-1 relative z-10">
                  <span className="block font-sans text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-none transition-colors duration-300 metric-value" style={{ color: "#ffffff" }}>
                    <Counter value={stat.value} />
                  </span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest font-bold pt-1 metric-label" style={{ color: "#c5a880" }}>
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
