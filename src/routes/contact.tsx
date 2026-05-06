import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Summit Pro Clean" },
      { name: "description", content: "Request a free walkthrough and quote for your commercial property." },
      { property: "og:title", content: "Contact — Summit Pro Clean" },
      { property: "og:description", content: "Free walkthrough and quote within 48 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border/60 bg-card/30">
        <div className="container-x py-20 md:py-28">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Contact</span>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">Get a quote.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us about your property. We'll schedule a walkthrough and get you a custom proposal within 48 hours.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-10 py-20 md:grid-cols-3">
        <div className="space-y-6 md:col-span-1">
          {[
            { icon: Phone, t: "Call", d: "(555) 010-2024" },
            { icon: Mail, t: "Email", d: "hello@summitproclean.com" },
            { icon: MapPin, t: "Service Area", d: "Metro area + surrounding counties" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-5 rounded-2xl border border-border bg-card p-8 md:col-span-2"
        >
          {sent ? (
            <div className="py-12 text-center">
              <h3 className="font-display text-3xl font-black text-primary">Thanks!</h3>
              <p className="mt-3 text-muted-foreground">We received your request and will reach out shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Property Address" name="address" />
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Property Type</label>
                <select required className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                  <option>Office building</option>
                  <option>Apartment community</option>
                  <option>Post-construction</option>
                  <option>Other commercial</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tell us about the project</label>
                <textarea rows={5} className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" placeholder="Square footage, frequency, current pain points…" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
              >
                Send Request <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
