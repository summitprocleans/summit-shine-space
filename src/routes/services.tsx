import { createFileRoute, Link } from "@tanstack/react-router";
import { Brush, Trash2, Sparkles, HardHat, Building2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Summit Pro Clean" },
      { name: "description", content: "Janitorial, post-construction, floor care, window cleaning, and specialty services for commercial properties." },
      { property: "og:title", content: "Services — Summit Pro Clean" },
      { property: "og:description", content: "Janitorial, post-construction, floor care, and specialty cleaning." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brush, title: "Recurring Janitorial", desc: "Nightly, weekly, or custom schedules. Restrooms, breakrooms, trash, vacuum, dust, sanitize." },
  { icon: HardHat, title: "Post-Construction Clean", desc: "Rough clean, final clean, and touch-up. Dust removal, glass, fixtures, and detail work." },
  { icon: Building2, title: "Common Area Care", desc: "Lobbies, hallways, elevators, gyms, and amenity spaces for multi-family communities." },
  { icon: Sparkles, title: "Window & Glass", desc: "Interior and low-rise exterior glass, partitions, and storefront detail cleaning." },
  { icon: Trash2, title: "Trash-Out & Hauling", desc: "Construction debris, junk removal, and post-event cleanup with same-week turnaround." },
  { icon: Sparkles, title: "Disinfection Services", desc: "EPA-listed electrostatic spraying for high-touch surfaces and shared spaces." },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card/30">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Services</span>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">Every surface. Every shift.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            One vendor for your whole cleaning program. Mix and match by floor, by building, or by season.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl border border-border bg-card/50 p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-black md:text-5xl">Don't see your service?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We custom-build cleaning programs around your property. Tell us what you need.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
