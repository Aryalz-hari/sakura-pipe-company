import PageHero from "@/components/page-hero";
import {
  CheckCircle2,
  Target,
  Eye,
  Gem,
  Building2,
  UserRound,
  BriefcaseBusiness,
  Quote,
} from "lucide-react";

const values = [
  "Long-term commitment over short-term gains",
  "Respect for people building their dreams",
  "Trust through quality and consistency",
  "Innovation with responsibility and excellence",
];

const productLines = [
  "CPVC Pipes & Fittings",
  "UltraFlo PVC Agriculture Pressure Piping System",
  "ProDrain SWR PVC Piping Systems",
  "AquaPro uPVC Plumbing System",
  "Borewell Pipes",
  "WireSafe Electrical Conduit Systems",
  "HDPE Water Supply Piping System",
  "RainPro Rainwater Harvesting Solutions",
  "Underground Drainage Pipes",
  "Triple Layer HDPE Blow-molded Water Tanks",
  "Roto Molded Water Tanks",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Sakura Pipes"
        title="Nepal’s leading pipes and fittings company"
        description="A legacy of growth, innovation, and quality-driven manufacturing built to serve Nepal with reliable piping and water solution systems."
      />

      <section className="section-space bg-section-card">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-5">
            <div className="section-badge-accent text-xs sm:text-sm">
              Who We Are
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Our journey to Nepal&apos;s top pipes and fittings company
            </h2>

            <div className="space-y-4 text-body-soft text-sm sm:text-base lg:text-lg">
              <p>
                Sakura Group originally started as an Iron and Steel trading
                company in Kolkata, India in 1962. Since then, the company has
                evolved by moving away from the Iron and Steel industry to
                establish a diversified base of operations in Nepal in key
                industries such as building materials, plastic goods, real
                estate, travel & tourism, and energy.
              </p>

              <p>
                Although the group’s operations are focused in Nepal, it also
                has a commanding presence in India and aims to grow its
                operation base beyond the Indian subcontinent to create value.
              </p>

              <p>
                The group name, "Sakura" means auspicious and is believed to
                promote growth. Our current goal is in line with this message as
                we look to forge stable partnerships and grow our base of
                operations.
              </p>

              <p>
                Our core belief lies in leveraging technology and innovative
                management techniques to achieve cost efficiency that can be
                passed on to consumers to create value. We continue to build on
                our history of excellence in day-to-day operations and remain
                confident of growing at an even quicker pace without
                compromising the excellence that has always been our foundation.
              </p>
            </div>
          </div>

          <div className="premium-card p-6 sm:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Building2 className="h-7 w-7 text-primary" />
            </div>

            <h3 className="text-xl font-bold leading-snug tracking-[-0.02em] sm:text-2xl">
              About Sakura Pipes
            </h3>

            <div className="mt-4 space-y-4 text-body-soft text-sm sm:text-base">
              <p>
                Sakura Industries P. Ltd is Nepal's leading manufacturer of
                water supply, plumbing, sanitation, and drainage piping
                solutions with revenues in excess of USD 10 million.
              </p>

              <p>
                An ISO 9001:2015 certified company, we pride ourselves in
                effective management systems and quality controls to manufacture
                and distribute the best quality products in the industry.
              </p>

              <p>
                With an installed capacity of 10,000 MT of polymer processing
                capacity, Sakura Industries today is one of the largest
                manufacturers of CPVC, PVC, HDPE, and LLDPE products in Nepal.
              </p>

              <p>
                The company started its operations with the manufacturing of
                CPVC Pipes & Fittings in 2010 as the pioneer of CPVC piping
                systems in Nepal. Since then, the company has continuously
                expanded its product range across water, plumbing, sanitation,
                drainage, rainwater harvesting, electrical conduit, and water
                storage solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-section-soft">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl">
            <div className="section-badge-primary text-xs sm:text-sm">
              What We Do
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Product systems built for plumbing, sanitation, drainage, and
              water solutions
            </h2>

            <p className="text-body-soft mt-4 text-sm sm:text-base lg:text-lg">
              Sakura Pipes has consistently expanded its product range to serve
              residential, commercial, agricultural, and infrastructure needs
              across Nepal.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {productLines.map((item) => (
              <div key={item} className="premium-card p-5">
                <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold leading-7 text-foreground sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-section-card">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <div className="premium-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold sm:text-2xl">Our Vision</h3>
            <p className="text-body-soft mt-4 text-sm sm:text-base">
              To bring trust in Nepali products through global technology and
              solutions, providing consumers with products and services that
              meet their needs in the most cost-effective manner without
              compromising on quality standards.
            </p>
          </div>

          <div className="premium-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold sm:text-2xl">Our Mission</h3>
            <p className="text-body-soft mt-4 text-sm sm:text-base">
              To maintain leadership by being the largest and most diversified
              plumbing, sanitation, drainage, water solutions, and storage
              company in Nepal through total quality, latest technology, and the
              best customer service.
            </p>
          </div>

          <div className="premium-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Gem className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold sm:text-2xl">Value Creation</h3>
            <p className="text-body-soft mt-4 text-sm sm:text-base">
              We aim to create value by developing stable partnerships and using
              pioneering technologies to reestablish the status quo of the
              market, while hiring, retaining, and developing the best talent in
              an invigorating environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-section-accent-soft">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="section-badge-accent text-xs sm:text-sm">
              Our Values
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Built on long-term commitment and respect
            </h2>

            <p className="text-body-soft mt-4 text-sm sm:text-base lg:text-lg">
              Sakura believes in respecting the people who work toward building
              their dreams and in making the right choices based not on
              short-term gains but on long-term commitments.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
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
      </section>

      <section className="section-space bg-section-card">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="premium-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <UserRound className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold sm:text-2xl">Management</h3>
            <p className="mt-4 text-lg font-semibold text-foreground">
              Chief Executive Officer
            </p>
            <p className="mt-1 font-medium text-primary">
              Mr. Abhinav Churiwal
            </p>

            <p className="text-body-soft mt-4 text-sm sm:text-base">
              At the helm of Sakura Pipes, leading the charge with innovation
              and dedication, is our esteemed CEO, Mr. Abhinav Churiwal. As the
              driving force behind Sakura Pipes, he has steered the company
              toward becoming Nepal’s foremost manufacturer of piping solutions.
            </p>
          </div>

          <div className="premium-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <BriefcaseBusiness className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-xl font-bold sm:text-2xl">
              Investor & Shareholder Information
            </h3>

            <p className="text-body-soft mt-4 text-sm sm:text-base">
              Sakura Pipes is 100% owned by Nepali entities, reflecting a strong
              commitment to local investment and prosperity.
            </p>

            <p className="text-body-soft mt-4 text-sm sm:text-base">
              The company acknowledges the important contributions of its
              esteemed investors and shareholders:
            </p>

            <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground sm:text-base">
              <li>• Shashi Churiwal</li>
              <li>• Shiny Khetan</li>
            </ul>

            <p className="text-body-soft mt-4 text-sm sm:text-base">
              Their support and confidence have been instrumental in shaping the
              company's trajectory and steering Sakura Pipes toward sustained
              growth and success.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-primary p-8 text-white shadow-2xl sm:p-10 lg:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Quote className="h-7 w-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Chief Executive Officer&apos;s Message
              </h2>

              <div className="mt-6 space-y-4 text-sm text-white/90 sm:text-base lg:text-lg">
                <p>
                  I believe that there is no shortcut to achieve business goals.
                  I strongly believe in hard work, giving preference to customer
                  satisfaction with values like moral, ethics and honesty.
                </p>

                <p>
                  Moreover, we have worked hard on our commitment to the
                  continuous development of the company, by consistently
                  improving and growing within our respective divisions.
                </p>

                <p>
                  Thank you for visiting the website and taking your time to
                  read my thoughts. Looking forward to a longer and stronger
                  business relationship.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-lg font-bold text-white">Abhinav Churiwal</p>
                <p className="text-white/80">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
