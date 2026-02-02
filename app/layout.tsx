import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SR Group | Excellence in Industrial Chemicals & Premium Dry Fruits",
  description: "Established in 1983, SR Group is a leading supplier of high-quality industrial oils, chemicals, and premium agricultural products (dry fruits) in North India. Committed to innovation, integrity, and excellence.",
  keywords: ["SR Group", "Industrial Chemicals", "Dry Fruits", "Waterproofing Solutions", "SR Trade Vision", "SR Industrial Corp", "India Manufacturing", "Premium Almonds", "Cashews", "Industrial Oils"],
  authors: [{ name: "SR Group" }],
  openGraph: {
    title: "SR Group | Pioneering Excellence for Over 40 Years",
    description: "Discover a legacy of quality and innovation in industrial chemicals and premium agricultural products.",
    url: "https://srgroup.in",
    siteName: "SR Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SR Group - Excellence in Chemicals & Dry Fruits",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SR Group | Excellence in Industrial Chemicals & Dry Fruits",
    description: "A trusted diversified powerhouse delivering excellence across multiple industries since 1983.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}