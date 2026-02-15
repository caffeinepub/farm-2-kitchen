import { Droplets, Sun, Wind, Package } from 'lucide-react';

export function QualityPromiseSection() {
  const steps = [
    {
      icon: Droplets,
      title: 'Carefully Cleaned',
      description: 'Each turmeric root is thoroughly washed to remove all impurities'
    },
    {
      icon: Sun,
      title: 'Sun-Dried',
      description: 'Naturally dried under the sun to preserve nutrients and enhance flavor'
    },
    {
      icon: Wind,
      title: 'Finely Ground',
      description: 'Ground to the perfect consistency for easy mixing and maximum aroma'
    },
    {
      icon: Package,
      title: 'Hygienically Packed',
      description: 'Sealed in food-grade packaging to lock in freshness and quality'
    }
  ];

  return (
    <section id="quality" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src="/assets/generated/turmeric-powder-bowl.dim_1400x900.png"
                alt="Pure turmeric powder"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Quality & Freshness Promise
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              We follow a meticulous process to ensure every batch of our turmeric powder 
              retains its natural nutrients, vibrant color, and powerful aroma. From farm 
              to your kitchen, quality is our top priority.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
