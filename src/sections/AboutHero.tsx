"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function AboutHero() {
  return (
    <>
      {/* 1. Header Banner (Dark Theme) */}
      <section 
        className="relative h-[250px] overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://dubaifintechsummit.com/wp-content/uploads/2026/03/About-us-hero-banner-updated-desktop-scaled.webp')" }}
      >
        {/* Dark overlay for extra readability */}
        <div className="absolute inset-0 bg-slate-950/45 z-0" />
        
        {/* Ambient background glows */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#12e8e8]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a880]/5 rounded-full blur-[120px]" />
        </div>

        {/* Explicit style override to bypass global overrides */}
        <style dangerouslySetInnerHTML={{__html: `
          .about-hero-title {
            color: #ffffff !important;
          }
        `}} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center justify-center pt-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight about-hero-title">
            About Dubai FinTech Summit
          </h1>
        </div>
      </section>

      {/* 2. Intro Narrative (Light Theme - White background) */}
      <section className="relative pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-white text-slate-800">
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#082028]/5 border border-[#082028]/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase text-[#082028] mb-8">
            <Shield className="w-3.5 h-3.5 text-[#0b766e]" />
            <span>ABOUT THE SUMMIT</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#082028] leading-tight">
              Connecting ideas, markets, and opportunities
            </h2>
          </div>

          {/* Two-Column split: Narrative vs Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full text-left items-start">
            
            {/* Left Column: Narrative paragraphs */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#082028] text-base md:text-lg leading-relaxed font-normal">
                Dubai FinTech Summit stands as one of the world’s most influential platforms for financial innovation.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-normal">
                Hosted in Dubai, the event brings global leaders, regulators, investors, and pioneering FinTechs together to examine what’s next for finance and how the industry will evolve through new technology, policy, and collaboration.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-normal">
                As the fourth edition arrives in 2026, the Summit continues to strengthen Dubai’s role as a global financial hub – connecting ideas, markets, and opportunities across continents. With a strong focus on real-world outcomes, DFS convenes the people and institutions shaping the direction of banking, payments, digital assets, and financial inclusion. Designed for decision-makers, the Summit offers a space where strategic conversations meet actionable insights, enabling partnerships that influence global finance.
              </p>
            </div>

            {/* Right Column: Event WebP Image */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <div className="relative rounded-3xl overflow-hidden border border-[#12e9e9]/35 shadow-[0_0_35px_rgba(18,233,233,0.18)] hover:border-[#12e9e9]/55 hover:shadow-[0_0_45px_rgba(18,233,233,0.28)] transition-all duration-500 group w-full aspect-4/3">
                <img
                  src="https://dubaifintechsummit.com/wp-content/uploads/2026/04/Connecting-ideas-markets-and-opportunities-img.webp"
                  alt="Connecting ideas, markets, and opportunities"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
