"use client";
import { getAssetPath } from "@/utils/assetPath";
import { motion } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";

export default function BuyTickets() {
  const passes = [
    {
      id: "expo",
      name: "Expo Pass",
      price: "FREE",
      originalPrice: "USD 199",
      buttonText: "Apply now",
      note: "*Complimentary Expo Pass is not applicable to solution providers within the FinTech or financial services sectors.",
      href: getAssetPath("/general-enquiry")
    },
    {
      id: "conference",
      name: "Conference Pass",
      price: "USD 599",
      originalPrice: "USD 999",
      buttonText: "Buy tickets",
      note: "*Super early bird offer valid till 2 March 2026.",
      href: getAssetPath("/general-enquiry")
    },
    {
      id: "vip",
      name: "VIP Pass",
      price: "USD 1,299",
      originalPrice: "USD 1,999",
      buttonText: "Buy tickets",
      note: "*Super early bird offer valid till 2 March 2026.",
      href: getAssetPath("/general-enquiry")
    },
    {
      id: "vip-investor",
      name: "VIP Investor Pass",
      price: "USD 1,299",
      originalPrice: "USD 1,999",
      buttonText: "Buy tickets",
      note: "*Super early bird offer valid till 2 March 2026.",
      href: getAssetPath("/general-enquiry")
    }
  ];

  const benefits = [
    { name: "Expo area", expo: true, conf: true, vip: true, inv: true },
    { name: "Innovation stages", expo: true, conf: true, vip: true, inv: true },
    { name: "Meet-up cafe", expo: true, conf: true, vip: true, inv: true },
    { name: "MoU ceremonies", expo: true, conf: true, vip: true, inv: true },
    { name: "Post event report", expo: true, conf: true, vip: true, inv: true },
    { name: "AI image gallery", expo: true, conf: true, vip: true, inv: true },
    { name: "Mobile app general features", expo: true, conf: true, vip: true, inv: true },
    { name: "Ignyte membership", expo: false, conf: true, vip: true, inv: true },
    { name: "Mobile app matchmaking and networking", expo: false, conf: true, vip: true, inv: true },
    { name: "Whatsapp bot", expo: false, conf: true, vip: true, inv: true },
    { name: "Workshops", expo: false, conf: true, vip: true, inv: true },
    { name: "General lunch area", expo: false, conf: true, vip: true, inv: true },
    { name: "Plenary stages", expo: false, conf: true, vip: true, inv: true },
    { name: "Post-event content library", expo: false, conf: true, vip: true, inv: true },
    { name: "Fast track", expo: false, conf: false, vip: true, inv: true },
    { name: "FinTech Majlis", expo: false, conf: false, vip: true, inv: true },
    { name: "FinTech World Cup", expo: false, conf: false, vip: true, inv: true },
    { name: "VIP Lounge", expo: false, conf: false, vip: true, inv: true },
    { name: "Valet parking", expo: false, conf: false, vip: true, inv: true },
    { name: "Networking reception", expo: false, conf: false, vip: true, inv: true },
    { name: "Premium lunch plaza", expo: false, conf: false, vip: true, inv: true },
    { name: "Souvenir", expo: false, conf: false, vip: true, inv: true },
    { name: "Start-up pitch decks", expo: false, conf: false, vip: false, inv: true },
    { name: "Investors Lounge", expo: false, conf: false, vip: false, inv: true },
    { name: "Deal Room", expo: false, conf: false, vip: false, inv: true }
  ];

  return (
    <section id="buy-tickets" className="relative py-24 bg-[#02090f] text-white overflow-hidden scroll-mt-20">
      
      {/* Background radial glows */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[40%] bg-[#12e8e8]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[40%] bg-[#c5a880]/5 rounded-full blur-[120px]" />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .ticket-title {
          color: #ffffff !important;
        }
        .ticket-desc {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .ticket-card-title {
          color: #ffffff !important;
        }
        .ticket-card-price {
          color: #10d2d2 !important;
        }
        .ticket-card-orig {
          color: rgba(255, 255, 255, 0.35) !important;
        }
        .ticket-card-note {
          color: rgba(255, 255, 255, 0.45) !important;
        }
        .table-header-desc {
          color: rgba(255, 255, 255, 0.65) !important;
        }
        .benefit-name {
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}} />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Header Block (Mobile Only) */}
        <div className="text-center space-y-4 max-w-3xl mx-auto lg:hidden">
          <span className="text-xs font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
            CHOOSE YOUR PASS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight ticket-title">
            Pick Your Pass
          </h2>
          <p className="text-sm md:text-base leading-relaxed ticket-desc max-w-xl mx-auto">
            Your access to two days of global FinTech dialogue. Select the pass that best fits your registration profile.
          </p>
        </div>

        {/* Unified Merged Table Layout (Desktop Only) */}
        <div className="hidden lg:block space-y-6">
          <div className="rounded-[32px] border border-white/5 overflow-hidden shadow-2xl bg-[#03101c]/60 backdrop-blur-md">
            
            {/* Merged Headers & Cards Row */}
            <div className="grid grid-cols-[1.5fr_1.1fr_1.1fr_1.1fr_1.1fr] items-stretch border-b border-slate-800">
              
              {/* Column 1: Feature Title & Intro */}
              <div 
                className="flex flex-col justify-center text-left p-8 border-r border-slate-800 relative overflow-hidden bg-gradient-to-b from-[#03101c] to-[#051a2d]"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(18, 232, 232, 0.05) 0%, rgba(3, 16, 28, 0.95) 100%)"
                }}
              >
                {/* Visual chevrons in background */}
                <div className="absolute right-2 top-0 bottom-0 flex items-center opacity-10 pointer-events-none">
                  <svg className="w-16 h-16 text-[#12e8e8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </div>
                
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#12e8e8] uppercase block mb-2">
                  COMPARE PASSES
                </span>
                <h2 className="text-4xl font-black leading-tight ticket-title">
                  Pick your pass
                </h2>
              </div>

              {/* Pass Columns Headers */}
              {passes.map((pass, index) => (
                <div 
                  key={pass.id} 
                  className={`flex flex-col justify-between bg-[#05111b] px-4 lg:px-5 py-6 text-left min-h-[350px] relative ${
                    index < passes.length - 1 ? "border-r border-slate-800" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
                      {pass.id === "expo" ? "EXPO ONLY" : pass.id === "conference" ? "DELEGATE" : "VIP ACCESS"}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight leading-tight ticket-card-title">
                      {pass.name}
                    </h3>
                    <div className="space-y-1">
                      <div className="text-3xl font-black ticket-card-price">{pass.price}</div>
                      {pass.originalPrice && (
                        <div className="text-xs text-red-500 line-through decoration-red-500 decoration-1">
                          Original: {pass.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mt-auto">
                    <a
                      href={pass.href}
                      className="w-full py-3 bg-[#12e8e8] hover:bg-white text-[#082028] font-bold rounded-xl text-center block transition-all duration-300 text-sm shadow-md hover:scale-[1.01] active:scale-95"
                    >
                      {pass.buttonText === "Apply now" ? "Apply now" : "Buy tickets"}
                    </a>
                    <p className="text-[9px] leading-relaxed text-slate-400 mt-1">
                      {pass.note}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Table Rows (Features) */}
            <div className="divide-y divide-slate-800/40">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-[1.5fr_1.1fr_1.1fr_1.1fr_1.1fr] items-stretch text-sm transition-colors duration-150 ${
                    idx % 2 === 0 ? "bg-slate-900/40" : "bg-slate-800/40"
                  } hover:bg-slate-800/60`}
                >
                  {/* Benefit name */}
                  <div className="text-left font-bold text-slate-200 px-8 py-4 flex items-center border-r border-slate-800/40 text-base">
                    {benefit.name}
                  </div>
                  
                  {/* Expo Pass */}
                  <div className="flex justify-center items-center py-3.5 border-r border-slate-800/40">
                    {benefit.expo ? (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>

                  {/* Conference Pass */}
                  <div className="flex justify-center items-center py-3.5 border-r border-slate-800/40">
                    {benefit.conf ? (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>

                  {/* VIP Pass */}
                  <div className="flex justify-center items-center py-3.5 border-r border-slate-800/40">
                    {benefit.vip ? (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>

                  {/* VIP Investor Pass */}
                  <div className="flex justify-center items-center py-3.5">
                    {benefit.inv ? (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg 
                        className="w-4 h-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile View Card Grid (Mobile & Tablet Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {passes.map((pass) => (
            <motion.div
              key={pass.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-[28px] bg-[#05111b] border border-white/10 backdrop-blur-xl hover:border-[#12e8e8]/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-black tracking-tight leading-tight ticket-card-title">
                    {pass.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-2xl font-black ticket-card-price">{pass.price}</span>
                    {pass.originalPrice && (
                      <div className="text-[10px] line-through ticket-card-orig">
                        {pass.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Included benefits lists */}
                <div className="border-t border-white/5 pt-4 space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#c5a880] uppercase block">
                    Included Benefits:
                  </span>
                  <ul className="space-y-1.5 text-left">
                    {benefits.map((benefit, bIdx) => {
                      const isIncluded = 
                        (pass.id === "expo" && benefit.expo) ||
                        (pass.id === "conference" && benefit.conf) ||
                        (pass.id === "vip" && benefit.vip) ||
                        (pass.id === "vip-investor" && benefit.inv);

                      if (!isIncluded) return null;

                      return (
                        <li key={bIdx} className="text-xs flex items-center space-x-2 benefit-name">
                          <Check className="w-3.5 h-3.5 text-[#12e8e8] shrink-0" />
                          <span>{benefit.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <a
                  href={pass.href}
                  className="w-full py-3 bg-[#12e8e8] hover:bg-white text-slate-950 font-bold rounded-xl text-center block transition-all duration-300 text-sm shadow-lg hover:scale-[1.02]"
                >
                  {pass.buttonText === "Apply now" ? "Apply now" : "Buy tickets"}
                </a>
                <p className="text-[10px] leading-relaxed text-left ticket-card-note">
                  {pass.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
