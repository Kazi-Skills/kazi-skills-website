type SectionWrapperProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  /** "banner" = uppercase label (default). "plain" = sentence style, no label bar look. */
  eyebrowVariant?: "banner" | "plain";
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
  eyebrowVariant = "banner",
  subtitle,
  children,
  className = "",
  tone = "default",
}: SectionWrapperProps) {
  const isDeep = tone === "deep";
  const isPlainEyebrow = eyebrowVariant === "plain";

  return (
    <section
      id={id}
      className={`relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 ${
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
          <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            {eyebrow && (
              <p
                className={
                  isPlainEyebrow
                    ? `mb-4 text-base font-medium leading-snug sm:text-lg ${
                        isDeep ? "text-white/85" : "text-slate-600"
                      }`
                    : `mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${
                        isDeep ? "text-brand-mid" : "text-brand"
                      }`
                }
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-tight ${
                  isDeep ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
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
