import React, { useState } from 'react';
import { Language, ProductCategory, ElevatorProduct } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/elevatorData';
import {
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Gauge,
  Maximize2,
  CheckCircle2,
  X,
  Phone,
  MessageSquare,
  FileSpreadsheet,
  Download
} from 'lucide-react';

interface ProductCatalogProps {
  language: Language;
  onOpenCatalogModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  language,
  onOpenCatalogModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeProductModal, setActiveProductModal] = useState<ElevatorProduct | null>(null);

  const categories: { id: ProductCategory; label: { id: string; en: string } }[] = [
    { id: 'all', label: { id: 'Semua Produk (9)', en: 'All Products (9)' } },
    { id: 'passenger', label: { id: 'Lift Penumpang', en: 'Passenger Elevator' } },
    { id: 'panoramic', label: { id: 'Lift Panorama / Kaca', en: 'Panoramic Glass' } },
    { id: 'hospital', label: { id: 'Lift Rumah Sakit / Bed', en: 'Hospital Bed' } },
    { id: 'home', label: { id: 'Lift Rumah / Villa', en: 'Home Elevator' } },
    { id: 'freight', label: { id: 'Lift Barang / Kargo', en: 'Freight Cargo' } },
    { id: 'car', label: { id: 'Lift Mobil / Parkir', en: 'Car Elevator' } },
    { id: 'escalator', label: { id: 'Eskalator Gedung', en: 'Escalator' } },
    { id: 'moving-walk', label: { id: 'Moving Walk / Travelator', en: 'Moving Walk' } },
    { id: 'dumbwaiter', label: { id: 'Dumbwaiter Makanan', en: 'Dumbwaiter' } }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Katalog Produk & Solusi' : 'Product & Solution Catalog'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              {language === 'id' ? (
                <>
                  Lini Lengkap <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Transportasi Vertikal</span>
                </>
              ) : (
                <>
                  Complete <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Vertical Transportation Range</span>
                </>
              )}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2">
              {language === 'id'
                ? 'Pilihan elevator, eskalator, dan travelator dengan teknologi motor gearless sinkron hemat daya dan standar keselamatan internasional.'
                : 'A comprehensive lineup of elevators, escalators, and moving walks engineered with energy-efficient gearless motors and global safety compliance.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCatalogModal}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-300 border border-blue-500/30 text-xs font-bold transition-all flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Download E-Katalog' : 'Download Catalog'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Scrollable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-slate-900 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1.5"
            >
              {/* Product Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name[language]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                {/* Model Code & Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-mono font-bold text-blue-300 border border-blue-500/30">
                    {product.modelCode}
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-blue-600 text-[10px] font-bold text-white shadow-md">
                      {product.badge[language]}
                    </span>
                  )}
                </div>

                {/* Brand Logo Watermark */}
                <div className="absolute bottom-2 right-3 text-[10px] font-black text-slate-400/90 tracking-wider">
                  FUJIYANG × SHARP
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-blue-300 transition-colors mb-2">
                    {product.name[language]}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {product.description[language]}
                  </p>

                  {/* Key Specification Matrix */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] mb-4">
                    <div>
                      <span className="text-slate-400 block">{language === 'id' ? 'Kecepatan:' : 'Speed:'}</span>
                      <strong className="text-white font-mono">{product.specs.ratedSpeed}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'id' ? 'Kapasitas:' : 'Capacity:'}</span>
                      <strong className="text-white font-mono">{product.specs.ratedCapacity}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'id' ? 'Penggerak:' : 'Drive:'}</span>
                      <span className="text-blue-300 font-semibold truncate block">PMSM Gearless</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{language === 'id' ? 'Kontrol:' : 'Controller:'}</span>
                      <span className="text-slate-300 truncate block">VVVF 32-bit</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === 'id' ? 'Spesifikasi Detail' : 'Full Specs'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name[language])}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1"
                    title="Konsultasi WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{language === 'id' ? 'Tanya' : 'Quote'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Specifications Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="px-2.5 py-1 rounded bg-blue-900/60 text-blue-300 text-[11px] font-mono font-bold border border-blue-700/50">
                  {activeProductModal.modelCode}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mt-2">
                  {activeProductModal.name[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {activeProductModal.tagline[language]}
                </p>
              </div>

              <button
                onClick={() => setActiveProductModal(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Specs Details */}
            <div className="space-y-6">
              {/* Image banner */}
              <div className="h-56 rounded-xl overflow-hidden relative">
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs text-slate-200 font-semibold bg-slate-950/80 px-3 py-1 rounded-md border border-slate-700">
                  DSAB Lift Authorized Partner: FUJIYANG & SHARP
                </div>
              </div>

              {/* Full Specs Table */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                  <span>{language === 'id' ? 'Spesifikasi Teknis Lengkap' : 'Technical Specifications'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Kecepatan Terukur' : 'Rated Speed'}:</span>
                    <strong className="text-white font-mono">{activeProductModal.specs.ratedSpeed}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Kapasitas Angkut' : 'Rated Capacity'}:</span>
                    <strong className="text-white font-mono">{activeProductModal.specs.ratedCapacity}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Sistem Penggerak' : 'Drive Motor'}:</span>
                    <span className="text-blue-300 font-semibold">{activeProductModal.specs.driveSystem}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Kontroler' : 'Controller'}:</span>
                    <span className="text-slate-200">{activeProductModal.specs.controller}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Tipe Pintu' : 'Door Type'}:</span>
                    <span className="text-slate-200">{activeProductModal.specs.doorType}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Tinggi Tempuh' : 'Travel Range'}:</span>
                    <span className="text-slate-200">{activeProductModal.specs.maxTravelHeight || 'Standar Gedung'}</span>
                  </div>
                </div>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {language === 'id' ? 'Keunggulan Utama' : 'Key Highlights'}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeProductModal.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{pt[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Safety Features */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Fitur Keselamatan Standar' : 'Standard Safety Devices'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {activeProductModal.safetyFeatures.map((sf, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-2 rounded bg-slate-950/60 border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{sf[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                {language === 'id' ? 'Konsultasikan kebutuhan dimensi shaft dengan tim kami.' : 'Consult shaft dimension requirements with our team.'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveProductModal(null);
                    onOpenCatalogModal();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Brosur Lengkap' : 'Full Brochure'}</span>
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20meminta%20brosur%20dan%20penawaran%20harga%20resmi%20untuk%20${encodeURIComponent(activeProductModal.name[language])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'id' ? 'Minta Penawaran Resmi via WhatsApp' : 'Get Official Quotation'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
