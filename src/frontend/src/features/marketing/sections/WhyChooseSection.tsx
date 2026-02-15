import { Leaf, ShieldCheck, Sparkles, Palette, Award } from 'lucide-react';

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Leaf,
      title: '100% Pure & Natural',
      description: 'No artificial ingredients, just pure turmeric from nature to your home'
    },
    {
      icon: ShieldCheck,
      title: 'No Additives or Preservatives',
      description: 'Free from chemicals, colors, and preservatives for your family\'s health'
    },
    {
      icon: Sparkles,
      title: 'Freshly Ground',
      description: 'Ground in small batches to ensure maximum freshness and potency'
    },
    {
      icon: Palette,
      title: 'Rich Color & Aroma',
      description: 'Vibrant golden hue and authentic earthy aroma that elevates every dish'
    },
    {
      icon: Award,
      title: 'Locally Trusted in Gurugram',
      description: 'Serving families across Gurugram with quality they can rely on'
    }
  ];

  return (
    <section id="why-choose" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Haldi?
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            We're committed to delivering the highest quality turmeric that honors tradition 
            while meeting modern standards of purity and hygiene.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-warm transition-all border border-border group hover:border-primary/30"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
