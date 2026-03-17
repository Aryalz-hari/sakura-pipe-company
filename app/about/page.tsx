import PageHero from "@/components/page-hero";
import SectionShell from "@/components/section-shell";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Focused on high-quality manufacturing",
  "Built for long-term industrial performance",
  "Committed to reliable service",
  "Driven by consistency and trust",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Sakura"
        title="Built for strength, reliability, and trust"
        description="We provide dependable pipe and fitting solutions designed for industrial performance and long-term durability."
      />

      <section className="section-space bg-section-card">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-xl">Who we are</h2>
            <p className="text-body-soft mt-4 sm:text-lg">
              Sakura Pipe Udhyog Pvt. Ltd. is committed to delivering
              high-quality pipe solutions backed by strong manufacturing
              standards and customer-focused service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v} className="premium-card p-6">
                <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
