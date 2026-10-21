import React from 'react';
import { Language } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/elevatorData';
import {
  Wrench,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  PhoneCall,
  ArrowRight,
  FileCheck2,
  RefreshCw,
  Sparkles
} from 'lucide-react';

interface ServicesMaintenanceProps {
  language: Language;
}

export const ServicesMaintenance: React.FC<ServicesMaintenanceProps> = ({ language }) => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Layanan & Pemeliharaan Terintegrasi' : 'Integrated Services & Maintenance'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                End-to-End Lifecycle Support: <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Supply, Instalasi, Modernisasi & Suku Cadang
                </span>
              </>
            ) : (
              <>
                End-to-End Lifecycle Support: <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Supply, Installation, Modernization & Parts
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Didukung teknisi bersertifikat Kemenaker RI dengan inspeksi 35-titik keselamatan dan respon darurat 24 jam berbasis di Jakarta Selatan.'
              : 'Backed by certified engineers with 35-point safety inspection checklists and 24/7 emergency response based in Jakarta.'}
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    DSAB Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-3 group-hover:text-blue-300 transition-colors">
                  {srv.title[language]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {srv.description[language]}
                </p>

                <div className="space-y-2 mb-6">
                  {srv.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{pt[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20layanan%20${encodeURIComponent(srv.title[language])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>{language === 'id' ? 'Konsultasikan Layanan Ini' : 'Inquire Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-slate-300">
                  Respon Cepat
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 Emergency Dispatch Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400 flex-shrink-0">
              <PhoneCall className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded bg-rose-900/60 text-rose-300 text-[10px] font-bold uppercase tracking-wider border border-rose-700/50">
                24/7 EMERGENCY HOTLINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mt-1">
                {language === 'id' ? 'Layanan Darurat & Teknisi Siaga 24 Jam' : '24/7 Rapid Emergency Response Team'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {language === 'id'
                  ? 'Tim teknisi siaga darurat untuk penanganan macet penumpang, gangguan kelistrikan, dan kerusakan mendesak di Jabodetabek.'
                  : 'On-call emergency dispatch team for passenger entrapment rescue, electrical fault recovery, and urgent repairs.'}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=URGENT%20-%20Halo%20DSAB%20Lift,%20saya%20membutuhkan%20bantuan%20darurat%20teknisi%20lift`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{language === 'id' ? 'Hubungi Hotline Darurat Sekarang' : 'Call Emergency Hotline'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
