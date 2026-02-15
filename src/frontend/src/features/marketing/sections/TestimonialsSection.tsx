import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'DLF Phase 2, Gurugram',
      quote: 'The color and aroma are incredible! You can really tell the difference from store-bought turmeric. My family loves the authentic taste in our daily cooking.'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Sushant Lok, Gurugram',
      quote: 'Finally found pure haldi without any additives. The freshness is unmatched, and I feel confident using it for my children\'s food. Highly recommend!'
    },
    {
      name: 'Anjali Verma',
      location: 'Golf Course Road, Gurugram',
      quote: 'I use it for my morning haldi milk and cooking. The quality is exceptional and the delivery is always prompt. Farm 2 Kitchen has become our trusted source.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Join hundreds of satisfied families across Gurugram who trust Farm 2 Kitchen 
            for their daily turmeric needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-warm transition-all border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
