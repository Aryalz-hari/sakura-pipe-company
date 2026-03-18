import React from "react";

type SectionShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function SectionShell({
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-3xl space-y-4">
          <div className="h-1 w-20 rounded-full bg-primary" />
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}
