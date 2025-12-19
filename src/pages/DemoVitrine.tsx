import { useState } from "react";
import { Menu, X, Sparkles, TrendingUp, Package, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { DemoBadge } from "@/components/DemoBadge";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BackToHome } from "@/components/BackToHome";
import { openWhatsApp, defaultMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function DemoVitrine() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const highlights = [
    { icon: Sparkles, title: "Novidades", desc: "Peças exclusivas toda semana" },
    { icon: TrendingUp, title: "Mais vendidos", desc: "O que está bombando agora" },
    { icon: Package, title: "Condições atacado", desc: "Pedido mínimo acessível" },
  ];

  const steps = [
    { num: "01", title: "Escolha", desc: "Navegue pelo catálogo e selecione suas peças favoritas." },
    { num: "02", title: "Envie", desc: "Mande a lista pelo WhatsApp com tamanhos e cores." },
    { num: "03", title: "Receba", desc: "Confirmamos disponibilidade e enviamos rapidinho." },
  ];

  const testimonials = [
    { name: "Carla M.", text: "Atendimento impecável! Peças de qualidade e entrega super rápida.", city: "São Paulo" },
    { name: "Juliana S.", text: "Melhor fornecedor que já trabalhei. Sempre tem novidades incríveis.", city: "Belo Horizonte" },
    { name: "Amanda R.", text: "Preço justo e produto que vende fácil. Recomendo demais!", city: "Curitiba" },
  ];

  const links = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: TikTokIcon, label: "TikTok", href: "#" },
    { icon: Package, label: "Catálogo", href: "/demo-catalogo" },
    { icon: MapPin, label: "Localização", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <DemoBadge variant="light" />
      <WhatsAppFloatingButton variant="dark" />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <BackToHome variant="light" className="hidden md:flex" />
            
            <a href="#" className="font-serif text-2xl md:text-3xl font-semibold tracking-wider">
              MYSTIC
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Início
              </a>
              <a href="#como-comprar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Como Comprar
              </a>
              <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                <BackToHome variant="light" />
                <a href="#inicio" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Início
                </a>
                <a href="#como-comprar" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Como Comprar
                </a>
                <a href="#contato" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  Contato
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Atacado de Moda<br />
            <span className="font-medium italic">com Curadoria</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Pedidos direto no WhatsApp. Atendimento rápido.
          </p>
          <Button
            size="lg"
            onClick={() => openWhatsApp(defaultMessage)}
            className="animate-fade-up opacity-0 bg-foreground text-background hover:bg-foreground/90 font-medium px-8 py-6 text-base"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            Falar no WhatsApp
          </Button>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-border to-transparent" />
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            Destaques
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-lg border border-border hover-lift cursor-pointer animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <item.icon className="w-8 h-8 mb-4 text-accent" />
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section id="como-comprar" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-4">
            Como Comprar
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Em três passos simples você já está comprando
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="text-center animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <span className="font-serif text-5xl md:text-6xl text-muted-foreground/30 font-light">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            O que dizem nossos clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card p-6 rounded-lg border border-border animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <p className="text-muted-foreground italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{t.name}</span>
                  <span className="text-muted-foreground text-xs">• {t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            Links Rápidos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors animate-fade-up opacity-0"
                style={{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <link.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl mb-4">MYSTIC</h3>
              <p className="text-background/60 text-sm mb-4">
                Atacado de moda com curadoria especial para lojistas exigentes.
              </p>
              <div className="flex flex-col gap-2 text-sm text-background/60">
                <a href="#" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" /> (11) 99999-9999
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-background transition-colors">
                  <Mail className="w-4 h-4" /> contato@mystic.com.br
                </a>
              </div>
            </div>
            <div className="text-left md:text-right">
              <Button
                variant="outline"
                onClick={() => openWhatsApp(defaultMessage)}
                className="border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center text-xs text-background/40">
            © 2024 Mystic. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
