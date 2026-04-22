import Image from "next/image";
import Link from "next/link";
import {
  BarChart2,
  CircleDollarSign,
  Languages,
  MapPinned,
  Percent,
  Shield,
  ShieldCheck,
  User,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AiFeaturesGrid, type AiFeatureCell } from "@/components/ui/ai-features-grid";
import { FeatureCard, FeatureCardContent } from "@/components/ui/feature-card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  CategoriesCarousel,
  type CategoryGalleryItem,
} from "@/components/sections/CategoriesCarousel";
import { SolutionAccordion, type SolutionFeatureItem } from "@/components/sections/SolutionAccordion";
import { MVP_DEMO_URL } from "@/lib/mvp-demo";

const problemStats = [
  {
    value: "700k to 800k",
    label: "Youth entering workforce annually",
    description:
      "Each year a very large cohort reaches working age, often far more than formal payroll sectors can absorb in the same window.",
  },
  {
    value: "~90,000",
    label: "Jobs created each year",
    description:
      "Net new formal roles cover only a slice of everyone looking for stable, documented work, so competition for scarce slots stays intense.",
  },
  {
    value: "80%",
    label: "Working in informal employment",
    description:
      "Most young earners operate outside formal jobs. Hours and income can swing week to week, with little safety net when demand drops.",
  },
  {
    value: "50%",
    label: "NEET youth rate",
    description:
      "NEET means not in education, employment, or training. It signals that many young people are stuck outside both classrooms and reliable jobs.",
  },
] as const;

/** Single intro under the challenge headline (subtitle + context merged). */
const challengeIntro =
  "Uganda's young people are meeting a job market that still offers too few formal paths, so queues for scarce roles grow, informal work fills the gap, and many sit outside stable earning altogether. We want a future where your skill, not your background, decides your income, and where practical, skills first learning makes that possible.";

const challengeClosing =
  "When hiring hinges on who you know or which school you attended, talent gets left on the sidelines. Training that is affordable, mobile, and tied to real income can rebalance that, so what you can do matters more than where you started.";

const solutionItems = [
  "Micro-learning (5-15 min videos)",
  "Mobile-first (low-end Android optimized)",
  "Offline access",
  "Beauty & Makeup, Digital Hustles, Food Business",
];

const solutionAccordionImages = [
  "/micro-learning.png",
  "/mobile-first.png",
  "/offiline-accesss.png",
  "/beauty-makeup.png",
] as const;

const solutionAccordionDescriptions = [
  "Short clips you can finish between errands—no hour-long lectures. Lessons are tuned for quick wins and low bandwidth.",
  "Layouts, type, and media targets are built for modest Android handsets, the same audience we design for in the native app.",
  "Download what you need and keep learning when the network drops, so a patchy connection is not a hard stop.",
  "Paths in Beauty and Makeup, Digital Hustles, and Food Business mirror the creator-led catalogue learners already explore on Kazi Skills.",
] as const;

const solutionAccordionFeatures: SolutionFeatureItem[] = [
  {
    id: 1,
    title: "The mark we ship in product",
    image: "/logo-mvp-cropped.png",
    imageContain: true,
    description:
      "This is the logo from our mobile MVP on a clean white field—the same identity learners see when they open Kazi Skills. Practical learning and earn paths stay consistent from app to web.",
  },
  ...solutionItems.map((title, i) => ({
    id: i + 2,
    title,
    image: solutionAccordionImages[i],
    description: solutionAccordionDescriptions[i],
  })),
];

const aiFeatureCells: AiFeatureCell[] = [
  {
    icon: Languages,
    title: "Smart search (English + Luganda)",
    description:
      "Find skills, lessons, and gigs in the language you think in, without rigid keyword matching.",
  },
  {
    icon: MapPinned,
    title: "Personalized learning paths",
    description:
      "Your next steps reflect what you finish, save, or skip—not a one size fits all playlist.",
  },
  {
    icon: CircleDollarSign,
    title: "Income tracker (suggests gigs)",
    description:
      "Light nudges toward gigs and income minded actions that fit the path you are already on.",
  },
  {
    icon: ShieldCheck,
    title: "AI quality control for content",
    description:
      "Automated checks surface unclear or risky material before human reviewers publish.",
  },
  {
    icon: Zap,
    title: "Quick session nudges",
    description:
      "Short prompts after lessons reinforce the habit without long reads or heavy data use.",
  },
  {
    icon: Users,
    title: "Humans stay in the loop",
    description:
      "Creators and moderators keep final say so learners always know a person backs what ships.",
  },
];

const categoryGalleryItems: CategoryGalleryItem[] = [
  {
    id: "beauty-makeup",
    title: "Beauty & Makeup",
    summary:
      "Client ready techniques from brows to beats, plus retail cues so you can earn behind a chair or on call.",
    href: MVP_DEMO_URL,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "digital-hustles",
    title: "Digital Hustles",
    summary:
      "Phone first workflows for listings, social proof, and small online offers that do not need a studio budget.",
    href: MVP_DEMO_URL,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "food-business",
    title: "Food Business",
    summary:
      "Portioning, costing, and presentation skills for stalls, catering orders, and repeat neighborhood buyers.",
    href: MVP_DEMO_URL,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "home-baking",
    title: "Home baking & packaged treats",
    summary:
      "Recipes scaled for home kitchens, packaging basics, and safe handoff so weekend batches become steady sales.",
    href: MVP_DEMO_URL,
    image: "/category-home-baking.png",
  },
  {
    id: "content-social",
    title: "Content & social media",
    summary:
      "Short form planning, captions, and simple edits so your hustle shows up consistently without burning data.",
    href: MVP_DEMO_URL,
    image: "/category-social-media.png",
  },
  {
    id: "design-branding",
    title: "Design & branding basics",
    summary:
      "Logos, flyers, and price cards that look intentional, even when you are starting from a single phone app.",
    href: MVP_DEMO_URL,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "retail-service",
    title: "Retail & service side gigs",
    summary:
      "Stocking, customer tone, and upsell habits for shops, salons, and pop ups where foot traffic is the teacher.",
    href: MVP_DEMO_URL,
    image:
      "https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?auto=format&fit=crop&w=1200&q=80",
  },
];
const howItWorksSteps = [
  {
    title: "Sign up on your phone",
    description:
      "Create your account in minutes and start learning from any Android phone, no heavy onboarding.",
  },
  {
    title: "Pick your skill path",
    description:
      "Choose a practical track aligned with what buyers near you already pay for, from beauty to digital work.",
  },
  {
    title: "Watch short practical lessons",
    description:
      "Finish bite-sized lessons on low data, with offline-friendly access when the signal drops.",
  },
  {
    title: "Start earning with guided gigs",
    description:
      "Turn skills into income with guided tasks, proof you can show clients, and nudges that keep momentum.",
  },
] as const;

const roadmap = [
  { phase: "Phase 1", detail: "Kampala launch" },
  { phase: "Phase 2", detail: "Uganda nationwide" },
  { phase: "Phase 3", detail: "East Africa expansion" },
];

const team = [
  "Goodwill Magezi",
  "Susanne Kakitahi",
  "Kasagga Gordon Kimera",
  "Primrose Tendo",
  "Precious Sanyu",
  "Shakiran Nannyombi",
  "Seanice Nabasirye",
];

export const trustItems = [
  "AI-powered skill matching",
  "Mobile-first, low-end Android optimized",
  "Offline learning for rural access",
  "Learn • Grow • Earn model",
] as const;

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-0 bg-brand-bg">
      {/* Full-viewport cinematic hero — video + bottom-left copy (reference: immersive editorial) */}
      <div className="relative isolate min-h-[100dvh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/*
            No poster image: a poster was set to an unrelated Unsplash still (classroom / person),
            which flashed on every load until the real video started. Black bg shows until frames decode.
          */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full scale-105 object-cover"
          >
            <source src="/videos/kazi-skills-vid.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay using theme purple (same depth as before; no grid — avoids vertical line moiré) */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-brand-deep/82 via-brand-dark/28 to-black/90" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/78 via-brand-deep/12 to-transparent" />
        <div className="pointer-events-none absolute -left-24 top-0 z-[1] h-72 w-72 rounded-full bg-brand-deep/55 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 z-[1] h-80 w-80 rounded-full bg-brand-dark/35 blur-3xl" />

        <div className="relative z-20 flex min-h-[100dvh] flex-col justify-end px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pb-32">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl text-left">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Skills for all · Earn for life
              </p>
              <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
                Learn skills, earn income, and change your future.
              </h1>
              <p className="mt-6 max-w-lg hyphens-none break-normal text-base leading-relaxed text-white/80 sm:text-lg">
                Kazi Skills is a mobile-first marketplace for practical learning, with short
                micro-lessons, offline friendly access, and AI-guided paths from classroom to income.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={MVP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl border border-white/90 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-slate-900"
                >
                  Get started
                </Link>
                <Link
                  href="#courses"
                  className="inline-flex rounded-xl px-6 py-3.5 text-sm font-semibold text-white/90 ring-1 ring-white/35 transition-colors hover:bg-white/10"
                >
                  Become a creator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStripSection() {
  return (
    <SectionWrapper className="py-12 sm:py-16">
      <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-brand-light/40 p-6 shadow-[0_8px_30px_-12px_rgba(106,26,138,0.12)] sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.12em] text-brand-dark sm:text-left sm:whitespace-nowrap">
            Why Kazi Skills?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ChallengeCardAccent() {
  return (
    <div
      className="h-1 w-full shrink-0 bg-gradient-to-r from-brand/15 via-brand to-brand/40"
      aria-hidden
    />
  );
}

export function AboutProblemSection() {
  const [s0, s1, s2, s3] = problemStats;

  return (
    <SectionWrapper
      id="about"
      className="border-t border-slate-200/50 bg-white bg-[radial-gradient(ellipse_110%_55%_at_50%_-25%,rgba(171,67,208,0.07),transparent_52%),radial-gradient(ellipse_70%_45%_at_0%_100%,rgba(245,230,252,0.55),transparent_60%),radial-gradient(ellipse_55%_40%_at_100%_85%,rgba(171,67,208,0.04),transparent_50%)]"
    >
      <header className="relative mx-auto mb-12 max-w-4xl text-center sm:mb-16">
        <h2 className="text-pretty bg-gradient-to-br from-slate-950 via-brand-deep to-brand bg-clip-text px-2 text-[1.65rem] font-bold leading-[1.18] tracking-tight text-transparent sm:text-4xl sm:leading-[1.15] md:text-5xl md:leading-[1.12] lg:text-[2.85rem]">
          The youth unemployment crisis needs practical alternatives
        </h2>
        <p className="text-pretty mx-auto mt-7 max-w-2xl px-2 text-base leading-[1.7] text-slate-600 sm:mt-8 sm:text-lg sm:leading-relaxed">
          {challengeIntro}
        </p>
      </header>
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-6 gap-4">
          <FeatureCard className="col-span-full flex flex-col !p-0 lg:col-span-2">
            <ChallengeCardAccent />
            <FeatureCardContent className="flex flex-1 flex-col !pt-5">
              <p className="text-sm font-semibold leading-snug text-slate-900">{s0.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s0.description}</p>
              <p className="mt-5 text-4xl font-bold tabular-nums tracking-tight text-brand sm:text-5xl">
                {s0.value}
              </p>
              <div className="relative mt-6 flex h-20 w-full max-w-[14rem] items-center justify-center self-center sm:h-24">
                <svg
                  className="text-brand/20 absolute inset-0 size-full"
                  viewBox="0 0 254 104"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard className="col-span-full flex flex-col !p-0 sm:col-span-3 lg:col-span-2">
            <ChallengeCardAccent />
            <FeatureCardContent className="flex flex-1 flex-col !pt-5">
              <p className="text-sm font-semibold leading-snug text-slate-900">{s1.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s1.description}</p>
              <p className="mt-5 text-3xl font-bold tabular-nums text-slate-900 sm:text-4xl">{s1.value}</p>
              <div className="mt-auto flex justify-center pt-8">
                <div className="relative flex aspect-square size-28 items-center justify-center rounded-full border border-slate-200/80 bg-white shadow-inner shadow-slate-200/50 before:absolute before:-inset-2 before:rounded-full before:border before:border-dashed before:border-brand/25">
                  <Users className="text-brand size-9" strokeWidth={1.25} aria-hidden />
                </div>
              </div>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard className="col-span-full flex flex-col !p-0 sm:col-span-3 lg:col-span-2">
            <ChallengeCardAccent />
            <FeatureCardContent className="flex flex-1 flex-col !pt-5">
              <p className="text-sm font-semibold leading-snug text-slate-900">{s2.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s2.description}</p>
              <p className="mt-5 text-3xl font-bold tabular-nums text-slate-900 sm:text-4xl">{s2.value}</p>
              <div className="mt-auto flex h-28 items-end justify-center gap-2 px-2 pt-6">
                <div className="h-[45%] w-7 rounded-t-lg bg-brand/25 shadow-sm" aria-hidden />
                <div className="h-[70%] w-7 rounded-t-lg bg-brand/50 shadow-sm" aria-hidden />
                <div className="h-full w-7 max-h-[90%] rounded-t-lg bg-brand shadow-md shadow-brand/25" aria-hidden />
              </div>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard className="col-span-full flex flex-col !p-0 lg:col-span-3">
            <ChallengeCardAccent />
            <FeatureCardContent className="grid h-full !pt-5 sm:grid-cols-2 sm:gap-6">
              <div className="flex flex-col">
                <p className="text-sm font-semibold leading-snug text-slate-900">{s3.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s3.description}</p>
                <p className="mt-5 text-3xl font-bold tabular-nums text-slate-900 sm:text-4xl">{s3.value}</p>
                <div className="mt-6">
                  <div className="relative inline-flex aspect-square size-11 rounded-full border border-slate-200/80 bg-white shadow-sm">
                    <Percent className="text-brand m-auto size-5" strokeWidth={1.25} aria-hidden />
                  </div>
                </div>
              </div>
              <div className="relative mt-6 flex min-h-[150px] items-center justify-center rounded-xl border border-slate-200/60 bg-gradient-to-br from-white to-brand-light/25 p-6 sm:mt-0">
                <div className="flex items-end gap-3">
                  <BarChart2 className="text-brand/40 size-14" strokeWidth={1} aria-hidden />
                  <Shield className="text-brand/30 size-11" strokeWidth={1} aria-hidden />
                </div>
              </div>
            </FeatureCardContent>
          </FeatureCard>

          <FeatureCard className="col-span-full flex flex-col !p-0 lg:col-span-3">
            <ChallengeCardAccent />
            <FeatureCardContent className="grid h-full !pt-5 sm:grid-cols-2">
              <div className="flex flex-col sm:pr-4">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{challengeClosing}</p>
                <div className="mt-6 inline-flex">
                  <div className="relative flex aspect-square size-11 rounded-full border border-slate-200/80 bg-white shadow-sm">
                    <Shield className="text-brand m-auto size-5" strokeWidth={1.25} aria-hidden />
                  </div>
                </div>
              </div>
              <div className="relative mt-6 rounded-tl-2xl border-l border-t border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-white p-6 shadow-inner sm:-mr-6 sm:-mb-6 sm:ml-2 sm:mt-0">
                <div className="mb-4 flex gap-1.5">
                  <span className="block size-2.5 rounded-full border border-slate-200 bg-white shadow-sm" />
                  <span className="block size-2.5 rounded-full border border-slate-200 bg-white shadow-sm" />
                  <span className="block size-2.5 rounded-full border border-slate-200 bg-white shadow-sm" />
                </div>
                <div className="flex h-28 items-end justify-between gap-1.5">
                  {[35, 55, 40, 70, 45, 80, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-full max-w-[10%] rounded-t-md bg-gradient-to-t from-brand/50 to-brand/20"
                      style={{ height: `${h}%` }}
                      aria-hidden
                    />
                  ))}
                </div>
              </div>
            </FeatureCardContent>
          </FeatureCard>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-14 top-6 h-40 w-40 rounded-full bg-brand-light blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SolutionAccordion
          features={solutionAccordionFeatures}
          eyebrow="Our Solution"
          title="Practical, mobile-first learning that turns skills into income"
          subtitle="Kazi Skills combines micro-learning with local market opportunities and AI support."
        />
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <SectionWrapper
      id="features"
      title="AI features designed for access and opportunity"
      subtitle="Smart search, sequencing, income nudges, and quality checks use AI in a lightweight way so learners and creators stay in charge of what ships."
      className="border-t border-slate-200/80 bg-gradient-to-b from-brand-light/50 via-brand-bg to-brand-bg"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-52 w-52 rounded-full bg-brand/10 blur-3xl" />
      <div className="mx-auto max-w-5xl px-2 sm:px-0">
        <AiFeaturesGrid items={aiFeatureCells} />
      </div>
    </SectionWrapper>
  );
}

export function CategoriesSection() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-mid/15 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <CategoriesCarousel
          heading="Learn what the market needs now"
          subheading="Swipe through paths that mirror what buyers actually pay for, from beauty and food to digital work and retail."
          ctaLabel="Get started"
          ctaHref={MVP_DEMO_URL}
          items={categoryGalleryItems}
        />
      </div>
    </section>
  );
}

function HowItWorks3DNumber({ value }: { value: number }) {
  return (
    <div
      className="mx-auto flex h-[5.5rem] w-full max-w-[7.5rem] select-none items-center justify-center sm:h-[6.5rem] sm:max-w-[8.5rem]"
      aria-hidden
    >
      {/* Perspective on parent so rotateX / rotateY read as true 3D (reference-style tilted numerals). */}
      <div className="flex items-center justify-center [perspective:520px] sm:[perspective:580px]">
        <span
          className="inline-block origin-[50%_65%] text-[3.85rem] font-extrabold leading-none tracking-tighter text-white will-change-transform [transform-style:preserve-3d] [transform:rotateX(16deg)_rotateY(-26deg)_translateZ(0)] sm:text-[4.55rem]"
          style={{
            fontFamily: "var(--font-syne), ui-sans-serif, system-ui, sans-serif",
            textShadow: `
              0.02em 0.02em 0 #f5e6fc,
              0.04em 0.05em 0 #e9d5f5,
              0.07em 0.09em 0 #c96ee8,
              0.1em 0.13em 0 #ab43d0,
              0.14em 0.18em 0 #8b2db0,
              0.18em 0.24em 0 #6a1a8a,
              0.22em 0.3em 0.14em rgba(74, 15, 92, 0.42)
            `,
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function HowItWorksArchAcross({ className = "" }: { className?: string }) {
  return (
    <div
      className={`hidden shrink-0 items-start justify-center pt-10 lg:flex lg:w-8 xl:w-12 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 48 80"
        className="h-[4.5rem] w-full text-brand/30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 6 68 Q 24 6 42 68"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M 36 62 L 42 68 L 34 68"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function HowItWorksArchDown({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-1 lg:hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 48 44"
        className="h-11 w-10 text-brand/30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 24 8 L 24 26"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M 16 20 L 24 30 L 32 20"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <SectionWrapper
      id="how-it-works"
      eyebrow="How Kazi Skills works"
      title="Four steps from learning to earning"
      className="bg-gradient-to-b from-brand-bg to-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-stretch lg:flex-row lg:items-start lg:justify-between lg:gap-0 xl:justify-center xl:gap-1">
          {howItWorksSteps.map((step, index) => (
            <div key={step.title} className="contents">
              <div className="flex min-w-0 flex-1 flex-col px-1 text-center sm:px-2 lg:basis-0 lg:px-2 xl:px-3">
                <HowItWorks3DNumber value={index + 1} />
                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
              </div>
              {index < howItWorksSteps.length - 1 ? (
                <>
                  <HowItWorksArchAcross />
                  <HowItWorksArchDown />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function RoadmapFlowArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-white/85 ${className}`}
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 16h92"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M92 10l14 6-14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RoadmapFlowArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-white/85 ${className}`}
      viewBox="0 0 32 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 8v48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 48l6 14 6-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Theme base → map (full asset, no crop) → translucent purple so map stays visible */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-dark to-brand-deep"
          aria-hidden
        />
        <Image
          src="/roadmap-east-africa-map.png"
          alt=""
          fill
          priority={false}
          className="object-contain object-center p-8 opacity-100 saturate-[0.95] sm:p-12 md:p-16"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-deep/58 via-brand-dark/38 to-brand-deep/68"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_50%_42%,rgba(245,230,252,0.14),transparent_62%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-[0.06]" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Growth plan from Kampala to East Africa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-light/90 sm:text-lg">
            One steady flow: validate where learners and buyers already meet, scale across the country,
            then open regional corridors for skills and income.
          </p>
        </header>

        {/* Desktop / tablet: horizontal flow */}
        <div className="mx-auto hidden max-w-5xl md:block">
          <div className="flex items-stretch justify-center gap-0 lg:gap-1">
            {roadmap.map((item, index) => (
              <div key={item.phase} className="contents">
                <div className="flex min-w-0 flex-1 flex-col rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xl shadow-black/20 ring-1 ring-slate-200/80 lg:p-8">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-md shadow-brand/35 ring-2 ring-brand-mid/25">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                    {item.phase}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-slate-900 lg:text-xl">
                    {item.detail}
                  </p>
                </div>
                {index < roadmap.length - 1 ? (
                  <div className="flex w-10 shrink-0 items-center justify-center self-center lg:w-16">
                    <RoadmapFlowArrow className="h-8 w-full max-w-[4.5rem] lg:max-w-none" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="mx-auto flex max-w-md flex-col items-center md:hidden">
          {roadmap.map((item, index) => (
            <div key={item.phase} className="flex w-full flex-col items-center">
              <div className="w-full rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xl shadow-black/20 ring-1 ring-slate-200/80">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-sm font-bold text-white shadow-md shadow-brand/35 ring-2 ring-brand-mid/25">
                  {index + 1}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                  {item.phase}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-slate-900">{item.detail}</p>
              </div>
              {index < roadmap.length - 1 ? (
                <RoadmapFlowArrowDown className="my-1 h-14 w-8 shrink-0" />
              ) : null}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[11px] leading-relaxed text-brand-light/55 sm:text-xs">
          East Africa reference map (
          <a
            href="https://commons.wikimedia.org/wiki/File:East_Africa_Map.png"
            className="underline decoration-brand-mid/50 underline-offset-2 hover:text-brand-light/85"
            target="_blank"
            rel="noreferrer"
          >
            Wikimedia Commons
          </a>
          , CC&nbsp;BY-SA&nbsp;4.0, Ds2320).
        </p>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <SectionWrapper
      id="team"
      eyebrow="Team"
      title="People building opportunity with purpose"
      className="border-t border-slate-200/60 bg-white text-slate-900"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12">
        {team.map((name) => (
          <div
            key={name}
            className="flex w-[42%] max-w-[13rem] flex-col items-center text-center sm:w-44 sm:max-w-none lg:w-48"
          >
            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/25 via-brand-light/90 to-brand-mid/35 ring-2 ring-brand/20 shadow-md shadow-brand/15"
              aria-hidden
            >
              <User className="size-11 text-brand-dark/85" strokeWidth={1.25} />
            </div>
            <p className="mt-4 font-semibold leading-snug text-slate-900">{name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CtaSection() {
  return (
    <SectionWrapper
      id="start-building"
      className="scroll-mt-24 bg-gradient-to-b from-brand-bg to-brand-light/40 pb-10 sm:pb-14"
    >
      <Card className="border-0 bg-gradient-to-br from-brand-deep via-brand-dark to-brand px-6 py-10 text-center text-white shadow-2xl shadow-brand-deep/35 sm:px-10 sm:py-12">
        <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
          Start building your future today
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Join Kazi Skills to unlock practical training, creator-led content, and
          AI guidance for income growth.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href={MVP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light"
          >
            Get started
          </Link>
          <Button
            href="#contact"
            variant="secondary"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20"
          >
            Talk to Us
          </Button>
        </div>
      </Card>
    </SectionWrapper>
  );
}
