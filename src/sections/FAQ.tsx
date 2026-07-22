"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can I purchase a Delegate or VIP Pass?",
      a: "All passes can be acquired directly on our ticket terminal page. We accept standard bank transfers, corporate cards, and cryptocurrency rails for VVIP access.",
    },
    {
      q: "Where is the summit located and which hotels are close?",
      a: "The summit is hosted at Madinat Jumeirah, Dubai. We partner with the Jumeirah Hotels Group to provide exclusive room rates for summit delegates. Booking links are sent upon pass confirmation.",
    },
    {
      q: "Can startups apply for pitching and deal-matching spaces?",
      a: "Yes, early-stage companies can apply directly to our Startup Zone sandbox program. If selected, you will receive a demo stand and one-on-one match schedules with venture capitalist mentors.",
    },
    {
      q: "What tracks are covered in the agenda?",
      a: "We cover four core tracks: AI & Cognitive Finance, Decentralized Finance (DeFi) rails, Global Regulations & Policy, and Digital Sovereign payment clearing infrastructures.",
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5 text-left">

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 mb-16 flex flex-col items-start w-full">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>INFORMATION CENTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQs list */}
        <div className="space-y-4 w-full">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-premium ${
                  isExpanded
                    ? "bg-[#12343f]/30 border-electric-turquoise/40 shadow-lg shadow-electric-turquoise/5"
                    : "bg-[#12343f]/10 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Accordion header */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-6 flex items-center justify-between cursor-pointer select-none"
                >
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-electric-turquoise" : ""
                    }`}
                  />
                </div>

                {/* Collapsible content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
