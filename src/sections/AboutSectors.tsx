"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutSectors() {
  const sectors = [
    "Retail banking",
    "Corporate and commercial banking",
    "Private banking and wealth management",
    "Digital / neo banks",
    "Islamic banking",
    "Capital markets",
    "Non-bank lenders",
    "Insurance and reinsurance",
    "Government and public sector",
    "Travel, airlines and hospitality",
    "Remittance / FX / exchange houses",
    "Mobility, transport and logistics",
    "Retail and consumer brands",
  ];

  return (
    <section 
      className="relative py-24 bg-[#02090f] bg-cover bg-bottom no-repeat border-t border-white/5"
      style={{ 
        backgroundImage: `url(${getAssetPath("/images/curated-bg.png")})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay to dim/dull the background image for high text readability */}
      <div className="absolute inset-0 bg-[#02090f]/75 pointer-events-none z-0" />

      {/* Local CSS overrides to enforce correct contrast */}
      <style dangerouslySetInnerHTML={{__html: `
        .sectors-title {
          color: #ffffff !important;
        }
        .sectors-card-text {
          color: #ffffff !important;
        }
        .sectors-card:hover .sectors-card-text {
          color: #12e8e8 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
            ECOSYSTEM SEGMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight sectors-title">
            Industry sectors represented
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-center">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#12e8e8]/30 hover:bg-[#12e8e8]/5 transition-all duration-300 group cursor-default sectors-card shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-white/50 group-hover:text-[#12e8e8] transition-colors shrink-0" />
              <span className="font-sans text-base font-bold sectors-card-text transition-colors">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
