import { Metadata } from "next";
import Image from "next/image";

import SectionTag from "@/components/ui/SectionTag";
import { getProductBySlug } from "@/lib/products";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "Peanut Candy Export" };

export default function PeanutCandyPage() {
  const product = getProductBySlug("peanut-candy")!;
  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-black border-b border-gold-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag color="gold">Export Product</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            {product.name}
          </h1>
          <p className="text-gold text-[11px] tracking-[3px] uppercase mt-3">
            {product.tagline}
          </p>
        </div>
      </div>

      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="relative h-64 mb-8 overflow-hidden border border-gold-border/70">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <p className="text-vvj-muted text-[15px] leading-relaxed mb-8">
              {product.description}
            </p>
            <h3 className="font-serif text-xl font-semibold mb-5">
              Product Highlights
            </h3>
            <ul className="space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-vvj-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 border border-gold-border bg-surface h-fit">
            <h3 className="font-serif text-xl font-semibold mb-6 text-gold">
              Request a Quote
            </h3>
            <p className="text-sm text-vvj-muted leading-relaxed mb-6">
              Interested in private label or bulk orders? Send us your specs and
              we&apos;ll respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="block w-full text-center py-3.5 bg-gold text-black text-[11px] tracking-[2.5px] uppercase hover:bg-gold-light transition-colors"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
