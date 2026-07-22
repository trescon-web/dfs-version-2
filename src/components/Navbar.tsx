"use client";
import { getAssetPath } from "@/utils/assetPath";
import { useState, useEffect } from "react";
import { Menu, X, Globe, Search, Calendar, ChevronRight, ChevronDown, Mic, Building, Sparkles, Handshake, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import searchIndex from "@/data/searchIndex.json";

interface SearchResult {
  title: string;
  href: string;
  snippet: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!searchVal.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchVal.trim().toLowerCase();
    const results: SearchResult[] = [];

    for (const item of searchIndex) {
      const titleMatch = item.title.toLowerCase().includes(query);
      
      let matchedText = "";
      for (const txt of item.texts) {
        if (txt.toLowerCase().includes(query)) {
          matchedText = txt;
          break;
        }
      }

      if (titleMatch || matchedText) {
        let snippet = matchedText;
        if (!snippet) {
          snippet = item.texts[0] || "";
        }

        if (snippet.length > 90) {
          const idx = snippet.toLowerCase().indexOf(query);
          if (idx !== -1) {
            const start = Math.max(0, idx - 30);
            snippet = (start > 0 ? "..." : "") + snippet.substring(start, start + 90) + "...";
          } else {
            snippet = snippet.substring(0, 90) + "...";
          }
        }

        results.push({
          title: item.title,
          href: item.href,
          snippet: snippet
        });

        if (results.length >= 6) break;
      }
    }

    setSearchResults(results);
  }, [searchVal]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (searchResults.length > 0) {
      window.location.href = searchResults[0].href;
      setSearchOpen(false);
      setSearchVal("");
      return;
    }

    const query = searchVal.trim().toLowerCase();
    if (!query) return;
    
    setSearchOpen(false);
    setSearchVal("");

    if (query.includes("take the stage") || query.includes("speak") || query.includes("speaking") || query.includes("become a speaker")) {
      window.location.href = getAssetPath("/get-involved#speak");
    } else if (query.includes("exhibitor")) {
      window.location.href = getAssetPath("/exhibitors");
    } else if (query.includes("sponsor")) {
      window.location.href = getAssetPath("/sponsors");
    } else if (query.includes("speaker")) {
      window.location.href = getAssetPath("/speakers");
    } else if (query.includes("blog") || query.includes("news") || query.includes("article")) {
      window.location.href = getAssetPath("/blog");
    } else if (query.includes("about")) {
      window.location.href = getAssetPath("/about");
    } else if (query.includes("media") || query.includes("partner")) {
      window.location.href = getAssetPath("/media-partners");
    } else if (query.includes("association")) {
      window.location.href = getAssetPath("/associations");
    } else if (query.includes("ambassador")) {
      window.location.href = getAssetPath("/ambassadors");
    } else if (query.includes("get involved") || query.includes("involved")) {
      window.location.href = getAssetPath("/get-involved");
    } else if (query.includes("roundtable") || query.includes("workshop")) {
      window.location.href = getAssetPath("/roundtables-workshops");
    } else if (query.includes("launchpad")) {
      window.location.href = getAssetPath("/fintech-launchpad");
    } else if (query.includes("enquiry") || query.includes("contact")) {
      window.location.href = getAssetPath("/general-enquiry");
    } else {
      window.location.href = `/speakers?search=${encodeURIComponent(query)}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Background transition trigger
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hasMega: false },
    { name: "About Us", href: getAssetPath("/about"), hasMega: true, megaId: "about" },
    { name: "Speakers", href: getAssetPath("/speakers"), hasMega: false },
    { name: "Get Involved", href: getAssetPath("/get-involved"), hasMega: true, megaId: "get-involved" },
    { name: "Ecosystem", href: getAssetPath("/sponsors"), hasMega: true, megaId: "ecosystem" },
  ];

  const handleScrollToSection = (id: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    if (id.startsWith("/")) {
      window.location.href = id;
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + id;
    }
  };

  const speakersMega = {
    title: "Keynote Lineup",
    subtitle: "Meet the 150+ leaders reshaping global capital markets.",
    image: getAssetPath("/images/dfs_nasdaq_keynote.jpg"),
    links: [
      {
        title: "Keynote Orators",
        desc: "Central Bank Governors, Finance Ministers, and regulatory architects.",
        icon: ShieldCheck,
        href: getAssetPath("/speakers"),
      },
      {
        title: "Unicorn Founders",
        desc: "Pioneers of decentralized rails, blockchain, and AI payment networks.",
        icon: Sparkles,
        href: getAssetPath("/speakers"),
      },
      {
        title: "Advisory Council",
        desc: "Industry heads guiding international policy structures.",
        icon: Mic,
        href: getAssetPath("/speakers"),
      },
    ],
  };

  const getInvolvedMega = {
    title: "Participation Hub",
    subtitle: "Engage with global financial technology builders and investors.",
    image: getAssetPath("/images/dfs_visa_exhibition_booth.jpg"),
    links: [
      {
        title: "Buy Tickets",
        desc: "Secure delegate passes for keynotes, stages, and lounges.",
        icon: ChevronRight,
        href: getAssetPath("/get-involved/#buy-tickets"),
      },
      {
        title: "Sponsor",
        desc: "Showcase innovations and brand authority to 5,000+ buyers.",
        icon: Building,
        href: getAssetPath("/get-involved/#sponsor-2026"),
      },
      {
        title: "Speak",
        desc: "Submit orator nominations to join panels and fire-side chats.",
        icon: Mic,
        href: getAssetPath("/get-involved/#speak"),
      },
      {
        title: "Enquiry",
        desc: "Contact corporate sales for bespoke executive packages.",
        icon: Handshake,
        href: getAssetPath("/general-enquiry"),
      },
    ],
  };

  const aboutMega = {
    title: "About the Summit",
    subtitle: "Connecting global leaders to shape the future of finance.",
    image: getAssetPath("/images/gate-building.png"),
    links: [
      {
        title: "About DFS",
        desc: "The premier Fintech summit connecting global financial leaders.",
        icon: Building,
        href: getAssetPath("/about"),
      },
      {
        title: "News",
        desc: "Latest editorial insights, press releases, and announcements.",
        icon: Mic,
        href: getAssetPath("/blog"),
      },
      {
        title: "Dubai Future Finance Week",
        desc: "Discover the week-long umbrella of financial events in Dubai.",
        icon: Globe,
        href: getAssetPath("/dubai-future-finance-week"),
      },
    ],
  };

  const ecosystemMega = {
    title: "Global FinTech Ecosystem",
    subtitle: "Collaborating with sponsors, regulatory bodies, and news networks.",
    image: getAssetPath("/images/dfs_sponsors_visa_booth.jpg"),
    links: [
      {
        title: "Sponsors",
        desc: "Meet our global network of tier-1 institutional sponsors.",
        icon: Building,
        href: getAssetPath("/sponsors"),
      },
      {
        title: "Exhibitors",
        desc: "Explore leading platforms showcasing fintech solutions.",
        icon: ChevronRight,
        href: getAssetPath("/exhibitors"),
      },
      {
        title: "Associations",
        desc: "Affiliated global alliances, trade bodies, and organizations.",
        icon: Handshake,
        href: getAssetPath("/associations"),
      },
      {
        title: "Media",
        desc: "Official international press houses and broadcast partners.",
        icon: Mic,
        href: getAssetPath("/media-partners"),
      },
      {
        title: "Roundtables & Workshops",
        desc: "Interactive closed-door technical executive forums.",
        icon: Calendar,
        href: getAssetPath("/roundtables-workshops"),
      },
      {
        title: "Ambassadors",
        desc: "Global advocates championing the fintech summit.",
        icon: ShieldCheck,
        href: getAssetPath("/ambassadors"),
      },
      {
        title: "FinTech Launchpad",
        desc: "Accelerating startup pitches and growth models.",
        icon: Sparkles,
        href: getAssetPath("/fintech-launchpad"),
      },
    ],
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-premium duration-500 ${
          scrolled ? "glass-nav scrolled py-3" : "bg-transparent py-6"
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-purple-accent transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 focus:outline-none"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <svg className="w-28 md:w-32 h-auto nav-logo-dynamic" viewBox="0 0 261 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M116.271 19.5847C120.563 19.5847 122.463 17.3349 122.463 12.6638V12.3848C122.463 7.60569 120.563 5.56269 116.208 5.56269H114.624V19.5939H116.28L116.271 19.5847ZM107.379 0.000890732H116.522C125.45 0.000890732 129.986 4.46466 129.986 12.2676V12.5466C129.986 20.3858 125.342 25.1378 116.487 25.1378H107.379V0.000890732Z" fill="currentColor" />
              <path d="M133.451 14.9407V0.000833511H140.66V14.6259C140.66 18.1805 141.542 19.8995 144.602 19.8995C147.662 19.8995 148.544 18.2798 148.544 14.5179V0.000833511H155.825V14.8419C155.825 22.1585 151.532 25.5606 144.611 25.5606C137.69 25.5606 133.469 21.9788 133.469 14.9407H133.451Z" fill="currentColor" />
              <path d="M170.639 20.3136C172.926 20.3136 173.979 19.2606 173.979 17.3978V17.2535C173.979 15.3548 172.961 14.3735 170.423 14.3735H167.642V20.3136H170.631H170.639ZM170.396 9.98193C172.647 9.98193 173.492 9.20793 173.492 7.41678V7.28163C173.492 5.56266 172.574 4.78867 170.396 4.78867H167.651V9.99061H170.396V9.98193ZM160.623 0.000860214H171.836C177.776 0.000860214 180.306 2.67348 180.306 6.57059V6.71443C180.306 9.53143 178.866 11.3948 176.049 12.1324C179.145 12.6638 181.08 14.5266 181.08 18.0009V18.1447C181.08 22.6448 178.163 25.1378 171.936 25.1378H160.613V0.000860214H160.623Z" fill="currentColor" />
              <path d="M191.773 15.5071H197.289L194.544 5.84134L191.763 15.5071H191.773ZM190.368 5.72205e-06H199.683L207.667 25.1369H200.035L198.703 20.4572H190.368L189.036 25.1369H182.322L190.368 5.72205e-06Z" fill="currentColor" />
              <path d="M210.816 0.0008564H218.097V25.1378H210.816V0.0008564Z" fill="currentColor" />
              <path d="M107.379 32.2198H124.362V37.8088H114.624V43.1545H122.391V48.465H114.624V57.3568H107.379V32.2198Z" fill="currentColor" />
              <path d="M128.006 32.2199H135.287V57.3568H128.006V32.2199Z" fill="currentColor" />
              <path d="M140.381 32.2199H148.499L156.554 46.3857V32.2199H162.845V57.3568H155.888L146.708 41.5708V57.3568H140.381V32.2199Z" fill="currentColor" />
              <path d="M172.645 37.773H166.139V32.2199H186.388V37.773H179.881V57.3568H172.636V37.773H172.645Z" fill="currentColor" />
              <path d="M189.691 32.2202H207.061V37.7733H196.864V42.0932H204.982V47.223H196.864V51.7953H207.619V57.3479H189.691V32.2109V32.2202Z" fill="currentColor" />
              <path d="M209.691 44.9465V44.6675C209.691 36.9362 215.172 31.8336 222.525 31.8336C229.068 31.8336 233.604 34.8574 234.198 41.4993H226.782C226.503 38.9347 225.09 37.5306 222.561 37.5306C219.331 37.5306 217.288 40.0594 217.288 44.6317V44.9107C217.288 49.4466 219.223 52.0112 222.669 52.0112C225.198 52.0112 226.99 50.6793 227.349 47.8986H234.522C234.027 54.4054 229.32 57.7804 222.814 57.7804C214.021 57.7804 209.701 52.6506 209.701 44.9465H209.691Z" fill="currentColor" />
              <path d="M237.816 32.2199H245.061V41.8226H253.323V32.2199H260.533V57.3568H253.323V47.4387H245.061V57.3568H237.816V32.2199Z" fill="currentColor" />
              <path d="M105.758 81.5947H112.616C112.796 83.3859 113.597 84.8617 116.585 84.8617C118.655 84.8617 119.816 83.8445 119.816 82.3687C119.816 80.8929 118.871 80.3979 115.847 79.9387C108.746 79.0925 106.352 76.9866 106.352 71.9198C106.352 67.3838 110.078 64.0805 116.09 64.0805C122.102 64.0805 125.549 66.6098 126.008 71.9198H119.33C119.087 70.1286 118.061 69.2108 116.099 69.2108C114.137 69.2108 113.183 70.0928 113.183 71.3526C113.183 72.7567 113.957 73.3956 117.089 73.8189C123.452 74.5208 126.719 76.1768 126.719 81.6219C126.719 86.2295 123.065 89.9914 116.594 89.9914C109.565 89.9914 105.974 87.0398 105.767 81.5855L105.758 81.5947Z" fill="currentColor" />
              <path d="M129.799 79.3803V64.4405H137.008V79.0655C137.008 82.6201 137.89 84.3391 140.95 84.3391C144.01 84.3391 144.892 82.7195 144.892 78.9575V64.4405H152.173V79.2815C152.173 86.5981 147.88 90.0002 140.959 90.0002C134.038 90.0002 129.817 86.4185 129.817 79.3803H129.799Z" fill="currentColor" />
              <path d="M156.969 64.4406H166.356L171.171 77.8324L175.986 64.4406H185.193V89.5775H178.02V73.9353L171.864 89.5775H169.47L163.386 73.9353V89.5775H156.951V64.4406H156.969Z" fill="currentColor" />
              <path d="M190.223 64.4404H199.61L204.425 77.8323L209.24 64.4404H218.447V89.5774H211.274V73.9352L205.118 89.5774H202.724L196.64 73.9352V89.5774H190.205V64.4404H190.223Z" fill="currentColor" />
              <path d="M223.613 64.4406H230.894V89.5775H223.613V64.4406Z" fill="currentColor" />
              <path d="M240.804 69.9937H234.297V64.4406H254.547V69.9937H248.04V89.5775H240.795V69.9937H240.804Z" fill="currentColor" />
              <path d="M44.4044 18.9178H45.6376C46.6276 18.9178 47.4282 18.108 47.4282 17.1088C47.4282 16.1101 46.6276 15.2997 45.6376 15.2997H44.4044C43.4144 15.2997 42.6133 16.1101 42.6133 17.1088C42.6133 18.108 43.4144 18.9178 44.4044 18.9178Z" fill="currentColor" />
              <path d="M37.9689 25.8568H52.2248C53.2149 25.8568 54.016 25.047 54.016 24.0477C54.016 23.049 53.2149 22.2387 52.2248 22.2387H37.9689C36.9789 22.2387 36.1777 23.049 36.1777 24.0477C36.1777 25.047 36.9789 25.8568 37.9689 25.8568Z" fill="currentColor" />
              <path d="M59.1847 29.1873H30.7086C29.7186 29.1873 28.918 29.9971 28.918 30.9963C28.918 31.995 29.7186 32.8054 30.7086 32.8054H59.1847C60.1747 32.8054 60.9758 31.995 60.9758 30.9963C60.9758 29.9971 60.1747 29.1873 59.1847 29.1873Z" fill="currentColor" />
              <path d="M66.4115 36.1628H60.1924C59.1937 36.1628 58.3926 36.9819 58.3926 37.9806C58.3926 38.9798 59.2024 39.7989 60.1924 39.7989H66.4115C67.4108 39.7989 68.2114 38.9798 68.2114 37.9806C68.2114 36.9819 67.4015 36.1628 66.4115 36.1628Z" fill="currentColor" />
              <path d="M72.8982 43.2002H55.8252C54.826 43.2002 54.0254 44.0193 54.0254 45.018C54.0254 46.0172 54.8352 46.8363 55.8252 46.8363H72.8982C73.8974 46.8363 74.698 46.0172 74.698 45.018C74.698 44.0193 73.8882 43.2002 72.8982 43.2002Z" fill="currentColor" />
              <path d="M66.3648 50.1937H46.9248C45.9261 50.1937 45.125 51.0127 45.125 52.0114C45.125 53.0107 45.9348 53.8297 46.9248 53.8297H66.3648C67.3641 53.8297 68.1647 53.0107 68.1647 52.0114C68.1647 51.0127 67.3548 50.1937 66.3648 50.1937Z" fill="currentColor" />
              <path d="M55.1775 36.2525H39.4093C38.4106 36.2525 37.6095 37.0715 37.6095 38.0708C37.6095 39.0695 38.4199 39.8885 39.4093 39.8885H55.1775C56.1762 39.8885 56.9773 39.0695 56.9773 38.0708C56.9773 37.0715 56.1675 36.2525 55.1775 36.2525Z" fill="#12E9E9" />
              <path d="M50.4613 43.2002H39.4093C38.4106 43.2002 37.6095 44.0193 37.6095 45.0185C37.6095 46.0172 38.4193 46.8363 39.4093 46.8363H50.4613C51.4605 46.8363 52.2611 46.0172 52.2611 45.0185C52.2611 44.0193 51.4513 43.2002 50.4613 43.2002Z" fill="#12E9E9" />
              <path d="M41.435 50.1937H39.4099C38.4106 50.1937 37.6095 51.0127 37.6095 52.012C37.6095 53.0107 38.4199 53.8297 39.4099 53.8297H41.435C42.4342 53.8297 43.2348 52.012C43.2348 51.0127 42.425 50.1937 41.435 50.1937ZM41.435 50.1937" fill="#12E9E9" />
              <path d="M23.4795 39.8973H34.1266C35.1253 39.8973 35.9264 39.0783 35.9264 38.0796C35.9264 37.0803 35.1166 36.2613 34.1266 36.2613H23.4795C22.4803 36.2613 21.6797 37.0803 21.6797 38.0796C21.6797 39.0783 22.4895 39.8973 23.4795 39.8973ZM23.4795 39.8973" fill="currentColor" />
              <path d="M34.1266 46.8451C35.1258 46.8451 35.9264 46.026 35.9264 45.0273C35.9264 44.0281 35.1166 43.209 34.1266 43.209H17.0987C16.0994 43.209 15.2988 44.0281 15.2988 45.0273C15.2988 46.026 16.1086 46.8451 17.0987 46.8451H34.1266ZM34.1355 50.1937H23.4976C22.4984 50.1937 21.6973 51.0127 21.6973 52.0114C21.6973 53.0107 22.5076 53.8297 23.4976 53.8297H34.1355C35.1347 53.8297 35.9353 53.0107 35.9353 52.0114C35.9353 51.0127 35.1255 50.1937 34.1355 50.1937Z" fill="currentColor" />
              <path d="M52.0554 64.1969H38.0063C37.0255 64.1969 36.2244 65.0067 36.2244 65.9967C36.2244 66.9867 37.0255 67.7971 38.0063 67.7971H52.0554C53.0362 67.7971 53.8374 66.9867 53.8374 65.9967C53.8374 65.0067 53.0362 64.1969 52.0554 64.1969ZM52.0554 64.1969" fill="currentColor" />
              <path d="M59.1939 57.2854H30.6999C29.7191 57.2854 28.918 58.0952 28.918 59.0852C28.918 60.0752 29.7191 60.8856 30.6999 60.8856H59.1939C60.1747 60.8856 60.9758 60.0752 60.9758 59.0852C60.9758 58.0952 60.1747 57.2854 59.1939 57.2854ZM59.1939 57.2854" fill="currentColor" />
              <path d="M45.4135 71.1002H44.4778C43.4964 71.1002 42.6953 71.91 42.6953 72.9C42.6953 73.8901 43.4964 74.7004 44.4778 74.7004H45.4135C46.3943 74.7004 47.1955 72.9C47.1955 71.1002 46.3943 71.1002 45.4135 71.1002ZM45.4135 71.1002" fill="currentColor" />
              <path d="M89.9009 42.9753L46.9707 0.000667572V7.66843L82.2418 42.9753H89.9009ZM89.9009 42.9753" fill="currentColor" />
              <path d="M0 46.9262L43.0289 90.0002V82.3319L7.65908 46.9262H0ZM0 46.9262" fill="currentColor" />
              <path d="M43.028 7.66834V0.000576019L0.0978394 42.9752H7.75692L43.028 7.66834ZM43.028 7.66834" fill="currentColor" />
              <path d="M46.9707 82.3325V90.0002L89.9996 46.9268H82.3406L46.9707 82.3325ZM46.9707 82.3325" fill="currentColor" />
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => {
                  if (link.hasMega) {
                    setActiveMegaMenu(link.megaId || null);
                  } else {
                    setActiveMegaMenu(null);
                  }
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(link.href);
                }}
                className="group/nav flex items-center space-x-1.5 text-sm font-semibold uppercase tracking-wider nav-link-dynamic py-2"
              >
                <span>{link.name}</span>
                {link.hasMega && (
                  <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/nav:rotate-180" />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setActiveMegaMenu(null);
              }}
              className="nav-icon-dynamic transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <button
              className="flex items-center space-x-1.5 text-sm font-semibold nav-icon-dynamic transition-colors"
              onClick={() => alert("Arabic localized interface is coming soon!")}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </button>

            {/* Enquire Now Ghost CTA */}
            <button
              onClick={() => window.location.href = getAssetPath("/general-enquiry")}
              className="px-4 py-2 text-sm font-bold uppercase tracking-wider rounded transition-premium duration-300 nav-btn-enquire"
            >
              Enquire Now
            </button>

            {/* Buy a Pass Solid CTA */}
            <a
              href={getAssetPath("/get-involved/#buy-tickets")}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("/get-involved/#buy-tickets");
              }}
              className="px-5 py-2 text-xs font-mono font-bold tracking-widest uppercase rounded-full transition-premium duration-300 nav-btn-buy"
            >
              Buy a Pass
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMobileMenuOpen(false);
              }}
              className="nav-icon-dynamic p-1"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-icon-dynamic transition-colors p-1"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 1. Mega Menu Panels (Dropdown Containers) */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[100%] left-0 right-0 w-full border-b border-slate-200/65 bg-white/98 text-slate-900 shadow-2xl z-30 pointer-events-auto py-6 px-8"
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-stretch">
                {/* Left side: Columns of Sub-Links */}
                <div className="col-span-7 grid grid-cols-2 gap-x-6 gap-y-3 text-left">
                  {(activeMegaMenu === "speakers" 
                    ? speakersMega.links 
                    : activeMegaMenu === "get-involved" 
                    ? getInvolvedMega.links 
                    : activeMegaMenu === "about"
                    ? aboutMega.links
                    : ecosystemMega.links
                  ).map((link, idx) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollToSection(link.href);
                        }}
                        className="group/item flex items-start space-x-3 p-2.5 rounded-2xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                      >
                        <div className="p-2 rounded-xl shrink-0 transition-colors duration-300 bg-slate-100 group-hover/item:bg-slate-950 group-hover/item:text-white text-slate-800">
                          <LinkIcon className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="block font-bold text-sm tracking-tight transition-colors duration-300 text-slate-900 group-hover/item:text-[#0f766e]">
                            {link.title}
                          </span>
                          <span className="block text-xs leading-snug font-semibold text-slate-500 line-clamp-2">
                            {link.desc}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Right side: Featured Image Card */}
                <div className="col-span-5 flex flex-col pl-6 border-l border-slate-200/20 self-stretch">
                  <a
                    href={
                      activeMegaMenu === "speakers" 
                        ? "/speakers" 
                        : activeMegaMenu === "get-involved" 
                        ? "/get-involved" 
                        : activeMegaMenu === "about"
                        ? "/about"
                        : "/sponsors"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(
                        activeMegaMenu === "speakers" 
                          ? "/speakers" 
                          : activeMegaMenu === "get-involved" 
                          ? "/get-involved" 
                          : activeMegaMenu === "about"
                          ? "/about"
                          : "/sponsors"
                      );
                    }}
                    className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden group/img select-none border border-slate-200/20 block shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={
                        activeMegaMenu === "speakers" 
                          ? speakersMega.image 
                          : activeMegaMenu === "get-involved" 
                          ? getInvolvedMega.image 
                          : activeMegaMenu === "about"
                          ? aboutMega.image
                          : ecosystemMega.image
                      }
                      alt={
                        activeMegaMenu === "speakers" 
                          ? speakersMega.title 
                          : activeMegaMenu === "get-involved" 
                          ? getInvolvedMega.title 
                          : activeMegaMenu === "about"
                          ? aboutMega.title
                          : ecosystemMega.title
                      }
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex items-end p-4">
                      <div className="text-left">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#12e8e8] uppercase block">
                          {
                            activeMegaMenu === "speakers" 
                              ? speakersMega.title 
                              : activeMegaMenu === "get-involved" 
                              ? getInvolvedMega.title 
                              : activeMegaMenu === "about"
                              ? aboutMega.title
                              : ecosystemMega.title
                          }
                        </span>
                        <span className="text-xs font-bold text-white flex items-center space-x-1.5 mt-0.5 group-hover/img:text-[#12e8e8] transition-colors">
                          <span>EXPLORE SECTION</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Interactive Search Dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[85px] left-0 right-0 z-[100] max-w-2xl mx-auto px-6"
          >
            <div className="flex flex-col w-full bg-white border border-slate-200/80 shadow-2xl rounded-2xl overflow-hidden mt-2">
              <form 
                onSubmit={handleSearchSubmit}
                className="p-4 flex items-center space-x-3 w-full border-b border-slate-100 bg-white"
              >
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search speakers, topics, or venues..."
                  className="w-full bg-transparent border-none text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchVal("");
                  }}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f766e] hover:text-slate-900 shrink-0"
                >
                  Close
                </button>
              </form>

              {/* Dynamic Search Results Panel */}
              {searchVal.trim() && (
                <div className="max-h-[320px] overflow-y-auto divide-y divide-slate-100 p-2 bg-slate-50">
                  {searchResults.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-xs font-mono">
                      No results matched "{searchVal}"
                    </div>
                  ) : (
                    searchResults.map((res, index) => (
                      <a
                        key={index}
                        href={res.href}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchVal("");
                        }}
                        className="flex flex-col p-3 hover:bg-white rounded-xl transition-all text-left space-y-1 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold uppercase text-[#0f766e] tracking-wider">
                            {res.title}
                          </span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#0f766e] transition-colors">
                            Navigate ↗
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {res.snippet}
                        </p>
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Fullscreen Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[76px] bottom-0 z-40 bg-white/98 backdrop-blur-2xl border-t border-slate-200/50 flex flex-col p-8 justify-between overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4 pt-4 text-left">
              {navLinks.map((link, i) => {
                const isMega = link.hasMega && !!link.megaId;
                const isExpanded = link.megaId ? mobileExpanded === link.megaId : false;

                const getMegaLinks = (hasMegaKey: string) => {
                  if (hasMegaKey === "speakers") return speakersMega.links;
                  if (hasMegaKey === "get-involved") return getInvolvedMega.links;
                  if (hasMegaKey === "about") return aboutMega.links;
                  if (hasMegaKey === "ecosystem") return ecosystemMega.links;
                  return [];
                };

                const subLinks = isMega && link.megaId ? getMegaLinks(link.megaId) : [];

                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    key={link.name}
                    className="border-b border-slate-100/90 pb-3"
                  >
                    <div
                      onClick={() => {
                        if (isMega && link.megaId) {
                          setMobileExpanded(isExpanded ? null : link.megaId);
                        } else {
                          handleScrollToSection(link.href);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex items-center justify-between cursor-pointer py-1.5 group select-none"
                    >
                      <span className="text-xl font-black uppercase tracking-tight text-slate-900">
                        {link.name}
                      </span>
                      {isMega ? (
                        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#0f766e]" : ""}`} />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                      )}
                    </div>

                    {/* Accordion Sub-links for Mobile */}
                    <AnimatePresence>
                      {isMega && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden mt-3 space-y-2"
                        >
                          {subLinks.map((sub, sIdx) => {
                            const SubIcon = sub.icon;
                            return (
                              <a
                                key={sIdx}
                                href={sub.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileMenuOpen(false);
                                  handleScrollToSection(sub.href);
                                }}
                                className="flex items-center space-x-3.5 py-2.5 px-1 rounded-xl hover:bg-slate-100/80 active:bg-slate-200/80 transition-colors text-left group/sub"
                              >
                                <div className="p-2.5 rounded-xl bg-slate-100 group-hover/sub:bg-slate-900 group-hover/sub:text-white text-slate-800 shrink-0 transition-colors flex items-center justify-center">
                                  <SubIcon className="w-5 h-5" />
                                </div>
                                <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-none group-hover/sub:text-[#0f766e] transition-colors">
                                  {sub.title}
                                </span>
                              </a>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex flex-col space-y-4 pb-12">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  alert("Enquiry dashboard opened.");
                }}
                className="w-full py-4 text-center text-sm font-bold uppercase tracking-widest text-slate-900 border border-slate-900/10 rounded-xl"
              >
                Enquire Now
              </button>
              <a
                href={getAssetPath("/get-involved/#buy-tickets")}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("/get-involved/#buy-tickets");
                }}
                className="w-full py-4 text-center text-sm font-bold uppercase tracking-widest text-white bg-slate-900 rounded-xl"
              >
                Buy a Pass
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
