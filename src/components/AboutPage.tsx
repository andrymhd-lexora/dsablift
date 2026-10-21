import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import { FujiyangLogo, SharpLogo } from './Logos';
import {
  Building2,
  FileDown,
  ShieldCheck,
  Award,
  Users,
  Target,
  CheckCircle2,
  Phone,
  ArrowLeft,
  ChevronRight,
  HardHat,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Briefcase,
  Scale,
  Factory,
  Loader2,
  Check,
  FileText,
  Eye,
  BookOpen
} from 'lucide-react';

interface AboutPageProps {
  language: Language;
  onNavigateHome: () => void;
  onOpenCatalogModal?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  onNavigateHome,
  onOpenCatalogModal
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'leadership' | 'structure' | 'legality' | 'document'>('overview');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const pdfUrl = '/COMPANY_PROFILE_DSAB_PRIME_2026.pdf';

  const handleDownloadPdf = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDownloading(true);
    setDownloadSuccess(false);

    try {
      // Direct binary fetch ensures proper content handling in all browsers/iframes
      const response = await fetch(pdfUrl, {
        headers: {
          'Accept': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      // Ensure strict application/pdf MIME type
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const objectUrl = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = 'COMPANY_PROFILE_DSAB_PRIME_2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(objectUrl);
      }, 10000);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.warn('Blob download fallback to direct link / window.open:', err);
      // Fallback: direct browser navigation to PDF
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'COMPANY_PROFILE_DSAB_PRIME_2026.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100">
      
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={onNavigateHome}
              className="hover:text-blue-400 flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400 font-semibold">
              {language === 'id' ? 'Tentang Kami & Struktur Organisasi' : 'About Us & Organization'}
            </span>
          </div>

          {/* Quick PDF Actions in Header */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer disabled:opacity-75"
            >
              {isDownloading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : downloadSuccess ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" />
              ) : (
                <FileDown className="w-3.5 h-3.5" />
              )}
              <span>
                {isDownloading
                  ? (language === 'id' ? 'Mengunduh...' : 'Downloading...')
                  : downloadSuccess
                  ? (language === 'id' ? 'Tersimpan!' : 'Downloaded!')
                  : (language === 'id' ? 'Unduh PDF Resmi' : 'Download Official PDF')}
              </span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">1.4 MB</span>
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-all"
              title={language === 'id' ? 'Buka di Tab Baru' : 'Open in New Tab'}
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{language === 'id' ? 'Buka Tab' : 'Open'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-6">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'id' ? 'COMPANY PROFILE RESMI PT DSAB 2026' : 'OFFICIAL PT DSAB COMPANY PROFILE 2026'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight text-white mb-6 leading-tight">
              {language === 'id' ? (
                <>
                  Membangun Keunggulan, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                    Menghadirkan Kepercayaan & Presisi
                  </span>
                </>
              ) : (
                <>
                  Building Excellence, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                    Delivering Trust & Engineering Precision
                  </span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {language === 'id'
                ? 'PT Dunia Sejahtera Akhirat Bahagia (PT DSAB) merupakan entitas bisnis terkemuka yang menaungi divisi konstruksi sipil terintegrasi (DSAB Prime) dan divisi rekayasa transportasi vertikal (DSAB Lift) sebagai mitra resmi pabrikan global FUJIYANG Japan Technology & SHARP Elevators di Indonesia.'
                : 'PT Dunia Sejahtera Akhirat Bahagia (PT DSAB) is a leading engineering enterprise operating integrated civil construction (DSAB Prime) and vertical transportation solutions (DSAB Lift) as authorized partner of FUJIYANG Japan Technology & SHARP Elevators in Indonesia.'}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2.5 hover:scale-105 cursor-pointer disabled:opacity-75"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : downloadSuccess ? (
                  <Check className="w-4 h-4 text-emerald-300" />
                ) : (
                  <FileDown className="w-4 h-4" />
                )}
                <span>
                  {isDownloading
                    ? (language === 'id' ? 'Sedang Mengunduh E-Book...' : 'Downloading E-Book...')
                    : downloadSuccess
                    ? (language === 'id' ? '✓ Berhasil Mengunduh Dokumen' : '✓ Successfully Downloaded')
                    : (language === 'id' ? 'Unduh E-Book Company Profile (PDF 1.4 MB)' : 'Download Full Company Profile (PDF 1.4 MB)')}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('document')}
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>{language === 'id' ? 'Baca E-Book Online' : 'Read E-Book Online'}</span>
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">{language === 'id' ? 'Buka di Tab Baru' : 'Open New Tab'}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20DSAB,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20kami`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{language === 'id' ? 'Konsultasi Manajemen' : 'Contact Management'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs for Deep Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex overflow-x-auto gap-2 p-1.5 bg-slate-900/90 border border-slate-800/80 rounded-2xl backdrop-blur-md">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>{language === 'id' ? 'Visi, Misi & Nilai Utama' : 'Vision, Mission & Values'}</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'leadership'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{language === 'id' ? 'Dewan Pimpinan & Owner' : 'Executive Leadership & Founders'}</span>
          </button>

          <button
            onClick={() => setActiveTab('structure')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'structure'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{language === 'id' ? 'Struktur Organisasi' : 'Organizational Structure'}</span>
          </button>

          <button
            onClick={() => setActiveTab('legality')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'legality'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'id' ? 'Legalitas, Izin & Mitra Pabrikan' : 'Legality & Global Partners'}</span>
          </button>

          <button
            onClick={() => setActiveTab('document')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeTab === 'document'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'id' ? 'E-Book & Pratinjau Dokumen PDF' : 'E-Book & PDF Document'}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-mono">25 Hal</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. OVERVIEW & VISION MISSION TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Sinergi Brand: DSAB Prime & DSAB Lift */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                  {language === 'id' ? 'Sinergi Bisnis Terpadu' : 'Integrated Business Synergy'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                  {language === 'id' ? 'Dua Pilar Utama PT DSAB' : 'Two Key Pillars of PT DSAB'}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3">
                  {language === 'id'
                    ? 'Memberikan ekosistem solusi menyeluruh dari rancang bangun fisik hingga mobilitas gedung vertikal modern.'
                    : 'Providing an end-to-end ecosystem from civil construction to modern vertical mobility.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* DSAB Prime Card */}
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">General Contractor & Fit-Out</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3 font-['Space_Grotesk']">DSAB PRIME</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {language === 'id'
                      ? 'Layanan kontraktor umum profesional, rancang bangun sipil, arsitektural, interior fit-out, MEP gedung komersial, perumahan premium, dan fasilitas industri dengan pengawasan ketat K3 & standar SNI.'
                      : 'Professional general contracting, civil construction, architectural fit-out, and MEP services for commercial, premium residential, and industrial facilities with strict HSE management.'}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{language === 'id' ? 'Civil, Structural & Architectural Works' : 'Civil, Structural & Architectural Works'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{language === 'id' ? 'Interior Luxury Design & Fit-Out Execution' : 'Interior Luxury Design & Fit-Out'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{language === 'id' ? 'Project Management & Quantity Surveying' : 'Project Management & Quantity Surveying'}</span>
                    </li>
                  </ul>
                </div>

                {/* DSAB Lift Card */}
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Vertical Transportation Specialist</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-3 font-['Space_Grotesk']">DSAB LIFT</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {language === 'id'
                      ? 'Mitra resmi penjualan, instalasi teknis, sertifikasi Disnaker, modernisasi, dan pemeliharaan berkala 24/7 untuk lini elevator dan eskalator FUJIYANG & SHARP Elevators di seluruh Indonesia.'
                      : 'Authorized partner for sales, technical installation, Disnaker certification, modernization, and 24/7 maintenance of FUJIYANG & SHARP Elevators and Escalators nationwide.'}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{language === 'id' ? 'Supply Unit Resmi FUJIYANG & SHARP Elevators' : 'Official Supply of FUJIYANG & SHARP Units'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{language === 'id' ? 'Instalasi Presisi, Riksa Uji Kemenaker & Izin Operasi' : 'Precision Installation & Safety Licensing'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{language === 'id' ? 'Garansi Unit 3 Tahun & Tim Tanggap Darurat 24/7' : '3-Year Warranty & 24/7 Emergency Response'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Visi & 4 Pilar Misi */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 sm:p-12">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                  {language === 'id' ? 'Arah & Komitmen Strategis' : 'Direction & Strategic Purpose'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                  {language === 'id' ? 'Visi & Misi Perusahaan' : 'Corporate Vision & Mission'}
                </h2>
              </div>

              {/* Vision Box */}
              <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-500/20 rounded-2xl p-6 sm:p-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                      {language === 'id' ? 'Visi Kami (Our Vision)' : 'Our Vision'}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {language === 'id'
                        ? '"Menjadi perusahaan konstruksi terintegrasi dan penyedia solusi transportasi vertikal yang terdepan, terpercaya, dan bereputasi tinggi di Indonesia dengan mengedepankan kualitas kerja prima, kepatuhan keselamatan (K3), inovasi teknologi cerdas, serta hubungan kemitraan jangka panjang yang berkelanjutan."'
                        : '"To be the leading, most trusted integrated construction and vertical transportation enterprise in Indonesia, recognized for uncompromising quality, safety compliance (HSE), technological innovation, and sustainable long-term partnerships."'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Pillars of Mission */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 hover:border-blue-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm mb-3">1</div>
                  <h4 className="text-white font-bold text-sm mb-2 font-['Space_Grotesk']">
                    {language === 'id' ? 'Kualitas & Presisi' : 'Quality & Precision'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Memberikan hasil pekerjaan dengan standar pengerjaan tertinggi sesuai regulasi nasional (SNI/Kemenaker) dan sertifikasi internasional (EN-81/CE).'
                      : 'Delivering highest standards aligned with national regulations and international engineering codes (EN-81/CE).'}
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">2</div>
                  <h4 className="text-white font-bold text-sm mb-2 font-['Space_Grotesk']">
                    {language === 'id' ? 'Solusi Terintegrasi' : 'End-to-End Solutions'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Menyediakan one-stop solution dari konsultasi teknis, supply unit resmi, pemasangan presisi, hingga purna jual dan suku cadang asli.'
                      : 'Providing one-stop services from technical consultation and supply to precision erection and lifecycle maintenance.'}
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 hover:border-amber-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm mb-3">3</div>
                  <h4 className="text-white font-bold text-sm mb-2 font-['Space_Grotesk']">
                    {language === 'id' ? 'Budaya Zero Accident' : 'Zero Accident Safety'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Menerapkan protokol SMK3 secara ketat pada seluruh lini kerja guna menjamin keselamatan total teknisi, pekerja, dan pengguna akhir.'
                      : 'Enforcing strict HSE protocols across all sites to ensure absolute safety for our engineers, workers, and end users.'}
                  </p>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 hover:border-purple-500/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm mb-3">4</div>
                  <h4 className="text-white font-bold text-sm mb-2 font-['Space_Grotesk']">
                    {language === 'id' ? 'Kemitraan Berkelanjutan' : 'Sustainable Value'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Membangun kepercayaan jangka panjang melalui transparansi anggaran (RAB), jadwal tepat waktu, dan efisiensi energi bangunan.'
                      : 'Building lasting trust through budget transparency, punctual milestones, and building energy efficiency.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values (Nilai Utama Perusahaan) */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                  {language === 'id' ? 'Pondasi Karakter Kerja' : 'Foundational Culture'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                  {language === 'id' ? 'Nilai-Nilai Utama (Core Values)' : 'Core Corporate Values'}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">Integrity (Integritas)</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Transparansi penuh, kejujuran spesifikasi material, dan akuntabilitas dalam setiap kontrak kerja yang kami tandatangani.'
                      : 'Full transparency, honest material specifications, and accountability in every contract we undertake.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">Excellence (Keunggulan)</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Pengerjaan berkualitas tanpa kompromi, mengedepankan presisi millimeter dan keandalan sistem jangka panjang.'
                      : 'Uncompromising execution, millimeter precision, and exceptional long-term system reliability.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">Innovation (Inovasi)</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Terus mengadopsi teknologi motor PMSM gearless hemat energi, regenerative drive, dan sistem monitoring cerdas.'
                      : 'Adopting energy-efficient PMSM gearless motors, regenerative drives, and smart IoT monitoring.'}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">Sustainability (Berkelanjutan)</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {language === 'id'
                      ? 'Menjaga hubungan erat dengan pelanggan, efisiensi energi gedung, dan kontribusi positif bagi industri konstruksi Indonesia.'
                      : 'Fostering long-term client trust, energy conservation, and positive national infrastructure contributions.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. EXECUTIVE LEADERSHIP & OWNERS TAB */}
        {activeTab === 'leadership' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                {language === 'id' ? 'Dewan Pimpinan & Pendiri Perusahaan' : 'Board of Leadership & Founders'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                {language === 'id' ? 'Para Pemimpin & Owner PT DSAB' : 'Executive Leadership & Owners'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">
                {language === 'id'
                  ? 'Dipimpin oleh figur berpengalaman dengan visi kuat dalam industri konstruksi terpadu dan teknologi elevator modern di Indonesia.'
                  : 'Led by experienced industry leaders with a clear vision for integrated construction and modern elevator technology in Indonesia.'}
              </p>
            </div>

            {/* 2 Main Executive Cards with Extracted Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              
              {/* Leader 1: Andry Mahardika (Komisaris) */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl bg-slate-800">
                        <img
                          src="/assets/aistudio/leader_komisaris.png"
                          alt="Andry Mahardika - Komisaris PT DSAB"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-lg shadow-md">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                        Board of Commissioners (BOC)
                      </span>
                      <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
                        Andry Mahardika
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold mb-4">
                        {language === 'id' ? 'Komisaris / Founder PT DSAB' : 'Commissioner / Founder PT DSAB'}
                      </p>

                      <div className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-medium">
                        {language === 'id' ? 'Strategic Governance & Business Expansion' : 'Strategic Governance & Business Expansion'}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-slate-800">
                    <p>
                      {language === 'id'
                        ? 'Andry Mahardika berperan penting dalam pengawasan tata kelola perusahaan (corporate governance), formulasi kebijakan strategis jangka panjang, serta perluasan kemitraan bisnis berskala nasional dan multinasional.'
                        : 'Andry Mahardika plays a central role in corporate governance oversight, long-term strategic policy formulation, and expanding national and multinational business partnerships.'}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {language === 'id'
                        ? 'Dengan latar belakang kepemimpinan bisnis yang kokoh, beliau memastikan seluruh eksekusi proyek PT DSAB menjunjung tinggi integritas komersial, transparansi perizinan, dan kepatuhan terhadap regulasi pemerintah.'
                        : 'With extensive corporate leadership experience, he ensures all PT DSAB projects uphold commercial integrity, regulatory compliance, and transparency.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Fokus: Tata Kelola & Ekspansi</span>
                  <span className="text-blue-400 font-semibold font-['Space_Grotesk']">PT DSAB</span>
                </div>
              </div>

              {/* Leader 2: Lutfi Abdul Fajar (Direktur) */}
              <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div className="relative shrink-0">
                      <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-xl bg-slate-800">
                        <img
                          src="/assets/aistudio/leader_direktur.png"
                          alt="Lutfi Abdul Fajar - Direktur PT DSAB"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-1.5 rounded-lg shadow-md">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Board of Directors (BOD)
                      </span>
                      <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">
                        Lutfi Abdul Fajar
                      </h3>
                      <p className="text-slate-400 text-xs font-semibold mb-4">
                        {language === 'id' ? 'Direktur / Founder PT DSAB' : 'Director / Founder PT DSAB'}
                      </p>

                      <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium">
                        {language === 'id' ? 'Operations, Engineering & Project Delivery' : 'Operations, Engineering & Project Delivery'}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-slate-800">
                    <p>
                      {language === 'id'
                        ? 'Lutfi Abdul Fajar memimpin operasional eksekutif harian, manajemen rantai pasok impor dan distribusi elevator FUJIYANG & SHARP, serta pengawasan mutu teknis di setiap proyek konstruksi sipil dan instalasi lift.'
                        : 'Lutfi Abdul Fajar directs executive daily operations, supply chain logistics for FUJIYANG & SHARP elevators, and engineering quality assurance across all civil and vertical transport projects.'}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {language === 'id'
                        ? 'Berorientasi pada ketepatan waktu pengerjaan dan standar keselamatan Zero Accident, beliau mengawasi tim teknisi bersertifikasi K3 dan para site manager untuk mencapai kepuasan optimal bagi setiap mitra gedung.'
                        : 'Committed to milestone punctuality and Zero Accident safety standards, he oversees certified HSE technicians and site managers to achieve the highest client satisfaction.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Fokus: Operasional & Rekayasa Teknik</span>
                  <span className="text-emerald-400 font-semibold font-['Space_Grotesk']">PT DSAB</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3. ORGANIZATIONAL STRUCTURE TAB */}
        {activeTab === 'structure' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                {language === 'id' ? 'Tata Kelola & Tim Profesional' : 'Governance & Professional Team'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                {language === 'id' ? 'Struktur Organisasi PT DSAB' : 'PT DSAB Organizational Structure'}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3">
                {language === 'id'
                  ? 'Dirancang secara profesional dan terstruktur untuk menjamin kecepatan koordinasi, pengawasan keselamatan K3 berjenjang, dan eksekusi proyek berstandar tinggi.'
                  : 'Structured to ensure swift cross-departmental coordination, tiered HSE safety oversight, and high-standard project execution.'}
              </p>
            </div>

            {/* Hierarchical Visual Flow */}
            <div className="max-w-4xl mx-auto">
              
              {/* Level 1: BOC */}
              <div className="flex justify-center mb-6">
                <div className="w-full sm:w-80 p-5 rounded-2xl bg-gradient-to-r from-blue-900/60 to-slate-900 border border-blue-500/40 text-center shadow-xl">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">
                    Board of Commissioners (BOC)
                  </span>
                  <div className="text-lg font-bold text-white mt-1 font-['Space_Grotesk']">Andry Mahardika</div>
                  <span className="text-xs text-slate-400 block mt-0.5">Komisaris / Founder</span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="w-0.5 h-8 bg-blue-500/40 mx-auto"></div>

              {/* Level 2: BOD */}
              <div className="flex justify-center mb-8">
                <div className="w-full sm:w-80 p-5 rounded-2xl bg-gradient-to-r from-emerald-900/60 to-slate-900 border border-emerald-500/40 text-center shadow-xl">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Board of Directors (BOD)
                  </span>
                  <div className="text-lg font-bold text-white mt-1 font-['Space_Grotesk']">Lutfi Abdul Fajar</div>
                  <span className="text-xs text-slate-400 block mt-0.5">Direktur Utama / Founder</span>
                </div>
              </div>

              {/* Connecting Horizontal Line to Divisions */}
              <div className="w-0.5 h-8 bg-slate-700 mx-auto"></div>
              <div className="w-full h-0.5 bg-slate-700 max-w-2xl mx-auto mb-8 hidden md:block"></div>

              {/* Level 3: 5 Key Functional Divisions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Division 1: Operations & Construction */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {language === 'id' ? 'Divisi Operasional & Proyek' : 'Operations & Project Management'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {language === 'id'
                      ? 'Mengelola perencanaan timeline konstruksi, logistik material, pengawasan site manager di lapangan, dan koordinasi kontraktor.'
                      : 'Overseeing project timelines, material supply chain logistics, field site managers, and contractor coordination.'}
                  </p>
                  <div className="text-[11px] text-blue-400 font-semibold">
                    • Site Manager • Project Engineer • Logistik Lapangan
                  </div>
                </div>

                {/* Division 2: Engineering & Vertical Transport */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {language === 'id' ? 'Divisi Teknik & Lift (MEP)' : 'Engineering & Elevator Division'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {language === 'id'
                      ? 'Menangani instalasi presisi elevator & eskalator, commissioning, kalibrasi sistem kontrol, serta perawatan berkala dan darurat 24/7.'
                      : 'Handling precision elevator/escalator installation, commissioning, control system calibration, and 24/7 emergency care.'}
                  </p>
                  <div className="text-[11px] text-emerald-400 font-semibold">
                    • Certified Lift Engineers • Commissioning Specialist • Tim Maintenance 24/7
                  </div>
                </div>

                {/* Division 3: Commercial & Estimasi Biaya */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {language === 'id' ? 'Divisi Komersial & Estimasi (QS)' : 'Commercial & Estimating (QS)'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {language === 'id'
                      ? 'Penyusunan Rencana Anggaran Biaya (RAB) transparan, penawaran harga resmi, pengadaan vendor, dan kontrak legal proyek.'
                      : 'Preparation of transparent bills of quantities (RAB), formal price tenders, vendor procurement, and contract administration.'}
                  </p>
                  <div className="text-[11px] text-amber-400 font-semibold">
                    • Quantity Surveyor • Estimator Sipil & Lift • Procurement Specialist
                  </div>
                </div>

                {/* Division 4: K3 & Quality Control (HSE & QA/QC) */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {language === 'id' ? 'Divisi K3 & Quality Control (HSE)' : 'HSE & Quality Assurance (QA/QC)'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {language === 'id'
                      ? 'Mengawal implementasi SMK3 Kemenaker RI, inspeksi riksa uji kelayakan alat, mitigasi bahaya kerja, dan standar Zero Accident.'
                      : 'Enforcing Indonesian Ministry of Manpower HSE rules, mandatory equipment safety inspections, and Zero Accident goals.'}
                  </p>
                  <div className="text-[11px] text-red-400 font-semibold">
                    • Ahli K3 Umum & Spesialis Lift • QA/QC Inspector • Safety Officer
                  </div>
                </div>

                {/* Division 5: Finance, Legal & HR */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-all md:col-span-2 lg:col-span-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2">
                    {language === 'id' ? 'Divisi Keuangan, Legalitas & SDM' : 'Finance, Legal Compliance & HR'}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {language === 'id'
                      ? 'Mengelola akuntansi perpajakan resmi (NPWP Mampang Prapatan), perizinan SK Menkumham/NIB, kepatuhan perbankan, dan pengembangan kompetensi SDM teknis berkelanjutan.'
                      : 'Managing tax accounting compliance, corporate NIB/Menkumham licensing, banking escrow compliance, and engineering talent development.'}
                  </p>
                  <div className="text-[11px] text-purple-400 font-semibold">
                    • Finance & Tax Accounting • Legal Corporate Officer • HR & Training Development
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 4. LEGALITY & GLOBAL MANUFACTURING PARTNERS TAB */}
        {activeTab === 'legality' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Legal Credentials Box */}
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-8 sm:p-12">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                  {language === 'id' ? 'Kepatuhan Hukum & Legalitas Resmi' : 'Corporate Legality & Compliance'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                  {language === 'id' ? 'Legalitas PT Dunia Sejahtera Akhirat Bahagia' : 'Official Legal Credentials'}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3">
                  {language === 'id'
                    ? 'PT DSAB beroperasi dengan kelengkapan izin berusaha, akta pendirian resmi, sertifikat badan usaha, dan kepatuhan perpajakan Republik Indonesia.'
                    : 'PT DSAB operates with full business licensing, official establishment deed, construction certification, and Indonesian tax compliance.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Nama Badan Hukum' : 'Entity Name'}
                  </span>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">PT Dunia Sejahtera Akhirat Bahagia</div>
                  <span className="text-xs text-blue-400 mt-1 block">Merek: DSAB PRIME & DSAB LIFT</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Pengesahan Kemenkumham RI' : 'Ministry of Law & Human Rights'}
                  </span>
                  <div className="text-sm font-bold text-white font-mono">No. AHU-0012958.AH.01.01.2026</div>
                  <span className="text-xs text-slate-400 mt-1 block">Akta Pendirian Resmi Notaris</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Nomor Induk Berusaha (NIB)' : 'Business ID Number (NIB)'}
                  </span>
                  <div className="text-sm font-bold text-white font-mono">2702250001205</div>
                  <span className="text-xs text-emerald-400 mt-1 block">Berizin Sektor Konstruksi & MEP</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Nomor Pokok Wajib Pajak (NPWP)' : 'Taxpayer ID (NPWP)'}
                  </span>
                  <div className="text-sm font-bold text-white font-mono">20.485.612.4-013.000</div>
                  <span className="text-xs text-slate-400 mt-1 block">KPP Pratama Jakarta Mampang Prapatan</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Sertifikasi Jasa Konstruksi (SBU)' : 'Construction Certificate (SBU)'}
                  </span>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">SBU Konstruksi & KTA P3IM</div>
                  <span className="text-xs text-blue-400 mt-1 block">Anggota Resmi Asosiasi Kontraktor</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] text-slate-500 uppercase font-bold tracking-wider block mb-1">
                    {language === 'id' ? 'Lisensi Kemenaker RI' : 'Ministry of Manpower Safety License'}
                  </span>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">Izin Instalasi & Riksa Uji K3 Lift</div>
                  <span className="text-xs text-emerald-400 mt-1 block">Sertifikat Laik Operasi (SLO) Disnaker</span>
                </div>
              </div>
            </div>

            {/* Global Manufacturing & Partners (FUJIYANG & SHARP) */}
            <div className="bg-slate-900/60 rounded-3xl border border-slate-800 p-8 sm:p-12">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase font-['Space_Grotesk']">
                  {language === 'id' ? 'Kapasitas Manufaktur Global' : 'Global Manufacturing Capabilities'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-['Space_Grotesk']">
                  {language === 'id' ? 'Dukungan Pabrikan FUJIYANG & SHARP' : 'Supported by FUJIYANG & SHARP Plants'}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3">
                  {language === 'id'
                    ? 'Sebagai authorized partner, DSAB Lift didukung oleh fasilitas manufaktur modern berstandar industri 4.0 dengan menara uji lift 100 meter dan kapasitas output 12.000 unit per tahun.'
                    : 'As authorized partner, DSAB Lift is backed by modern Industry 4.0 manufacturing facilities featuring a 100-meter test tower and 12,000 units/year capacity.'}
                </p>
              </div>

              {/* Manufacturing Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-['Space_Grotesk'] mb-1">66,000 m²</div>
                  <div className="text-xs text-slate-400">{language === 'id' ? 'Luas Pabrik Modern' : 'Modern Factory Area'}</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-['Space_Grotesk'] mb-1">100 m</div>
                  <div className="text-xs text-slate-400">{language === 'id' ? 'Menara Uji Kecepatan 7 m/s' : 'Test Tower (7.0 m/s)'}</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Space_Grotesk'] mb-1">12,000+</div>
                  <div className="text-xs text-slate-400">{language === 'id' ? 'Kapasitas Unit / Tahun' : 'Units / Year Output'}</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-['Space_Grotesk'] mb-1">1,000+</div>
                  <div className="text-xs text-slate-400">{language === 'id' ? 'Unit Beroperasi di Indonesia' : 'Operating in Indonesia'}</div>
                </div>
              </div>

              {/* Partner Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <FujiyangLogo />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">
                      FUJIYANG Elevator & Escalator Co., Ltd.
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {language === 'id'
                        ? 'Kerjasama teknologi FUJI Japan dengan basis manufaktur robotik modern, sistem pengujian keselamatan berstandar EN-81 Eropa, dan motor PMSM hemat energi hingga 40%.'
                        : 'FUJI Japan technology cooperation with robotic manufacturing, EN-81 European safety testing, and PMSM motors saving up to 40% energy.'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-blue-400 font-medium">
                    Standar Mutu: ISO 9001, CE European Safety Standard, Kemenaker RI
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <SharpLogo />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 font-['Space_Grotesk']">
                      SHARP Elevators (SHARP Trading Co., Ltd. est. 1989)
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {language === 'id'
                        ? 'Jaringan distribusi global dengan basis produksi China & Sharp Elevators Korea Co., Ltd. Melayani lebih dari 50 negara dengan ragam lift penumpang, rumah, dan eskalator komersial.'
                        : 'Global network with production bases in China & Korea serving 50+ countries with passenger, home, and heavy-duty commercial escalators.'}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-red-400 font-medium">
                    Eksportir Global: 50+ Negara, Sertifikasi Korea & CE
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. E-BOOK & PDF DOCUMENT VIEWER TAB */}
        {activeTab === 'document' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Header / Document Meta Card */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'id' ? 'Dokumen Terverifikasi & Kompatibel' : 'Verified & Compatible Document'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk']">
                    {language === 'id'
                      ? 'E-Book Company Profile PT DSAB 2026'
                      : 'PT DSAB Official Company Profile 2026'}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    {language === 'id'
                      ? 'Dokumen resmi 25 halaman lengkap dengan profil korporasi, legalitas K3, teknologi FUJI Japan, portofolio proyek sipil, dan dewan pimpinan.'
                      : 'Official 25-page PDF with corporate overview, K3 licenses, FUJI Japan technology, project portfolio, and executive board.'}
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleDownloadPdf}
                    disabled={isDownloading}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-75 hover:scale-105"
                  >
                    {isDownloading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : downloadSuccess ? (
                      <Check className="w-4 h-4 text-emerald-300" />
                    ) : (
                      <FileDown className="w-4 h-4" />
                    )}
                    <span>
                      {isDownloading
                        ? (language === 'id' ? 'Mengunduh...' : 'Downloading...')
                        : downloadSuccess
                        ? (language === 'id' ? '✓ File Terunduh!' : '✓ Downloaded!')
                        : (language === 'id' ? 'Unduh PDF (1.4 MB)' : 'Download PDF (1.4 MB)')}
                    </span>
                  </button>

                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-400" />
                    <span>{language === 'id' ? 'Buka Layar Penuh' : 'Open Full Screen'}</span>
                  </a>
                </div>
              </div>

              {/* Technical Specification Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 uppercase font-medium block">{language === 'id' ? 'Format Dokumen' : 'Document Format'}</span>
                  <span className="text-sm font-bold text-white font-['Space_Grotesk']">PDF 1.5 Web-Linearized</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 uppercase font-medium block">{language === 'id' ? 'Ukuran Berkas' : 'File Size'}</span>
                  <span className="text-sm font-bold text-emerald-400 font-['Space_Grotesk']">1.4 MB (Cepat & Ringan)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 uppercase font-medium block">{language === 'id' ? 'Jumlah Halaman' : 'Total Pages'}</span>
                  <span className="text-sm font-bold text-blue-400 font-['Space_Grotesk']">25 Halaman Full Color</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-[11px] text-slate-500 uppercase font-medium block">{language === 'id' ? 'Kompatibilitas' : 'Compatibility'}</span>
                  <span className="text-sm font-bold text-amber-400 font-['Space_Grotesk']">Adobe Reader & All Browsers</span>
                </div>
              </div>
            </div>

            {/* Embedded Interactive PDF Viewer */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>{language === 'id' ? 'Pratinjau Langsung Dokumen (Interactive PDF Reader)' : 'Live Document Preview (Interactive PDF Reader)'}</span>
                </div>
                <span className="text-[11px] text-slate-500">
                  {language === 'id' ? 'Gunakan tombol di atas viewer untuk zoom atau simpan' : 'Use controls above to zoom or save'}
                </span>
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=1`}
                  className="w-full h-[650px] sm:h-[850px] border-0"
                  title="Official Company Profile PT Dunia Sejahtera Akhirat Bahagia 2026"
                />
              </div>
            </div>

            {/* Document Table of Contents Guide */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4 font-['Space_Grotesk'] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>{language === 'id' ? 'Daftar Isi & Ringkasan Bab Company Profile' : 'Document Table of Contents & Chapter Overview'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-xs font-bold text-blue-400 font-mono block mb-1">HALAMAN 01 - 04</span>
                  <h4 className="text-sm font-bold text-white mb-1">Sekilas PT DSAB & Visi Misi</h4>
                  <p className="text-xs text-slate-400">Pengenalan entitas korporasi, rekam jejak, nilai budaya perusahaan (Amanah, Integritas, Profesionalitas).</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-xs font-bold text-cyan-400 font-mono block mb-1">HALAMAN 05 - 10</span>
                  <h4 className="text-sm font-bold text-white mb-1">Divisi DSAB Prime (Konstruksi & Sipil)</h4>
                  <p className="text-xs text-slate-400">Layanan rancang bangun sipil, gedung bertingkat, struktur baja, mekanikal elektrikal & renovasi komersial.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-xs font-bold text-indigo-400 font-mono block mb-1">HALAMAN 11 - 18</span>
                  <h4 className="text-sm font-bold text-white mb-1">Divisi DSAB Lift (FUJIYANG & SHARP)</h4>
                  <p className="text-xs text-slate-400">Ragam elevator penumpang, villa lift, rumah sakit, lift kargo, eskalator, serta sertifikasi keselamatan standar Eropa EN-81.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-xs font-bold text-emerald-400 font-mono block mb-1">HALAMAN 19 - 25</span>
                  <h4 className="text-sm font-bold text-white mb-1">Legalitas, Struktur Organisasi & Kontak</h4>
                  <p className="text-xs text-slate-400">Sertifikat SBU, NIB, lisensi Disnaker Kemenaker RI, bagan organisasi lengkap, serta dewan direksi & komisaris.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Prominent Company Profile Download CTA Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
              <FileDown className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'DOKUMEN RESMI PT DSAB 2026' : 'OFFICIAL 2026 CORPORATE DOCUMENT'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 font-['Space_Grotesk']">
              {language === 'id'
                ? 'Dapatkan Company Profile Lengkap PT DSAB (DSAB Prime & DSAB Lift)'
                : 'Download Complete PT DSAB Company Profile'}
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
              {language === 'id'
                ? 'Unduh dokumen PDF resmi 25 halaman yang memuat portofolio proyek sipil, spesifikasi teknis lift & eskalator FUJIYANG, sertifikat legalitas lengkap, serta struktur dewan pimpinan.'
                : 'Download the official 25-page PDF document featuring civil projects, FUJIYANG elevator technical specifications, full legal licenses, and executive leadership structure.'}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center gap-2 hover:scale-105 cursor-pointer disabled:opacity-75"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : downloadSuccess ? (
                  <Check className="w-4 h-4 text-emerald-300" />
                ) : (
                  <FileDown className="w-4 h-4" />
                )}
                <span>
                  {isDownloading
                    ? (language === 'id' ? 'Mengunduh Dokumen...' : 'Downloading Document...')
                    : downloadSuccess
                    ? (language === 'id' ? '✓ File Berhasil Diunduh' : '✓ Successfully Downloaded')
                    : (language === 'id' ? 'Unduh Dokumen Company Profile (1.4 MB PDF)' : 'Download Company Profile PDF (1.4 MB)')}
                </span>
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>{language === 'id' ? 'Buka di Tab Baru' : 'Open in New Tab'}</span>
              </a>

              <button
                onClick={onNavigateHome}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{language === 'id' ? 'Kembali ke Beranda' : 'Return to Home'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
