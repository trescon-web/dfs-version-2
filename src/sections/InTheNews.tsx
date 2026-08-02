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
          src={getAssetPath("/images/news_cnbc.png")} 
          alt="CNBC Logo" 
          className="news-logo-cnbc" 
        />
      ),
    },
    {
      quote: "More than 20 MoUs signed on Day 1!",
      category: "KHALEEJ TIMES HEADLINE",
      logo: (
        <img 
          src={getAssetPath("/images/news_khaleej_times.png")} 
          alt="Khaleej Times Logo" 
          className="news-logo-khaleej-times" 
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
          src={getAssetPath("/images/news_fintech_times.png")} 
          alt="The Fintech Times Logo" 
          className="news-logo-fintech-times" 
        />
      ),
    },
    {
      quote: "FinTech industry in the spotlight",
      category: "GULF NEWS FEATURE",
      logo: (
        <img 
          src={getAssetPath("/images/news_gulf_news.png")} 
          alt="Gulf News Logo" 
          className="news-logo-gulf-news" 
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
          src={getAssetPath("/images/entrepreneur-logo.jpg")} 
          alt="Entrepreneur Middle East Logo" 
          className="news-logo-entrepreneur" 
        />
      ),
    },
    {
      quote: "A truly global platform for the world's FinTech community",
      category: "ECONOMIC TIMES ANALYTICS",
      logo: (
        <img 
          src={getAssetPath("/images/et.png")} 
          alt="The Economic Times Logo" 
          className="news-logo-economic-times" 
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
      
      {/* Dedicated CSS Classes for Balanced 100% News Section Logos */}
      <style dangerouslySetInnerHTML={{__html: `
        .news-logo-cnbc {
          height: 32px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          object-position: left center;
        }
        .news-logo-khaleej-times {
          height: 32px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          object-position: left center;
        }
        .news-logo-fintech-times {
          height: 30px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          object-position: left center;
        }
        .news-logo-gulf-news {
          height: 30px;
          width: auto;
          max-width: 145px;
          object-fit: contain;
          object-position: left center;
        }
        .news-logo-entrepreneur {
          height: 36px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          object-position: left center;
        }
        .news-logo-economic-times {
          height: 30px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          object-position: left center;
        }

        @media (min-width: 768px) {
          .news-logo-cnbc { height: 36px; max-width: 155px; }
          .news-logo-khaleej-times { height: 36px; max-width: 165px; }
          .news-logo-fintech-times { height: 34px; max-width: 175px; }
          .news-logo-gulf-news { height: 34px; max-width: 160px; }
          .news-logo-entrepreneur { height: 40px; max-width: 165px; }
          .news-logo-economic-times { height: 34px; max-width: 155px; }
        }
      `}} />

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
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.03em]" style={{ color: "#082028" }}>
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
                className="snap-center shrink-0 w-[85vw] max-w-[340px] bg-white border-2 border-slate-300 rounded-[24px] p-6 flex flex-col justify-between space-y-5 shadow-sm transition-all"
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
        <div className="hidden md:grid grid-cols-3 border-t border-x border-slate-200 text-left w-full">
          {[
            column1[0], column2[0], column3[0],
            column1[1], column2[1], column3[1]
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-transparent p-6 md:p-10 transition-all duration-300 hover:bg-[#0b766e]/[0.03] group relative h-full border-b border-slate-200 overflow-hidden ${
                (idx + 1) % 3 !== 0 ? 'border-r' : ''
              }`}
            >
              {/* Sleek bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0b766e] group-hover:w-full transition-all duration-500 ease-out" />

              <div className="w-full h-full flex flex-col space-y-6">
                <div className="flex items-center justify-between gap-4 w-full min-h-[44px]">
                  <div className="shrink-0 max-w-[62%] transition-transform duration-300 group-hover:scale-[1.03]">
                    {item.logo}
                  </div>
                  <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 group-hover:text-[#0b766e] transition-colors shrink-0 text-right uppercase">{item.category}</span>
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed font-serif italic text-slate-700 group-hover:text-[#0b766e] transition-colors duration-300 flex-grow">
                  "{item.quote}"
                </p>
                <div className="pt-2 mt-auto">
                  <a href="#" className="inline-flex items-center text-[9px] font-mono font-black tracking-widest text-slate-400 group-hover:text-[#0b766e] transition-colors uppercase">
                    <span>Read Release</span>
                    <span className="text-[7px] ml-1.5 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

