"use client";

import { BadgeCheck, Flag, Landmark, Leaf, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Leaf, label: "APEDA Certified" },
  { icon: ShieldCheck, label: "FSSAI Approved" },
  { icon: Landmark, label: "Spices Board of India" },
  { icon: BadgeCheck, label: "IEC Holder (DGFT)" },
  { icon: Flag, label: "Make In India" },
];

export default function StatsBar() {
  return (
    <>
      {/* BEGIN: Certification & Trust Banner */}
      <section className="border-b border-slate-200 bg-white px-[5%] py-6">
        <div className="max-content">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="group flex min-h-24 items-center justify-center gap-3 rounded-md border border-slate-100 bg-slate-50 px-4 py-4 opacity-70 grayscale transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:opacity-100 hover:grayscale-0"
                >
                  <Icon size={22} className="text-slate-500 transition-all duration-300 group-hover:text-emerald-700" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-600 transition-all duration-300 group-hover:text-slate-950">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* END: Certification & Trust Banner */}
    </>
  );
}
