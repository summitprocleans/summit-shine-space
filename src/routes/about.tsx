import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mountain, MapPin, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Summit Pro Clean" },
      { name: "description", content: "Summit Pro Clean is a commercial janitorial company built on consistency, accountability, and detail." },
      { property: "og:title", content: "About — Summit Pro Clean" },
      { property: "og:description", content: "A commercial cleaning company built on consistency and detail." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card/30">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About</span>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">Built for the climb.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Summit Pro Clean was founded on a simple idea — commercial cleaning should be held
            to the same standard as the buildings it serves.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:items-start">
        <div className="space-y-5 text-foreground/90">
          <p>
            We started Summit Pro Clean because too many property managers and general contractors
            are stuck with cleaning companies that don't show up consistently, don't communicate,
            and don't take ownership of their results. We built something different.
          </p>
          <p>
            We work directly with general contractors, developers, and property managers who need
            detail-driven results — on time, every phase, every job. No shortcuts. No excuses.
          </p>
          <p>
            Every property gets a custom scope of work, direct communication with our team, and
            documented quality control on every visit. When something falls short of the agreed
            standard we come back and make it right — no questions asked.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { icon: Mountain, t: "Standard above the rest", d: "We benchmark against five-star hospitality standards — not the cleaning industry average." },
            { icon: MapPin, t: "Atlanta Based", d: "Locally owned and operated. Serving the greater Atlanta metro area with crews who know the market." },
            { icon: Award, t: "Accountability Built In", d: "Every job is photographically documented. QC checklists completed on every visit. Issues resolved before the client has to ask." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <Icon className="h-7 w-7 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-xl font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl border border-primary/40 bg-card/50 p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-black md:text-5xl">Let's clean your building.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
