"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export default function Exhibition() {
  const [activeIdx, setActiveIdx] = useState(0);

  const slides = [
    { 
      src: "/images/exhibit/exhibit-1.png", 
      alt: "Deal Flow Chambers",
      label: "01 // DEAL FLOW CHAMBERS",
      caption: "High-value deal lounges connecting sovereign allocators with global enterprise founders."
    },
    { 
      src: "/images/exhibit/exhibit-2.png", 
      alt: "Brand Showcase Arena",
      label: "02 // BRAND SHOWCASE ARENA",
      caption: "Over 200+ global brands and startup booths exhibiting live transactional platforms."
    },
    { 
      src: "/images/exhibit/exhibit-3.png", 
      alt: "Strategic Syndicate Stages",
      label: "03 // STRATEGIC SYNDICATE STAGES",
      caption: "Titans of fintech and central bankers aligning policies and regulatory licensing."
    },
    { 
      src: "/images/exhibit/exhibit-4.png", 
      alt: "Spatial Networking Hubs",
      label: "04 // SPATIAL NETWORKING HUBS",
      caption: "Closed-door networking halls driving corridor conversations and cross-border trade bridges."
    },
    { 
      src: "/images/exhibit/exhibit-5.png", 
      alt: "Global Innovation Pavilion",
      label: "05 // GLOBAL INNOVATION PAVILION",
      caption: "Cutting-edge web3, AI, and digital payment demonstrations from international tech hubs."
    },
    { 
      src: "/images/exhibit/exhibit-6.png", 
      alt: "Investor Syndicate Lounges",
      label: "06 // INVESTOR SYNDICATE LOUNGES",
      caption: "Exclusive matchmaking chambers connecting seed to Series C fintech pioneers with tier-1 VCs."
    },
    { 
      src: "/images/exhibit/exhibit-7.png", 
      alt: "Future Finance Expo Arena",
      label: "07 // FUTURE FINANCE EXPO ARENA",
      caption: "World-class exhibition floor hosting multi-trillion dollar asset managers and banking leaders."
    },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="exhibition" className="relative w-full py-10 md:py-12 bg-slate-950 overflow-hidden min-h-[310px] md:min-h-[350px] flex items-center border-t border-b border-white/10 group">
      
      {/* 100% Full-Bleed Edge-to-Edge Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[activeIdx].src}
            alt={slides[activeIdx].alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle full-bleed image clarity overlay */}
      <div className="absolute inset-0 bg-slate-950/15 pointer-events-none z-10" />

      {/* Foreground Content inside Max-Width Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
        
        {/* Top Text Content in a Floating White Card Container */}
        <div className="max-w-xl space-y-3 text-left bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#0b766e]/10 border border-[#0b766e]/20 px-3 py-1 rounded-full text-[#0b766e] text-[11px] font-mono font-bold tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0b766e] animate-pulse" />
            <span>{slides[activeIdx].label}</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight" style={{ color: "#082028" }}>
            Exhibit. Network. <span style={{ color: "#12e8e8" }}>Grow.</span>
          </h2>

          {/* Description */}
          <p className="text-xs md:text-sm leading-relaxed font-semibold text-slate-600 max-w-lg">
            Position your brand at the centre of global FinTech innovation. Engage with investors, enterprises, and industry leaders to create strategic partnerships.
          </p>

          {/* CTA Button */}
          <div className="pt-1">
            <a
              href="#tickets"
              className="inline-flex items-center space-x-2 bg-[#12e8e8] text-[#02090f] hover:bg-[#082028] hover:text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wider transition-all shadow-md shadow-[#12e8e8]/30 hover:scale-105 active:scale-95"
            >
              <span>RESERVE YOUR SPOT</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
