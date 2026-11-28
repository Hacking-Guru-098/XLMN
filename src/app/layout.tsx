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
    "Ghostwriting for B2B and tech founders on LinkedIn and X. One call a month, posts written by humans in your voice, and you approve every one.",
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
      "Ghostwriting for B2B and tech founders on LinkedIn and X. One call a month. We write, you approve.",
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
