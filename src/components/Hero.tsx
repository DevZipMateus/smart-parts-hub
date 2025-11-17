import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/75"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              SMART PARTS NH LTDA
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8">
              A distribuidora de peças que une qualidade e garantia em cada produto!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
              Peças autorizadas para celulares e tablets com qualidade superior, 
              atendimento especializado e entrega rápida no Rio Grande do Sul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
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
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
