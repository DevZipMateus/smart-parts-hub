import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/75"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              SMART PARTS NH LTDA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8">
              A distribuidora de peças que une qualidade e garantia em cada produto!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              Peças autorizadas para celulares e tablets com qualidade superior, 
              atendimento especializado e entrega rápida no Rio Grande do Sul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/5551995991833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-accent transition-colors text-base sm:text-lg font-semibold"
              >
                <Phone size={20} />
                Fale conosco
              </a>
              <a
                href="https://www.instagram.com/smartparts_nh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-muted transition-colors text-base sm:text-lg font-semibold border border-border"
              >
                Siga no Instagram
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <img 
              src={logo} 
              alt="Logo SMART PARTS NH" 
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
