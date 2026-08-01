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
      className="relative py-24 bg-[#f8fafc] bg-cover bg-bottom no-repeat border-t border-slate-200"
      style={{ 
        backgroundImage: `url(${getAssetPath("/images/sectors-light-bg.png")})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      {/* Light subtle overlay if the image pattern is too strong, else just clear */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-0" />

      {/* Bulletproof CSS for Sector Card Dark Hover */}
      <style dangerouslySetInnerHTML={{__html: `
        .sector-card-item {
          background-color: #ffffff;
          border-color: rgba(226, 232, 240, 0.9);
          transition: all 0.3s ease;
        }
        .sector-card-item:hover {
          background-color: #02090f !important;
          border-color: #1e293b !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.4) !important;
        }
        .sector-card-item .sector-icon {
          color: #0b766e;
          transition: all 0.3s ease;
        }
        .sector-card-item:hover .sector-icon {
          color: #12e9e9 !important;
          transform: scale(1.15);
        }
        .sector-card-item .sector-text {
          color: #0f172a !important;
          transition: all 0.3s ease;
        }
        .sector-card-item:hover .sector-text {
          color: #ffffff !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0b766e] uppercase block bg-[#0b766e]/10 inline-block px-3.5 py-1.5 rounded-full">
            ECOSYSTEM SEGMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-[800] tracking-tight leading-tight text-slate-900">
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
              className="flex items-center space-x-3.5 p-4 rounded-2xl border cursor-default shadow-sm sector-card-item"
            >
              <CheckCircle className="w-4 h-4 shrink-0 sector-icon" />
              <span className="font-sans text-sm font-bold sector-text">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

