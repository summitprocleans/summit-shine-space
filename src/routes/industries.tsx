import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import officesImg from "@/assets/offices.jpg";
import apartmentsImg from "@/assets/apartments.jpg";
import pcImg from "@/assets/post-construction.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Summit Pro Clean" },
      { name: "description", content: "Commercial cleaning programs for office buildings, apartment communities, and post-construction sites." },
      { property: "og:title", content: "Industries — Summit Pro Clean" },
      { property: "og:description", content: "Office, multi-family, and post-construction cleaning expertise." },
    ],
  }),
  component: IndustriesPage,
});

const items = [
  {
    img: officesImg,
    title: "Office Buildings",
    desc: "From single-tenant suites to multi-floor towers, we keep workspaces presentation-ready every morning. Our crews are trained on access protocols, after-hours security, and tenant-experience standards.",
    bullets: ["Nightly janitorial programs", "Day-porter coverage", "Restroom & breakroom care", "Glass partitions & touchpoints"],
  },
  {
    img: apartmentsImg,
    title: "Apartment Communities",
    desc: "Common areas drive resident retention. We manage lobbies, hallways, fitness centers, package rooms, and amenity decks — keeping every shared inch resident-ready.",
    bullets: ["Lobbies, halls, elevators", "Gym & amenity decks", "Trash room sanitation", "Move-in / move-out detail"],
  },
  {
    img: pcImg,
    title: "Post-Construction",
    desc: "We coordinate with GCs to deliver rough, final, and punch-list cleans on tight schedules. Dust, debris, fixtures, glass, and fine detail — done before walk-through.",
    bullets: ["Rough clean", "Final detail clean", "Touch-up before turnover", "Debris removal"],
  },
];

function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-card/30">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Industries</span>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">Specialists, not generalists.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We focus on the property types where consistency, scale, and detail matter most.
          </p>
        </div>
      </section>

      <section className="container-x space-y-20 py-20">
        {items.map((it, i) => (
          <div key={it.title} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-2xl border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={it.img} alt={it.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-black md:text-5xl">{it.title}</h2>
              <p className="mt-4 text-muted-foreground">{it.desc}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:underline">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
