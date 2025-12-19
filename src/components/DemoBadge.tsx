import { cn } from "@/lib/utils";

interface DemoBadgeProps {
  variant?: "light" | "dark";
  className?: string;
}

export function DemoBadge({ variant = "light", className }: DemoBadgeProps) {
  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 px-3 py-1 text-xs font-medium tracking-widest rounded-full",
        variant === "light"
          ? "bg-foreground/10 text-foreground/60"
          : "bg-white/10 text-white/60",
        className
      )}
    >
      DEMO
    </div>
  );
}
