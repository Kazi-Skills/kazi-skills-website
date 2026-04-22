import type { ComponentProps } from "react";

export function FeatureCard({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/90 text-slate-900 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04] ${className}`}
      {...props}
    />
  );
}

export function FeatureCardContent({ className = "", ...props }: ComponentProps<"div">) {
  return <div className={`p-6 ${className}`} {...props} />;
}
