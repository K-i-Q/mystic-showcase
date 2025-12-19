import { MessageCircle } from "lucide-react";
import { openWhatsApp, defaultMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppFloatingButtonProps {
  variant?: "green" | "dark";
  className?: string;
}

export function WhatsAppFloatingButton({ variant = "green", className }: WhatsAppFloatingButtonProps) {
  return (
    <button
      onClick={() => openWhatsApp(defaultMessage)}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95",
        variant === "green"
          ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
          : "bg-foreground text-background hover:bg-foreground/90",
        className
      )}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
