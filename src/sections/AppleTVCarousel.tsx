"use client";
import React, { useState, useEffect, useRef } from "react";
import { getAssetPath } from "@/utils/assetPath";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AppleTVCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "GLOBAL KEYNOTE STAGE",
      subtitle: "Keynotes • 100+ Financial Visionaries",
      image: getAssetPath("/images/_bas7154.jpg"),
      ctaText: "Explore Keynotes",
      link: getAssetPath("/about/#retrospective"),
      tag: "FEATURED"
    },
    {
      id: 2,
      title: "THE INNOVATION EXHIBITION",
      subtitle: "Exhibition • 200+ Global FinTech Leaders",
      image: getAssetPath("/images/_mel0928.jpg"),
      ctaText: "Explore Exhibition",
      link: getAssetPath("/exhibitors/"),
      tag: "EXHIBIT"
    },
    {
      id: 3,
      title: "STRATEGIC ADVISORY PANELS",
      subtitle: "Policy • 20+ Global Financial Regulators",
      image: getAssetPath("/images/_tgm5206-edit.jpg"),
      ctaText: "View Speakers",
      link: getAssetPath("/speakers/"),
      tag: "LEADERSHIP"
    },
    {
      id: 4,
      title: "FINTECH WORLD CUP FINALE",
      subtitle: "Startups • $1M+ Global Pitch Competition",
      image: getAssetPath("/images/_bas7161.jpg"),
      ctaText: "Discover Launchpad",
      link: getAssetPath("/fintech-launchpad/"),
      tag: "COMPETITION"
    },
    {
      id: 5,
      title: "VIP EXECUTIVE LOUNGES",
      subtitle: "Networking • $1.2B+ Venture Deals Brokered",
      image: getAssetPath("/images/_iva4610.jpg"),
      ctaText: "Join Network",
      link: getAssetPath("/get-involved/"),
      tag: "NETWORKING"
    }
  ];

  // Auto scroll effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Center active slide on index change
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const card = container.children[activeIndex] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#02090f] overflow-hidden border-t border-white/10 select-none">
      
      {/* High-priority style overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .apple-carousel-heading {
          color: #ffffff !important;
          opacity: 1 !important;
        }
        .apple-carousel-sub {
          color: #12e9e9 !important;
        }
        .apple-nav-btn {
          background-color: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: #ffffff !important;
        }
        .apple-nav-btn:hover {
          background-color: #12e9e9 !important;
          color: #02090f !important;
        }
      `}} />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#12e9e9]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-[#12e9e9]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase apple-carousel-sub">
                SUMMIT HIGHLIGHTS & SHOWCASES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-[900] tracking-tight apple-carousel-heading">
              Experience Dubai FinTech Summit
            </h2>
          </div>

          {/* Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full apple-nav-btn border flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full apple-nav-btn border flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              aria-label={isPlaying ? "Pause slider" : "Play slider"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full apple-nav-btn border flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Apple TV+ Style Horizontal Carousel Track */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                initial={{ opacity: 0.8 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.65,
                  scale: isActive ? 1 : 0.95
                }}
                transition={{ duration: 0.4 }}
                className={`relative shrink-0 w-[84vw] max-w-[820px] h-[360px] md:h-[460px] rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer snap-center group border transition-all duration-500 shadow-2xl ${
                  isActive ? "border-[#12e9e9]/50 shadow-[0_20px_50px_rgba(18,233,233,0.25)]" : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[24px] md:rounded-[32px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out block"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                {/* Top Right Apple TV Style Logo Badge */}
                <div className="absolute top-6 right-6 z-20 flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white font-bold text-xs tracking-wider uppercase shadow-lg">
                  <span className="text-[#12e9e9]">✦</span>
                  <span>DFS 2026</span>
                </div>

                {/* Top Left Category Tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[#12e9e9]/20 backdrop-blur-md border border-[#12e9e9]/40 text-[#12e9e9] text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-10 z-20 text-left space-y-4 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-4xl font-[900] text-white tracking-tight leading-tight uppercase drop-shadow-md">
                    {slide.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    {/* White Pill Button */}
                    <a
                      href={slide.link}
                      className="bg-white hover:bg-[#12e9e9] text-slate-950 px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm transition-all duration-300 shadow-xl active:scale-95 flex items-center space-x-2 shrink-0 group/btn"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    {/* Subtitle Next to Button */}
                    <span className="text-xs md:text-sm font-semibold text-white/90 tracking-wide drop-shadow-sm">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot Pagination Progress Indicators */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[#12e9e9] shadow-[0_0_10px_#12e9e9]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
