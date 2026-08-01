"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function LaunchpadParticipate() {
  const cards = [
    {
      icon: getAssetPath("/images/Vector-Right.svg"),
      text: "Own the spotlight at the region’s most influential FinTech gathering"
    },
    {
      icon: getAssetPath("/images/Vector-Right.svg"),
      text: "Connect with visionaries rewriting the rules of finance"
    },
    {
      icon: getAssetPath("/images/Vector-Right.svg"),
      text: "Attract strategic investors, partners, and global attention"
    },
    {
      icon: getAssetPath("/images/Vector-Right.svg"),
      text: "Join the movement reshaping finance"
    }
  ];

  return (
    <section className="relative py-24 bg-[#082028] text-white overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#12e8e8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#c5a880]/5 rounded-full blur-[120px]" />
      </div>

      {/* Dynamic CSS overrides for custom card backdrops */}
      <style dangerouslySetInnerHTML={{__html: `
        .launchpad-card-bg {
          background-image: linear-gradient(rgba(8, 32, 40, 0.85), rgba(8, 32, 40, 0.85)), url('${getAssetPath("/images/dfs_networking_hall.jpg")}') !important;
          background-position: center bottom !important;
          background-size: cover !important;
          border: 1px solid rgba(18, 232, 232, 0.15) !important;
        }
        .launchpad-card-bg:hover {
          border-color: #12e8e8 !important;
          box-shadow: 0 10px 25px -5px rgba(18, 232, 232, 0.15) !important;
          transform: translateY(-4px) !important;
        }
      `}} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Header split section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-slate-700/50">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight leading-tight">
              Why participate?
            </h2>
            <p className="text-[#12e8e8] text-[16px] md:text-[18px] font-sans font-bold tracking-wide">
              Join a global stage of innovators and disruptors.
            </p>
          </div>
          
          <div>
            <a
              href={getAssetPath("/general-enquiry")}
              className="inline-block bg-[#12e8e8] hover:bg-white text-[#082028] font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
            >
              Register now
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="launchpad-card-bg rounded-3xl p-8 min-h-[300px] flex flex-col justify-between items-start transition-all duration-300 group cursor-pointer"
            >
              {/* Card Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#082028]/60 flex items-center justify-center border border-slate-700/50 p-3 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={card.icon}
                  alt={`Participate step ${idx + 1}`}
                  className="w-full h-full object-contain block filter brightness-0 invert"
                />
              </div>

              {/* Card Text */}
              <p className="text-[16px] md:text-[17px] leading-relaxed text-slate-100 font-sans font-bold group-hover:text-[#12e8e8] transition-colors duration-300">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

