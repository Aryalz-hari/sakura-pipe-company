"use client";

import { useMemo, useState } from "react";
import PageHero from "@/components/page-hero";

type Category =
  | "All"
  | "Plumbing"
  | "Agriculture & Drainage"
  | "Water Supply"
  | "Electricity";

type Product = {
  title: string;
  category: Category;
  description: string;
  image: string;
};

const categories: Category[] = [
  "All",
  "Plumbing",
  "Agriculture & Drainage",
  "Water Supply",
  "Electricity",
];

const products: Product[] = [
  {
    title: "CPVC Plus",
    category: "Plumbing",
    description:
      "Lead-free CPVC hot and cold water piping systems designed for durability and clean flow performance.",
    image: "/images/products/cpvc-plus.webp",
  },
  {
    title: "AquaPro",
    category: "Plumbing",
    description:
      "uPVC plumbing pipes and fittings designed for efficient installation and reliable water flow.",
    image: "/images/products/aquapro.jpeg",
  },
  {
    title: "HDPE",
    category: "Water Supply",
    description:
      "High-density polyethylene piping solutions for dependable water supply and industrial use.",
    image: "/images/products/hdpe.jpeg",
  },
  {
    title: "Wiresafe",
    category: "Electricity",
    description:
      "Electrical conduit systems designed to protect wiring installations across residential and commercial projects.",
    image: "/images/products/wiresafe.webp",
  },
  {
    title: "RainPro",
    category: "Agriculture & Drainage",
    description:
      "Rainwater gutter and drainage solutions built for water collection and disposal efficiency.",
    image: "/images/products/rainpro.jpeg",
  },
  {
    title: "Borewell",
    category: "Water Supply",
    description:
      "Borewell casing and column piping solutions made for strength and dependable underground water applications.",
    image: "/images/products/borewell.jpeg",
  },
  {
    title: "UltraFlo",
    category: "Agriculture & Drainage",
    description:
      "Agriculture pressure piping systems engineered for irrigation and field water management needs.",
    image: "/images/products/ultraflow.jpeg",
  },
  {
    title: "ProDrain",
    category: "Agriculture & Drainage",
    description:
      "Drainage piping systems manufactured for effective waste and soil drainage flow management.",
    image: "/images/products/prodrain.png",
  },
  {
    title: "Underground",
    category: "Water Supply",
    description:
      "Underground drainage and piping solutions designed for long-term buried installation performance.",
    image: "/images/products/underground.jpeg",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        badge="Our Products"
        title="Pipes Division"
        description="Explore our product categories and filter them by application area."
      />

      <section className="section-space bg-section-soft">
        <div className="container-shell">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                What We Offer
              </p>
            </div>

            <h2 className="text-center text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Pipes Division
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-premium"
                        : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.title}
                  className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden bg-[#ffffff]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-bold text-accent">
                      {product.title}
                    </p>

                    <p className="mt-2 line-clamp-4 text-sm leading-6 text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
                <p className="text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
