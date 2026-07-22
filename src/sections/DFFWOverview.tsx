"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Handshake, Landmark, Target } from "lucide-react";

export default function DFFWOverview() {
  const objectives = [
    {
      title: "Showcase Innovation & Policy",
      desc: "Highlight Dubai's leadership and regulatory framework in pioneering new financial technologies and international standards.",
      icon: Landmark,
      img: getAssetPath("/images/dfs_nasdaq_keynote.jpg")
    },
    {
      title: "Facilitate Global Collaboration",
      desc: "Strengthen ties between regional and global financial players, encouraging cross-border corridor connections and investment flows.",
      icon: Handshake,
      img: getAssetPath("/images/dfs_networking_hall.jpg")
    },
    {
      title: "Drive Regulatory Dialogue",
      desc: "Foster open discussions around digital assets, compliance rails, tokenization structures, and sovereign wealth frameworks.",
      icon: ShieldCheck,
      img: getAssetPath("/images/dfs_executive_portrait_custom.jpg")
    },
    {
      title: "Ecosystem Acceleration",
      desc: "Provide early-stage fintech, Web3 scale-ups, and AI builders direct access to venture capital, accelerators, and launchpad licensing.",
      icon: Target,
      img: getAssetPath("/images/dfs_female_executive_custom.jpg")
    },
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    initial: { y: 25, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative py-24 bg-white border-t border-b border-slate-100">
      
      {/* Local style overrides to defeat global overrides on text color */}
      <style dangerouslySetInnerHTML={{__html: `
        .dffw-sec-title {
          color: #0f172a !important;
        }
        .dffw-sec-desc {
          color: #475569 !important;
        }
        .dffw-sec-subtitle {
          color: #64748b !important;
        }
        .dffw-card-title {
          color: #0f172a !important;
        }
        .dffw-card-desc {
          color: #475569 !important;
        }
        .obj-card-title {
          color: #ffffff !important;
        }
      `}} />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 w-full space-y-24">
        
        {/* Section 1: Overview split with featured image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-center">
          
          {/* Left Column: Premium Featured Image */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[32px] shadow-2xl border border-slate-100 aspect-[4/3] group cursor-default"
            >
              <img 
                src={getAssetPath("/images/dfs_visa_exhibition_booth.jpg")} 
                alt="Dubai Future Finance Week Crowd" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 text-xs font-mono font-bold tracking-widest text-white/90 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 uppercase">
                Live from Dubai
              </span>
            </motion.div>
          </div>

          {/* Right Column: Title, Description and Theme/Vision */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0d9488] uppercase block">
                THE NEXT ERA OF FINANCE
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight dffw-sec-title">
                Shaping Global Markets
              </h2>
              <p className="text-sm md:text-base leading-relaxed font-semibold dffw-sec-desc">
                Dubai Future Finance Week is a landmark initiative organised by DIFC to convene global financial leaders, innovators, regulators, and investors. Anchored by the Dubai FinTech Summit, the week features a curated series of events that explore the future of finance across technology, capital, sustainability, and governance.
              </p>
            </div>

            {/* Theme & Vision Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Theme */}
              <div className="relative bg-slate-50 border border-slate-200/60 p-6 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold dffw-card-title">Theme</h3>
                  <p className="text-xs leading-relaxed font-semibold dffw-card-desc">
                    Finance Reimagined: Where innovation meets policy and purpose
                  </p>
                </div>
              </div>

              {/* Card 2: Vision */}
              <div className="relative bg-slate-50 border border-slate-200/60 p-6 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold dffw-card-title">Vision</h3>
                  <p className="text-xs leading-relaxed font-semibold dffw-card-desc">
                    To position Dubai as the global benchmark for shaping the future of finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Strategic Objectives Grid */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold tracking-tight uppercase font-sans dffw-sec-title">
              <span className="text-[#0d9488]">/</span> Strategic Objectives
            </h3>
            <p className="text-xs leading-relaxed font-medium dffw-sec-subtitle">
              Core directives guiding the event series and institutional partnerships.
            </p>
          </div>

          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row gap-6 w-full items-stretch min-h-[460px]"
          >
            {objectives.map((obj, index) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVars}
                  className="relative rounded-[32px] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer border border-white/5 flex flex-col justify-end w-full h-[380px] lg:h-[460px] lg:flex-1 lg:hover:flex-[2.5]"
                >
                  {/* Background Image */}
                  <img 
                    src={obj.img} 
                    alt={obj.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  
                  {/* Cinematic Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                  
                  {/* Ambient Teal Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0d9488]/0 to-[#0d9488]/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Float Icon Badge in glassmorphism */}
                  <div className="absolute top-6 left-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center group-hover:bg-[#0d9488] group-hover:border-transparent transition-all duration-300 z-20">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Sequence Number Watermark */}
                  <span className="absolute top-4 right-8 text-5xl font-black font-mono tracking-tight text-white/5 select-none z-10 transition-opacity group-hover:text-white/15">
                    0{index + 1}
                  </span>

                  {/* Text Details Container */}
                  <div className="absolute bottom-0 inset-x-0 p-8 space-y-3 flex flex-col justify-end text-left z-20">
                    
                    <h4 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight obj-card-title">
                      {obj.title}
                    </h4>
                    
                    {/* Description: Always visible on mobile, expandable on desktop */}
                    <p className="text-xs md:text-sm leading-relaxed text-slate-300 font-medium transition-all duration-500 ease-out lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-24 lg:group-hover:mt-2 overflow-hidden">
                      {obj.desc}
                    </p>
                    
                    {/* View Link Arrow */}
                    <div className="flex items-center text-xs font-mono font-bold text-[#12e8e8] tracking-widest pt-2">
                      <span className="uppercase">Explore</span>
                      <svg 
                        className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
