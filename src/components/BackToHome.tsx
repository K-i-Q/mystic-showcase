import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BackToHomeProps {
  variant?: "light" | "dark";
  className?: string;
}

export function BackToHome({ variant = "light", className }: BackToHomeProps) {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-colors",
        variant === "light"
          ? "text-foreground/60 hover:text-foreground"
          : "text-white/60 hover:text-white",
        className
      )}
    >
      <ArrowLeft className="w-4 h-4" />
      Voltar às demos
    </Link>
  );
}
