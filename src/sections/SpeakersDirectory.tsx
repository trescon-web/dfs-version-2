"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, ArrowRight, Search } from "lucide-react";

interface Speaker {
  name: string;
  title: string;
  company: string;
  tags: string[];
  image?: string;
  bio: string;
}

const companyDomainMap: Record<string, string> = {
  "DIFC": "difc.ae",
  "Julius Baer Group": "juliusbaer.com",
  "Franklin Templeton": "franklintempleton.com",
  "DBS Group": "dbs.com",
  "Nomura Holdings, Inc": "nomura.com",
  "Bolt": "bolt.com",
  "National Stock Exchange of India (NSE)": "nseindia.com",
  "DIFC Authority": "difc.ae",
  "Lazard Asset Management": "lazard.com",
  "HSBC Asset Management": "hsbc.com",
  "Austrian Central Bank": "oenb.at",
  "Bombay Stock Exchange (BSE)": "bseindia.com",
  "BNP Paribas Wealth Management Middle East": "bnpparibas.com",
  "Mambu": "mambu.com",
  "Creditas": "creditas.com",
  "Starling Bank": "starlingbank.com",
  "SC Ventures": "scventures.io",
  "Antler": "antler.co",
  "BharatPe": "bharatpe.com",
  "Dapper Labs": "dapperlabs.com",
  "Tabby": "tabby.ai",
  "Noon": "noon.com",
  "Bakkt": "bakkt.com",
  "Wamda Capital": "wamdacapital.com",
  "National Bank of Oman": "nbo.om",
  "Commission de Surveillance du Secteur Financier (CSSF)": "cssf.lu",
  "Capitec Bank": "capitecbank.co.za",
  "President of London Chamber of Commerce & Industry": "londonchamber.co.uk",
  "Partners for Growth": "pfgrowth.com",
  "Arbor Ventures": "arborventures.com",
  "Guernsey Financial Services Commission": "gfsc.gg",
  "Zepz": "zepz.io",
  "Apex Group Ltd.": "apexgroup.com",
  "Polygon": "polygon.technology",
  "CertiK": "certik.com",
  "DMI Finance Private Limited": "dmifinance.in",
  "SpeedInvest": "speedinvest.com",
  "Wamid": "wamid.sa",
  "Cyprus Securities & Exchange Commission": "cysec.gov.cy",
  "Komainu": "komainu.com",
  "Taptap Send": "taptapsend.com",
  "Upstox": "upstox.com",
  "Nium": "nium.com",
  "Union Bacaire Privée (UBP)": "ubp.com",
  "Northern Arc Capital": "northernarc.com",
  "TrueLayer": "truelayer.com",
  "Global Ventures": "global.vc",
  "QED Investors": "qedinvestors.com",
  "Morgan Stanley": "morganstanley.com"
};

const companyLogoMap: Record<string, string> = {
  "DIFC": getAssetPath("/images/organized-difc-logo-new.png"),
  "DIFC Authority": getAssetPath("/images/organized-difc-logo-new.png"),
  "DBS Group": getAssetPath("/images/dbs-logo.svg"),
  "National Stock Exchange of India (NSE)": getAssetPath("/images/nse-logo.svg"),
  "Morgan Stanley": getAssetPath("/images/morgan-stanley-logo.svg"),
  "Bombay Stock Exchange (BSE)": "https://bseindia.com/assets/includenew/images/bselogo.png",
  "President of London Chamber of Commerce & Industry": "https://londonchamber.co.uk/favicons/apple-touch-icon.png",
  "Guernsey Financial Services Commission": "https://gfsc.gg/themes/custom/gfsc_theme/favicon.ico",
  "Apex Group Ltd.": "https://apexgroup.com/media/0vmbhrjn/apex-favicon.png?rmode=min&width=57&height=57",
  "DMI Finance Private Limited": "https://www.dmifinance.in/wp-content/uploads/2026/05/cropped-DMI-Finance-Favicon-180x180.png"
};

function getCompanyLogoUrl(company: string): string {
  if (companyLogoMap[company]) {
    return companyLogoMap[company];
  }
  const domain = companyDomainMap[company];
  if (!domain) return "";
  return `https://logos.hunter.io/${domain}`;
}

export default function SpeakersDirectory({ 
  searchQuery,
  setSearchQuery
}: { 
  searchQuery: string; 
  setSearchQuery: (q: string) => void;
}) {
  const activeFilter = "all";
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const speakers: Speaker[] = [
  {
    "name": "H.E. Essa Kazim",
    "title": "Governor",
    "company": "DIFC",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138551905-358d648a-dfab-4bbf-9a9d-8eed9c851380.png",
    "bio": "",
    "tags": [
      "keynotes",
      "banking"
    ]
  },
  {
    "name": "Noel Quinn",
    "title": "Chairman of the Board of Directors",
    "company": "Julius Baer Group",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138659479-b4b31f3c-6819-4ed6-a4da-55d009dbcae5.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Jenny Johnson",
    "title": "Chief Executive Officer",
    "company": "Franklin Templeton",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138788933-c372563f-9e29-403e-8da7-fb83736fce69.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Tan Su Shan",
    "title": "Chief Executive Officer & Director",
    "company": "DBS Group",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138867713-423d0d88-3b20-4766-b1ee-86a945f1bb4c.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Kentaro Okuda",
    "title": "President & Chief Executive Officer",
    "company": "Nomura Holdings, Inc",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139013619-f0299db9-0981-4534-bf54-edab1a05cca7.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Ryan Breslow",
    "title": "Founder & Chief Executive Officer",
    "company": "Bolt",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139362791-89a36de9-fc87-49c0-8516-9f6001b98476.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Shri Ashishkumar Chauhan",
    "title": "Managing Director & Chief Executive Officer",
    "company": "National Stock Exchange of India (NSE)",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139445550-c75c2101-e6c6-445e-875d-23d854dc67c0.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "H.E. Arif Amiri",
    "title": "Chief Executive Officer",
    "company": "DIFC Authority",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139840556-456e41e4-0505-4fd8-95dc-3376fe94db63.png",
    "bio": "",
    "tags": [
      "keynotes",
      "banking"
    ]
  },
  {
    "name": "Chris Hogbin",
    "title": "Chief Executive Officer",
    "company": "Lazard Asset Management",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773140075492-497ac243-6ae2-44d4-b3fc-a1c9a6cd338a.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Nicolas Moreau",
    "title": "Chief Executive Officer",
    "company": "HSBC Asset Management",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773140197836-f1420645-6d06-4bbc-b417-c1ac658f3fb4.png",
    "bio": "",
    "tags": [
      "keynotes"
    ]
  },
  {
    "name": "Martin Kocher",
    "title": "Governor",
    "company": "Austrian Central Bank",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773141354950-d7a2625b-b5f7-454d-ad62-7c0979bf0384.png",
    "bio": "",
    "tags": [
      "keynotes",
      "banking"
    ]
  },
  {
    "name": "Sundararaman Ramamurthy",
    "title": "Managing Director & Chief Executive Officer",
    "company": "Bombay Stock Exchange (BSE)",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773141430838-8ca0ffff-ff06-4965-8a88-b49109e6d5e2.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Antoine Chemali",
    "title": "Chief Executive Officer",
    "company": "BNP Paribas Wealth Management Middle East",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138232195-f704de9b-c358-44a1-b0c8-92947dede0b8.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Fernando Zandona",
    "title": "Chief Executive Officer",
    "company": "Mambu",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773141598592-77d6fd74-803c-4734-a57c-9d9515b487ed.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Sergio Furio",
    "title": "Founder & Chief Executive Officer",
    "company": "Creditas",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773141712959-b84d7ab5-fd17-4c03-a035-fca277b4335a.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Raman Bhatia",
    "title": "Group Chief Executive Officer",
    "company": "Starling Bank",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142066444-e716be58-64cf-40ef-ba7a-e05828203f21.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Alex Manson",
    "title": "Chief Executive Officer",
    "company": "SC Ventures",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142163317-c2f042ea-2560-4e35-8e88-e164c378b3d3.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Magnus Grimeland",
    "title": "Founder & Chief Executive Officer",
    "company": "Antler",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142284539-70a2bad4-ea25-489e-b8f6-33e974df4100.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Nalin Negi",
    "title": "Chief Executive Officer",
    "company": "BharatPe",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142382202-504c5247-1022-43f8-9113-07388097173a.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Roham Gharegozlou",
    "title": "Co-Founder & Chief Executive Officer",
    "company": "Dapper Labs",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142609037-96980a10-c33f-43c7-a9f7-1d24468617f1.png",
    "bio": "",
    "tags": [
      "web3"
    ]
  },
  {
    "name": "Hosam Arab",
    "title": "Co-Founder & Chief Executive Officer",
    "company": "Tabby",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142974605-50cd1df0-f97b-4c93-b0cb-24739125d665.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Faraz Khalid",
    "title": "Chief Executive Officer",
    "company": "Noon",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773143072293-82c5a82f-a9bd-4a45-b4fc-96dd857bbe0c.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Akshay Naheta",
    "title": "Chief Executive Officer",
    "company": "Bakkt",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142985830-85ca1a6f-0c6d-409b-b459-d839bc5ad330.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Fadi Ghandour",
    "title": "Executive Chairman",
    "company": "Wamda Capital",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142925191-34e7c526-88fb-4a28-a462-8437e64b06a1.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Abdullah Zahran Al Hinai",
    "title": "Chief Executive Officer",
    "company": "National Bank of Oman",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142830921-7acb5222-8a48-4957-9a08-35f5fcb30ad8.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Claude Marx",
    "title": "Director General",
    "company": "Commission de Surveillance du Secteur Financier (CSSF)",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142738147-6d861b48-40e0-47e9-8f76-ca81100d59e7.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Graham Roy Lee",
    "title": "Chief Executive Officer",
    "company": "Capitec Bank",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142676844-8b005182-6af3-4ac8-8354-833d24bfc7d9.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Prof. Michael Mainelli",
    "title": "Chairman of Z/Yen Group",
    "company": "President of London Chamber of Commerce & Industry",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142443959-6ba8aefe-4c7c-4a18-bd7d-1d919eec3bf1.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Andrew Kahn",
    "title": "Chief Executive Officer & Co-Founder",
    "company": "Partners for Growth",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142297420-50ba86e4-cfcf-4442-8124-8509220b0466.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Melissa Guzy",
    "title": "Managing Partner & Founder",
    "company": "Arbor Ventures",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142246803-eb49135f-066b-4eec-a7de-5ab26d45134b.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "William Mason",
    "title": "Director General",
    "company": "Guernsey Financial Services Commission",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773142180784-607cc30d-5eec-431e-ad91-bb7ce05417c3.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Mark Lenhard",
    "title": "Chief Executive Officer",
    "company": "Zepz",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773140088348-12fb5a42-3633-4eac-aa9c-2f68bef83826.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Peter Hughes",
    "title": "Founder & Chief Executive Officer",
    "company": "Apex Group Ltd.",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773140031538-bd94fc58-7a70-48c9-b3e2-0fdbe51f38dc.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Sandeep Nailwal",
    "title": "Founder",
    "company": "Polygon",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139952917-1c251b8e-153e-469f-b989-7f54de7f7586.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Prof. Ronghui Gu",
    "title": "Co-Founder",
    "company": "CertiK",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139867619-1e229cbb-1b90-4f4e-8bce-f3910bf0040b.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Shivashish Chatterjee",
    "title": "Co-Founder/Joint Managing Director",
    "company": "DMI Finance Private Limited",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139808038-4e3f56d2-3dc8-4a8b-8b35-013e98678472.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Stefan Klestil",
    "title": "General Partner",
    "company": "SpeedInvest",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139608578-d42e2ab7-c70c-4249-9149-956f782b6acf.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Yazeed AlDomaiji",
    "title": "Chief Executive Officer",
    "company": "Wamid",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139403740-88e68324-4757-49f0-8704-87682f058b2f.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Dr. George Theocharides",
    "title": "Chairman",
    "company": "Cyprus Securities & Exchange Commission",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773139097815-e0f362bf-3da7-4ea5-b0c2-aea328cb14d5.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Sebastian Widmann",
    "title": "General Manager",
    "company": "Komainu",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138975679-a86d0344-2e75-4b28-926b-07da78010a58.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Michael Faye",
    "title": "Co-Founder & Chief Executive Officer",
    "company": "Taptap Send",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138931250-a886b407-4ddd-4aec-9d00-8fd039afcd03.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Shrini Viswanath",
    "title": "Co-Founder",
    "company": "Upstox",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138865412-763e8272-784c-4379-8da8-cccaf143a776.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Prajit Nanu",
    "title": "Co-Founder & Chief Executive Officer",
    "company": "Nium",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138816757-693291dd-b01c-42b9-b3c9-2504a7eaaa3d.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Ian Cramb",
    "title": "Group Chief Operating Officer",
    "company": "Union Bacaire Privée (UBP)",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138769940-f172e1d2-3c5a-4c50-8f2b-9f2ebbfd17ff.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Ashish Mehrotra",
    "title": "Managing Director & Chief Executive Officer",
    "company": "Northern Arc Capital",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138700520-933bfaf2-1e9d-439b-80a5-0fc4e67ad28d.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Francesco Simoneschi",
    "title": "Co-Founder & Chief Executive Officer",
    "company": "TrueLayer",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138624673-4216cbad-e572-476d-8f54-adaff51a1b9f.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  },
  {
    "name": "Simon Sharp",
    "title": "Senior Partner",
    "company": "Global Ventures",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138564162-c5241af0-f1df-4ae0-8fd9-c635cb95048f.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Gbenga Ajayi",
    "title": "Partner",
    "company": "QED Investors",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138513564-70a55ed2-d27f-46d4-a82e-32b7030d1a47.png",
    "bio": "",
    "tags": [
      "vcs"
    ]
  },
  {
    "name": "Jigar Patel",
    "title": "Managing Director - Global Head of Fintech & Internet",
    "company": "Morgan Stanley",
    "image": "https://media.konfhub.com/speakers/2026/March/10/1773138462978-ba2edd1f-68fa-4ad3-910d-4e5ef9a51975.png",
    "bio": "",
    "tags": [
      "banking"
    ]
  }
];

    // Filter & Search logic
  const filteredSpeakers = speakers.filter((sp) => {
    const matchesSearch = 
      sp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sp.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      activeFilter === "all" || sp.tags.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="relative pb-28 bg-white">
      
      {/* Explicit style overrides to defeat global text overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .sp-name {
          color: #082028 !important;
        }
        .sp-card:hover .sp-name {
          color: #0b766e !important;
        }
        .sp-role {
          color: #c5a880 !important;
        }
        .sp-company {
          color: #475569 !important;
        }
        .sp-card:hover .sp-company {
          color: #082028 !important;
        }
        .sp-bio {
          color: #475569 !important;
        }
      `}} />

      {/* Search Bar - styled for light theme */}
      <div className="max-w-xl mx-auto mb-14 px-6 relative z-10 w-full pt-12">
        <div className="relative flex items-center border-b border-slate-200 focus-within:border-[#0b766e] pb-3 transition-colors duration-300">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search speakers by name, title, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-[15px] md:text-[16px] text-slate-800 placeholder-slate-400 focus:outline-none w-full font-medium"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {filteredSpeakers.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg font-mono">No speakers matched your search criteria.</p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSpeakers.map((speaker, index) => (
                <motion.div
                  layout
                  key={speaker.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-3xl bg-gradient-to-br from-white to-[#e0f7fc]/25 border border-sky-100/60 hover:border-[#0b766e]/30 transition-all duration-500 group flex flex-col overflow-hidden shadow-lg h-[420px] justify-between text-left sp-card hover:translate-y-[-6px] hover:shadow-[0_20px_40px_rgba(8,32,40,0.06)] cursor-pointer" onClick={() => setSelectedSpeaker(speaker)}
                >
                  {/* Hover gradient glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[#0b766e]/5 group-hover:to-[#0b766e]/10 rounded-3xl transition-all duration-500 pointer-events-none z-0" />

                      {/* Photo or Fallback Avatar */}
                      <div className="relative w-full h-[260px] bg-slate-100 flex items-center justify-center overflow-hidden shrink-0 border-b border-sky-100/60 z-0">
                        {/* 1. Speaker Photo (Fades out on hover) */}
                        {speaker.image ? (
                          <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-out group-hover:opacity-0 z-10"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-slate-400 group-hover:opacity-0 transition-opacity duration-500 z-10 bg-slate-100">
                            <Mic className="w-10 h-10" />
                            <span className="text-[10px] font-mono font-bold tracking-widest">ORATOR ASSEMBLY</span>
                          </div>
                        )}

                        {/* 2. Company Logo container (Fades in on hover) */}
                        <div className="absolute inset-0 bg-slate-50/95 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                          <img
                            src={getCompanyLogoUrl(speaker.company)}
                            alt={`${speaker.company} logo`}
                            className="max-w-[80%] max-h-[70%] w-auto h-auto object-contain"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              const currentSrc = img.src;
                              const domain = companyDomainMap[speaker.company];
                              
                              if (domain) {
                                if (currentSrc.includes("logos.hunter.io")) {
                                  // Fallback 1: Google Favicon API (high-resolution original icon)
                                  img.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                                  return;
                                } else if (currentSrc.includes("google.com/s2/favicons")) {
                                  // Fallback 2: Clearbit API
                                  img.src = `https://logo.clearbit.com/${domain}`;
                                  return;
                                }
                              }

                              // Ultimate Fallback: Hide image, show high contrast text fallback
                              img.style.display = 'none';
                              const fallbackText = img.nextSibling as HTMLElement;
                              if (fallbackText) fallbackText.style.display = 'block';
                            }}
                          />
                          <span 
                            style={{ display: 'none' }} 
                            className="text-xs font-mono font-bold text-slate-800 text-center uppercase tracking-wider"
                          >
                            {speaker.company}
                          </span>
                        </div>
                      </div>

                  {/* Content metadata */}
                  <div className="p-5 pb-4 flex-grow flex flex-col justify-between relative z-10">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 sp-name">
                        {speaker.name}
                      </h3>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider sp-role">
                        {speaker.title}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-sky-100/60 mt-auto w-full">
                      <span className="text-xs font-semibold sp-company transition-colors duration-300 text-slate-500 group-hover:text-[#082028]">
                        {speaker.company}
                      </span>
                      <span className="text-slate-400 group-hover:text-[#0b766e] group-hover:translate-x-1.5 transition-all text-xs font-bold font-mono">
                        →
                      </span>
                    </div>
                  </div>

                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    
      {/* Bio Pop-up Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020a10]/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white border border-sky-100/60 rounded-[2.5rem] shadow-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start text-left cursor-default z-50 !bg-[#ffffff] !backdrop-filter-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                aria-label="Close bio"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Speaker Photo */}
              <div className="w-[160px] md:w-[200px] h-[160px] md:h-[200px] rounded-2xl overflow-hidden shrink-0 border border-sky-100/60 bg-slate-100 mx-auto md:mx-0">
                {selectedSpeaker.image ? (
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-slate-400 bg-slate-100">
                    <Mic className="w-8 h-8" />
                  </div>
                )}
              </div>

              {/* Speaker metadata & bio */}
              <div className="flex-grow space-y-4 w-full">
                <div className="space-y-1 text-center md:text-left pr-6">
                  <h3 className="text-2xl md:text-3xl font-[800] text-[#082028] tracking-tight leading-tight">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-sm font-mono font-bold uppercase tracking-wider text-[#b45309]">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {selectedSpeaker.company}
                  </p>
                </div>

                <div className="border-t border-sky-100/60 pt-4">
                  <p className="text-sm leading-relaxed text-slate-700 font-normal max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    {selectedSpeaker.bio || "No biography available for this speaker."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
