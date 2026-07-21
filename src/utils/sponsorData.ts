export interface Sponsor {
  id: string;
  name: string;
  tier: "Titanium" | "Platinum" | "Gold" | "Silver" | "Pavilion Partner";
  logo: string; // text representation or style
  booth: string;
  description: string;
  solutions: string[];
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "stripe",
    name: "Stripe",
    tier: "Titanium",
    logo: "STRIPE",
    booth: "Booth T1 / Hall 2",
    description: "Stripe provides financial infrastructure for the internet, offering billing, card issuing, treasury services, and globally distributed payout APIs.",
    solutions: ["Global Issuing APIs", "Billing & Subscriptions Engine", "Stripe Capital"],
    website: "https://stripe.com"
  },
  {
    id: "ripple",
    name: "Ripple",
    tier: "Titanium",
    logo: "RIPPLE",
    booth: "Booth T2 / Hall 2",
    description: "Ripple provides enterprise-grade crypto solutions for global financial institutions to transact instantly, transparently, and cost-effectively.",
    solutions: ["Ripple Payments", "Liquidity Hub", "CBDC Platform"],
    website: "https://ripple.com"
  },
  {
    id: "checkout",
    name: "Checkout.com",
    tier: "Platinum",
    logo: "CHECKOUT",
    booth: "Booth P1 / Hall 3",
    description: "Checkout.com helps businesses adapt, innovate, and thrive with global payment processing, fraud detection, and localized conversion optimization.",
    solutions: ["Intelligent Acceptance", "Fraud Detection Engine", "Unified Payments API"],
    website: "https://checkout.com"
  },
  {
    id: "binance",
    name: "Binance Custody",
    tier: "Platinum",
    logo: "BINANCE",
    booth: "Booth P2 / Hall 3",
    description: "Offering institutional-grade digital asset custody, liquidity management, and secure cold-storage infrastructure for fund managers and family offices.",
    solutions: ["Binance Mirror", "Cold Storage Security", "Co-signing Wallets"],
    website: "https://binance.com"
  },
  {
    id: "visa",
    name: "Visa",
    tier: "Gold",
    logo: "VISA",
    booth: "Booth G1 / Hall 4",
    description: "Visa is a world leader in digital payments, facilitating global transactions between consumers, merchants, financial institutions, and government entities.",
    solutions: ["Visa B2B Connect", "Visa Token Service", "Real-Time Push Payments"],
    website: "https://visa.com"
  },
  {
    id: "mastercard",
    name: "Mastercard",
    tier: "Gold",
    logo: "MASTERCARD",
    booth: "Booth G2 / Hall 4",
    description: "Mastercard operates one of the world's fastest payment processing networks, delivering digital tools, cybersecurity, and consulting services.",
    solutions: ["Mastercard Send", "Cyber Quant Security", "Cross-Border Services"],
    website: "https://mastercard.com"
  },
  {
    id: "tabby",
    name: "Tabby",
    tier: "Silver",
    logo: "TABBY",
    booth: "Booth S1 / Hall 4",
    description: "Tabby empowers shoppers with the flexibility to buy what they want and pay over time, driving loyalty and conversion rates for retail brands.",
    solutions: ["Interest-Free BNPL", "Retail Merchant Dashboard", "Tabby Card"],
    website: "https://tabby.ai"
  },
  {
    id: "pyypl",
    name: "Pyypl",
    tier: "Silver",
    logo: "PYYPL",
    booth: "Booth S2 / Hall 4",
    description: "Pyypl provides digital financial services for smartphone users across the Middle East and Africa, offering card issuing and instant remittances.",
    solutions: ["App-based Visa Cards", "Micro-remittances", "Peer-to-Peer Payments"],
    website: "https://pyypl.com"
  }
];
