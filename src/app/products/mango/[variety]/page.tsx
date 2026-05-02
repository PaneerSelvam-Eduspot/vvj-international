import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import { getVarietyBySlug, mangoVarieties } from "@/lib/products";
import ContactCTA from "@/components/sections/ContactCTA";

export async function generateStaticParams() {
  return mangoVarieties.map((v) => ({ variety: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variety: string }>;
}): Promise<Metadata> {
  const { variety: varietySlug } = await params;
  const variety = getVarietyBySlug(varietySlug);
  return { title: variety ? `${variety.name} Mango Export` : "Mango Variety" };
}

export default async function VarietyPage({
  params,
}: {
  params: Promise<{ variety: string }>;
}) {
  const { variety: varietySlug } = await params;
  const variety = getVarietyBySlug(varietySlug);
  if (!variety) notFound();

  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-surface border-b border-vvj-border">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products/mango"
            className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-vvj-muted hover:text-emerald-mid transition-colors mb-6"
          >
            <ArrowLeft size={12} /> Back to Mango
          </Link>
          <SectionTag>Mango Variety</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            {variety.name}
          </h1>
          <p className="text-emerald-mid text-[11px] tracking-[3px] uppercase mt-3">
            {variety.origin}
          </p>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-vvj-muted text-[15px] leading-relaxed mb-10">
              {variety.description}
            </p>
            <div className="space-y-5">
              {[
                { label: "Origin",          value: variety.origin },
                { label: "Season",          value: variety.season },
                { label: "Taste Profile",   value: variety.taste },
                { label: "Export Spec",     value: variety.exportSpec },
                { label: "Packaging",       value: variety.packaging },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-2 gap-4 py-4 border-b border-vvj-border">
                  <span className="text-[11px] tracking-[2px] uppercase text-vvj-muted">
                    {row.label}
                  </span>
                  <span className="text-sm text-vvj-text">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-emerald-border bg-surface h-fit">
            <h3 className="font-serif text-xl font-semibold mb-6 text-emerald-mid">
              Enquire About {variety.name.split(" ")[0]}
            </h3>
            <p className="text-sm text-vvj-muted leading-relaxed mb-6">
              Interested in sourcing {variety.name}? Send us your destination
              port, quantity requirement and preferred packaging — we&apos;ll get back
              to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="block w-full text-center py-3.5 bg-emerald text-vvj-text text-[11px] tracking-[2.5px] uppercase hover:bg-emerald-mid transition-colors"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}