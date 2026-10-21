import React, { useState } from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  CheckCircle2,
  FileSpreadsheet,
  Download,
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  onOpenCatalogModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onOpenCatalogModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    buildingType: 'office',
    floors: '4',
    location: 'Jakarta',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const waMessage = `Halo DSAB Lift, saya ingin meminta konsultasi & penawaran resmi:\n` +
    `- Nama: ${formData.name}\n` +
    `- No. Telp / WA: ${formData.phone}\n` +
    `- Email: ${formData.email || '-'}\n` +
    `- Perusahaan / Instansi: ${formData.company || '-'}\n` +
    `- Tipe Proyek: ${formData.buildingType.toUpperCase()}\n` +
    `- Jumlah Lantai: ${formData.floors} Lantai\n` +
    `- Lokasi Proyek: ${formData.location || 'Indonesia'}\n` +
    `- Keterangan Tambahan: ${formData.notes || '-'}`;

  const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Hubungi Sales Engineer Kami' : 'Contact Our Engineering Team'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-3">
            {language === 'id' ? (
              <>
                Konsultasi Teknis & <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Penawaran Harga Resmi Hari Ini
                </span>
              </>
            ) : (
              <>
                Technical Consultation & <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Official Quotation Request
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {language === 'id'
              ? 'Dapatkan konsultasi gratis gambar shaft sipil, spesifikasi teknis, brosur PDF, dan survey lokasi di wilayah Jabodetabek & seluruh Indonesia.'
              : 'Request free civil hoistway drawing assessment, PDF product brochures, technical consulting, and on-site inspection across Indonesia.'}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details, Quick Channels & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office HQ Info Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    {language === 'id' ? 'Kantor Operasional & Workshop' : 'HQ Operations & Workshop'}
                  </span>
                  <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                    PT DSAB (DSAB Lift)
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-emerald-300 font-semibold font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-blue-300">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{language === 'id' ? 'Senin - Sabtu: 08:30 - 17:30 WIB (Hotline 24 Jam)' : 'Mon - Sat: 08:30 - 17:30 WIB (24/7 Hotline)'}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20langsung`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === 'id' ? 'Chat WhatsApp Sales Engineer' : 'Chat WhatsApp Sales'}</span>
                </a>

                <button
                  onClick={onOpenCatalogModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 text-xs font-bold border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === 'id' ? 'Download E-Katalog Lengkap (PDF)' : 'Download Full Catalog (PDF)'}</span>
                </button>
              </div>
            </div>

            {/* Service Coverage Guarantee Box */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-blue-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{language === 'id' ? 'Jaminan Respon Cepat' : 'Fast Response Commitment'}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {language === 'id'
                  ? 'Tim teknisi kami siap melakukan survey shaft gratis ke lokasi proyek Anda dalam kurun waktu 1x24 jam untuk area Jabodetabek.'
                  : 'Our sales engineers are available for free on-site hoistway surveys within 24 hours across Greater Jakarta.'}
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Request Form */}
          <div className="lg:col-span-7 bg-slate-900/95 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-2">
              {language === 'id' ? 'Formulir Permintaan Penawaran & Konsultasi' : 'Quotation & Project Inquiry Form'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {language === 'id'
                ? 'Isi data singkat berikut untuk menerima draft penawaran harga resmi dan spesifikasi teknis.'
                : 'Fill in the project parameters below to receive an official formal quotation and technical drawing proposal.'}
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Nama Lengkap / Kontak *' : 'Full Name / Contact *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bpk. Hendra / Ibu Maya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Nomor WhatsApp / HP *' : 'WhatsApp Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Email Kantor / Pribadi' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Nama Perusahaan / Proyek' : 'Company / Project Name'}
                    </label>
                    <input
                      type="text"
                      placeholder="PT / Developer / Pribadi"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Tipe Bangunan' : 'Building Type'}
                    </label>
                    <select
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="office">{language === 'id' ? 'Gedung Kantor' : 'Office Tower'}</option>
                      <option value="home">{language === 'id' ? 'Rumah Tinggal / Villa' : 'Private Villa'}</option>
                      <option value="hospital">{language === 'id' ? 'Rumah Sakit / Medis' : 'Hospital'}</option>
                      <option value="hotel">{language === 'id' ? 'Hotel / Resort' : 'Hotel'}</option>
                      <option value="shophouse">{language === 'id' ? 'Ruko / SOHO' : 'Shophouse'}</option>
                      <option value="mall">{language === 'id' ? 'Pusat Perbelanjaan' : 'Mall'}</option>
                      <option value="warehouse">{language === 'id' ? 'Gudang Pabrik' : 'Warehouse'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Jumlah Lantai / Stops' : 'Number of Floors'}
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="40"
                      value={formData.floors}
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      {language === 'id' ? 'Lokasi Kota Proyek' : 'Project City'}
                    </label>
                    <input
                      type="text"
                      placeholder="Jakarta / Surabaya / dll"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    {language === 'id' ? 'Keterangan Kebutuhan Tambahan' : 'Additional Notes / Questions'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={language === 'id' ? 'Contoh: Lift kaca panorama untuk villa 3 lantai, butuh survey lokasi dan jadwal pasang bulan depan...' : 'e.g., 3-stop glass panoramic elevator, need civil shaft drawing review...'}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{language === 'id' ? 'Kirim Permintaan Penawaran Resmi Sekarang' : 'Submit Official Inquiry via WhatsApp'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-1">
                    {language === 'id' ? 'Permintaan Penawaran Siap Dikirim!' : 'Inquiry Ready to Send!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {language === 'id'
                      ? `Terima kasih ${formData.name}. Rincian spesifikasi untuk proyek ${formData.buildingType} (${formData.floors} lantai di ${formData.location}) telah dirangkum.`
                      : `Thank you ${formData.name}. Specification details for ${formData.buildingType} (${formData.floors} floors in ${formData.location}) are ready.`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Pemohon:' : 'Contact:'}</span>
                    <span className="text-white font-semibold">{formData.name} ({formData.phone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Tipe Bangunan:' : 'Building:'}</span>
                    <span className="text-blue-400 font-semibold">{formData.buildingType.toUpperCase()} • {formData.floors} Lantai</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{language === 'id' ? 'Lokasi:' : 'Location:'}</span>
                    <span className="text-slate-300">{formData.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{language === 'id' ? 'Buka WhatsApp & Kirim Pesan' : 'Open WhatsApp & Send Message'}</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors"
                  >
                    {language === 'id' ? 'Ubah Data Formulir' : 'Edit Information'}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
