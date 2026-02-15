import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-turmeric-roots.dim_1600x900.png"
          alt="Fresh turmeric roots"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-hero-heading mb-6 leading-tight animate-fade-in tracking-tight">
            Pure Haldi. From Farm to Your Kitchen.
          </h1>
          <p className="text-xl md:text-2xl text-hero-text mb-8 leading-relaxed max-w-2xl animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            Experience the authentic taste and vibrant color of 100% pure turmeric powder.
            {' '}
            Sourced directly from trusted farms, freshly ground, and delivered with care to 
            homes across Gurugram. No additives. No preservatives. Just pure, natural goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-warm hover:shadow-warm-lg"
            >
              Order Now
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-card-foreground font-semibold rounded-lg hover:bg-muted transition-all border border-border"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
