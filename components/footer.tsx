import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/40">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="footer-font flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-black text-primary-foreground shadow-sm">
                S
              </div>
              <div>
                <p className="footer-font text-lg font-extrabold text-primary">
                  Sakura Pipe
                </p>
                <p className="text-sm text-muted-foreground">
                  Udhyog Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Reliable industrial pipe and fitting solutions designed with
              quality, consistency, and long-term performance in mind.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-2">
            <div>
              <p className="footer-font mb-3 text-sm font-bold text-foreground">
                Quick Links
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link
                  href="/about"
                  className="block transition hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="block transition hover:text-primary"
                >
                  Products
                </Link>
                <Link
                  href="/why-us"
                  className="block transition hover:text-primary"
                >
                  Why Us
                </Link>
                <Link
                  href="/contact"
                  className="block transition hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <p className="footer-font mb-3 text-sm font-bold text-foreground">
                Contact
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+91 98765 43210</p>
                <p>info@sakurapipe.com</p>
                <p>Industrial Area, Your City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sakura Pipe Udhyog Pvt. Ltd. All rights reserved.</p>
          <p>Built for a modern industrial brand presence.</p>
        </div>
      </div>
    </footer>
  );
}
