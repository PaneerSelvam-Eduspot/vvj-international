import { Metadata } from "next";
import SectionTag from "@/components/ui/SectionTag";
import { Target, Eye } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="pt-40 pb-20 px-[5%] bg-surface border-b border-vvj-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Our Story</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            About <em className="italic text-emerald-mid">VVJ International</em>
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl font-semibold mb-6">
              By the Crew of Jeyaraj
            </h2>
            <p className="text-vvj-muted text-[15px] leading-relaxed mb-5">
              VVJ International & Logistics was founded with a singular mission —
              to bring India&apos;s finest agricultural produce to global buyers with
              transparency, consistency and pride.
            </p>
            <p className="text-vvj-muted text-[15px] leading-relaxed mb-5">
              Backed by the Jeyaraj family legacy, we operate from Tamil Nadu —
              one of India&apos;s key agricultural hubs — with sourcing networks
              spanning Maharashtra, Gujarat, Andhra Pradesh, Karnataka and Uttar Pradesh.
            </p>
            <p className="text-vvj-muted text-[15px] leading-relaxed">
              Every product we export carries our name. That&apos;s not a formality
              — it&apos;s our quality guarantee.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 border border-vvj-border bg-surface">
              <Eye size={28} strokeWidth={1} className="text-emerald-mid mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-sm text-vvj-muted leading-relaxed">
                To be the most trusted name in Indian agricultural exports — known
                not just for the volume we move, but for the integrity with which
                we move it.
              </p>
            </div>
            <div className="p-8 border border-vvj-border bg-surface">
              <Target size={28} strokeWidth={1} className="text-emerald-mid mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-sm text-vvj-muted leading-relaxed">
                To connect India&apos;s best farmers and processors with global buyers
                through a supply chain built on certified quality, reliable
                logistics, and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}