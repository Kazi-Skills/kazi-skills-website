type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-brand-light bg-white p-6 shadow-sm shadow-brand/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/20 ${className}`}
    >
      {children}
    </article>
  );
}
