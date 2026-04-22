import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

/** Body/UI copy — matches kazi-skills MVP (theme Fonts.dmSans*). */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Headlines and emphasis — matches MVP Syne (creative display face). */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kazi Skills - Skills for all. Earn for life.",
  description:
    "Kazi Skills is an AI-powered mobile-first skills marketplace helping African youth learn practical skills and earn income from their phones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-brand-bg text-slate-900">{children}</body>
    </html>
  );
}
