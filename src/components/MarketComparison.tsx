import React from 'react';
import { Language } from '../types';
import { COMPARISON_TABLE, COMPANY_INFO } from '../data/elevatorData';
import { FujiyangLogo } from './Logos';
import {
  Scale,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingDown
} from 'lucide-react';

interface MarketComparisonProps {
  language: Language;
}

export const MarketComparison: React.FC<MarketComparisonProps> = ({
  language
}) => {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Komparasi Pasar & Nilai Investasi' : 'Market Comparison & Investment Value'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Modern Technology, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Competitive Value for Money
                </span>
              </>
            ) : (
              <>
                Modern Technology, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Exceptional Value for Money
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'FUJIYANG & SHARP hadir sebagai alternatif cerdas: spesifikasi dan teknologi setara brand global tier-1 dengan biaya investasi & pemeliharaan yang jauh lebih efisien.'
              : 'FUJIYANG & SHARP are positioned as the smart alternative: tier-1 global elevator technology with significant savings in procurement and ongoing lifecycle maintenance.'}
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/90 text-xs uppercase tracking-wider font-bold">
                  <th className="py-4 px-5 text-slate-300 w-1/4">
                    {language === 'id' ? 'Parameter Evaluasi' : 'Evaluation Criteria'}
                  </th>
                  <th className="py-4 px-5 text-blue-400 bg-blue-950/40 border-x border-blue-500/30 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-sm">FUJIYANG / SHARP</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-600 text-white text-[9px] font-bold">
                        DSAB LIFT
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-slate-300 w-1/6">KONE</th>
                  <th className="py-4 px-4 text-slate-300 w-1/6">Schindler</th>
                  <th className="py-4 px-4 text-slate-300 w-1/6">Mitsubishi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-slate-200">
                      {row.parameter[language]}
                    </td>
                    <td className="py-3.5 px-5 font-bold text-blue-300 bg-blue-950/25 border-x border-blue-500/20">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{row.fujiyang}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{row.kone}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.schindler}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.mitsubishi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between px-5">
            <span>*Konfigurasi dan kecepatan bervariasi menurut seri/model masing-masing merek; data perbandingan katalog 2026.</span>
            <span className="text-blue-400 font-semibold">Authorized Partner: DSAB Lift</span>
          </div>
        </div>

        {/* 3 Key Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
              {language === 'id' ? 'Kecepatan Pengadaan (1.5-2 Bulan)' : 'Rapid 1.5-2 Month Lead Time'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Tidak perlu menunggu 4-6 bulan seperti merek eropa/jepang lainnya. Proyek konstruksi Anda berjalan lebih cepat.'
                : 'Cut project waiting times in half compared to 4-6 months typical lead times of European/Japanese competitors.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
              {language === 'id' ? 'Garansi Unit Resmi 3 Tahun' : 'Up to 3-Year Factory Warranty'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Garansi mesin traksi dan kontroler 3 tahun penuh + 12 bulan gratis pemeliharaan berkala.'
                : '3-year full warranty on PMSM motors & integrated controllers + 12 months complimentary servicing.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
              {language === 'id' ? 'Biaya Maintenance Super Hemat' : 'Predictable Lifecycle Cost'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Biaya servis berkala pasca-garansi mulai Rp 1.000.000 / bulan dengan ketersediaan suku cadang 25-30 tahun.'
                : 'Routine monthly maintenance from only Rp 1.0M/month with 25-30 years spare parts availability guarantee.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
