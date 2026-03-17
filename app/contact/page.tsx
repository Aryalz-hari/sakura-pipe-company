import PageHero from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let’s work together"
        description="Reach out for product inquiries, supply support, or business discussions."
      />

      <section className="section-space bg-section-card">
        <div className="absolute inset-0 hero-glow" />
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="heading-xl">Get in touch</h2>
            <p className="text-body-soft mt-4 sm:text-lg">
              Our team is ready to help you with your industrial requirements.
            </p>

            <div className="mt-6 space-y-3 text-body-soft">
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong> info@sakurapipe.com
              </p>
              <p>
                <strong>Address:</strong> Industrial Area, Your City
              </p>
            </div>
          </div>

          <form className="premium-card p-6">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl border border-border px-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-12 rounded-xl border border-border px-4"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="rounded-xl border border-border px-4 py-3"
              />
              <button className="rounded-xl bg-primary py-3 font-semibold text-white hover:bg-accent">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
