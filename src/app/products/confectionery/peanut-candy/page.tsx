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
      <div className="pt-40 pb-20 px-[5%] bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTag>{product.category}</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2 text-slate-950">
            {product.name}
          </h1>
          <p className="text-emerald-700 text-[11px] font-bold tracking-[0.16em] uppercase mt-3">
            {product.tagline}
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="relative h-64 mb-8 overflow-hidden rounded-lg bg-slate-100">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              {product.description}
            </p>
            <h3 className="font-serif text-xl font-semibold mb-5 text-slate-950">
              Product Highlights
            </h3>
            <ul className="space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 flex-shrink-0 mt-2" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h3 className="font-serif text-xl font-semibold mb-6 text-slate-950">
              Request a Quote
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Interested in private label, domestic supply, or bulk export orders?
              Send us your specs and we&apos;ll respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="block w-full rounded-md bg-slate-950 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-emerald-700"
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
