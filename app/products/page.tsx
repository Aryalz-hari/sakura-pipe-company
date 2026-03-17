import PageHero from "@/components/page-hero";
import SectionShell from "@/components/section-shell";
import { ArrowRight } from "lucide-react";

const productList = [
  {
    title: "Industrial Pipes",
    text: "Strong, reliable, and suitable for demanding industrial systems.",
  },
  {
    title: "Pipe Fittings",
    text: "Designed for secure flow management and stable installation performance.",
  },
  {
    title: "Custom Specifications",
    text: "Support for projects that require tailored sizes and supply planning.",
  },
  {
    title: "Bulk Orders",
    text: "Dependable manufacturing support for commercial and industrial quantity needs.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Our Products"
        title="Pipe and fitting solutions for industrial use"
        description="Explore our product range built to support strength, reliability, and project-ready performance."
      />

      <SectionShell
        title="Product categories"
        description="These sections are designed to look premium now and can later be upgraded with real product images, dimensions, and technical details."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productList.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/15" />
                  <div className="h-3 w-24 rounded-full bg-primary/30" />
                  <div className="h-3 w-16 rounded-full bg-accent/20" />
                </div>
              </div>

              <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Category 0{index + 1}
              </div>

              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {item.text}
              </p>

              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
