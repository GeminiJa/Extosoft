import { Suspense, lazy } from 'react';
import { ParticleBackground } from './components/effects/ParticleBackground';
import { Navigation, HeroSection } from './components/sections';

const AboutSection = lazy(() =>
  import('./components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ServicesSection = lazy(() =>
  import('./components/sections/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const CertificationsSection = lazy(() =>
  import('./components/sections/CertificationsSection').then((m) => ({ default: m.CertificationsSection }))
);
const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/sections/Footer').then((m) => ({ default: m.Footer }))
);

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <ServicesSection />
          <CertificationsSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
