import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Dubai FinTech Summit 2026 | The Future of Global Finance",
  description: "Experience the world's premier gathering of C-suite executives, investors, founders, and policymakers. Reimagining the future of financial technology, digital assets, AI, and banking at the Dubai FinTech Summit.",
  keywords: "Dubai FinTech Summit, Fintech conference, digital banking, blockchain, AI finance, wealthtech, embedded finance, venture capital, financial innovation",
  authors: [{ name: "Dubai Future Foundation & partners" }],
  openGraph: {
    title: "Dubai FinTech Summit 2026",
    description: "The world's most prestigious fintech summit. Discover the cutting-edge future of finance in Dubai.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-midnight text-foreground font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
