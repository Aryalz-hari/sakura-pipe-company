import PageHero from "@/components/page-hero";
import SectionShell from "@/components/section-shell";
import { CheckCircle2, Eye, Target, Gem } from "lucide-react";

const points = [
  "Focused on high-quality pipe manufacturing",
  "Built for long-term industrial performance",
  "Committed to reliable customer service",
  "Driven by consistency and trust",
];

const values = [
  {
    title: "Our Mission",
    text: "To provide reliable pipe and fitting solutions with strong quality control and dependable service.",
    icon: Target,
  },
  {
    title: "Our Vision",
    text: "To build long-term industrial trust through consistency, innovation, and responsible manufacturing.",
    icon: Eye,
  },
  {
    title: "Core Value",
    text: "Quality, commitment, and customer trust are at the center of everything we deliver.",
    icon: Gem,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Sakura"
        title="A company built around durable industrial solutions"
        description="We deliver dependable pipe and fitting products with a strong focus on quality, industrial reliability, and long-term customer trust."
      />

      <SectionShell
        title="Who we are"
        description="Sakura Pipe Udhyog Pvt. Ltd. is dedicated to supplying quality products for industrial applications through practical engineering and careful manufacturing standards."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Our brand story</h3>
            <p className="mt-4 leading-8 text-muted-foreground">
              We work with a clear focus on dependable manufacturing, practical
              customer support, and product consistency. Our approach combines
              industrial strength with service reliability, helping clients
              choose solutions with confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <CheckCircle2 className="mb-3 h-6 w-6 text-primary" />
                  <p className="font-medium leading-7">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
