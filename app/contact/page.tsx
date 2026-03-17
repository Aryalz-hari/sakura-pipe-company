import PageHero from "@/components/page-hero";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Talk to our team about your requirements"
        description="Get in touch for product inquiries, supply support, and business discussions."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                We’re here to help
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
                Share your inquiry and our team will respond with the right
                information for your project or product requirement.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Phone",
                  value: "+91 98765 43210",
                  icon: Phone,
                },
                {
                  title: "Email",
                  value: "info@sakurapipe.com",
                  icon: Mail,
                },
                {
                  title: "Address",
                  value: "Your office or factory address here",
                  icon: MapPin,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <form className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="h-12 w-full rounded-xl border border-border bg-input px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your requirement"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-accent hover:shadow-lg"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
