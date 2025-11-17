import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import carousel1 from "@/assets/carousel-1.jpeg";
import carousel2 from "@/assets/carousel-2.jpeg";
import carousel3 from "@/assets/carousel-3.jpeg";
import carousel4 from "@/assets/carousel-4.jpeg";
import carousel5 from "@/assets/carousel-5.jpeg";
import carousel6 from "@/assets/carousel-6.jpeg";
import carousel7 from "@/assets/carousel-7.jpeg";
import carousel8 from "@/assets/carousel-8.jpeg";
import carousel9 from "@/assets/carousel-9.jpeg";

const images = [
  { src: carousel1, alt: "Temos tele grátis - Faça seu pedido" },
  { src: carousel2, alt: "Conectores de alta qualidade - Smart Parts" },
  { src: carousel3, alt: "Entregamos para todo Brasil" },
  { src: carousel4, alt: "Peças de celular modelo W2031A134G" },
  { src: carousel5, alt: "Telas WEFIX com 95% de proximidade das originais" },
  { src: carousel6, alt: "Peças de celular modelo W2020A04S" },
  { src: carousel7, alt: "Display WEFIX modelo W6067NT105G" },
  { src: carousel8, alt: "Comparação WEFIX original - melhor brilho e nitidez" },
  { src: carousel9, alt: "Melhores telas em Novo Hamburgo, RS" },
];

const ProductCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Confira nossa linha completa de peças autorizadas para celulares e tablets
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-border hover:border-primary"
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <CardContent className="p-0 aspect-square">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 border-0 bg-transparent">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
