"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";

export default function AboutDFFW() {
  return (
    <section 
      className="relative py-28 bg-cover bg-center bg-no-repeat flex items-center justify-end overflow-hidden border-t border-white/5 min-h-[480px]"
      style={{
        backgroundImage: `url(${getAssetPath("/images/gate-building.png")})`,
      }}
    >
      {/* Dark overlay to merge sunset colors with the page theme */}
      <div className="absolute inset-0 bg-slate-950/65 z-0 pointer-events-none" />

      {/* Local CSS overrides to defeat global styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .dffw-tag {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .dffw-desc {
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex justify-end">
        
        {/* Text Container without background */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-xl text-left z-10"
        >
          {/* Logo */}
          <div className="mb-6 mt-2">
            <img 
              src={getAssetPath("/images/Dffw-New-Logo.svg")} 
              alt="Dubai Future Finance Week Logo" 
              className="h-14 w-auto object-contain block brightness-0 invert"
            />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed font-normal dffw-desc">
            Dubai FinTech Summit this year is part of Dubai Future Finance Week. It’s a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
