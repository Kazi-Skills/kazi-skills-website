import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Kazi Skills — Learn. Create. Earn.',
  description: "Uganda's AI-powered micro-learning marketplace. Learn practical skills from local creators and start earning income from your phone.",
  keywords: ['Uganda', 'skills', 'learning', 'income', 'Kampala', 'courses', 'AI'],
  openGraph: {
    title: 'Kazi Skills — Learn. Create. Earn.',
    description: "Uganda's #1 short-skills platform. 5–15 min videos. Real income.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
