import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato através de um de nossos canais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Phone className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
              <a 
                href="https://wa.me/5551995991833"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                (51) 99599-1833
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Mail className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
              <a 
                href="mailto:SMARTPARTSNH@GMAIL.COM"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                SMARTPARTSNH@GMAIL.COM
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <MapPin className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Rua Julio de Castilhos, 10<br />
                Rio Grande do Sul
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock className="text-primary" size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta: 9:00 - 18:00<br />
                Sábado: 9:00 - 12:00
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para fazer seu pedido?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Entre em contato agora mesmo e receba atendimento especializado. 
              Estamos aqui para ajudar você a encontrar as melhores peças para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5551995991833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold"
              >
                <Phone size={20} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/smartparts_nh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors text-lg font-semibold"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
