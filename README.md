# Kazi Skills - Landing Website

The official landing website for Kazi Skills, built with Next.js 16, TypeScript, and Tailwind CSS.

## About

This is the web landing page for Kazi Skills - a mobile learning platform that empowers Ugandans to learn practical skills and earn income. The landing site showcases the app features and provides download links to the mobile app.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans (body), Syne (headings)

## Features

- Modern, responsive design with purple/black/white color scheme
- Mobile-first approach with smooth animations
- Optimized performance with Next.js 16
- Key stats and testimonials
- Clear call-to-action for app downloads
- Smooth scroll navigation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
kazi-skills-website/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles & animations
├── components/
│   ├── Navbar.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Stats.tsx        # Key metrics
│   ├── HowItWorks.tsx   # 4-step process
│   ├── Categories.tsx   # Skill categories
│   ├── Testimonials.tsx # User stories
│   ├── Download.tsx     # App download section
│   └── Footer.tsx       # Footer with links
└── public/              # Static assets
```

## Design System

- **Primary**: Purple (#7C3AED)
- **Secondary**: Black (#0A0A0A)
- **Accent**: White (#FFFFFF)
- **Success**: Green (#10B981)
- **Warning**: Amber (#F59E0B)

## Mobile App

The mobile app is built with React Native and Expo. Visit the main repository for the mobile app code.

## License

See LICENSE file for details.
