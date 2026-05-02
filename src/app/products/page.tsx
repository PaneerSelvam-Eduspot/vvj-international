import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { products } from "@/lib/products";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "Our Products" };

export default function ProductsPage() {
  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-surface border-b border-vvj-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag>What We Export</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            Our <em className="italic text-emerald-mid">Products</em>
          </h1>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group p-10 border border-vvj-border bg-surface hover:bg-surface-2 hover:border-emerald-border transition-all"
            >
              <div className="relative h-52 mb-6 overflow-hidden border border-vvj-border">
                <Image
                  src={product.image}
                  alt={`${product.name} export`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,28,20,0.45) 0%, rgba(11,28,20,0.08) 55%, transparent 100%)",
                  }}
                />
              </div>
              <span className="text-[10px] tracking-[3px] uppercase text-emerald-mid block mb-3">
                {product.tagline}
              </span>
              <h2 className="font-serif text-3xl font-semibold mb-4 group-hover:text-emerald-mid transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-vvj-muted leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2 mb-8">
                {product.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-vvj-muted">
                    <span className="w-1 h-1 rounded-full bg-emerald-mid flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-emerald-mid group-hover:gap-3 transition-all">
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