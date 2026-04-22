"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { isExternalHref, MVP_DEMO_URL } from "@/lib/mvp-demo";

export type CategoryGalleryItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: string;
};

function CategorySlideLink({ item }: { item: CategoryGalleryItem }) {
  const className = "group flex flex-col justify-between outline-none";
  const inner = (
    <>
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 452px, 90vw"
          className="object-cover object-center transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium text-slate-900 md:mb-3 md:text-xl lg:text-2xl">
        {item.title}
      </div>
      <div className="mb-6 line-clamp-2 text-sm text-slate-600 md:mb-10 md:text-base lg:mb-8">
        {item.summary}
      </div>
      <div className="flex items-center text-sm font-medium text-brand-dark">
        Explore path
        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
      </div>
    </>
  );
  if (isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {inner}
    </Link>
  );
}

type CategoriesCarouselProps = {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  items: CategoryGalleryItem[];
};

export function CategoriesCarousel({
  heading,
  subheading,
  ctaLabel = "Get started",
  ctaHref = MVP_DEMO_URL,
  items,
}: CategoriesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end lg:mb-16">
        <div className="max-w-xl">
          <h2 className="mb-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:mb-4 md:text-4xl lg:mb-4 lg:text-[2.5rem]">
            {heading}
          </h2>
          {subheading ? (
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{subheading}</p>
          ) : null}
          {isExternalHref(ctaHref) ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-dark md:text-base"
            >
              {ctaLabel}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-dark md:text-base"
            >
              {ctaLabel}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Previous categories"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 disabled:pointer-events-auto disabled:opacity-40"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next categories"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-50 disabled:pointer-events-auto disabled:opacity-40"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="relative -ml-2 w-[calc(100%+0.5rem)] sm:ml-0 sm:w-full">
        <div className="overflow-hidden pr-1" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 basis-[min(100%,22rem)] pl-4 sm:basis-[min(100%,24rem)] md:basis-[452px] md:max-w-[452px]"
              >
                <CategorySlideLink item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
