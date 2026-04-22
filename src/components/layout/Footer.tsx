import Link from "next/link";

const footerLinks = ["Home", "About", "Features", "Courses", "Team", "Contact"];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-12 text-slate-300 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">Kazi Skills</p>
          <p className="mt-1 text-sm text-slate-400">Skills for all. Earn for life.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:justify-end">
          {footerLinks.map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase() === "home" ? "home" : label.toLowerCase()}`}
              className="font-medium text-slate-400 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <Link
            href="#"
            aria-label="X"
            className="rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-brand-mid/50 hover:text-white"
          >
            X
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-brand-mid/50 hover:text-white"
          >
            IG
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-brand-mid/50 hover:text-white"
          >
            in
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-800 pt-8 text-center text-xs text-slate-500 sm:text-left">
        © {new Date().getFullYear()} Kazi Skills. All rights reserved.
      </p>
    </footer>
  );
}
