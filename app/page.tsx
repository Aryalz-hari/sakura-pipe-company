import Link from "next/link";
import Carousel from "@/components/carousel";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Truck,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "10K+", label: "Happy clients served" },
  { value: "99%", label: "Quality commitment" },
];

const features = [
  {
    title: "Premium-grade raw materials",
    text: "Built with dependable materials for long-term industrial performance.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable manufacturing",
    text: "Consistent production standards with strong quality assurance.",
    icon: Factory,
  },
  {
    title: "Timely supply support",
    text: "Fast coordination and dependable delivery for industrial requirements.",
    icon: Truck,
  },
  {
    title: "Trusted by clients",
    text: "A reputation shaped by service, reliability, and long-term trust.",
    icon: BadgeCheck,
  },
];

const products = [
  {
    title: "Industrial Pipes",
    description:
      "Durable pipe solutions engineered for pressure resistance, strength, and project reliability.",
  },
  {
    title: "Pipe Fittings",
    description:
      "Precision-designed fittings for safe connections, smooth flow, and stable installation.",
  },
  {
    title: "Custom Supply",
    description:
      "Flexible manufacturing support for projects requiring tailored sizing and dependable supply.",
  },
];

const highlights = [
  "Built for industrial durability",
  "Consistent product quality",
  "Dependable delivery support",
  "Responsive customer service",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-10 sm:pt-24">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-x-0 top-0 h-[520px] soft-grid opacity-40" />

        <div className="container-shell relative py-10 sm:py-12 lg:py-14">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Quality You Can Trust
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Premium Pipes for{" "}
                  <span className="text-gradient-brand">
                    Industrial Strength
                  </span>{" "}
                  and Reliable Performance
                </h1>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Sakura Pipe Udhyog delivers dependable pipes and fittings
                  built for modern industrial applications with a strong focus
                  on durability, quality, and long-term trust.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-premium transition hover:-translate-y-0.5 hover:bg-accent"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-card px-6 py-3.5 font-semibold text-primary transition hover:bg-primary/10"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-4 py-3 backdrop-blur-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-gradient-subtle rounded-[1.5rem] bg-card p-5 shadow-sm"
                  >
                    <p className="text-3xl font-black text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

              <div className="border-gradient-subtle overflow-hidden rounded-[2rem] bg-card/80 shadow-2xl backdrop-blur-xl lg:-mt-2">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-card">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <div className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                About Sakura
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Built on trust, quality, and industrial reliability
              </h2>

              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                We focus on dependable manufacturing, practical engineering, and
                customer-first service to deliver pipe and fitting solutions
                that support real industrial needs.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="premium-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl space-y-4">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Product Categories
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Pipe and fitting solutions made for industrial use
            </h2>
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Explore our main product offerings designed to support durability,
              stable performance, and dependable project execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.title}
                className="premium-card overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-6 flex aspect-[16/10] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-background to-accent/10">
                    <div className="space-y-3 text-center">
                      <div className="mx-auto h-12 w-12 rounded-full bg-primary/15" />
                      <div className="h-3 w-24 rounded-full bg-primary/30" />
                      <div className="mx-auto h-3 w-16 rounded-full bg-accent/20" />
                    </div>
                  </div>

                  <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Category 0{index + 1}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">{product.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {product.description}
                  </p>

                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-card">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                Why Choose Us
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                A manufacturing partner you can rely on
              </h2>

              <p className="text-base leading-8 text-muted-foreground sm:text-lg">
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
                  <p className="font-semibold leading-7 text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary via-primary to-primary/90 p-8 text-primary-foreground shadow-2xl sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  Ready to Work With Us
                </div>

                <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  Let’s discuss your industrial pipe requirements today
                </h2>

                <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Reach out to our team for product details, supply planning,
                  and tailored support for your next project.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-primary transition hover:bg-accent hover:text-white"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
