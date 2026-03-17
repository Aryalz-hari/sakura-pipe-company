import PageHero from "@/components/page-hero";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Consistent Quality",
    text: "Strict quality standards ensure reliable performance.",
  },
  {
    title: "Reliable Supply",
    text: "Timely delivery and dependable coordination.",
  },
  {
    title: "Customer Trust",
    text: "Strong long-term relationships with clients.",
  },
  {
    title: "Industry Focus",
    text: "Products designed for real industrial needs.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        badge="Why Choose Us"
        title="A partner you can trust"
        description="We combine quality, reliability, and service to support industrial success."
      />

      <section className="section-space bg-section-accent-soft">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="premium-card p-6">
              <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
              <h3>{r.title}</h3>
              <p className="text-body-soft mt-2">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
