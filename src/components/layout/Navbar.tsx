"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { contactDetails } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Products", href: "/#products" },
  { label: "The VVJ Advantage", href: "/#advantage" },
  { label: "Contact/Inquire", href: "/#inquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useLightText = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* BEGIN: Global Navigation Bar */}
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 h-[82px] transition-all duration-300",
          scrolled || !isHome ? "glass-nav" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[5%]">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/vvj-navbar-logo.png"
              alt="VVJ International & Logistics logo"
              width={58}
              height={58}
              className="h-16 w-16 shrink-0 object-contain"
              priority
            />
            <span
              className={cn(
                "block truncate font-sans text-base font-extrabold uppercase leading-normal tracking-[0.12em]",
                useLightText ? "text-white" : "text-slate-950"
              )}
            >
              VVJ International & Logistics
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                    useLightText ? "text-white/74 hover:text-white" : "text-slate-600 hover:text-slate-950"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp Business"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-300",
                useLightText
                  ? "border-white/24 text-white hover:bg-white hover:text-slate-950"
                  : "border-slate-200 text-emerald-700 hover:border-emerald-700 hover:bg-emerald-50"
              )}
            >
              <MessageCircle size={18} />
            </a>
            <Link
              href="/#inquire"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300",
                useLightText
                  ? "border border-white bg-white text-slate-950 hover:border-emerald-700 hover:bg-emerald-700 hover:text-slate-100"
                  : "border border-slate-950 bg-slate-950 text-white hover:border-emerald-700 hover:bg-emerald-700"
              )}
            >
              Get Bulk Quote
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-md border transition-all duration-300 lg:hidden",
              useLightText ? "border-white/24 text-white" : "border-slate-200 text-slate-950"
            )}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm transition-opacity lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed bottom-0 right-0 top-0 z-50 flex w-[86vw] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-[82px] items-center justify-between border-b border-slate-200 px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/vvj-navbar-logo.png"
              alt="VVJ International & Logistics logo"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 object-contain"
              priority
            />
            <div className="min-w-0">
              <span className="block truncate font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-slate-950">
                VVJ International
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                & Logistics
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-slate-100 py-4 text-sm font-bold uppercase tracking-[0.12em] text-slate-800 transition-all duration-300 hover:text-emerald-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 border-t border-slate-200 p-6">
          <Link href="/#inquire" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
            Get Bulk Quote
          </Link>
          <a
            href={contactDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </aside>
      {/* END: Global Navigation Bar */}
    </>
  );
}
