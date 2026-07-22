"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export default function InTheNews() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const column1 = [
    {
      quote: "Phenomenal growth, dynamic conversations",
      category: "CNBC SPECIAL COVERAGE",
      logo: (
        <img 
          src={getAssetPath("/images/logo-1.svg")} 
          alt="CNBC Logo" 
          className="h-auto w-[40%] object-contain" 
        />
      ),
    },
    {
      quote: "More than 20 MoUs signed on Day 1!",
      category: "KHALEEJ TIMES HEADLINE",
      logo: (
        <img 
          src={getAssetPath("/images/logo-2.png")} 
          alt="Khaleej Times Logo" 
          className="h-auto w-[50%] object-contain" 
        />
      ),
    },
  ];

  const column2 = [
    {
      quote: "Visionary speakers, disruptive ideas, and transformative discussions",
      category: "THE FINTECH TIMES SPECIAL",
      logo: (
        <img 
          src={getAssetPath("/images/logo-4.png")} 
          alt="The Fintech Times Logo" 
          className="h-auto w-[59%] object-contain" 
        />
      ),
    },
    {
      quote: "FinTech industry in the spotlight",
      category: "GULF NEWS FEATURE",
      logo: (
        <img 
          src={getAssetPath("/images/logo-5.svg")} 
          alt="Gulf News Logo" 
          className="h-6 w-auto object-contain" 
        />
      ),
    },
  ];

  const column3 = [
    {
      quote: "A confluence point for introspection and inspiration",
      category: "ENTREPRENEUR PROFILE",
      logo: (
        <img 
          src={getAssetPath("/images/logo-3.jpg")} 
          alt="Entrepreneur Middle East Logo" 
          className="h-auto w-[40%] object-contain" 
        />
      ),
    },
    {
      quote: "A truly global platform for the world's FinTech community",
      category: "ECONOMIC TIMES ANALYTICS",
      logo: (
        <img 
          src={getAssetPath("/images/logo-6.png")} 
          alt="The Economic Times Logo" 
          className="h-9 w-auto object-contain" 
        />
      ),
    },
  ];

  const allNews = [...column1, ...column2, ...column3];
  const totalSlides = allNews.length;

  // Auto-slide effect for mobile view
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % totalSlides;
        if (sliderRef.current) {
          const slideWidth = sliderRef.current.scrollWidth / totalSlides;
          sliderRef.current.scrollTo({
            left: slideWidth * next,
            behavior: "smooth"
          });
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  // Sync scroll position with active dot
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const slideWidth = scrollWidth / totalSlides;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== activeSlide && newIndex >= 0 && newIndex < totalSlides) {
        setActiveSlide(newIndex);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / totalSlides;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="in-the-news" className="relative py-12 md:py-16 overflow-hidden bg-white border-t border-slate-100">
      
      {/* Subtle layout dots accent */}
      <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-slate-200 pointer-events-none" />
      <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-slate-200 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-8 text-left w-full gap-4">
          <div className="space-y-3">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest text-[#0b766e] uppercase">
              PRESS VALIDATION
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em]" style={{ color: "#082028" }}>
              In the news
            </h2>
          </div>
          
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            DFS EDITORIAL // ISSUE FOUR
          </span>
        </div>

        {/* Mobile Horizontal Auto-Slider & Touch Swipe (< md breakpoint) */}
        <div 
          className="block md:hidden relative w-full space-y-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-2 -mx-6 px-6 no-scrollbar select-none cursor-grab active:cursor-grabbing scroll-smooth"
          >
            {allNews.map((item, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85vw] max-w-[340px] bg-white border-2 border-slate-200/90 rounded-[24px] p-6 flex flex-col justify-between space-y-5 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between w-full">
                  {item.logo}
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400">{item.category}</span>
                </div>
                <p className="text-base font-bold leading-relaxed font-serif italic text-slate-800">
                  "{item.quote}"
                </p>
                <div className="pt-2">
                  <a href="#" className="inline-flex items-center text-[10px] font-mono font-black tracking-widest text-[#0b766e] uppercase">
                    <span>Read Release</span>
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dot Indicators */}
          <div className="flex items-center justify-center space-x-2 pt-2">
            {allNews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "w-8 bg-[#0b766e]"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3-Column Magazine Card Layout (Desktop >= md) */}
        <div className="hidden md:grid grid-cols-3 gap-8 text-left w-full">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-8">
            {column1.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-[28px] p-6 md:p-8 flex flex-col space-y-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(8,32,40,0.04)] hover:border-[#12e9e9] group relative"
              >
                <div className="flex items-center justify-between w-full">
                  {item.logo}
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400">{item.category}</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed font-serif italic text-slate-700 hover:text-[#0b766e] transition-colors duration-300">
                  "{item.quote}"
                </p>
                <div className="pt-2">
                  <a href="#" className="inline-flex items-center text-[9px] font-mono font-black tracking-widest text-slate-400 group-hover:text-[#0b766e] transition-colors uppercase">
                    <span>Read Release</span>
                    <span className="text-[7px] ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-8">
            {column2.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.05 }}
                className="bg-white border-2 border-slate-200 rounded-[28px] p-6 md:p-8 flex flex-col space-y-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(8,32,40,0.04)] hover:border-[#12e9e9] group relative"
              >
                <div className="flex items-center justify-between w-full">
                  {item.logo}
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400">{item.category}</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed font-serif italic text-slate-700 hover:text-[#0b766e] transition-colors duration-300">
                  "{item.quote}"
                </p>
                <div className="pt-2">
                  <a href="#" className="inline-flex items-center text-[9px] font-mono font-black tracking-widest text-slate-400 group-hover:text-[#0b766e] transition-colors uppercase">
                    <span>Read Release</span>
                    <span className="text-[7px] ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-8">
            {column3.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.1 }}
                className="bg-white border-2 border-slate-200 rounded-[28px] p-6 md:p-8 flex flex-col space-y-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(8,32,40,0.04)] hover:border-[#12e9e9] group relative"
              >
                <div className="flex items-center justify-between w-full">
                  {item.logo}
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400">{item.category}</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed font-serif italic text-slate-700 hover:text-[#0b766e] transition-colors duration-300">
                  "{item.quote}"
                </p>
                <div className="pt-2">
                  <a href="#" className="inline-flex items-center text-[9px] font-mono font-black tracking-widest text-slate-400 group-hover:text-[#0b766e] transition-colors uppercase">
                    <span>Read Release</span>
                    <span className="text-[7px] ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
