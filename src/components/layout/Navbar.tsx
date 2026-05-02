"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const productLinks = [
  { label: "Onion",        href: "/products/onion",        desc: "Premium export grade" },
  { label: "Peanut",       href: "/products/peanut",       desc: "Java type, aflatoxin tested" },
  { label: "Peanut Candy", href: "/products/peanut-candy", desc: "Traditional chikki" },
  { label: "Mango",        href: "/products/mango",        desc: "5 premium varieties" },
];

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Exports",  href: "/exports" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname   = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isProductsActive = pathname.startsWith("/products");

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav h-16" : "bg-transparent h-20"
        )}
        style={{ transition: "height 0.4s ease, background 0.4s ease, opacity 0.3s ease" }}
      >
        <div className="max-w-7xl mx-auto px-[5%] h-full flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col leading-none group z-10">
            <span
              className="font-serif text-[20px] font-semibold tracking-[3px] transition-colors duration-300"
              style={{ color: "var(--gold)" }}
            >
              VVJ
              <span
                className="ml-2 transition-colors duration-300"
                style={{ color: "var(--text)" }}
              >
                International
              </span>
            </span>
            <span
              className="text-[8px] tracking-[4px] uppercase mt-1 transition-colors duration-300"
              style={{ color: "var(--text-muted)" }}
            >
              By the Crew of Jeyaraj
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.hasDropdown
                ? isProductsActive
                : pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <li key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 text-[11px] tracking-[2px] uppercase transition-colors duration-200",
                        isActive
                          ? "text-[color:var(--emerald-mid)]"
                          : "text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className="transition-transform duration-300"
                        style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>

                    {/* Active dot */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "var(--emerald-mid)" }}
                      />
                    )}

                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-50",
                        "transition-all duration-300 origin-top",
                        dropdownOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                      )}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(82,183,136,0.08)",
                      }}
                    >
                      {/* Dropdown header */}
                      <div
                        className="px-5 py-3 border-b"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span
                          className="text-[9px] tracking-[3px] uppercase"
                          style={{ color: "var(--emerald-mid)" }}
                        >
                          Our Products
                        </span>
                      </div>

                      {/* Product links */}
                      <div className="py-2">
                        {productLinks.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className={cn(
                              "flex items-start gap-3 px-5 py-3 group/item transition-all duration-200",
                              pathname === p.href
                                ? "bg-[rgba(82,183,136,0.08)]"
                                : "hover:bg-[rgba(82,183,136,0.05)]"
                            )}
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0 transition-colors duration-200"
                              style={{
                                background: pathname === p.href
                                  ? "var(--emerald-mid)"
                                  : "var(--text-muted)"
                              }}
                            />
                            <div>
                              <div
                                className="text-[12px] font-medium transition-colors duration-200"
                                style={{
                                  color: pathname === p.href
                                    ? "var(--emerald-mid)"
                                    : "var(--text)",
                                  fontFamily: "var(--font-dm-sans)"
                                }}
                              >
                                {p.label}
                              </div>
                              <div
                                className="text-[11px] mt-0.5"
                                style={{ color: "var(--text-muted)" }}
                              >
                                {p.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* View all */}
                      <div
                        className="px-5 py-3 border-t"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <Link
                          href="/products"
                          className="flex items-center gap-2 text-[10px] tracking-[2px] uppercase transition-colors duration-200 group/all"
                          style={{ color: "var(--emerald-mid)" }}
                        >
                          View All Products
                          <ArrowRight
                            size={11}
                            className="transition-transform duration-200 group-hover/all:translate-x-1"
                          />
                        </Link>
                      </div>

                      {/* Dropdown arrow */}
                      <div
                        className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45"
                        style={{
                          background: "var(--surface)",
                          borderTop: "1px solid var(--border)",
                          borderLeft: "1px solid var(--border)",
                        }}
                      />
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-2 text-[11px] tracking-[2px] uppercase transition-colors duration-200",
                      isActive
                        ? "text-[color:var(--emerald-mid)]"
                        : "text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {/* Active dot */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--emerald-mid)" }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[11px] tracking-[1.5px] uppercase transition-all duration-200"
              style={{ color: "#25d366" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn-outline text-[10px] py-2 px-5"
            >
              Get In Touch
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-200"
            style={{ color: "var(--text)" }}
            aria-label="Toggle menu"
          >
            <span
              className="absolute transition-all duration-300"
              style={{ opacity: menuOpen ? 1 : 0, transform: menuOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)" }}
            >
              <X size={22} />
            </span>
            <span
              className="absolute transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}
            >
              <Menu size={22} />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(9, 18, 11, 0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-40 md:hidden w-[80vw] max-w-sm",
          "flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          background: "var(--surface)",
          borderLeft: "1px solid var(--border)",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.5)"
        }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-7 pt-8 pb-6 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-col">
            <span
              className="font-serif text-lg font-semibold tracking-[2px]"
              style={{ color: "var(--gold)" }}
            >
              VVJ International
            </span>
            <span
              className="text-[8px] tracking-[3px] uppercase mt-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              By the Crew of Jeyaraj
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const isActive = link.hasDropdown
                ? isProductsActive
                : pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between py-3.5 text-[13px] tracking-[2px] uppercase transition-all duration-200",
                      "border-b",
                      isActive
                        ? "text-[color:var(--emerald-mid)]"
                        : "text-[color:var(--text-muted)] hover:text-[color:var(--text)]"
                    )}
                    style={{
                      borderColor: "var(--border)",
                      animationDelay: `${i * 60}ms`,
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--emerald-mid)" }}
                      />
                    )}
                  </Link>

                  {/* Mobile product submenu */}
                  {link.hasDropdown && (
                    <div className="pl-3 mt-1 mb-2 space-y-1">
                      {productLinks.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="flex items-center gap-2 py-2 text-[11px] tracking-[1.5px] uppercase transition-colors duration-200"
                          style={{
                            color: pathname === p.href
                              ? "var(--emerald-mid)"
                              : "var(--text-muted)"
                          }}
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "var(--emerald-border)" }}
                          />
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Panel footer */}
        <div
          className="px-7 py-6 border-t space-y-3"
          style={{ borderColor: "var(--border)" }}
        >
          <Link
            href="/contact"
            className="btn-primary w-full justify-center text-[10px]"
          >
            Send Enquiry
          </Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 text-[11px] tracking-[2px] uppercase transition-colors duration-200"
            style={{
              border: "1px solid rgba(37,211,102,0.25)",
              color: "#25d366"
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}