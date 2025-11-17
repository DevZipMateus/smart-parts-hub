import { Shield, Zap, Package, Headphones, CheckCircle, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import deliveryImage from "@/assets/services-delivery.jpg";

const Services = () => {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Peças autorizadas",
      description: "Trabalhamos exclusivamente com peças originais e autorizadas, garantindo qualidade e segurança."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Garantia assegurada",
      description: "Todas as peças possuem garantia, proporcionando tranquilidade e confiança na sua compra."
    },
    {
      icon: <Package size={32} />,
      title: "Amplo estoque",
      description: "Variedade completa de peças para diversos modelos de celulares e tablets sempre disponíveis."
    },
    {
      icon: <Headphones size={32} />,
      title: "Atendimento especializado",
      description: "Equipe preparada para atender suas necessidades com agilidade e profissionalismo."
    },
    {
      icon: <Truck size={32} />,
      title: "Entrega rápida",
      description: "Opções de entrega por motoboy, correios e transportadora para atender todo o Rio Grande do Sul."
    },
    {
      icon: <Zap size={32} />,
      title: "Agilidade no atendimento",
      description: "Respostas rápidas e processos eficientes para você não perder tempo."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um serviço completo com peças de qualidade superior e atendimento que você pode confiar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={deliveryImage} 
            alt="Serviço de entrega rápida de peças para celulares" 
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Peças de qualidade para seu negócio
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Atendemos assistências técnicas, lojas e profissionais do ramo com as melhores 
            condições e suporte especializado.
          </p>
          <a
            href="https://wa.me/5551995991833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
