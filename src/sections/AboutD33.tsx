"use client";

import { motion } from "framer-motion";

export default function AboutD33() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#033b47] via-[#011c22] to-[#033b47] overflow-hidden border-y border-white/5 flex items-center justify-center">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan-950/20" />
      </div>

      {/* Left Chevron SVG Vectors (Pointing Right) */}
      <svg 
        className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 w-20 md:w-48 h-10 md:h-16 opacity-20 pointer-events-none z-0" 
        viewBox="0 0 200 60" 
        fill="none"
      >
        <path d="M20 10 L40 30 L20 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 10 L60 30 L40 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <path d="M60 10 L80 30 L60 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <path d="M80 10 L100 30 L80 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d="M100 10 L120 30 L100 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      </svg>

      {/* Right Chevron SVG Vectors (Pointing Left) */}
      <svg 
        className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-20 md:w-48 h-10 md:h-16 opacity-20 pointer-events-none z-0" 
        viewBox="0 0 200 60" 
        fill="none"
      >
        <path d="M180 10 L160 30 L180 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M160 10 L140 30 L160 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <path d="M140 10 L120 30 L140 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
        <path d="M120 10 L100 30 L120 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d="M100 10 L80 30 L100 50" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      </svg>

      {/* Local CSS overrides to enforce white text color */}
      <style dangerouslySetInnerHTML={{__html: `
        .d33-banner-text {
          color: #ffffff !important;
        }
      `}} />

      <div className="max-w-4xl mx-auto px-10 text-center relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg lg:text-xl font-medium tracking-wide leading-relaxed d33-banner-text"
        >
          The Summit aligns with the Dubai Economic Agenda D33’s strategic goal of propelling Dubai into the ranks of the top four global financial hubs by 2033
        </motion.p>
      </div>

    </section>
  );
}
