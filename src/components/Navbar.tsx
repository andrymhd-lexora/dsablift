import React, { useState, useEffect, useRef } from 'react';
import { DSABLogo } from './Logos';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageSquare,
  ChevronDown,
  Palette,
  Cpu,
  Scale,
  Building2,
  Wrench,
  Layers,
  Sun,
  Moon,
  FileDown,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onOpenCatalogModal: () => void;
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about', hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  theme = 'dark',
  onToggleTheme,
  onOpenCatalogModal,
  currentPage,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const subMenuItems = [
    {
      id: 'cabin-customizer',
      href: '#cabin-customizer',
      label: language === 'id' ? 'Desain Kabin' : 'Cabin Design',
      desc: language === 'id' ? 'Studio interior & finishing kustom' : 'Interior studio & custom finishes',
      icon: Palette,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      id: 'technology',
      href: '#technology',
      label: language === 'id' ? 'Teknologi & Safety' : 'Technology & Safety',
      desc: language === 'id' ? 'PMSM gearless & sertifikasi K3' : 'PMSM motor & safety systems',
      icon: Cpu,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'comparison',
      href: '#comparison',
      label: language === 'id' ? 'Komparasi' : 'Comparison',
      desc: language === 'id' ? 'Benchmark spesifikasi & investasi' : 'Market benchmark & lifetime value',
      icon: Scale,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      id: 'portfolio',
      href: '#portfolio',
      label: language === 'id' ? 'Portofolio' : 'Portfolio',
      desc: language === 'id' ? 'Landmark proyek di Indonesia' : 'Landmark projects across Indonesia',
      icon: Building2,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      id: 'services',
      href: '#services',
      label: language === 'id' ? 'Layanan & Pemeliharaan' : 'Services & Support',
      desc: language === 'id' ? 'Supply, instalasi & servis berkala 24/7' : 'Installation, parts & 24/7 care',
      icon: Wrench,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20'
    }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (href === '#about') {
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '#home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home') {
      onNavigate('home', href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900/95 text-slate-300 text-xs border-b border-slate-800/80 hidden lg:block backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          {/* Left Brand Slogan & Status (Address & sales email removed per request) */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-bold text-slate-200 tracking-wide font-['Space_Grotesk'] text-[11px]">PT DSAB</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-[11px] font-medium">Building Excellence, Delivering Trust</span>
          </div>

          {/* Right Partner & Hotline */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 pr-4 border-r border-slate-700/60 text-[11px] text-slate-400">
              <span>{language === 'id' ? 'Authorized Partner:' : 'Authorized Partner:'}</span>
              <span className="font-semibold text-blue-300">FUJIYANG®</span>
              <span className="text-slate-600">•</span>
              <span className="font-semibold text-red-400">SHARP ELEVATORS</span>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20mengenai%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>24/7 Hotline: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2.5'
            : 'bg-slate-950/70 backdrop-blur-md border-b border-slate-800/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group focus:outline-none transition-transform hover:scale-105 active:scale-95"
            aria-label="DSAB Lift Home"
          >
            <DSABLogo className="h-12 sm:h-14 md:h-16" />
          </a>

          {/* Desktop Navigation Links (Condensed) */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Beranda */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'text-white bg-slate-800/80 shadow-xs font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              {language === 'id' ? 'Beranda' : 'Home'}
            </a>

            {/* Tentang Kami */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                currentPage === 'about'
                  ? 'text-white bg-blue-600 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              {language === 'id' ? 'Tentang Kami' : 'About Us'}
            </a>

            {/* Produk & Solusi (Sub-menu Dropdown) */}
            <div
              ref={dropdownRef}
              className="relative py-1"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  isDropdownOpen
                    ? 'text-white bg-slate-800/90 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
                aria-expanded={isDropdownOpen}
              >
                <span>{language === 'id' ? 'Produk & Solusi' : 'Products & Solutions'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {/* Sub-menu Floating Card with Seamless Hover Bridge (pt-2) */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="bg-slate-900/98 border border-slate-800/90 rounded-2xl shadow-2xl backdrop-blur-2xl p-2.5">
                    <div className="px-3 py-2 mb-1.5 border-b border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider font-['Space_Grotesk']">
                        {language === 'id' ? 'Kategori & Solusi' : 'Categories & Solutions'}
                      </span>
                      <a
                        href="#products"
                        onClick={(e) => handleNavClick(e, '#products')}
                        className="text-[11px] font-semibold text-slate-300 hover:text-white transition-colors underline decoration-blue-500/50 underline-offset-2"
                      >
                        {language === 'id' ? 'Lihat Semua (9)' : 'View All (9)'}
                      </a>
                    </div>

                    <div className="space-y-1">
                      {subMenuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-800 text-slate-200 hover:text-white transition-all group/item"
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${item.color} group-hover/item:scale-105 transition-transform shadow-xs`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold text-white group-hover/item:text-blue-400 block transition-colors font-['Space_Grotesk']">
                                {item.label}
                              </span>
                              <span className="text-[11px] text-slate-400 group-hover/item:text-slate-300 block truncate leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ */}
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-all"
            >
              {language === 'id' ? 'FAQ' : 'FAQ'}
            </a>

            {/* Kontak */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-all"
            >
              {language === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

          {/* Right Action Tools */}
          <div className="hidden sm:flex items-center gap-3">

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5 text-xs font-semibold">
              <button
                onClick={() => onLanguageChange('id')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'id'
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle (Light / Dark Mode) */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all shadow-sm flex items-center justify-center group"
                title={
                  theme === 'dark'
                    ? language === 'id'
                      ? 'Aktifkan Mode Terang (Light Mode)'
                      : 'Switch to Light Mode'
                    : language === 'id'
                    ? 'Aktifkan Mode Gelap (Dark Mode)'
                    : 'Switch to Dark Mode'
                }
                aria-label="Toggle Light/Dark Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>
            )}

            {/* E-Katalog Button */}
            <button
              onClick={onOpenCatalogModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-blue-500/30 hover:border-blue-400 text-blue-300 hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer group"
              title={language === 'id' ? 'Download E-Katalog FUJIYANG & SHARP (PDF)' : 'Download Catalogs (PDF)'}
            >
              <FileDown className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>{language === 'id' ? 'E-Katalog' : 'E-Catalog'}</span>
            </button>

            {/* WhatsApp / Quote CTA */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20meminta%20penawaran%20harga%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Minta Penawaran' : 'Request Quote'}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 dark:hover:text-amber-300 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600" />
                )}
              </button>
            )}
            <button
              onClick={() => onLanguageChange(language === 'id' ? 'en' : 'id')}
              className="py-1 px-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800/80 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          {/* Brand partnership & theme strip */}
          <div className="flex items-center justify-between py-2 px-3 mb-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Partner:</span>
              <span className="text-blue-400 font-bold">FUJIYANG</span>
              <span className="text-slate-600">|</span>
              <span className="text-red-400 font-bold">SHARP</span>
            </div>
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-semibold text-slate-200"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-500" />
                    <span>Dark</span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="space-y-1 mb-4">
            {/* Beranda */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`block px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                currentPage === 'home'
                  ? 'bg-slate-800 text-white font-bold'
                  : 'text-slate-200 hover:bg-slate-800/90'
              }`}
            >
              {language === 'id' ? 'Beranda' : 'Home'}
            </a>

            {/* Tentang Kami */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className={`block px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors ${
                currentPage === 'about'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-slate-200 hover:bg-slate-800/90'
              }`}
            >
              {language === 'id' ? 'Tentang Kami (Profil & Struktur Organisasi)' : 'About Us & Leadership'}
            </a>

            {/* Produk & Solusi Accordion Header */}
            <div className="pt-1 pb-1">
              <button
                onClick={() => setIsMobileAccordionOpen(!isMobileAccordionOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-bold text-blue-400 bg-slate-900/90 border border-slate-800/90 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Produk & Solusi' : 'Products & Solutions'}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileAccordionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Sub-menu items for mobile */}
              {isMobileAccordionOpen && (
                <div className="pl-3 pr-1 py-2 space-y-1 bg-slate-950/60 rounded-b-lg border-x border-b border-slate-800/40">
                  {subMenuItems.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <a
                        key={sub.id}
                        href={sub.href}
                        onClick={(e) => handleNavClick(e, sub.href)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                      >
                        <div className={`p-1 rounded-md ${sub.color}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-semibold block">{sub.label}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* FAQ */}
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, '#faq')}
              className="block px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800/90 rounded-lg transition-colors"
            >
              {language === 'id' ? 'FAQ' : 'FAQ'}
            </a>

            {/* Kontak */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800/90 rounded-lg transition-colors"
            >
              {language === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 border border-blue-500/40 text-blue-300 hover:text-white hover:bg-slate-800 text-xs font-bold transition-all"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>{language === 'id' ? 'Download E-Katalog (FUJIYANG & SHARP)' : 'Download Catalogs (FUJIYANG & SHARP)'}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'id' ? 'Hubungi WhatsApp 24 Jam' : 'WhatsApp 24/7 Hotline'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
