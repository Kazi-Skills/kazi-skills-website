import { Activity, DraftingCompass, Mail, Zap } from "lucide-react";
import { trustItems } from "@/components/sections/LandingSections";

const trustIcons = [Zap, Activity, Mail, DraftingCompass] as const;

function TodaysPathMockup() {
  return (
    <div className="rounded-xl bg-white p-5 sm:p-6">
      <div className="mx-auto max-w-[280px] rounded-[2rem] border-4 border-brand-mid/50 bg-slate-900 p-3 shadow-2xl shadow-brand/30">
        <div className="rounded-[1.4rem] bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Kazi Skills</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">Today&apos;s path</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="rounded-lg bg-brand-light p-2">Beauty Basics - 10 mins</li>
            <li className="rounded-lg bg-brand-light p-2">Digital Gig Setup - 8 mins</li>
            <li className="rounded-lg bg-brand-light p-2">Income Tracker Tips - 6 mins</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function LearnerChoiceSection() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Why learners choose us
            </h2>
            <ul className="mt-8 flex flex-col gap-3 md:mt-10">
              {trustItems.map((label, i) => {
                const Icon = trustIcons[i] ?? Zap;
                return (
                  <li key={label}>
                    <span className="inline-flex w-full max-w-lg items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-800 shadow-sm sm:py-3.5">
                      <Icon className="size-5 shrink-0 text-brand" strokeWidth={2} aria-hidden />
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div
              className="relative mx-auto w-full max-w-xl rounded-[1.75rem] border-[6px] border-brand p-2 shadow-[0_24px_55px_-18px_rgba(106,26,138,0.4)] sm:rounded-[2.25rem] sm:border-8 sm:p-3 lg:mx-0 lg:max-w-none lg:rounded-[2.5rem]"
            >
              <div className="rounded-[1.25rem] border border-slate-200/90 bg-white sm:rounded-[1.65rem] lg:rounded-[2rem]">
                <div className="rounded-[1.15rem] bg-white sm:rounded-[1.5rem] lg:rounded-[1.9rem]">
                  <TodaysPathMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
