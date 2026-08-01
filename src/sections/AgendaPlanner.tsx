"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Search, Bookmark, BookmarkCheck, MapPin, Sparkles, Plus, Check, ChevronDown, ChevronUp } from "lucide-react";
import confetti from "canvas-confetti";
import { sessions, Session } from "@/utils/agendaData";
import { speakers, Speaker } from "@/utils/speakerData";

export default function AgendaPlanner() {
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3>(1); // 1: Day 1, 2: Day 2, 3: Personal Schedule
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const tracks = ["AI & Regulation", "Digital Assets & Tokenisation", "Payments & Corridors", "Private Capital & WealthTech", "Insurance & Risk", "Future Finance"];

  // Initialize bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dfs_bookmarks");
    if (saved) {
      try {
        setBookmarkedIds(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Save bookmarks
  const toggleBookmark = (sessionId: string) => {
    let updated: string[];
    const isBookmarking = !bookmarkedIds.includes(sessionId);

    if (isBookmarking) {
      updated = [...bookmarkedIds, sessionId];
      // Celebrate with confetti on bookmarking
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#8b5cf6", "#10b981", "#ffffff"]
      });
    } else {
      updated = bookmarkedIds.filter((id) => id !== sessionId);
    }

    setBookmarkedIds(updated);
    localStorage.setItem("dfs_bookmarks", JSON.stringify(updated));
  };

  const handleTrackToggle = (track: string) => {
    if (selectedTracks.includes(track)) {
      setSelectedTracks(selectedTracks.filter((t) => t !== track));
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  // Speaker mapping helper
  const getSessionSpeakers = (speakerIds: string[]): Speaker[] => {
    return speakers.filter((s) => speakerIds.includes(s.id));
  };

  // Filter sessions
  const filteredSessions = sessions.filter((session) => {
    // Day filter
    if (selectedDay === 3) {
      // Personal Schedule mode: only show bookmarked
      if (!bookmarkedIds.includes(session.id)) return false;
    } else {
      if (session.day !== selectedDay) return false;
    }

    // Track filter
    if (selectedTracks.length > 0 && !selectedTracks.includes(session.track)) {
      return false;
    }

    // Search filter
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.track.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.stage.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  // Smart Recommendations (Simulated AI)
  // Recommends sessions matching the tracks of currently bookmarked sessions, which are not yet bookmarked
  const getAIRecommendations = (): Session[] => {
    if (bookmarkedIds.length === 0) return [];
    
    // Find tracks user has already bookmarked
    const bookmarkedSessions = sessions.filter((s) => bookmarkedIds.includes(s.id));
    const userTracks = Array.from(new Set(bookmarkedSessions.map((s) => s.track)));

    // Find other sessions in those tracks that are NOT bookmarked
    return sessions
      .filter((s) => userTracks.includes(s.track) && !bookmarkedIds.includes(s.id))
      .slice(0, 2); // limit to 2 recommendations
  };

  const aiRecommendations = getAIRecommendations();

  return (
    <section id="agenda" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[10%] left-0 w-[600px] h-[600px] ambient-glow glow-blue" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            04 // Interactive Timelines
          </span>
          <h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-gradient-white mt-4">
            Custom-Built Agenda Planner
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Build your personalized curriculum, search session tracks, bookmark events, and receive smart AI recommendations to optimize your summit experience.
          </p>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filter Sidebar & AI Panel (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Search, Day and Schedule Selection */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-5">
              <h3 className="text-xs uppercase tracking-widest text-white/50 font-bold">Schedule Controls</h3>

              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-graphite/45 border border-border-dark rounded-xl py-2.5 px-4 pl-10 text-xs text-white placeholder-foreground/40 focus:outline-none focus:border-purple-accent transition-colors"
                />
              </div>

              {/* Day selection tabs */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedDay(1)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-premium ${
                    selectedDay === 1
                      ? "bg-purple-accent text-white shadow-md shadow-purple-glow"
                      : "bg-graphite/35 border border-border-dark text-foreground/60 hover:text-white"
                  }`}
                >
                  Day 1
                </button>
                <button
                  onClick={() => setSelectedDay(2)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-premium ${
                    selectedDay === 2
                      ? "bg-purple-accent text-white shadow-md shadow-purple-glow"
                      : "bg-graphite/35 border border-border-dark text-foreground/60 hover:text-white"
                  }`}
                >
                  Day 2
                </button>
                <button
                  onClick={() => setSelectedDay(3)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-premium flex items-center justify-center space-x-1 ${
                    selectedDay === 3
                      ? "bg-emerald-accent text-white shadow-md shadow-emerald-accent/20"
                      : "bg-graphite/35 border border-border-dark text-foreground/60 hover:text-white"
                  }`}
                >
                  <Bookmark className="w-3 h-3" />
                  <span>My Plan ({bookmarkedIds.length})</span>
                </button>
              </div>
            </div>

            {/* Interest Filter Tags */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-white/50 font-bold">Filter By Topic</h3>
              <div className="flex flex-wrap gap-2">
                {tracks.map((track) => {
                  const active = selectedTracks.includes(track);
                  return (
                    <button
                      key={track}
                      onClick={() => handleTrackToggle(track)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-colors border ${
                        active
                          ? "bg-purple-glow border-purple-accent/60 text-purple-accent"
                          : "bg-midnight/30 border-border-dark text-foreground/50 hover:text-white"
                      }`}
                    >
                      {track}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Recommender Engine panel */}
            {aiRecommendations.length > 0 && (
              <div className="glass-panel p-6 rounded-2xl border border-emerald-accent/30 bg-purple-glow/5 flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-emerald-accent">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <h3 className="text-xs uppercase tracking-widest font-[800]">AI Schedule Recommendations</h3>
                </div>
                <p className="text-[11px] text-foreground/50 leading-relaxed">
                  Based on your saved tracks, we recommend booking these high-value sessions:
                </p>

                <div className="space-y-3">
                  {aiRecommendations.map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => {
                        setSelectedDay(rec.day);
                        const element = document.getElementById(rec.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "center" });
                          setExpandedSession(rec.id);
                        }
                      }}
                      className="p-3 bg-graphite/45 border border-border-dark rounded-xl cursor-pointer hover:border-purple-accent/50 transition-premium flex items-start justify-between"
                    >
                      <div className="max-w-[80%]">
                        <span className="text-[8px] font-mono font-bold text-purple-accent uppercase">
                          {rec.track} // Day {rec.day}
                        </span>
                        <h4 className="text-xs font-bold text-white line-clamp-1 mt-0.5">
                          {rec.title}
                        </h4>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(rec.id);
                        }}
                        className="p-1 rounded bg-purple-glow text-purple-accent hover:bg-purple-accent hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sessions Feed (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-4 min-h-[500px]">
            {filteredSessions.length > 0 ? (
              <div className="space-y-4">
                {filteredSessions.map((session) => {
                  const isBookmarked = bookmarkedIds.includes(session.id);
                  const isExpanded = expandedSession === session.id;
                  const sessionSpeakers = getSessionSpeakers(session.speakerIds);

                  return (
                    <div
                      key={session.id}
                      id={session.id}
                      className={`glass-card p-6 rounded-2xl transition-all duration-300 border ${
                        isBookmarked ? "border-purple-accent/20 bg-purple-glow/5" : "border-border-dark"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        {/* Time & Stage details */}
                        <div className="flex items-center space-x-3 text-xs text-foreground/40 font-mono">
                          <span className="text-white font-bold">{session.time}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 text-purple-accent mr-1" />
                            {session.stage}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-3">
                          {/* Track badge */}
                          <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-graphite/60 border border-white/5 text-purple-accent">
                            {session.track}
                          </span>

                          {/* Bookmark trigger */}
                          <button
                            onClick={() => toggleBookmark(session.id)}
                            className={`p-2 rounded-lg border transition-premium ${
                              isBookmarked
                                ? "bg-emerald-accent/15 border-emerald-accent/40 text-emerald-accent hover:bg-emerald-accent/35"
                                : "bg-graphite border-border-dark text-foreground/40 hover:text-white hover:border-foreground/20"
                            }`}
                            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                          >
                            {isBookmarked ? (
                              <BookmarkCheck className="w-4 h-4" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Title & expand trigger */}
                      <div
                        onClick={() => setExpandedSession(isExpanded ? null : session.id)}
                        className="cursor-pointer group flex items-start justify-between mt-4"
                      >
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight group-hover:text-purple-accent transition-colors pr-6">
                          {session.title}
                        </h3>
                        <button className="text-foreground/40 group-hover:text-white mt-1">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                      {/* Expandable details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-border-dark/60"
                          >
                            <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl mb-6">
                              {session.description}
                            </p>

                            {/* Speaker Avatars */}
                            {sessionSpeakers.length > 0 && (
                              <div className="flex flex-col space-y-3">
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">Speakers</h4>
                                <div className="flex flex-wrap gap-4">
                                  {sessionSpeakers.map((sp) => (
                                    <div
                                      key={sp.id}
                                      className="flex items-center space-x-3 bg-graphite/45 border border-border-dark p-2 rounded-xl"
                                    >
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={sp.image}
                                        alt={sp.name}
                                        className="w-8 h-8 rounded-lg object-cover border border-white/5"
                                      />
                                      <div>
                                        <div className="text-xs font-bold text-white leading-none">{sp.name}</div>
                                        <div className="text-[9px] text-foreground/40 mt-0.5 leading-none">{sp.company}</div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center border border-dashed border-border-dark rounded-2xl py-28 text-center bg-graphite/10">
                <Bookmark className="w-8 h-8 text-foreground/20 mb-4" />
                <span className="text-sm text-foreground/40 font-semibold max-w-sm">
                  {selectedDay === 3
                    ? "Your personal agenda is empty. Bookmark keynotes from Day 1 or Day 2 to draft your plan."
                    : "No matches found. Adjust search keywords or topics."}
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

