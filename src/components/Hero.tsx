
export default function Hero() {
  return (
    <section
      className="w-full pt-28 md:pt-36 bg-white min-h-[60vh] flex items-center justify-center px-4 md:px-0"
      id="home"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-fade-in">
        <div className="flex flex-col justify-center items-start text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-navy leading-snug mb-6 font-sans">
            Your dream plot just 99 km from Chennai
          </h1>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-navy text-white font-semibold text-lg rounded-md shadow-md hover:shadow-lg hover:bg-navy/90 focus:ring-2 focus:ring-navy/40 transition-all duration-200"
          >
            Book Now
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/hero.jpg"
            alt="DSP Groups gated community plots"
            className="rounded-xl object-cover w-full max-w-2xl shadow-md border border-gray-200 aspect-video"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
