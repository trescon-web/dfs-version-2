"use client";

import { motion } from "framer-motion";
import { Sparkles, Newspaper, ArrowUpRight } from "lucide-react";

export default function MediaCoverage() {
  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const articles = [
    {
      source: "REUTERS",
      date: "04 Nov 2026",
      title: "Dubai FinTech Summit maps out global sandbox consensus",
      desc: "An in-depth review of bilateral sandbox sandboxing policies established during closed-door assemblies.",
    },
    {
      source: "BLOOMBERG",
      date: "03 Nov 2026",
      title: "VC liquidity returns to Web3 rails in Dubai assembly",
      desc: "Capital allocators mark record-breaking deal flows inside startup matching rooms during the summit.",
    },
    {
      source: "FORBES",
      date: "02 Nov 2026",
      title: "Advisory panels convene for cognitive finance standards",
      desc: "Evaluating policy directives for generative machine learning engines integrated into systemic risk frameworks.",
    },
  ];

  return (
    <section id="media" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5 text-left">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 max-w-2xl">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
            <Newspaper className="w-3.5 h-3.5" />
            <span>GLOBAL PRESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Media coverage
          </h2>
          <p className="text-base text-white/60 leading-relaxed font-medium">
            Read reporting from leading international publications tracking insights, policy shifts, and deal announcements.
          </p>
        </div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {articles.map((art, idx) => (
            <motion.div
              key={idx}
              variants={itemVars}
              className="group relative p-8 rounded-xl border border-white/5 bg-[#12343f]/20 flex flex-col justify-between h-[280px] transition-premium hover:border-electric-turquoise/35 hover:shadow-lg hover:shadow-electric-turquoise/5 select-none"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs tracking-widest text-electric-turquoise font-bold uppercase">
                  {art.source}
                </span>
                <span className="font-mono text-[10px] text-white/40 font-bold uppercase">
                  {art.date}
                </span>
              </div>

              <div className="my-auto space-y-2">
                <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-electric-turquoise transition-colors flex items-start justify-between">
                  <span>{art.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-electric-turquoise opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2 mt-1" />
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[10px] font-mono font-bold tracking-widest text-denim-grey uppercase">
                Read full release
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
