
import Link from "next/link";
import Image from "next/image";

type PageHeroProps = {
  badge?: string;
  title?: string;
  highlight?: string;
  titleEnd?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  badge = "Trusted Business Support",
  title = "Digital",
  highlight = "Marketing",
  titleEnd = "Solution",
  description = "High-quality industrial solutions crafted for growth, reliability, and long-term value.",
  buttonText = "Get Started",
  buttonHref = "/contact",
  imageSrc = "/images/hero-team.webp",
  imageAlt = "Team discussion",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-24 lg:pt-28">
      <div className="container-shell relative py-8 sm:py-10 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl space-y-5 lg:space-y-6">
            <div className="section-badge-primary text-xs sm:text-sm">
              {badge}
            </div>

            <div className="space-y-2">
              <h1 className="text-[2.35rem] font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block text-foreground">{title}</span>
                <span className="block text-primary">{highlight}</span>
                <span className="block text-foreground">{titleEnd}</span>
              </h1>

              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {description}
              </p>
            </div>

            <Link
              href={buttonHref}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-premium transition hover:bg-accent sm:px-6 sm:py-3"
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative min-h-75 sm:min-h-90 lg:min-h-117.5">
            {/* Big bottom curved shape */}
            <div className="absolute bottom-0 left-[-6%] right-[-10%] h-[72%] rounded-t-[14rem] bg-linear-to-r from-foreground via-primary to-primary/90" />

            {/* Right decorative blue shape equivalent using brand green */}
            <div className="absolute bottom-0 right-[-4%] h-[58%] w-[46%] rotate-[-10deg] rounded-tl-[6rem] bg-primary" />

            {/* Framed Image Shape */}
            <div className="absolute right-[2%] top-0 z-10 w-[76%] max-w-140">
              <div className="rounded-[3rem] bg-linear-to-br from-primary via-primary to-foreground p-3 shadow-2xl [clip-path:polygon(21%_0%,74%_0%,100%_24%,100%_79%,79%_100%,23%_100%,0%_75%,0%_22%)]">
                <div className="relative aspect-[1/0.9] overflow-hidden rounded-[2.4rem] bg-card [clip-path:polygon(21%_0%,74%_0%,100%_24%,100%_79%,79%_100%,23%_100%,0%_75%,0%_22%)]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute bottom-[18%] left-[10%] z-20 rounded-full border-[5px] border-[#f0c419] bg-primary px-3 py-2 shadow-xl sm:left-[14%] sm:px-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-card" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-card/80" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-card/60" />
                </div>

                <div className="leading-tight text-primary-foreground">
                  <p className="text-sm font-bold sm:text-base">30K Trusted</p>
                  <p className="text-xs sm:text-sm">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}