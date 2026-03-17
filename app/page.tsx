import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/carousel";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Truck,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Premium-grade materials",
    text: "Built for long-term industrial durability.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable manufacturing",
    text: "Consistent and quality-focused production.",
    icon: Factory,
  },
  {
    title: "Timely delivery",
    text: "Fast and dependable supply chain support.",
    icon: Truck,
  },
  {
    title: "Trusted by clients",
    text: "Strong reputation across industries.",
    icon: BadgeCheck,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 sm:pt-24">
        <div className="absolute inset-0 hero-glow" />

        <div className="container-shell py-8 sm:py-10 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <div className="section-badge-primary text-xs sm:text-sm">
                Quality You Can Trust
              </div>

              <h1 className="max-w-xl text-[2.2rem] font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl xl:text-[4rem]">
                Premium Pipes for <br />
                <span className="text-gradient-brand">Industrial Strength</span>
              </h1>

              <p className="text-body-soft max-w-2xl text-sm sm:text-base lg:text-lg">
                High-quality pipes and fittings engineered for durability,
                reliability, and industrial performance.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-premium hover:bg-accent sm:text-base"
                >
                  Get Quote
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white sm:text-base"
                >
                  View Products
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Industrial durability",
                  "Reliable supply",
                  "Quality assurance",
                  "Fast support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:-mt-6">
              <div className="border-gradient-subtle overflow-hidden rounded-[2rem] shadow-2xl">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-section-card">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="section-badge-accent text-xs sm:text-sm">
              About Us
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Built on trust and reliability
            </h2>

            <p className="text-body-soft mt-4 text-sm sm:text-base lg:text-lg">
              Sakura Pipe Udhyog focuses on quality manufacturing, consistent
              delivery, and strong industrial support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;

              return (
                <div key={f.title} className="premium-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
                    {f.title}
                  </h3>

                  <p className="text-body-soft mt-2 text-sm sm:text-base">
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-section-soft">
        <div className="container-shell">
          <div className="mb-10 max-w-2xl">
            <div className="section-badge-primary text-xs sm:text-sm">
              Products
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Industrial pipe solutions
            </h2>

            <p className="text-body-soft mt-4 text-sm sm:text-base lg:text-lg">
              Explore product categories designed for industrial strength,
              performance, and dependable long-term use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["Pipes", "Fittings", "Custom Supply"].map((p) => (
              <div key={p} className="premium-card p-6">
                {p === "Pipes" ? (
                  <div className="mb-4 h-40 rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/pipes.jpg"
                      alt="Pipes"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : p === "Fittings" ? (
                  <div className="mb-4 h-40 rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/fittings.jpg"
                      alt="Fittings"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-4 h-40 rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/custom.jpg"
                      alt="Custom Supply"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <h3 className="text-lg font-bold leading-snug tracking-[-0.02em] sm:text-xl">
                  {p}
                </h3>

                <p className="text-body-soft mt-2 text-sm sm:text-base">
                  High-quality industrial solutions built for performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-section-accent-soft">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-4">
              <div className="section-badge-accent text-xs sm:text-sm">
                Why Choose Us
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                A manufacturing partner you can rely on
              </h2>

              <p className="text-body-soft text-sm sm:text-base lg:text-lg">
                Our strength comes from consistent quality, practical support,
                and a commitment to serving industrial projects with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Consistent quality assurance",
                "Dependable industrial supply support",
                "Timely communication and response",
                "Built for long-term client trust",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-border/70 bg-background p-5 shadow-sm"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-base font-semibold leading-7 text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-primary p-8 text-center text-white shadow-2xl sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Ready to start your project?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base lg:text-lg">
              Contact us today for reliable industrial solutions.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
