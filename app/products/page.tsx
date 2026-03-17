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
  text: string;
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
    title: "Industrial Pipes",
    category: "Plumbing",
    text: "Strong, reliable, and suitable for demanding industrial systems.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Industrial+Pipes"
  },
  {
    title: "Pipe Fittings",
    category: "Plumbing",
    text: "Designed for secure flow management and stable installation performance.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Pipe+Fittings"
  },
  {
    title: "Custom Specifications",
    category: "Water Supply",
    text: "Support for projects that require tailored sizes and supply planning.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Custom+Specs"
  },
  {
    title: "Bulk Orders",
    category: "Water Supply",
    text: "Dependable manufacturing support for commercial and industrial quantity needs.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Bulk+Orders"
  },
  {
    title: "HDPE Pipe",
    category: "Water Supply",
    text: "High-density polyethylene pipes known for their durability and corrosion resistance.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=HDPE+Pipe"
  },
  {
    title: "Hose Pipe",
    category: "Agriculture & Drainage",
    text: "Flexible hoses for various applications, providing easy installation and versatility.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Hose+Pipe"
  },
  {
    title: "Pipe Joints",
    category: "Agriculture & Drainage",
    text: "Various types of joints and connectors for secure and leak-proof connections.",
    image: "https://via.placeholder.com/400x300/cccccc/000000?text=Pipe+Joints"
  },
  {
    title: "RainPro",
    category: "Agriculture & Drainage",
    text: "Rainwater gutter and drainage solutions built for water collection and disposal efficiency.",
    image: "/images/products/rainpro.jpeg",
  },
  {
    title: "Borewell",
    category: "Water Supply",
    text: "Borewell casing and column piping solutions made for strength and dependable underground water applications.",
    image: "/images/products/borewell.jpeg",
  },
  {
    title: "UltraFlo",
    category: "Agriculture & Drainage",
    text: "Agriculture pressure piping systems engineered for irrigation and field water management needs.",
    image: "/images/products/ultraflow.jpeg",
  },
  {
    title: "ProDrain",
    category: "Agriculture & Drainage",
    text: "Drainage piping systems manufactured for effective waste and soil drainage flow management.",
    image: "/images/products/prodrain.png",
  },
  {
    title: "Underground",
    category: "Water Supply",
    text: "Underground drainage and piping solutions designed for long-term buried installation performance.",
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
                  <div className="bg-[#fafafaeb] p-4">
                    <div className="flex h-40 items-center justify-center bg-white p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-bold text-accent">
                      {product.title}
                    </p>

                    <p className="mt-2 line-clamp-4 text-sm leading-6 text-muted-foreground">
                      {product.text}
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
