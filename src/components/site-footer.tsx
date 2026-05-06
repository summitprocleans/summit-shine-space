import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Summit Pro Clean" className="h-12 w-12 object-contain" />
            <span className="font-display text-xl font-bold tracking-wide">Summit Pro Clean</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Reaching the peak of clean — commercial janitorial services for offices, multi-family
            properties, and post-construction sites.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-primary">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="text-foreground/80 hover:text-primary">Services</Link></li>
            <li><Link to="/industries" className="text-foreground/80 hover:text-primary">Industries</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest text-primary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> (555) 010-2024</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@summitproclean.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Serving the metro area</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Summit Pro Clean. All rights reserved.</p>
          <p>Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
