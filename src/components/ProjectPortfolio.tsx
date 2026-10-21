import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { PROJECTS, COMPANY_INFO } from '../data/elevatorData';
import {
  Building2,
  MapPin,
  Layers,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  X,
  MessageSquare
} from 'lucide-react';

interface ProjectPortfolioProps {
  language: Language;
}

export const ProjectPortfolio: React.FC<ProjectPortfolioProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: { id: 'Semua Proyek (6)', en: 'All Projects (6)' } },
    { id: 'hospital', label: { id: 'Rumah Sakit & Medis', en: 'Healthcare' } },
    { id: 'corporate', label: { id: 'Gedung Kantor / Tower', en: 'Office Towers' } },
    { id: 'hotel', label: { id: 'Hotel & Hospitality', en: 'Hotels & Resorts' } },
    { id: 'transit', label: { id: 'Infrastruktur Publik / LRT', en: 'Public Transit' } },
    { id: 'residence', label: { id: 'Residensial Mewah / Villa', en: 'Luxury Residential' } }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Portofolio & Rekam Jejak Proyek' : 'Project Portfolio & Installations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Terpercaya di Berbagai <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Landmark Gedung & Infrastruktur Indonesia
                </span>
              </>
            ) : (
              <>
                Trusted Across Iconic <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Commercial Towers & Public Infrastructure
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Dari gedung perkantoran 15 lantai, stasiun LRT Jakarta, rumah sakit umum, hingga villa privat mewah di Jabodetabek.'
              : 'From 15-floor corporate headquarters and LRT transit stations to regional public hospitals and bespoke private villas.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-slate-200 border border-slate-700">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Units Installed Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-mono font-bold shadow-md">
                    {project.units}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-blue-300 transition-colors mb-2">
                    {project.title[language]}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description[language]}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{language === 'id' ? 'Tipe Unit:' : 'Unit Type:'}</span>
                      <strong className="text-slate-200">{project.type[language]}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{language === 'id' ? 'Spesifikasi:' : 'Specs:'}</span>
                      <span className="text-blue-300 font-mono font-semibold">{project.specs}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    <span>{language === 'id' ? 'Lihat Detail Proyek' : 'View Project Case'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[10px] text-slate-500 font-mono">
                    DSAB Lift Partner
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeProjectModal.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                  {activeProjectModal.title[language]}
                </h3>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="h-60 rounded-xl overflow-hidden relative">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-slate-950/80 px-3 py-1 rounded-md text-xs font-mono text-white border border-slate-700">
                  {activeProjectModal.units}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeProjectModal.description[language]}
              </p>

              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">{language === 'id' ? 'Kategori Proyek:' : 'Category:'}</span>
                  <strong className="text-white">{activeProjectModal.type[language]}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">{language === 'id' ? 'Konfigurasi Teknis:' : 'Technical Spec:'}</span>
                  <strong className="text-blue-300 font-mono">{activeProjectModal.specs}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {language === 'id' ? 'Ingin spesifikasi serupa untuk proyek Anda?' : 'Need similar specs for your development?'}
              </span>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20tertarik%20dengan%20proyek%20referensi%20${encodeURIComponent(activeProjectModal.title[language])}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'id' ? 'Konsultasi Proyek Serupa' : 'Inquire Similar'}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
