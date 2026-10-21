import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import { FujiyangLogo, SharpLogo } from './Logos';
import {
  ShieldCheck,
  Zap,
  Building2,
  Clock,
  ArrowRight,
  Download,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenCatalogModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenCatalogModal
}) => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [targetFloor, setTargetFloor] = useState(15);
  const [isMoving, setIsMoving] = useState(false);
  const [doorState, setDoorState] = useState<'closed' | 'opening' | 'open' | 'closing'>('closed');

  // Interactive elevator shaft simulator in hero card
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor((prev) => {
        if (prev < targetFloor) {
          return prev + 1;
        } else if (prev > targetFloor) {
          return prev - 1;
        } else {
          // Reached target, pick new random floor
          const next = Math.floor(Math.random() * 28) + 1;
          setTargetFloor(next);
          return prev;
        }
      });
    }, 1800);

    return () => clearInterval(interval);
  }, [targetFloor]);

  const quickStats = [
    {
      stat: '14+ Thn',
      label: language === 'id' ? 'Pengalaman Industri' : 'Years Experience',
      sub: language === 'id' ? 'Sejak 2010 di Indonesia' : 'Established in Indonesia'
    },
    {
      stat: '1,000+',
      label: language === 'id' ? 'Unit Beroperasi' : 'Units Installed',
      sub: language === 'id' ? 'RS, Hotel, Gedung & Residensial' : 'Hospitals, Hotels, Towers'
    },
    {
      stat: '7.0 m/s',
      label: language === 'id' ? 'Kecepatan Tertinggi' : 'Max High Speed',
      sub: language === 'id' ? 'Akselerasi Super Mulus' : 'Ultra-Smooth Acceleration'
    },
    {
      stat: '66,000 m²',
      label: language === 'id' ? 'Fasilitas Pabrik' : 'Factory Facility',
      sub: language === 'id' ? 'Menara Uji 100m FUJIYANG' : '100m Testing Tower'
    }
  ];

  return (
    <section id="home" className="relative min-h-[92vh] pt-24 sm:pt-28 pb-16 overflow-hidden flex items-center bg-slate-950">
      {/* Dynamic Background Mesh & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Partnership Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-semibold text-slate-200 shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-blue-300 font-bold">PT DSAB</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                {language === 'id' ? 'Authorized Sales & After-Sales Partner' : 'Authorized Sales & After-Sales Partner'}
              </span>
            </div>

            {/* Brand Partners Badge Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6 p-2 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider pl-2">
                Official Brands:
              </span>
              <div className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
                <FujiyangLogo compact />
              </div>
              <div className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center gap-2">
                <SharpLogo compact />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-['Space_Grotesk']">
              {language === 'id' ? (
                <>
                  Elevating <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Every Possibility</span>
                  <br />
                  <span className="text-slate-200 text-2xl sm:text-3xl md:text-4xl font-bold block mt-2">
                    Solusi Lift & Eskalator Berstandar Global di Indonesia
                  </span>
                </>
              ) : (
                <>
                  Elevating <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Every Possibility</span>
                  <br />
                  <span className="text-slate-200 text-2xl sm:text-3xl md:text-4xl font-bold block mt-2">
                    Precision Vertical Transportation for Indonesia
                  </span>
                </>
              )}
            </h1>

            {/* Subheading / Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {language === 'id'
                ? 'DSAB Lift menghadirkan teknologi elevator FUJI Japan dan SHARP berkecepatan hingga 7.0 m/s, hemat energi PMSM gearless, dan garansi resmi 3 tahun. Didukung layanan instalasi & tim teknisi 24/7 di Jakarta.'
                : 'DSAB Lift brings FUJI Japan and SHARP elevator technology rated up to 7.0 m/s with energy-saving PMSM gearless motors, 3-year warranty, and 24/7 dedicated Jakarta technical support network.'}
            </p>

            {/* Key Assurance Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full mb-8 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{language === 'id' ? 'Garansi Unit 3 Tahun' : '3-Year Warranty'}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{language === 'id' ? '1.5 - 2 Bulan Delivery' : 'Fast 1.5-2 Mo Delivery'}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{language === 'id' ? 'Free Service 1 Tahun' : '12-Month Free Service'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Request Quote */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20tertarik%20untuk%20konsultasi%20dan%20meminta%20penawaran%20harga%20lift`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{language === 'id' ? 'Minta Penawaran Harga' : 'Request a Quote'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Brochure Button */}
              <button
                onClick={onOpenCatalogModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>{language === 'id' ? 'Download E-Katalog PDF' : 'Download E-Catalog'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Luxury Elevator Cabin & Smart Dispatch Simulator */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Header Status of Elevator System */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200 font-['Space_Grotesk']">
                    INTEGRATED CONTROLLER 7.0 M/S
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-900/60 text-blue-300 text-[10px] font-bold border border-blue-700/50">
                  PMSM GEARLESS
                </span>
              </div>

              {/* Realistic Elevator Simulator Window */}
              <div className="grid grid-cols-12 gap-4 items-stretch mb-5">
                
                {/* Visual Elevator Shaft & Moving Cabin */}
                <div className="col-span-8 bg-slate-950 rounded-xl p-4 border border-slate-800/80 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
                  {/* Shaft Glass Background lines */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-blue-500/20" />
                  <div className="absolute top-0 bottom-0 right-4 w-0.5 bg-blue-500/20" />

                  {/* Floor Level Display inside cabin */}
                  <div className="flex items-center justify-between z-10 bg-slate-900/80 p-2.5 rounded-lg border border-slate-700/50 backdrop-blur-sm">
                    <div>
                      <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">
                        Current Floor
                      </span>
                      <div className="text-2xl font-black text-white font-['Space_Grotesk'] flex items-baseline gap-1">
                        <span className="text-blue-400">L{currentFloor < 10 ? `0${currentFloor}` : currentFloor}</span>
                        <span className="text-[11px] font-normal text-slate-400">/ L28</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-medium text-slate-400 block uppercase tracking-wider">
                        Destination
                      </span>
                      <div className="text-xs font-bold text-amber-400 font-['Space_Grotesk']">
                        Target L{targetFloor}
                      </div>
                    </div>
                  </div>

                  {/* Cabin Illustration Card */}
                  <div className="my-auto py-3 px-4 rounded-xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-indigo-950/60 border border-blue-500/30 text-center relative z-10 shadow-lg">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-blue-200">
                        FUJIYANG & SHARP PMSM
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Noise &lt; 48dB • VVVF Smooth Drive • ARD Safe Return
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-['Space_Grotesk']">
                      <span>Speed: <strong className="text-white">2.5 m/s</strong></span>
                      <span>Load: <strong className="text-white">1,000 kg</strong></span>
                      <span>Status: <strong className="text-emerald-400">NORMAL</strong></span>
                    </div>
                  </div>

                  {/* Real-time safety telemetry */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800 z-10">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> Photocell Active
                    </span>
                    <span>VVVF Inverter 98.4%</span>
                  </div>
                </div>

                {/* Floor Dispatcher Buttons Column */}
                <div className="col-span-4 bg-slate-950 rounded-xl p-3 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2 text-center">
                      Quick Call
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[1, 5, 12, 19, 25, 28].map((fl) => (
                        <button
                          key={fl}
                          onClick={() => setTargetFloor(fl)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                            targetFloor === fl
                              ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                          }`}
                        >
                          L{fl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800 text-center">
                    <span className="text-[9px] text-slate-400 block mb-1">
                      {language === 'id' ? 'Butuh bantuan cepat?' : 'Need fast help?'}
                    </span>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20tanya%20spesifikasi%20lift`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 px-2 rounded bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold transition-colors"
                    >
                      WA 0858 3083 1654
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick specs pill footer */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">
                    {language === 'id' ? 'Pilihan Jenis Kabin:' : 'Cabin Selection:'}
                  </span>
                  <span className="font-bold text-white text-xs">
                    Passenger • Hospital • Home • Panoramic • Freight
                  </span>
                </div>
                <a
                  href="#products"
                  className="p-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Statistical Ribbon */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {item.stat}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
