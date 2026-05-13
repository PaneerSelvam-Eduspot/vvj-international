import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { mangoVarieties, getProductBySlug } from "@/lib/products";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "Mango Export — All Varieties" };

export default function MangoPage() {
  const product = getProductBySlug("mango")!;
  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-black border-b border-gold-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag color="gold">Export Product</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            Mango
          </h1>
          <p className="text-gold text-[11px] tracking-[3px] uppercase mt-3">
            {product.tagline}
          </p>
        </div>
      </div>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-72 mb-10 overflow-hidden border border-gold-border/70">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="100vw" />
          </div>
          <p className="text-vvj-muted text-[15px] leading-relaxed max-w-2xl mb-16">
            {product.description}
          </p>

          <h2 className="font-serif text-3xl font-semibold mb-10">
            Available <em className="italic text-gold">Varieties</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-vvj-border">
            {mangoVarieties.map((variety) => (
              <Link
                key={variety.slug}
                href={`/products/mango/${variety.slug}`}
                className="group p-8 bg-surface hover:bg-surface-2 transition-colors"
              >
                <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-gold transition-colors">
                  {variety.name}
                </h3>
                <p className="text-[11px] tracking-[2px] uppercase text-gold mb-3">
                  {variety.origin}
                </p>
                <p className="text-sm text-vvj-muted leading-relaxed mb-2">
                  <span className="text-vvj-text">Season:</span> {variety.season}
                </p>
                <p className="text-sm text-vvj-muted leading-relaxed mb-5">
                  <span className="text-vvj-text">Taste:</span> {variety.taste}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-gold group-hover:gap-3 transition-all">
                  Full Specs <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}