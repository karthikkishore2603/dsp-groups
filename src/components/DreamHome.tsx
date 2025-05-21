
import { PlayCircle } from "lucide-react";
import { useState } from "react";

export default function DreamHome() {
  const [show, setShow] = useState(false);

  return (
    <section className="w-full bg-white py-16" id="dreamhome">
      <div className="container mx-auto flex flex-col items-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center font-sans">
          Building Dream Home Made Simple
        </h2>
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
                  className="rounded-lg w-full h-full"
                  src="https://www.youtube.com/embed/3-EKHVQzARw?si=O1j42P1eoHs-rpu9"
                  title="Build your Dream Home"
                  frameBorder={0}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
        
        </div>
       
      </div>
    </section>
  );
}
