import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer animate-fade-up opacity-0"
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="relative overflow-hidden rounded-lg bg-secondary mb-3">
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Ver detalhes
          </span>
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.categoria}
        </span>
        <h3 className="font-medium text-sm leading-tight">{product.nome}</h3>
        <p className="text-accent font-display text-xl">
          R$ {product.preco.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}
