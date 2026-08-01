const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const srcDir = path.join(projectDir, 'src');
const outputFile = path.join(srcDir, 'data', 'searchIndex.json');

// Map component files to their main route href and user-friendly section title
const fileRouteMap = {
  // Main pages
  'src/app/page.tsx': { href: '/', title: 'Home - Dubai FinTech Summit' },
  'src/app/about/page.tsx': { href: '/about/', title: 'About Dubai FinTech Summit' },
  'src/app/ambassadors/page.tsx': { href: '/ambassadors/', title: 'FinTech Ambassadors' },
  'src/app/associations/page.tsx': { href: '/associations/', title: 'Supporting Associations' },
  'src/app/blog/page.tsx': { href: '/blog/', title: 'Insights & News Blog' },
  'src/app/dubai-future-finance-week/page.tsx': { href: '/dubai-future-finance-week/', title: 'Dubai Future Finance Week' },
  'src/app/exhibitors/page.tsx': { href: '/exhibitors/', title: 'Exhibitors & Sponsors' },
  'src/app/fintech-launchpad/page.tsx': { href: '/fintech-launchpad/', title: 'FinTech Launchpad' },
  'src/app/general-enquiry/page.tsx': { href: '/general-enquiry/', title: 'General Enquiry' },
  'src/app/get-involved/page.tsx': { href: '/get-involved/', title: 'Get Involved' },
  'src/app/media-partners/page.tsx': { href: '/media-partners/', title: 'Media Partners' },
  'src/app/roundtables-workshops/page.tsx': { href: '/roundtables-workshops/', title: 'Roundtables & Workshops' },
  'src/app/speakers/page.tsx': { href: '/speakers/', title: 'Speakers & Keynotes' },
  'src/app/sponsors/page.tsx': { href: '/sponsors/', title: 'Sponsors Ecosystem' },

  // Sections mapped to precise routes & section anchors
  'src/sections/HeroSection.tsx': { href: '/', title: 'Home - Summit Overview' },
  'src/sections/VideoSection.tsx': { href: '/#video', title: 'Watch the Highlights' },
  'src/sections/InTheNews.tsx': { href: '/#in-the-news', title: 'In the News' },
  'src/sections/FeaturedSpeakers.tsx': { href: '/speakers/', title: 'Featured Speakers & Keynotes' },
  'src/sections/SpeakersGrid.tsx': { href: '/speakers/', title: 'Speaker Directory' },
  'src/sections/SpeakersDirectory.tsx': { href: '/speakers/', title: 'All Speakers' },
  'src/sections/ImpactSection.tsx': { href: '/', title: 'Summit Impact & Scale' },
  'src/sections/NetworkingExperience.tsx': { href: '/#networking', title: 'Networking & Strategic Connections' },
  'src/sections/BuyTickets.tsx': { href: '/get-involved/#buy-tickets', title: 'Passes & Ticket Pricing' },
  'src/sections/AgendaPreview.tsx': { href: '/roundtables-workshops/', title: 'Agenda Preview & Masterclasses' },
  'src/sections/AgendaPlanner.tsx': { href: '/roundtables-workshops/', title: 'Interactive Agenda Planner' },
  'src/sections/AboutD33.tsx': { href: '/about/', title: 'Dubai Economic Agenda D33' },
  'src/sections/AboutDFS2025.tsx': { href: '/about/#retrospective', title: 'Dubai FinTech Summit 2025 Retrospective' },
  'src/sections/AboutSectors.tsx': { href: '/about/#industry-sectors', title: 'Industry Sectors Represented' },
  'src/sections/AboutLeaders.tsx': { href: '/about/#key-speakers', title: 'Patronage & Strategic Leaders' },
  'src/sections/AboutStory.tsx': { href: '/about/#our-story', title: 'DFS Story & Vision' },
  'src/sections/AboutThemes.tsx': { href: '/about/', title: 'Summit Themes & Focus' },
  'src/sections/AboutVoices.tsx': { href: '/about/', title: 'Industry Voices & Quotes' },
  'src/sections/DiscussionTopics.tsx': { href: '/#discussion-topics', title: 'Summit Discussion Topics' },
  'src/sections/GetInvolvedSpeak.tsx': { href: '/get-involved/#speak', title: 'Apply to Speak' },
  'src/sections/GetInvolvedExhibit.tsx': { href: '/get-involved/#exhibit', title: 'Exhibit at DFS' },
  'src/sections/GetInvolvedSponsor.tsx': { href: '/get-involved/#sponsor', title: 'Sponsorship Opportunities' },
  'src/sections/EnquiryForm.tsx': { href: '/general-enquiry/', title: 'Contact & Enquiry Form' },
  'src/sections/FAQ.tsx': { href: '/general-enquiry/', title: 'Frequently Asked Questions (FAQ)' },
  'src/sections/Exhibition.tsx': { href: '/#exhibition', title: 'Exhibition & Brand Showcase' },
  'src/sections/ExhibitionMap.tsx': { href: '/exhibitors/', title: 'Exhibition Floorplan & Map' },
  'src/sections/ExhibitorsTierGrid.tsx': { href: '/exhibitors/', title: 'Exhibitor Directory' },
  'src/sections/SponsorsTierGrid.tsx': { href: '/sponsors/', title: 'Sponsors Tier Grid' },
  'src/sections/MediaTierGrid.tsx': { href: '/media-partners/', title: 'Media Partners Tier Grid' },
  'src/sections/AssociationsTierGrid.tsx': { href: '/associations/', title: 'Supporting Associations List' },
  'src/sections/BlogDirectory.tsx': { href: '/blog/', title: 'Articles & News Posts' },
  'src/sections/LaunchpadParticipate.tsx': { href: '/fintech-launchpad/', title: 'Participate in Launchpad' },
  'src/sections/LaunchpadStage.tsx': { href: '/fintech-launchpad/', title: 'Launchpad Stage & Demos' },
  'src/sections/DFFWOverview.tsx': { href: '/dubai-future-finance-week/', title: 'Dubai Future Finance Week Overview' },
  'src/sections/ConnectingCapitals.tsx': { href: '/about/', title: 'Connecting Global Financial Capitals' },
  'src/sections/InnovationShowcase.tsx': { href: '/', title: 'Innovation Arena' },
  'src/sections/InvestorLounge.tsx': { href: '/', title: 'Investor & Founder Lounge' }
};

// Helper to determine if a string looks like Tailwind CSS classes or code code
function isCodeOrCss(str) {
  if (!str || str.length < 2) return true;
  if (/^(flex|grid|block|hidden|relative|absolute|sticky|fixed|w-|h-|p-|m-|text-|bg-|border-|rounded-|shadow-|hover:|group-|font-|leading-|tracking-|cursor-|z-|overflow-|items-|justify-|space-|transition-|duration-|ease-|opacity-|inset-|top-|left-|right-|bottom-|col-|row-|gap-|md:|lg:|sm:|xl:|2xl:)/.test(str)) {
    return true;
  }
  if (/^[\{\}\(\)<>;:=\\\/\[\]]+$/.test(str)) return true;
  if (/^(import|export|const|let|var|return|function|interface|type|default|from|null|undefined|true|false)$/.test(str)) return true;
  return false;
}

// Clean string
function cleanText(str) {
  return str.replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
}

// Recursively find files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.json')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const extractedIndex = [];
const seenEntries = new Set();

function addIndexEntry(title, href, texts, file) {
  const validTexts = [...new Set(texts.map(cleanText).filter(t => t.length > 2 && !isCodeOrCss(t)))];
  if (validTexts.length === 0) return;

  const key = `${href}::${title}`;
  if (seenEntries.has(key)) return;
  seenEntries.add(key);

  extractedIndex.push({
    title,
    href,
    file,
    texts: validTexts
  });
}

// Process files
const allFiles = getAllFiles(srcDir);

for (const fullPath of allFiles) {
  const relativePath = path.relative(projectDir, fullPath).replace(/\\/g, '/');
  const routeInfo = fileRouteMap[relativePath];
  
  const content = fs.readFileSync(fullPath, 'utf8');

  let title = routeInfo ? routeInfo.title : path.basename(fullPath, path.extname(fullPath));
  let href = routeInfo ? routeInfo.href : '/';

  const texts = [];

  // Extract double/single quoted strings that look like actual sentences/phrases
  const stringMatches = content.match(/["'`]([^"'`]{3,180})["'`]/g) || [];
  for (const match of stringMatches) {
    const raw = match.slice(1, -1);
    if (!isCodeOrCss(raw) && /[a-zA-Z0-9]/.test(raw) && !raw.includes('<svg') && !raw.includes('className')) {
      texts.push(raw);
    }
  }

  // Extract JSX text content between tags >Text Content<
  const tagMatches = content.match(/>([^<>]{3,200})</g) || [];
  for (const match of tagMatches) {
    const raw = match.slice(1, -1);
    if (!isCodeOrCss(raw) && /[a-zA-Z0-9]/.test(raw)) {
      texts.push(raw);
    }
  }

  addIndexEntry(title, href, texts, relativePath);
}

// Special data parsers for speakerData, agendaData, sponsorData
try {
  const speakerPath = path.join(srcDir, 'data', 'speakerData.ts');
  if (fs.existsSync(speakerPath)) {
    const content = fs.readFileSync(speakerPath, 'utf8');
    const names = [...content.matchAll(/name:\s*["']([^"']+)["']/g)].map(m => m[1]);
    const titles = [...content.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
    const companies = [...content.matchAll(/company:\s*["']([^"']+)["']/g)].map(m => m[1]);

    const speakerTexts = [...names, ...titles, ...companies];
    addIndexEntry('Summit Speakers & Global Keynotes', '/speakers', speakerTexts, 'data/speakerData.ts');
  }
} catch (e) {}

try {
  const agendaPath = path.join(srcDir, 'data', 'agendaData.ts');
  if (fs.existsSync(agendaPath)) {
    const content = fs.readFileSync(agendaPath, 'utf8');
    const titles = [...content.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
    const desc = [...content.matchAll(/description:\s*["']([^"']+)["']/g)].map(m => m[1]);

    const agendaTexts = [...titles, ...desc];
    addIndexEntry('Agenda Sessions & Discussion Topics', '/roundtables-workshops', agendaTexts, 'data/agendaData.ts');
  }
} catch (e) {}

fs.writeFileSync(outputFile, JSON.stringify(extractedIndex, null, 2), 'utf8');
console.log(`Successfully generated searchIndex.json with ${extractedIndex.length} entries!`);
