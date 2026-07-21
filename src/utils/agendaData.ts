export interface Session {
  id: string;
  title: string;
  description: string;
  time: string;
  startTime: string; // for sorting/filtering
  speakerIds: string[];
  track: "AI & Regulation" | "Digital Assets & Tokenisation" | "Payments & Corridors" | "Private Capital & WealthTech" | "Insurance & Risk" | "Future Finance";
  stage: "Main Arena" | "Innovation Stage" | "Future Panel Stage";
  day: 1 | 2;
}

export const sessions: Session[] = [
  {
    id: "session-1",
    title: "Opening Ceremony & Ministerial Welcome (Connecting Markets)",
    description: "Inaugural opening address highlighting Dubai's strategic vision for global fintech collaboration, regulatory advancements, and international trade corridors aligned with Dubai Economic Agenda D33.",
    time: "09:00 - 09:30",
    startTime: "09:00",
    speakerIds: ["sarah-al-mansoori"],
    track: "Future Finance",
    stage: "Main Arena",
    day: 1
  },
  {
    id: "session-2",
    title: "Rebuilding the Global Economic Infrastructure",
    description: "A deep dive into how modern financial APIs, localized payment processors, and global digital ledgers are shaping cross-border flow of capital and reducing merchant frictions worldwide.",
    time: "09:45 - 10:30",
    startTime: "09:45",
    speakerIds: ["patrick-collison"],
    track: "Payments & Corridors",
    stage: "Main Arena",
    day: 1
  },
  {
    id: "session-3",
    title: "Generative Intelligence and Autonomous Asset Management",
    description: "Explores how reinforcement learning, predictive AI networks, and large language models are transforming real-time trade executions, risk profiling, and corporate treasury management.",
    time: "10:45 - 11:30",
    startTime: "10:45",
    speakerIds: ["demis-hassabis"],
    track: "AI & Regulation",
    stage: "Main Arena",
    day: 1
  },
  {
    id: "session-4",
    title: "Frictionless Cross-Border Remittance in Emerging Markets",
    description: "An interactive panel examining FX liquidity pools, mobile wallets, and API routing systems that enable instant settlement for businesses operating in frontier economies.",
    time: "11:45 - 12:30",
    startTime: "11:45",
    speakerIds: ["elizabeth-rossiello", "patrick-collison"],
    track: "Payments & Corridors",
    stage: "Innovation Stage",
    day: 1
  },
  {
    id: "session-5",
    title: "Dubai 2030: The Digital Bridge of Global Capital",
    description: "Unveiling the regulatory sandbox results and future frameworks for virtual assets, enabling global sandboxed testing for banks and technology partners in Dubai.",
    time: "14:00 - 14:45",
    startTime: "14:00",
    speakerIds: ["sarah-al-mansoori"],
    track: "Future Finance",
    stage: "Future Panel Stage",
    day: 1
  },
  {
    id: "session-6",
    title: "The Modernization of Capital Markets: Cloud & Security",
    description: "How clearing houses, stock exchanges, and institutional trading platforms are migrating to low-latency cloud systems while defending against modern security threats.",
    time: "09:30 - 10:15",
    startTime: "09:30",
    speakerIds: ["adena-friedman"],
    track: "Insurance & Risk",
    stage: "Main Arena",
    day: 2
  },
  {
    id: "session-7",
    title: "Digital Gold: Institutional Bitcoin and Treasury Strategy",
    description: "A comprehensive look at corporate balance sheet allocations, institutional ETF flows, and the underlying cryptographic security systems securing corporate treasury assets.",
    time: "10:30 - 11:15",
    startTime: "10:30",
    speakerIds: ["michael-saylor"],
    track: "Digital Assets & Tokenisation",
    stage: "Main Arena",
    day: 2
  },
  {
    id: "session-8",
    title: "Neobanks 2.0: Profitability, Regulation, and Global Scale",
    description: "Evaluating the transition of mobile neobanks from customer-acquisition engines to profitable, fully-licensed, multi-currency credit and investment ecosystems.",
    time: "11:30 - 12:15",
    startTime: "11:30",
    speakerIds: ["valentin-stalf"],
    track: "Future Finance",
    stage: "Main Arena",
    day: 2
  },
  {
    id: "session-9",
    title: "AI-Driven SME Credit Modeling and Wealth Management",
    description: "Breaking down how alternative data points, automated bookkeeping APIs, and cloud cash flow projections can enable instantaneous small-business loan approvals.",
    time: "13:30 - 14:15",
    startTime: "13:30",
    speakerIds: ["kathryn-petralia"],
    track: "Private Capital & WealthTech",
    stage: "Innovation Stage",
    day: 2
  },
  {
    id: "session-10",
    title: "Decentralized Liquidity and Central Bank Digital Currencies (CBDCs)",
    description: "Analyzing the collaboration between sovereign digital currencies, commercial banking ledgers, and decentralized finance protocols to enable frictionless global settlements.",
    time: "14:30 - 15:15",
    startTime: "14:30",
    speakerIds: ["michael-saylor", "sarah-al-mansoori"],
    track: "Digital Assets & Tokenisation",
    stage: "Future Panel Stage",
    day: 2
  }
];
