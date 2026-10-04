import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechMatrix } from './components/TechMatrix';
import { ReliabilitySection } from './components/ReliabilitySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { scrollToSection } from './utils/scroll';
import { useScrollReveal } from './utils/useScrollReveal';

export function App() {
  useScrollReveal();

  const [contactOpen, setContactOpen] = useState(false);
  const [prefillSubject, setPrefillSubject] = useState('');
  const [prefillMessage, setPrefillMessage] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      if (targetId) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 150);
      }
    }
  }, []);

  const handleOpenContact = () => {
    setPrefillSubject('Consultation Request with Wenelove Del Castillo');
    setPrefillMessage('');
    setContactOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefillSubject(`Inquiry regarding: ${serviceTitle}`);
    setPrefillMessage(
      `Hi Wenelove,\n\nI am interested in delegating ${serviceTitle} to you. Here are some details about our team and operational needs:\n`
    );
    setContactOpen(true);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenContact={handleOpenContact} />

      <main style={{ flexGrow: 1 }}>
        <Hero onOpenContact={handleOpenContact} />
        <ServicesSection onSelectService={handleSelectService} />
        <ExperienceTimeline />
        <TechMatrix />
        <ReliabilitySection />
        <FaqSection />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        prefillSubject={prefillSubject}
        prefillMessage={prefillMessage}
      />
    </div>
  );
}

export default App;
