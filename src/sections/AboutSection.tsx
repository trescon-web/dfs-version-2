"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-r from-[#e0f7fc] via-[#f0fcfd] to-[#ffffff] border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="text-left space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.05]">
              Building a connected, borderless financial world
            </h2>
            
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-semibold">
              Organised by DIFC, Dubai FinTech Summit – now in its fourth edition – convenes C-suite leaders, decision-makers, regulators, innovators, and market pioneers from finance, policy, and technology to shape the standards, strategies, and innovations defining the next chapter of global finance.
            </p>
            
            <p className="text-sm md:text-base text-slate-900 font-bold leading-relaxed">
              Experience groundbreaking insights, bold ideas, and transformative collaborations driving the evolution of the FinTech industry.
            </p>

            <button
              onClick={() => alert("Summit brief and registration packages loaded.")}
              className="mt-8 px-6 py-3.5 bg-[#12E9E9] text-[#0b1e2d] font-bold text-xs font-mono tracking-wider uppercase rounded-xl flex items-center space-x-3 hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_4px_12px_rgba(18,233,233,0.15)]"
            >
              <span>Know more</span>
              <div className="p-1 bg-slate-950/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-current" />
              </div>
            </button>
          </div>

          {/* Right Column: Slanted Parallel Diagonal Collage */}
          <div className="relative w-full h-[360px] md:h-[420px] flex items-center justify-center space-x-6 md:space-x-8 select-none">
            
            {/* Left Image: Keynote Speaker */}
            <div 
              className="relative w-[46%] h-[82%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 rounded-2xl border-2 border-white -skew-x-12 hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="absolute inset-0 w-full h-full skew-x-12 scale-125">
                <Image
                  src={getAssetPath("/images/dfs_executive_portrait_custom.jpg")}
                  alt="Keynote Speaker Panel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Right Image: Exhibition Hall */}
            <div 
              className="relative w-[46%] h-[92%] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 rounded-2xl border-2 border-white -skew-x-12 hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="absolute inset-0 w-full h-full skew-x-12 scale-125">
                <Image
                  src={getAssetPath("/images/dfs_visa_exhibition_booth.jpg")}
                  alt="Summit Exhibition Hall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 60vw, 30vw"
                />
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
