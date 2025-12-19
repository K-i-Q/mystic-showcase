import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const demos = [
    {
      id: "vitrine",
      title: "Vitrine Premium",
      subtitle: "Minimal",
      description: "Estilo elegante e minimalista. Perfeito para substituir Linktree com uma vitrine profissional.",
      href: "/demo-vitrine",
      icon: Sparkles,
      gradient: "from-amber-100 to-orange-50",
      accent: "text-amber-700",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
    },
    {
      id: "catalogo",
      title: "Catálogo Atacado",
      subtitle: "Fashion",
      description: "Visual impactante e editorial. Catálogo completo com preços e compra via WhatsApp.",
      href: "/demo-catalogo",
      icon: ShoppingBag,
      gradient: "from-slate-900 to-slate-800",
      accent: "text-pink-400",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      dark: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Demo badge */}
      <div className="fixed top-4 right-4 z-50 px-3 py-1 text-xs font-medium tracking-widest rounded-full bg-foreground/10 text-foreground/60">
        DEMO
      </div>

      {/* Header */}
      <header className="py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-2">
            MYSTIC
          </h1>
          <p className="text-muted-foreground text-sm">Atacado de Moda</p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            Demonstrações
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore dois estilos diferentes de vitrine para atacado de moda. Clique em uma demo para visualizar.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {demos.map((demo, index) => (
            <Link
              key={demo.id}
              to={demo.href}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${demo.dark ? 'bg-black/70' : 'bg-white/80'}`} />
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-10 min-h-[320px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${demo.dark ? 'bg-white/10' : 'bg-foreground/5'}`}>
                      <demo.icon className={`w-5 h-5 ${demo.accent}`} />
                    </div>
                    <span className={`text-xs font-medium uppercase tracking-wider ${demo.dark ? 'text-white/60' : 'text-foreground/60'}`}>
                      Demo {index + 1}
                    </span>
                  </div>
                  <h3 className={`font-serif text-2xl md:text-3xl font-light mb-2 ${demo.dark ? 'text-white' : 'text-foreground'}`}>
                    {demo.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    demo.dark ? 'bg-white/10 text-white/80' : 'bg-foreground/10 text-foreground/80'
                  }`}>
                    {demo.subtitle}
                  </span>
                  <p className={`text-sm ${demo.dark ? 'text-white/60' : 'text-foreground/60'}`}>
                    {demo.description}
                  </p>
                </div>

                <div className={`flex items-center gap-2 text-sm font-medium mt-6 ${demo.dark ? 'text-white' : 'text-foreground'} group-hover:gap-4 transition-all`}>
                  Explorar demo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info section */}
        <div className="text-center mt-16 text-sm text-muted-foreground">
          <p>
            Estas são demonstrações interativas. Clique em "Falar no WhatsApp" para testar a integração.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Mystic. Demonstração de vitrine para atacado de moda.</p>
        </div>
      </footer>
    </div>
  );
}
