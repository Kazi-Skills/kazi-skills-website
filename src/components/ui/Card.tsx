type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_2px_16px_-4px_rgba(106,26,138,0.07)] ring-1 ring-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-light hover:shadow-[0_12px_40px_-12px_rgba(106,26,138,0.18)] ${className}`}
    >
      {children}
    </article>
  );
}
