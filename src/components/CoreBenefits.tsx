
import { ShieldCheck, Droplet, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="text-navy w-8 h-8 mb-3" />,
    title: "Gated Community with 24/7 Security",
    desc: "Live with peace of mind in a gated community designed for your safety and comfort. Enjoy 24/7 security and a secure, welcoming environment.",
  },
  {
    icon: <ArrowRight className="text-navy w-8 h-8 mb-3" />,
    title: "Well-Maintained Infrastructure",
    desc: "Experience a community built for seamless living, featuring well-maintained infrastructure, efficient drainage systems, and well-paved roads. With 3-phase power supply, enjoy consistent energy and reliability every day.",
  },
  {
    icon: <Droplet className="text-navy w-8 h-8 mb-3" />,
    title: "Reliable and Efficient Water Supply",
    desc: "Experience uninterrupted access to clean, reliable water with a system designed for consistent flow and efficient management—ensuring your daily needs are always met.",
  },
];

export default function CoreBenefits() {
  return (
    <section className="w-full py-16 bg-white" id="benefits">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center gap-8 animate-fade-in">
          {benefits.map((b, idx) => (
            <div
              key={b.title}
              className="flex-1 min-w-[220px] p-7 rounded-lg shadow bg-white border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all duration-200 text-center"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {b.icon}
              <h3 className="text-navy text-lg font-semibold mb-1">{b.title}</h3>
              <p className="text-navy/80">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
