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
      <div className="pt-40 pb-20 px-[5%] bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTag>{product.category}</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2 text-slate-950">
            Mango
          </h1>
          <p className="text-emerald-700 text-[11px] font-bold tracking-[0.16em] uppercase mt-3">
            {product.tagline}
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-72 mb-10 overflow-hidden rounded-lg bg-slate-100">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="100vw" />
          </div>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-2xl mb-16">
            {product.description}
          </p>

          <h2 className="font-serif text-3xl font-semibold mb-10 text-slate-950">
            Available <em className="italic text-emerald-700">Varieties</em>
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mangoVarieties.map((variety) => (
              <Link
                key={variety.slug}
                href={`/products/fruits/mango/${variety.slug}`}
                className="group rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <h3 className="font-serif text-2xl font-semibold mb-2 text-slate-950 group-hover:text-emerald-700 transition-colors">
                  {variety.name}
                </h3>
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-emerald-700 mb-3">
                  {variety.origin}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  <span className="font-semibold text-slate-950">Season:</span> {variety.season}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  <span className="font-semibold text-slate-950">Taste:</span> {variety.taste}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-emerald-700 group-hover:gap-3 transition-all">
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
