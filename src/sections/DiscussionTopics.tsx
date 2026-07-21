"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function DiscussionTopics() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const topics = [
    {
      num: "01",
      title: "The future of FinTech: innovation driving global finance",
      desc: "How AI, blockchain, and digital-first strategies are reshaping financial services.",
    },
    {
      num: "02",
      title: "Financial inclusion in emerging markets",
      desc: "Bridging gaps with WealthTech, embedded finance, and digital banking innovation.",
    },
    {
      num: "03",
      title: "Digital assets and tokenisation: building trust at scale",
      desc: "Mastering custody, blockchain infrastructure, and tokenised solutions in a fast-moving landscape.",
    },
    {
      num: "04",
      title: "Crypto-assets: policy, regulation and legal frameworks",
      desc: "Navigating compliance, adoption, and risk in the digital asset economy.",
    },
    {
      num: "05",
      title: "The role of central banks in a sustainable, digital economy",
      desc: "Navigating compliance, adoption, and risk in the digital asset economy.",
    },
    {
      num: "06",
      title: "Digital banking and neobanks: scaling profitable models",
      desc: "Monetisation strategies, customer acquisition, and sustainable growth at scale.",
    },
    {
      num: "07",
      title: "The future of wealth management and private banking",
      desc: "Intelligent, inclusive innovation transforming advisory, investment, and client experiences.",
    },
    {
      num: "08",
      title: "Evolving global regulatory landscape",
      desc: "RegTech, compliance innovation, and how regulation is enabling growth and trust.",
    },
    {
      num: "09",
      title: "Early-stage start-ups and the new venture ecosystem",
      desc: "Investor insights, capital trends, and what excites financiers in the next generation of ventures.",
    },
    {
      num: "10",
      title: "Seamless payments across borders",
      desc: "AI, biometrics, and digital infrastructure driving frictionless, secure, and global transactions.",
    },
    {
      num: "11",
      title: "Embedded finance: redefining everyday transactions",
      desc: "How financial services are becoming part of apps, commerce, and daily life.",
    },
    {
      num: "12",
      title: "From chatbots to financial super-agents",
      desc: "AI-driven solutions transforming customer experiences in core financial verticals.",
    },
    {
      num: "13",
      title: "Trading and investment platforms of tomorrow",
      desc: "Next-gen architecture, smart investing, and alternative asset management in a digital-first world.",
    },
    {
      num: "14",
      title: "Asset management in a fragmented world: driving alpha through diversification",
      desc: "How active and alternative managers are re-engineering returns across asset classes.",
    },
    {
      num: "15",
      title: "Scaling FinTech for the global south",
      desc: "Innovating beyond borders to deliver financial access, inclusion, and growth opportunities.",
    },
  ];

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState);
      updateScrollState();
      // Also update on window resize
      window.addEventListener("resize", updateScrollState);
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.85;
      el.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="discussion-topics" className="relative py-20 md:py-24 overflow-hidden bg-white border-t border-slate-100 text-center select-none">
      
      {/* Scroll track style override to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full space-y-12">
        
        {/* Section Header with Left-Aligned Title and Right-Aligned Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#082028]/5 border border-[#082028]/10 px-3.5 py-1.5 rounded-full text-[#082028] text-xs font-mono font-bold tracking-widest uppercase">
              <span>SUMMIT TAXONOMY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] leading-tight" style={{ color: "#082028" }}>
              Discussion topics
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollLeft 
                  ? "border-[#082028]/20 bg-white text-[#082028] hover:bg-[#082028] hover:text-white hover:border-[#082028]" 
                  : "border-[#082028]/5 text-[#082028]/20 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollRight 
                  ? "border-[#082028]/20 bg-white text-[#082028] hover:bg-[#082028] hover:text-white hover:border-[#082028]" 
                  : "border-[#082028]/5 text-[#082028]/20 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Slider Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory no-scrollbar text-left"
        >
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[290px] sm:w-[325px] md:w-[350px] p-6 md:p-8 rounded-3xl border border-[#12e8e8]/45 bg-gradient-to-br from-white to-[#e0f7fc]/65 flex flex-col min-h-[340px] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_25px_50px_-12px_rgba(18,233,233,0.3)] hover:border-[#12e9e9] hover:from-[#f4ffff] hover:to-[#c3f6f6] group relative"
            >
              {/* Card top row info */}
              <div className="flex items-center justify-between mb-6">
                <span className="block text-4xl font-light font-mono leading-none transition-colors duration-300 group-hover:text-[#12e9e9]" style={{ color: "rgba(8, 32, 40, 0.25)" }}>
                  {topic.num}
                </span>
                
                {/* Accent ring dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 transition-all duration-300 group-hover:bg-[#12e9e9] group-hover:scale-125" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold leading-snug flex-grow transition-colors duration-300 group-hover:text-[#0b766e]" style={{ color: "#082028" }}>
                {topic.title}
              </h3>

              {/* Dynamic cyan bar */}
              <div className="w-12 h-1 bg-[#12e9e9] my-6 rounded-full transition-all duration-300 group-hover:w-20" />

              {/* Description */}
              <p className="text-xs md:text-sm font-semibold leading-relaxed" style={{ color: "#334155" }}>
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
