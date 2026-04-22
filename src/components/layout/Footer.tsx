import Link from "next/link";

const footerLinks = ["Home", "About", "Features", "Courses", "Team", "Contact"];

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-8 border-t border-brand-light bg-gradient-to-b from-brand-light to-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-900">Kazi Skills</p>
          <p className="text-sm text-slate-600">Skills for all. Earn for life.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          {footerLinks.map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase() === "home" ? "home" : label.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-brand"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <Link href="#" aria-label="X" className="rounded-lg bg-white p-2 hover:bg-brand-light">
            X
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="rounded-lg bg-white p-2 hover:bg-brand-light"
          >
            IG
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="rounded-lg bg-white p-2 hover:bg-brand-light"
          >
            in
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-slate-500">
        © {new Date().getFullYear()} Kazi Skills. All rights reserved.
      </p>
    </footer>
  );
}
