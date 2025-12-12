import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SMART PARTS NH Logo" className="h-12 w-12" />
              <span className="text-xl font-bold text-primary">SMART PARTS NH</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A distribuidora de peças que une qualidade e garantia em cada produto!
            </p>
            <p className="text-xs text-muted-foreground">
              CNPJ: 62.715.111/0001-31
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Sobre nós
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5551995991833"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                (51) 99599-1833
              </a>
              <a
                href="mailto:SMARTPARTSNH@GMAIL.COM"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm break-all"
              >
                <Mail size={16} />
                SMARTPARTSNH@GMAIL.COM
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Rua Julio de Castilhos, 10<br />Rio Grande do Sul</span>
              </div>
              <a
                href="https://www.instagram.com/smartparts_nh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Instagram size={16} />
                @smartparts_nh
              </a>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Horário de funcionamento</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Segunda a Sexta</p>
                  <p>8:30 - 17:30</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Sábado</p>
                  <p>8:30 - 12:00</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Domingo</p>
                  <p>Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SMART PARTS NH LTDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
