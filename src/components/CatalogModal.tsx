import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import {
  FileText,
  Download,
  CheckCircle2,
  X,
  ExternalLink,
  Eye,
  BookOpen,
  ShieldCheck,
  Check,
  Loader2,
  Layers,
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface CatalogModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  defaultCatalog?: 'fujiyang' | 'sharp';
}

export const CatalogModal: React.FC<CatalogModalProps> = ({
  language,
  isOpen,
  onClose,
  defaultCatalog = 'fujiyang'
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<{ [key: string]: boolean }>({});
  const [previewCatalog, setPreviewCatalog] = useState<'fujiyang' | 'sharp' | null>(null);

  if (!isOpen) return null;

  const catalogs = [
    {
      id: 'fujiyang',
      name: 'E-Katalog FUJIYANG Elevator & Escalator',
      brand: 'FUJIYANG (Japan Technology Cooperation)',
      badge: language === 'id' ? 'JAPAN TECHNOLOGY • 27 HALAMAN' : 'JAPAN TECH • 27 PAGES',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      tagline: language === 'id'
        ? 'Brosur Teknis Lengkap Seri Penumpang, Villa, Bed Hospital, Panoramic, Kargo & Eskalator'
        : 'Comprehensive Technical Brochure: Passenger, Villa, Hospital Bed, Panoramic, Cargo & Escalators',
      url: '/assets/aistudio/KATALOG_DSAB_LIFT_FujiYang_896d5af5.pdf',
      filename: 'KATALOG_DSAB_LIFT_FUJIYANG_2026.pdf',
      size: '2.2 MB',
      pages: '27 Halaman',
      highlights: [
        language === 'id' ? 'Standar Keselamatan Eropa EN-81' : 'EN-81 European Safety Standard',
        language === 'id' ? 'Mesin Gearless PMSM Hemat Energi 40%' : 'Energy Saving PMSM Gearless Motor',
        language === 'id' ? 'Dimensi Shaft Sipil (MR & MRL)' : 'Civil Shaft Dimensions (MR & MRL)',
        language === 'id' ? 'Katalog Interior Kabin & Desain Langit-langit' : 'Cabin Interior & Ceiling Design Catalog'
      ]
    },
    {
      id: 'sharp',
      name: 'E-Katalog SHARP Elevators & Escalator',
      brand: 'SHARP Elevators (Korea & Global Network est. 1989)',
      badge: language === 'id' ? 'KOREA & GLOBAL BASE • 25 HALAMAN' : 'KOREA & GLOBAL • 25 PAGES',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      tagline: language === 'id'
        ? 'Spesifikasi Ekspor Global 50+ Negara: Passenger, Heavy-Duty Escalator, Moving Walk & Car Lift'
        : 'Global Export Specs across 50+ Countries: Passenger, Heavy-Duty Escalators, Moving Walks & Car Lifts',
      url: '/assets/aistudio/KATALOG_DSAB_LIFT_SHARP_8ccf8b4c.pdf',
      filename: 'KATALOG_DSAB_LIFT_SHARP_2026.pdf',
      size: '1.8 MB',
      pages: '25 Halaman',
      highlights: [
        language === 'id' ? 'Sertifikasi Internasional CE & Korea' : 'CE & Korea Safety Certifications',
        language === 'id' ? 'Eskalator Komersial Heavy-Duty 30°/35°' : 'Heavy-Duty Commercial Escalators 30°/35°',
        language === 'id' ? 'Lift Mobil (Car Lift) & Dumbwaiter Makanan' : 'Automobile Car Lifts & Dumbwaiters',
        language === 'id' ? 'Tabel Kapasitas Beban, Kecepatan & Daya' : 'Load Capacity, Speed & Power Tables'
      ]
    }
  ];

  const handleDownload = async (catalogItem: typeof catalogs[0]) => {
    setDownloadingId(catalogItem.id);

    try {
      const response = await fetch(catalogItem.url, {
        headers: { 'Accept': 'application/pdf' }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const objectUrl = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = catalogItem.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(objectUrl);
      }, 10000);

      setDownloadedIds((prev) => ({ ...prev, [catalogItem.id]: true }));
      setTimeout(() => {
        setDownloadedIds((prev) => ({ ...prev, [catalogItem.id]: false }));
      }, 5000);
    } catch (err) {
      console.warn('Direct blob fetch failed, falling back to direct anchor download:', err);
      const link = document.createElement('a');
      link.href = catalogItem.url;
      link.download = catalogItem.filename;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadingId(null);
    }
  };

  const handleDownloadAll = async () => {
    for (const item of catalogs) {
      await handleDownload(item);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                  {language === 'id' ? 'E-Katalog Resmi DSAB Lift 2026' : 'Official DSAB Lift E-Catalogs 2026'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
                  2 Item Lengkap
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
                FUJIYANG & SHARP Elevators & Escalator
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup Jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Subheading / Context */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'id'
                  ? 'Silakan unduh dokumen brosur teknis resmi di bawah ini. Dokumen memuat gambar shaft sipil, tabel kapasitas beban, pilihan kabin, serta sertifikasi keselamatan EN-81 & CE.'
                  : 'Download the official technical brochures below. Includes civil shaft layout drawings, load capacity tables, cabin decoration choices, and EN-81 & CE certifications.'}
              </p>
            </div>
            <button
              onClick={handleDownloadAll}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'id' ? 'Unduh Kedua Katalog Sekaligus' : 'Download Both Catalogs'}</span>
            </button>
          </div>

          {/* Interactive Live PDF Preview View (if user selected preview) */}
          {previewCatalog && (
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>
                    Pratinjau:{' '}
                    {previewCatalog === 'fujiyang'
                      ? 'E-Katalog FUJIYANG Elevator (27 Hal)'
                      : 'E-Katalog SHARP Elevators (25 Hal)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={
                      previewCatalog === 'fujiyang'
                        ? '/assets/aistudio/KATALOG_DSAB_LIFT_FujiYang_896d5af5.pdf'
                        : '/assets/aistudio/KATALOG_DSAB_LIFT_SHARP_8ccf8b4c.pdf'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'id' ? 'Buka Layar Penuh' : 'Full Screen'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setPreviewCatalog(null)}
                    className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
                  >
                    {language === 'id' ? 'Tutup Pratinjau' : 'Close Preview'}
                  </button>
                </div>
              </div>
              <iframe
                src={`${
                  previewCatalog === 'fujiyang'
                    ? '/assets/aistudio/KATALOG_DSAB_LIFT_FujiYang_896d5af5.pdf'
                    : '/assets/aistudio/KATALOG_DSAB_LIFT_SHARP_8ccf8b4c.pdf'
                }#toolbar=1`}
                className="w-full h-[450px] rounded-xl border border-slate-800 bg-slate-900"
                title="Catalog Preview"
              />
            </div>
          )}

          {/* The 2 Catalog Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogs.map((item) => {
              const isItemDownloading = downloadingId === item.id;
              const isItemDownloaded = !!downloadedIds[item.id];

              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all group shadow-xl relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Header Chips */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                          {item.size}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {item.pages}
                        </span>
                      </div>
                    </div>

                    {/* Catalog Title */}
                    <div>
                      <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>

                    {/* Key Specifications Bullet List */}
                    <div className="space-y-2 pt-2 border-t border-slate-900">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block">
                        {language === 'id' ? 'Cakupan Isi Dokumen:' : 'Document Highlights:'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons for this Catalog */}
                  <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-2.5">
                    <button
                      onClick={() => handleDownload(item)}
                      disabled={isItemDownloading}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isItemDownloading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{language === 'id' ? 'Sedang Mengunduh...' : 'Downloading...'}</span>
                        </>
                      ) : isItemDownloaded ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>{language === 'id' ? '✓ File Terunduh!' : '✓ Downloaded!'}</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>
                            {language === 'id'
                              ? `Unduh Dokumen PDF (${item.size})`
                              : `Download PDF Document (${item.size})`}
                          </span>
                        </>
                      )}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPreviewCatalog(previewCatalog === item.id ? null : (item.id as 'fujiyang' | 'sharp'))}
                        className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-400" />
                        <span>
                          {previewCatalog === item.id
                            ? (language === 'id' ? 'Tutup Preview' : 'Close Preview')
                            : (language === 'id' ? 'Pratinjau Di Sini' : 'Preview Here')}
                        </span>
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 text-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        <span>{language === 'id' ? 'Buka di Tab Baru' : 'New Tab'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Consultation CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-slate-900 border border-blue-500/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-white font-['Space_Grotesk']">
                  {language === 'id'
                    ? 'Butuh File Gambar Sipil AutoCAD (.DWG) atau Konsultasi Shaft?'
                    : 'Need Civil Shaft AutoCAD (.DWG) Layout or Engineering Consultation?'}
                </h5>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {language === 'id'
                    ? 'Tim engineer DSAB Lift siap mengirimkan layout shaft detail & proposal harga resmi sesuai dimensi gedung Anda.'
                    : 'DSAB Lift engineering team is ready to send custom shaft drawings & official budget proposal.'}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                'Halo Tim DSAB Lift, saya telah mengunduh E-Katalog FUJIYANG & SHARP dan ingin berkonsultasi mengenai spesifikasi teknis dan estimasi harga untuk proyek kami.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <span>{language === 'id' ? 'Chat WhatsApp Engineer' : 'Chat Sales Engineer'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
