
import { BadgeDollarSign, Hammer, Clock } from "lucide-react";

const features = [
  {
    icon: <BadgeDollarSign className="text-gold w-9 h-9 mb-4" />,
    title: "Easy Financing Options",
    desc: "We offer easy loan options to make buying your ideal plot a seamless and stress-free experience.",
  },
  {
    icon: <Hammer className="text-navy w-9 h-9 mb-4" />,
    title: "Effortless Construction",
    desc: "We help you build your dream home, making your vision a reality with our support and expertise.",
  },
  {
    icon: <Clock className="text-gold w-9 h-9 mb-4" />,
    title: "Quick Process",
    desc: "We provide same-day registration and deliver the Patta to your doorstep within 15 days.",
  },
];

export default function FeatureHighlight() {
  return (
    <section className="py-16 md:py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-navy text-2xl md:text-5xl font-bold mb-5 font-sans">
            Buy Plots at just <span className="text-gold">₹20 Lakhs</span>
          </h2>
          <p className="text-2xl text-navy/80 font-medium">
            At Melmaruvathur Om Sakthi Avenue
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 animate-fade-in">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="flex-1 p-8 min-w-[260px] rounded-lg shadow-md bg-white border border-gray-100 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              {f.icon}
              <h3 className="text-navy text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-navy/80 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
