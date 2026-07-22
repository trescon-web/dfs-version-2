"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Presentation, Globe } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: TrendingUp,
      value: "$4.8B+",
      label: "Capital Represented",
      desc: "Venture assets and sovereign wealth under management represented by convening delegates.",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Global Delegates",
      desc: "Ministers, central bank governors, founders, and financial technology executives in attendance.",
    },
    {
      icon: Presentation,
      value: "200+",
      label: "Keynote Speakers",
      desc: "Leading regulatory voices, policy architects, and tech builders shaping cross-border rails.",
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries Represented",
      desc: "Active sovereign representation establishing blueprints for global compliance and liquidity.",
    },
  ];

  return (
    <section id="statistics" className="relative py-20 overflow-hidden bg-midnight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 rounded-2xl border border-white/5 bg-[#12343f]/20 flex flex-col justify-between transition-premium hover:border-electric-turquoise/30 hover:shadow-lg hover:shadow-electric-turquoise/5 text-left h-[240px]"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-mono text-[10px] tracking-widest text-[#c5a880] font-bold uppercase">
                    METRIC // {`0${idx + 1}`}
                  </span>
                  <Icon className="w-5 h-5 text-electric-turquoise/80" />
                </div>
                
                <div className="my-auto space-y-1">
                  <div className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white/80">
                    {stat.label}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
