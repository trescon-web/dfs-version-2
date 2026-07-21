"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

interface Article {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export default function BlogDirectory() {
  const articles: Article[] = [
    {
      title: "DIFC’s AI-Native Move Puts Finance on a New Track",
      category: "TECHNOLOGY & AI",
      date: "04 April 2026",
      readTime: "5 min read",
      excerpt: "DIFC introduces new AI-native sandbox licenses and cloud infrastructure frameworks to support decentralized payment models.",
    },
    {
      title: "Why Dubai’s Latest Financial Ranking Matters",
      category: "GLOBAL MARKETS",
      date: "28 March 2026",
      readTime: "7 min read",
      excerpt: "Discover how Dubai's D33 Economic Agenda is driving global trade corridors and sovereign wealth fund trust structures.",
    },
    {
      title: "What to Expect at Dubai FinTech Summit 2026",
      category: "SUMMIT INSIGHTS",
      date: "15 March 2026",
      readTime: "4 min read",
      excerpt: "An overview of the fourth edition's agenda topics, advisory panel members, and global keynote lineup highlights.",
    },
    {
      title: "Top Reasons Global FinTech Leaders Attend Dubai FinTech Summit",
      category: "NETWORKING",
      date: "02 March 2026",
      readTime: "6 min read",
      excerpt: "Why 8,000+ C-suite executives, central bank governors, and VC investors convene annually at Madinat Jumeirah.",
    },
    {
      title: "AI Meets FinTech – A New Era of Innovation in Financial Services",
      category: "ARTIFICIAL INTELLIGENCE",
      date: "18 February 2026",
      readTime: "8 min read",
      excerpt: "How real-time risk assessment, deep learning models, and autonomous banking engines are redefining fintech custody rails.",
    },
    {
      title: "5 Reasons Why Dubai is the Global Hub for FinTech Innovation",
      category: "ECOSYSTEM",
      date: "05 February 2026",
      readTime: "5 min read",
      excerpt: "Analyzing the regulatory support, sandbox frameworks, tax exemptions, and capital access that define Dubai's hub status.",
    },
  ];

  const containerVars = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative pb-28 bg-[#02090f]">
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-title {
          color: #ffffff !important;
        }
        .blog-card:hover .blog-title {
          color: #12e8e8 !important;
        }
        .blog-cat {
          color: #c5a880 !important;
        }
        .blog-excerpt {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          variants={containerVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="relative p-6 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 hover:border-[#12e8e8]/30 transition-all duration-500 group flex flex-col justify-between items-start text-left overflow-hidden shadow-2xl hover:translate-y-[-4px] blog-card"
            >
              {/* Hover gradient glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-transparent via-[#12e8e8]/0 to-[#12e8e8]/10 group-hover:to-[#12e8e8]/20 rounded-3xl transition-all duration-500 pointer-events-none" />

              {/* Category, Date & Read Time */}
              <div className="w-full space-y-4 mb-6">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider">
                  <span className="uppercase blog-cat">{article.category}</span>
                  <span className="text-white/20 flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-sans leading-snug transition-colors duration-300 blog-title">
                  {article.title}
                </h3>
              </div>

              {/* Excerpt */}
              <p className="text-xs leading-relaxed font-semibold mb-8 flex-grow blog-excerpt">
                {article.excerpt}
              </p>

              {/* Bottom detail row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5 w-full text-[10px] font-mono font-bold text-white/35 group-hover:text-[#12e8e8] transition-colors mt-auto">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {article.date}
                </span>
                <span className="group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
