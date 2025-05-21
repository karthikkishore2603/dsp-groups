
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    
    try {
      // Insert the form data into Supabase
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          { 
            name: info.name,
            email: info.email || null, // Handle empty email (since it's optional)
            phone: info.phone,
            message: info.message
          }
        ]);
      
      if (error) {
        console.error("Error submitting form:", error);
        toast.error("There was a problem submitting your message. Please try again.");
        setSending(false);
        return;
      }
      
      // Show success message and reset form
      setSuccess(true);
      toast.success("Thank you! We received your message.");
      setInfo({ name: "", email: "", phone: "", message: "" });
      
      // Hide success message after a delay
      setTimeout(() => setSuccess(false), 3500);
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was a problem submitting your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="w-full py-16 bg-white" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0">
        {/* Left side image */}
        <div className="hidden md:block w-full md:w-5/12 animate-fade-in">
          <img
            src="/contact.jpg"
            alt="DSP Groups Property"
            className="rounded-xl shadow-md w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Contact form */}
        <div className="w-full md:w-7/12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 font-sans">
            Let's help you find your perfect plot
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-gray-50 border border-gray-200 rounded-xl p-7 shadow flex flex-col gap-4 animate-fade-in"
          >
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-4 py-2 outline-navy font-sans"
              value={info.name}
              onChange={(e) => setInfo((v) => ({ ...v, name: e.target.value }))}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 outline-navy font-sans"
              value={info.email}
              onChange={(e) => setInfo((v) => ({ ...v, email: e.target.value }))}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded px-4 py-2 outline-navy font-sans"
              value={info.phone}
              onChange={(e) => setInfo((v) => ({ ...v, phone: e.target.value }))}
              required
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="border border-gray-300 rounded px-4 py-2 outline-navy font-sans"
              value={info.message}
              onChange={(e) => setInfo((v) => ({ ...v, message: e.target.value }))}
              required
            />
            <button
              type="submit"
              className={`bg-navy text-white font-semibold py-2 rounded hover:bg-navy/90 transition-all mt-2 ${
                sending ? "opacity-70 cursor-wait" : ""
              }`}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          
            {success && (
              <div className="text-green-700 bg-green-50 border border-green-200 rounded px-3 py-2 mt-2 text-center font-semibold animate-fade-in">
                Thank you! We received your message.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}