"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type SolutionFeatureItem = {
  id: number;
  title: string;
  image: string;
  description: string;
  /** Use contain + white pad for logos; cover for photos. */
  imageContain?: boolean;
};

type SolutionAccordionProps = {
  features: SolutionFeatureItem[];
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SolutionAccordion({ features, eyebrow, title, subtitle }: SolutionAccordionProps) {
  const firstValue = `item-${features[0]?.id ?? 1}`;
  const [open, setOpen] = useState(firstValue);
  const active = useMemo(() => {
    const id = Number.parseInt(open.replace("item-", ""), 10);
    return features.find((f) => f.id === id) ?? features[0];
  }, [open, features]);

  if (!features.length) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:items-stretch md:gap-12 lg:gap-14">
      <div className="flex w-full min-w-0 flex-col">
        <header className="mb-8 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand sm:text-sm">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-[2.5rem] md:leading-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
        </header>
        <Accordion
          type="single"
          collapsible
          value={open}
          onValueChange={(v) => setOpen(v && v.length > 0 ? v : firstValue)}
          className="w-full"
        >
          {features.map((tab) => (
            <AccordionItem key={tab.id} value={`item-${tab.id}`}>
              <AccordionTrigger className="cursor-pointer py-5 text-left !no-underline hover:!no-underline">
                <span
                  className={`text-lg font-semibold sm:text-xl ${
                    tab.id === active.id ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {tab.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-1 leading-relaxed text-slate-600">{tab.description}</p>
                <div className="mt-4 md:hidden">
                  <div
                    className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl ${
                      tab.imageContain ? "bg-white p-6 ring-1 ring-slate-200/80" : "bg-slate-100"
                    }`}
                  >
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      sizes="100vw"
                      className={tab.imageContain ? "object-contain" : "object-cover"}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div
        className={`relative hidden min-h-[420px] w-full overflow-hidden rounded-2xl md:block md:h-full md:min-h-[28rem] ${
          active.imageContain ? "bg-white p-8 ring-1 ring-slate-200/80" : "bg-slate-100"
        }`}
      >
        <Image
          key={active.image}
          src={active.image}
          alt={active.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={active.imageContain ? "object-contain" : "object-cover"}
          priority={active.id === features[0].id}
        />
      </div>
    </div>
  );
}
