import { Target, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import warehouseImage from "@/assets/about-warehouse.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Conheça nossa visão, missão e valores que nos tornam referência em peças para celulares no Rio Grande do Sul.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={warehouseImage} 
            alt="Estoque organizado de peças para celulares da SMART PARTS NH" 
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Target className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">Visão</h3>
              <p className="text-muted-foreground text-center">
                Ser a distribuidora referência em peças de celulares no Rio Grande do Sul, 
                reconhecida pela qualidade superior dos produtos, pela confiança no atendimento 
                e pela excelência na experiência do cliente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">Missão</h3>
              <p className="text-muted-foreground text-center">
                Oferecer peças autorizadas e de alta qualidade para celulares e tablets, 
                garantindo segurança e desempenho aos nossos clientes. Buscamos proporcionar 
                um atendimento ágil, especializado e humano, aliado a opções de entrega rápidas e eficientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <TrendingUp className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">Compromisso</h3>
              <p className="text-muted-foreground text-center">
                Trabalhamos com dedicação para garantir que cada peça entregue atenda aos 
                mais altos padrões de qualidade, oferecendo segurança e confiabilidade 
                para nossos clientes em todo o Rio Grande do Sul.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">Nossos valores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔧</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Qualidade</h4>
                <p className="text-sm text-muted-foreground">
                  Trabalhamos somente com peças autorizadas e de alto padrão, oferecendo segurança e garantia.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🤝</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Confiança</h4>
                <p className="text-sm text-muted-foreground">
                  Honramos nossos compromissos e construímos relações transparentes com clientes e parceiros.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">💬</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Atendimento de excelência</h4>
                <p className="text-sm text-muted-foreground">
                  Priorizamos um suporte cordial, rápido e resolutivo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚙️</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Responsabilidade</h4>
                <p className="text-sm text-muted-foreground">
                  Garantimos seriedade em cada etapa do processo, desde a escolha das peças até a entrega final.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Agilidade</h4>
                <p className="text-sm text-muted-foreground">
                  Entregamos com rapidez e eficiência por meio de motoboy, correio e transportadora.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Evolução contínua</h4>
                <p className="text-sm text-muted-foreground">
                  Buscamos melhorias constantes para acompanhar as necessidades do mercado e dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
