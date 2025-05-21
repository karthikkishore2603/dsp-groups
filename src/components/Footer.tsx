
import { Facebook, Instagram, MapPin, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-4 text-center text-navy">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="font-bold text-xl mb-2 md:mb-0">DSP Groups © 2024. All Rights Reserved.</div>
        
       
        <div className="flex gap-4 items-center mt-2 md:mt-0">
          <a 
          href="https://realmrook.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-xs text-navy/70 hover:text-navy transition-colors"
        >
          <span className="mr-1">Powered by</span>
          <img 
            src="/realmbyRook_logo.jpg" 
            alt="RealMrook" 
            className="w-24 rounded object-cover"
          />
        </a>
        </div>
      </div>
     
    </footer>
  );
}
