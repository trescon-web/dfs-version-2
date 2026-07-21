"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GetInvolvedSpeak() {
  return (
    <section id="speak" className="relative py-20 overflow-hidden scroll-mt-20 bg-gradient-to-b from-[#ccf3ff] via-white to-[#e6f1fd]">
      
      {/* Local style overrides to defeat global styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .speak-title {
          color: #082028 !important;
        }
        .speak-subtitle {
          color: #082028 !important;
        }
        .speak-desc {
          color: #082028 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Slanted Speaker Graphics Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/images/dfs_executive_portrait_custom.jpg"
                alt="Take the stage speakers"
                className="w-full h-auto block object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Speaker Apply Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left space-y-6 lg:pl-4"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none speak-title">
                Take the stage
              </h2>
              <span className="text-sm font-mono font-bold tracking-widest uppercase block speak-subtitle">
                APPLY TO BECOME A SPEAKER
              </span>
            </div>

            <p className="text-base md:text-lg leading-relaxed font-medium speak-desc">
              Interested to take the stage as a keynote speaker or a panelist at Dubai FinTech Summit?
            </p>

            <div className="pt-2">
              <a
                href="/general-enquiry"
                className="inline-block bg-[#12e8e8] hover:bg-slate-900 text-slate-950 hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
              >
                Apply now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
