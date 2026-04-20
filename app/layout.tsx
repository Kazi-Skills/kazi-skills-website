import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
