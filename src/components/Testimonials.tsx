
import { useState } from "react";
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const testimonials = [
  {
    name: "V. Karthik",
    content:
      "From my very first enquiry to plot registration, DSP Groups made everything effortless. The amenities and ease of construction support exceeded all expectations!",
  },
  {
    name: "Mrs. Jaya Shankar",
    content:
      "Incredible professionalism and prompt service. The transparency in registration and quick patta delivery gave us immense confidence. Highly recommended!",
  },
  {
    name: "Anand S.",
    content:
      "Our family loves the peaceful gated community, and knowing our kids are safe is priceless. Thank you DSP Groups for helping us build our dream!",
  },
  {
    name: "Lakshmi R.",
    content:
      "I was amazed by how simple the entire purchase process was. From booking to documentation, everything was handled with utmost care and transparency.",
  },
  {
    name: "Mohan Kumar",
    content:
      "The location is perfect - close enough to the city yet far from the noise. DSP Groups gave us excellent guidance throughout the process.",
  },
];

export default function Testimonials() {
  const [show, setShow] = useState(false);
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();
  
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false });
  
  return (
    <section className="w-full py-16 bg-white" id="testimonials">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center animate-fade-in">
        {/* Text testimonials */}
        <div className="flex-1 w-full px-4">
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-6 font-sans">What Our Customers Say</h2>
          
          <Carousel 
            className="w-full max-w-lg mx-auto"
            opts={{ loop: true }}
            plugins={[autoplayPlugin]}
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={t.name}>
                  <div className="rounded-lg border border-gray-100 shadow px-6 py-5 bg-white h-full">
                    <div className="flex gap-2 mb-2">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="text-navy/90 text-base md:text-lg">"{t.content}"</p>
                    <div className="text-navy font-semibold mt-2">– {t.name}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9" />
              <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9" />
            </div>
          </Carousel>
        </div>
        
        {/* Video testimonial */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="hidden md:block text-base text-navy/80 mb-2">See our customer story</h3>
          <div className="relative w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-xl">
           
             <iframe
                      className="rounded-lg w-full h-full"
                      src="https://www.youtube.com/embed/RsuKx4_5vrc?si=m59BURAXYNcgZ8py"
                      title="Customer Testimonial"
                      frameBorder={0}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
          </div>
        </div>
      </div>
    </section>
  );
}
