"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AmbassadorsContent() {
  return (
    <section className="relative py-24 bg-[#eefaff] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#12e8e8]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Information & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#082028] leading-tight">
              Join the Dubai FinTech Summit 2026 ambassador programme
            </h2>
            <div className="w-16 h-1 bg-[#12e8e8] rounded-full" />
            
            <div className="space-y-6 text-[#2d4750] text-[16px] md:text-[18px] leading-relaxed font-sans font-medium">
              <p>
                Dubai FinTech Summit ambassadors are recognised leaders who champion innovation, inclusion, 
                and meaningful change across the financial ecosystem.
              </p>
              <p>
                As an ambassador, you help spark critical conversations, bring industry voices together, 
                and strengthen the global FinTech community.
              </p>
              <p>
                Be part of a group that shapes conversations, moves ideas forward and drives impact 
                at the Dubai FinTech Summit 2026.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={getAssetPath("/general-enquiry")}
                className="inline-block bg-[#12e8e8] hover:bg-[#082028] text-[#082028] hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
              >
                Apply to be an ambassador
              </a>
            </div>
          </motion.div>

          {/* Right Column: Ambassador Programme Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 bg-white p-2"
          >
            <img
              src={getAssetPath("/images/dfs_vip_delegates_custom.jpg")}
              alt="Join the Dubai FinTech Summit 2026 Ambassador Programme"
              className="w-full h-auto rounded-2xl object-cover block"
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
