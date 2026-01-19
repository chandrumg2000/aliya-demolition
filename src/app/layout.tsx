import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliya Demolition | Top Rated Demolition Contractors in Chennai",
  description: "Safe, fast, and compliant demolition services in Chennai. We handle building demolition, factory dismantling, and debris removal. Call 98765 43210 for a free quote.",
  keywords: "Demolition Contractors Chennai, Building Demolition Services Chennai, Factory Demolition Chennai, House Demolition Chennai, Debris Removal Chennai",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aliyademolition.com",
    siteName: "Aliya Demolition Services",
    title: "Aliya Demolition | Top Rated Demolition Contractors in Chennai",
    description: "Safe, fast, and compliant demolition services in Chennai. Get a free quote today.",
    images: [
      {
        url: "https://aliyademolition.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aliya Demolition Services Chennai",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased font-sans text-slate-900 bg-white`}
      >
        <SchemaMarkup />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
