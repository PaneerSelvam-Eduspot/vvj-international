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
      <div className="pt-40 pb-20 px-[5%] bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products/fruits/mango"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500 hover:text-emerald-700 transition-colors mb-6"
          >
            <ArrowLeft size={12} /> Back to Fruits / Mango
          </Link>
          <SectionTag>Fruits / Mango Variety</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2 text-slate-950">
            {variety.name}
          </h1>
          <p className="text-emerald-700 text-[11px] font-bold tracking-[0.16em] uppercase mt-3">
            {variety.origin}
          </p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-10">
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
                <div key={row.label} className="grid grid-cols-2 gap-4 py-4 border-b border-slate-200">
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-500">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-slate-800">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-8">
            <h3 className="font-serif text-xl font-semibold mb-6 text-slate-950">
              Enquire About {variety.name.split(" ")[0]}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Interested in sourcing {variety.name}? Send us your destination
              port, quantity requirement and preferred packaging — we&apos;ll get back
              to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="block w-full rounded-md bg-slate-950 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-emerald-700"
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
