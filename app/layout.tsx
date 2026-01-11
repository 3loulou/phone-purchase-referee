import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Refree - AI-Powered Phone Comparison",
    template: "%s | Refree",
  },
  description: "Get conditional phone recommendations based on your constraints and priorities. Powered by Advanced AI with Google Search for real-time data. No absolute rankings—only transparent trade-offs.",
  keywords: [
    "phone comparison",
    "smartphone comparison",
    "AI phone recommendations",
    "phone buying guide",
    "phone trade-offs",
    "phone specs comparison",
    "best phone for battery",
    "best phone for camera",
    "AI recommendations",
  ],
  authors: [{ name: "Refree Team" }],
  creator: "Refree",
  publisher: "Refree",
  metadataBase: new URL("https://refree.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://refree.vercel.app",
    siteName: "Refree",
    title: "Refree - AI-Powered Phone Comparison",
    description: "Get conditional phone recommendations powered by Gemini AI. No absolute rankings—only transparent trade-offs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Refree - AI-Powered Phone Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refree - AI-Powered Phone Comparison",
    description: "Get conditional phone recommendations powered by Advanced AI. No absolute rankings—only transparent trade-offs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-pattern">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-green-500 text-lg shadow-lg shadow-lime-500/20 transition-transform group-hover:scale-105">
                  📱
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white leading-tight">Refree</span>
                  <span className="text-[10px] text-lime-400 font-medium -mt-0.5">Phone Referee</span>
                </div>
              </Link>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-1">
                <Link href="/compare" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-lime-400 transition-colors">
                  Compare Phones
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900/60 backdrop-blur-sm mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-lime-400 to-green-500 text-sm">
                  📱
                </div>
                <div>
                  <span className="font-bold text-white">Refree</span>
                  <span className="text-gray-500 text-sm ml-2">© 2026</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span>🤖</span>
                  <span>Powered by Advanced AI</span>
                </span>
                <span className="text-gray-700">•</span>
                <span>No absolute rankings</span>
                <span className="text-gray-300">•</span>
                <span>Transparent trade-offs</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
