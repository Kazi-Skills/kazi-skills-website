type SectionWrapperProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  /** Rich dark purple band — white headings, for team / highlight sections */
  tone?: "default" | "deep";
};

export function SectionWrapper({
  id,
  title,
  eyebrow,
  subtitle,
  children,
  className = "",
  tone = "default",
}: SectionWrapperProps) {
  const isDeep = tone === "deep";

  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 ${
        isDeep
          ? "bg-gradient-to-br from-brand-deep via-brand-dark to-brand-deep text-white"
          : ""
      } ${className}`}
    >
      {isDeep && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-[0.07]" />
          <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-mid/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-black/20 blur-3xl" />
        </>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <header className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && (
              <p
                className={`mb-3 text-sm font-semibold uppercase tracking-[0.16em] ${
                  isDeep ? "text-brand-mid" : "text-brand"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                  isDeep ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 text-base sm:text-lg ${
                  isDeep ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
