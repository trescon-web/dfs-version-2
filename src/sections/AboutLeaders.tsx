"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LeaderCategory {
  id: string;
  title: string;
  tag: string;
  image: string;
  metrics: string;
  subtitle: string;
  gridClass: string;
}

export default function AboutLeaders() {
  const leaders: LeaderCategory[] = [
    {
      id: "01",
      title: "Global FinTech leaders and innovators",
      tag: "INNOVATORS",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Global-FinTech-leaders-and-innovators-Img.webp",
      metrics: "2,500+",
      subtitle: "Unicorn founders, digital pioneers & disruptive startups",
      gridClass: "lg:col-span-8"
    },
    {
      id: "02",
      title: "Financial institutions",
      tag: "BANKING",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Financial-institutions-Img.webp",
      metrics: "450+",
      subtitle: "Tier-1 retail banks, investment houses & neo-banks",
      gridClass: "lg:col-span-4"
    },
    {
      id: "03",
      title: "Technology and data experts",
      tag: "TECH LEADS",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Technology-and-data-experts-Img.webp",
      metrics: "1,200+",
      subtitle: "Cloud architects, AI specialists & security pioneers",
      gridClass: "lg:col-span-4"
    },
    {
      id: "04",
      title: "Investors and capital providers",
      tag: "CAPITAL",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Investors-and-capital-providers-Img.webp",
      metrics: "$4Trn+",
      subtitle: "Venture capital, angel networks & sovereign wealth",
      gridClass: "lg:col-span-8"
    },
    {
      id: "05",
      title: "Policymakers and regulators",
      tag: "GOVERNANCE",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Policymakers-and-regulators-Img.webp",
      metrics: "60+",
      subtitle: "Central bankers, legal advisors & sandbox architects",
      gridClass: "lg:col-span-4"
    },
    {
      id: "06",
      title: "Ecosystem builders and partners",
      tag: "ALLIANCES",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Ecosystem-builders-and-partners-Img.webp",
      metrics: "180+",
      subtitle: "Accelerators, research hubs & academic networks",
      gridClass: "lg:col-span-4"
    },
    {
      id: "07",
      title: "Thought leaders and media",
      tag: "PRESS",
      image: "https://dubaifintechsummit.com/wp-content/uploads/2026/01/Thought-leaders-and-media-Img.webp",
      metrics: "120+",
      subtitle: "Journalists, authors & industry analysis publishers",
      gridClass: "lg:col-span-4"
    }
  ];

  return (
    <section className="relative py-28 bg-[#f4fbfb] border-t border-slate-100 overflow-hidden flex items-center justify-center">
      
      {/* Explicit style overrides to defeat global overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .leaders-head {
          color: #082028 !important;
        }
        .ld-title {
          color: #ffffff !important;
        }
        .ld-subtitle {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        .ld-metrics {
          color: #0d9488 !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488] uppercase block">
            PARTICIPANTS MATRIX
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight leaders-head">
            FinTech leaders in attendance
          </h2>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative h-[320px] rounded-[32px] overflow-hidden flex flex-col justify-between p-8 text-left border border-slate-200/30 shadow-xl group hover:-translate-y-1.5 transition-all duration-500 cursor-pointer ${leader.gridClass}`}
            >
              {/* Card Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url('${leader.image}')` }}
              />

              {/* Card Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent z-10 pointer-events-none" />

              {/* Top Row: Tag & Metrics */}
              <div className="relative z-20 flex justify-between items-start w-full">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                  {leader.id} // {leader.tag}
                </span>

                <div className="bg-white/95 px-4 py-1.5 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-1">
                  <span className="font-mono text-xs font-black ld-metrics uppercase">
                    {leader.metrics}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Text Details */}
              <div className="relative z-20 w-full space-y-2">
                <div className="flex items-end justify-between">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight ld-title max-w-xl group-hover:text-[#12e8e8] transition-colors duration-300">
                    {leader.title}
                  </h3>
                  
                  <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Subtitle / Description - slides down/up on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-500 ease-out">
                  <p className="text-xs font-semibold ld-subtitle pt-1 leading-relaxed">
                    {leader.subtitle}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
