import PageHero from "@/components/page-hero";
import SectionShell from "@/components/section-shell";
import { ShieldCheck, Truck, Users, Factory } from "lucide-react";

const reasons = [
  {
    title: "Consistent Quality",
    text: "Our process is focused on dependable product performance and quality assurance.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Supply",
    text: "We support timely delivery and practical coordination for industrial needs.",
    icon: Truck,
  },
  {
    title: "Customer Trust",
    text: "Long-term relationships are built through service, communication, and consistency.",
    icon: Users,
  },
  {
    title: "Industry Focus",
    text: "Our products are aligned with real industrial usage and client requirements.",
    icon: Factory,
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        badge="Why Choose Us"
        title="Dependability that supports every project"
        description="We combine product quality, service responsiveness, and practical manufacturing support to help clients move with confidence."
      />

      <SectionShell
        title="What makes us different"
        description="This page highlights the brand trust points that matter most to industrial buyers."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[1.75rem] border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">{reason.title}</h3>
                <p className="leading-8 text-muted-foreground">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </SectionShell>
    </>
  );
}
