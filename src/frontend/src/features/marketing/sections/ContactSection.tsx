import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../config/whatsapp';

export function ContactSection() {
  const handleWhatsAppChat = () => {
    if (WHATSAPP_CONFIG.number) {
      const message = encodeURIComponent('Hi! I would like to order pure haldi from Farm 2 Kitchen.');
      window.open(`https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ready to experience pure, authentic turmeric? Get in touch with us via WhatsApp or phone.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Location Info */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Our Location
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Signature Millenia 1, Gurugram, Haryana
                </p>
              </div>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Phone Number
                </h3>
                <a 
                  href="tel:9818856274"
                  className="text-lg text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  9818856274
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <button
            onClick={handleWhatsAppChat}
            className="w-full bg-accent text-accent-foreground rounded-xl p-8 shadow-sm hover:shadow-warm transition-all border border-accent/20 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-accent-foreground/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-foreground/20 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold mb-1">
                Chat on WhatsApp
              </h3>
              <p className="text-sm opacity-90">
                Quick and easy ordering through WhatsApp
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
