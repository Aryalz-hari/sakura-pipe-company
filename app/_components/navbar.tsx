"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/nav-links";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`container-shell mt-3 rounded-2xl border transition-all duration-500 ease-out ${
          scrolled
            ? "border-border/40 bg-background/20 backdrop-blur-2xl shadow-lg"
            : "border-white/30 bg-background/80 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-primary text-lg font-black text-primary-foreground shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />
              <Image
              className="scale-150"
                src="/logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div>
              <p className="nav-font text-base font-extrabold leading-none text-primary sm:text-xl">
                Sakura Pipe
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Udhyog Pvt. Ltd.
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-font rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="leading-tight">
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="nav-font font-semibold">+91 98765 43210</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="nav-font inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px] hover:bg-accent hover:shadow-lg"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl border border-border bg-card p-2.5 text-foreground transition hover:bg-primary/10 hover:text-primary md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/70 px-4 py-4 md:hidden sm:px-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-font rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Contact</p>
                  <p className="nav-font font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="nav-font mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
              >
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
