import React, { useState } from 'react';
import { Language, CabinStyle } from '../types';
import { CABIN_STYLES, COMPANY_INFO } from '../data/elevatorData';
import {
  Sparkles,
  Palette,
  Eye,
  Sliders,
  CheckCircle2,
  Share2,
  MessageSquare,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface CabinVisualizerProps {
  language: Language;
}

export const CabinVisualizer: React.FC<CabinVisualizerProps> = ({ language }) => {
  const [selectedStyle, setSelectedStyle] = useState<CabinStyle>(CABIN_STYLES[0]);
  const [handrailOption, setHandrailOption] = useState<'standard' | 'gold' | 'wood' | 'black'>('standard');
  const [lightingOption, setLightingOption] = useState<'warm' | 'cool' | 'luxury-gold' | 'ambient-blue'>('cool');
  const [copStyle, setCopStyle] = useState<'hairline' | 'mirror-gold' | 'touch-glass'>('hairline');

  const handrailLabels = {
    standard: { id: 'Hairline Stainless Steel', en: 'Hairline Stainless' },
    gold: { id: 'Titanium PVD Gold', en: 'Titanium Gold' },
    wood: { id: 'Polished Solid Wood', en: 'Solid Hardwood' },
    black: { id: 'Matte Black Anodized', en: 'Matte Black' }
  };

  const lightingGradients = {
    cool: 'from-blue-400/20 via-slate-800/80 to-slate-950',
    warm: 'from-amber-400/25 via-amber-950/40 to-slate-950',
    'luxury-gold': 'from-yellow-300/30 via-yellow-950/50 to-slate-950',
    'ambient-blue': 'from-cyan-400/30 via-blue-950/60 to-slate-950'
  };

  return (
    <section id="cabin-customizer" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Studio Desain & Dekorasi Kabin' : 'Cabin Interior Design Studio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Kustomisasi Kabin Mewah <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Sesuai Karakter Arsitektur Gedung
                </span>
              </>
            ) : (
              <>
                Luxury Cabin Customization <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Matched to Your Architectural Vision
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Mulai dari stainless steel hairline modern, titanium mirror-etched gold klasik, hingga perpaduan kayu dan marmer Italia untuk hotel, residensial, dan kantor.'
              : 'From contemporary hairline stainless to titanium gold etching and authentic Italian marble finishes for luxury hospitality and corporate towers.'}
          </p>
        </div>

        {/* Customizer Interactive Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual 2.5D Cabin Simulator Box */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
            
            {/* Visualizer Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono font-bold text-white uppercase tracking-wider">
                  Model Ref: {selectedStyle.code}
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-semibold text-blue-300 uppercase">
                {selectedStyle.series} Series
              </span>
            </div>

            {/* 3D Simulated Elevator Interior Perspective Stage */}
            <div className={`relative h-[340px] sm:h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-b ${lightingGradients[lightingOption]} border border-slate-700/60 p-6 flex flex-col justify-between shadow-inner transition-all duration-500`}>
              
              {/* Ceiling Perspective Panel */}
              <div className="w-full h-14 rounded-lg bg-slate-900/90 border-2 border-slate-600/60 flex items-center justify-around px-8 shadow-md relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-white/40 blur-xs shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                <div className="w-12 h-4 rounded-md bg-white/50 blur-xs shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
                <div className="w-8 h-8 rounded-full bg-white/40 blur-xs shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                <span className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-400">
                  LED CEILING
                </span>
              </div>

              {/* Rear Wall & Perspective Side Wall Panels */}
              <div className="flex-1 my-3 flex items-center justify-between gap-4 px-2 relative">
                {/* Left Wall Panel Angle */}
                <div className="w-16 sm:w-24 h-full rounded bg-gradient-to-r from-slate-900 via-slate-800 to-slate-800/80 border-r border-slate-700 shadow-md relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                  <span className="text-[9px] text-slate-500 -rotate-90 uppercase font-mono tracking-widest">
                    Side Wall
                  </span>
                </div>

                {/* Center Rear Luxury Feature Wall */}
                <div className="flex-1 h-full rounded-lg bg-slate-900/95 border border-slate-700/80 p-4 flex flex-col items-center justify-between relative shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  {/* Etched Pattern or Wood grain simulation */}
                  <div className="w-full h-full absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-48 h-48 border border-dashed rounded-full" style={{ borderColor: selectedStyle.accentColor }} />
                  </div>

                  {/* Rear Handrail */}
                  <div
                    className="w-4/5 h-3 rounded-full mt-auto mb-6 shadow-lg border relative z-10"
                    style={{
                      backgroundColor:
                        handrailOption === 'gold'
                          ? '#EAB308'
                          : handrailOption === 'wood'
                          ? '#78350F'
                          : handrailOption === 'black'
                          ? '#0F172A'
                          : '#CBD5E1',
                      borderColor: '#475569'
                    }}
                  >
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400 tracking-wider">
                      HANDRAIL
                    </span>
                  </div>

                  {/* Brand Watermark Badge on Rear Wall */}
                  <div className="text-[10px] font-bold text-slate-400/90 font-['Space_Grotesk'] z-10">
                    DSAB LIFT × {selectedStyle.code}
                  </div>
                </div>

                {/* Right Wall with COP (Car Operating Panel) */}
                <div className="w-16 sm:w-24 h-full rounded bg-gradient-to-l from-slate-900 via-slate-800 to-slate-800/80 border-l border-slate-700 shadow-md flex flex-col items-center justify-center p-2 relative">
                  {/* COP Column */}
                  <div className="w-8 py-3 px-1 rounded bg-slate-950 border border-slate-600 flex flex-col items-center gap-1.5 shadow-md">
                    <div className="w-5 h-3 bg-blue-500/80 rounded text-[7px] font-mono text-center text-white font-bold">
                      15
                    </div>
                    <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-500" />
                    <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-slate-700 border border-slate-500" />
                  </div>
                  <span className="text-[7px] text-slate-400 mt-1 uppercase font-mono">
                    COP PANEL
                  </span>
                </div>
              </div>

              {/* Floor Perspective Slab */}
              <div className="w-full h-16 rounded-lg bg-slate-950 border-2 border-slate-700/80 flex items-center justify-center p-2 shadow-2xl relative">
                <div className="w-full h-full rounded bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center text-[10px] text-slate-300 font-semibold font-mono tracking-wider">
                  {selectedStyle.flooring[language]}
                </div>
              </div>

            </div>

            {/* Selected Spec Live Summary */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'id' ? 'Dinding Kabin:' : 'Cabin Wall:'}</span>
                <strong className="text-white text-right">{selectedStyle.finish[language]}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'id' ? 'Plafon / Ceiling:' : 'Ceiling Style:'}</span>
                <span className="text-slate-300 text-right">{selectedStyle.ceiling[language]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'id' ? 'Handrail Terpilih:' : 'Selected Handrail:'}</span>
                <span className="text-blue-300 font-semibold">{handrailLabels[handrailOption][language]}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {language === 'id' ? 'Tertarik dengan desain ini?' : 'Like this cabin finish?'}
              </span>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20tertarik%20dengan%20dekorasi%20kabin%20model%20${encodeURIComponent(selectedStyle.code + ' - ' + selectedStyle.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Kirim Desain Ini ke WhatsApp' : 'Request This Finish'}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Style Selector & Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Cabin Model Selection Cards */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                {language === 'id' ? 'Pilih Seri Dekorasi Kabin (Katalog)' : 'Select Cabin Model Series'}
              </label>
              <div className="space-y-2.5">
                {CABIN_STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      selectedStyle.id === style.id
                        ? 'bg-slate-900 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                        : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-8 rounded border flex-shrink-0"
                        style={{ backgroundColor: style.accentColor, borderColor: '#64748B' }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-blue-300">
                            {style.code}
                          </span>
                          <span className="text-xs font-semibold text-white">
                            {style.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 block line-clamp-1 mt-0.5">
                          {style.description[language]}
                        </span>
                      </div>
                    </div>

                    {selectedStyle.id === style.id && (
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Handrail Material Config */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {language === 'id' ? 'Opsi Material Handrail' : 'Handrail Finish Options'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['standard', 'gold', 'wood', 'black'] as const).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setHandrailOption(opt)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      handrailOption === opt
                        ? 'bg-blue-600/20 text-blue-300 border-blue-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {handrailLabels[opt][language]}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Ambient Lighting Atmosphere */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                {language === 'id' ? 'Nuansa Pencahayaan Ambient' : 'Ambient Lighting Atmosphere'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cool', label: { id: 'Cool White LED', en: 'Cool White LED' } },
                  { id: 'warm', label: { id: 'Warm Residential', en: 'Warm Amber' } },
                  { id: 'luxury-gold', label: { id: 'Luxury Gold Hue', en: 'Luxury Gold' } },
                  { id: 'ambient-blue', label: { id: 'Corporate Sky Blue', en: 'Sky Blue Glow' } }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLightingOption(l.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      lightingOption === l.id
                        ? 'bg-blue-600/20 text-blue-300 border-blue-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {l.label[language]}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
