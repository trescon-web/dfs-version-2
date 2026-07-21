"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, X, Send, Plus, Check, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sessions, Session } from "@/utils/agendaData";
import { speakers } from "@/utils/speakerData";
import confetti from "canvas-confetti";

interface Message {
  sender: "user" | "ai";
  text: string;
  suggestedSessions?: Session[];
}

export default function InteractiveChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Marhaban! I am your DFS Smart Event Assistant. Ask me anything about speakers, sessions, stages, or topics (e.g., 'What AI panels are scheduled?', 'When does Patrick Collison speak?')."
    }
  ]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync bookmarks
  useEffect(() => {
    const saved = localStorage.getItem("dfs_bookmarks");
    if (saved) {
      try {
        setSavedIds(JSON.parse(saved));
      } catch (e) {}
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleBookmarkSession = (id: string) => {
    let updated: string[];
    if (savedIds.includes(id)) {
      updated = savedIds.filter((item) => item !== id);
    } else {
      updated = [...savedIds, id];
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ["#8b5cf6", "#10b981"]
      });
    }
    setSavedIds(updated);
    localStorage.setItem("dfs_bookmarks", JSON.stringify(updated));

    // Dispatch custom event to update Agenda Planner in real-time
    window.dispatchEvent(new Event("storage"));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    // Simulated AI response processing
    setTimeout(() => {
      const query = userText.toLowerCase();
      let aiText = "";
      let suggested: Session[] = [];

      if (query.includes("ai") || query.includes("artificial") || query.includes("deepmind") || query.includes("hassabis")) {
        aiText = "We have high-profile AI sessions scheduled. The headline keynote is led by Dr. Demis Hassabis from Google DeepMind on Day 1.";
        suggested = sessions.filter((s) => s.track === "AI & Regulation" || s.id === "session-9");
      } else if (query.includes("patrick") || query.includes("stripe") || query.includes("payments")) {
        aiText = "Patrick Collison, Co-Founder of Stripe, leads a keynote on global economic infrastructure. Elizabeth Rossiello also hosts a panel on emerging market remittances.";
        suggested = sessions.filter((s) => s.track === "Payments & Corridors");
      } else if (query.includes("sarah") || query.includes("dubai") || query.includes("governance") || query.includes("center")) {
        aiText = "Sarah Al-Mansoori, Chief Innovation Officer at Dubai Future Foundation, hosts the welcome ceremony and releases the Dubai 2030 Fintech Sandbox Framework.";
        suggested = sessions.filter((s) => s.speakerIds.includes("sarah-al-mansoori"));
      } else if (query.includes("blockchain") || query.includes("web3") || query.includes("bitcoin") || query.includes("saylor")) {
        aiText = "Michael Saylor hosts a session on corporate Bitcoin treasuries on Day 2. We also have panels evaluating CBDCs and decentralized liquidity corridors.";
        suggested = sessions.filter((s) => s.track === "Digital Assets & Tokenisation");
      } else if (query.includes("register") || query.includes("pass") || query.includes("ticket") || query.includes("price")) {
        aiText = "Passes can be secured by clicking 'Secure Passes' in the Hero banner or 'Register Now' in the navigation bar. Let me know if you need session recommendations first!";
      } else {
        // Fallback search term check
        const matches = sessions.filter(
          (s) =>
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query) ||
            s.track.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
          aiText = `I found ${matches.length} matches in our event schedule matching your query:`;
          suggested = matches.slice(0, 3);
        } else {
          aiText = "I couldn't identify direct schedule matches. Try searching for topics like 'AI', 'Payments', 'Digital Banking', or specific speakers like 'Saylor' or 'Al-Mansoori'.";
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiText,
          suggestedSessions: suggested.length > 0 ? suggested : undefined
        }
      ]);
    }, 800);
  };

  const sampleQuestions = [
    "Who is speaking about AI?",
    "When is the Stripe Keynote?",
    "Show me CBDC & Web3 sessions"
  ];

  return (
    <>
      {/* Floating Circle Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 rounded-full bg-purple-accent text-white flex items-center justify-center shadow-lg shadow-purple-glow hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none"
          aria-label="Open event chat assistant"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-accent animate-ping" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-full max-w-[370px] h-[480px] z-40 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-purple-accent/25"
          >
            {/* Header info bar */}
            <div className="p-4 bg-graphite/60 border-b border-border-dark flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-purple-glow rounded-lg text-purple-accent border border-purple-accent/25">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">DFS Smart Assistant</h4>
                  <span className="text-[8px] font-mono text-emerald-accent block mt-1 uppercase font-bold tracking-wider">
                    Online // AI recommendations
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-foreground/40 hover:text-white p-1 rounded hover:bg-graphite"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages flow scroll */}
            <div
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 text-xs scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {messages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      m.sender === "user"
                        ? "bg-purple-accent text-white rounded-tr-none"
                        : "bg-graphite/45 border border-border-dark text-foreground/80 rounded-tl-none"
                    }`}
                  >
                    <p>{m.text}</p>

                    {/* Render session list attachments inside AI bubble */}
                    {m.suggestedSessions && (
                      <div className="mt-4 space-y-2 pt-3 border-t border-border-dark/60">
                        <span className="text-[8px] font-mono text-purple-accent uppercase font-bold tracking-widest">
                          Found Sessions
                        </span>
                        {m.suggestedSessions.map((s) => {
                          const saved = savedIds.includes(s.id);
                          return (
                            <div
                              key={s.id}
                              className="p-2.5 rounded bg-midnight border border-border-dark flex items-center justify-between space-x-4"
                            >
                              <div className="max-w-[70%]">
                                <h5 className="text-[10px] font-bold text-white line-clamp-1">{s.title}</h5>
                                <span className="text-[8px] text-foreground/45 mt-0.5 block">{s.time}</span>
                              </div>
                              <button
                                onClick={() => handleBookmarkSession(s.id)}
                                className={`p-1 rounded ${
                                  saved ? "bg-emerald-accent/20 text-emerald-accent" : "bg-purple-glow text-purple-accent hover:bg-purple-accent hover:text-white"
                                }`}
                              >
                                {saved ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions (Only when no user message entered yet) */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 flex flex-col space-y-1.5">
                {sampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                    }}
                    className="text-left py-2 px-3 bg-graphite/35 hover:bg-graphite/60 border border-border-dark rounded-xl text-[10px] text-foreground/75 hover:text-white transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input typing footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-graphite/60 border-t border-border-dark flex items-center space-x-2">
              <label htmlFor="chat-input" className="sr-only">Type a message</label>
              <input
                id="chat-input"
                type="text"
                placeholder="Ask about agenda, stages, speakers..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-midnight border border-border-dark rounded-xl py-2 px-3 text-xs text-white placeholder-foreground/30 focus:outline-none focus:border-purple-accent transition-colors"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 rounded-xl bg-purple-accent text-white hover:bg-purple-accent/80 transition-colors shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
