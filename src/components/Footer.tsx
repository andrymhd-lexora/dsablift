import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import { DSABLogo, FujiyangLogo, SharpLogo } from './Logos';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe2,
  ArrowUp,
  Heart,
  FileText
} from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenCatalogModal: () => void;
  onNavigate?: (page: 'home' | 'about', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenCatalogModal,
  onNavigate
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand Profile & Authorized Partners */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <DSABLogo className="h-14 sm:h-16 md:h-18" />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {language === 'id'
                ? 'PT DSAB adalah distributor dan mitra resmi terpercaya untuk penjualan, instalasi, modernisasi, dan after-sales service FUJIYANG & SHARP Elevator & Escalator di Indonesia.'
                : 'PT DSAB is the official authorized distributor and engineering partner for FUJIYANG & SHARP Elevators & Escalators across Indonesia.'}
            </p>

            {/* Partner Badges */}
            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                {language === 'id' ? 'Mitra Resmi Pabrikan Global:' : 'Authorized Global Partners:'}
              </span>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <FujiyangLogo compact />
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <SharpLogo compact />
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Products Quick Links */}
          <div>
            <h4 className="text-white font-bold font-['Space_Grotesk'] text-sm mb-4">
              {language === 'id' ? 'Lini Produk' : 'Products'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Passenger Elevator</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Panoramic Glass Elevator</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Hospital & Bed Elevator</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Home & Villa Elevator</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Freight & Car Elevator</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition-colors">Escalator & Moving Walk</a></li>
            </ul>
          </div>

          {/* Col 4: Services & Solutions */}
          <div>
            <h4 className="text-white font-bold font-['Space_Grotesk'] text-sm mb-4">
              {language === 'id' ? 'Layanan & Bantuan' : 'Services & Support'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('about');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {language === 'id' ? 'Tentang Kami & Struktur Organisasi' : 'About Us & Leadership'}
                </button>
              </li>
              <li>
                <a
                  href="/COMPANY_PROFILE_DSAB_PRIME_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="COMPANY_PROFILE_DSAB_PRIME_2026.pdf"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline text-left inline-flex items-center gap-1 font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Unduh Company Profile 2026 (PDF)' : 'Company Profile 2026 (PDF)'}</span>
                </a>
              </li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{language === 'id' ? 'Pengadaan & Instalasi' : 'Supply & Installation'}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{language === 'id' ? 'Perawatan Berkala 35 Titik' : '35-Point Maintenance'}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{language === 'id' ? 'Modernisasi & Retrofit' : 'Modernization & Retrofit'}</a></li>
              <li>
                <a href="#contact" className="text-blue-400 hover:underline text-left">
                  {language === 'id' ? 'Konsultasi & Penawaran Resmi' : 'Consultation & Quotation'}
                </a>
              </li>
              <li>
                <button onClick={onOpenCatalogModal} className="text-indigo-400 hover:underline text-left cursor-pointer">
                  {language === 'id' ? 'Download E-Katalog Produk PDF' : 'Download E-Catalog PDF'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-white font-bold font-['Space_Grotesk'] text-sm mb-4">
              {language === 'id' ? 'Hubungi Kantor' : 'Head Office'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="leading-relaxed">
                {COMPANY_INFO.address}
              </p>
              <p>
                <strong className="text-white block">WhatsApp Hotline:</strong>
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} className="text-emerald-400 hover:underline font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <strong className="text-white block">Email:</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} PT DSAB (DSAB Lift). All Rights Reserved. Authorized Partner of FUJIYANG & SHARP Elevators.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>ISO 9001 • CE • Kemenaker RI</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
              title="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
