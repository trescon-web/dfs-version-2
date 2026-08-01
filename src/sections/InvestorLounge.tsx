"use client";
import { motion } from "framer-motion";
import { Handshake, Target, CheckCircle2 } from "lucide-react";

export default function InvestorLounge() {
  const points = [
    "One-on-One closed-door deal rooms",
    "Pre-vetted seed & growth portfolios",
    "Co-investment syndications",
    "Direct matching with Sovereign Wealth Funds",
  ];

  return (
    <section id="investors" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5 text-left">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy Details */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-start w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase">
                <Handshake className="w-3.5 h-3.5" />
                <span>VENTURE CAPITAL DECK</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.03em] text-gradient-white leading-tight">
                Venture Capital Investor Lounge
              </h2>
              <p className="text-base text-white/60 leading-relaxed font-medium">
                Convene with over 1,000+ active venture capitalists, corporate venture partners, and family offices managing over $100B+ assets under management (AUM).
              </p>
            </div>

            {/* List of matching pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl border border-white/5 bg-[#12343f]/15 hover:border-electric-turquoise/20 transition-all select-none">
                  <CheckCircle2 className="w-4 h-4 text-electric-turquoise shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-white/70 leading-relaxed font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Refractive Glass Portal Deck Card */}
          <div className="lg:col-span-6 flex justify-center items-center h-[350px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md h-[280px] p-8 md:p-10 rounded-2xl border border-white/10 bg-[#12343f]/30 flex flex-col justify-between shadow-2xl shadow-black/80 hover:border-electric-turquoise/35 hover:shadow-electric-turquoise/5 transition-premium duration-500"
            >
              {/* Corner accent glow removed */}

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-electric-turquoise font-bold">
                  Deal Flow Terminal
                </span>
                <span className="flex items-center space-x-1.5 bg-electric-turquoise/10 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-electric-turquoise uppercase">
                  <span>ACTIVE ROOMS</span>
                </span>
              </div>

              <div className="my-auto space-y-2">
                <span className="block text-4xl font-black text-white tracking-tight leading-none font-mono">
                  $100B+
                </span>
                <span className="text-xs uppercase tracking-wider text-denim-grey font-bold block">
                  Combined Investor Assets Under Management
                </span>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => alert("Investor pass verification initialized.")}
                  className="group flex items-center space-x-3 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-electric-turquoise transition-colors cursor-pointer"
                >
                  <span>[ VERIFY CREDENTIALS ] // DECK</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

