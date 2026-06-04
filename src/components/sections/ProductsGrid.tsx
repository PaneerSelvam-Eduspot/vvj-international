"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Premium Indian Red Onions",
    image: "/images/onion.jpg",
    href: "/products/vegetables/onion",
    specs: ["Sizes: 45mm+ / 55mm+", "Packaging: 25kg Mesh Bags"],
  },
  {
    title: "Export Grade Peanuts",
    image: "/images/peanut-20260519.jpg",
    href: "/products/nuts/peanut",
    specs: ["Type: Bold / Java", "Count: 50/60, 60/70", "Quality: Aflatoxin Controlled"],
  },
  {
    title: "Fresh Indian Mangoes",
    image: "/images/mango.jpg",
    href: "/products/fruits/mango",
    specs: ["Varieties: Alphonso, Kesar, Banganapalli", "Packing: Export Cartons", "Mode: Air / Sea Freight"],
  },
  {
    title: "Specialist Peanut Candy / Chikki",
    image: "/images/peanut-candy.jpg",
    href: "/products/confectionery/peanut-candy",
    specs: ["Core Specialty: Traditional Peanut Candy", "Packaging: Export-Grade Bulk Cartons"],
  },
];

export default function ProductsGrid() {
  return (
    <>
      {/* BEGIN: B2B Product Catalog Grid */}
      <section id="products" className="bg-slate-50">
      <div className="max-content section-padding">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <span className="label-tag">B2B Product Catalog</span>
            <h2 className="heading-lg mt-5">Core export commodities for bulk international buyers.</h2>
          </div>
          <p className="max-w-2xl text-base lg:justify-self-end">
            Every product card highlights commercial specifications first, so buyers can quickly assess fit before
            requesting an RFQ.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex min-h-[510px] flex-col rounded-lg border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl">{product.title}</h3>

                <div className="mt-5 rounded-md border border-slate-100 bg-slate-50">
                  {product.specs.map((spec) => (
                    <div key={spec} className="border-b border-slate-100 px-4 py-3 last:border-b-0">
                      <p className="m-0 text-sm font-semibold leading-6 text-slate-700">{spec}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-[0.12em] text-emerald-700 transition-all group-hover:gap-3"
                >
                  Get Specifications & Quote
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </section>
      {/* END: B2B Product Catalog Grid */}
    </>
  );
}
