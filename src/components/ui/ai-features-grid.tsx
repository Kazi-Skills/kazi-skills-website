import type { LucideIcon } from "lucide-react";

export type AiFeatureCell = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type AiFeaturesGridProps = {
  items: AiFeatureCell[];
};

export function AiFeaturesGrid({ items }: AiFeaturesGridProps) {
  return (
    <div className="relative mx-auto grid max-w-2xl divide-x divide-y divide-slate-200 border border-slate-200 bg-white/80 *:p-8 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3 md:*:p-10 lg:*:p-12">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="space-y-3">
            <div className="flex items-center gap-2">
              <Icon className="size-4 shrink-0 text-brand-dark" strokeWidth={2} aria-hidden />
              <h3 className="text-sm font-medium text-slate-900">{item.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
