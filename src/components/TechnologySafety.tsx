import React, { useState } from 'react';
import { Language } from '../types';
import {
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Sparkles,
  Smartphone,
  Mic,
  ScanFace,
  Wind,
  CheckCircle2,
  Award,
  Radio,
  FileCheck2,
  Gauge
} from 'lucide-react';

interface TechnologySafetyProps {
  language: Language;
}

export const TechnologySafety: React.FC<TechnologySafetyProps> = ({ language }) => {
  const [activeTechTab, setActiveTechTab] = useState<'gearless' | 'smart' | 'safety' | 'certs'>('gearless');

  const smartHygieneFeatures = [
    {
      id: 'touchless',
      icon: Wind,
      title: language === 'id' ? 'Non-Contact Safety & Anion Sterilization' : 'Non-Contact Safety & Anion Sterilizer',
      desc: language === 'id'
        ? 'Ventilasi anion aktif dipadukan dengan sinar UV-C pensteril kuman dan bakteri di dalam kabin secara berkelanjutan tanpa menghasilkan gas ozon beracun.'
        : 'Active anion car ventilation combined with UV-C sterilizing light provides continuous air disinfection without producing toxic ozone.'
    },
    {
      id: 'face-rec',
      icon: ScanFace,
      title: language === 'id' ? 'Human-Face Recognition Calling' : 'Human-Face Recognition Dispatch',
      desc: language === 'id'
        ? 'Kamera pintar di pintu lift mengenali wajah penghuni atau VIP secara dinamis dan otomatis mendaftarkan panggilan lantai tanpa perlu menyentuh tombol fisik.'
        : 'Dynamic AI entry camera identifies registered passengers and automatically calls destination floors, eliminating touchpoint infection risks.'
    },
    {
      id: 'voice-call',
      icon: Mic,
      title: language === 'id' ? 'AI Voice Calling & Man-Machine Dialogue' : 'AI Voice Calling Dialogue System',
      desc: language === 'id'
        ? 'Sistem perintah suara bertenaga AI memungkinkan pengguna menyebutkan lantai tujuan secara alami, sangat ramah untuk disabilitas dan lansia.'
        : 'AI-driven voice command recognition sets destination floors through natural human-machine speech dialogue.'
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: language === 'id' ? 'Cell-Phone App Smart Floor-Selection' : 'Cell-Phone App Smart Floor Selection',
      desc: language === 'id'
        ? 'Aplikasi smartphone khusus yang memanggil lift via WiFi, Bluetooth Low Energy (BLE), atau QR code saat penumpang mendekati area lobby.'
        : 'Dedicated mobile app pre-sets target floors via WiFi, Bluetooth, or offline beacons as passengers approach the elevator lobby.'
    }
  ];

  const certifications = [
    { code: 'ISO 9001', name: 'Quality Management System', desc: language === 'id' ? 'Standar Manajemen Mutu Internasional' : 'International Quality Standard' },
    { code: 'ISO 14001', name: 'Environmental Management System', desc: language === 'id' ? 'Standar Manajemen Lingkungan & Eco-Friendly' : 'Environmental Protection Standard' },
    { code: 'OHSAS 18001', name: 'Occupational Health & Safety', desc: language === 'id' ? 'Keselamatan & Kesehatan Kerja' : 'Occupational Health Standard' },
    { code: 'CE Certified', name: 'European Conformity', desc: language === 'id' ? 'Standar Keselamatan Elevator Uni Eropa EN81' : 'European Safety Directive EN81' },
    { code: 'SASO Certified', name: 'Saudi Standards Conformity', desc: language === 'id' ? 'Sertifikasi Mutu Kawasan Timur Tengah' : 'Middle East Quality Compliance' },
    { code: 'CU-TR Standard', name: 'Eurasian Customs Union', desc: language === 'id' ? 'Standar Teknis Keselamatan Eurasia' : 'Eurasian Technical Conformity' }
  ];

  return (
    <section id="technology" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Rekayasa & Teknologi Cerdas' : 'Engineering & Smart Technology'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Presisi Teknik Berkecepatan Tinggi, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Higienis & Berstandar Keamanan Tertinggi
                </span>
              </>
            ) : (
              <>
                High-Speed Precision Engineering, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Smart Hygiene & Maximum Safety
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Motor traksi Permanent Magnet Synchronous (PMSM), Destination Dispatch System (DDS), dan sistem keselamatan berlapis berstandar FUJI Japan.'
              : 'Permanent Magnet Synchronous (PMSM) gearless machines, Destination Dispatch (DDS), and multi-layer fail-safe mechanisms.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap gap-1 max-w-2xl justify-center">
            <button
              onClick={() => setActiveTechTab('gearless')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTechTab === 'gearless'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'id' ? 'Mesin Traksi Gearless' : 'PMSM Gearless Motor'}
            </button>
            <button
              onClick={() => setActiveTechTab('smart')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTechTab === 'smart'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'id' ? 'Fitur Higienis & Smart AI' : 'Smart & Hygiene AI'}
            </button>
            <button
              onClick={() => setActiveTechTab('safety')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTechTab === 'safety'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'id' ? 'Sistem Keselamatan & ARD' : 'Safety Systems & ARD'}
            </button>
            <button
              onClick={() => setActiveTechTab('certs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTechTab === 'certs'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {language === 'id' ? 'Sertifikasi Global' : 'Certifications'}
            </button>
          </div>
        </div>

        {/* Tab 1: Gearless Traction Machine */}
        {activeTechTab === 'gearless' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  PMSM TRACTION MACHINE SERIES
                </span>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  GTW9S • GTW10 • GTNH2 • GTN3
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {language === 'id'
                  ? 'Mesin traksi gearless sinkron magnet permanen FUJIYANG & SHARP menghasilkan efisiensi energi hingga 40% lebih hemat dibandingkan mesin gearbox konvensional. Suara operasi sangat senyap (<48 dB) dengan akselerasi halus tanpa getaran.'
                  : 'Permanent magnet synchronous gearless traction machines deliver up to 40% energy savings over traditional geared motors. Ultra-low operating noise (<48 dB) and vibration-free acceleration.'}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">{language === 'id' ? 'Kapasitas Maksimal:' : 'Max Load Capacity:'}</span>
                  <strong className="text-lg font-mono text-white">Hingga 3.000 kg</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">{language === 'id' ? 'Kecepatan Teruji:' : 'Rated Speed:'}</span>
                  <strong className="text-lg font-mono text-blue-400">Hingga 7.0 m/s</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">{language === 'id' ? 'Efisiensi Energi:' : 'Energy Efficiency:'}</span>
                  <strong className="text-lg font-mono text-emerald-400">Hemat ~40% Listrik</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 block">{language === 'id' ? 'Emisi Kebisingan:' : 'Noise Level:'}</span>
                  <strong className="text-lg font-mono text-amber-400">&lt; 48 dB (Super Silent)</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-300">
                  {language === 'id' ? 'Model Mesin Traksi Resmi' : 'Official Gearless Models'}
                </span>
                <span className="text-[11px] font-mono text-blue-400 font-semibold">
                  JAPAN TECH PMSM
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'GTW9S', type: 'Residential & Commercial Low-Rise', spec: 'Load 450 - 1000kg • Speed 1.0-1.75 m/s' },
                  { name: 'GTW10', type: 'Commercial Mid-Rise & Hospital', spec: 'Load 800 - 1600kg • Speed 1.75-2.5 m/s' },
                  { name: 'GTNH2', type: 'High-Speed Office & Hotel Towers', spec: 'Load 1000 - 2000kg • Speed up to 4.0 m/s' },
                  { name: 'GTN3', type: 'Heavy Freight & High-Capacity', spec: 'Load up to 3000kg • Heavy Industrial' }
                ].map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-white font-mono text-base font-black">{m.name}</strong>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-semibold text-blue-300 block">{m.type}</span>
                    <span className="text-[11px] text-slate-400 block mt-1">{m.spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Smart & Hygiene AI */}
        {activeTechTab === 'smart' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {smartHygieneFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Safety Systems & ARD */}
        {activeTechTab === 'safety' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                ARD (Auto Rescue Device)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'id'
                  ? 'Saat listrik gedung padam mendadak, sistem baterai darurat ARD otomatis menggerakkan lift ke lantai terdekat dan membuka pintu secara aman untuk evakuasi penumpang tanpa terjebak.'
                  : 'During main power blackout, the integrated ARD battery backup moves the elevator safely to the nearest floor and opens doors for passenger exit.'}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                Destination Dispatch (DDS)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'id'
                  ? 'Alokasi cerdas penumpang berdasarkan lantai tujuan di hall panel lobby. Mengurangi waktu tunggu hingga 35% dan mencegah penumpukan penumpang di dalam satu kabin.'
                  : 'Allocates passengers to dedicated cabins at the hall panel, cutting peak waiting times by 35% and streamlining building traffic.'}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                Photocell Curtain & 5-Way Intercom
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'id'
                  ? 'Tirai sensor inframerah multi-beam menutup penuh tinggi pintu mencegah tangan atau barang terjepit. Dilengkapi intercom 5-arah terhubung ke ruang kontrol dan call center 24 jam.'
                  : 'Full-height multi-beam infrared light curtain prevents door pinch injuries, paired with a 5-way intercom linked to building security and DSAB 24/7 hotline.'}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Certifications & Quality Compliance */}
        {activeTechTab === 'certs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
            {certifications.map((c, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0 font-bold font-mono">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white font-['Space_Grotesk'] text-base block">
                    {c.code}
                  </span>
                  <span className="text-xs font-semibold text-blue-300 block mb-1">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {c.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
