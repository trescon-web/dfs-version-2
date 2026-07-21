"use client";

import { motion } from "framer-motion";

export default function RoundtablesContent() {
  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ccf3ff 0%, #ffffff 51%, #e6f1fd 100%)"
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dialogues & Speakers Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 bg-white p-2"
          >
            <img
              src="https://dubaifintechsummit.com/wp-content/uploads/2026/04/dfs-dialogues-new-img.webp"
              alt="DFS Dialogues workshops, roundtables, and speaker panels at Dubai FinTech Summit"
              className="w-full h-auto rounded-2xl object-cover block"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-[#2d4750] text-[18px] md:text-[20px] leading-relaxed font-sans font-medium">
              <p>
                DFS Dialogues brings a powerful line-up of roundtables and workshops curated by our partners 
                to sharpen your summit experience. Expect focused conversations, high-value insights 
                and meaningful connections.
              </p>
              <p>
                From open sessions to invite-only discussions, each dialogue is designed to deepen your 
                understanding, expand your network, and spark real collaboration across FinTech and finance.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
