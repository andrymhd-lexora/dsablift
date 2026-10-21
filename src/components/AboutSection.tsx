import React from 'react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/elevatorData';
import { FujiyangLogo, SharpLogo, DSABLogo } from './Logos';
import {
  Building2,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Cpu,
  Wrench,
  Sparkles,
  Award,
  Layers,
  PhoneCall,
  MapPin
} from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const pillars = [
    {
      number: '01',
      title: language === 'id' ? 'Authorized Partner Resmi' : 'Official Authorized Partner',
      desc: language === 'id' 
        ? 'Mitra resmi penjualan dan after-sales service FUJIYANG & SHARP Elevators untuk seluruh wilayah Indonesia.'
        : 'Official sales and after-sales service partner of FUJIYANG & SHARP Elevators across Indonesia.',
      icon: ShieldCheck,
      color: 'from-blue-500/20 to-blue-600/10'
    },
    {
      number: '02',
      title: language === 'id' ? 'Standar Teknik FUJI Japan' : 'FUJI Japan Engineering Standards',
      desc: language === 'id'
        ? 'Desain produk, pengawasan mutu, dan teknologi kontroler dikembangkan melalui kerjasama rekayasa teknik Jepang.'
        : 'Product design, quality control, and controller architecture developed in cooperation with FUJI Japan.',
      icon: Cpu,
      color: 'from-indigo-500/20 to-indigo-600/10'
    },
    {
      number: '03',
      title: language === 'id' ? 'Portofolio Terbukti Nasional' : 'Proven Nationwide Track Record',
      desc: language === 'id'
        ? 'Telah terpasang dan beroperasi di rumah sakit, hotel, gedung kantor, stasiun LRT Jakarta, dan instansi pemerintah.'
        : 'Installed across landmark hospitals, luxury hotels, office towers, LRT Jakarta stations, and public buildings.',
      icon: Building2,
      color: 'from-cyan-500/20 to-cyan-600/10'
    },
    {
      number: '04',
      title: language === 'id' ? 'Lini Produk Paling Lengkap' : 'Complete Product Portfolio',
      desc: language === 'id'
        ? 'Lift penumpang, rumah sakit, panorama, lift rumah, lift barang, mobil, dumbwaiter, eskalator, dan moving walk.'
        : 'Passenger, hospital, panoramic, home, car, freight, dumbwaiter elevators, escalators, and moving walks.',
      icon: Layers,
      color: 'from-emerald-500/20 to-emerald-600/10'
    },
    {
      number: '05',
      title: language === 'id' ? 'Kualitas Bersertifikasi Global' : 'Global Certified Quality Systems',
      desc: language === 'id'
        ? 'Manufaktur berstandar ISO 9001, ISO 14001, OHSAS 18001 serta kesesuaian CE, SASO, dan CU-TR.'
        : 'Manufactured under ISO 9001, ISO 14001, OHSAS 18001 with CE, SASO, and CU-TR international compliance.',
      icon: Award,
      color: 'from-amber-500/20 to-amber-600/10'
    },
    {
      number: '06',
      title: language === 'id' ? 'Layanan & Teknisi 24/7 Jakarta' : '24/7 Local Support Network',
      desc: language === 'id'
        ? 'Dukungan after-sales, inspeksi berkala, dan call center darurat 24 jam berpusat di Kebayoran Lama, Jakarta Selatan.'
        : 'Dedicated after-sales support, periodic maintenance, and 24/7 emergency response based in Jakarta Selatan.',
      icon: Wrench,
      color: 'from-rose-500/20 to-rose-600/10'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Tentang DSAB Lift' : 'About DSAB Lift'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-4">
            {language === 'id' ? (
              <>
                Engineering Vertical Mobility <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Untuk Kemajuan Indonesia
                </span>
              </>
            ) : (
              <>
                Engineering Vertical Mobility <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  For Modern Indonesia
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {language === 'id'
              ? 'DSAB Lift adalah divisi elevator & eskalator di bawah PT DSAB yang menghadirkan solusi mobilitas vertikal terintegrasi untuk rumah sakit, hotel, perkantoran, pusat perbelanjaan, dan hunian bertingkat di seluruh Nusantara.'
              : 'DSAB Lift is the specialized vertical transportation division of PT DSAB, delivering integrated mobility systems for hospitals, hotels, office towers, malls, and residential complexes across Indonesia.'}
          </p>
        </div>

        {/* Global Manufacturing & Local Presence Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Manufacturing Facility & Global Roots */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    {language === 'id' ? 'Kemitraan Strategis Global' : 'Global Strategic Partnership'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mt-1">
                    FUJIYANG & SHARP Elevators
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <FujiyangLogo compact />
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <SharpLogo compact />
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {language === 'id'
                  ? 'Didukung oleh fasilitas manufaktur modern FUJIYANG seluas 66.000 m² dengan jalur produksi plat metal canggih, perakitan mesin sinkron magnet permanen (PMSM), dan menara uji lift setinggi 100 meter berkecepatan 7.0 m/s. Serta jaringan manufaktur SHARP di Hong Kong, China (Zhejiang KNK), dan Korea yang telah melayani lebih dari 50 negara.'
                  : 'Backed by FUJIYANG\'s 66,000 m² state-of-the-art production base with robotic metal sheet fabrication, PMSM motor lines, and a 100m testing tower rated for 7.0 m/s. Along with SHARP Trading\'s extensive network across Hong Kong, China (Zhejiang KNK), and Korea serving 50+ countries.'}
              </p>

              {/* Plant specs grid */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <div>
                  <span className="text-lg sm:text-xl font-black text-blue-400 font-['Space_Grotesk'] block">
                    66,000 m²
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {language === 'id' ? 'Luas Pabrik Modern' : 'Modern Factory Area'}
                  </span>
                </div>
                <div className="border-x border-slate-800">
                  <span className="text-lg sm:text-xl font-black text-indigo-400 font-['Space_Grotesk'] block">
                    100 Meter
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {language === 'id' ? 'Tinggi Menara Uji' : 'Test Tower Height'}
                  </span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-black text-emerald-400 font-['Space_Grotesk'] block">
                    12,000 Set
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {language === 'id' ? 'Kapasitas Produksi/Thn' : 'Annual Capacity'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-blue-400" />
                {language === 'id' ? 'Jaringan Layanan Global 50+ Negara' : 'Global Network in 50+ Countries'}
              </span>
              <span className="text-slate-300 font-semibold">
                ISO 9001 • CE • SASO
              </span>
            </div>
          </div>

          {/* Right: Local Service Hub Jakarta Selatan */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-slate-950 rounded-2xl p-6 sm:p-8 border border-blue-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    {language === 'id' ? 'Kantor Operasional & Workshop' : 'Operations & Workshop'}
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                    DSAB Lift Jakarta Selatan
                  </h4>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 mb-6">
                <p>
                  <strong>{language === 'id' ? 'Alamat Kantor:' : 'Office Address:'}</strong><br />
                  {COMPANY_INFO.address}
                </p>
                <p>
                  <strong>{language === 'id' ? 'Layanan Cepat:' : 'Fast Service:'}</strong><br />
                  {language === 'id'
                    ? 'Tim survey teknis gratis untuk area Jabodetabek, konsultasi shaft sipil, dan respon darurat 24 jam.'
                    : 'Complimentary site surveys across Greater Jakarta, civil shaft engineering consultancy, and 24/7 emergency dispatch.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center gap-3 mb-4">
                <PhoneCall className="w-5 h-5 text-emerald-400 flex-shrink-0 animate-bounce" />
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {language === 'id' ? 'Customer Service & Darurat 24 Jam:' : '24/7 Customer Service & Hotline:'}
                  </span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20DSAB%20Lift,%20saya%20ingin%20konsultasi%20layanan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold font-['Space_Grotesk'] text-base transition-colors"
                  >
                    WhatsApp: {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-3 flex items-center justify-between">
              <span>{language === 'id' ? 'Email Resmi:' : 'Official Email:'}</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline font-medium">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2">
            {language === 'id' ? '6 Pilar Keunggulan DSAB Lift' : '6 Core Pillars of DSAB Lift'}
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {language === 'id'
              ? 'Standar keunggulan rekayasa yang mendasari setiap proyek instalasi lift dan eskalator kami.'
              : 'The engineering pillars behind every elevator and escalator installation.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-950/70 border border-slate-800 p-6 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-slate-600 font-['Space_Grotesk'] tracking-wider">
                    {item.number}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
