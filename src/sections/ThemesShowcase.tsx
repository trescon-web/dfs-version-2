"use client";
import { useRef, useState } from "react";
import { Cpu, CreditCard, Network, Briefcase, Landmark, ShieldCheck } from "lucide-react";

interface ThemeItem {
  title: string;
  icon: any;
  description: string;
  glowColor: "purple" | "emerald" | "gold";
  features: string[];
}

export default function ThemesShowcase() {
  const themes: ThemeItem[] = [
    {
      title: "Artificial Intelligence",
      icon: Cpu,
      description: "Cognitive asset allocation, algorithmic credit modeling, and real-time fraud prevention systems reshaping Wall Street.",
      glowColor: "purple",
      features: ["Reinforcement Trade Engines", "Predictive Risk Networks", "LLM Financial Advisors"]
    },
    {
      title: "Payments & Settlements",
      icon: CreditCard,
      description: "Next-generation cross-border remittance rails, frictionless merchant APIs, and instant transaction routing networks.",
      glowColor: "emerald",
      features: ["Instant Global Settlements", "Multi-Currency Routing", "API-Driven Payouts"]
    },
    {
      title: "Blockchain & Web3",
      icon: Network,
      description: "Corporate treasury allocations, tokenized real-world assets (RWAs), and decentralized liquidity networks.",
      glowColor: "purple",
      features: ["Institutional Custody Systems", "Real-World Asset Tokenization", "Cross-Chain Ledger Protocols"]
    },
    {
      title: "WealthTech & RegTech",
      icon: Briefcase,
      description: "Automated wealth planning algorithms, KYC compliance dashboards, and cloud-clearing systems.",
      glowColor: "gold",
      features: ["Automated Cash-flow Underwriting", "Real-time AML Scanning", "SaaS Wealth Allocation"]
    },
    {
      title: "Digital Banking",
      icon: Landmark,
      description: "The next phase of neobanks, exploring fully licensed multi-currency banking models operating globally.",
      glowColor: "emerald",
      features: ["Cross-Border Digital Licensing", "API Cash Management", "Digital SME Credit Pools"]
    },
    {
      title: "Future of Security",
      icon: ShieldCheck,
      description: "Defending global digital ledgers, critical clearing platforms, and neobanks against modern cognitive attacks.",
      glowColor: "gold",
      features: ["Quantum-Proof Cryptography", "Autonomous Security Threat Hubs", "Identity Cryptography"]
    }
  ];

  return (
    <section id="themes" className="relative py-28 bg-midnight border-t border-border-dark overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] ambient-glow glow-purple" style={{ opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headings */}
        <div className="max-w-2xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-accent font-semibold">
            Summit Agenda Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-gradient-white mt-4">
            Conference Tracks & Key Themes
          </h2>
          <p className="text-sm md:text-base text-foreground/60 mt-4 leading-relaxed">
            Delve into six high-impact pillars representing the vanguard of modern financial systems, curated for enterprise leaders and investors.
          </p>
        </div>

        {/* 3D Tilt Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, idx) => {
            const glowStyles = {
              purple: "hover:border-purple-accent/30 hover:shadow-purple-accent/10 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.15)]",
              emerald: "hover:border-emerald-accent/30 hover:shadow-emerald-accent/10 hover:shadow-[0_15px_40px_-10px_rgba(5,150,105,0.15)]",
              gold: "hover:border-gold-accent/30 hover:shadow-gold-accent/10 hover:shadow-[0_15px_40px_-10px_rgba(197,168,128,0.15)]",
            };

            const iconStyles = {
              purple: "text-purple-accent bg-purple-glow/30 border-purple-accent/20",
              emerald: "text-emerald-accent bg-emerald-accent/10 border-emerald-accent/20",
              gold: "text-gold-accent bg-gold-accent/10 border-gold-accent/20",
            };

            return (
              <div
                key={theme.title}
                className={`glass-card p-8 rounded-2xl border border-border-dark flex flex-col justify-between transition-premium min-h-[360px] ${glowStyles[theme.glowColor]}`}
              >
                <div>
                  <div className={`p-3.5 rounded-xl border w-fit ${iconStyles[theme.glowColor]}`}>
                    <theme.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mt-6">
                    {theme.title}
                  </h3>

                  <p className="text-xs text-foreground/50 leading-relaxed mt-3">
                    {theme.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-6 mt-6 border-t border-border-dark/40">
                  <h4 className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-3">Key Focus Areas</h4>
                  <ul className="space-y-2">
                    {theme.features.map((feat) => (
                      <li key={feat} className="flex items-center space-x-2 text-xs text-foreground/75">
                        <span className={`w-1 h-1 rounded-full ${
                          theme.glowColor === "purple" ? "bg-purple-accent" : theme.glowColor === "emerald" ? "bg-emerald-accent" : "bg-gold-accent"
                        }`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

