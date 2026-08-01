"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Sparkles, Calendar, GlassWater, ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function NetworkingExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const experiences = [
    {
      title: "VVIP Welcome Reception",
      tag: "NETWORKING",
      desc: "An exclusive evening under the stars for advisory board members, ministers, and key corporate delegates.",
      meta: "02 November // 19:30",
      img: getAssetPath("/images/dfs_networking_hall.jpg"),
    },
    {
      title: "VC Speed Dating Lounges",
      tag: "MATCHMAKING",
      desc: "One-on-one matchmaking sessions connecting early and growth-stage companies with active venture funds.",
      meta: "02-03 November // All Day",
      img: getAssetPath("/images/dfs_panel_discussion_v2.jpg"),
    },
    {
      title: "Advisory Board Luncheons",
      tag: "COLLABORATION",
      desc: "Closed-door policy sessions establishing standard blueprints for cognitive models and global compliance ledgers.",
      meta: "03 November // 12:30",
      img: getAssetPath("/images/dfs_nasdaq_keynote.jpg"),
    },
    {
      title: "Fintech Excellence Awards",
      tag: "CELEBRATION",
      desc: "A gala dinner celebrating disruptive tech architectures and the builders laying international rails.",
      meta: "03 November // 20:00",
      img: getAssetPath("/images/dfs_visa_exhibition_booth.jpg"),
    },
  ];

  return (
    <section id="networking" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
              <GlassWater className="w-3.5 h-3.5" />
              <span>SPATIAL CONVENING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.03em] text-gradient-white">
              The networking experience
            </h2>
            <p className="text-base text-white/60 leading-relaxed font-medium">
              Convene, network, and form partnerships inside our bespoke meeting lounges, gala dinners, and speed-dating rooms.
            </p>
          </div>

          {/* Slider Controllers */}
          <div className="flex space-x-4 select-none shrink-0 self-start md:self-auto">
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

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }} // hide on Firefox
        >
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group min-w-[280px] sm:min-w-[350px] max-w-[380px] rounded-2xl border border-white/10 bg-[#102a33]/65 flex flex-col snap-start transition-premium hover:border-electric-turquoise/35 hover:shadow-lg hover:shadow-electric-turquoise/5 select-none text-left overflow-hidden h-[420px]"
            >
              {/* Dedicated Image Area (Top half, 100% opacity, clear) */}
              <div className="relative w-full h-[180px] overflow-hidden shrink-0">
                <Image
                  src={exp.img}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover opacity-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Area (Bottom half) */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-[#102a33]/25 border-t border-white/5 relative z-10">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="font-mono text-[9px] tracking-widest text-electric-turquoise font-bold uppercase">
                    {exp.tag}
                  </span>
                  <span className="font-mono text-[9px] text-white/40 font-bold uppercase">
                    {exp.meta}
                  </span>
                </div>

                <div className="my-3 space-y-2">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-medium">
                    {exp.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => alert("Registration required to book rooms.")}
                    className="group flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-wider text-white hover:text-electric-turquoise transition-colors cursor-pointer"
                  >
                    <span>RESERVE PASS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-electric-turquoise" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

