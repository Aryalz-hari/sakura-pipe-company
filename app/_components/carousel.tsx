"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  { src: "/images/Sakura2.png", alt: "Industrial Pipe" },
  {
    src: "/images/sakura-pipes.png",
    alt: "Industrial Pipes and fittings",
  },
  {
    src: "/images/pipe1.jpg",
    alt: "Industrial pipe manufacturing",
  },
  {
    src: "/images/pipe2.webp",
    alt: "Premium pipe products",
  },
  {
    src: "/images/pipe3.jpg",
    alt: "Pipe and fitting solutions",
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[1.7rem]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.src} className="relative min-w-full">
              <div className="relative h-80 w-full sm:h-105 lg:h-130">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/35 via-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div className="rounded-2xl bg-white/80 px-4 py-3 backdrop-blur-md">
          <p className="nav-font text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Sakura Pipe
          </p>
          <p className="mt-1 text-sm font-medium text-foreground sm:text-base">
            Premium industrial pipe solutions
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-foreground shadow-lg backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-foreground shadow-lg backdrop-blur transition hover:bg-primary hover:text-primary-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
