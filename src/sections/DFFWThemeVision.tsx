"use client";
import { motion } from "framer-motion";

export default function DFFWThemeVision() {
  return (
    <section className="relative py-24 bg-[#02090f] overflow-hidden border-b border-white/5">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#12e8e8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#c5a880]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-12">
        
        {/* Header Block */}
        <div className="text-left flex items-center space-x-3">
          <span className="text-[#12e8e8] text-3xl md:text-5xl font-black">/</span>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            Finance Reimagined
          </h2>
        </div>

        {/* Theme and Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#05111b]/80 border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-between group shadow-xl"
          >
            {/* Slanted Chevron watermark lines matching screenshot */}
            <div className="absolute right-8 top-8 w-24 h-12 opacity-15 pointer-events-none">
              <svg className="w-full h-full text-[#12e8e8]" viewBox="0 0 100 40" fill="none">
                <path d="M10 5 L25 20 L10 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 5 L40 20 L25 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 5 L55 20 L40 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white">
                Theme
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-350 font-medium">
                Finance Reimagined: Where innovation meets policy and purpose
              </p>
            </div>
          </motion.div>

          {/* Card 2: Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-[#05111b]/80 border border-white/10 p-8 md:p-10 rounded-3xl overflow-hidden min-h-[220px] flex flex-col justify-between group shadow-xl"
          >
            {/* Slanted Chevron watermark lines matching screenshot */}
            <div className="absolute right-8 top-8 w-24 h-12 opacity-15 pointer-events-none">
              <svg className="w-full h-full text-[#12e8e8]" viewBox="0 0 100 40" fill="none">
                <path d="M10 5 L25 20 L10 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 5 L40 20 L25 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 5 L55 20 L40 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white">
                Vision
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-350 font-medium">
                To position Dubai as the global benchmark for shaping the future of finance through collaboration, innovation, and strategic dialogue.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
