"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Calendar, Compass, Train } from "lucide-react";
import Image from "next/image";

export default function Venue() {
  const details = [
    {
      icon: MapPin,
      label: "Summit Address",
      val: "Madinat Jumeirah, Al Sufouh 1, Dubai, UAE",
    },
    {
      icon: Calendar,
      label: "Official Dates",
      val: "02 - 03 November 2026",
    },
    {
      icon: Train,
      label: "Transit Guide",
      val: "Direct metro links to Mall of Emirates & premium chauffeur stations",
    },
  ];

  return (
    <section id="venue" className="relative py-28 md:py-36 overflow-hidden bg-midnight border-t border-slate-200/10 text-center flex items-center justify-center">
      
      {/* 1. Full cover background photo with zero opacity mask overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getAssetPath("/images/dfs_visa_exhibition_booth.jpg")}
          alt="Dubai FinTech Summit venue entrance lobby background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-100"
        />
      </div>

      {/* 2. Glassmorphic Luxury Card container (Light/Platinum theme style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl mx-auto px-8 py-12 md:py-16 rounded-3xl border border-white/40 bg-white/92 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.3)] text-center flex flex-col items-center space-y-8"
      >
        {/* Header Block */}
        <div className="flex items-center space-x-2 bg-slate-900/10 border border-slate-900/20 px-3.5 py-1.5 rounded-full text-slate-900 text-xs font-mono font-bold tracking-widest uppercase">
          <Compass className="w-3.5 h-3.5 text-slate-900" />
          <span>LOCATION & VENUE</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-[800] tracking-[-0.03em] text-slate-900 leading-tight">
          Madinat Jumeirah, Dubai
        </h2>
        
        <p className="text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed font-semibold">
          Convene inside one of Dubai's most prestigious luxury resorts, combining traditional Arabian architecture with state-of-the-art conference facilities and direct maritime canals.
        </p>

        {/* Venue Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
          {details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200/60 bg-white/60 text-left space-y-3">
                <div className="p-2.5 rounded-xl bg-slate-950/5 self-start w-fit text-slate-900">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono font-bold tracking-widest text-[#c5a880] uppercase">
                    {detail.label}
                  </span>
                  <span className="block text-xs md:text-sm font-semibold text-slate-800 leading-snug">
                    {detail.val}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

