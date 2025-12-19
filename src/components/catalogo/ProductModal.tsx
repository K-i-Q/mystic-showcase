import { useState } from "react";
import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { openWhatsApp, generateProductMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const sizes = ["P", "M", "G"];
const colors = [
  { name: "Preto", value: "#000000" },
  { name: "Branco", value: "#FFFFFF" },
  { name: "Rosa", value: "#F472B6" },
];

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Preto");
  const [quantity, setQuantity] = useState(1);

  if (!product || !isOpen) return null;

  const handleBuy = () => {
    const message = generateProductMessage(product.nome, selectedSize, selectedColor, quantity);
    openWhatsApp(message);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-t-2xl md:rounded-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative">
          <img
            src={product.imagem}
            alt={product.nome}
            className="w-full aspect-[4/3] object-cover rounded-t-2xl md:rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {product.categoria}
            </span>
            <h2 className="font-display text-2xl mt-1">{product.nome}</h2>
            <p className="text-accent font-display text-3xl mt-2">
              R$ {product.preco.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-muted-foreground text-sm mt-2">{product.descricao}</p>
          </div>

          {/* Size selector */}
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Tamanho
            </label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-12 h-12 rounded-lg border font-medium transition-all",
                    selectedSize === size
                      ? "bg-foreground text-background border-foreground"
                      : "border-border hover:border-foreground/50"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color selector */}
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Cor: {selectedColor}
            </label>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={cn(
                    "w-10 h-10 rounded-full border-2 transition-all",
                    selectedColor === color.name
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-card"
                      : ""
                  )}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity selector */}
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Quantidade
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-display text-2xl w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Buy button */}
          <Button
            onClick={handleBuy}
            className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-base gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Comprar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
