import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const productLinks = [
  { label: "Onion", href: "/products/onion" },
  { label: "Peanut", href: "/products/peanut" },
  { label: "Peanut Candy", href: "/products/peanut-candy" },
  { label: "Mango", href: "/products/mango" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Export Markets", href: "/exports" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-vvj-border">
      <div className="max-w-7xl mx-auto px-[5%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-xl font-semibold text-gold tracking-widest block mb-1">
              VVJ International & Logistics
            </span>
            <span className="text-[9px] tracking-[3px] uppercase text-vvj-muted block mb-5">
              By the Crew of Jeyaraj
            </span>
            <p className="text-sm text-vvj-muted leading-relaxed">
              Bridging India&apos;s premium agricultural produce to global markets.
              Rooted in integrity, driven by quality.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase text-emerald-mid mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-vvj-muted hover:text-vvj-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase text-emerald-mid mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-vvj-muted hover:text-vvj-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[3px] uppercase text-emerald-mid mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-vvj-muted">
                <Phone size={13} className="text-emerald-mid flex-shrink-0" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-3 text-sm text-vvj-muted">
                <Mail size={13} className="text-emerald-mid flex-shrink-0" />
                info@vvjexports.com
              </li>
              <li className="flex items-center gap-3 text-sm text-vvj-muted">
                <MapPin size={13} className="text-emerald-mid flex-shrink-0" />
                Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-vvj-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vvj-muted">
            © {new Date().getFullYear()} VVJ International & Logistics. All rights reserved.
          </p>
          <div className="w-10 h-px bg-gold opacity-40" />
          <p className="text-xs text-vvj-muted tracking-widest uppercase">
            By the Crew of Jeyaraj
          </p>
        </div>
      </div>
    </footer>
  );
}
