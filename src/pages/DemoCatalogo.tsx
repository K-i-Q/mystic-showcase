import { useState, useMemo } from "react";
import { Search, ChevronDown, MessageCircle } from "lucide-react";
import { products, Product } from "@/data/products";
import { DemoBadge } from "@/components/DemoBadge";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BackToHome } from "@/components/BackToHome";
import { ProductCard } from "@/components/catalogo/ProductCard";
import { ProductModal } from "@/components/catalogo/ProductModal";
import { openWhatsApp, defaultMessage } from "@/lib/whatsapp";

const categories = ["Todos", "Novidades", "Coleções", "Promo", "Mais vendidos"];

export default function DemoCatalogo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.nome.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.categoria === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground theme-catalogo">
      <DemoBadge variant="dark" />
      <WhatsAppFloatingButton variant="green" />

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a href="#" className="font-display text-2xl tracking-wider shrink-0">
              MYSTIC
            </a>

            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Category dropdown (mobile) */}
            <div className="relative md:hidden">
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center gap-1 h-10 px-3 rounded-lg bg-secondary text-sm"
              >
                <span className="max-w-[80px] truncate">{selectedCategory}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-card rounded-lg border border-border shadow-xl z-50 animate-scale-in">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        selectedCategory === cat ? "text-accent" : ""
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-3">
            <BackToHome variant="dark" />
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop"
          alt="Fashion banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl tracking-wider animate-fade-up">
              NOVA COLEÇÃO
            </h1>
            <p className="text-muted-foreground mt-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Atacado com estilo. Peças que vendem.
            </p>
            <button
              onClick={() => openWhatsApp(defaultMessage)}
              className="mt-4 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Categories tabs (desktop) */}
      <div className="hidden md:block sticky top-[73px] z-30 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 py-2 overflow-x-auto scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <main className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} onClick={() => openProductModal(product)} />
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Product modal */}
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeProductModal} />
    </div>
  );
}
