import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const problemStats = [
  { value: "700k-800k", label: "youth entering workforce annually" },
  { value: "~90,000", label: "jobs created each year" },
  { value: "80%", label: "working in informal employment" },
  { value: "50%", label: "NEET youth rate" },
];

const solutionItems = [
  "Micro-learning (5-15 min videos)",
  "Mobile-first (low-end Android optimized)",
  "Offline access",
  "Beauty & Makeup, Digital Hustles, Food Business",
];

const aiFeatures = [
  "Smart search (English + Luganda)",
  "Personalized learning paths",
  "Income tracker (suggests gigs)",
  "AI quality control for content",
];

const categories = [
  {
    title: "Beauty & Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Digital Hustles",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Food Business",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
];
const steps = [
  "Sign up on your phone",
  "Pick your skill path",
  "Watch short practical lessons",
  "Start earning with guided gigs",
];

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

const trustItems = [
  "AI-powered skill matching",
  "Mobile-first, low-end Android optimized",
  "Offline learning for rural access",
  "Learn • Grow • Earn model",
];

export function HeroSection() {
  return (
    <section id="home" className="bg-brand-bg scroll-mt-16 sm:scroll-mt-[4.5rem]">
      <div className="relative isolate min-h-[68vh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
          >
            <source src="/videos/kazi-skills-vid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-brand-deep/50 via-brand-dark/40 to-brand-deep/60" />
        <div className="pointer-events-none absolute -left-20 top-10 z-10 h-64 w-64 rounded-full bg-brand-mid/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 z-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute inset-0 z-10 bg-grid-soft opacity-25" />
        <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-14 sm:flex-row sm:gap-12 sm:px-10 sm:py-20">
          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light/95 sm:text-sm">
              AI-powered skills marketplace
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Learn Skills. Earn Income. Change Your Future.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-100 sm:text-lg">
              Kazi Skills is an AI-powered mobile-first skills marketplace helping
              African youth learn practical skills and earn income from their
              phones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#features">Start Learning</Button>
              <Button href="#courses" variant="secondary">
                Become a Creator
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col items-start gap-4 px-4 sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col gap-3 sm:w-[55%]">
          {trustItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-mid/35 bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark w-fit"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="w-full flex-shrink-0 sm:w-[45%]">
          <Card className="mx-auto w-full max-w-xl bg-gradient-to-br from-brand-dark via-brand to-brand-mid p-1 sm:mx-0">
            <div className="rounded-xl bg-white p-5">
              <div className="mx-auto max-w-[280px] rounded-[2rem] border-4 border-brand-mid/50 bg-slate-900 p-3 shadow-2xl shadow-brand/30">
                <div className="rounded-[1.4rem] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                    Kazi Skills
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Today&apos;s path</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li className="rounded-lg bg-brand-light p-2">Beauty Basics - 10 mins</li>
                    <li className="rounded-lg bg-brand-light p-2">Digital Gig Setup - 8 mins</li>
                    <li className="rounded-lg bg-brand-light p-2">Income Tracker Tips - 6 mins</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function TrustStripSection() {
  return (
    <SectionWrapper className="py-8">
      <div className="rounded-2xl border border-brand-light bg-white/90 p-4 shadow-sm shadow-brand/10 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-sm font-bold text-brand-dark whitespace-nowrap">Why Kazi Skills?</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-mid/35 bg-brand-light px-4 py-2 text-xs font-semibold tracking-wide text-brand-dark sm:text-sm"
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

export function AboutProblemSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="The Challenge"
      title="The youth unemployment crisis needs practical alternatives"
      subtitle="Building a future where your skill, not your background, determines your income."
      className="bg-gradient-to-br from-brand-deep/[0.12] via-brand-light/70 to-brand-dark/[0.08]"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-dark/25 blur-2xl" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problemStats.map((item) => (
          <Card key={item.label}>
            <p className="text-3xl font-black text-brand">{item.value}</p>
            <p className="mt-2 text-sm text-slate-600">{item.label}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function SolutionSection() {
  return (
    <SectionWrapper
      eyebrow="Our Solution"
      title="Practical, mobile-first learning that turns skills into income"
      subtitle="Kazi Skills combines micro-learning with local market opportunities and AI support."
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-14 top-6 h-32 w-32 rounded-full bg-brand-mid/30 blur-2xl" />
      <div className="grid gap-4 md:grid-cols-2">
        {solutionItems.map((item) => (
          <Card key={item}>
            <p className="font-semibold text-slate-800">{item}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function FeaturesSection() {
  return (
    <SectionWrapper
      id="features"
      eyebrow="AI Features"
      title="Technology designed for access and opportunity"
      className="border-t border-brand-dark/15 bg-gradient-to-b from-brand-dark/[0.06] via-brand-bg to-brand-bg"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-44 w-44 rounded-full bg-brand-dark/20 blur-3xl" />
      <div className="grid gap-4 md:grid-cols-2">
        {aiFeatures.map((feature) => (
          <Card key={feature}>
            <p className="font-semibold text-slate-800">{feature}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CategoriesSection() {
  return (
    <SectionWrapper
      id="courses"
      eyebrow="Skill Categories"
      title="Learn what the market needs now"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-mid/20 blur-3xl" />
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.title} className="overflow-hidden p-0">
            <div className="relative h-44 w-full">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Practical lessons tailored for immediate application and growth.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function HowItWorksSection() {
  return (
    <SectionWrapper eyebrow="How It Works" title="From learning to earning in four simple steps">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step}>
            <p className="text-sm font-bold text-brand">Step {index + 1}</p>
            <p className="mt-2 font-semibold text-slate-800">{step}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function RoadmapSection() {
  return (
    <SectionWrapper
      eyebrow="Roadmap"
      title="Growth plan from Kampala to East Africa"
      className="bg-gradient-to-b from-brand-bg via-brand-dark/[0.08] to-brand-deep/[0.12]"
    >
      <div className="relative mx-auto max-w-4xl space-y-4 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:content-[''] before:bg-gradient-to-b before:from-brand-dark before:via-brand before:to-brand-mid sm:before:left-1/2 sm:before:-translate-x-1/2">
        {roadmap.map((item, index) => (
          <Card
            key={item.phase}
            className={`relative border-brand-dark/15 sm:w-[48%] ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}
          >
            <span className="absolute -left-1.5 top-8 h-3 w-3 rounded-full bg-gradient-to-br from-brand-dark to-brand ring-2 ring-brand-light sm:left-auto sm:right-[-1.7rem]" />
            <p className="text-sm font-bold text-brand-dark">{item.phase}</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{item.detail}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function TeamSection() {
  return (
    <SectionWrapper
      id="team"
      tone="deep"
      eyebrow="Team"
      title="People building opportunity with purpose"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((name) => (
          <Card
            key={name}
            className="border-brand-mid/25 bg-white/95 text-center shadow-lg shadow-brand-deep/20 backdrop-blur-sm"
          >
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-brand-deep via-brand-dark to-brand ring-2 ring-brand-mid/40" />
            <p className="mt-3 font-semibold text-slate-900">{name}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CtaSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-brand-deep/[0.14] to-brand-bg pb-8">
      <Card className="border-brand-dark/20 bg-gradient-to-r from-brand-deep via-brand-dark to-brand text-center text-white shadow-xl shadow-brand-deep/30">
        <h3 className="text-2xl font-bold sm:text-3xl">Start building your future today</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          Join Kazi Skills to unlock practical training, creator-led content, and
          AI guidance for income growth.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white bg-white px-5 py-3 text-sm font-semibold text-brand-dark shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-light"
          >
            Start Learning
          </Link>
          <Button
            href="#contact"
            variant="secondary"
            className="border-white/30 bg-white/15 text-white hover:bg-white/25"
          >
            Talk to Us
          </Button>
        </div>
      </Card>
    </SectionWrapper>
  );
}
