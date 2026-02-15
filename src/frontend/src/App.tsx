import { SiteHeader } from './features/marketing/components/SiteHeader';
import { HeroSection } from './features/marketing/sections/HeroSection';
import { AboutSection } from './features/marketing/sections/AboutSection';
import { WhyChooseSection } from './features/marketing/sections/WhyChooseSection';
import { UsesSection } from './features/marketing/sections/UsesSection';
import { QualityPromiseSection } from './features/marketing/sections/QualityPromiseSection';
import { TestimonialsSection } from './features/marketing/sections/TestimonialsSection';
import { ContactSection } from './features/marketing/sections/ContactSection';
import { SiteFooter } from './features/marketing/components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <UsesSection />
        <QualityPromiseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
