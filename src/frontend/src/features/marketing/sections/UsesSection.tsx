import { ChefHat, Coffee, Sparkle, Heart } from 'lucide-react';

export function UsesSection() {
  const uses = [
    {
      icon: ChefHat,
      title: 'Daily Cooking',
      description: 'Perfect for sabzi, dal, curries, and all your favorite Indian dishes',
      color: 'bg-chart-1/10 text-chart-1'
    },
    {
      icon: Coffee,
      title: 'Haldi Milk (Golden Milk)',
      description: 'Traditional wellness drink for immunity and relaxation before bed',
      color: 'bg-chart-2/10 text-chart-2'
    },
    {
      icon: Sparkle,
      title: 'Traditional Haldi Ceremony',
      description: 'Pure turmeric for wedding rituals and auspicious occasions',
      color: 'bg-chart-3/10 text-chart-3'
    },
    {
      icon: Heart,
      title: 'Home Remedies',
      description: 'Natural healing for skin care, wound care, and wellness practices',
      color: 'bg-chart-4/10 text-chart-4'
    }
  ];

  return (
    <section id="uses" className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 hidden lg:block">
        <img
          src="/assets/generated/indian-kitchen-warm.dim_1600x900.png"
          alt="Indian kitchen"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Uses of Our Haldi
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            From your kitchen to your wellness routine, our pure turmeric powder serves 
            countless purposes in Indian households.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {uses.map((use, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-warm transition-all border border-border"
            >
              <div className={`w-14 h-14 ${use.color} rounded-lg flex items-center justify-center mb-6`}>
                <use.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {use.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {use.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
