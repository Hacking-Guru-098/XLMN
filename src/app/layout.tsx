import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XLMN | Founder Ghostwriting for X & LinkedIn",
  description:
    "Turn your founder insights into daily X & LinkedIn pipeline—in 60 minutes a month. 100% human-written for B2B & Tech founders.",
  keywords: [
    "founder ghostwriting",
    "B2B founder content",
    "LinkedIn ghostwriting",
    "X ghostwriting",
    "tech founder personal branding",
    "pipeline generation",
  ],
  authors: [{ name: "XLMN Agency" }],
  openGraph: {
    title: "XLMN | Founder Ghostwriting for X & LinkedIn",
    description:
      "Turn your founder insights into daily X & LinkedIn pipeline—in 60 minutes a month.",
    type: "website",
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
      className={`${inter.variable} ${robotoMono.variable}`}
    >
      <body className="min-h-screen bg-white text-[#0a0a0a] font-sans antialiased selection:bg-[#0a0a0a] selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
