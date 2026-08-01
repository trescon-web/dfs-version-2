"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AssociationsWhyAssociate() {
  const points = [
    "Global visibility for your ecosystem and members",
    "Access to ministers, regulators, investors, and FinTech leaders",
    "Preferential group benefits for delegations and communities",
    "Thought-leadership, speaking, and roundtable opportunities",
    "Leverage Dubai as a gateway to regional and global markets"
  ];

  return (
    <section className="relative pb-24 bg-[#eefaff] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-20">
        
        {/* Upper Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stage/Speaker Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 bg-white p-2 order-2 lg:order-1"
          >
            <img
              src={getAssetPath("/images/dfs_networking_hall.jpg")}
              alt="Speaker on stage at Dubai FinTech Summit World Cup"
              className="w-full h-auto rounded-2xl object-cover block"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column: Key Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-[#082028] leading-tight">
              Why associate with DFS
            </h2>
            
            <ul className="space-y-5 text-[#2d4750] text-[16px] md:text-[18px] font-sans font-medium">
              {points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 leading-relaxed">
                  {/* Custom thick caret icon matching screenshot */}
                  <svg 
                    className="w-4 h-4 text-[#082028] mt-[6px] shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={4}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Lower Full-Width Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full text-center space-y-8 pt-10 border-t border-slate-200/50"
        >
          <h3 className="text-xl md:text-2xl font-[800] text-[#082028] tracking-tight leading-relaxed max-w-3xl mx-auto">
            Showcase your ecosystem on the world’s most influential FinTech stage.
          </h3>
          
          <div className="flex justify-center">
            <a
              href={getAssetPath("/general-enquiry")}
              className="inline-block bg-[#12e8e8] hover:bg-[#082028] text-[#082028] hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
            >
              Enquire now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

