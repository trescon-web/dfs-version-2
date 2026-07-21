"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Ticket } from "lucide-react";

export default function Pricing() {
  const passes = [
    {
      name: "Delegate Pass",
      tag: "STANDARD ENTRY",
      price: "$1,299",
      features: [
        "Access to main stage keynote presentations",
        "Entrance to global exhibition corridors",
        "Standard networking app profile matchmaking",
        "Complimentary delegate grab-and-go lunch box",
        "Official summit certificate of attendance"
      ],
      cta: "Buy Standard Pass",
      mostPopular: false
    },
    {
      name: "VIP Pass",
      tag: "RECOMMENDED",
      price: "$2,899",
      features: [
        "All features of standard Delegate Pass",
        "Dedicated VIP Registration counter & fast track",
        "Access to exclusive Investor lounge & refreshments",
        "VVIP Welcome reception invitation (Nov 2nd)",
        "Premium seating reservation on stage rows"
      ],
      cta: "Register as VIP",
      mostPopular: true
    },
    {
      name: "Sovereign Pass",
      tag: "INSTITUTIONAL ONLY",
      price: "$5,500",
      features: [
        "All VIP features and priority security clearance",
        "Closed-door Central Bank Governor policy sessions",
        "Guaranteed advisory board policy lunch seating",
        "1-on-1 VC speed matchmaking lounge access",
        "Personal concierge and dedicated private workspace room"
      ],
      cta: "Enquire Sovereign",
      mostPopular: false
    }
  ];

  return (
    <section id="passes" className="relative py-24 md:py-32 overflow-hidden bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 bg-electric-turquoise/10 border border-electric-turquoise/20 px-3.5 py-1.5 rounded-full self-center w-fit text-electric-turquoise text-xs font-mono font-bold tracking-widest uppercase mx-auto">
            <Ticket className="w-3.5 h-3.5" />
            <span>REGISTRATION PASSES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gradient-white">
            Secure your seat at the summit
          </h2>
          <p className="text-base text-white/60 leading-relaxed font-medium">
            Choose from standard, VIP, or institutional passes to gain access to next-gen fintech panels, matchmaker lounges, and policymaker boards.
          </p>
        </div>

        {/* Pricing Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {passes.map((pass, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-premium overflow-hidden border ${
                pass.mostPopular 
                  ? "border-[#c5a880] bg-[#12343f]/35 shadow-[0_0_40px_rgba(197,168,128,0.15)]" 
                  : "border-white/5 bg-[#12343f]/20 hover:border-white/10"
              }`}
            >
              {pass.mostPopular && (
                <div className="absolute top-4 right-4 bg-[#c5a880] text-midnight font-mono text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] tracking-widest text-[#c5a880] font-bold uppercase">
                    {pass.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {pass.name}
                  </h3>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{pass.price}</span>
                  <span className="text-xs text-white/50 uppercase tracking-widest font-bold font-mono">/ USD</span>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <ul className="space-y-4">
                    {pass.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-xs md:text-sm text-white/70 font-medium">
                        <Check className="w-4 h-4 text-electric-turquoise shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <button
                  onClick={() => alert(`Registration initialized for ${pass.name}. Check your chat dashboard.`)}
                  className={`w-full py-4.5 rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-premium cursor-pointer ${
                    pass.mostPopular 
                      ? "bg-white hover:bg-white/95 text-midnight shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-102" 
                      : "bg-[#12343f]/40 hover:bg-[#12343f]/65 text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {pass.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
