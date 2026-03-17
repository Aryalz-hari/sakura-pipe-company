import Image from "next/image";
import React from "react";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,143,58,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(215,38,46,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="container-shell relative py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="section-badge-primary text-xs sm:text-sm">
              {badge}
            </div>

            <h1 className="max-w-3xl text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:text-lg">
              {description}
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5 shadow-xl">
              {/* <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" /> */}
              <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

              <div className="relative space-y-4">
                <p className="text-sm font-semibold text-primary">
                  Premium Pipe Collection
                </p>
                <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-inner text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">S</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Industrial Pipe Solutions
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-10">
                  <div className="rounded-xl bg-background p-4 text-center shadow-sm">
                    <p className="text-lg font-bold text-primary">25+</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>

                  <div className="rounded-xl bg-background p-4 text-center shadow-sm">
                    <p className="text-lg font-bold text-primary">10K+</p>
                    <p className="text-xs text-muted-foreground">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}
