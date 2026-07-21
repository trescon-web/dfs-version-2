"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquare, Calendar, Users, Target, UserPlus } from "lucide-react";

interface MatchProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  type: "Founder" | "Investor";
  sector: "AI & Regulation" | "Digital Assets & Tokenisation" | "Payments & Corridors" | "Private Capital & WealthTech" | "Insurance & Risk" | "Future Finance";
  avatar: string;
  focus: string;
}

export default function NetworkingHub() {
  const [userRole, setUserRole] = useState<"Founder" | "Investor">("Founder");
  const [selectedSector, setSelectedSector] = useState<string>("AI & Regulation");
  const [matching, setMatching] = useState(false);
  const [matchedProfiles, setMatchedProfiles] = useState<MatchProfile[]>([]);

  const profiles: MatchProfile[] = [
    {
      id: "p1",
      name: "Valentin Stalf",
      role: "Co-Founder & CEO",
      company: "N26",
      type: "Founder",
      sector: "Future Finance",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&fit=crop",
      focus: "Looking for late-stage expansion funds and local banking partners in MENA."
    },
    {
      id: "p2",
      name: "Elizabeth Rossiello",
      role: "Founder & CEO",
      company: "AZA Finance",
      type: "Founder",
      sector: "Payments & Corridors",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&fit=crop",
      focus: "Expanding B2B payment API nodes across GCC trade corridors."
    },
    {
      id: "p3",
      name: "Kathryn Petralia",
      role: "Co-Founder",
      company: "Kabbage",
      type: "Founder",
      sector: "Private Capital & WealthTech",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&fit=crop",
      focus: "Licensing automated SME cash-flow underwriting software to commercial banks."
    },
    {
      id: "p4",
      name: "Sarah Al-Mansoori",
      role: "Chief Innovation Officer",
      company: "Dubai Future Foundation",
      type: "Investor",
      sector: "Future Finance",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&fit=crop",
      focus: "Looking to back early sandboxed virtual-asset startups with state equity pools."
    },
    {
      id: "p5",
      name: "Patrick Collison",
      role: "Co-Founder & CEO",
      company: "Stripe",
      type: "Investor",
      sector: "Payments & Corridors",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&fit=crop",
      focus: "Seeking frontier fintech startups to integrate with Stripe capital rails."
    },
    {
      id: "p6",
      name: "Dr. Demis Hassabis",
      role: "CEO & Co-founder",
      company: "Google DeepMind",
      type: "Investor",
      sector: "AI & Regulation",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&fit=crop",
      focus: "Interested in AI-first fintech tooling and autonomous clearing infrastructures."
    }
  ];

  const handleRunMatchmaker = () => {
    setMatching(true);
    setMatchedProfiles([]);
    
    // Simulate API match delay
    setTimeout(() => {
      // Find opposite profiles matching user interests
      const targetType = userRole === "Founder" ? "Investor" : "Founder";
      const matches = profiles.filter(
        (p) => p.type === targetType && (p.sector === selectedSector || selectedSector === "All")
      );
      setMatchedProfiles(matches);
      setMatching(false);
    }, 1500);
  };

  return (
    <section id="networking" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute bottom-[20%] right-0 w-[550px] h-[550px] ambient-glow glow-purple" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            08 // Dynamic Connections
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
            AI-Powered Matchmaking Hub
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Bridge the gap between capital pools and product innovators. Input your profile parameters to identify matched delegates and schedule brief briefings.
          </p>
        </div>

        {/* Matchmaker Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Match Parameters (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-2xl flex flex-col justify-between min-h-[420px]">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-purple-accent">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <h3 className="text-xs uppercase tracking-widest font-black">Matchmaker Engine</h3>
              </div>

              {/* 1. User Identity */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">I am registered as a:</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => { setUserRole("Founder"); setMatchedProfiles([]); }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-premium border flex items-center justify-center space-x-2 ${
                      userRole === "Founder"
                        ? "bg-purple-accent border-purple-accent text-white"
                        : "bg-graphite/45 border-border-dark text-foreground/50 hover:text-white"
                    }`}
                  >
                    <Target className="w-4 h-4" />
                    <span>Founder</span>
                  </button>
                  <button
                    onClick={() => { setUserRole("Investor"); setMatchedProfiles([]); }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-premium border flex items-center justify-center space-x-2 ${
                      userRole === "Investor"
                        ? "bg-purple-accent border-purple-accent text-white"
                        : "bg-graphite/45 border-border-dark text-foreground/50 hover:text-white"
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Investor / VC</span>
                  </button>
                </div>
              </div>

              {/* 2. Target Industry Sector */}
              <div className="space-y-3">
                <label htmlFor="sector-select" className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">Target Sector Interest:</label>
                <select
                  id="sector-select"
                  value={selectedSector}
                  onChange={(e) => { setSelectedSector(e.target.value); setMatchedProfiles([]); }}
                  className="w-full bg-graphite border border-border-dark rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-purple-accent transition-colors"
                >
                  <option value="AI & Regulation">Artificial Intelligence & Regulation</option>
                  <option value="Payments & Corridors">Payments & Cross-Border Corridors</option>
                  <option value="Digital Assets & Tokenisation">Digital Assets & Tokenisation</option>
                  <option value="Private Capital & WealthTech">Private Capital & WealthTech</option>
                  <option value="Insurance & Risk">Insurance & Risk Systems</option>
                  <option value="Future Finance">Sovereign sandboxes & Future Finance</option>
                </select>
              </div>
            </div>

            {/* Run Match Action */}
            <div className="pt-8 border-t border-border-dark/60 mt-8">
              <button
                onClick={handleRunMatchmaker}
                disabled={matching}
                className="w-full bg-purple-accent hover:bg-purple-accent/80 disabled:bg-purple-accent/50 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-premium shadow-lg shadow-purple-accent/20"
              >
                {matching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    <span>Scanning global registry...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Identify matched connections</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Matched Profiles & Relationship visualizer (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl flex flex-col min-h-[420px] justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {matchedProfiles.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border-dark/60">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-accent font-bold">
                      Match Successful // {matchedProfiles.length} Connections Found
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matchedProfiles.map((p) => (
                      <div
                        key={p.id}
                        className="p-5 bg-graphite/45 border border-border-dark rounded-xl flex flex-col justify-between hover:border-purple-accent/40 transition-premium"
                      >
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={p.avatar}
                              alt={p.name}
                              className="w-10 h-10 object-cover rounded-full border border-white/10"
                            />
                            <div>
                              <h4 className="text-sm font-bold text-white leading-tight">{p.name}</h4>
                              <p className="text-[10px] text-foreground/45 mt-0.5">{p.role} at {p.company}</p>
                            </div>
                          </div>
                          <span className="text-[8px] font-mono uppercase bg-purple-glow text-purple-accent px-2 py-0.5 rounded border border-purple-accent/25">
                            {p.sector}
                          </span>
                          <p className="text-[11px] text-foreground/60 leading-relaxed mt-3 line-clamp-2">
                            {p.focus}
                          </p>
                        </div>

                        {/* Card CTA Actions */}
                        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-border-dark/40">
                          <button
                            onClick={() => alert(`Direct message channel initialized with ${p.name}.`)}
                            className="py-2 rounded bg-midnight border border-border-dark text-[10px] font-bold text-foreground/70 hover:text-white transition-colors flex items-center justify-center space-x-1.5"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Message</span>
                          </button>
                          <button
                            onClick={() => alert(`Meeting proposal logged for May 18th in Hall 4 Matchmaker Lounge.`)}
                            className="py-2 rounded bg-purple-accent text-[10px] font-bold text-white hover:bg-purple-accent/80 transition-colors flex items-center justify-center space-x-1.5 shadow"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Schedule</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : matching ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center py-20"
                >
                  {/* Dynamic SVG Relation network animated loading */}
                  <svg className="w-48 h-24 mb-6 overflow-visible" viewBox="0 0 200 100">
                    <circle cx="100" cy="50" r="12" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2">
                      <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="40" cy="30" r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)">
                      <animate attributeName="cy" values="26;34;26" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="160" cy="30" r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)">
                      <animate attributeName="cy" values="34;26;34" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="80" r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                    <circle cx="150" cy="80" r="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />

                    <line x1="100" y1="50" x2="40" y2="30" stroke="#8b5cf6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="100" y1="50" x2="160" y2="30" stroke="#8b5cf6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="100" y1="50" x2="50" y2="80" stroke="#8b5cf6" strokeOpacity="0.25" strokeWidth="1" />
                    <line x1="100" y1="50" x2="150" y2="80" stroke="#8b5cf6" strokeOpacity="0.25" strokeWidth="1" />
                  </svg>
                  <span className="text-xs text-foreground/45 font-mono">Running Matchmaking Algorithms...</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center py-20"
                >
                  <Users className="w-8 h-8 text-foreground/20 mb-4" />
                  <span className="text-xs text-foreground/40 font-semibold max-w-xs">
                    Select your registration status and target industry on the left, then click check to generate connections.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
