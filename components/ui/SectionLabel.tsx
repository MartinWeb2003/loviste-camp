import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.25em] mb-4 inline-flex items-center gap-3",
        light ? "text-white/50" : "text-[--color-sea]",
        className
      )}
    >
      <span className={cn("w-8 h-px", light ? "bg-white/30" : "bg-[--color-sea]")} />
      {children}
    </p>
  );
}
