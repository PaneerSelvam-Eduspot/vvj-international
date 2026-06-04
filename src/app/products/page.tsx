import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { productsByCategory } from "@/lib/products";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "Our Products" };

export default function ProductsPage() {
  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionTag>What We Export</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2 text-slate-950">
            Our <em className="italic text-emerald-700">Products</em>
          </h1>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsByCategory.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              className="group rounded-lg border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="relative h-52 mb-6 overflow-hidden rounded-md bg-slate-100">
                <Image src={product.image} alt={product.name} fill className="object-cover transition-all duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-emerald-700 block mb-3">
                {product.category} / {product.tagline}
              </span>
              <h2 className="font-serif text-3xl font-semibold mb-4 text-slate-950 group-hover:text-emerald-700 transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2 mb-8">
                {product.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-emerald-700 group-hover:gap-3 transition-all">
                View Full Details <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
