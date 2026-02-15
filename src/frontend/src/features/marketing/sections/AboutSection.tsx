import { Sprout, Truck, Heart } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Sprout,
      title: 'Farm-Sourced',
      description: 'Directly from trusted farms with generations of turmeric cultivation expertise'
    },
    {
      icon: Heart,
      title: 'Carefully Processed',
      description: 'Traditional methods meet modern hygiene standards for the perfect balance'
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Delivered fresh to your doorstep across Gurugram within days of grinding'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            At Farm 2 Kitchen, we believe in bringing the purest form of turmeric from the 
            heart of Indian farms directly to your kitchen. Our journey begins at carefully 
            selected farms where turmeric is grown using traditional, sustainable practices. 
            Each root is handpicked, cleaned with care, sun-dried to perfection, and ground 
            fresh to preserve its natural oils, vibrant color, and powerful health benefits.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-4">
            Based in Gurugram, we're proud to serve local families who value authenticity, 
            quality, and the rich heritage of Indian spices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-warm transition-all border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
