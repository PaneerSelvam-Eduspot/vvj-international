import { Metadata } from "next";
import SectionTag from "@/components/ui/SectionTag";
import { Target, Eye } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { contactDetails } from "@/lib/contact";

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
            <h2 className="font-serif text-3xl font-semibold mb-6">About Our Company</h2>

            <p className="text-vvj-muted text-[15px] leading-relaxed mb-5">
              Based in Kovilpatti, Tamil Nadu, VVJ International & Logistics is an
              established merchant exporter specializing in premium agricultural
              commodities, food products, and traditional peanut candy. As an APEDA-registered enterprise, we
              bridge the gap between India&apos;s rich agricultural sectors and
              commercial buyers, offering end-to-end domestic shipping, international
              supply chain, and shipment management.
            </p>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Corporate Heritage</h3>
            <p className="text-vvj-muted text-[15px] leading-relaxed mb-5">
              Our foundational expertise in the food sector dates back to 1962. For
              over six decades, our group has maintained a dominant market presence
              and an untarnished brand reputation in the regional food processing
              industry, with particular expertise in Kovilpatti peanut candy. Today, we translate this extensive technical knowledge,
              procurement experience, and manufacturing background into the global
              trade landscape, facilitating seamless international transactions for
              corporate clients worldwide.
            </p>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Core Strategic Advantages</h3>
            <ul className="list-disc ml-5 text-vvj-muted text-[15px] leading-relaxed mb-5">
              <li className="mb-2"><strong>Quality Assurance:</strong> We enforce stringent quality control protocols at procurement, processing, and packaging phases to meet strict international food safety standards.</li>
              <li className="mb-2"><strong>Logistical Efficiency:</strong> Our strategic proximity to the Tuticorin (Thoothukudi) Deepwater Port supports domestic shipping, rapid customs clearance, optimized shipping schedules, and minimized transit durations.</li>
              <li className="mb-2"><strong>Sustainable Sourcing:</strong> We operate a transparent, eco-friendly supply chain that supports regional agricultural communities while securing supply continuity for buyers.</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold mt-6 mb-3">Export Portfolio</h3>
            <ul className="list-disc ml-5 text-vvj-muted text-[15px] leading-relaxed mb-6">
              <li>Fresh Produce: Premium fruits and vegetables, harvested and climate-controlled to maximize container shelf life.</li>
              <li>Spices: Pure, export-grade whole and ground Indian spices processed under hygienic conditions.</li>
              <li>Value-Added Food Products: Traditional Kovilpatti Peanut Candy (Kadalai Mittai), our core speciality, manufactured using authenticated recipes, clean ingredients, and high-barrier export packaging.</li>
            </ul>

            <div className="p-6 border border-emerald-border bg-surface">
              <h4 className="font-serif text-lg font-semibold mb-3">Commercial Enquiries</h4>
              <p className="text-sm text-vvj-muted leading-relaxed mb-2">We welcome partnerships with wholesalers, distributors, and retail chains. Contact our trade desk to request peanut candy specifications, certificate compliance data, domestic shipping support, or freight quotes.</p>
              <p className="text-sm text-vvj-text"><strong>Trade Desk (Call / WhatsApp):</strong> {contactDetails.phoneDisplay}</p>
              <p className="text-sm text-vvj-text mt-1"><strong>Operations Hub:</strong> {contactDetails.location}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 border border-vvj-border bg-surface">
              <Eye size={28} strokeWidth={1} className="text-emerald-mid mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-sm text-vvj-muted leading-relaxed">To be the most trusted name in Indian agricultural exports, known not just for the volume we move, but for the integrity with which we move it.</p>
            </div>
            <div className="p-8 border border-vvj-border bg-surface">
              <Target size={28} strokeWidth={1} className="text-emerald-mid mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-sm text-vvj-muted leading-relaxed">To connect India&apos;s best farmers and processors with global buyers through a supply chain built on certified quality, reliable logistics, and honest pricing.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
