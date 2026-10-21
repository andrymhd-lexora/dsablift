import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPage } from './components/AboutPage';
import { ProductCatalog } from './components/ProductCatalog';
import { CabinVisualizer } from './components/CabinVisualizer';
import { TechnologySafety } from './components/TechnologySafety';
import { MarketComparison } from './components/MarketComparison';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { ServicesMaintenance } from './components/ServicesMaintenance';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('dsab_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);

  // Sync theme class on root html document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('dsab_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync hash routing for about page and sections
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#tentang-kami') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (page: 'home' | 'about', hash?: string) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (hash) {
        window.location.hash = hash;
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans'] selection:bg-blue-600 selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content: Render AboutPage or Home Landing Page */}
      {currentPage === 'about' ? (
        <main id="main-content">
          <AboutPage
            language={language}
            onNavigateHome={() => handleNavigate('home')}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          />
        </main>
      ) : (
        <main id="main-content">
          {/* 1. Hero Section with Interactive Elevator Simulation */}
          <Hero
            language={language}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          />

          {/* Note: Former in-page AboutSection has been removed and elevated to full AboutPage per user request */}

          {/* 2. Product Catalog (9 Elevator & Escalator Models with Specs) */}
          <ProductCatalog
            language={language}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          />

          {/* 3. Luxury Cabin Customizer & Interior Visualizer */}
          <CabinVisualizer language={language} />

          {/* 4. Engineering, Smart Hygiene AI & Global Safety Certifications */}
          <TechnologySafety language={language} />

          {/* 5. Market Benchmark & Investment Comparison Matrix */}
          <MarketComparison language={language} />

          {/* 6. 11 Solid Reasons to Choose FUJIYANG & DSAB Lift */}
          <WhyChooseUs language={language} />

          {/* 7. Landmark Project Portfolio Showcase */}
          <ProjectPortfolio language={language} />

          {/* 8. Lifecycle Services, Maintenance & 24/7 Emergency Hotline */}
          <ServicesMaintenance language={language} />

          {/* 9. Client Testimonials & Searchable FAQ Accordion */}
          <TestimonialsFAQ language={language} />

          {/* 10. Office HQ Contact & WhatsApp Project Consultation Form */}
          <ContactSection
            language={language}
            onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        language={language}
        onOpenCatalogModal={() => setIsCatalogModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Floating Action Button (WhatsApp 24/7 Consultation) */}
      <FloatingActions language={language} />

      {/* E-Catalog PDF Download Modal */}
      <CatalogModal
        language={language}
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />

    </div>
  );
}
