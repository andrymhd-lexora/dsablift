import React from 'react';
import { Language } from '../types';
import { REASONS_LIST, COMPANY_INFO } from '../data/elevatorData';
import {
  Award,
  Building2,
  Clock,
  Cpu,
  ShieldCheck,
  Wrench,
  PackageCheck,
  BadgePercent,
  Zap,
  Users,
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  language
}) => {
  const iconMap: Record<string, any> = {
    Award,
    Building2,
    Clock,
    Cpu,
    ShieldCheck,
    Wrench,
    PackageCheck,
    BadgePercent,
    Zap,
    Users,
    FileCheck2
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Kenapa Memilih DSAB Lift' : 'Why Choose DSAB Lift'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                11 Alasan Utama Memilih <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  FUJIYANG & SHARP Bersama DSAB Lift
                </span>
              </>
            ) : (
              <>
                11 Solid Reasons to Choose <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  FUJIYANG & SHARP with DSAB Lift
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Kombinasi reputasi global pabrikan FUJI Japan & SHARP dengan kecepatan layanan dan teknisi tersertifikasi di Indonesia.'
              : 'Combining global manufacturing precision with fast local supply and certified technical support in Indonesia.'}
          </p>
        </div>

        {/* 11 Reasons Dynamic Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {REASONS_LIST.map((item) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-black text-white font-['Space_Grotesk'] bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-['Space_Grotesk'] mb-1.5 group-hover:text-blue-300 transition-colors">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>No. {item.id < 10 ? `0${item.id}` : item.id}</span>
                  <span className="text-blue-400/80 font-medium">DSAB Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
              {language === 'id' ? 'Siap Merancang Transportasi Vertikal Gedung Anda?' : 'Ready to Elevate Your Building Project?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'id'
                ? 'Dapatkan konsultasi gratis gambar shaft sipil, spesifikasi teknis, dan penawaran resmi untuk proyek Anda.'
                : 'Get complimentary civil hoistway drawing review, technical consulting, and official quotation for your project.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20proyek%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>{language === 'id' ? 'Konsultasi Gratis via WhatsApp' : 'Free Consultation'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
