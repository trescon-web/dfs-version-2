"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Mic, Building, Sparkles, Handshake, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function EventHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 15;
        
        scrollRef.current.scrollTo({
          left: isAtEnd ? 0 : scrollLeft + clientWidth * 0.75,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const highlights = [
    {
      icon: Mic,
      tag: "01 / DIALOGUE",
      title: "Keynotes from Governors",
      desc: "Hear directly from Central Bank Governors, Finance Ministers, and global regulatory architects shaping policy rails.",
      img: getAssetPath("/images/dfs_nasdaq_keynote.jpg"),
    },
    {
      icon: Building,
      tag: "02 / EXPO",
      title: "Global Fintech Exhibition",
      desc: "A massive tech showcase featuring over 200+ global brands and startups displaying next-gen fintech solutions.",
      img: getAssetPath("/images/dfs_visa_exhibition_booth.jpg"),
    },
    {
      icon: Handshake,
      tag: "03 / FUNDING",
      title: "Investor Matchmaking",
      desc: "Exclusive networking lounges linking 1,000+ venture capital funds with high-growth startup ecosystems.",
      img: getAssetPath("/images/dfs_female_executive_custom.jpg"),
    },
    {
      icon: Sparkles,
      tag: "04 / INNOVATION",
      title: "Advisory Board Panels",
      desc: "Critical roundtables convening industry titans to establish guidelines for artificial intelligence and cross-border rails.",
      img: getAssetPath("/images/dfs_networking_hall.jpg"),
    },
  ];

  return (
    <section id="highlights" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-slate-200/10">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SUMMIT HIGHLIGHTS</span>
            </div>
            {/* Added line height and padding to prevent webkit gradient clip */}
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white leading-tight py-1 inline-block">
              Unveiling the future of global finance
            </h2>
            <p className="text-base text-white/60 leading-relaxed font-medium">
              Explore the core pillars and custom experiences built to connect, educate, and empower founders, investors, and central bankers.
            </p>
          </div>

          {/* Navigation Control Arrows */}
          <div className="flex items-center space-x-3 shrink-0 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="p-3.5 rounded-full bg-[#12E9E9] text-[#02090f] hover:bg-white hover:text-[#02090f] transition-all cursor-pointer shadow-lg shadow-[#12E9E9]/25 border border-[#12E9E9]"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 stroke-[2.5]" style={{ color: "#02090f", stroke: "#02090f" }} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3.5 rounded-full bg-[#12E9E9] text-[#02090f] hover:bg-white hover:text-[#02090f] transition-all cursor-pointer shadow-lg shadow-[#12E9E9]/25 border border-[#12E9E9]"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 stroke-[2.5]" style={{ color: "#02090f", stroke: "#02090f" }} />
            </button>
          </div>
        </div>

        {/* Scrollable Slider Track with Big Images */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }} // hide on Firefox
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="group min-w-[300px] sm:min-w-[420px] max-w-[450px] rounded-2xl border border-slate-200/60 bg-white/45 backdrop-blur-xl flex flex-col snap-start transition-premium hover:border-[#c5a880]/50 select-none text-left overflow-hidden h-[460px] shadow-none"
              >
                {/* Large Clear Photo Box (Full Opacity, Zoom on Hover) */}
                <div className="relative w-full h-[240px] overflow-hidden shrink-0 border-b border-slate-200/50">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-100 group-hover:scale-104 transition-transform duration-[0.8s] ease-out"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow bg-transparent">
                  <div className="flex items-center justify-between border-b border-slate-200/50 pb-3">
                    <span className="font-mono text-[10px] tracking-widest text-[#c5a880] font-bold uppercase">
                      {item.tag}
                    </span>
                    <Icon className="w-4.5 h-4.5 text-electric-turquoise" />
                  </div>

                  <div className="my-auto space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
