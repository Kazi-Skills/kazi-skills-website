import Image from "next/image";
import Link from "next/link";
import { MVP_DEMO_URL } from "@/lib/mvp-demo";

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Courses", href: "#courses" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
] as const;

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-black px-4 py-14 text-slate-300 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-[0.035]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Link href="#home" className="inline-block outline-none">
            <Image
              src="/logo-footer.png"
              alt="Kazi Skills"
              width={819}
              height={151}
              className="h-9 w-auto sm:h-10"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Skills for all. Earn for life. Practical micro-learning and AI-guided paths—built
            mobile-first for learners and creators across Uganda and East Africa.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-brand-mid/90">
            MVP season · View demo
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-mid">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-mid">
              Product
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={MVP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white/95 underline decoration-brand-mid/50 underline-offset-4 transition-colors hover:decoration-brand-light"
                >
                  View demo
                </a>
              </li>
              <li>
                <Link
                  href="#start-building"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Start building
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 lg:col-span-3 lg:border-t-0 lg:pt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-mid">
            MVP rollout
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            We&apos;re in active MVP season—feedback welcome as we grow from Kampala outward.
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 w-full max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:text-left">
        © {new Date().getFullYear()} Kazi Skills. All rights reserved.
      </div>
    </footer>
  );
}
