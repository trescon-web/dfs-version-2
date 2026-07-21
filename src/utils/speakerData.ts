export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  image: string;
  track: "AI & Regulation" | "Digital Assets & Tokenisation" | "Payments & Corridors" | "Private Capital & WealthTech" | "Insurance & Risk" | "Future Finance";
  bio: string;
  achievements: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  sessionTitle: string;
}

export const speakers: Speaker[] = [
  {
    id: "sarah-al-mansoori",
    name: "Sarah Al-Mansoori",
    role: "Chief Innovation Officer",
    company: "Dubai Future Foundation",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&fit=crop",
    track: "Future Finance",
    bio: "Sarah leads initiatives to establish Dubai as a global testing ground for emerging technologies and financial frameworks. She coordinates policy design for decentralized assets and fintech integration with regulatory authorities.",
    achievements: [
      "Pioneered the Dubai Sandbox Initiative for Fintech Startups",
      "Keynote Speaker at World Economic Forum 2025",
      "Advisory Board Member at Dubai Future Council"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    sessionTitle: "Dubai 2030: The Digital Bridge of Global Capital"
  },
  {
    id: "patrick-collison",
    name: "Patrick Collison",
    role: "Co-Founder & CEO",
    company: "Stripe",
    country: "USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&fit=crop",
    track: "Payments & Corridors",
    bio: "Patrick Collison is the co-founder and CEO of Stripe, which builds economic infrastructure for the internet. Stripe helps millions of companies—from start-ups to Fortune 500s—start, run, and scale their businesses online.",
    achievements: [
      "Built the digital payment backbone of the internet economy",
      "Investor in fusion energy, biotech, and frontier research",
      "Recognized by Forbes in the Global Fintech Top 10"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://stripe.com"
    },
    sessionTitle: "Rebuilding the Global Economic Infrastructure"
  },
  {
    id: "demis-hassabis",
    name: "Dr. Demis Hassabis",
    role: "Co-Founder & CEO",
    company: "Google DeepMind",
    country: "UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&fit=crop",
    track: "AI & Regulation",
    bio: "Demis Hassabis is a co-founder and CEO of Google DeepMind, leading AI research to solve some of the world's most complex challenges, including alpha-folding and predictive AI modeling for international markets.",
    achievements: [
      "Nobel Prize Laureate in Chemistry 2024",
      "Architect of AlphaGo and AlphaFold systems",
      "Knighted for Services to Science and Artificial Intelligence"
    ],
    socials: {
      twitter: "https://twitter.com"
    },
    sessionTitle: "Generative Intelligence and Autonomous Asset Management"
  },
  {
    id: "valentin-stalf",
    name: "Valentin Stalf",
    role: "Co-Founder & CEO",
    company: "N26",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&fit=crop",
    track: "Future Finance",
    bio: "Valentin Stalf co-founded N26 in 2013 to rebuild retail banking for the mobile age. Today, N26 is one of the fastest-growing mobile banks in the world, operating across European markets and handling billions in transaction volume.",
    achievements: [
      "Grew N26 to over 8 million customers across Europe",
      "Secured $900M+ in funding from global VC firms",
      "Leader in European Neobanking Policy Frameworks"
    ],
    socials: {
      linkedin: "https://linkedin.com"
    },
    sessionTitle: "Neobanks 2.0: Profitability, Regulation, and Global Scale"
  },
  {
    id: "adena-friedman",
    name: "Adena Friedman",
    role: "Chair & CEO",
    company: "Nasdaq",
    country: "USA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&fit=crop",
    track: "Insurance & Risk",
    bio: "Adena Friedman serves as Chair and CEO of Nasdaq. She is focused on driving Nasdaq's transformation into a leading global technology provider for capital markets, financial crime prevention, and cloud-based clearing operations.",
    achievements: [
      "Overhauled Nasdaq's core matching engine using SaaS solutions",
      "Pioneered AI-driven anti-money laundering tools in capital markets",
      "Ranked on Forbes World's 100 Most Powerful Women list"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      website: "https://nasdaq.com"
    },
    sessionTitle: "The Modernization of Capital Markets: Cloud & Security"
  },
  {
    id: "michael-saylor",
    name: "Michael Saylor",
    role: "Executive Chairman",
    company: "MicroStrategy",
    country: "USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&fit=crop",
    track: "Digital Assets & Tokenisation",
    bio: "Michael Saylor is the Executive Chairman of MicroStrategy, a firm that has pioneered corporate adoption of Bitcoin as treasury reserve asset.",
    achievements: [
      "Acquired over 200k+ BTC for MicroStrategy corporate treasury",
      "Author of the Wall Street Journal bestseller 'The Mobile Wave'",
      "Founder of Saylor Academy, providing free college-level education"
    ],
    socials: {
      twitter: "https://twitter.com",
      website: "https://microstrategy.com"
    },
    sessionTitle: "Digital Gold: Institutional Bitcoin and Treasury Strategy"
  },
  {
    id: "elizabeth-rossiello",
    name: "Elizabeth Rossiello",
    role: "Founder & CEO",
    company: "AZA Finance",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&fit=crop",
    track: "Payments & Corridors",
    bio: "Elizabeth is the CEO of AZA Finance, a leading provider of cross-border payment infrastructure and FX API solutions in frontier markets. She holds regulatory approvals across Europe and Africa.",
    achievements: [
      "Built the largest B2B payments network in Africa",
      "Co-Chair of the World Economic Forum Global Fintech Council",
      "Recognized by Fortune as a top female entrepreneur"
    ],
    socials: {
      linkedin: "https://linkedin.com"
    },
    sessionTitle: "Frictionless Cross-Border Remittance in Emerging Markets"
  },
  {
    id: "kathryn-petralia",
    name: "Kathryn Petralia",
    role: "Co-Founder",
    company: "Kabbage",
    country: "USA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&fit=crop",
    track: "Private Capital & WealthTech",
    bio: "Kathryn is the co-founder of Kabbage, an automated lending platform for small businesses that was acquired by American Express in 2020. She has over two decades of technology and financial services experience.",
    achievements: [
      "Co-founded and scaled Kabbage, raising $2.5B in debt & equity",
      "Served as credit risk advisor to top US commercial banks",
      "Named to the Forbes 100 Most Powerful Women list"
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    sessionTitle: "AI-Driven SME Credit Modeling and Wealth Management"
  }
];
