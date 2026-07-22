"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import Image from "next/image";
import { DFSDiamond } from "@/components/BrandElements";

export default function WhyAttend() {
  return (
    <section id="why-attend" className="relative py-28 md:py-36 overflow-hidden bg-[#04111c] border-t border-white/5">
      
      {/* Skewed decorative background lines on the far left */}
      <div className="absolute left-0 top-0 bottom-0 w-80 flex flex-col justify-center space-y-6 opacity-[0.03] pointer-events-none z-0 select-none pl-6">
        <div className="w-44 h-8 bg-white skew-x-[-28deg] transform origin-left" />
        <div className="w-56 h-8 bg-white skew-x-[-28deg] transform origin-left" />
        <div className="w-64 h-8 bg-white skew-x-[-28deg] transform origin-left" />
      </div>

      {/* Decorative layout grids (fine line borders) behind the content to match Yohan mockup */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0 select-none">
        <svg className="w-[90%] h-full text-white/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1">
          <line x1="20" y1="0" x2="20" y2="100" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="75" y1="0" x2="75" y2="100" />
          <line x1="0" y1="30" x2="100" y2="30" />
          <line x1="0" y1="70" x2="100" y2="70" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vision Header & Avatar stack */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded uppercase" style={{ color: "#0b766e", borderColor: "rgba(11, 118, 110, 0.3)", backgroundColor: "rgba(11, 118, 110, 0.08)" }}>
                SUMMIT DEMOGRAPHICS
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight" style={{ color: "#082028" }}>
                A curated gathering of global financial leadership
              </h2>
              
              <p className="text-sm md:text-base leading-relaxed font-semibold" style={{ color: "#475569" }}>
                A curated assembly of global financial leaders, spanning regulation, capital markets, banking, investment, and financial technology.
              </p>
            </div>

            {/* Overlapping Speaker Avatar stack (Yohan left column element) */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 w-full">
              <div className="flex -space-x-3 shrink-0">
                <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image src={getAssetPath("/images/speaker_david.png")} alt="Speaker" fill className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image src={getAssetPath("/images/speaker_sarah.png")} alt="Speaker" fill className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                  <Image src={getAssetPath("/images/speaker_elena.png")} alt="Speaker" fill className="object-cover" />
                </div>
              </div>
              
              <a 
                href="#register"
                className="w-9 h-9 rounded-full bg-[#12E9E9] hover:bg-white text-[#082028] flex items-center justify-center font-bold text-sm cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-md border border-[#12E9E9]/20"
                aria-label="Register interest"
              >
                ↗
              </a>
              
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] font-mono tracking-widest font-bold" style={{ color: "#0b766e" }}>DFS INFLUENCE</span>
                <span className="text-[11px] font-black uppercase tracking-wider mt-1" style={{ color: "#082028" }}>
                  Millions of satisfied connections
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Asymmetrical Grid (Matching Yohan mockup structure) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-5 w-full">
            
            {/* Card 1: Vertical Portrait, Asymmetric Cut (Middle-top Yohan card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 h-[320px] rounded-3xl rounded-tr-[55px] overflow-hidden relative border border-white/10 group shadow-2xl"
            >
              <Image
                src={getAssetPath("/images/dfs_female_executive_custom.jpg")}
                alt="Summit key bank delegates"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              
              {/* Dark shade filter */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-left flex flex-col justify-end z-20">
                <span className="text-4xl font-black tracking-tight text-[#12E9E9]">
                  30+
                </span>
                <span className="text-sm font-black uppercase tracking-wider mt-1" style={{ color: "#ffffff" }}>
                  Top bank executives
                </span>
              </div>
            </motion.div>

            {/* Card 2: Square Colored Card (Middle-right Yohan card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="md:col-span-7 h-[320px] bg-[#12E9E9] rounded-3xl p-6 md:p-8 relative flex flex-col justify-between text-[#082028] group shadow-2xl"
            >
              {/* Asymmetric layout lines overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <svg className="w-full h-full text-[#082028]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M 0 30 Q 50 30 100 70" />
                  <path d="M 0 50 Q 50 50 100 90" strokeDasharray="2,2" />
                </svg>
              </div>

              {/* Stacked Primary Stats Content */}
              <div className="text-left relative z-10 space-y-5">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-[#0b5c54] font-bold">CAPITAL MARKET CORE</span>
                  <h3 className="text-xl md:text-2xl font-black leading-none uppercase flex items-baseline space-x-2">
                    <span className="text-3xl font-black">5+</span>
                    <span>Stock Exchanges</span>
                  </h3>
                </div>

                <div className="border-t border-[#0b5c54]/10 pt-4 space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-[#0b5c54] font-bold">ASSET ALLOCATION</span>
                  <h3 className="text-xl md:text-2xl font-black leading-tight uppercase flex flex-col">
                    <span className="text-3xl font-black">20+</span>
                    <span className="text-xs md:text-sm leading-normal">Top Investment Management Firms</span>
                  </h3>
                </div>
              </div>

              {/* Floating arrow button on right border */}
              <div 
                className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#082028] text-[#12E9E9] border border-[#12E9E9]/25 hover:bg-white hover:text-[#082028] flex items-center justify-center font-bold text-xs cursor-pointer shadow-lg z-30 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Learn more about capital markets"
              >
                ↙
              </div>

              {/* Bottom detail footer */}
              <div className="flex items-center justify-between border-t border-[#0b5c54]/10 pt-4 text-left relative z-10">
                <span className="text-[9px] font-mono tracking-widest text-[#0b5c54] font-bold uppercase">Corridor Convening Hub</span>
                <DFSDiamond className="text-[#082028] w-4.5 h-4.5 opacity-65 shrink-0" />
              </div>
            </motion.div>

            {/* Card 3: Small Brand Showcase Box (Bottom-left Yohan card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 h-[220px] bg-[#051824] border border-[#12E9E9]/20 rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              {/* Rotating backdrop brand watermark */}
              <div className="absolute right-[-10%] top-[-10%] w-[120px] h-[120px] opacity-[0.03] text-white pointer-events-none group-hover:scale-105 transition-transform duration-500">
                <DFSDiamond />
              </div>

              <div className="text-left relative z-10">
                <span className="text-3xl font-black text-[#12E9E9] block">50+</span>
                <span className="text-xs font-bold uppercase tracking-wider mt-0.5 block" style={{ color: "rgba(255, 255, 255, 0.95)" }}>FinTechs</span>
              </div>

              <div className="text-left border-t border-white/5 pt-4 relative z-10">
                <span className="text-2xl font-black text-[#12E9E9] block">20+</span>
                <span className="text-xs font-semibold uppercase tracking-wider block" style={{ color: "rgba(255, 255, 255, 0.55)" }}>Technology enterprises</span>
              </div>
            </motion.div>

            {/* Card 4: Horizontal Landscape Card (Bottom-middle Yohan card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-8 h-[220px] bg-[#081f2d] border border-white/5 text-white rounded-3xl p-6 relative flex flex-row items-center justify-between overflow-hidden shadow-xl group"
            >
              {/* Left Side: Typography and Details */}
              <div className="flex flex-col justify-between h-full text-left max-w-[65%]">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono tracking-widest text-[#12E9E9] font-bold">REGULATORY POLICY</span>
                  <h3 className="text-3xl font-black leading-none uppercase text-[#12E9E9]">
                    20+
                  </h3>
                  <h4 className="text-base md:text-lg font-black leading-tight uppercase" style={{ color: "#ffffff" }}>
                    Global Financial Regulators
                  </h4>
                </div>
                
                <span className="text-[9px] font-bold text-white/40 font-mono tracking-wider uppercase">
                  Shaping global compliance frameworks
                </span>
              </div>

              {/* Right Side: Portrait of Speaker in Frame */}
              <div className="relative w-[110px] md:w-[130px] h-full rounded-2xl overflow-hidden border border-white/10 shrink-0 ml-4">
                <Image
                  src={getAssetPath("/images/dfs_executive_portrait_custom.jpg")}
                  alt="Global Financial Regulators Speaker"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-750 ease-out"
                  sizes="130px"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
