import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  color?: "emerald" | "gold";
}

export default function SectionTag({
  children,
  className,
  color = "emerald",
}: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] tracking-[4px] uppercase pb-3 border-b mb-4",
        color === "emerald"
          ? "text-emerald-mid border-emerald-border"
          : "text-gold border-gold-border",
        className
      )}
    >
      {children}
    </span>
  );
}