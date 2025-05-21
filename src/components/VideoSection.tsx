
import { useState } from "react";
import { PlayCircle } from "lucide-react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full bg-white text-navy py-16" id="video">
      <div className="flex flex-col justify-center items-center">
        {/* Optional Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-sans">Experience the Community</h2>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl animate-fade-in">
          <iframe
                  className="rounded-lg w-full h-full"
                  src="https://www.youtube.com/embed/1vVuvlYWtR8?autoplay=1&mute=1&loop=1&playlist=1vVuvlYWtR8"
                  title="Experience the Community"
                  frameBorder={0}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
          {/* <button
            aria-label="Play Video"
            className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/40 transition focus:ring-2 focus:ring-navy"
            onClick={() => setOpen(true)}
            style={{ outline: "none" }}
          >
            <PlayCircle size={64} className="text-white drop-shadow-lg transition-transform hover:scale-110" />
          </button> */}
        </div>
        
      </div>
    </section>
  );
}
