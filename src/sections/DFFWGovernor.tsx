"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function DFFWGovernor() {
  return (
    <section className="relative py-20 bg-[#02090f] flex items-center justify-center border-t border-white/5">
      
      {/* Local CSS overrides to enforce correct contrast and defeat global styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .gov-sec-title {
          color: #ffffff !important;
        }
        .gov-tag {
          color: #c5a880 !important;
        }
        .gov-quote {
          color: #ffffff !important;
        }
        .gov-title {
          color: #12e8e8 !important;
        }
        .gov-loc {
          color: rgba(255, 255, 255, 0.4) !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Governor Photo (col-span-5) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-sm lg:max-w-none w-full"
          >
            <img 
              src={getAssetPath("/images/speaker_he_essa_kazim.png")} 
              alt="H.E. Essa Kazim, Governor of DIFC" 
              className="w-full h-auto object-cover block hover:scale-105 transition-transform duration-700"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Right Side: Message Card (col-span-7) */}
        <div className="lg:col-span-7 space-y-6 w-full">
          <div className="text-left space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight gov-sec-title">
              <span className="text-[#12e8e8]">/</span> A Message from the Governor
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border-l-4 border-[#c5a880] border-t border-r border-b border-white/5 shadow-2xl overflow-hidden group text-left"
          >
            {/* Quote Icon background */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-[#c5a880] group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Quote className="w-24 h-24" />
            </div>

            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase block gov-tag">
                OFFICIAL ADDRESS
              </span>
              <p className="text-lg md:text-xl font-medium italic leading-relaxed font-serif gov-quote">
                "Dubai Future Finance Week is where global leaders and innovators unite to shape the future of finance, reflecting our commitment to innovation, trust, and opportunity."
              </p>
              <div className="border-t border-white/5 pt-4">
                <h5 className="text-sm font-mono font-bold uppercase tracking-wider gov-title">
                  Governor, DIFC, UAE
                </h5>
                <span className="text-[10.5px] font-semibold block mt-0.5 gov-loc">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
