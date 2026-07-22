"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, X, Globe, MapPin, ArrowRight, Award } from "lucide-react";
import { sponsors, Sponsor } from "@/utils/sponsorData";

export default function SponsorEcosystem() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>("All");

  const tiers = ["All", "Titanium", "Platinum", "Gold", "Silver"];

  const filteredSponsors = sponsors.filter((s) => {
    return selectedTier === "All" || s.tier === selectedTier;
  });

  return (
    <section id="sponsors" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] ambient-glow glow-blue" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
              06 // Capital Partnerships
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
              The Interactive Sponsor Ecosystem
            </h2>
            <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
              Explore solutions offered by the world's leading economic infrastructures, payment platforms, and digital asset custodians.
            </p>
          </div>
        </div>

        {/* Infinite Scrolling Logo Marquee Band */}
        <div className="marquee-container mb-16 py-6 border-y border-border-dark bg-graphite/10 backdrop-blur-sm">
          <div className="marquee-track">
            {sponsors.map((sp) => (
              <div key={`m1-${sp.id}`} className="text-xs font-sans font-black tracking-widest text-foreground/35 flex items-center mx-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-accent mr-3 animate-pulse" />
                <span>{sp.logo}</span>
              </div>
            ))}
            {sponsors.map((sp) => (
              <div key={`m2-${sp.id}`} className="text-xs font-sans font-black tracking-widest text-foreground/35 flex items-center mx-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-accent mr-3 animate-pulse" />
                <span>{sp.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border-dark/60 pb-8">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => { setSelectedSponsor(null); setSelectedTier(tier); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-premium border ${
                selectedTier === tier
                  ? "bg-purple-accent border-purple-accent text-white shadow-md shadow-purple-glow"
                  : "bg-graphite/35 border-border-dark text-foreground/60 hover:text-white hover:border-foreground/20"
              }`}
            >
              {tier === "All" ? "All Partners" : `${tier} Partners`}
            </button>
          ))}
        </div>

        {/* Interactive Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSponsors.map((sp, idx) => {
            const isSelected = selectedSponsor?.id === sp.id;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                key={sp.id}
                onClick={() => setSelectedSponsor(isSelected ? null : sp)}
                className={`glass-card p-8 rounded-2xl border text-center flex flex-col items-center justify-center cursor-pointer min-h-[160px] relative ${
                  isSelected
                    ? "border-purple-accent bg-purple-glow/15 shadow-lg shadow-purple-glow"
                    : "border-border-dark hover:border-white/20"
                }`}
              >
                {/* Tier indicator tag */}
                <span className={`absolute top-3 right-3 text-[7px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  sp.tier === "Titanium" ? "bg-purple-accent/20 text-purple-accent border border-purple-accent/20" :
                  sp.tier === "Platinum" ? "bg-emerald-accent/20 text-emerald-accent" : "bg-graphite text-foreground/55"
                }`}>
                  {sp.tier}
                </span>

                <Building2 className={`w-6 h-6 mb-3 transition-colors ${isSelected ? "text-purple-accent animate-pulse" : "text-foreground/40"}`} />
                
                {/* Logo Text representation styled like a corporate brand logo */}
                <h3 className="font-sans font-black tracking-widest text-lg text-white">
                  {sp.logo}
                </h3>

                <span className="text-[9px] font-mono text-foreground/45 mt-2 flex items-center">
                  <MapPin className="w-3 h-3 text-purple-accent mr-1" />
                  {sp.booth.split("/")[0]}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Solution Drawer (Expanded details display) */}
        <AnimatePresence>
          {selectedSponsor && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 glass-panel p-8 rounded-2xl border border-purple-accent/30 relative"
            >
              <button
                onClick={() => setSelectedSponsor(null)}
                className="absolute top-6 right-6 p-1.5 rounded-lg bg-graphite/40 border border-border-dark text-foreground/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left side: Sponsor info */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <span className="text-[10px] font-mono font-bold text-purple-accent uppercase">
                    Partner Portfolio // {selectedSponsor.tier} Partner
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {selectedSponsor.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {selectedSponsor.description}
                  </p>

                  <div className="flex items-center space-x-2 text-xs font-mono text-foreground/40 bg-graphite/35 p-3 rounded-lg border border-border-dark w-fit">
                    <MapPin className="w-4 h-4 text-emerald-accent" />
                    <span className="text-white font-bold">{selectedSponsor.booth}</span>
                  </div>
                </div>

                {/* Middle: Showcased Solutions */}
                <div className="lg:col-span-4 flex flex-col space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-white/50 font-bold">Solutions Showcased</h4>
                  <ul className="space-y-3">
                    {selectedSponsor.solutions.map((sol, idx) => (
                      <li key={idx} className="flex items-start space-x-3 bg-midnight/40 p-3 rounded-xl border border-border-dark">
                        <Award className="w-4.5 h-4.5 text-purple-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-foreground/80 font-semibold">{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Actions */}
                <div className="lg:col-span-3 flex flex-col space-y-4 self-center lg:pl-6 lg:border-l lg:border-border-dark">
                  <a
                    href={selectedSponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-graphite/45 hover:bg-graphite/80 text-white text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 border border-border-dark transition-premium"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit website</span>
                  </a>
                  <button
                    onClick={() => {
                      alert(`Meeting request successfully logged with ${selectedSponsor.name} team at ${selectedSponsor.booth.split(" / ")[0]}. Check your profile dashboard.`);
                    }}
                    className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-premium shadow-md shadow-purple-glow"
                  >
                    <span>Request Booth Meeting</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
