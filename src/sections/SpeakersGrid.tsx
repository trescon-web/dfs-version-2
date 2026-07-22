"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Globe, ArrowRight, Award } from "lucide-react";
import { speakers, Speaker } from "@/utils/speakerData";

export default function SpeakersGrid() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<string>("All");

  const tracks = ["All", "AI & Regulation", "Digital Assets & Tokenisation", "Payments & Corridors", "Private Capital & WealthTech", "Insurance & Risk", "Future Finance"];

  // Filter logic
  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesTrack = selectedTrack === "All" || speaker.track === selectedTrack;
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.country.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTrack && matchesSearch;
  });

  return (
    <section id="speakers" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] ambient-glow glow-purple" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading & AI-Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
              03 // Global Faculty
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gradient-white mt-4">
              Pioneering Minds of Global Finance
            </h2>
            <p className="text-sm text-foreground/60 mt-4 leading-relaxed">
              Meet the global regulators, digital architects, neobanking founders, and venture pioneers defining the next cycle of transactional infrastructure.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Search speaker name, company, or origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-graphite/45 border border-border-dark rounded-xl py-3 px-4 pl-10 text-xs text-white placeholder-foreground/40 focus:outline-none focus:border-purple-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3.5 text-foreground/40 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Track Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border-dark/60 pb-8">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-premium border ${
                selectedTrack === track
                  ? "bg-purple-accent border-purple-accent text-white shadow-md shadow-purple-glow"
                  : "bg-graphite/35 border-border-dark text-foreground/60 hover:text-white hover:border-foreground/20"
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Speaker Cards Grid */}
        {filteredSpeakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSpeakers.map((speaker, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group relative rounded-2xl overflow-hidden border border-border-dark cursor-pointer bg-slate-dark/40 shadow-xl"
              >
                {/* Image Container with Dual Grayscale Filter */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-80" />
                  
                  {/* Top info badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-midnight/80 backdrop-blur-md border border-white/10 text-purple-accent px-2 py-1 rounded">
                      {speaker.track}
                    </span>
                  </div>
                </div>

                {/* Bottom Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-mono text-purple-accent font-bold uppercase tracking-wider">
                    {speaker.company}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight mt-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-foreground/50 line-clamp-1 mt-0.5">
                    {speaker.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-dashed border-border-dark rounded-2xl bg-graphite/10">
            <span className="text-sm text-foreground/40 font-semibold">
              No faculty members match your query. Try resetting the filters.
            </span>
          </div>
        )}

        {/* Slide-over Expansion Bio Drawer */}
        <AnimatePresence>
          {selectedSpeaker && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSpeaker(null)}
                className="fixed inset-0 bg-midnight z-50 cursor-pointer"
              />

              {/* Slide-in Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-lg z-50 glass-panel border-l border-border-dark flex flex-col shadow-2xl p-8 overflow-y-auto"
              >
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-dark">
                  <span className="text-[10px] font-mono tracking-widest text-purple-accent font-bold uppercase">
                    Faculty Dossier // DFS 2026
                  </span>
                  <button
                    onClick={() => setSelectedSpeaker(null)}
                    className="p-1.5 rounded-lg bg-graphite/40 border border-border-dark text-foreground/60 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Profile Card Intro */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-28 h-28 object-cover rounded-2xl border border-white/10 shadow-lg"
                  />
                  <div className="text-center sm:text-left flex flex-col justify-center">
                    <span className="text-xs font-mono font-bold text-emerald-accent uppercase tracking-wider">
                      {selectedSpeaker.company} ({selectedSpeaker.country})
                    </span>
                    <h3 className="text-2xl font-black tracking-tight text-white mt-1">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mt-1">
                      {selectedSpeaker.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-2">Biography</h4>
                    <p className="text-sm text-foreground/75 leading-relaxed bg-graphite/25 p-4 rounded-xl border border-border-dark">
                      {selectedSpeaker.bio}
                    </p>
                  </div>

                  {/* Achievements list */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-3">Key Achievements</h4>
                    <ul className="space-y-2.5 text-xs text-foreground/75">
                      {selectedSpeaker.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Award className="w-4 h-4 text-purple-accent flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scheduled Session Card */}
                  <div className="p-5 rounded-xl border border-purple-accent/30 bg-purple-glow/10">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-purple-accent font-bold">
                      Keynote Session
                    </h4>
                    <h5 className="text-sm font-bold text-white mt-2 leading-snug">
                      {selectedSpeaker.sessionTitle}
                    </h5>
                    <button
                      onClick={() => {
                        setSelectedSpeaker(null);
                        const agendaSection = document.querySelector("#agenda");
                        if (agendaSection) {
                          agendaSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="flex items-center space-x-1 text-xs font-bold text-purple-accent hover:text-white transition-colors mt-4"
                    >
                      <span>View in Agenda Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Social Channels / Action footer */}
                <div className="mt-8 pt-6 border-t border-border-dark flex items-center justify-between">
                  <div className="flex space-x-3">
                    {selectedSpeaker.socials.linkedin && (
                      <a href={selectedSpeaker.socials.linkedin} className="p-2 rounded bg-graphite/40 text-foreground/60 hover:text-white border border-border-dark transition-colors" aria-label="LinkedIn">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    )}
                    {selectedSpeaker.socials.twitter && (
                      <a href={selectedSpeaker.socials.twitter} className="p-2 rounded bg-graphite/40 text-foreground/60 hover:text-white border border-border-dark transition-colors" aria-label="Twitter">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    )}
                    {selectedSpeaker.socials.website && (
                      <a href={selectedSpeaker.socials.website} className="p-2 rounded bg-graphite/40 text-foreground/60 hover:text-white border border-border-dark transition-colors" aria-label="Website">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      alert(`Meeting request successfully logged for ${selectedSpeaker.name}. Notification sent to matchmaking portal.`);
                    }}
                    className="bg-purple-accent hover:bg-purple-accent/80 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-premium shadow-md shadow-purple-glow"
                  >
                    Request Meeting
                  </button>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
