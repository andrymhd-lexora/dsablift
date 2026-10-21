import {
  ElevatorProduct,
  PortfolioProject,
  CabinStyle,
  ComparisonRow,
  ReasonItem,
  Testimonial,
  BlogPost,
  FAQItem
} from '../types';

export const COMPANY_INFO = {
  name: 'DSAB Lift',
  legalName: 'PT DSAB',
  tagline: {
    id: 'Elevating Every Possibility',
    en: 'Elevating Every Possibility'
  },
  subtagline: {
    id: 'Solusi Elevator, Eskalator & Transportasi Vertikal Terpercaya di Indonesia',
    en: 'Trusted Elevator, Escalator & Vertical Transportation Solutions in Indonesia'
  },
  address: 'Jl. Mampang Prapatan 8 No. 25, Jakarta Selatan, DKI Jakarta 12790',
  phone: '0858 3083 1654',
  whatsapp: '6285830831654',
  email: 'info@dsablift.com',
  website: 'www.dsablift.com',
  foundedYear: '2010',
  yearsOfExperience: '14+',
  unitsInstalled: '1,000+',
  maxSpeed: '7.0 m/s',
  factoryArea: '66,000 m²',
  testTowerHeight: '100 m',
  partners: [
    {
      name: 'FUJIYANG Elevator & Escalator',
      origin: 'Japan Technology Cooperation',
      description: {
        id: 'Pabrik manufaktur modern 66.000 m² berstandar FUJI Japan dengan menara uji lift 100 meter dan kapasitas produksi 12.000 unit/tahun.',
        en: '66,000 m² state-of-the-art manufacturing plant built on FUJI Japan cooperation with 100m testing tower and 12,000 sets/year output.'
      }
    },
    {
      name: 'SHARP Elevators',
      origin: 'SHARP Trading Co., Limited (Hong Kong est. 1989)',
      description: {
        id: 'Organisasi perdagangan global dengan basis produksi di China (Zhejiang KNK) dan Korea (Sharp Elevators Korea Co., Ltd.) melayani lebih dari 50 negara.',
        en: 'Global trade organization with production bases in China (Zhejiang KNK) and Korea (Sharp Elevators Korea) serving 50+ countries worldwide.'
      }
    }
  ]
};

export const PRODUCTS: ElevatorProduct[] = [
  {
    id: 'passenger-elevator',
    name: {
      id: 'Passenger Elevator (Lift Penumpang)',
      en: 'Passenger Elevator'
    },
    category: 'passenger',
    brand: 'BOTH',
    modelCode: 'KE-J101 / SE-J Series',
    tagline: {
      id: 'Perjalanan aman, mulus, dan nyaman untuk gedung residensial, perkantoran, dan komersial.',
      en: 'Safe, smooth, and comfortable vertical transit for residential, corporate, and commercial towers.'
    },
    description: {
      id: 'Dirancang untuk memberikan transportasi vertikal yang andal dengan pilihan Machine Roomless (MRL) maupun Small Machine Room (MR). Dilengkapi integrated controller berkecepatan hingga 7.0 m/s dan ragam dekorasi kabin mewah.',
      en: 'Engineered to provide smooth and dependable vertical transit for low-rise to high-rise buildings. Available in Machine-Roomless (MRL) and Small Machine Room (MR) configurations with speeds up to 7.0 m/s.'
    },
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Best Seller',
      en: 'Best Seller'
    },
    specs: {
      ratedSpeed: '1.0 m/s - 7.0 m/s',
      ratedCapacity: '450 kg - 1600 kg (6 - 21 orang)',
      maxTravelHeight: 'Hingga 180 m / 60 Lantai',
      driveSystem: 'Permanent Magnet Synchronous Gearless (PMSM)',
      controller: 'Integrated Microcomputer 32-bit VVVF',
      doorType: 'Center Opening / Side Opening 2-Panel',
      cabinFinish: 'Hairline Stainless Steel, Mirror Etched Gold, Wood & Marble'
    },
    keyPoints: [
      {
        id: 'Finishing kabin hairline & mirror-etched stainless steel tahan lama',
        en: 'Hairline and mirror-etched stainless steel cabin finishes'
      },
      {
        id: 'Konfigurasi Machine-Roomless (MRL) hemat ruang dan Small Machine Room (SMR)',
        en: 'Machine-roomless (MRL) and small machine room configurations'
      },
      {
        id: 'Kecepatan teruji hingga 7.0 m/s dengan akselerasi halus tanpa getaran',
        en: 'Rated speed up to 7.0 m/s with ultra-smooth integrated controller'
      },
      {
        id: 'Opsi dekorasi kabin terlengkap seri KE-J101 hingga KE-J131',
        en: 'Wide range of car interior decoration options (KE-J101 to KE-J131 series)'
      }
    ],
    applications: [
      { id: 'Gedung Perkantoran & Menara Bisnis', en: 'Commercial Office Towers' },
      { id: 'Apartemen & Kondominium Mewah', en: 'Luxury Apartments & Condos' },
      { id: 'Hotel Berbintang & Resort', en: 'Hotels & Premium Resorts' }
    ],
    safetyFeatures: [
      { id: 'Full-height Photocell Light Curtain Multi-beam', en: 'Full-height multi-beam photocell door protection' },
      { id: 'ARD (Automatic Rescue Device) saat listrik padam', en: 'Automatic Rescue Device (ARD) for power failure safety' },
      { id: 'Over-speed Governor & Safety Gear K3 Disnaker', en: 'Over-speed governor and safety gear' },
      { id: 'Sistem Intercom 5-Arah & Alarm Darurat', en: '5-Way Intercom and emergency alarm system' }
    ]
  },
  {
    id: 'panoramic-elevator',
    name: {
      id: 'Panoramic Elevator (Lift Kaca / Wisata)',
      en: 'Panoramic Observation Elevator'
    },
    category: 'panoramic',
    brand: 'BOTH',
    modelCode: 'KE-G102 / SE-G103',
    tagline: {
      id: 'Kemewahan visual 360° dengan kaca laminated safety untuk estetika fasad gedung.',
      en: '360° visual luxury with safety laminated glass, enhancing architectural building facades.'
    },
    description: {
      id: 'Lift panorama FUJIYANG & SHARP menghadirkan pengalaman visual spektakuler bagi penumpang. Menggunakan kaca laminated safety kedap suara dan anti-benturan dengan desain kapsul melingkar, semi-circular, maupun diamond faceted.',
      en: 'Panoramic observation elevators provide a breathtaking sightseeing experience. Engineered with sound-isolating laminated safety glass and futuristic capsule silhouettes.'
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Arsitektur Mewah',
      en: 'Luxury Architecture'
    },
    specs: {
      ratedSpeed: '1.0 m/s - 2.5 m/s',
      ratedCapacity: '630 kg - 1600 kg (8 - 21 orang)',
      maxTravelHeight: 'Hingga 100 m / 30 Lantai',
      driveSystem: 'Permanent Magnet Synchronous Gearless (PMSM)',
      controller: 'Full Collective VVVF Integrated Control',
      doorType: 'Glass Center Opening / 2-Panel Telescopic',
      cabinFinish: 'Curved Laminated Safety Glass + Hairline Stainless Gold'
    },
    keyPoints: [
      {
        id: 'Bentuk kabin bervariasi: Semi-circular, Square, Diamond Cutting-angle, dan Bulb',
        en: 'Semi-circular, square, cutting-angle, and bulb capsule shapes'
      },
      {
        id: 'Kaca safety laminated bersertifikat dengan peredam suara dan insulasi termal',
        en: 'Certified laminated safety glass with high acoustic and thermal insulation'
      },
      {
        id: 'Pencahayaan LED ambient tersembunyi yang mempercantik eksterior malam hari',
        en: 'Concealed ambient LED illumination for striking nighttime building exterior'
      },
      {
        id: 'Sangat ideal untuk atrium hotel, mall perbelanjaan modern, dan gedung rekreasi',
        en: 'Ideal for hotel atriums, modern shopping malls, and observation towers'
      }
    ],
    applications: [
      { id: 'Pusat Perbelanjaan & Mall Modern', en: 'Modern Shopping Centers & Malls' },
      { id: 'Atrium Hotel & Gedung Pertemuan', en: 'Hotel Atriums & Convention Centers' },
      { id: 'Menara Wisata & Gedung Ikonik', en: 'Observation Towers & Iconic Landmarks' }
    ],
    safetyFeatures: [
      { id: 'Double Laminated Tempered Safety Glass (10mm + 10mm)', en: 'Double laminated tempered safety glass' },
      { id: 'Emergency Evacuation Hatch & Ventilation', en: 'Emergency evacuation hatch & ventilation' },
      { id: 'Safety Catch Governor & Buffer Hydraulic', en: 'Safety catch governor & hydraulic buffers' }
    ]
  },
  {
    id: 'hospital-elevator',
    name: {
      id: 'Hospital Elevator (Lift Pasien / Bed)',
      en: 'Hospital & Bed Elevator'
    },
    category: 'hospital',
    brand: 'BOTH',
    modelCode: 'KE-B101 / SE-B101',
    tagline: {
      id: 'Prioritas kehigienisan, kabin lapang untuk ranjang pasien dan leveling milimeter.',
      en: 'Utmost hygiene, spacious cabin for hospital stretcher beds, and millimeter-precise leveling.'
    },
    description: {
      id: 'Dirancang khusus untuk standar fasilitas medis rumah sakit dan klinik. Menyediakan kedalaman kabin yang sesuai untuk brankar/stretcher, pintu bukaan lebar, leveling tanpa hentakan, serta sistem sterilisasi UV-C dan ion negatif.',
      en: 'Specifically built to meet stringent healthcare standards. Features deep stretcher-friendly cabin dimensions, wide door openings, jerk-free gentle leveling, and UV-C sterilization.'
    },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Standar Medis Kemenkes',
      en: 'Medical Grade'
    },
    specs: {
      ratedSpeed: '1.0 m/s - 2.5 m/s',
      ratedCapacity: '1000 kg / 1600 kg / 2000 kg (Muat Bed Pasien)',
      maxTravelHeight: 'Hingga 120 m / 40 Lantai',
      driveSystem: 'Gearless PM Synchronous (Super Hening < 48 dB)',
      controller: 'Medical Microprocessor Vector VVVF',
      doorType: '2-Panel Side Open / 2-Panel Center / 4-Panel Telescopic',
      cabinFinish: 'Antibacterial Hairline Stainless Steel + Medical PVC Floor'
    },
    keyPoints: [
      {
        id: 'Dinding kabin & handrail stainless steel antibakteri (Model KE-B101)',
        en: 'Antibacterial hairline stainless steel cabin wall and handrail (KE-B101)'
      },
      {
        id: 'Sistem ventilasi axial fan berkapasitas tinggi + lampu sterilisasi UV-Ray',
        en: 'High-capacity axial fan ventilation plus UV-Ray sterilizing light'
      },
      {
        id: 'Konfigurasi pintu center, telescopic, through-door (2 pintu depan-belakang)',
        en: 'Center, telescopic, and front-rear through-door configurations'
      },
      {
        id: 'Lantai PVC medis tahan kimia dan guncangan roda brankar/bed',
        en: 'Chemical-resistant medical PVC flooring optimized for stretcher rolling'
      }
    ],
    applications: [
      { id: 'Rumah Sakit Umum & RSUD Daerah', en: 'General Hospitals & Regional Healthcare' },
      { id: 'Pusat Medis Spesialis & Klinik', en: 'Specialist Medical Centers & Clinics' },
      { id: 'Pusat Rehabilitasi & Panti Perawatan', en: 'Rehabilitation Centers & Care Facilities' }
    ],
    safetyFeatures: [
      { id: 'Presisi Leveling Milimeter (Tanpa Ganjalan Roda Stretcher)', en: 'Millimeter-precise leveling for smooth stretcher transfer' },
      { id: 'Emergency Medical Priority Key & Intercom', en: 'Emergency medical priority key & intercom' },
      { id: 'Sistem Anti-Ozon & Ion Negatif Penjernih Udara', en: 'Anion air purifier with zero ozone production' }
    ]
  },
  {
    id: 'freight-elevator',
    name: {
      id: 'Freight Elevator (Lift Barang / Kargo)',
      en: 'Heavy-Duty Freight Elevator'
    },
    category: 'freight',
    brand: 'BOTH',
    modelCode: 'KE-F / SE-F Series',
    tagline: {
      id: 'Kekuatan struktural baja solid untuk transportasi kargo industri dan gudang.',
      en: 'Solid structural steel strength for demanding industrial cargo and warehouse logistics.'
    },
    description: {
      id: 'Lift barang tangguh untuk mengangkut beban berat, palet forklift, dan mesin pabrik. Dibuat dari pelat baja berkekuatan tinggi dengan pelindung benturan (crash-barrier), guide rail kokoh, dan pintu bukaan maksimal.',
      en: 'Robust freight elevator built to haul heavy equipment, forklift pallets, and factory cargo. Reinforced with high-yield steel plates, crash-barrier protection, and heavy guide rails.'
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Heavy Duty 3000kg+',
      en: 'Heavy Duty'
    },
    specs: {
      ratedSpeed: '0.5 m/s - 1.5 m/s',
      ratedCapacity: '1,000 kg - 5,000 kg (Beban Industri)',
      maxTravelHeight: 'Hingga 60 m / 20 Lantai',
      driveSystem: 'Heavy-Duty PM Synchronous Gearless / Geared Traction',
      controller: 'Microprocessor Heavy Cargo VVVF',
      doorType: '2-Panel Side Open / 4-Panel Center Open / Vertical Biparting',
      cabinFinish: 'Reinforced Chequered Steel Plate / Heavy-Duty Stainless'
    },
    keyPoints: [
      {
        id: 'Struktur kabin reinforced tahan benturan forklift dan troli kargo',
        en: 'Reinforced cabin structure with bumper rails against forklift impact'
      },
      {
        id: 'Sistem guide rail rel ganda kokoh menjaga kestabilan muatan tidak rata',
        en: 'Double heavy-duty guide rail system ensuring stability under off-center loads'
      },
      {
        id: 'Tersedia pilihan Machine Room (MR) dan Machine Roomless (MRL)',
        en: 'Machine room and machine-roomless configurations available'
      },
      {
        id: 'Bukaan pintu ekstra lebar hingga 3.0 meter untuk manuver palet',
        en: 'Extra-wide multi-panel doors up to 3.0m for easy pallet maneuvering'
      }
    ],
    applications: [
      { id: 'Gudang Logistik & Pusat Distribusi', en: 'Logistics Warehouses & Distribution Hubs' },
      { id: 'Pabrik Manufaktur & Industri Berat', en: 'Manufacturing Plants & Industrial Sites' },
      { id: 'Pusat Perbelanjaan & Pasar Grosir', en: 'Wholesale Markets & Department Stores' }
    ],
    safetyFeatures: [
      { id: 'Overload Holding Stop & Sensor Timbangan Digital', en: 'Digital overload holding stop and weighing sensor' },
      { id: 'Re-leveling Otomatis saat Pembebanan Forklift', en: 'Automatic re-leveling during heavy forklift loading' },
      { id: 'Anti-stall Timer & Kunci Pengaman Pintu Ganda', en: 'Anti-stall timer & double mechanical door interlocks' }
    ]
  },
  {
    id: 'home-elevator',
    name: {
      id: 'Home Elevator (Lift Rumah / Villa)',
      en: 'Home & Villa Elevator'
    },
    category: 'home',
    brand: 'BOTH',
    modelCode: 'KE-H / SE-H Series',
    tagline: {
      id: 'Solusi mobilitas mewah hunian pribadi tanpa ruang mesin (MRL) hemat listrik.',
      en: 'Luxury private residence mobility without machine room (MRL), low power consumption.'
    },
    description: {
      id: 'Lift rumah elegan untuk kenyamanan keluarga dan lansia. Tidak membutuhkan ruang mesin konvensional maupun pit yang dalam, hemat daya listrik (setara AC rumah tangga), beroperasi sangat hening dengan teknologi VVVF micro-processing.',
      en: 'Elegant residential elevator bringing accessibility and prestige to private villas. Requires no machine room or deep pit, consumes low household power, and operates silently.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Hemat Daya 1 Phasa',
      en: 'Eco Home'
    },
    specs: {
      ratedSpeed: '0.4 m/s - 0.63 m/s',
      ratedCapacity: '250 kg - 450 kg (3 - 6 orang)',
      maxTravelHeight: 'Hingga 18 m / 2 - 5 Lantai',
      driveSystem: 'Gearless PM Synchronous / Single Phase 220V Compatible',
      controller: 'Home Smart Micro-Processing VVVF',
      doorType: 'Automatic Sliding Glass / Telescopic / Manual Swing Glass',
      cabinFinish: 'Panoramic Glass Shaft, Rose Gold Stainless, Warm Wood'
    },
    keyPoints: [
      {
        id: 'Tanpa ruang mesin tradisional (MRL) — tidak membebani konstruksi rumah',
        en: 'No traditional machine room needed — zero extra building load'
      },
      {
        id: 'Daya listrik hemat mulai 1.1 kW, bisa menggunakan listrik 1-Phase 220V',
        en: 'Low power consumption from 1.1 kW, compatible with 220V single-phase'
      },
      {
        id: 'Traction machine bracket langsung terpasang pada guide rail',
        en: 'Traction machine bracket mounted directly to guide rails'
      },
      {
        id: 'Pintu otomatis dengan sabuk sinkron timing belt bersertifikat CE',
        en: 'Automatic door operator with synchronous timing belt, CE certified'
      }
    ],
    applications: [
      { id: 'Rumah Tinggal Mewah & Rumah Bertingkat', en: 'Luxury Residences & Multi-Story Homes' },
      { id: 'Villa Eksklusif & Townhouse', en: 'Exclusive Villas & Townhouses' },
      { id: 'Ruko & Kantor Komersial Mini', en: 'Shophouses & Boutique SOHO Offices' }
    ],
    safetyFeatures: [
      { id: 'ARD Emergency Battery Drop ke Lantai Terdekat', en: 'ARD battery-assisted auto drop to nearest floor' },
      { id: 'Intercom Darurat Terhubung ke HP / Ruang Utama', en: 'Emergency phone/intercom connected to mobile/guard' },
      { id: 'Sensor Pintu Tirai Cahaya Inframerah Anti Terjepit', en: 'Full infrared safety light curtain against pinching' }
    ]
  },
  {
    id: 'car-elevator',
    name: {
      id: 'Car Elevator (Lift Mobil / Parkir)',
      en: 'Car & Automotive Elevator'
    },
    category: 'car',
    brand: 'BOTH',
    modelCode: 'KE-C / SE-C Series',
    tagline: {
      id: 'Transportasi vertikal kendaraan efisien untuk gedung parkir bertingkat dan showroom.',
      en: 'Efficient vehicle vertical transportation for multi-level parking and car showrooms.'
    },
    description: {
      id: 'Mengatasi kendala keterbatasan ruang ramp dengan lift mobil bertenaga tinggi. Dilengkapi sistem penyeimbang getaran saat kendaraan masuk, double Car Operating Panels (COP) yang dapat dijangkau pengemudi dari jendela mobil.',
      en: 'Solves spatial ramp constraints with heavy-duty automotive elevators. Features anti-shaking cabin stabilization when cars drive in, double COPs accessible from driver window.'
    },
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Solusi Parkir',
      en: 'Parking Solution'
    },
    specs: {
      ratedSpeed: '0.25 m/s - 0.5 m/s',
      ratedCapacity: '3,000 kg - 5,000 kg (Mobil Sedan hingga SUV & Truk Ringan)',
      maxTravelHeight: 'Hingga 45 m / 15 Lantai',
      driveSystem: 'High-Torque PM Synchronous Gearless Traction',
      controller: 'Vehicle Specialized Dual Microprocessor VVVF',
      doorType: '4-Panel / 6-Panel Center Opening Extra Wide',
      cabinFinish: 'Heavy Steel Plate with Yellow Guide Lines & Wheel Stops'
    },
    keyPoints: [
      {
        id: 'Tersedia opsi 2 pintu tembus (Front & Rear) untuk kemudahan drive-through',
        en: 'Available with front and rear drive-through entrances'
      },
      {
        id: 'Double COP di kedua sisi kabin memudahkan pengemudi menekan tombol',
        en: 'Double car operating panels (COPs) accessible directly by driver'
      },
      {
        id: 'Perangkat keamanan khusus penahan beban dinamik kendaraan masuk',
        en: 'Dedicated safety-protecting device for vehicle load transitions'
      },
      {
        id: 'Layar display dan sirkuit kontrol visual panduan posisi parkir',
        en: 'Special circuit control and clear parking position display'
      }
    ],
    applications: [
      { id: 'Gedung Parkir Vertikal & Basement', en: 'Multi-Level Parking Facilities' },
      { id: 'Showroom Mobil & Dealer Otomotif', en: 'Automotive Dealerships & Showrooms' },
      { id: 'Apartemen Mewah dengan Dedicated Garage', en: 'Luxury Penthouses with In-Unit Garages' }
    ],
    safetyFeatures: [
      { id: 'Sensor Berat 4 Titik Sudut Kabin', en: '4-Point Corner Weight Sensing System' },
      { id: 'Mechanical Wheel Stopper & Anti-Roll Guard', en: 'Mechanical wheel stops & anti-roll barrier' },
      { id: 'Traffic Light Interlock System', en: 'Traffic light guidance and door interlocking' }
    ]
  },
  {
    id: 'escalator',
    name: {
      id: 'Escalator (Eskalator Gedung & Publik)',
      en: 'Commercial & Public Escalator'
    },
    category: 'escalator',
    brand: 'BOTH',
    modelCode: 'KE-E / SE-E Series',
    tagline: {
      id: 'Aliran pergerakan penumpang kontinu kapasitas tinggi dengan standar keamanan global.',
      en: 'Continuous high-volume pedestrian flow with global safety standards and exquisite finish.'
    },
    description: {
      id: 'Eskalator modern untuk lalu lintas publik padat seperti mall, stasiun LRT/MRT, dan bandara. Didesain dengan rangka truss baja kokoh, handrail tahan cuaca, step aluminium anti-selip, serta pencahayaan skirt LED mewah.',
      en: 'Heavy-duty public transport escalators engineered for shopping malls, transit stations, and airports. Designed for continuous operation up to 25m travel height.'
    },
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Travel Height 25m',
      en: 'Heavy Duty'
    },
    specs: {
      ratedSpeed: '0.5 m/s (Standar) / Variable Inverter Eco',
      ratedCapacity: '6,000 - 9,000 penumpang/jam',
      maxTravelHeight: 'Hingga 25 meter kemiringan 30° / 35°',
      driveSystem: 'High-Efficiency Helical Gearbox / VVVF Variable Speed',
      controller: 'Dual Safety Microcontroller Logic',
      doorType: 'Open Incline Tracing (Step Width 800mm / 1000mm)',
      cabinFinish: 'Stainless Steel Decking, Glass Balustrade, Colored Handrail'
    },
    keyPoints: [
      {
        id: 'Tipe heavy-duty transportasi publik hingga ketinggian tempuh 25 meter',
        en: 'Heavy-duty public transport escalator up to 25m travel height'
      },
      {
        id: 'Balustrade kaca tempered 10mm dengan opsi warna handrail beragam',
        en: 'Customizable glass balustrade, colored handrail, and skirt lighting'
      },
      {
        id: 'Dilengkapi lebih dari 16 sensor pengaman mekanikal dan elektrikal',
        en: 'Equipped with 16+ strictly designed mechanical and electrical safety devices'
      },
      {
        id: 'Sistem penghemat energi inverter cerdas (Auto-Slow saat sepi penumpang)',
        en: 'Smart inverter energy saving system (Auto-slow during idle periods)'
      }
    ],
    applications: [
      { id: 'Pusat Perbelanjaan, Mall & Hypermarket', en: 'Shopping Malls & Hypermarkets' },
      { id: 'Stasiun Kereta Api, LRT, MRT & Bandara', en: 'Train Stations, LRT/MRT & Airport Terminals' },
      { id: 'Gedung Pameran, Universitas & Convention Hall', en: 'Exhibition Centers & Universities' }
    ],
    safetyFeatures: [
      { id: 'Handrail Inlet Protection & Anti-Pinch Brush', en: 'Handrail inlet safety & skirt brush guard' },
      { id: 'Comb-Plate Sensor & Broken Step-Chain Device', en: 'Comb-plate safety device & step-chain sensor' },
      { id: 'Over-speed & Direction Reversal Protection', en: 'Over-speed and unintended reversal protection' },
      { id: 'Emergency Stop Buttons di Kedua Ujung Landing', en: 'Emergency stop push buttons on top and bottom landings' }
    ]
  },
  {
    id: 'moving-walk',
    name: {
      id: 'Moving Walk (Travelator / Eskalator Datar)',
      en: 'Moving Walk / Travelator'
    },
    category: 'moving-walk',
    brand: 'BOTH',
    modelCode: 'KE-M / SE-M Series',
    tagline: {
      id: 'Mobilitas horizontal dan inclined yang mulus memudahkan membawa troli belanja.',
      en: 'Smooth horizontal and inclined passenger mobility, ideal for shopping carts and luggage.'
    },
    description: {
      id: 'Moving walk menghadirkan kenyamanan transportasi pejalan kaki untuk jarak tempuh panjang dan lantai miring 10°-12°. Sangat ramah untuk pengguna troli belanja hypermarket, koper bandara, dan kursi roda.',
      en: 'Moving walks provide convenient, barrier-free horizontal and inclined (10°-12°) transit for pedestrians, luggage carts, and shopping trolleys across large facilities.'
    },
    image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Ramah Troli & Koper',
      en: 'Trolley Friendly'
    },
    specs: {
      ratedSpeed: '0.5 m/s (Inverter Variable Speed)',
      ratedCapacity: '6,000 - 9,000 orang/jam',
      maxTravelHeight: 'Sudut Kemiringan 0° (Horizontal) atau 10° - 12° (Inclined)',
      driveSystem: 'High-Efficiency Integrated VVVF Motor',
      controller: 'Intellectual Mains Management System',
      doorType: 'Continuous Pallet Track (Pallet Width 800mm / 1000mm)',
      cabinFinish: 'Stainless Steel / Aluminium Pallet dengan Alur Anti-Selip'
    },
    keyPoints: [
      {
        id: 'Dirancang untuk lalu lintas volume pejalan kaki tinggi yang berkelanjutan',
        en: 'Designed for continuous large-volume pedestrian flow'
      },
      {
        id: 'Palet dengan alur khusus pengunci roda troli belanja standar internasional',
        en: 'Grooved pallets with automatic shopping cart wheel locking mechanism'
      },
      {
        id: 'Hemat energi hingga 36% dengan sistem kontrol daya cerdas',
        en: 'Up to 36% energy loss reduction with intellectual power management'
      },
      {
        id: 'Sistem pengaman menyeluruh dari comb-plate hingga motor overload',
        en: 'Strictly designed safety devices throughout the entire travel path'
      }
    ],
    applications: [
      { id: 'Bandara Internasional & Terminal Penumpang', en: 'International Airports & Transit Hubs' },
      { id: 'Hypermarket, Supermarket & Pusat Grosir', en: 'Hypermarkets, Supermarkets & Wholesale Centers' },
      { id: 'Jembatan Penyeberangan Terpadu (Skybridge)', en: 'Pedestrian Skybridges & Interchanges' }
    ],
    safetyFeatures: [
      { id: 'Comb-Plate Safety Switch & Pallet Sagging Sensor', en: 'Comb-plate safety switch & pallet sagging sensor' },
      { id: 'Drive Chain & Step Chain Broken Safety Device', en: 'Drive chain and step chain fracture safety devices' },
      { id: 'Emergency Foot Switch & Side Skirt Safety', en: 'Emergency foot switches & side skirt safety' }
    ]
  },
  {
    id: 'dumbwaiter-elevator',
    name: {
      id: 'Dumbwaiter Elevator (Lift Makanan & Dokumen)',
      en: 'Dumbwaiter Service Elevator'
    },
    category: 'dumbwaiter',
    brand: 'BOTH',
    modelCode: 'KE-D / SE-D Series',
    tagline: {
      id: 'Lift servis kompak untuk restoran, hotel, rumah sakit, dan perpustakaan.',
      en: 'Compact service elevator for restaurants, hotels, hospitals, and libraries.'
    },
    description: {
      id: 'Solusi efisien untuk memindahkan makanan, piring, obat-obatan, dan dokumen antar lantai tanpa menyita ruang. Tersedia tipe Window-Loading (setinggi pinggang) dan Ground-Loading (setara lantai untuk troli kecil).',
      en: 'Compact, light-load service elevator requiring minimal architectural space. Features advanced PC control modules for stable movement in window or ground-loading types.'
    },
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    badge: {
      id: 'Kompak & Higienis',
      en: 'Compact & Hygienic'
    },
    specs: {
      ratedSpeed: '0.4 m/s',
      ratedCapacity: '100 kg - 300 kg (Beban Makanan & Barang Ringan)',
      maxTravelHeight: 'Hingga 24 m / 2 - 8 Lantai',
      driveSystem: 'Traction Machine with Micro PC Controller',
      controller: 'Microcomputer Relay / PLC Dedicated System',
      doorType: 'Vertical Bi-Parting Manual / Automatic Stainless Steel',
      cabinFinish: 'Full Food-Grade SUS304 Stainless Steel Cabin & Shelves'
    },
    keyPoints: [
      {
        id: 'Material Stainless Steel Food Grade SUS304 higienis dan mudah dibersihkan',
        en: 'Food-grade SUS304 stainless steel cabin and removable shelves'
      },
      {
        id: 'Tersedia pilihan Window-loading (meja) dan Ground-loading (lantai)',
        en: 'Available in window-loading (counter height) and ground-loading types'
      },
      {
        id: 'Pemasangan cepat dan membutuhkan ruang shaft yang sangat kompak',
        en: 'Quick installation and extremely compact shaft space requirements'
      },
      {
        id: 'Dilengkapi lampu indikator kedatangan dan buzzer suara di setiap lantai',
        en: 'Equipped with floor arrival indicator light and audio buzzer'
      }
    ],
    applications: [
      { id: 'Restoran, Kafe & Dapur Hotel', en: 'Restaurants, Cafes & Hotel Kitchens' },
      { id: 'Farmasi Rumah Sakit & Laboratorium', en: 'Hospital Pharmacies & Clean Labs' },
      { id: 'Perpustakaan, Arsip & Bank', en: 'Libraries, Document Archives & Banks' }
    ],
    safetyFeatures: [
      { id: 'Kunci Pengaman Pintu Interlock Elektrikal', en: 'Electrical door safety interlocks' },
      { id: 'Overload Alarm & Slack Rope Safety Switch', en: 'Overload alarm and slack-rope safety switch' },
      { id: 'Emergency Stop & Final Limit Switches', en: 'Emergency stop push button & final limit switches' }
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    name: 'Gedung Bank Sultra Tower',
    location: 'Kendari, Sulawesi Tenggara',
    category: 'government',
    typeModel: 'MMR-800/825KG-C090-15/15/15',
    units: 5,
    stops: '15 Lantai',
    capacity: '825 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Supply, Instalasi & Commissioning Lift Penumpang', en: 'Supply, Installation & Commissioning Passenger Elevators' },
    featured: true
  },
  {
    id: 'p2',
    name: 'Heigh Residences',
    location: 'Jakarta',
    category: 'residential',
    typeModel: 'MMR-1350/1600KG-C120-28/28/28',
    units: 3,
    stops: '28 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'High-Speed Passenger Elevators (Speed 2.0 m/s)', en: 'High-Speed Passenger Elevators' },
    featured: true
  },
  {
    id: 'p3',
    name: 'Grand Sahid Jaya',
    location: 'Jakarta Pusat',
    category: 'hospitality',
    typeModel: 'Comprehensive Maintenance Contract',
    units: 15,
    stops: 'Multi-Floor',
    capacity: 'Hotel Standard',
    brand: 'FUJIYANG',
    scope: { id: 'Kontrak Maintenance & Perawatan 24 Jam 15 Unit', en: '24/7 Full Maintenance Contract 15 Units' },
    featured: true
  },
  {
    id: 'p4',
    name: 'RSU Tangerang',
    location: 'Tangerang, Banten',
    category: 'healthcare',
    typeModel: 'MMR-1600KG-C060-3/3/3',
    units: 1,
    stops: '3 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Bed Pasien Rumah Sakit & Stretcher', en: 'Hospital Bed & Stretcher Elevator' },
    featured: true
  },
  {
    id: 'p5',
    name: 'Hotel & Apartemen Setiabudi',
    location: 'Bandung, Jawa Barat',
    category: 'hospitality',
    typeModel: 'MMR-1600KG-C090-19/19/19',
    units: 3,
    stops: '19 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Supply & Instalasi Lift Penumpang Mewah 19 Lantai', en: 'Luxury Passenger Elevators 19 Floors' },
    featured: true
  },
  {
    id: 'p6',
    name: 'Modernisasi Lift Mitsubishi, Gedung LRT Jakarta',
    location: 'Kelapa Gading, Jakarta',
    category: 'transport',
    typeModel: 'MMR-550KG-C060-5/5/5',
    units: 2,
    stops: '5 Lantai',
    capacity: '550 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Modernisasi Sistem Kontrol, Mesin & Indikator Stasiun LRT', en: 'Elevator Modernization for LRT Station' },
    featured: true
  },
  {
    id: 'p7',
    name: 'RSUD Tanjung',
    location: 'Kalimantan',
    category: 'healthcare',
    typeModel: 'MMR-1600KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Ranjang Medis & Pasien RSUD', en: 'Medical Bed Elevators' }
  },
  {
    id: 'p8',
    name: 'RS Sumedang Medical Center (RS SMC)',
    location: 'Sumedang, Jawa Barat',
    category: 'healthcare',
    typeModel: 'MMR-1600KG-C060-3/3/3',
    units: 2,
    stops: '3 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Pasien Khusus Bed & Operasi', en: 'Hospital Bed Elevators' }
  },
  {
    id: 'p9',
    name: 'RS. Bali Mandara',
    location: 'Denpasar, Bali',
    category: 'healthcare',
    typeModel: 'MMR-1600KG-C060-3/3/3',
    units: 2,
    stops: '3 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Instalasi Lift Rumah Sakit Internasional Bali', en: 'Hospital Bed Elevator Installation' }
  },
  {
    id: 'p10',
    name: 'RSUD Majenang',
    location: 'Cilacap, Jawa Tengah',
    category: 'healthcare',
    typeModel: 'MMR-1600KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Pasien & Lift Pengunjung Rumah Sakit', en: 'Patient & Passenger Elevators' }
  },
  {
    id: 'p11',
    name: 'RSUD Limpung Batang',
    location: 'Batang, Jawa Tengah',
    category: 'healthcare',
    typeModel: 'MMR-1000KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '1000 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang & Bed Medis RSUD', en: 'Passenger & Bed Elevators' }
  },
  {
    id: 'p12',
    name: 'International Trade Centre (ITC)',
    location: 'Jakarta',
    category: 'commercial',
    typeModel: 'MMR-1000KG-C060-4/4/4',
    units: 4,
    stops: '4 Lantai',
    capacity: '1000 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang Komersial Traffic Padat', en: 'High-Traffic Commercial Elevators' }
  },
  {
    id: 'p13',
    name: 'ITC Mangga Dua',
    location: 'Jakarta Pusat',
    category: 'commercial',
    typeModel: 'MMR-1000KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '1000 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang & Pengunjung Mall Grosir', en: 'Commercial Passenger Elevators' }
  },
  {
    id: 'p14',
    name: 'Mall Indramayu',
    location: 'Indramayu, Jawa Barat',
    category: 'commercial',
    typeModel: 'MMR-1600KG-C060-3/3/3',
    units: 3,
    stops: '3 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang & Lift Barang Mall', en: 'Mall Passenger & Freight Elevators' }
  },
  {
    id: 'p15',
    name: 'Hypermart Merchant Hype, Bintaro',
    location: 'Tangerang Selatan, Banten',
    category: 'commercial',
    typeModel: 'MMR-630KG-C060-3/3/3',
    units: 5,
    stops: '3 Lantai',
    capacity: '630 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang & Moving Walk Belanja', en: 'Passenger Elevators & Retail Transit' }
  },
  {
    id: 'p16',
    name: 'Hanggar Lion Air',
    location: 'Batam, Kepulauan Riau',
    category: 'transport',
    typeModel: 'MMR-1600KG-C060-4/4/4',
    units: 4,
    stops: '4 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Fasilitas MRO Penerbangan & Teknik', en: 'Aviation MRO Facility Elevators' }
  },
  {
    id: 'p17',
    name: 'AIRNAV Indonesia',
    location: 'Tangerang, Banten',
    category: 'government',
    typeModel: 'MMR-630KG-C060-4/4/4',
    units: 1,
    stops: '4 Lantai',
    capacity: '630 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Operasional Navigasi Penerbangan', en: 'Aviation Control Center Elevator' }
  },
  {
    id: 'p18',
    name: 'Hotel Random',
    location: 'Bali',
    category: 'hospitality',
    typeModel: 'MMR-800KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '800 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang Hotel Resort Mewah', en: 'Resort Hotel Passenger Elevators' }
  },
  {
    id: 'p19',
    name: 'Hotel Seruni',
    location: 'Puncak, Bogor, Jawa Barat',
    category: 'hospitality',
    typeModel: 'MMR-800KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '800 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang Hotel Resort Pegunungan', en: 'Resort Passenger Elevators' }
  },
  {
    id: 'p20',
    name: 'Gedung Studio, Universitas Mercu Buana',
    location: 'Jakarta Barat',
    category: 'government',
    typeModel: 'MRL-1600KG-C060-5/5/5',
    units: 1,
    stops: '5 Lantai',
    capacity: '1600 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Kampus Machine-Roomless (MRL)', en: 'Campus MRL Elevator Installation' }
  },
  {
    id: 'p21',
    name: 'NTT Kupang Fair, Gedung Pameran',
    location: 'Kupang, Nusa Tenggara Timur',
    category: 'commercial',
    typeModel: 'Heavy-Duty Escalator Pair',
    units: 2,
    stops: '2 Lantai',
    capacity: 'Publik',
    brand: 'FUJIYANG',
    scope: { id: 'Instalasi Sepasang Eskalator Gedung Pameran', en: 'Public Escalator Installation' }
  },
  {
    id: 'p22',
    name: 'Pasar GEDE Cilacap',
    location: 'Cilacap, Jawa Tengah',
    category: 'commercial',
    typeModel: 'MMR-800KG-C060-4/4/4',
    units: 1,
    stops: '4 Lantai',
    capacity: '800 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Penumpang & Pengunjung Pasar Modern', en: 'Modern Market Passenger Elevator' }
  },
  {
    id: 'p23',
    name: 'Gedung WIKA',
    location: 'Jakarta Timur',
    category: 'government',
    typeModel: 'Maintenance Service Contract',
    units: 2,
    stops: 'Kantor BUMN',
    capacity: 'Corporate Standard',
    brand: 'FUJIYANG',
    scope: { id: 'Kontrak Pemeliharaan Rutin Bulanan', en: 'Monthly Preventative Maintenance Contract' }
  },
  {
    id: 'p24',
    name: 'Office Ceres',
    location: 'Bandung, Jawa Barat',
    category: 'commercial',
    typeModel: 'MMR-1000KG-C060-4/4/4',
    units: 2,
    stops: '4 Lantai',
    capacity: '1000 kg',
    brand: 'FUJIYANG',
    scope: { id: 'Lift Gedung Perkantoran Corporate', en: 'Corporate Office Elevators' }
  }
];

export const CABIN_STYLES: CabinStyle[] = [
  {
    id: 'ke-j101',
    code: 'KE-J101',
    name: 'Concise Modern Hairline',
    series: 'concise',
    finish: { id: 'Hairline Stainless Steel SUS304', en: 'Hairline Stainless Steel SUS304' },
    ceiling: { id: 'Acrylic Sheet dengan LED Downlight Lembut', en: 'Acrylic sheet with soft LED downlights' },
    handrail: { id: 'Pipa Stainless Steel Hairline Oval', en: 'Hairline stainless steel oval handrail' },
    flooring: { id: 'Granit Marmer Sintetis / PVC Motif Geometrik', en: 'Synthetic marble granite / geometric PVC' },
    accentColor: '#3b82f6',
    bgColor: 'from-slate-800 to-slate-900',
    description: {
      id: 'Gaya minimalis modern dengan garis tegas, tahan gores, dan sangat cocok untuk gedung kantor, apartemen, dan fasilitas umum.',
      en: 'Modern minimalist aesthetic with crisp lines, scratch-resistant, ideal for corporate offices and residences.'
    },
    features: ['Anti-fingerprint coating', 'Ultra-clean lighting', 'Low maintenance']
  },
  {
    id: 'ke-j102',
    code: 'KE-J102',
    name: 'Mirror Stainless & Glass Inlay',
    series: 'concise',
    finish: { id: 'Mirror Polished Stainless + Glass Side Panels', en: 'Mirror Polished Stainless + Glass Side Panels' },
    ceiling: { id: 'Mirror Stainless Steel Frame dengan Pola Cutout', en: 'Mirror stainless frame with precision cutout pattern' },
    handrail: { id: 'Stainless Steel Polished Flat Tube', en: 'Stainless steel polished flat tube' },
    flooring: { id: 'Marmer Alami Corak Emerald & Sand', en: 'Natural marble with emerald & sand accents' },
    accentColor: '#0ea5e9',
    bgColor: 'from-cyan-950 to-slate-900',
    description: {
      id: 'Kombinasi pantulan cermin dan panel kaca memberikan ilusi kabin yang jauh lebih luas dan terang.',
      en: 'Combination of mirror reflections and glass panels creating a brighter, visually expansive interior.'
    },
    features: ['Illusion of spaciousness', 'High ambient reflectivity', 'Modern elegance']
  },
  {
    id: 'ke-j111',
    code: 'KE-J111',
    name: 'Classical Mirror Etched Gold',
    series: 'classical',
    finish: { id: 'Titanium Gold Mirror-Etched Stainless Steel', en: 'Titanium Gold Mirror-Etched Stainless Steel' },
    ceiling: { id: 'Gold Titanium Mirror Panel dengan Lampu Kubah LED', en: 'Gold titanium mirror panel with dome LED lights' },
    handrail: { id: 'Gold Titanium Coated Stainless Steel Tube', en: 'Gold titanium coated stainless tube' },
    flooring: { id: 'Marmer Premium Motif Diamond Medallion', en: 'Premium marble with diamond medallion pattern' },
    accentColor: '#eab308',
    bgColor: 'from-amber-950 to-slate-900',
    description: {
      id: 'Sentuhan kemewahan istana dengan pelapisan titanium gold dan ukiran etsa artistik untuk hotel bintang lima dan ballroom.',
      en: 'Palatial luxury featuring titanium gold plating and artistic etching for 5-star hotels and luxury residences.'
    },
    features: ['Titanium PVD gold coating', 'Intricate etched motifs', 'Opulent lighting']
  },
  {
    id: 'ke-j112',
    code: 'KE-J112',
    name: 'Royal Floral Gold Motif',
    series: 'classical',
    finish: { id: 'Rose Gold & Champagne Gold Etched Pattern', en: 'Rose Gold & Champagne Gold Etched Pattern' },
    ceiling: { id: 'Champagne Gold Arch Top dengan Crystal LED Accent', en: 'Champagne gold arch top with crystal LED accent' },
    handrail: { id: 'Rose Gold Tubular Handrail Ergonomis', en: 'Ergonomic rose gold tubular handrail' },
    flooring: { id: 'Marmer Pola Bunga Lotus Klasik', en: 'Classic lotus motif inlay marble' },
    accentColor: '#f59e0b',
    bgColor: 'from-orange-950 to-slate-900',
    description: {
      id: 'Ornamen bunga elegan yang memancarkan kehangatan dan prestise bagi hunian elit dan klub eksklusif.',
      en: 'Graceful floral ornaments radiating warmth and prestige for exclusive private clubs and villas.'
    },
    features: ['Rose gold tones', 'Custom decorative ceiling', 'Anti-tarnish warranty']
  },
  {
    id: 'ke-j127',
    code: 'KE-J127',
    name: 'Grand Luxury Wood & Leather',
    series: 'luxury',
    finish: { id: 'Kayu Walnut Alami + Aksen Kulit Nappa & Gold Trim', en: 'Natural Walnut Wood + Nappa Leather Accent & Gold Trim' },
    ceiling: { id: 'Coffered Wood Ceiling dengan Warm Ambient Strip', en: 'Coffered wood ceiling with warm ambient LED strips' },
    handrail: { id: 'Kayu Mahoni Halus dengan Ujung Gold Brass', en: 'Solid polished mahogany wood with brass ends' },
    flooring: { id: 'Italian Calacatta White Marble Tile', en: 'Italian Calacatta white marble tiles' },
    accentColor: '#8b5cf6',
    bgColor: 'from-indigo-950 to-slate-900',
    description: {
      id: 'Koleksi mahakarya tertinggi dengan perpaduan tekstur kayu alami, jahitan kulit mewah, dan lantai marmer Italia asli.',
      en: 'Top-tier master collection combining rich natural wood grains, stitched leather, and authentic Italian marble.'
    },
    features: ['Acoustic dampened cabin', 'Hand-stitched leather panels', 'Ultra-luxurious feel']
  },
  {
    id: 'ke-g102',
    code: 'KE-G102',
    name: 'Panoramic Capsule Sightseeing',
    series: 'panoramic',
    finish: { id: 'Kaca Laminated Curved 360° + Hairline Stainless Frame', en: '360° Curved Laminated Glass + Hairline Stainless Frame' },
    ceiling: { id: 'Skylight Glass Ceiling dengan Soft Edge Glow', en: 'Skylight glass ceiling with soft edge glow' },
    handrail: { id: 'Stainless Steel Ring Handrail Keliling', en: 'Perimeter continuous stainless steel ring handrail' },
    flooring: { id: 'Granit Abu-Abu Modern Anti Selip', en: 'Modern slip-resistant architectural granite' },
    accentColor: '#06b6d4',
    bgColor: 'from-cyan-950 to-slate-900',
    description: {
      id: 'Kabin kaca panorama bulat futuristik yang menyuguhkan pemandangan spektakuler tanpa batas bagi penumpang.',
      en: 'Futuristic circular sightseeing glass capsule offering unrestricted panoramic views.'
    },
    features: ['360-degree visibility', 'Acoustic glass sandwich', 'Exterior lighting strip']
  },
  {
    id: 'ke-b101',
    code: 'KE-B101',
    name: 'Hospital Medical Stretcher Standard',
    series: 'hospital',
    finish: { id: 'Medical SUS304 Hairline dengan Bumper Strip Guard', en: 'Medical SUS304 Hairline with Rubber Bumper Guard' },
    ceiling: { id: 'Shadowless Medical LED Panel + UV-C Sterilizer', en: 'Shadowless medical LED panel + UV-C sterilizer' },
    handrail: { id: 'Double Row Antibacterial Stainless Handrail', en: 'Double row antibacterial stainless handrail' },
    flooring: { id: 'Seamless Antibacterial Hospital Grade PVC', en: 'Seamless antibacterial hospital-grade PVC' },
    accentColor: '#10b981',
    bgColor: 'from-emerald-950 to-slate-900',
    description: {
      id: 'Standar ruang operasi steril dengan perlindungan benturan brankar, tombol braille besar, dan sanitasi udara aktif.',
      en: 'Sterile surgical standards with bumper rails, oversized braille buttons, and active air purification.'
    },
    features: ['UV-C sterilization', 'Zero-jerk acceleration', 'Stretcher bumper rails']
  }
];

export const REASONS_LIST: ReasonItem[] = [
  {
    id: 1,
    stat: '14+ Years',
    title: {
      id: 'Pengalaman Teruji di Industri Lift',
      en: '14+ Years Proven Industry Experience'
    },
    desc: {
      id: 'Telah berpengalaman lebih dari satu dekade melayani kebutuhan transportasi vertikal di berbagai provinsi di Indonesia.',
      en: 'Over a decade of established engineering experience delivering vertical mobility across Indonesia.'
    },
    iconName: 'Award'
  },
  {
    id: 2,
    stat: '1,000+ Units',
    title: {
      id: 'Portofolio Terpasang & Beroperasi',
      en: '1,000+ Operational Units Installed'
    },
    desc: {
      id: 'Lebih dari seribu unit lift dan eskalator telah terpasang di rumah sakit, instansi pemerintah, BUMN, hotel, dan gedung swasta.',
      en: 'Installed across government buildings, hospitals, state-owned enterprises, hotels, and private towers.'
    },
    iconName: 'Building2'
  },
  {
    id: 3,
    stat: '1.5 - 2 Bulan',
    title: {
      id: 'Pengadaan & Delivery Tercepat',
      en: '1.5–2 Months Fast Procurement'
    },
    desc: {
      id: 'Waktu tunggu pabrikasi dan pengiriman jauh lebih cepat karena ketersediaan ready stock komponen di gudang lokal.',
      en: 'Significantly shorter lead time due to ready stock parts and streamlined logistics.'
    },
    iconName: 'Clock'
  },
  {
    id: 4,
    stat: 'Japan Tech',
    title: {
      id: 'Rekayasa Teknologi Berstandar Jepang',
      en: 'Japan-Origin Technology & Standards'
    },
    desc: {
      id: 'Teknologi motor traksi gearless dan kontroler cerdas berakar dari standar kerja sama teknik FUJI Japan.',
      en: 'Underlying gearless traction and controller technology rooted in Japanese engineering collaboration.'
    },
    iconName: 'Cpu'
  },
  {
    id: 5,
    stat: '3-Year Warranty',
    title: {
      id: 'Garansi Resmi Terpanjang',
      en: 'Up to 3-Year Official Warranty'
    },
    desc: {
      id: 'Perlindungan garansi unit dan spare part utama lebih lama dibandingkan standar rata-rata pasar kompetitor.',
      en: 'Extended warranty coverage on elevator unit and key mechanical components.'
    },
    iconName: 'ShieldCheck'
  },
  {
    id: 6,
    stat: '12-Month Free',
    title: {
      id: 'Gratis Service & Pemeliharaan 1 Tahun',
      en: '12-Month Free Maintenance Service'
    },
    desc: {
      id: 'Setiap instalasi unit baru sudah termasuk paket pemeriksaan berkala dan pelumasan gratis selama 12 bulan penuh.',
      en: 'Every new installation includes one full year of complimentary routine inspection and servicing.'
    },
    iconName: 'Wrench'
  },
  {
    id: 7,
    stat: '25-30 Tahun',
    title: {
      id: 'Jaminan Ketersediaan Spare Parts',
      en: '25–30 Years Spare Parts Guaranteed'
    },
    desc: {
      id: 'Komitmen ketersediaan suku cadang asli seumur hidup operasional lift, menjamin investasi Anda tidak pernah usang.',
      en: 'Guaranteed spare parts availability for the elevator lifetime, protecting your capital investment.'
    },
    iconName: 'PackageCheck'
  },
  {
    id: 8,
    stat: 'Rp 1 Juta / Bln',
    title: {
      id: 'Biaya Perawatan Pasca-Garansi Ringan',
      en: 'Light Maintenance Cost Post-Warranty'
    },
    desc: {
      id: 'Biaya kontrak pemeliharaan rutin yang sangat ekonomis dan transparan setelah masa pemeliharaan gratis berakhir.',
      en: 'Highly cost-effective and predictable monthly maintenance rates after the free-service period.'
    },
    iconName: 'BadgePercent'
  },
  {
    id: 9,
    stat: '1 Minggu',
    title: {
      id: 'Kecepatan Instalasi per Unit Lift',
      en: '1-Week Fast Unit Installation'
    },
    desc: {
      id: 'Metode perakitan modular presisi mempercepat waktu instalasi lapangan sehingga proyek bangunan tidak molor.',
      en: 'Precision modular assembly significantly shortens on-site installation time.'
    },
    iconName: 'Zap'
  },
  {
    id: 10,
    stat: '20+ Thn Teknisi',
    title: {
      id: 'Teknisi Tersertifikasi K3 & Berpengalaman',
      en: '20+ Years Experienced Specialists'
    },
    desc: {
      id: 'Dukungan tim ahli mekanik dan elektrikal senior bersertifikat K3 Disnaker yang siap melayani 24/7 di Jakarta.',
      en: 'Dedicated expert team with government safety certifications and deep technical mastery.'
    },
    iconName: 'Users'
  },
  {
    id: 11,
    stat: 'HAKI Terdaftar',
    title: {
      id: 'Merek Resmi Terdaftar Kemenkumham',
      en: 'Legally Registered & Protected Trademark'
    },
    desc: {
      id: 'Legalitas merek dagang dan keagenan resmi terdaftar di Kemenkumham Republik Indonesia, aman dan terpercaya.',
      en: 'Officially registered trademark with Indonesian Ministry of Law (HAKI), fully legal and accountable.'
    },
    iconName: 'FileCheck2'
  }
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    parameter: { id: 'Kapasitas Standar 630 kg / 8 Orang', en: 'Standard 630 kg / 8 Persons' },
    fujiyang: 'Tersedia Lengkap (Ready)',
    kone: 'Tersedia',
    schindler: 'Tersedia',
    mitsubishi: 'Tersedia*'
  },
  {
    parameter: { id: 'Kapasitas 800 kg / 10 Orang', en: 'Standard 800 kg / 10 Persons' },
    fujiyang: 'Tersedia Lengkap (Ready)',
    kone: 'Tersedia',
    schindler: 'Tersedia*',
    mitsubishi: 'Setara'
  },
  {
    parameter: { id: 'Kecepatan Tertinggi (Katalog)', en: 'Max Speed Qualification' },
    fujiyang: 'Hingga 7.0 m/s (Super High Speed)',
    kone: 's/d 2.5 m/s (Seri standar)',
    schindler: 's/d 2.5 m/s (Seri standar)',
    mitsubishi: 's/d 2.5 m/s (Seri standar)'
  },
  {
    parameter: { id: 'Mesin Traksi Gearless (PMSM)', en: 'Gearless PM Synchronous' },
    fujiyang: 'Ya (Hemat Listrik 40%)',
    kone: 'Ya',
    schindler: 'Ya',
    mitsubishi: 'Ya'
  },
  {
    parameter: { id: 'Opsi Machine-Roomless (MRL)', en: 'Machine-Roomless Option' },
    fujiyang: 'Ya (Tanpa Ruang Mesin Atas)',
    kone: 'Ya',
    schindler: 'Ya',
    mitsubishi: 'Ya'
  },
  {
    parameter: { id: 'Destination Dispatch System (DDS)', en: 'Destination Dispatch (DDS)' },
    fujiyang: 'Opsional (Hemat Waktu Tunggu)',
    kone: 'Sistem Khusus / Add-on',
    schindler: 'Tersedia (Sistem Tertentu)',
    mitsubishi: 'Sistem Khusus / Add-on'
  },
  {
    parameter: { id: 'ARD (Automatic Rescue Device)', en: 'Auto Rescue Device (ARD)' },
    fujiyang: 'Ya (Standar / Terintegrasi)',
    kone: 'Tergantung Konfigurasi',
    schindler: 'Tergantung Konfigurasi',
    mitsubishi: 'Tergantung Konfigurasi'
  },
  {
    parameter: { id: 'Lead Time Pengadaan & Delivery', en: 'Lead Time & Delivery' },
    fujiyang: '1.5 – 2 Bulan (Cepat)',
    kone: '3 – 5 Bulan',
    schindler: '3 – 6 Bulan',
    mitsubishi: '4 – 6 Bulan'
  },
  {
    parameter: { id: 'Garansi Resmi Mesin & Komponen', en: 'Official Warranty' },
    fujiyang: 'Hingga 3 Tahun Penuh',
    kone: '1 Tahun',
    schindler: '1 Tahun',
    mitsubishi: '1 Tahun'
  },
  {
    parameter: { id: 'Biaya Perawatan Bulanan (Routine)', en: 'Monthly Maintenance Cost' },
    fujiyang: 'Mulai Rp 1.000.000 / bln',
    kone: 'Rp 2.5 jt – 4.5 jt / bln',
    schindler: 'Rp 2.5 jt – 4.5 jt / bln',
    mitsubishi: 'Rp 3.0 jt – 5.0 jt / bln'
  },
  {
    parameter: { id: 'Positioning Pasar & Nilai Investasi', en: 'Market Positioning' },
    fujiyang: 'Value for Money / Spek Tinggi Harga Kompetitif',
    kone: 'Premium Global Brand',
    schindler: 'Premium / High Technology',
    mitsubishi: 'Premium Japanese Brand'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ir. Budi Santoso',
    clientName: 'Ir. Budi Santoso',
    role: {
      id: 'Project Director & Facility Manager',
      en: 'Project Director & Facility Manager'
    },
    company: 'Pengelola Gedung Menara Sultra',
    location: 'Kendari',
    content: {
      id: 'Instalasi 5 unit lift FUJIYANG dari DSAB Lift untuk gedung 15 lantai kami berjalan tepat waktu. Tarikan akselerasi sangat halus, leveling presisi, dan after-sales service teknisi Jakarta sangat responsif.',
      en: 'The 5-unit FUJIYANG installation for our 15-floor tower was executed on schedule. Travel acceleration is remarkably smooth, leveling is exact, and after-sales support is exceptionally responsive.'
    },
    comment: {
      id: 'Instalasi 5 unit lift FUJIYANG dari DSAB Lift untuk gedung 15 lantai kami berjalan tepat waktu. Tarikan akselerasi sangat halus, leveling presisi, dan after-sales service teknisi Jakarta sangat responsif.',
      en: 'The 5-unit FUJIYANG installation for our 15-floor tower was executed on schedule. Travel acceleration is remarkably smooth, leveling is exact, and after-sales support is exceptionally responsive.'
    },
    rating: 5,
    project: 'Gedung Bank Sultra Tower (15 Lantai)',
    projectRef: 'Gedung Bank Sultra Tower (15 Lantai)'
  },
  {
    id: 't2',
    name: 'dr. H. Hendra Wijaya, Sp.B',
    clientName: 'dr. H. Hendra Wijaya, Sp.B',
    role: {
      id: 'Kepala Bagian Sarana & Prasarana RS',
      en: 'Head of Hospital Infrastructure'
    },
    company: 'Rumah Sakit Umum Daerah',
    location: 'Jawa Barat',
    content: {
      id: 'Lift bed pasien dari DSAB Lift sangat membantu operasional ruang IGD dan rawat inap. Ruang kabin luas muat stretcher darurat dan pintu bukaan lebar dengan sensor photocell yang sangat aman bagi pasien.',
      en: 'The hospital bed elevator by DSAB Lift greatly enhances our ER and inpatient operations. Spacious cabin effortlessly accommodates stretchers, and the photocell light curtain ensures patient safety.'
    },
    comment: {
      id: 'Lift bed pasien dari DSAB Lift sangat membantu operasional ruang IGD dan rawat inap. Ruang kabin luas muat stretcher darurat dan pintu bukaan lebar dengan sensor photocell yang sangat aman bagi pasien.',
      en: 'The hospital bed elevator by DSAB Lift greatly enhances our ER and inpatient operations. Spacious cabin effortlessly accommodates stretchers, and the photocell light curtain ensures patient safety.'
    },
    rating: 5,
    project: 'RS Sumedang Medical Center (8 Unit)',
    projectRef: 'RS Sumedang Medical Center (8 Unit)'
  },
  {
    id: 't3',
    name: 'Stefanus Tan',
    clientName: 'Stefanus Tan',
    role: {
      id: 'Owner & Property Developer',
      en: 'Owner & Property Developer'
    },
    company: 'Private Residence & Villa Development',
    location: 'Jakarta Barat',
    content: {
      id: 'Untuk hunian 4 lantai keluarga kami, DSAB Home Elevator adalah pilihan terbaik. Tidak perlu ruang mesin di lantai atas, hemat listrik hanya 1.5 kW, dan desain kabin kaca kapsul sangat estetik.',
      en: 'For our 4-story family home, DSAB Home Elevator was the perfect choice. Requires no roof machine room, operates on low 1.5 kW power, and the glass cabin design looks stunning.'
    },
    comment: {
      id: 'Untuk hunian 4 lantai keluarga kami, DSAB Home Elevator adalah pilihan terbaik. Tidak perlu ruang mesin di lantai atas, hemat listrik hanya 1.5 kW, dan desain kabin kaca kapsul sangat estetik.',
      en: 'For our 4-story family home, DSAB Home Elevator was the perfect choice. Requires no roof machine room, operates on low 1.5 kW power, and the glass cabin design looks stunning.'
    },
    rating: 5,
    project: 'Private Villa 4-Floors Jakarta',
    projectRef: 'Private Villa 4-Floors Jakarta'
  },
  {
    id: 't4',
    name: 'Rudi Hartono, ST',
    clientName: 'Rudi Hartono, ST',
    role: {
      id: 'Chief Engineering Hotel & Commercial',
      en: 'Chief Engineering Hotel & Commercial'
    },
    company: 'Grand Hospitality Group',
    location: 'Jakarta Pusat',
    content: {
      id: 'Modernisasi lift lama kami dengan FUJIYANG inverter VVVF dari DSAB Lift menghemat konsumsi daya listrik hampir 38%. Tim after-sales 24 jam selalu siaga dan respon darurat di bawah 2 jam.',
      en: 'Modernizing our legacy elevators with FUJIYANG VVVF drives via DSAB Lift cut power consumption by nearly 38%. Their 24/7 technical team responds in under 2 hours.'
    },
    comment: {
      id: 'Modernisasi lift lama kami dengan FUJIYANG inverter VVVF dari DSAB Lift menghemat konsumsi daya listrik hampir 38%. Tim after-sales 24 jam selalu siaga dan respon darurat di bawah 2 jam.',
      en: 'Modernizing our legacy elevators with FUJIYANG VVVF drives via DSAB Lift cut power consumption by nearly 38%. Their 24/7 technical team responds in under 2 hours.'
    },
    rating: 5,
    project: 'Grand Sahid Jaya Jakarta (15 Unit)',
    projectRef: 'Grand Sahid Jaya Jakarta (15 Unit)'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: {
      id: 'Panduan Lengkap Memilih Lift Penumpang MRL vs Small Machine Room (MR)',
      en: 'Complete Guide: Choosing Between MRL and Small Machine Room (MR) Elevators'
    },
    excerpt: {
      id: 'Pelajari perbedaan struktur shaft, efisiensi energi, dan penghematan biaya konstruksi antara sistem Machine-Roomless dan ruang mesin konvensional.',
      en: 'Understand structural shaft requirements, energy efficiency, and construction savings between Machine-Roomless and traditional machine rooms.'
    },
    category: { id: 'Teknologi & Desain', en: 'Technology & Design' },
    date: '15 Agustus 2026',
    readTime: '5 min read',
    content: {
      id: `Sistem Machine-Roomless (MRL) menempatkan mesin traksi magnet permanen (PMSM) langsung di dalam hoistway (shaft lift) di bagian rel pemandu atas, sehingga arsitek tidak perlu lagi membangun ruang beton khusus di atap gedung. Hal ini menghemat biaya konstruksi hingga 15-20% dan memberikan kebebasan desain arsitektur yang lebih fleksibel.`,
      en: `Machine-Roomless (MRL) technology integrates permanent magnet synchronous machines directly within the elevator hoistway, eliminating the requirement for a rooftop concrete machine penthouse. This saves up to 20% in construction costs and enables architectural flexibility.`
    },
    tags: ['MRL Elevator', 'Building Design', 'FUJIYANG', 'Energy Saving']
  },
  {
    id: 'b2',
    title: {
      id: 'Standar K3 Disnaker Indonesia: Uji Beban & Sertifikasi Kelayakan Lift',
      en: 'Indonesian K3 Safety Standards: Load Testing & Elevator Legal Certification'
    },
    excerpt: {
      id: 'Ketahui dokumen dan prosedur pengujian berkala K3 Disnaker (Riksa Uji) agar operasional elevator di gedung Anda 100% legal dan aman.',
      en: 'Learn the required documentation and periodic K3 Labor inspection testing procedures to ensure legal elevator operation in Indonesia.'
    },
    category: { id: 'Regulasi & Keamanan', en: 'Safety & Regulations' },
    date: '28 Juli 2026',
    readTime: '6 min read',
    content: {
      id: `Di Indonesia, setiap lift penumpang, lift barang, dan eskalator wajib memiliki Surat Keterangan Layak K3 dari Disnaker setempat melalui pengujian berkala (Riksa Uji). Komponen yang diuji meliputi overspeed governor, safety gear, buffer hidrolik, dan sistem pengereman darurat. DSAB Lift memfasilitasi sertifikasi penuh dari uji pabrik hingga izin Disnaker.`,
      en: `In Indonesia, every passenger elevator, freight lift, and escalator is legally mandated to hold a K3 Certificate of Fitness issued by the Ministry of Manpower. Testing includes overspeed governors, safety gears, hydraulic buffers, and brake interlocks.`
    },
    tags: ['K3 Disnaker', 'Sertifikasi Lift', 'Safety Protocol', 'Legalitas']
  },
  {
    id: 'b3',
    title: {
      id: 'Kapan Waktu Tepat Melakukan Modernisasi Lift? Pelajaran dari Proyek LRT Jakarta',
      en: 'When Should You Modernize Your Elevators? Insights from LRT Jakarta Project'
    },
    excerpt: {
      id: 'Bagaimana modernisasi komponen penggerak VVVF dan kontroler cerdas dapat memangkas konsumsi listrik hingga 40% tanpa mengganti seluruh struktur shaft.',
      en: 'How modernizing VVVF drives and smart controllers can slash energy costs by 40% without replacing the structural shaft.'
    },
    category: { id: 'Modernisasi & Maintenance', en: 'Modernization & Maintenance' },
    date: '10 Juli 2026',
    readTime: '4 min read',
    content: {
      id: `Lift yang sudah beroperasi lebih dari 10-15 tahun sering mengalami penurunan efisiensi dan sulit mencari spare part lama. Modernisasi parsial—seperti penggantian controller terintegrasi, inverter VVVF, dan COP digital—meningkatkan kenyamanan setara lift baru dengan biaya hanya sepertiga dari penggantian total.`,
      en: `Elevators operating over 10-15 years frequently experience declining efficiency and obsolete electronics. Step-by-step modernization offers new-unit performance at a fraction of full replacement cost.`
    },
    tags: ['Modernisasi Lift', 'LRT Jakarta', 'VVVF Inverter', 'Cost Efficiency']
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: {
      id: 'Apa saja merek elevator yang disediakan oleh DSAB Lift?',
      en: 'Which elevator brands are supplied and serviced by DSAB Lift?'
    },
    answer: {
      id: 'DSAB Lift (PT DSAB) adalah authorized partner resmi untuk 2 merek global terkemuka: FUJIYANG Elevator & Escalator (kerjasama teknologi FUJI Japan) dan SHARP Elevators (SHARP Trading Co., Ltd. Hong Kong / Korea / China). Kami melayani penjualan unit baru, instalasi, modernisasi, penyediaan spare part, dan kontrak servis 24/7 di seluruh Indonesia.',
      en: 'DSAB Lift is the authorized partner for two renowned global brands: FUJIYANG Elevator & Escalator (FUJI Japan technology cooperation) and SHARP Elevators (SHARP Trading Co., Ltd. HK / Korea / China). We handle new sales, installation, modernization, parts supply, and 24/7 maintenance nationwide.'
    }
  },
  {
    id: 'f2',
    category: 'technical',
    question: {
      id: 'Berapa daya listrik yang dibutuhkan untuk lift rumah (Home Elevator)?',
      en: 'What are the electrical power requirements for a Home Elevator?'
    },
    answer: {
      id: 'Lift rumah DSAB berteknologi Permanent Magnet Synchronous Motor (PMSM) hemat daya. Untuk kapasitas 320 kg - 450 kg (3-5 orang), daya listrik hanya berkisar 1.1 kW hingga 2.2 kW. Sistem dapat menggunakan suplai listrik 1-Phase 220V rumah tangga standar ataupun 3-Phase 380V.',
      en: 'DSAB Home Elevators feature energy-efficient PMSM gearless motors. For 320kg to 450kg capacity (3-5 persons), electricity consumption is merely 1.1 kW to 2.2 kW, fully compatible with standard 220V single-phase household power or 3-phase 380V.'
    }
  },
  {
    id: 'f3',
    category: 'installation',
    question: {
      id: 'Berapa lama estimasi waktu pengadaan (lead time) dan instalasi di lokasi?',
      en: 'What is the estimated delivery lead time and on-site installation duration?'
    },
    answer: {
      id: 'Waktu pengadaan (manufacturing & shipping) untuk unit custom berkisar 1.5 hingga 2 bulan (jauh lebih cepat dari rata-rata industri 4-6 bulan). Setelah struktur shaft dan daya listrik siap, proses instalasi mekanik dan elektrikal per unit memakan waktu sekitar 1 hingga 2 minggu.',
      en: 'Custom unit manufacturing and shipping lead time is approximately 1.5 to 2 months. Once the hoistway shaft and electrical power are prepared, on-site installation and testing take approximately 1 to 2 weeks per elevator.'
    }
  },
  {
    id: 'f4',
    category: 'permit',
    question: {
      id: 'Apakah DSAB Lift membantu pengurusan izin K3 Disnaker?',
      en: 'Does DSAB Lift assist with K3 Labor Ministry safety permits and certifications?'
    },
    answer: {
      id: 'Ya, seluruh unit lift dan eskalator kami dirancang sesuai standar keselamatan EN81 dan regulasi Permenaker RI. Tim kami mendampingi proses pengujian riksa uji beban, penerbitan buku pengesahan pemakaian lift, dan sertifikasi resmi K3 Disnaker sampai tuntas.',
      en: 'Yes, all our elevators and escalators comply with EN81 European safety standards and Indonesian Ministry of Manpower regulations. We facilitate load testing and full K3 certification until official approval.'
    }
  },
  {
    id: 'f5',
    category: 'maintenance',
    question: {
      id: 'Bagaimana garansi dan ketersediaan spare parts jika terjadi kendala?',
      en: 'What is the warranty policy and spare parts availability?'
    },
    answer: {
      id: 'Setiap unit baru mendapatkan garansi resmi hingga 3 tahun dan gratis service berkala selama 12 bulan pertama. DSAB Lift menjamin ketersediaan suku cadang asli selama 25-30 tahun di gudang pusat Jakarta dengan tim teknisi siaga panggilan darurat 24 jam.',
      en: 'Every new elevator includes up to a 3-year warranty and 12 months of free maintenance. DSAB Lift guarantees original spare parts availability for 25-30 years with 24/7 emergency dispatch technicians.'
    }
  }
];

export const PRICING_MAINTENANCE_PACKAGES = [
  {
    id: 'standard-care',
    name: 'Standard Preventive Care',
    tier: 'Bronze',
    price: 'Rp 1.000.000',
    period: '/ unit / bulan',
    badge: { id: 'Paling Populer', en: 'Most Popular' },
    highlight: false,
    description: {
      id: 'Ideal untuk lift ruko, kantor kecil, dan lift rumah pasca masa garansi gratis 1 tahun.',
      en: 'Ideal for shophouses, boutique offices, and private residential elevators post-warranty.'
    },
    features: [
      { id: '1x Kunjungan inspeksi & pelumasan rutin per bulan', en: '1x Monthly routine inspection & lubrication' },
      { id: 'Pemeriksaan 24 titik sensor keselamatan & leveling', en: '24-point safety sensors & leveling diagnostic' },
      { id: 'Pembersihan pit & ruang mesin/MRL', en: 'Shaft pit and machine room cleaning' },
      { id: 'Layanan panggilan teknisi jam kerja (08:00 - 17:00)', en: 'Standard working hours technician dispatch' },
      { id: 'Diskon 10% untuk penggantian consumable parts', en: '10% discount on consumable spare parts' }
    ]
  },
  {
    id: 'comprehensive-care',
    name: 'Comprehensive Pro Care',
    tier: 'Silver',
    price: 'Rp 1.850.000',
    period: '/ unit / bulan',
    badge: { id: 'Rekomendasi Komersial', en: 'Commercial Pick' },
    highlight: true,
    description: {
      id: 'Paket komprehensif untuk apartemen, hotel bintang 3-4, dan gedung perkantoran menengah.',
      en: 'Comprehensive package for apartments, mid-tier hotels, and commercial offices.'
    },
    features: [
      { id: '2x Kunjungan inspeksi teknisi per bulan', en: '2x Monthly maintenance visits' },
      { id: 'Termasuk oli pelumas rel & grease motor gearless', en: 'Includes guide rail lubricants & motor grease' },
      { id: 'Emergency response darurat < 2 jam di Jabodetabek', en: 'Emergency technician response < 2 hours in Jabodetabek' },
      { id: 'Layanan standby 24 jam / 7 hari', en: '24/7 standby emergency helpline' },
      { id: 'Pendampingan uji riksa tahunan Disnaker K3', en: 'Annual K3 Disnaker inspection assistance' },
      { id: 'Gratis suku cadang elektrikal kecil (relay, switch, fuse)', en: 'Free minor electrical parts replacement' }
    ]
  },
  {
    id: 'platinum-vip',
    name: 'Mission Critical 24/7 VIP',
    tier: 'Gold',
    price: 'Rp 2.750.000',
    period: '/ unit / bulan',
    badge: { id: 'Rumah Sakit & Mall', en: 'Mission Critical' },
    highlight: false,
    description: {
      id: 'Layanan prioritas tertinggi untuk Rumah Sakit, Pusat Perbelanjaan, dan Menara Perkantoran Grade-A.',
      en: 'Top-tier priority service for Hospitals, Large Shopping Malls, and Grade-A Commercial Towers.'
    },
    features: [
      { id: '4x Kunjungan mingguan & continuous health monitoring', en: '4x Weekly visits & real-time health monitoring' },
      { id: 'Emergency breakdown arrival < 45 menit (Prioritas Utama)', en: 'Emergency arrival < 45 mins (Top Priority)' },
      { id: 'Dedicated Resident On-Call Engineer', en: 'Dedicated on-call resident engineer' },
      { id: 'Termasuk seluruh spare part minor & major consumable', en: 'All consumable and minor/major wearable parts included' },
      { id: 'Sertifikasi K3 Disnaker tahunan terjamin', en: 'Full annual K3 certification compliance management' },
      { id: 'Garansi uptime sistem 99.8%', en: '99.8% system operational uptime guarantee' }
    ]
  }
];

export const SERVICES: any[] = [
  {
    id: 's1',
    title: {
      id: 'Pengadaan Unit Baru & Turnkey Installation',
      en: 'New Unit Supply & Turnkey Installation'
    },
    description: {
      id: 'Layanan lengkap dari survey struktur shaft sipil, pengiriman unit import FUJIYANG & SHARP, perakitan mekanikal-elektrikal, uji beban, hingga penerbitan izin laik operasi K3 Disnaker.',
      en: 'Comprehensive delivery from civil hoistway survey, imported unit supply, mechanical/electrical assembly, load testing, to official government K3 permits.'
    },
    points: [
      { id: 'Survey gambar sipil & konsultasi dimensi shaft gratis', en: 'Free civil shaft layout & structural engineering consultation' },
      { id: 'Instalasi cepat berstandar pabrikan FUJI Japan', en: 'Rapid precision installation under Japanese engineering standards' },
      { id: 'Testing commissioning beban & sensor keselamatan 100%', en: '100% full-load testing & safety sensor commissioning' },
      { id: 'Pengurusan sertifikat SILO Kemenaker RI hingga terbit', en: 'Full facilitation of Indonesian Labor Ministry safety permit (SILO)' }
    ]
  },
  {
    id: 's2',
    title: {
      id: 'Perawatan Berkala 35-Titik Keselamatan (Preventive)',
      en: '35-Point Preventive Safety Maintenance'
    },
    description: {
      id: 'Program servis berkala bulanan oleh teknisi senior bersertifikat K3 untuk memastikan lift dan eskalator beroperasi prima dengan zero downtime dan tingkat keamanan maksimal.',
      en: 'Monthly scheduled maintenance by certified engineers ensuring optimal operational uptime and maximum passenger safety.'
    },
    points: [
      { id: 'Pemeriksaan 35 titik kritis (rem traksi, leveling, sling, governor)', en: '35-point critical inspection (brakes, leveling, wire ropes, governor)' },
      { id: 'Pelumasan rel pemandu & pembersihan shaft pit rutin', en: 'Routine guide rail lubrication and shaft pit cleaning' },
      { id: 'Laporan kesehatan unit digital & rekomendasi suku cadang', en: 'Digital health diagnostic logs & preventative recommendations' },
      { id: 'Gratis 12 bulan service berkala untuk setiap unit baru', en: '12 months free maintenance included for all new units' }
    ]
  },
  {
    id: 's3',
    title: {
      id: 'Modernisasi & Retrofit Lift Lama (All Brands)',
      en: 'Elevator Modernization & Retrofit (All Brands)'
    },
    description: {
      id: 'Solusi upgrade elevator lama (Mitsubishi, Schindler, Otis, Hyundai, dll.) dengan mesin traksi gearless baru, inverter VVVF hemat energi 40%, dan dekorasi kabin modern.',
      en: 'Upgrade older elevators of any brand with high-efficiency gearless machines, 40% energy-saving VVVF drives, and luxury cabin aesthetics.'
    },
    points: [
      { id: 'Hemat biaya hingga 60% dibanding bongkar total shaft', en: 'Save up to 60% compared to complete civil shaft reconstruction' },
      { id: 'Penggantian kontroler mikroprosesor 32-bit cerdas', en: 'Upgrade to 32-bit intelligent microprocessor vector controllers' },
      { id: 'Akselerasi lebih halus & eliminasi getaran kabin lama', en: 'Silky smooth acceleration eliminating old cabin vibrations' },
      { id: 'Pemasangan tombol touchless & indikator layar TFT warna', en: 'Integration of touchless sensors and color TFT car displays' }
    ]
  },
  {
    id: 's4',
    title: {
      id: 'Penyediaan Suku Cadang Asli OEM & Emergency Buffer',
      en: 'Genuine OEM Spare Parts Supply & Buffer Stock'
    },
    description: {
      id: 'Gudang pusat suku cadang di Jakarta Selatan dengan komitmen jaminan ketersediaan spare parts selama 25-30 tahun untuk mesin traksi, PCB kontroler, roller, dan sensor.',
      en: 'Central parts depot in South Jakarta with a 25-30 year availability guarantee for traction machines, controller PCBs, rollers, and sensors.'
    },
    points: [
      { id: 'Suku cadang asli langsung dari pabrik FUJIYANG & SHARP', en: 'Original OEM spare parts directly from FUJIYANG & SHARP factories' },
      { id: 'Buffer stock komponen fast-moving selalu siap di Jakarta', en: 'Readily available fast-moving inventory stocked in Jakarta' },
      { id: 'Garansi resmi penggantian suku cadang mekanikal & elektrikal', en: 'Official factory warranty on all replaced components' },
      { id: 'Pengiriman instan untuk penanganan breakdown darurat', en: 'Instant courier dispatch for rapid emergency breakdown resolution' }
    ]
  }
];

export const PROJECTS: any[] = [
  {
    id: 1,
    title: {
      id: 'Gedung Menara Bank Sultra (15 Lantai)',
      en: 'Bank Sultra Corporate Tower (15 Floors)'
    },
    category: 'corporate',
    location: 'Kendari, Sulawesi Tenggara',
    units: '5 Unit Lift',
    type: { id: 'Passenger Elevator High-Speed', en: 'High-Speed Passenger Elevator' },
    specs: 'Kapasitas 825 kg • Kecepatan 1.75 m/s • 15 Lantai / Stops',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Supply, instalasi, dan sertifikasi 5 unit lift penumpang berkecepatan tinggi dengan sistem kontrol grup cerdas untuk gedung perbankan pusat.',
      en: 'Turnkey supply, installation, and certification of 5 high-speed passenger elevators with smart group dispatch for corporate banking HQ.'
    }
  },
  {
    id: 2,
    title: {
      id: 'Heigh Residences Tower (28 Lantai)',
      en: 'Heigh Residences Luxury High-Rise (28 Floors)'
    },
    category: 'residence',
    location: 'Jakarta',
    units: '3 Unit Lift',
    type: { id: 'Luxury High-Speed MRL', en: 'Luxury High-Speed MRL' },
    specs: 'Kapasitas 1600 kg • Kecepatan 2.0 m/s • 28 Lantai / Stops',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Instalasi elevator berkecepatan tinggi 2.0 m/s dengan kabin kustom marmer dan kontrol akses kartu RFID untuk penghuni apartemen mewah.',
      en: 'High-speed 2.0 m/s elevators featuring custom marble finishes and RFID access control for high-end luxury residences.'
    }
  },
  {
    id: 3,
    title: {
      id: 'Grand Sahid Jaya Hotel',
      en: 'Grand Sahid Jaya Hotel Jakarta'
    },
    category: 'hotel',
    location: 'Jakarta Pusat',
    units: '15 Unit Lift',
    type: { id: 'Modernisasi & Maintenance 24 Jam', en: 'Modernization & 24/7 Maintenance' },
    specs: '15 Unit Passenger & Service Elevators • 24/7 Hotline Support',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Kontrak pemeliharaan komprehensif 24/7 dan modernisasi kontroler untuk 15 unit lift hotel bintang lima legendaris di Jakarta.',
      en: 'Full 24/7 preventive maintenance contract and controller modernization across 15 elevator units for iconic 5-star hotel.'
    }
  },
  {
    id: 4,
    title: {
      id: 'RSU Kota Tangerang',
      en: 'Tangerang Regional General Hospital'
    },
    category: 'hospital',
    location: 'Tangerang, Banten',
    units: '8 Unit Lift',
    type: { id: 'Hospital Bed & Stretcher Elevator', en: 'Hospital Bed & Stretcher Elevator' },
    specs: 'Kapasitas 1600 kg • Bukaan Pintu Medis • Sterilisasi UV-C',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Penyediaan lift ranjang pasien (bed elevator) higienis dengan presisi leveling milimeter tanpa hentakan dan sistem sterilisasi UV.',
      en: 'Supplying hygienic stretcher bed elevators with millimeter-precise jerk-free leveling and active UV-C air sanitation.'
    }
  },
  {
    id: 5,
    title: {
      id: 'Stasiun LRT Jakarta (Modernisasi)',
      en: 'LRT Jakarta Stations Modernization'
    },
    category: 'transit',
    location: 'Kelapa Gading, Jakarta',
    units: '2 Unit Lift + Eskalator',
    type: { id: 'Public Transit Heavy-Duty', en: 'Public Transit Heavy-Duty' },
    specs: 'Heavy-Duty 24/7 Outdoor Standard • VVVF Inverter Upgrade',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Modernisasi sistem mesin dan panel kendali lift pada koridor stasiun LRT Jakarta dengan keandalan operasional cuaca tropis.',
      en: 'Machinery and controller modernization for LRT Jakarta stations with tropical-grade heavy-duty reliability.'
    }
  },
  {
    id: 6,
    title: {
      id: 'Private Luxury Villa Pondok Indah',
      en: 'Private Luxury Villa Pondok Indah'
    },
    category: 'residence',
    location: 'Jakarta Selatan',
    units: '1 Unit Home Lift',
    type: { id: 'Panoramic Glass Home Lift', en: 'Panoramic Glass Home Lift' },
    specs: 'Kapasitas 400 kg • 4 Lantai • Daya 1.5 kW 220V',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    description: {
      id: 'Instalasi lift rumah kaca panorama 360 derajat tanpa ruang mesin (MRL) yang terintegrasi dengan desain arsitektur interior modern villa.',
      en: 'Installation of a 360-degree panoramic glass residential elevator with no overhead machine room (MRL) powered by standard 220V.'
    }
  }
];

export const FAQS: any[] = FAQ_LIST.map((f, i) => ({
  id: i + 1,
  category: f.category,
  question: f.question,
  answer: f.answer
}));

