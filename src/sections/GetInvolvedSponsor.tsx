import { getAssetPath } from "@/utils/assetPath";
"use client";
import { motion } from "framer-motion";
import { Eye, Handshake, Shield, MessageSquare, ArrowUpRight } from "lucide-react";

export default function GetInvolvedSponsor() {
  const points = [
    {
      title: "Visibility",
      desc: "Year-round global exposure across media and markets.",
      icon: Eye
    },
    {
      title: "Access",
      desc: "One-on-one deal rooms and curated networking.",
      icon: Handshake
    },
    {
      title: "Influence",
      desc: "Shape conversations with regulators, investors, and ministers.",
      icon: MessageSquare
    },
    {
      title: "Credibility",
      desc: "Join standard setters and institutional anchors at the summit.",
      icon: Shield
    }
  ];

  return (
    <section 
      id="sponsor-2026" 
      className="relative py-24 bg-[#eefaff] border-t border-slate-100 overflow-hidden scroll-mt-20"
    >
      
      <style dangerouslySetInnerHTML={{__html: `
        .sponsor-sec-title {
          color: #0f172a !important;
        }
        .sponsor-sec-desc {
          color: #475569 !important;
        }
        .sponsor-card-title {
          color: #0f172a !important;
        }
        .sponsor-card-desc {
          color: #475569 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0b766e] uppercase block">
            PARTNERSHIP OPPORTUNITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight sponsor-sec-title">
            Explore Sponsorship Opportunities
          </h2>
          <p className="text-sm md:text-base leading-relaxed sponsor-sec-desc max-w-2xl mx-auto font-medium">
            Curated themes reflecting the most critical challenges and opportunities shaping finance worldwide in a rapidly evolving landscape.
          </p>
        </div>

        {/* Why Sponsor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white border border-sky-100/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left space-y-4 group hover:translate-y-[-2px]"
              >
                <div className="p-3.5 bg-[#12e8e8]/10 rounded-2xl group-hover:bg-[#12e8e8]/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#0b766e]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold sponsor-card-title">
                    {point.title}
                  </h3>
                  <p className="text-xs leading-relaxed sponsor-card-desc">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-4">
          <a
            href={getAssetPath("/general-enquiry")}
            className="inline-block bg-[#12e8e8] hover:bg-[#082028] text-[#082028] hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
          >
            Apply to Sponsor
          </a>
        </div>

      </div>
    </section>
  );
}
