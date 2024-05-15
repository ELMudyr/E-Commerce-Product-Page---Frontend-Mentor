import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
const productImages = [Product1, Product2, Product3, Product4];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-[500px] m-auto">
      <Carousel
        plugins={[plugin.current]}
        className=" w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {productImages.map((image, index) => (
            <CarouselItem key={index}>
              <CardContent className="flex p-0  items-center justify-center">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
export default CarouselPlugin;
