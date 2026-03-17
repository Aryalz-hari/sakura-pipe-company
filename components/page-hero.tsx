// import Image from "next/image";
// import React from "react";

// type PageHeroProps = {
//   badge: string;
//   title: string;
//   description: string;
// };

// export default function PageHero({ badge, title, description }: PageHeroProps) {
//   return (
//     <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,143,58,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(215,38,46,0.10),transparent_28%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

//       <div className="container-shell relative py-12 sm:py-14 lg:py-16">
//         <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
//           <div className="max-w-3xl space-y-5 sm:space-y-6">
//             <div className="section-badge-primary text-xs sm:text-sm">
//               {badge}
//             </div>

//             <h1 className="max-w-3xl text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
//               {title}
//             </h1>

//             <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:text-lg">
//               {description}
//             </p>
//           </div>

//           <div className="relative hidden lg:block">
//             <div className="relative ml-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5 shadow-xl">
//               {/* <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" /> */}
//               <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

//               <div className="relative space-y-4">
//                 <p className="text-sm font-semibold text-primary">
//                   Premium Pipe Collection
//                 </p>
//                 <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-inner text-center">
//                   <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
//                     <span className="text-primary font-bold text-lg">S</span>
//                   </div>
//                   <p className="text-sm font-semibold text-foreground">
//                     Industrial Pipe Solutions
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3 mt-10">
//                   <div className="rounded-xl bg-background p-4 text-center shadow-sm">
//                     <p className="text-lg font-bold text-primary">25+</p>
//                     <p className="text-xs text-muted-foreground">Years</p>
//                   </div>

//                   <div className="rounded-xl bg-background p-4 text-center shadow-sm">
//                     <p className="text-lg font-bold text-primary">10K+</p>
//                     <p className="text-xs text-muted-foreground">Clients</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";

// type PageHeroProps = {
//   badge: string;
//   title: string;
//   description: string;
// };

// export default function PageHero({ badge, title, description }: PageHeroProps) {
//   return (
//     <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,143,58,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(215,38,46,0.10),transparent_28%)]" />
//       <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

//       <div className="container-shell relative py-12 sm:py-14 lg:py-16">
//         <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
//           <div className="max-w-3xl space-y-5 sm:space-y-6">
//             <div className="section-badge-primary text-xs sm:text-sm">
//               {badge}
//             </div>

//             <h1 className="max-w-3xl text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
//               {title}
//             </h1>

//             <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:text-lg">
//               {description}
//             </p>
//           </div>

//           <div className="relative hidden lg:block">
//             <div className="relative ml-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5 shadow-xl">
//               <div className="absolute -top-10 right-0 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
//               <div className="absolute bottom-0 left-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />

//               <div className="relative space-y-4">
//                 <div className="flex items-center justify-between">
//                   <p className="text-sm font-semibold text-primary">
//                     Premium Pipe Collection
//                   </p>
//                   <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
//                     Trusted
//                   </span>
//                 </div>

//                 <div className="flex h-44 flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-border/60 bg-white p-5 text-center shadow-inner">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
//                     S
//                   </div>

//                   <div className="space-y-2">
//                     <p className="text-base font-bold text-foreground">
//                       Industrial Pipe Solutions
//                     </p>
//                     <p className="mx-auto max-w-xs text-sm leading-6 text-muted-foreground">
//                       Durable, reliable, and performance-focused systems for
//                       modern industrial applications.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3 pt-1">
//                   <div className="rounded-[1rem] border border-border/70 bg-background p-4 text-center shadow-sm">
//                     <p className="text-xl font-bold text-primary">25+</p>
//                     <p className="mt-1 text-xs text-muted-foreground">
//                       Years Experience
//                     </p>
//                   </div>

//                   <div className="rounded-[1rem] border border-border/70 bg-background p-4 text-center shadow-sm">
//                     <p className="text-xl font-bold text-primary">10K+</p>
//                     <p className="mt-1 text-xs text-muted-foreground">
//                       Happy Clients
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
          <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[470px]">
            {/* Big bottom curved shape */}
            <div className="absolute bottom-0 left-[-6%] right-[-10%] h-[72%] rounded-t-[14rem] bg-gradient-to-r from-foreground via-primary to-primary/90" />

            {/* Right decorative blue shape equivalent using brand green */}
            <div className="absolute bottom-0 right-[-4%] h-[58%] w-[46%] rotate-[-10deg] rounded-tl-[6rem] bg-primary" />

            {/* Framed Image Shape */}
            <div className="absolute right-[2%] top-0 z-10 w-[76%] max-w-[560px]">
              <div className="rounded-[3rem] bg-gradient-to-br from-primary via-primary to-foreground p-3 shadow-2xl [clip-path:polygon(21%_0%,74%_0%,100%_24%,100%_79%,79%_100%,23%_100%,0%_75%,0%_22%)]">
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