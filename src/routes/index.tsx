import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, HardHat, Camera, ClipboardCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import officesImg from "@/assets/offices.jpg";
import apartmentsImg from "@/assets/apartments.jpg";
import pcImg from "@/assets/post-construction.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit Pro Clean — Commercial Cleaning at Its Peak" },
      { name: "description", content: "Reach the peak of clean. Janitorial, post-construction, and recurring cleaning services for commercial buildings." },
      { property: "og:title", content: "Summit Pro Clean — Commercial Cleaning at Its Peak" },
      { property: "og:description", content: "Janitorial, post-construction, and recurring cleaning for commercial buildings." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Modern clean office at dusk" className="h-full w-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>
        <div className="container-x relative grid min-h-[88vh] place-items-center py-24">
          <div className="max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Commercial Cleaning Specialists
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Reach the <span className="text-primary text-glow">peak</span> of clean.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Summit Pro Clean delivers detail-obsessed janitorial and post-construction
              services to office towers, apartment communities, and commercial properties.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Request a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-7 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition hover:border-primary/60"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[
            ["Atlanta", "Serving the Metro Area"],
            ["$2M", "Liability Coverage"],
            ["Detail Driven", "QC on Every Visit"],
            ["Custom Plans", "Built Around You"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-4xl font-black text-primary md:text-5xl">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE CLEAN */}
      <section className="container-x py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What we clean</span>
            <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">Built for commercial properties.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Building2, title: "Office Buildings", img: officesImg, desc: "Daily and nightly janitorial programs for corporate floors and high-rises." },
            { icon: Home, title: "Apartment Communities", img: apartmentsImg, desc: "Common areas, hallways, gyms, and amenity spaces kept resident-ready." },
            { icon: HardHat, title: "Post-Construction", img: pcImg, desc: "Rough, final, and touch-up cleans turning new builds into move-in ready spaces." },
          ].map(({ icon: Icon, title, img, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/60" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-3 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="container-x py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Why Summit</span>
              <h2 className="mt-3 font-display text-4xl font-black md:text-6xl">Detail at altitude.</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                We treat every property like a flagship. Vetted crews, supervised
                checklists, and modern equipment — so your tenants and clients walk
                into spotless space, every single day.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Camera, t: "Photo Documented", d: "Every job is photographed for accountability and QC review." },
                { icon: ClipboardCheck, t: "Checklist Driven", d: "Structured walkthroughs ensure nothing is missed." },
                { icon: Sparkles, t: "Quality You Can Audit", d: "Digital checklists and documented results you can review." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <Icon className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-display text-lg font-bold">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card to-background p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-black md:text-5xl">Ready for a cleaner building?</h2>
              <p className="mt-3 text-muted-foreground md:text-lg">Get a free walkthrough and custom quote.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
