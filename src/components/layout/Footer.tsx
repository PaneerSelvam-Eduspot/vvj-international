import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/lib/contact";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/#products" },
  { label: "The VVJ Advantage", href: "/#advantage" },
  { label: "Contact/Inquire", href: "/#inquire" },
];

const services = [
  "Red Onions",
  "Peanuts",
  "Fresh Mangoes",
  "Specialist Peanut Candy / Chikki",
  "Domestic Shipping",
  "Freight Logistics",
  "Export Documentation",
];

export default function Footer() {
  return (
    <>
      {/* BEGIN: Footer Structure */}
      <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-[5%] py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="block font-sans text-base font-extrabold uppercase tracking-[0.12em]">
              VVJ International
            </span>
            <span className="mt-1 block font-sans text-base font-extrabold uppercase tracking-[0.12em]">
              & Logistics
            </span>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Premium agricultural exports, specialist peanut candy supply, and dependable domestic and global logistics.
            </p>
            <p className="mt-4 text-xs font-bold uppercase leading-6 tracking-[0.12em] text-slate-400">
              Corporate IEC references available for verified trade inquiries.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">Quick Navigation</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
              Commodities & Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
              Head Office Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-emerald-200" />
                <a href={`mailto:${contactDetails.email}`} className="transition-colors hover:text-white">
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-emerald-200" />
                <a href={`tel:${contactDetails.phoneTel}`} className="transition-colors hover:text-white">
                  {contactDetails.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-emerald-200" />
                {contactDetails.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="m-0">Copyright {new Date().getFullYear()} VVJ International & Logistics. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-all duration-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-trade" className="transition-all duration-300 hover:text-white">
              Terms of Trade
            </Link>
          </div>
        </div>
      </div>
      </footer>
      {/* END: Footer Structure */}
    </>
  );
}
