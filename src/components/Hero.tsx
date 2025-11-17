import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              SMART PARTS NH LTDA
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
              A distribuidora de peças que une qualidade e garantia em cada produto!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Peças autorizadas para celulares e tablets com qualidade superior, 
              atendimento especializado e entrega rápida no Rio Grande do Sul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/5551995991833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-accent transition-colors text-lg font-semibold"
              >
                <Phone size={20} />
                Fale conosco
              </a>
              <a
                href="https://www.instagram.com/smartparts_nh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg hover:bg-muted transition-colors text-lg font-semibold border border-border"
              >
                Siga no Instagram
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src={logo} 
              alt="Logo SMART PARTS NH" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
