
import { useState, useEffect } from "react";
import { Menu, Link as LinkIcon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Amenities", href: "#amenities" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`} 
      id="navbar"
    >
      <div className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <img src="/logo.png" alt="DSP Groups" className="w-28 h-auto" />
        {/* <div className="font-bold text-xl md:text-2xl text-navy tracking-tight font-sans flex-shrink-0">
          DSP Groups
        </div> */}
        <div className="hidden md:flex gap-7 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-navy font-medium hover:underline underline-offset-8 transition-colors duration-150"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://realmrook.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-xs text-navy/70 ml-2 hover:text-navy transition-colors"
          >
            <span className="mr-1">Powered by</span>
            <img 
              src="/realmbyRook_logo.jpg" 
              alt="RealMrook" 
              className="w-24  rounded object-cover"
            />
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-2 text-navy p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white shadow-2xl absolute top-[100%] left-0 w-full animate-fade-in rounded-b-lg">
          <div className="flex flex-col text-center py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy font-medium py-2 hover:underline underline-offset-8 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://realmrook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center text-xs text-navy/70 py-2 hover:text-navy transition-colors"
            >
              <span className="mr-1">Powered by</span>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=32&h=32&fit=crop&q=80" 
                alt="RealMrook" 
                className="w-5 h-5 rounded object-cover"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
