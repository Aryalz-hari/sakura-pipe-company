import React from "react";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,143,58,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(215,38,46,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              {badge}
            </div>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-6 shadow-xl">
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
              <div className="grid gap-3">
                <div className="h-4 w-32 rounded-full bg-primary/20" />
                <div className="h-28 rounded-3xl bg-background shadow-inner" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-2xl bg-primary/10" />
                  <div className="h-20 rounded-2xl bg-accent/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
