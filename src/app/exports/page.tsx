import { Metadata } from "next";
import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import { exportCountries } from "@/lib/countries";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = { title: "Export Markets" };

const regions = [...new Set(exportCountries.map((c) => c.region))];

export default function ExportsPage() {
  return (
    <>
      <div className="pt-40 pb-20 px-[5%] bg-surface border-b border-vvj-border">
        <div className="max-w-7xl mx-auto">
          <SectionTag>Global Reach</SectionTag>
          <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-semibold leading-none mt-2">
            Our Export <em className="italic text-emerald-mid">Markets</em>
          </h1>
        </div>
      </div>

      <section className="section-padding bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-72 mb-12 overflow-hidden border border-vvj-border">
            <Image
              src="https://source.unsplash.com/1600x900/?shipping,containers,port,logistics"
              alt="Global agricultural shipping logistics"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,28,20,0.55) 0%, rgba(11,28,20,0.1) 55%, transparent 100%)",
              }}
            />
          </div>
          <p className="text-vvj-muted text-[15px] leading-relaxed max-w-2xl mb-16">
            VVJ International currently exports to {exportCountries.length}+
            destinations across Asia, the Middle East, Africa and Oceania. We
            ship via major Indian ports — Chennai, Mumbai, Mundra and Nhava Sheva.
          </p>

          {/* Region groups */}
          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region}>
                <h3 className="text-[10px] tracking-[4px] uppercase text-emerald-mid mb-6 pb-3 border-b border-emerald-border">
                  {region}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {exportCountries
                    .filter((c) => c.region === region)
                    .map((country) => (
                      <div
                        key={country.name}
                        className="flex items-center gap-3 p-4 border border-vvj-border bg-surface"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-mid flex-shrink-0" />
                        <span className="text-sm text-vvj-text">
                          {country.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Ports */}
          <div className="mt-20 p-10 border border-vvj-border bg-surface">
            <h3 className="font-serif text-2xl font-semibold mb-8">
              Shipping Ports We Operate From
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Chennai Port", "Mumbai Port", "Mundra Port", "Nhava Sheva"].map(
                (port) => (
                  <div key={port} className="text-center py-6 border border-vvj-border">
                    <span className="font-serif text-lg text-emerald-mid block">
                      {port}
                    </span>
                    <span className="text-[10px] tracking-[2px] uppercase text-vvj-muted mt-1 block">
                      India
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}