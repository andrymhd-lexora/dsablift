import React, { useState } from 'react';
import { Language, FAQItem } from '../types';
import { TESTIMONIALS, FAQS, COMPANY_INFO } from '../data/elevatorData';
import {
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Star,
  Quote,
  Building,
  CheckCircle2,
  Sparkles,
  Phone,
  Search
} from 'lucide-react';

interface TestimonialsFAQProps {
  language: Language;
}

export const TestimonialsFAQ: React.FC<TestimonialsFAQProps> = ({ language }) => {
  const [openFaqId, setOpenFaqId] = useState<string | number | null>(1);
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getComment = (testi: any) => {
    if (testi.comment && typeof testi.comment === 'object') {
      return testi.comment[language] || testi.comment.id || testi.comment.en || '';
    }
    if (testi.content && typeof testi.content === 'object') {
      return testi.content[language] || testi.content.id || testi.content.en || '';
    }
    return '';
  };

  const getRole = (testi: any) => {
    if (testi.role && typeof testi.role === 'object') {
      return testi.role[language] || testi.role.id || testi.role.en || '';
    }
    return testi.role || '';
  };

  const getName = (testi: any) => testi.name || testi.clientName || 'Klien DSAB';
  const getProject = (testi: any) => testi.project || testi.projectRef || testi.company || '';

  const filteredFaqs = (FAQS || []).filter((faq) => {
    if (!faq || !faq.question || !faq.answer) return false;
    const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
    const q = (faq.question[language] || faq.question.id || faq.question.en || '').toLowerCase();
    const a = (faq.answer[language] || faq.answer.id || faq.answer.en || '').toLowerCase();
    const matchesSearch = searchQuery.trim() === '' || q.includes(searchQuery.toLowerCase()) || a.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{language === 'id' ? 'Testimoni & Kepuasan Klien' : 'Client Testimonials & Feedback'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Apa Kata Para Pengembang, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Chief Engineer & Pemilik Proyek?
                </span>
              </>
            ) : (
              <>
                Trusted by Developers, <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Chief Engineers & Project Owners
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Testimonials 4-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {(TESTIMONIALS || []).map((testi) => (
            <div
              key={testi.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testi.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-blue-500/50 transition-colors" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic mb-6">
                  "{getComment(testi)}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <strong className="text-sm font-bold text-white block font-['Space_Grotesk']">
                  {getName(testi)}
                </strong>
                <span className="text-[11px] text-blue-400 block font-medium">
                  {getRole(testi)}
                </span>
                <span className="text-[11px] text-slate-300 block truncate mt-0.5">
                  {getProject(testi)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 pt-10 border-t border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Pertanyaan Umum (FAQ)' : 'Frequently Asked Questions'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] mb-3">
            {language === 'id' ? 'Informasi Teknis & Pengadaan Lift' : 'Technical & Procurement Guidelines'}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            {language === 'id'
              ? 'Temukan jawaban cepat seputar garansi, waktu fabrikasi, persyaratan shaft sipil, dan izin keselamatan Disnaker.'
              : 'Find answers regarding warranty terms, delivery timelines, civil shaft requirements, and Disnaker safety certification.'}
          </p>
        </div>

        {/* FAQ Search Bar & Categories */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === 'id' ? 'Cari pertanyaan (misal: garansi, listrik mati, shaft, harga)...' : 'Search question keywords...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-11 pr-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder:text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: { id: 'Semua FAQ', en: 'All FAQ' } },
              { id: 'general', label: { id: 'Umum & Garansi', en: 'General & Warranty' } },
              { id: 'safety', label: { id: 'Keamanan & ARD', en: 'Safety & ARD' } },
              { id: 'technical', label: { id: 'Teknis Sipil', en: 'Civil Specs' } },
              { id: 'license', label: { id: 'Izin Disnaker', en: 'Permits' } },
              { id: 'maintenance', label: { id: 'Biaya Perawatan', en: 'Maintenance' } }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFaqCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  faqCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-slate-950 border-blue-500/50 shadow-lg' : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">
                    {faq.question[language]}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-200">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-300 mb-3">
            {language === 'id' ? 'Punya pertanyaan teknis spesifik untuk proyek Anda?' : 'Have specific technical questions for your building?'}
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20memiliki%20pertanyaan%20seputar%20pengadaan%20lift`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-blue-300 border border-blue-500/30 text-xs font-bold transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>{language === 'id' ? 'Chat Langsung dengan Technical Consultant' : 'Talk with Technical Consultant'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
