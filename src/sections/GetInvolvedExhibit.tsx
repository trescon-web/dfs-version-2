"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Award, CheckCircle2, Layout, ArrowUpRight } from "lucide-react";

export default function GetInvolvedExhibit() {
  const [activeTab, setActiveTab] = useState("exhibitor");

  const packages = [
    {
      id: "exhibitor",
      badge: "EXHIBITOR",
      title: "Exhibit",
      price: "USD 6,000",
      image: getAssetPath("/images/dfs_visa_exhibition_booth.jpg"),
      buttonText: "Buy now",
      note: "*Price includes cost of Exhibition Package and a pre-built exhibition stand.",
      benefits: [
        {
          title: "Tickets:",
          icon: Ticket,
          items: [
            "Conference Pass : 2",
            "Expo Pass : 3"
          ]
        },
        {
          title: "Branding:",
          icon: Award,
          items: [
            "Your company logo with a hyperlink to your website will appear on the event website.",
            "Your company logo will be branded on pre-event promotional materials and at-event materials including but not limited to: Event emailers and Post-event report.",
            "Event website to contain and maintain the same level of branding for up to 6 months after the event."
          ]
        }
      ]
    },
    {
      id: "startup-pod",
      badge: "START-UP POD",
      title: "Start-up Pod",
      price: "USD 3,000",
      image: getAssetPath("/images/stage-innovation.webp"),
      buttonText: "Buy now",
      note: "*Price includes cost of Start-up Pod Package and a pre-built exhibition pod.",
      benefits: [
        {
          title: "Exhibition Space & Booth:",
          icon: Layout,
          items: [
            "Exhibition Space: 2sqm",
            "Pre built exhibition booth"
          ]
        },
        {
          title: "Tickets:",
          icon: Ticket,
          items: [
            "Conference Pass : 1",
            "Expo Pass : 2"
          ]
        },
        {
          title: "Branding:",
          icon: Award,
          items: [
            "Your company logo with a hyperlink to your website will appear on the event website.",
            "Your company logo will be branded on pre-event promotional materials and at-event materials including but not limited to: Event emailers and Post-event report.",
            "Event website to contain and maintain the same level of branding for up to 6 months after the event."
          ]
        }
      ]
    }
  ];

  return (
    <section id="exhibit" className="relative py-24 bg-white border-t border-slate-100 overflow-hidden scroll-mt-20">
      
      {/* Local style overrides to defeat global styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .exhibit-title {
          color: #0f172a !important;
        }
        .exhibit-desc {
          color: #475569 !important;
        }
        .pkg-badge {
          color: #0b766e !important;
        }
        .pkg-price {
          color: #0f172a !important;
        }
        .pkg-title {
          color: #0f172a !important;
        }
        .pkg-label {
          color: #0f172a !important;
        }
        .pkg-benefit-title {
          color: #0f172a !important;
        }
        .pkg-benefit-item {
          color: #334155 !important;
        }
        .pkg-note {
          color: #64748b !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0b766e] uppercase block">
            EXHIBITION STANDS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight exhibit-title">
            Exhibition Packages
          </h2>
          <p className="text-sm md:text-base leading-relaxed exhibit-desc max-w-xl mx-auto font-medium">
            Showcase your brand's technology and hardware live on the summit floor to thousands of delegates and institutional buyers.
          </p>
        </div>

        {/* Dynamic Tab Switchers */}
        <div className="flex justify-center">
          <div className="flex space-x-2 bg-[#082028] p-1.5 rounded-2xl border border-slate-800 shadow-xl">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setActiveTab(pkg.id)}
                className={`px-8 py-3.5 text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-all duration-300 relative ${
                  activeTab === pkg.id
                    ? "bg-[#12e8e8] text-[#082028] shadow-lg shadow-[#12e8e8]/20 scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {pkg.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {packages
              .filter((pkg) => pkg.id === activeTab)
              .map((pkg) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                  
                  {/* Left Side: Booth Image & Pricing Box */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Image Container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-[4/3] flex items-center justify-center">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover block hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Pricing Box */}
                    <div className="p-5 rounded-2xl border-2 border-[#12e8e8] bg-slate-50/50 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase block pkg-badge">
                          {pkg.badge}
                        </span>
                        <div className="text-2xl font-black tracking-tight pkg-price mt-0.5">
                          {pkg.price}
                        </div>
                      </div>

                      <a
                        href={getAssetPath("/general-enquiry")}
                        className="py-3 px-6 bg-[#12e8e8] hover:bg-slate-900 text-slate-950 hover:text-white font-bold rounded-xl text-center transition-all duration-300 text-sm shadow-md cursor-pointer shrink-0 block"
                      >
                        Buy now
                      </a>
                    </div>

                    {/* Footnote */}
                    <p className="text-[10px] leading-relaxed text-left pkg-note px-1">
                      {pkg.note}
                    </p>
                  </div>

                  {/* Right Side: Package Benefits Details */}
                  <div className="lg:col-span-7 space-y-8 text-left py-2">
                    <div className="space-y-2 border-b border-slate-100 pb-4">
                      <h3 className="text-3xl font-black tracking-tight pkg-title">
                        {pkg.title}
                      </h3>
                      <span className="text-[10.5px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                        PACKAGE BENEFITS
                      </span>
                    </div>

                    {/* Benefits Categories */}
                    <div className="space-y-8">
                      {pkg.benefits.map((benefit, bIdx) => {
                        const Icon = benefit.icon;
                        return (
                          <div key={bIdx} className="space-y-4">
                            
                            {/* Group Header */}
                            <div className="flex items-center space-x-2.5">
                              <div className="p-1.5 bg-[#0b766e]/10 rounded-lg text-[#0b766e]">
                                <Icon className="w-4 h-4 text-[#0b766e]" />
                              </div>
                              <h4 className="text-sm font-bold uppercase tracking-wider pkg-benefit-title border-b border-[#12e8e8]/30 pb-0.5">
                                {benefit.title}
                              </h4>
                            </div>

                            {/* Bullet Items */}
                            <ul className="space-y-3 pl-9">
                              {benefit.items.map((item, iIdx) => (
                                <li key={iIdx} className="text-xs leading-relaxed pkg-benefit-item flex items-start space-x-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0b766e] mt-0.5 shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
