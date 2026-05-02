"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

export default function ProductsGrid() {
  return (
    <section style={{ background: "var(--surface)" }}>
      <div className="max-content section-padding">

        {/* Section header — UMA style */}
        <div className="text-center mb-14">
          <span className="label-tag">What We Offer</span>
          <h2
            className="font-serif font-semibold"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Our{" "}
            <span style={{ color: "var(--emerald-mid)" }}>Products</span>
          </h2>
        </div>

        {/* Products grid — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-line-reveal card-surface group flex flex-col"
              style={{ padding: "2.5rem 2rem" }}
            >
              {/* Image */}
              <div className="relative mb-7 h-44 overflow-hidden border border-vvj-border">
                <Image
                  src={product.image}
                  alt={`${product.name} export quality`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,28,20,0.45) 0%, rgba(11,28,20,0.05) 55%, transparent 100%)",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-serif font-semibold mb-3 transition-colors duration-300"
                style={{
                  fontSize: "22px",
                  color: "var(--text)",
                }}
              >
                {product.name}
              </h3>

              {/* Tagline */}
              <p
                className="text-[10px] tracking-[2px] uppercase mb-4"
                style={{ color: "var(--emerald-mid)" }}
              >
                {product.tagline}
              </p>

              {/* Description */}
              <p
                className="text-[13px] leading-relaxed mb-5 flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                {product.description.slice(0, 110)}...
              </p>

              {/* Mango variety pills */}
              {product.varieties && (
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.varieties.slice(0, 2).map((v) => (
                    <span key={v.slug} className="variety-pill">
                      {v.name.split(" ")[0]}
                    </span>
                  ))}
                  <span className="variety-pill" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    +{product.varieties.length - 2} more
                  </span>
                </div>
              )}

              {/* Learn More — UMA style */}
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 mt-auto text-[11px] tracking-[2px] uppercase transition-all duration-300 group-hover:gap-3"
                style={{ color: "var(--emerald-mid)" }}
              >
                Learn More
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}