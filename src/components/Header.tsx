import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isVitrinePage = location.pathname === "/vitrine";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isVitrinePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isVitrinePage
      ? "bg-background shadow-md"
      : isScrolled
        ? "bg-background/95 backdrop-blur-sm shadow-md"
        : "bg-background"
  }`;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="SMART PARTS NH Logo" className="h-20 w-20" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <Link
              to="/vitrine"
              className="text-foreground hover:text-primary transition-colors"
            >
              Vitrine
            </Link>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Serviços
            </button>
            <Link
              to="/vitrine"
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vitrine
            </Link>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
