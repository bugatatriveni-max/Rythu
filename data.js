// RythuSeva Market & Agricultural Intelligence Database
// Covers All 28 Indian States & 8 Union Territories, Districts, Government Mandis / APMCs,
// Best Selling Destinations, Preferred Buying Areas, MSP Benchmarks & Toll-Free Helplines

export const TOLL_FREE_HELPLINES = {
  nationalKisanCallCenter: {
    number: '1800-180-1551',
    label: 'Kisan Call Centre (24x7 Toll-Free All India - 22 Languages)',
    labelTe: 'జాతీయ కిసాన్ కాల్ సెంటర్ (24x7 ఉచిత హెల్ప్‌లైన్)',
    labelHi: 'राष्ट्रीय किसान कॉल सेंटर (24x7 टोल-फ्री)',
    tel: '18001801551'
  },
  eNamHelpdesk: {
    number: '1800-270-0224',
    label: 'e-NAM National Mandi Support Helpline',
    labelTe: 'ఈ-నామ్ జాతీయ మార్కెట్ హెల్ప్‌డెస్క్',
    labelHi: 'ई-नाम राष्ट्रीय मंडी हेल्पडेस्क',
    tel: '18002700224'
  },
  apRythuBharosa: {
    number: '155251',
    label: 'Andhra Pradesh Rythu Bharosa Toll-Free',
    labelTe: 'ఆంధ్రప్రదేశ్ రైతు భరోసా కాల్ సెంటర్',
    labelHi: 'आंध्र प्रदेश रायथु भरोसा टोल-फ्री',
    tel: '155251'
  },
  tsRythuBandhu: {
    number: '1800-425-5143',
    label: 'Telangana Agriculture Department Helpline',
    labelTe: 'తెలంగాణ వ్యవసాయ శాఖ ఉచిత హెల్ప్‌లైన్',
    labelHi: 'तेलंगाना कृषि विभाग टोल-फ्री',
    tel: '18004255143'
  },
  pmKisanHelp: {
    number: '155261',
    label: 'PM-KISAN Direct DBT Payment Helpline',
    labelTe: 'పీఎం కిసాన్ DBT పేమెంట్ హెల్ప్‌లైన్',
    labelHi: 'पीएम-किसान डीबीटी भुगतान हेल्पडेस्क',
    tel: '155261'
  }
};

export const CROP_DATA = {
  paddy: {
    id: 'paddy',
    name: {
      en: 'Paddy / Dhan (Common & Grade A)',
      te: 'వరి / ధాన్యం (కామన్ & గ్రేడ్-A)',
      hi: 'धान (सामान्य और ग्रेड-ए)',
      ta: 'நெல் / தான்யம்',
      kn: 'ಭತ್ತ / ಧಾನ್ಯ'
    },
    msp: 2320,
    mspGradeA: 2340,
    avgMarketPrice: 2490,
    unit: 'Quintal',
    icon: '🌾',
    demandLevel: 'high'
  },
  cotton: {
    id: 'cotton',
    name: {
      en: 'Cotton / Kapas (Long Staple)',
      te: 'పత్తి / కాటన్',
      hi: 'कपास / कॉटन',
      ta: 'பருத்தி',
      kn: 'ಹತ್ತಿ'
    },
    msp: 7521,
    avgMarketPrice: 8050,
    unit: 'Quintal',
    icon: '☁️',
    demandLevel: 'high'
  },
  chilli: {
    id: 'chilli',
    name: {
      en: 'Red Chilli (Teja / Byadgi / 334)',
      te: 'ఎర్ర మిరప (తేజ / బ్యాడగి)',
      hi: 'लाल मिर्च (तेजा / ब्याडगी)',
      ta: 'சிகப்பு மிளகாய்',
      kn: 'ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ'
    },
    msp: 16500,
    avgMarketPrice: 22100,
    unit: 'Quintal',
    icon: '🌶️',
    demandLevel: 'very_high'
  },
  maize: {
    id: 'maize',
    name: {
      en: 'Maize / Corn (Mokka Jonna)',
      te: 'మొక్కజొన్న (మక్కలు)',
      hi: 'मक्का',
      ta: 'மக்காச்சோளம்',
      kn: 'ಮೆಕ್ಕೆಜೋಳ'
    },
    msp: 2225,
    avgMarketPrice: 2390,
    unit: 'Quintal',
    icon: '🌽',
    demandLevel: 'steady'
  },
  turmeric: {
    id: 'turmeric',
    name: {
      en: 'Turmeric (Pasupu / Haldi)',
      te: 'పసుపు',
      hi: 'हल्दी',
      ta: 'மஞ்சள்',
      kn: 'ಅರಿಶಿನ'
    },
    msp: 9800,
    avgMarketPrice: 15400,
    unit: 'Quintal',
    icon: '🟡',
    demandLevel: 'very_high'
  },
  groundnut: {
    id: 'groundnut',
    name: {
      en: 'Groundnut / Peanut (Verusenaga)',
      te: 'వేరుశనగ / పల్లీలు',
      hi: 'मूंगफली',
      ta: 'வேர்க்கடலை',
      kn: 'ಕಡಲೆಕಾಯಿ'
    },
    msp: 6783,
    avgMarketPrice: 7350,
    unit: 'Quintal',
    icon: '🥜',
    demandLevel: 'steady'
  },
  redgram: {
    id: 'redgram',
    name: {
      en: 'Red Gram / Tur / Arhar (Kandulu)',
      te: 'కందులు',
      hi: 'अरहर / तूर दाल',
      ta: 'துவரம் பருப்பு',
      kn: 'ತೊಗರಿ ಬೇಳೆ'
    },
    msp: 7550,
    avgMarketPrice: 9250,
    unit: 'Quintal',
    icon: '🥣',
    demandLevel: 'high'
  },
  bengalgram: {
    id: 'bengalgram',
    name: {
      en: 'Bengal Gram / Chana (Sanagalu)',
      te: 'శనగలు',
      hi: 'चना',
      ta: 'கொண்டைக்கடலை',
      kn: 'ಕಡಲೆ'
    },
    msp: 5440,
    avgMarketPrice: 6050,
    unit: 'Quintal',
    icon: '🧆',
    demandLevel: 'steady'
  },
  onion: {
    id: 'onion',
    name: {
      en: 'Onion (Ulli)',
      te: 'ఉల్లిపాయలు',
      hi: 'प्याज़',
      ta: 'வெங்காயம்',
      kn: 'ಈರುಳ್ಳಿ'
    },
    msp: 1800,
    avgMarketPrice: 2800,
    unit: 'Quintal',
    icon: '🧅',
    demandLevel: 'high'
  },
  tomato: {
    id: 'tomato',
    name: {
      en: 'Tomato',
      te: 'టమోటా',
      hi: 'टमाटर',
      ta: 'தக்காளி',
      kn: 'ಟೊಮೆಟೊ'
    },
    msp: 1200,
    avgMarketPrice: 2250,
    unit: 'Quintal',
    icon: '🍅',
    demandLevel: 'steady'
  },
  wheat: {
    id: 'wheat',
    name: {
      en: 'Wheat (Godhumalu)',
      te: 'గోధుమలు',
      hi: 'गेहूं',
      ta: 'கோதுமை',
      kn: 'ಗೋಧಿ'
    },
    msp: 2425,
    avgMarketPrice: 2620,
    unit: 'Quintal',
    icon: '🌾',
    demandLevel: 'steady'
  },
  soybean: {
    id: 'soybean',
    name: {
      en: 'Soybean (Yellow)',
      te: 'సోయాబీన్',
      hi: 'सोयाबीन',
      ta: 'சோயாபீன்',
      kn: 'ಸೋಯಾಬೀನ್'
    },
    msp: 4892,
    avgMarketPrice: 5180,
    unit: 'Quintal',
    icon: '🌱',
    demandLevel: 'steady'
  }
};

export const TRANSPORT_RATES = {
  tractor: { name: 'Tractor Trolley (40-60 Qtl)', ratePerKm: 32, baseFee: 350, capacity: 50 },
  minitruck: { name: 'Mini Truck / Bolero Pickup (20-35 Qtl)', ratePerKm: 24, baseFee: 250, capacity: 30 },
  auto: { name: 'Auto Loader / Ape (8-15 Qtl)', ratePerKm: 16, baseFee: 150, capacity: 12 },
  lorry: { name: '10-Tyre Heavy Truck (150-250 Qtl)', ratePerKm: 65, baseFee: 800, capacity: 200 },
  bullock: { name: 'Bullock Cart (Local Village <10km)', ratePerKm: 10, baseFee: 100, capacity: 10 }
};

export const MANDI_CHARGES = {
  hamaliLoading: 18,
  weighmentFee: 5,
  marketUserFeePercentage: 0.01
};

// =========================================================================
// BEST PLACES TO SELL & PREFERRED BUYING HUBS INTELLIGENCE
// =========================================================================
export const BEST_SELLING_DESTINATIONS = {
  chilli: {
    cropId: 'chilli',
    name: { en: 'Red Chilli', te: 'ఎర్ర మిరప', hi: 'लाल मिर्च' },
    icon: '🌶️',
    msp: 16500,
    topSellingMandis: [
      {
        id: 'gnt_amc_mirchi',
        name: 'Guntur APMC Mirchi Yard',
        nameTe: 'గుంటూరు మిర్చి యార్డు (అంకిరెడ్డిపాలెం)',
        state: 'Andhra Pradesh',
        district: 'Guntur',
        price: 22400,
        benchmarkDiff: '+35% above benchmark',
        rating: '★★★★★ Asia’s Benchmark Market',
        reason: 'Asia’s largest turnover, 120+ licensed spice exporters on-site, instant spot electronic payment, cold storage network.',
        reasonTe: 'ఆసియాలోనే అతిపెద్ద మిర్చి మార్కెట్, 120కి పైగా ఎగుమతిదారులు, స్పాట్ క్యాష్ చెల్లింపులు.'
      },
      {
        id: 'byadgi_apmc',
        name: 'Byadgi APMC Yard',
        nameTe: 'బ్యాడగి మార్కెట్ యార్డ్',
        state: 'Karnataka',
        district: 'Haveri',
        price: 24500,
        benchmarkDiff: '+48% above benchmark',
        rating: '★★★★★ Best for High Color pods',
        reason: 'Global oleoresin extraction hub paying top premiums for high color value (ASTA > 100).',
        reasonTe: 'అంతర్జాతీయ రంగు ఎక్స్‌ట్రాక్షన్ కంపెనీలు అధిక రేటు చెల్లిస్తాయి.'
      },
      {
        id: 'kmm_amc_chilli',
        name: 'Khammam Agricultural Market',
        nameTe: 'ఖమ్మం వ్యవసాయ మార్కెట్ యార్డు',
        state: 'Telangana',
        district: 'Khammam',
        price: 21900,
        benchmarkDiff: '+32% above benchmark',
        rating: '★★★★☆ Teja Variety Hub',
        reason: 'Huge arrivals and strong demand from Andhra-Telangana processing plants and exporters.',
        reasonTe: 'తేజ రకం మిర్చికి నిరంతర భారీ కొనుగోలుదారులు.'
      },
      {
        id: 'wgl_enumamula',
        name: 'Warangal Enumamula Yard',
        nameTe: 'వరంగల్ ఎనుమాముల మార్కెట్ యార్డు',
        state: 'Telangana',
        district: 'Warangal',
        price: 21600,
        benchmarkDiff: '+30% above benchmark',
        rating: '★★★★☆ High Volume Mandi',
        reason: 'Extensive e-NAM computerized auction halls and covered godowns.',
        reasonTe: 'విశాలమైన షెడ్లు మరియు కంప్యూటరైజ్డ్ ఈ-నామ్ వేలం.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Guntur & Palnadu (AP)', 'Haveri & Byadgi (KA)', 'Khammam & Mahabubabad (TG)', 'Nagpur (MH)'],
      primaryAreasTe: ['గుంటూరు & పల్నాడు (ఆంధ్రప్రదేశ్)', 'హవేరి / బ్యాడగి (కర్ణాటక)', 'ఖమ్మం & వరంగల్ (తెలంగాణ)', 'నాగ్‌పూర్ (మహారాష్ట్ర)'],
      buyerClusters: [
        {
          name: 'Global Spice Exporters (Spices Board)',
          nameTe: 'గ్లోబల్ స్పైస్ ఎగుమతిదారులు',
          presence: 'Guntur Ankireddypalem, Cochin, Chennai',
          preference: 'Dry pods (moisture < 11%), vibrant red hue, pesticide-safe',
          preferenceTe: 'తేమ 11% లోపు, ముదురు ఎరుపు రంగు, రసాయనాలు తక్కువగా ఉండాలి'
        },
        {
          name: 'Oleoresin & Capsaicin Extraction Units',
          nameTe: 'ఒలియోరెసిన్ & కలర్ ఎక్స్‌ట్రాక్షన్ పరిశ్రమలు',
          presence: 'Byadgi, Bangalore, Hyderabad corridor',
          preference: 'Wrinkled Byadgi kaddi, high ASTA color value',
          preferenceTe: 'ముడతల బ్యాడగి కడ్డి, ఎక్కువ కలర్ విలువ'
        },
        {
          name: 'National Masala Brands (ITC, MDH, Everest)',
          nameTe: 'జాతీయ మసాలా బ్రాండ్లు',
          presence: 'Across AP, Telangana, Maharashtra hubs',
          preference: 'Uniform Teja & 334 pods, zero mold or foreign matter',
          preferenceTe: 'ఏకరూప నాణ్యత గల తేజ మరియు 334 రకాలు'
        }
      ],
      whyPreferThisArea: 'Proximity to Chennai & Vizag sea ports, 150+ specialized cold storage facilities, transparent electronic competitive bidding that guarantees highest liquidity.',
      whyPreferThisAreaTe: 'విశాఖపట్నం, చెన్నై ఓడరేవులకు నేరుగా కనెక్టివిటీ, 150కి పైగా కోల్డ్ స్టోరేజీలు, వేగవంతమైన ఈ-నామ్ వేలం.'
    }
  },

  cotton: {
    cropId: 'cotton',
    name: { en: 'Cotton / Kapas', te: 'పత్తి / కాటన్', hi: 'कपास' },
    icon: '☁️',
    msp: 7521,
    topSellingMandis: [
      {
        id: 'wgl_enumamula',
        name: 'Warangal Enumamula Market Yard',
        nameTe: 'వరంగల్ ఎనుమాముల మార్కెట్ యార్డ్',
        state: 'Telangana',
        district: 'Warangal',
        price: 8180,
        benchmarkDiff: '+8.7% above MSP',
        rating: '★★★★★ South India Major Cotton Hub',
        reason: 'Cotton Corporation of India (CCI) procurement depot + 40+ private ginning mill bidders.',
        reasonTe: 'సీసీఐ (CCI) ప్రభుత్వ సేకరణ మరియు 40కి పైగా ప్రైవేట్ జిన్నింగ్ మిల్లుల పోటీ.'
      },
      {
        id: 'guj_rajkot_apmc',
        name: 'Rajkot APMC Bedi Yard',
        nameTe: 'రాజ్‌కోట్ ఏపీఎంసీ బేడి యార్డ్',
        state: 'Gujarat',
        district: 'Rajkot',
        price: 8150,
        benchmarkDiff: '+8.3% above MSP',
        rating: '★★★★★ Western Benchmark Mandi',
        reason: 'Major Saurashtra spinning cluster paying premium for clean Shankar-6 variety.',
        reasonTe: 'శంకర్-6 రకానికి గుజరాత్ స్పిన్నింగ్ మిల్లులు అత్యధిక ధర చెల్లిస్తాయి.'
      },
      {
        id: 'adoni_amc',
        name: 'Adoni Agricultural Market Yard',
        nameTe: 'ఆదోని మార్కెట్ యార్డు',
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        price: 8080,
        benchmarkDiff: '+7.4% above MSP',
        rating: '★★★★☆ Rayalaseema Textile Hub',
        reason: 'Dense presence of ginning & pressing mills, prompt electronic grading.',
        reasonTe: 'రాయలసీమలోనే అతిపెద్ద కాటన్ మార్కెట్, త్వరితగతిన గ్రేడింగ్.'
      },
      {
        id: 'ballari_central',
        name: 'Ballari APMC Cotton Yard',
        nameTe: 'బళ్లారి ఏపీఎంసీ కాటన్ యార్డ్',
        state: 'Karnataka',
        district: 'Ballari',
        price: 8060,
        benchmarkDiff: '+7.1% above MSP',
        rating: '★★★★☆ Karnataka Spinning Cluster',
        reason: 'Textile hub with continuous procurement for Karnataka spinning mills.',
        reasonTe: 'కర్ణాటక స్పిన్నింగ్ మిల్లులకు నిరంతర ముడిసరుకు కొనుగోలు కేంద్రం.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Warangal & Adilabad (TG)', 'Rajkot & Surendranagar (GJ)', 'Kurnool / Adoni (AP)', 'Coimbatore (TN)'],
      primaryAreasTe: ['వరంగల్ & ఆదిలాబాద్ (తెలంగాణ)', 'రాజ్‌కోట్ (గుజరాత్)', 'కర్నూలు / ఆదోని (ఆంధ్రప్రదేశ్)', 'కోయంబత్తూరు (తమిళనాడు)'],
      buyerClusters: [
        {
          name: 'Cotton Corporation of India (CCI)',
          nameTe: 'కాటన్ కార్పొరేషన్ ఆఫ్ ఇండియా (ప్రభుత్వ కొనుగోలు)',
          presence: 'All designated APMC procurement centers',
          preference: 'Moisture between 8% - 12%, minimum staple length 29.5mm',
          preferenceTe: 'తేమ 8% - 12% మధ్య ఉండాలి, పొడవాటి పోగు'
        },
        {
          name: 'Textile Spinning & Ginning Mills',
          nameTe: 'టెక్స్‌టైల్ స్పిన్నింగ్ & జిన్నింగ్ మిల్లులు',
          presence: 'Coimbatore, Rajkot, Guntur, Warangal industrial zones',
          preference: 'Zero trash/leaf mix, high micronaire fineness, spot ginning ready',
          preferenceTe: 'ఆకులు, చెత్త లేని స్వచ్ఛమైన తెల్లటి దూది'
        }
      ],
      whyPreferThisArea: 'Concentration of 200+ modernized ginning and pressing factories within a 20km radius reducing transport friction and allowing instant lint export dispatch.',
      whyPreferThisAreaTe: '20 కిలోమీటర్ల పరిధిలోనే 200కు పైగా ఆధునిక జిన్నింగ్ మిల్లులు ఉండటం వల్ల రవాణా ఖర్చు తగ్గి రైతుల పంట వెంటనే అమ్ముడవుతుంది.'
    }
  },

  paddy: {
    cropId: 'paddy',
    name: { en: 'Paddy / Dhan', te: 'వరి / ధాన్యం', hi: 'धान' },
    icon: '🌾',
    msp: 2320,
    topSellingMandis: [
      {
        id: 'nlg_miryalaguda',
        name: 'Miryalaguda Market Yard (Rice Mill Hub)',
        nameTe: 'మిర్యాలగూడ మార్కెట్ యార్డ్ (రైస్ మిల్ హబ్)',
        state: 'Telangana',
        district: 'Nalgonda',
        price: 2560,
        benchmarkDiff: '+10.3% above MSP',
        rating: '★★★★★ India’s Largest Rice Mill Cluster',
        reason: 'Over 250 automated modern parboiled & raw rice mills, continuous spot cash buying.',
        reasonTe: '250కి పైగా ఆధునిక రైస్ మిల్లులు ఉన్నాయి, ఎల్లప్పుడూ స్పాట్ క్యాష్ చెల్లింపు.'
      },
      {
        id: 'hr_karnal_mandi',
        name: 'Karnal Anaj Mandi',
        nameTe: 'కర్నాల్ ధాన్యం మార్కెట్ (బాస్మతి హబ్)',
        state: 'Haryana',
        district: 'Karnal',
        price: 2650,
        benchmarkDiff: '+14.2% above MSP',
        rating: '★★★★★ Basmati Rice Capital',
        reason: 'Top national buyers for aromatic 1121 & Pusa Basmati, major export packaging units.',
        reasonTe: 'బాస్మతి ధాన్యానికి దేశంలోనే అత్యధిక ధర లభించే ప్రధాన కేంద్రం.'
      },
      {
        id: 'khanna_grain',
        name: 'Khanna Grain Market',
        nameTe: 'ఖన్నా గ్రెయిన్ మార్కెట్',
        state: 'Punjab',
        district: 'Ludhiana',
        price: 2580,
        benchmarkDiff: '+11.2% above MSP',
        rating: '★★★★★ Asia’s Largest Grain Mandi',
        reason: '100% electronic weight certification, FCI & State Markfed direct purchase.',
        reasonTe: 'ఎఫ్.సి.ఐ (FCI) మరియు మార్క్‌ఫెడ్ ద్వారా త్వరితగతిన కొనుగోలు.'
      },
      {
        id: 'kri_vja_gollapudi',
        name: 'Vijayawada Gollapudi APMC',
        nameTe: 'విజయవాడ గొల్లపూడి మార్కెట్ యార్డ్',
        state: 'Andhra Pradesh',
        district: 'Krishna',
        price: 2520,
        benchmarkDiff: '+8.6% above MSP',
        rating: '★★★★☆ Krishna Delta Rice Hub',
        reason: 'BPT 5204 (Sona Masoori) high buyer competition and direct coastal shipping access.',
        reasonTe: 'సోనా మసూరి (BPT) ధాన్యానికి నిరంతర గిరాకీ.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Miryalaguda & Suryapet (TG)', 'Karnal & Kurukshetra (HR)', 'Ludhiana / Khanna (PB)', 'Krishna & East Godavari (AP)', 'Purba Bardhaman (WB)'],
      primaryAreasTe: ['మిర్యాలగూడ & సూర్యాపేట (తెలంగాణ)', 'కర్నాల్ (హర్యానా)', 'ఖన్నా / లుధియానా (పంజాబ్)', 'కృష్ణా & గోదావరి (ఆంధ్రప్రదేశ్)', 'బర్ధమాన్ (పశ్చిమ బెంగాల్)'],
      buyerClusters: [
        {
          name: 'Government Agencies (FCI / Civil Supplies / Markfed)',
          nameTe: 'ఎఫ్.సి.ఐ & పౌరసరఫరాల సంస్థ (ప్రభుత్వ కొనుగోలు)',
          presence: 'Designated Mandi Purchase Centres (PPC) in every district',
          preference: 'Moisture <= 17%, foreign matter < 1%, damaged grain < 4%',
          preferenceTe: 'తేమ శాతం 17% లోపు, తాలు లేదా చెత్త 1% లోపు'
        },
        {
          name: 'Private Commercial Rice Millers & Exporters',
          nameTe: 'ప్రైవేట్ రైస్ మిల్లులు & బియ్యం ఎగుమతిదారులు',
          presence: 'Miryalaguda, Karnal, Burdwan mill belts',
          preference: 'High head rice recovery (milling yield > 68%), low breakage',
          preferenceTe: 'నూకలు తక్కువగా వచ్చే అధిక రికవరీ నాణ్యత'
        }
      ],
      whyPreferThisArea: 'High concentration of mega parboiled rice mills with massive dryer installations capable of handling wet harvest within 6 hours without quality degradation.',
      whyPreferThisAreaTe: 'భారీ డ్రైయర్ సదుపాయాలు మరియు రైల్వే వే సైడింగ్ ఉండటం వల్ల రైతులు వర్షం పడినా నష్టపోకుండా వెంటనే కొనుగోలు జరుగుతుంది.'
    }
  },

  turmeric: {
    cropId: 'turmeric',
    name: { en: 'Turmeric (Haldi)', te: 'పసుపు', hi: 'हल्दी' },
    icon: '🟡',
    msp: 9800,
    topSellingMandis: [
      {
        id: 'erd_turmeric',
        name: 'Erode Regulated Market (Semmampalayam)',
        nameTe: 'ఈరోడ్ పసుపు నియంత్రిత మార్కెట్',
        state: 'Tamil Nadu',
        district: 'Erode',
        price: 16400,
        benchmarkDiff: '+67% above benchmark',
        rating: '★★★★★ Yellow City of India',
        reason: 'National benchmark price setter with daily electronic auctions and global pharma buyers.',
        reasonTe: 'దేశంలోనే పసుపు ధరను నిర్ణయించే ప్రధాన మార్కెట్, ఫార్మా కొనుగోలుదారులు.'
      },
      {
        id: 'nzb_amc_turmeric',
        name: 'Nizamabad APMC Central Yard',
        nameTe: 'నిజామాబాద్ మార్కెట్ యార్డ్',
        state: 'Telangana',
        district: 'Nizamabad',
        price: 16100,
        benchmarkDiff: '+64% above benchmark',
        rating: '★★★★★ National Turmeric Board Hub',
        reason: 'Huge arrivals of Nizamabad local & Salem varieties, direct export buyers.',
        reasonTe: 'జాతీయ పసుపు బోర్డు కేంద్రం, భారీ సంఖ్యలో ట్రేడర్లు.'
      },
      {
        id: 'gnt_duggirala',
        name: 'Duggirala Regulated Turmeric Yard',
        nameTe: 'దుగ్గిరాల పసుపు మార్కెట్ యార్డ్',
        state: 'Andhra Pradesh',
        district: 'Guntur',
        price: 15600,
        benchmarkDiff: '+59% above benchmark',
        rating: '★★★★☆ High Curcumin Center',
        reason: 'Historic turmeric market near Tenali known for high curcumin content fingers.',
        reasonTe: 'ఎక్కువ కర్క్యుమిన్ శాతం గల నాణ్యమైన పసుపు కొమ్ముల కేంద్రం.'
      },
      {
        id: 'sangli_turmeric',
        name: 'Sangli APMC Turmeric Yard',
        nameTe: 'సాంగ్లీ ఏపీఎంసీ పసుపు మార్కెట్',
        state: 'Maharashtra',
        district: 'Sangli',
        price: 15800,
        benchmarkDiff: '+61% above benchmark',
        rating: '★★★★☆ Western Spice Benchmark',
        reason: 'Extensive underground storage chambers protecting cured turmeric.',
        reasonTe: 'భూగర్భ స్టోరేజీలు మరియు ముంబై పోర్టుకు సమీపత.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Erode (TN)', 'Nizamabad (TG)', 'Duggirala / Guntur (AP)', 'Sangli (MH)'],
      primaryAreasTe: ['ఈరోడ్ (తమిళనాడు)', 'నిజామాబాద్ (తెలంగాణ)', 'దుగ్గిరాల / గుంటూరు (ఆంధ్రప్రదేశ్)', 'సాంగ్లీ (మహారాష్ట్ర)'],
      buyerClusters: [
        {
          name: 'Pharmaceutical & Nutraceutical Extractors',
          nameTe: 'ఫార్మా & కర్క్యుమిన్ ఎక్స్‌ట్రాక్షన్ కంపెనీలు',
          presence: 'Bangalore, Hyderabad, Mumbai labs',
          preference: 'Curcumin percentage > 4.5%, low moisture, no artificial polish',
          preferenceTe: 'కర్క్యుమిన్ 4.5% పైగా ఉండాలి, రసాయనాలు కలపని సహజ పసుపు'
        },
        {
          name: 'Spice Grinding & Masala Conglomerates',
          nameTe: 'మసాలా తయారీ సంస్థలు',
          presence: 'Nationwide mandi commission agents',
          preference: 'Well-cured fingers (Kombu), crisp snap test, uniform yellow flesh',
          preferenceTe: 'బాగా ఎండిన పసుపు కొమ్ములు'
        }
      ],
      whyPreferThisArea: 'Traditional curing clusters and certified chemical testing labs verifying curcumin purity on the spot within 20 minutes.',
      whyPreferThisAreaTe: '20 నిమిషాల్లో కర్క్యుమిన్ నాణ్యత పరీక్షించే ల్యాబ్‌లు మరియు పారదర్శక ఈ-నామ్ వేలం.'
    }
  },

  onion: {
    cropId: 'onion',
    name: { en: 'Onion', te: 'ఉల్లిపాయలు', hi: 'प्याज़' },
    icon: '🧅',
    msp: 1800,
    topSellingMandis: [
      {
        id: 'nsk_lasalgaon',
        name: 'Lasalgaon APMC (Asia’s Largest)',
        nameTe: 'లసల్‌గావ్ ఏపీఎంసీ (ఆసియాలో అతిపెద్ద ఉల్లి మార్కెట్)',
        state: 'Maharashtra',
        district: 'Nashik',
        price: 2950,
        benchmarkDiff: '+64% above baseline',
        rating: '★★★★★ Asia Benchmark Price',
        reason: 'Price barometer for entire India, 50,000+ quintals daily trading, instant buyer clearance.',
        reasonTe: 'దేశం మొత్తానికి ఉల్లి ధరను నిర్దేశించే ప్రధాన కేంద్రం.'
      },
      {
        id: 'kurnool_onion',
        name: 'Kurnool Agricultural Market Yard',
        nameTe: 'కర్నూలు ఉల్లి మార్కెట్ యార్డు',
        state: 'Andhra Pradesh',
        district: 'Kurnool',
        price: 2800,
        benchmarkDiff: '+55% above baseline',
        rating: '★★★★☆ South India Early Harvest Hub',
        reason: 'Kharif onion earliest arrivals in South India, massive buyer inflow from Chennai and Kerala.',
        reasonTe: 'దక్షిణ భారతదేశంలో మొట్టమొదటి ఖరీఫ్ ఉల్లి మార్కెట్, చెన్నై, కేరళ వ్యాపారుల తాకిడి.'
      },
      {
        id: 'pimpalgaon_apmc',
        name: 'Pimpalgaon Baswant APMC',
        nameTe: 'పింపల్‌గావ్ బస్వంత్ మార్కెట్',
        state: 'Maharashtra',
        district: 'Nashik',
        price: 2920,
        benchmarkDiff: '+62% above baseline',
        rating: '★★★★☆ Export Hub',
        reason: 'Direct container stuffing for Gulf and Southeast Asia exports.',
        reasonTe: 'గల్ఫ్ దేశాలకు నేరుగా ఎగుమతి అయ్యే నాణ్యమైన ఎర్ర ఉల్లి.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Nashik / Lasalgaon (MH)', 'Kurnool (AP)', 'Pune / Junnar (MH)', 'Bhavnagar / Mahuva (GJ)'],
      primaryAreasTe: ['నాసిక్ / లసల్‌గావ్ (మహారాష్ట్ర)', 'కర్నూలు (ఆంధ్రప్రదేశ్)', 'పూణే (మహారాష్ట్ర)', 'మహువా (గుజరాత్)'],
      buyerClusters: [
        {
          name: 'Inter-State Wholesale Aggregators (Delhi, Kolkata, Chennai)',
          nameTe: 'అంతర్రాష్ట్ర టోకు వర్తకులు',
          presence: 'Direct loading bays in Lasalgaon & Kurnool',
          preference: 'Dry skin layers, 45mm - 60mm medium bulb diameter, zero rotting',
          preferenceTe: 'పొడి పొట్టు, 45-60 మి.మీ సైజు గల గట్టి ఉల్లిపాయలు'
        },
        {
          name: 'Dehydrated Onion Flake Processors',
          nameTe: 'ఉల్లి డీహైడ్రేషన్ పరిశ్రమలు',
          presence: 'Mahuva (Gujarat) industrial belt',
          preference: 'High solid matter, white & pink onion varieties',
          preferenceTe: 'ఎక్కువ ఘన పదార్థం ఉన్న తెల్ల, గులాబీ ఉల్లి రకాలు'
        }
      ],
      whyPreferThisArea: 'High railway rake dispatch capacity and climate-controlled storage keeping transit spoilage below 2%.',
      whyPreferThisAreaTe: 'రైలు వ్యాగన్ల ద్వారా ఇతర రాష్ట్రాలకు వేగంగా రవాణా చేసే సదుపాయం.'
    }
  },

  tomato: {
    cropId: 'tomato',
    name: { en: 'Tomato', te: 'టమోటా', hi: 'टमाटर' },
    icon: '🍅',
    msp: 1200,
    topSellingMandis: [
      {
        id: 'klr_tomato',
        name: 'Kolar APMC Market Yard (Asia’s 2nd Largest)',
        nameTe: 'కోలార్ ఏపీఎంసీ టమోటా మార్కెట్ (ఆసియా 2వ అతిపెద్దది)',
        state: 'Karnataka',
        district: 'Kolar',
        price: 2450,
        benchmarkDiff: '+104% above baseline',
        rating: '★★★★★ Asia’s Mega Tomato Mandi',
        reason: 'Supplies all South and Central Indian metropolises, high buyer liquidity.',
        reasonTe: 'హైదరాబాద్, చెన్నై, బెంగళూరు నగరాలకు ప్రధాన సరఫరా కేంద్రం.'
      },
      {
        id: 'madanapalle_amc',
        name: 'Madanapalle Market Yard',
        nameTe: 'మదనపల్లె టమోటా మార్కెట్ యార్డ్',
        state: 'Andhra Pradesh',
        district: 'Annamayya / Chittoor',
        price: 2380,
        benchmarkDiff: '+98% above baseline',
        rating: '★★★★★ Famous Tomato Center',
        reason: 'Continuous year-round arrivals, transparent crates electronic auction.',
        reasonTe: 'సంవత్సరం పొడవునా టమోటా కొనుగోలు, క్రేట్ల వారీగా వేలం.'
      },
      {
        id: 'nsk_pimpalgaon_tom',
        name: 'Pimpalgaon Tomato Yard',
        nameTe: 'పింపల్‌గావ్ టమోటా మార్కెట్',
        state: 'Maharashtra',
        district: 'Nashik',
        price: 2320,
        benchmarkDiff: '+93% above baseline',
        rating: '★★★★☆ North-West Hub',
        reason: 'Supplies Mumbai, Gujarat, and Northern India with firm hybrid varieties.',
        reasonTe: 'ముంబై, గుజరాత్ రాష్ట్రాలకు ప్రధాన సరఫరాదారు.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Kolar (KA)', 'Madanapalle / Chittoor (AP)', 'Nashik (MH)', 'Dharmapuri (TN)'],
      primaryAreasTe: ['కోలార్ (కర్ణాటక)', 'మదనపల్లె / చిత్తూరు (ఆంధ్రప్రదేశ్)', 'నాసిక్ (మహారాష్ట్ర)', 'ధర్మపురి (తమిళనాడు)'],
      buyerClusters: [
        {
          name: 'Tomato Paste & Ketchup Processors (Kissan, Heinz, Dabur)',
          nameTe: 'టమోటా పేస్ట్ & సాస్ తయారీ పరిశ్రమలు',
          presence: 'Chittoor food processing cluster, Bangalore outskirts',
          preference: 'Firm fruit, high Brix (> 4.8), deep red lycopene pigment',
          preferenceTe: 'మందపాటి తొక్క, అధిక గుజ్జు మరియు ఎరుపుదనం'
        },
        {
          name: 'Cold-Chain City Supermarket Chains (Reliance, BigBasket, DMart)',
          nameTe: 'రిటైల్ సూపర్ మార్కెట్లు',
          presence: 'Mandi packing sheds',
          preference: 'Grade A semi-ripe hybrid fruit, uniform sizing',
          preferenceTe: 'గ్రేడ్-A నాణ్యత, దెబ్బతినని పండ్లు'
        }
      ],
      whyPreferThisArea: 'Direct cold storage sorting sheds and refrigerated container hubs preventing transit soft rots.',
      whyPreferThisAreaTe: 'కోల్డ్ చైన్ కంటైనర్లు మరియు ప్యాకింగ్ షెడ్లు అందుబాటులో ఉండటం.'
    }
  },

  soybean: {
    cropId: 'soybean',
    name: { en: 'Soybean', te: 'సోయాబీన్', hi: 'सोयाबीन' },
    icon: '🌱',
    msp: 4892,
    topSellingMandis: [
      {
        id: 'mp_indore_krishi',
        name: 'Indore Laxmibai Nagar Mandi',
        nameTe: 'ఇండోర్ లక్ష్మీబాయి నగర్ మండీ',
        state: 'Madhya Pradesh',
        district: 'Indore',
        price: 5280,
        benchmarkDiff: '+7.9% above MSP',
        rating: '★★★★★ Soya Capital of India',
        reason: 'SOPA benchmark market surrounded by 30+ large solvent extraction plants.',
        reasonTe: 'దేశంలోనే సోయా రాజధాని, 30కి పైగా ఆయిల్ సాల్వెంట్ ప్లాంట్లు.'
      },
      {
        id: 'raj_kota_bhamashah',
        name: 'Kota Bhamashah Mandi',
        nameTe: 'కోటా భామాషా కృషి ఉపజ్ మండీ',
        state: 'Rajasthan',
        district: 'Kota',
        price: 5240,
        benchmarkDiff: '+7.1% above MSP',
        rating: '★★★★☆ Hadoti Soya Hub',
        reason: 'Huge arrivals, transparent open outcry and e-NAM auctions.',
        reasonTe: 'భారీ సోయా సేకరణ కేంద్రం, పారదర్శక వేలం.'
      },
      {
        id: 'latur_apmc',
        name: 'Latur APMC Market Yard',
        nameTe: 'లాతూర్ ఏపీఎంసీ మార్కెట్',
        state: 'Maharashtra',
        district: 'Latur',
        price: 5210,
        benchmarkDiff: '+6.5% above MSP',
        rating: '★★★★☆ Marathwada Oilseed Center',
        reason: 'Major oil extraction cluster paying instant bank transfer.',
        reasonTe: 'మహారాష్ట్రలో అతిపెద్ద నూనె గింజల కేంద్రం.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Indore & Ujjain (MP)', 'Latur & Nanded (MH)', 'Kota & Baran (RJ)', 'Nizamabad & Adilabad (TG)'],
      primaryAreasTe: ['ఇండోర్ (మధ్యప్రదేశ్)', 'లాతూర్ (మహారాష్ట్ర)', 'కోటా (రాజస్థాన్)', 'ఆదిలాబాద్ (తెలంగాణ)'],
      buyerClusters: [
        {
          name: 'Solvent Extraction Oil & De-Oiled Cake (DOC) Exporters',
          nameTe: 'సోయా ఆయిల్ & డీ-ఆయిల్డ్ కేక్ (DOC) ఎగుమతిదారులు',
          presence: 'Indore SOPA industrial corridor',
          preference: 'Oil content > 18.5%, moisture < 10%, zero foreign weed seed',
          preferenceTe: 'నూనె శాతం 18.5% పైగా, తేమ 10% లోపు'
        },
        {
          name: 'Poultry Feed & Protein Meal Manufacturers',
          nameTe: 'పౌల్ట్రీ ఫీడ్ & ప్రొటీన్ తయారీదారులు',
          presence: 'Hyderabad, Pune, Coimbatore hubs',
          preference: 'High protein yellow soybean seeds',
          preferenceTe: 'అధిక ప్రొటీన్ గల పసుపు సోయా గింజలు'
        }
      ],
      whyPreferThisArea: 'Massive automated processing plants operating at 1,000 tons/day capacity ensuring instant absorption of farmer arrivals without waiting.',
      whyPreferThisAreaTe: 'రోజుకు 1,000 టన్నుల ప్రాసెసింగ్ సామర్థ్యం ఉన్న ప్లాంట్లు ఉండటం వల్ల రైతులు గంటల్లోనే పంటను అమ్ముకోవచ్చు.'
    }
  },

  maize: {
    cropId: 'maize',
    name: { en: 'Maize / Corn', te: 'మొక్కజొన్న (మక్కలు)', hi: 'मक्का' },
    icon: '🌽',
    msp: 2225,
    topSellingMandis: [
      {
        id: 'bih_gulabbagh',
        name: 'Gulabbagh Mandi Purnia',
        nameTe: 'గులాబ్‌బాగ్ మార్కెట్ పూర్ణియా (బీహార్)',
        state: 'Bihar',
        district: 'Purnia',
        price: 2460,
        benchmarkDiff: '+10.5% above MSP',
        rating: '★★★★★ Asia’s Largest Maize Hub',
        reason: 'Over 100,000 tons traded monthly, supplies poultry and starch mills across India.',
        reasonTe: 'ఆసియాలోనే అతిపెద్ద మొక్కజొన్న మండీ, దేశవ్యాప్త పౌల్ట్రీ పరిశ్రమలకు సరఫరా.'
      },
      {
        id: 'davangere_apmc',
        name: 'Davanagere APMC Market',
        nameTe: 'దావణగెరె ఏపీఎంసీ మార్కెట్',
        state: 'Karnataka',
        district: 'Davanagere',
        price: 2420,
        benchmarkDiff: '+8.7% above MSP',
        rating: '★★★★☆ South India Starch Hub',
        reason: 'Large starch extraction plants and poultry feed aggregators.',
        reasonTe: 'స్టార్చ్ పరిశ్రమలు మరియు కోళ్ల దాణా ఫ్యాక్టరీల కేంద్రం.'
      },
      {
        id: 'wgl_maize_yard',
        name: 'Warangal Enumamula Maize Yard',
        nameTe: 'వరంగల్ ఎనుమాముల మొక్కజొన్న యార్డ్',
        state: 'Telangana',
        district: 'Warangal',
        price: 2390,
        benchmarkDiff: '+7.4% above MSP',
        rating: '★★★★☆ High Demand Center',
        reason: 'Prompt weighing and direct rail wagons dispatch.',
        reasonTe: 'త్వరితగతిన తూకం మరియు రైలు వ్యాగన్ల రవాణా.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Purnia / Gulabbagh (BR)', 'Davanagere (KA)', 'Warangal & Karimnagar (TG)', 'Chhindwara (MP)'],
      primaryAreasTe: ['పూర్ణియా / గులాబ్‌బాగ్ (బీహార్)', 'దావణగెరె (కర్ణాటక)', 'వరంగల్ (తెలంగాణ)', 'ఛింద్వారా (మధ్యప్రదేశ్)'],
      buyerClusters: [
        {
          name: 'Poultry & Cattle Feed Mills',
          nameTe: 'కోళ్ల & పశువుల దాణా తయారీదారులు',
          presence: 'Namakkal (TN), Hyderabad, Godavari, Punjab',
          preference: 'Moisture < 14%, low aflatoxin (< 20 ppb), golden yellow kernels',
          preferenceTe: 'తేమ 14% లోపు, బూజు లేదా ఫంగస్ లేని బంగారు గింజలు'
        },
        {
          name: 'Starch & Liquid Glucose Refineries',
          nameTe: 'స్టార్చ్ & గ్లూకోజ్ తయారీ ఫ్యాక్టరీలు',
          presence: 'Karnataka, Gujarat, Maharashtra',
          preference: 'High starch extractability, whole grain without dust',
          preferenceTe: 'అధిక పిండి పదార్థం గల గట్టి గింజలు'
        }
      ],
      whyPreferThisArea: 'Direct railway goods sheds and round-the-clock rakes dispatching 50+ freight trains weekly.',
      whyPreferThisAreaTe: 'ప్రతి వారం 50కి పైగా రైలు గూడ్స్ వ్యాగన్ల ద్వారా ఇతర రాష్ట్రాలకు ఎగుమతి.'
    }
  },

  wheat: {
    cropId: 'wheat',
    name: { en: 'Wheat', te: 'గోధుమలు', hi: 'गेहूं' },
    icon: '🌾',
    msp: 2425,
    topSellingMandis: [
      {
        id: 'khanna_wheat',
        name: 'Khanna Grain Market',
        nameTe: 'ఖన్నా గ్రెయిన్ మార్కెట్',
        state: 'Punjab',
        district: 'Ludhiana',
        price: 2680,
        benchmarkDiff: '+10.5% above MSP',
        rating: '★★★★★ Asia’s Largest Wheat Yard',
        reason: 'Immediate FCI & Markfed procurement, 100% digital DBT payment.',
        reasonTe: 'ఎఫ్.సి.ఐ ద్వారా తక్షణ సేకరణ, 100% డిజిటల్ డిబిటి చెల్లింపు.'
      },
      {
        id: 'indore_wheat',
        name: 'Indore Krishi Upaj Mandi',
        nameTe: 'ఇండోర్ కృషి ఉపజ్ మండీ',
        state: 'Madhya Pradesh',
        district: 'Indore',
        price: 2640,
        benchmarkDiff: '+8.8% above MSP',
        rating: '★★★★★ Sharbati Premium Hub',
        reason: 'Sharbati golden wheat fetches highest national consumer flour brand premiums.',
        reasonTe: 'శర్బతి గోల్డెన్ గోధుమలకు దేశంలోనే అత్యధిక ప్రీమియం రేటు.'
      },
      {
        id: 'karnal_wheat',
        name: 'Karnal Grain Mandi',
        nameTe: 'కర్నాల్ అనాజ్ మండీ',
        state: 'Haryana',
        district: 'Karnal',
        price: 2610,
        benchmarkDiff: '+7.6% above MSP',
        rating: '★★★★☆ Major Northern Hub',
        reason: 'High capacity mechanical cleaning and bagging infrastructure.',
        reasonTe: 'ఆధునిక మెకానికల్ క్లీనింగ్ మరియు ప్యాకింగ్ సదుపాయాలు.'
      }
    ],
    preferredBuyingHubs: {
      primaryAreas: ['Khanna & Patiala (PB)', 'Karnal & Hisar (HR)', 'Indore & Sehore (MP)', 'Kota (RJ)'],
      primaryAreasTe: ['ఖన్నా (పంజాబ్)', 'కర్నాల్ (హర్యానా)', 'ఇండోర్ (మధ్యప్రదేశ్)', 'కోటా (రాజస్థాన్)'],
      buyerClusters: [
        {
          name: 'Food Corporation of India (FCI) & State Procurement Agencies',
          nameTe: 'ఎఫ్.సి.ఐ & ప్రభుత్వ కేంద్రాలు',
          presence: 'All North & Central Indian APMCs',
          preference: 'FAQ Grade, moisture < 12%, no weevil infestation',
          preferenceTe: 'ఎఫ్.ఎ.క్యు గ్రేడ్, తేమ 12% లోపు, పురుగు పట్టని గింజలు'
        },
        {
          name: 'Branded Atta & Flour Mills (Aashirvaad, Fortune, Patanjali)',
          nameTe: 'ప్రముఖ పిండి మిల్లులు (ఆశీర్వాద్ మొదలైనవి)',
          presence: 'Indore, Delhi, Kanpur mill corridors',
          preference: 'High gluten, heavy bold golden grain (Sharbati & Lok-1)',
          preferenceTe: 'లావుగా ఉండే శర్బతి మరియు లోక్-1 రకాలు'
        }
      ],
      whyPreferThisArea: 'State-of-the-art mega steel silos and computerized bulk handling ensuring zero post-harvest wastage.',
      whyPreferThisAreaTe: 'ఆధునిక స్టీల్ సైలోలు మరియు గోదాములు పంట పాడవకుండా కాపాడతాయి.'
    }
  }
};

// =========================================================================
// ALL 28 INDIAN STATES & 8 UNION TERRITORIES WITH COMPLETE DISTRICTS & APMCs
// =========================================================================
export const STATES_DISTRICTS_DATA = {
  // 1. Andhra Pradesh
    andhra_pradesh: {
    id: 'andhra_pradesh',
    name: { en: 'Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్', hi: 'आंध्र प्रदेश', ta: 'ஆந்திரப் பிரதேசம்', kn: 'ಆಂಧ್ರಪ್ರದೇಶ' },
    districts: {
      "guntur": {
            "id": "guntur",
            "name": {
                  "en": "Guntur",
                  "te": "గుంటూరు",
                  "hi": "गुंटूर"
            },
            "markets": [
                  {
                        "id": "gnt_amc_mirchi",
                        "name": "Guntur APMC Market Yard (Asia’s Largest Mirchi Yard)",
                        "nameTe": "గుంటూరు వ్యవసాయ మార్కెట్ యార్డు (మిర్చి యార్డ్, అంకిరెడ్డిపాలెం)",
                        "type": "Principal APMC Yard",
                        "address": "Ankireddypalem, NH-16 Highway, Guntur - 522015",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Guntur+Mirchi+Yard",
                        "phone": "0863-2234120",
                        "operatingHours": "06:00 AM - 04:00 PM",
                        "currentQueueVehicles": 18,
                        "currentWaitMins": 35,
                        "congestion": "amber",
                        "crops": {
                              "chilli": {
                                    "price": 22400,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 28400,
                                    "mspComparison": "+35% above benchmark"
                              },
                              "cotton": {
                                    "price": 7950,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3200,
                                    "mspComparison": "+5.7% above MSP"
                              },
                              "turmeric": {
                                    "price": 15200,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 1100,
                                    "mspComparison": "+55% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  },
                  {
                        "id": "gnt_tenali_amc",
                        "name": "Tenali Government APMC Market Yard",
                        "nameTe": "తెనాలి ప్రభుత్వ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "Burripalem Road, Tenali - 522201",
                        "distanceEstimateKm": 28,
                        "mapUrl": "https://maps.google.com/?q=Tenali+APMC+Market+Yard",
                        "phone": "08644-225301",
                        "operatingHours": "07:00 AM - 05:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 15,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2490,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 9500,
                                    "mspComparison": "+7.3% above MSP"
                              },
                              "maize": {
                                    "price": 2360,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "gnt_duggirala",
                        "name": "Duggirala Regulated Turmeric Yard",
                        "nameTe": "దుగ్గిరాల ప్రభుత్వ పసుపు మార్కెట్ యార్డ్",
                        "type": "Specialized Commodity Yard",
                        "address": "Market Yard Complex, Duggirala - 522330",
                        "distanceEstimateKm": 24,
                        "mapUrl": "https://maps.google.com/?q=Duggirala+Turmeric+Market+Yard",
                        "phone": "08644-277233",
                        "operatingHours": "08:00 AM - 03:00 PM",
                        "currentQueueVehicles": 5,
                        "currentWaitMins": 12,
                        "congestion": "green",
                        "crops": {
                              "turmeric": {
                                    "price": 15600,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 3800,
                                    "mspComparison": "+59% above benchmark"
                              },
                              "paddy": {
                                    "price": 2480,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 4200,
                                    "mspComparison": "+6.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 15
                  }
            ]
      },
      "krishna": {
            "id": "krishna",
            "name": {
                  "en": "Krishna (Machilipatnam)",
                  "te": "కృష్ణా (మచిలీపట్నం)",
                  "hi": "कृष्णा"
            },
            "markets": [
                  {
                        "id": "kri_machilipatnam",
                        "name": "Machilipatnam APMC Market Yard",
                        "nameTe": "మచిలీపట్నం మార్కెట్ యార్డు",
                        "type": "Govt Procurement Center",
                        "address": "Market Complex, Machilipatnam - 521001",
                        "distanceEstimateKm": 18,
                        "mapUrl": "https://maps.google.com/?q=Machilipatnam+Market+Yard",
                        "phone": "08672-222345",
                        "operatingHours": "07:00 AM - 05:00 PM",
                        "currentQueueVehicles": 8,
                        "currentWaitMins": 20,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2485,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 11200,
                                    "mspComparison": "+7.1% above MSP"
                              },
                              "groundnut": {
                                    "price": 7250,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 900,
                                    "mspComparison": "+6.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "kri_gudivada",
                        "name": "Gudivada Agricultural Market Committee Yard",
                        "nameTe": "గుడివాడ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Major Grain Mandi",
                        "address": "Eluru Road, Gudivada - 521301",
                        "distanceEstimateKm": 35,
                        "mapUrl": "https://maps.google.com/?q=Gudivada+APMC",
                        "phone": "08674-242310",
                        "operatingHours": "06:30 AM - 05:30 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 25,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2510,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 14500,
                                    "mspComparison": "+8.2% above MSP"
                              },
                              "maize": {
                                    "price": 2340,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 1800,
                                    "mspComparison": "+5.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "ntr": {
            "id": "ntr",
            "name": {
                  "en": "NTR (Vijayawada)",
                  "te": "ఎన్టీఆర్ (విజయవాడ)",
                  "hi": "एनटीआर (विजयवाड़ा)"
            },
            "markets": [
                  {
                        "id": "ntr_gollapudi",
                        "name": "Vijayawada Gollapudi APMC Mega Yard",
                        "nameTe": "గొల్లపూడి వ్యవసాయ మార్కెట్ యార్డు (విజయవాడ)",
                        "type": "Regional Commercial Terminal",
                        "address": "Gollapudi Bypass, Vijayawada - 521225",
                        "distanceEstimateKm": 15,
                        "mapUrl": "https://maps.google.com/?q=Gollapudi+Market+Yard",
                        "phone": "0866-2415123",
                        "operatingHours": "05:00 AM - 06:00 PM",
                        "currentQueueVehicles": 22,
                        "currentWaitMins": 40,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2520,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 18200,
                                    "mspComparison": "+8.6% above MSP"
                              },
                              "tomato": {
                                    "price": 2650,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4500,
                                    "mspComparison": "Market Rate"
                              },
                              "chilli": {
                                    "price": 22100,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 5400,
                                    "mspComparison": "+34% above benchmark"
                              }
                        },
                        "handlingFeePerQtl": 20
                  },
                  {
                        "id": "ntr_nandigama",
                        "name": "Nandigama Regulated Market Yard",
                        "nameTe": "నందిగామ వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "NH-65, Nandigama - 521185",
                        "distanceEstimateKm": 48,
                        "mapUrl": "https://maps.google.com/?q=Nandigama+Market+Yard",
                        "phone": "08678-275420",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 7,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "cotton": {
                                    "price": 7920,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 2600,
                                    "mspComparison": "+5.3% above MSP"
                              },
                              "chilli": {
                                    "price": 21900,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 3100,
                                    "mspComparison": "+33% above benchmark"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "palnadu": {
            "id": "palnadu",
            "name": {
                  "en": "Palnadu (Narasaraopet)",
                  "te": "పల్నాడు (నరసరావుపేట)",
                  "hi": "पलनाडु (नरसारावपेटा)"
            },
            "markets": [
                  {
                        "id": "pln_narasaraopet",
                        "name": "Narasaraopet Agricultural Market Yard",
                        "nameTe": "నరసరావుపేట వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Vinukonda Road, Narasaraopet - 522601",
                        "distanceEstimateKm": 14,
                        "mapUrl": "https://maps.google.com/?q=Narasaraopet+Market+Yard",
                        "phone": "08647-223610",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 11,
                        "currentWaitMins": 22,
                        "congestion": "green",
                        "crops": {
                              "cotton": {
                                    "price": 7980,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 4800,
                                    "mspComparison": "+6.1% above MSP"
                              },
                              "chilli": {
                                    "price": 22250,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 6200,
                                    "mspComparison": "+35% above benchmark"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "pln_chilakaluripet",
                        "name": "Chilakaluripet Cotton & Chilli Yard",
                        "nameTe": "చిలకలూరిపేట కాటన్ & మిర్చి మార్కెట్ యార్డ్",
                        "type": "Specialized Commercial Yard",
                        "address": "Kalamandir Center, NH-16, Chilakaluripet - 522616",
                        "distanceEstimateKm": 32,
                        "mapUrl": "https://maps.google.com/?q=Chilakaluripet+Market+Yard",
                        "phone": "08647-252130",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 15,
                        "currentWaitMins": 30,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 8020,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 5600,
                                    "mspComparison": "+6.6% above MSP"
                              },
                              "chilli": {
                                    "price": 22350,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 8400,
                                    "mspComparison": "+35.5% above benchmark"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "bapatla": {
            "id": "bapatla",
            "name": {
                  "en": "Bapatla",
                  "te": "బాపట్ల",
                  "hi": "बापटला"
            },
            "markets": [
                  {
                        "id": "bpt_bapatla_amc",
                        "name": "Bapatla Regulated Market Yard",
                        "nameTe": "బాపట్ల వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Govt Procurement Yard",
                        "address": "Karlapalem Road, Bapatla - 522101",
                        "distanceEstimateKm": 16,
                        "mapUrl": "https://maps.google.com/?q=Bapatla+Market+Yard",
                        "phone": "08643-224150",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 14,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2495,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 8400,
                                    "mspComparison": "+7.5% above MSP"
                              },
                              "groundnut": {
                                    "price": 7320,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 1100,
                                    "mspComparison": "+7.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  },
                  {
                        "id": "bpt_chirala",
                        "name": "Chirala Agricultural Market Yard",
                        "nameTe": "చీరాల వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "Bypass Road, Chirala - 523155",
                        "distanceEstimateKm": 22,
                        "mapUrl": "https://maps.google.com/?q=Chirala+Market+Yard",
                        "phone": "08594-222340",
                        "operatingHours": "07:30 AM - 04:30 PM",
                        "currentQueueVehicles": 8,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2480,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 6200,
                                    "mspComparison": "+6.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "prakasam": {
            "id": "prakasam",
            "name": {
                  "en": "Prakasam (Ongole)",
                  "te": "ప్రకాశం (ఒంగోలు)",
                  "hi": "प्रकाशम (ओंगोल)"
            },
            "markets": [
                  {
                        "id": "prk_ongole_amc",
                        "name": "Ongole APMC Market Yard",
                        "nameTe": "ఒంగోలు వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "South Bypass, Ongole - 523001",
                        "distanceEstimateKm": 15,
                        "mapUrl": "https://maps.google.com/?q=Ongole+APMC+Market+Yard",
                        "phone": "08592-233450",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 14,
                        "currentWaitMins": 28,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 7960,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4100,
                                    "mspComparison": "+5.8% above MSP"
                              },
                              "chilli": {
                                    "price": 21800,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 3600,
                                    "mspComparison": "+32% above benchmark"
                              },
                              "bengalgram": {
                                    "price": 5980,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 2200,
                                    "mspComparison": "+9.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "prk_giddalur",
                        "name": "Giddalur Regulated Market Yard",
                        "nameTe": "గిద్దలూరు మార్కెట్ యార్డు",
                        "type": "Pulse & Millet Yard",
                        "address": "Station Road, Giddalur - 523357",
                        "distanceEstimateKm": 65,
                        "mapUrl": "https://maps.google.com/?q=Giddalur+Market+Yard",
                        "phone": "08405-242100",
                        "operatingHours": "07:00 AM - 03:30 PM",
                        "currentQueueVehicles": 5,
                        "currentWaitMins": 12,
                        "congestion": "green",
                        "crops": {
                              "redgram": {
                                    "price": 9150,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 1400,
                                    "mspComparison": "+21% above MSP"
                              },
                              "bengalgram": {
                                    "price": 6050,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 2800,
                                    "mspComparison": "+11.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 15
                  }
            ]
      },
      "nellore": {
            "id": "nellore",
            "name": {
                  "en": "SPS Nellore",
                  "te": "శ్రీ పొట్టి శ్రీరాములు నెల్లూరు",
                  "hi": "नेल्लूर"
            },
            "markets": [
                  {
                        "id": "nel_nellore_amc",
                        "name": "Nellore Government APMC Market Yard",
                        "nameTe": "నెల్లూరు వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Major Grain Mandi",
                        "address": "Podalakur Road, Nellore - 524004",
                        "distanceEstimateKm": 14,
                        "mapUrl": "https://maps.google.com/?q=Nellore+APMC+Yard",
                        "phone": "0861-2321450",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 24,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2540,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 16400,
                                    "mspComparison": "+9.5% above MSP (Nellore Sona)"
                              },
                              "groundnut": {
                                    "price": 7280,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 1200,
                                    "mspComparison": "+7.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "kurnool": {
            "id": "kurnool",
            "name": {
                  "en": "Kurnool",
                  "te": "కర్నూలు",
                  "hi": "कर्नूल"
            },
            "markets": [
                  {
                        "id": "knl_kurnool_amc",
                        "name": "Kurnool Agricultural Market Yard",
                        "nameTe": "కర్నూలు వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Bellary Road, Kurnool - 518003",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Kurnool+APMC+Yard",
                        "phone": "08518-251210",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 16,
                        "currentWaitMins": 30,
                        "congestion": "amber",
                        "crops": {
                              "onion": {
                                    "price": 2750,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 18500,
                                    "mspComparison": "+52% above benchmark"
                              },
                              "cotton": {
                                    "price": 7920,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4200,
                                    "mspComparison": "+5.3% above MSP"
                              },
                              "groundnut": {
                                    "price": 7350,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+8.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "knl_adoni",
                        "name": "Adoni Regulated Market Committee (Cotton Hub)",
                        "nameTe": "ఆదోని మార్కెట్ యార్డ్ (కాటన్ & వేరుశనగ హబ్)",
                        "type": "Major Cotton & Oilseed Terminal",
                        "address": "Siruguppa Road, Adoni - 518301",
                        "distanceEstimateKm": 88,
                        "mapUrl": "https://maps.google.com/?q=Adoni+Market+Yard",
                        "phone": "08512-252110",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 25,
                        "currentWaitMins": 45,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 8080,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 9400,
                                    "mspComparison": "+7.4% above MSP"
                              },
                              "groundnut": {
                                    "price": 7420,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3800,
                                    "mspComparison": "+9.4% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "nandyal": {
            "id": "nandyal",
            "name": {
                  "en": "Nandyal",
                  "te": "నంద్యాల",
                  "hi": "नंद्याल"
            },
            "markets": [
                  {
                        "id": "ndl_nandyal_amc",
                        "name": "Nandyal Agricultural Market Yard",
                        "nameTe": "నంద్యాల వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Sanjiva Nagar, Nandyal - 518501",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Nandyal+Market+Yard",
                        "phone": "08514-242350",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 9,
                        "currentWaitMins": 20,
                        "congestion": "green",
                        "crops": {
                              "bengalgram": {
                                    "price": 6100,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 4500,
                                    "mspComparison": "+12.1% above MSP"
                              },
                              "paddy": {
                                    "price": 2500,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 7800,
                                    "mspComparison": "+7.7% above MSP"
                              },
                              "maize": {
                                    "price": 2380,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2400,
                                    "mspComparison": "+7% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  },
                  {
                        "id": "ndl_allagadda",
                        "name": "Allagadda Regulated Market Yard",
                        "nameTe": "ఆళ్లగడ్డ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "Kadapa Road, Allagadda - 518543",
                        "distanceEstimateKm": 42,
                        "mapUrl": "https://maps.google.com/?q=Allagadda+Market+Yard",
                        "phone": "08519-221340",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 5,
                        "currentWaitMins": 12,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2490,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 5200,
                                    "mspComparison": "+7.3% above MSP"
                              },
                              "bengalgram": {
                                    "price": 6020,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 1800,
                                    "mspComparison": "+10.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 15
                  }
            ]
      },
      "anantapur": {
            "id": "anantapur",
            "name": {
                  "en": "Anantapur",
                  "te": "అనంతపురం",
                  "hi": "अनंतपुर"
            },
            "markets": [
                  {
                        "id": "atp_anantapur_amc",
                        "name": "Anantapur APMC Groundnut Mega Yard",
                        "nameTe": "అనంతపురం వేరుశనగ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Specialized Oilseed Terminal",
                        "address": "Gooty Road, Anantapur - 515001",
                        "distanceEstimateKm": 14,
                        "mapUrl": "https://maps.google.com/?q=Anantapur+APMC+Yard",
                        "phone": "08554-274120",
                        "operatingHours": "06:00 AM - 04:00 PM",
                        "currentQueueVehicles": 15,
                        "currentWaitMins": 28,
                        "congestion": "amber",
                        "crops": {
                              "groundnut": {
                                    "price": 7450,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 12800,
                                    "mspComparison": "+9.8% above MSP"
                              },
                              "cotton": {
                                    "price": 7880,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+4.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "atp_tadipatri",
                        "name": "Tadipatri Agricultural Market Yard",
                        "nameTe": "తాడిపత్రి వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Center",
                        "address": "Cuddapah Road, Tadipatri - 515411",
                        "distanceEstimateKm": 56,
                        "mapUrl": "https://maps.google.com/?q=Tadipatri+Market+Yard",
                        "phone": "08558-222340",
                        "operatingHours": "07:00 AM - 04:30 PM",
                        "currentQueueVehicles": 7,
                        "currentWaitMins": 16,
                        "congestion": "green",
                        "crops": {
                              "groundnut": {
                                    "price": 7380,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4100,
                                    "mspComparison": "+8.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "sri_sathya_sai": {
            "id": "sri_sathya_sai",
            "name": {
                  "en": "Sri Sathya Sai (Puttaparthi)",
                  "te": "శ్రీ సత్యసాయి (పుట్టపర్తి)",
                  "hi": "श्री सत्य साई (पुट्टपर्थी)"
            },
            "markets": [
                  {
                        "id": "sss_hindupur",
                        "name": "Hindupur APMC Market Yard",
                        "nameTe": "హిందూపురం వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Major Interstate Mandi",
                        "address": "Penukonda Road, Hindupur - 515201",
                        "distanceEstimateKm": 24,
                        "mapUrl": "https://maps.google.com/?q=Hindupur+Market+Yard",
                        "phone": "08556-220450",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 14,
                        "currentWaitMins": 26,
                        "congestion": "green",
                        "crops": {
                              "groundnut": {
                                    "price": 7480,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 8900,
                                    "mspComparison": "+10.2% above MSP"
                              },
                              "maize": {
                                    "price": 2390,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+7.4% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "sss_kadiri",
                        "name": "Kadiri Groundnut & Pulse Market Yard",
                        "nameTe": "కదిరి వేరుశనగ మార్కెట్ యార్డు",
                        "type": "Specialized Oilseed Hub",
                        "address": "Bypass Road, Kadiri - 515591",
                        "distanceEstimateKm": 45,
                        "mapUrl": "https://maps.google.com/?q=Kadiri+Market+Yard",
                        "phone": "08494-221230",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 10,
                        "currentWaitMins": 20,
                        "congestion": "green",
                        "crops": {
                              "groundnut": {
                                    "price": 7520,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 11400,
                                    "mspComparison": "+10.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 17
                  }
            ]
      },
      "ysr_kadapa": {
            "id": "ysr_kadapa",
            "name": {
                  "en": "YSR Kadapa",
                  "te": "వైఎస్సార్ కడప",
                  "hi": "वाईएसआर कडपा"
            },
            "markets": [
                  {
                        "id": "kdp_kadapa_amc",
                        "name": "Kadapa APMC Market Yard",
                        "nameTe": "కడప వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Rayachoti Road, Kadapa - 516001",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Kadapa+Market+Yard",
                        "phone": "08562-244310",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 11,
                        "currentWaitMins": 22,
                        "congestion": "green",
                        "crops": {
                              "bengalgram": {
                                    "price": 6080,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3900,
                                    "mspComparison": "+11.7% above MSP"
                              },
                              "turmeric": {
                                    "price": 15100,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 1800,
                                    "mspComparison": "+54% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "kdp_proddatur",
                        "name": "Proddatur Regulated Market Yard",
                        "nameTe": "ప్రొద్దుటూరు వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Commercial Commodity Center",
                        "address": "Jammalamadugu Road, Proddatur - 516360",
                        "distanceEstimateKm": 52,
                        "mapUrl": "https://maps.google.com/?q=Proddatur+Market+Yard",
                        "phone": "08564-252110",
                        "operatingHours": "07:00 AM - 05:00 PM",
                        "currentQueueVehicles": 13,
                        "currentWaitMins": 25,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 7940,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3600,
                                    "mspComparison": "+5.5% above MSP"
                              },
                              "paddy": {
                                    "price": 2490,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 4800,
                                    "mspComparison": "+7.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 17
                  }
            ]
      },
      "annamayya": {
            "id": "annamayya",
            "name": {
                  "en": "Annamayya (Rayachoti)",
                  "te": "అన్నమయ్య (రాయచోటి)",
                  "hi": "अन्नमय्या (रायचोटी)"
            },
            "markets": [
                  {
                        "id": "anm_madanapalle",
                        "name": "Madanapalle APMC Tomato Mega Yard (Asia's Largest Tomato Market)",
                        "nameTe": "మదనపల్లె టమోటా మార్కెట్ యార్డ్ (ఆసియాలోనే అతిపెద్ద టమోటా మార్కెట్)",
                        "type": "Specialized Perishable Mega Terminal",
                        "address": "CTM Road, Madanapalle - 517325",
                        "distanceEstimateKm": 54,
                        "mapUrl": "https://maps.google.com/?q=Madanapalle+Tomato+Market",
                        "phone": "08571-222410",
                        "operatingHours": "05:00 AM - 07:00 PM",
                        "currentQueueVehicles": 38,
                        "currentWaitMins": 50,
                        "congestion": "red",
                        "crops": {
                              "tomato": {
                                    "price": 2680,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 34000,
                                    "mspComparison": "Top National Benchmark"
                              }
                        },
                        "handlingFeePerQtl": 20
                  },
                  {
                        "id": "anm_rayachoti",
                        "name": "Rayachoti Agricultural Market Yard",
                        "nameTe": "రాయచోటి వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Center",
                        "address": "Chittoor Road, Rayachoti - 516269",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Rayachoti+Market+Yard",
                        "phone": "08561-251220",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 15,
                        "congestion": "green",
                        "crops": {
                              "groundnut": {
                                    "price": 7360,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 2800,
                                    "mspComparison": "+8.5% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "chittoor": {
            "id": "chittoor",
            "name": {
                  "en": "Chittoor",
                  "te": "చిత్తూరు",
                  "hi": "चित्तूर"
            },
            "markets": [
                  {
                        "id": "ctr_chittoor_amc",
                        "name": "Chittoor Agricultural Market Yard",
                        "nameTe": "చిత్తూరు వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Greamspet, Chittoor - 517002",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Chittoor+Market+Yard",
                        "phone": "08572-232140",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 9,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "tomato": {
                                    "price": 2620,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 12000,
                                    "mspComparison": "Market Benchmark"
                              },
                              "groundnut": {
                                    "price": 7340,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+8.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "ctr_palamaner",
                        "name": "Palamaner Regulated Market Yard",
                        "nameTe": "పలమనేరు వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "Bangalore Highway, Palamaner - 517408",
                        "distanceEstimateKm": 38,
                        "mapUrl": "https://maps.google.com/?q=Palamaner+Market+Yard",
                        "phone": "08579-251120",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 7,
                        "currentWaitMins": 15,
                        "congestion": "green",
                        "crops": {
                              "tomato": {
                                    "price": 2640,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 9400,
                                    "mspComparison": "Market Benchmark"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "tirupati": {
            "id": "tirupati",
            "name": {
                  "en": "Tirupati",
                  "te": "తిరుపతి",
                  "hi": "तिरुपति"
            },
            "markets": [
                  {
                        "id": "tpt_tirupati_amc",
                        "name": "Tirupati APMC Market Yard",
                        "nameTe": "తిరుపతి వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Renigunta Road, Tirupati - 517506",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Tirupati+APMC+Yard",
                        "phone": "0877-2274150",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 14,
                        "currentWaitMins": 25,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2520,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 7600,
                                    "mspComparison": "+8.6% above MSP"
                              },
                              "groundnut": {
                                    "price": 7380,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2400,
                                    "mspComparison": "+8.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "tpt_srikalahasti",
                        "name": "Srikalahasti Regulated Market Yard",
                        "nameTe": "శ్రీకాళహస్తి మార్కెట్ యార్డు",
                        "type": "Govt Procurement Sub-Yard",
                        "address": "Panagal Road, Srikalahasti - 517644",
                        "distanceEstimateKm": 38,
                        "mapUrl": "https://maps.google.com/?q=Srikalahasti+Market+Yard",
                        "phone": "08578-222140",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 14,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2505,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 5800,
                                    "mspComparison": "+8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "east_godavari": {
            "id": "east_godavari",
            "name": {
                  "en": "East Godavari (Rajahmundry)",
                  "te": "తూర్పు గోదావరి (రాజమండ్రి)",
                  "hi": "पूर्वी गोदावरी (राजमहेंद्री)"
            },
            "markets": [
                  {
                        "id": "eg_rajahmundry_amc",
                        "name": "Rajahmundry APMC Market Yard",
                        "nameTe": "రాజమండ్రి వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Morampudi Junction, Rajahmundry - 533106",
                        "distanceEstimateKm": 15,
                        "mapUrl": "https://maps.google.com/?q=Rajahmundry+APMC+Yard",
                        "phone": "0883-2471230",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 14,
                        "currentWaitMins": 26,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2515,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 19500,
                                    "mspComparison": "+8.4% above MSP"
                              },
                              "maize": {
                                    "price": 2370,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2800,
                                    "mspComparison": "+6.5% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "kakinada": {
            "id": "kakinada",
            "name": {
                  "en": "Kakinada",
                  "te": "కాకినాడ",
                  "hi": "काकीनाडा"
            },
            "markets": [
                  {
                        "id": "kkd_kakinada_amc",
                        "name": "Kakinada Port & Agricultural Market Yard",
                        "nameTe": "కాకినాడ వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Port Terminal Mandi",
                        "address": "Port Road, Kakinada - 533001",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Kakinada+APMC+Yard",
                        "phone": "0884-2361250",
                        "operatingHours": "06:00 AM - 06:00 PM",
                        "currentQueueVehicles": 16,
                        "currentWaitMins": 30,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2530,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 22000,
                                    "mspComparison": "+9% above MSP (Export Quality)"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "kkd_peddapuram",
                        "name": "Peddapuram Agricultural Market Yard",
                        "nameTe": "పెద్దాపురం వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Specialized Grain & Sago Yard",
                        "address": "Main Road, Peddapuram - 533437",
                        "distanceEstimateKm": 24,
                        "mapUrl": "https://maps.google.com/?q=Peddapuram+Market+Yard",
                        "phone": "08852-241210",
                        "operatingHours": "07:00 AM - 04:30 PM",
                        "currentQueueVehicles": 7,
                        "currentWaitMins": 16,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2500,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 6800,
                                    "mspComparison": "+7.7% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "konaseema": {
            "id": "konaseema",
            "name": {
                  "en": "Dr. B.R. Ambedkar Konaseema",
                  "te": "కోనసీమ (అమలాపురం)",
                  "hi": "कोनेसीमा (अमलापुरम)"
            },
            "markets": [
                  {
                        "id": "kns_amalapuram",
                        "name": "Amalapuram Coconut & Paddy Market Yard",
                        "nameTe": "అమలాపురం కొబ్బరి & వరి మార్కెట్ యార్డు",
                        "type": "Specialized Coconut & Grain Yard",
                        "address": "Clock Tower Road, Amalapuram - 533201",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Amalapuram+Market+Yard",
                        "phone": "08856-231450",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 8,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2510,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 9200,
                                    "mspComparison": "+8.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  },
                  {
                        "id": "kns_ravulapalem",
                        "name": "Ravulapalem Regulated Market Yard (Banana & Veg Hub)",
                        "nameTe": "రావులపాలెం అరటి & కూరగాయల మార్కెట్ యార్డ్",
                        "type": "Major Horticultural Terminal",
                        "address": "NH-16, Ravulapalem - 533238",
                        "distanceEstimateKm": 32,
                        "mapUrl": "https://maps.google.com/?q=Ravulapalem+Market+Yard",
                        "phone": "08855-255120",
                        "operatingHours": "05:30 AM - 05:00 PM",
                        "currentQueueVehicles": 15,
                        "currentWaitMins": 28,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2500,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 7100,
                                    "mspComparison": "+7.7% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "west_godavari": {
            "id": "west_godavari",
            "name": {
                  "en": "West Godavari (Bhimavaram)",
                  "te": "పశ్చిమ గోదావరి (భీమవరం)",
                  "hi": "पश्चिम गोदावरी (भीमावरम)"
            },
            "markets": [
                  {
                        "id": "wg_bhimavaram_amc",
                        "name": "Bhimavaram Agricultural Market Yard",
                        "nameTe": "భీమవరం వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Undi Road, Bhimavaram - 534202",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Bhimavaram+Market+Yard",
                        "phone": "08816-224530",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 16,
                        "currentWaitMins": 30,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2530,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 24000,
                                    "mspComparison": "+9% above MSP (Rice Bowl of AP)"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "wg_tadepalligudem",
                        "name": "Tadepalligudem Onion & Grain Mega Yard",
                        "nameTe": "తాడేపల్లిగూడెం ఉల్లిపాయల & ధాన్యం మార్కెట్ యార్డ్",
                        "type": "Major Onion & Grain Mandi",
                        "address": "Railway Feeders Road, Tadepalligudem - 534101",
                        "distanceEstimateKm": 38,
                        "mapUrl": "https://maps.google.com/?q=Tadepalligudem+Market+Yard",
                        "phone": "08818-222340",
                        "operatingHours": "05:00 AM - 06:00 PM",
                        "currentQueueVehicles": 24,
                        "currentWaitMins": 42,
                        "congestion": "red",
                        "crops": {
                              "onion": {
                                    "price": 2820,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 28000,
                                    "mspComparison": "+56% above benchmark"
                              },
                              "paddy": {
                                    "price": 2520,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 15000,
                                    "mspComparison": "+8.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "eluru": {
            "id": "eluru",
            "name": {
                  "en": "Eluru",
                  "te": "ఏలూరు",
                  "hi": "एलूरू"
            },
            "markets": [
                  {
                        "id": "elr_eluru_amc",
                        "name": "Eluru Government APMC Market Yard",
                        "nameTe": "ఏలూరు వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Sanivarapupeta, Eluru - 534003",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Eluru+Market+Yard",
                        "phone": "08812-231240",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 24,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2510,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 14200,
                                    "mspComparison": "+8.2% above MSP"
                              },
                              "maize": {
                                    "price": 2360,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 3100,
                                    "mspComparison": "+6.1% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  },
                  {
                        "id": "elr_jangareddygudem",
                        "name": "Jangareddygudem Agricultural Market Yard",
                        "nameTe": "జంగారెడ్డిగూడెం వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Oil Palm & Grain Terminal",
                        "address": "Aswaraopeta Road, Jangareddygudem - 534447",
                        "distanceEstimateKm": 54,
                        "mapUrl": "https://maps.google.com/?q=Jangareddygudem+Market+Yard",
                        "phone": "08821-224130",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 9,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "maize": {
                                    "price": 2380,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4200,
                                    "mspComparison": "+7% above MSP"
                              },
                              "paddy": {
                                    "price": 2490,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 6100,
                                    "mspComparison": "+7.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "visakhapatnam": {
            "id": "visakhapatnam",
            "name": {
                  "en": "Visakhapatnam",
                  "te": "విశాఖపట్నం",
                  "hi": "विशाखापत्तनम"
            },
            "markets": [
                  {
                        "id": "vzk_port_amc",
                        "name": "Visakhapatnam Port & City APMC Yard",
                        "nameTe": "విశాఖపట్నం వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Coastal Terminal Yard",
                        "address": "Marripalem, Visakhapatnam - 530018",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Visakhapatnam+APMC+Yard",
                        "phone": "0891-2554120",
                        "operatingHours": "05:00 AM - 05:00 PM",
                        "currentQueueVehicles": 16,
                        "currentWaitMins": 30,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2525,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 11500,
                                    "mspComparison": "+8.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "anakapalli": {
            "id": "anakapalli",
            "name": {
                  "en": "Anakapalli",
                  "te": "అనకాపల్లి",
                  "hi": "अनकापल्ली"
            },
            "markets": [
                  {
                        "id": "ank_anakapalli_amc",
                        "name": "Anakapalli APMC Market Yard (India's 2nd Largest Jaggery Market)",
                        "nameTe": "అనకాపల్లి వ్యవసాయ మార్కెట్ యార్డు (బెల్లం మార్కెట్)",
                        "type": "Specialized Commodity Terminal",
                        "address": "Sarada River Road, Anakapalli - 531001",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Anakapalli+Market+Yard",
                        "phone": "08924-221340",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 18,
                        "currentWaitMins": 35,
                        "congestion": "amber",
                        "crops": {
                              "paddy": {
                                    "price": 2510,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 9400,
                                    "mspComparison": "+8.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "vizianagaram": {
            "id": "vizianagaram",
            "name": {
                  "en": "Vizianagaram",
                  "te": "విజయనగరం",
                  "hi": "विजयनगरम"
            },
            "markets": [
                  {
                        "id": "vzm_vizianagaram_amc",
                        "name": "Vizianagaram APMC Market Yard",
                        "nameTe": "విజయనగరం వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Cantonment, Vizianagaram - 535003",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Vizianagaram+Market+Yard",
                        "phone": "08922-276120",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 10,
                        "currentWaitMins": 20,
                        "congestion": "green",
                        "crops": {
                              "maize": {
                                    "price": 2380,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3800,
                                    "mspComparison": "+7% above MSP"
                              },
                              "paddy": {
                                    "price": 2490,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 6400,
                                    "mspComparison": "+7.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  },
                  {
                        "id": "vzm_bobbili",
                        "name": "Bobbili Regulated Market Yard",
                        "nameTe": "బొబ్బిలి వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Govt Procurement Center",
                        "address": "Station Road, Bobbili - 535558",
                        "distanceEstimateKm": 55,
                        "mapUrl": "https://maps.google.com/?q=Bobbili+Market+Yard",
                        "phone": "08944-255140",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 14,
                        "congestion": "green",
                        "crops": {
                              "maize": {
                                    "price": 2360,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 2200,
                                    "mspComparison": "+6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 15
                  }
            ]
      },
      "parvathipuram_manyam": {
            "id": "parvathipuram_manyam",
            "name": {
                  "en": "Parvathipuram Manyam",
                  "te": "పార్వతీపురం మన్యం",
                  "hi": "पार्वतीपुरम मान्यम"
            },
            "markets": [
                  {
                        "id": "ppm_parvathipuram",
                        "name": "Parvathipuram Agricultural Market Yard",
                        "nameTe": "పార్వతీపురం మార్కెట్ యార్డ్",
                        "type": "Govt Procurement Yard",
                        "address": "Bypass Road, Parvathipuram - 535501",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Parvathipuram+Market+Yard",
                        "phone": "08963-221340",
                        "operatingHours": "07:00 AM - 04:00 PM",
                        "currentQueueVehicles": 6,
                        "currentWaitMins": 14,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2480,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 5600,
                                    "mspComparison": "+6.9% above MSP"
                              },
                              "maize": {
                                    "price": 2350,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 1900,
                                    "mspComparison": "+5.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 15
                  }
            ]
      },
      "srikakulam": {
            "id": "srikakulam",
            "name": {
                  "en": "Srikakulam",
                  "te": "శ్రీకాకుళం",
                  "hi": "श्रीकाकुलम"
            },
            "markets": [
                  {
                        "id": "skm_srikakulam_amc",
                        "name": "Srikakulam Government APMC Yard",
                        "nameTe": "శ్రీకాకుళం వ్యవసాయ మార్కెట్ యార్డు",
                        "type": "Principal APMC Yard",
                        "address": "Palakonda Road, Srikakulam - 532001",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Srikakulam+Market+Yard",
                        "phone": "08942-222450",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 9,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2490,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 8900,
                                    "mspComparison": "+7.3% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  },
                  {
                        "id": "skm_palasa",
                        "name": "Palasa Cashew & Grain Market Yard",
                        "nameTe": "పలాస జీడిపప్పు & మార్కెట్ యార్డ్",
                        "type": "Specialized Cash Crop Terminal",
                        "address": "NH-16, Palasa-Kasibugga - 532222",
                        "distanceEstimateKm": 72,
                        "mapUrl": "https://maps.google.com/?q=Palasa+Market+Yard",
                        "phone": "08945-241250",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 22,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2480,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 4500,
                                    "mspComparison": "+6.9% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "alluri_sitharama_raju": {
            "id": "alluri_sitharama_raju",
            "name": {
                  "en": "Alluri Sitharama Raju (Paderu)",
                  "te": "అల్లూరి సీతారామరాజు (పాడేరు)",
                  "hi": "अल्लूरी सीताराम राजू (पाडेरू)"
            },
            "markets": [
                  {
                        "id": "asr_paderu",
                        "name": "Paderu Tribal & Organic APMC Yard",
                        "nameTe": "పాడేరు సేంద్రీయ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Organic & Forest Produce Terminal",
                        "address": "Agency Road, Paderu - 531024",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Paderu+Market+Yard",
                        "phone": "08935-251210",
                        "operatingHours": "07:30 AM - 03:30 PM",
                        "currentQueueVehicles": 4,
                        "currentWaitMins": 10,
                        "congestion": "green",
                        "crops": {
                              "turmeric": {
                                    "price": 15800,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 2100,
                                    "mspComparison": "+61% above benchmark (High Curcumin)"
                              },
                              "paddy": {
                                    "price": 2470,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 3100,
                                    "mspComparison": "+6.5% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 14
                  }
            ]
      }
}
  },

  // 2. Telangana
  telangana: {
    id: 'telangana',
    name: { en: 'Telangana', te: 'తెలంగాణ', hi: 'तेलंगाना', ta: 'தெலுங்கானா', kn: 'ತೆಲಂಗಾಣ' },
    districts: {
      "warangal": {
            "id": "warangal",
            "name": {
                  "en": "Warangal / Hanamkonda",
                  "te": "వరంగల్ / హనుమకొండ",
                  "hi": "वारंगल"
            },
            "markets": [
                  {
                        "id": "wgl_enumamula",
                        "name": "Warangal Enumamula Market Yard (Major Cotton & Chilli Terminal)",
                        "nameTe": "వరంగల్ ఎనుమాముల వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Enumamula, Warangal - 506006",
                        "distanceEstimateKm": 8,
                        "mapUrl": "https://maps.google.com/?q=Enumamula+Market+Yard",
                        "phone": "0870-2561230",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 24,
                        "currentWaitMins": 40,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 8100,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 16400,
                                    "mspComparison": "+7.7% above MSP"
                              },
                              "chilli": {
                                    "price": 22100,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 14200,
                                    "mspComparison": "+34% above benchmark"
                              },
                              "maize": {
                                    "price": 2390,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4200,
                                    "mspComparison": "+7.4% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "khammam": {
            "id": "khammam",
            "name": {
                  "en": "Khammam",
                  "te": "ఖమ్మం",
                  "hi": "खम्मम"
            },
            "markets": [
                  {
                        "id": "khm_khammam_amc",
                        "name": "Khammam APMC Market Yard (Mirchi & Cotton Yard)",
                        "nameTe": "ఖమ్మం వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Rotary Nagar, Khammam - 507002",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Khammam+Market+Yard",
                        "phone": "08742-232140",
                        "operatingHours": "06:00 AM - 04:30 PM",
                        "currentQueueVehicles": 20,
                        "currentWaitMins": 35,
                        "congestion": "amber",
                        "crops": {
                              "chilli": {
                                    "price": 22300,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 18500,
                                    "mspComparison": "+35% above benchmark"
                              },
                              "cotton": {
                                    "price": 8020,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 6200,
                                    "mspComparison": "+6.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "nizamabad": {
            "id": "nizamabad",
            "name": {
                  "en": "Nizamabad",
                  "te": "నిజామాబాద్",
                  "hi": "निजामाबाद"
            },
            "markets": [
                  {
                        "id": "nzb_nizamabad_amc",
                        "name": "Nizamabad APMC Turmeric & Grain Mega Yard",
                        "nameTe": "నిజామాబాద్ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Specialized Commodity Terminal",
                        "address": "Dubba, Nizamabad - 503002",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Nizamabad+Market+Yard",
                        "phone": "08462-234510",
                        "operatingHours": "06:00 AM - 04:00 PM",
                        "currentQueueVehicles": 18,
                        "currentWaitMins": 32,
                        "congestion": "amber",
                        "crops": {
                              "turmeric": {
                                    "price": 15450,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 12400,
                                    "mspComparison": "+58% above benchmark"
                              },
                              "soybean": {
                                    "price": 4920,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4500,
                                    "mspComparison": "+7.2% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "nalgonda": {
            "id": "nalgonda",
            "name": {
                  "en": "Nalgonda",
                  "te": "నల్గొండ",
                  "hi": "नलगोंडा"
            },
            "markets": [
                  {
                        "id": "nlg_nalgonda_amc",
                        "name": "Nalgonda Agricultural Market Yard",
                        "nameTe": "నల్గొండ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Govt Grain Terminal",
                        "address": "Devarakonda Road, Nalgonda - 508001",
                        "distanceEstimateKm": 14,
                        "mapUrl": "https://maps.google.com/?q=Nalgonda+Market+Yard",
                        "phone": "08682-224530",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 11,
                        "currentWaitMins": 20,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2510,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 14200,
                                    "mspComparison": "+8.2% above MSP"
                              },
                              "cotton": {
                                    "price": 7950,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3800,
                                    "mspComparison": "+5.7% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "karimnagar": {
            "id": "karimnagar",
            "name": {
                  "en": "Karimnagar",
                  "te": "కరీంనగర్",
                  "hi": "करीमनगर"
            },
            "markets": [
                  {
                        "id": "knr_karimnagar_amc",
                        "name": "Karimnagar Agricultural Market Yard",
                        "nameTe": "కరీంనగర్ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Principal APMC Yard",
                        "address": "Kothirampur, Karimnagar - 505001",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Karimnagar+Market+Yard",
                        "phone": "0878-2234120",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 22,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2505,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 11800,
                                    "mspComparison": "+8% above MSP"
                              },
                              "maize": {
                                    "price": 2380,
                                    "demand": "steady",
                                    "arrivalsTodayQtl": 3400,
                                    "mspComparison": "+7% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "mahabubnagar": {
            "id": "mahabubnagar",
            "name": {
                  "en": "Mahabubnagar",
                  "te": "మహబూబ్‌నగర్",
                  "hi": "महबूबनगर"
            },
            "markets": [
                  {
                        "id": "mbn_badepally",
                        "name": "Badepally APMC (Jadcherla Mega Mandi)",
                        "nameTe": "బాదేపల్లి వ్యవసాయ మార్కెట్ యార్డ్ (జడ్చర్ల)",
                        "type": "Major Interstate Grain & Cotton Hub",
                        "address": "Station Road, Jadcherla - 509301",
                        "distanceEstimateKm": 16,
                        "mapUrl": "https://maps.google.com/?q=Badepally+Market+Yard",
                        "phone": "08542-233150",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 15,
                        "currentWaitMins": 28,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 8040,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 7800,
                                    "mspComparison": "+6.9% above MSP"
                              },
                              "maize": {
                                    "price": 2395,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4100,
                                    "mspComparison": "+7.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "adilabad": {
            "id": "adilabad",
            "name": {
                  "en": "Adilabad",
                  "te": "ఆదిలాబాద్",
                  "hi": "आदिलाबाद"
            },
            "markets": [
                  {
                        "id": "adb_adilabad_amc",
                        "name": "Adilabad APMC Cotton Mega Yard",
                        "nameTe": "ఆదిలాబాద్ కాటన్ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Specialized Cotton Mega Terminal",
                        "address": "Bela Road, Adilabad - 504001",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Adilabad+Cotton+Market",
                        "phone": "08732-224150",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 26,
                        "currentWaitMins": 45,
                        "congestion": "amber",
                        "crops": {
                              "cotton": {
                                    "price": 8120,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 19200,
                                    "mspComparison": "+8% above MSP"
                              },
                              "soybean": {
                                    "price": 4900,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 5400,
                                    "mspComparison": "+6.8% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "rangareddy": {
            "id": "rangareddy",
            "name": {
                  "en": "Rangareddy",
                  "te": "రంగారెడ్డి",
                  "hi": "रंगारेड्डी"
            },
            "markets": [
                  {
                        "id": "rrd_shadnagar",
                        "name": "Shadnagar APMC Market Yard",
                        "nameTe": "షాద్‌నగర్ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Commercial Agricultural Terminal",
                        "address": "NH-44, Shadnagar - 509216",
                        "distanceEstimateKm": 25,
                        "mapUrl": "https://maps.google.com/?q=Shadnagar+Market+Yard",
                        "phone": "08548-252130",
                        "operatingHours": "06:00 AM - 05:00 PM",
                        "currentQueueVehicles": 12,
                        "currentWaitMins": 22,
                        "congestion": "green",
                        "crops": {
                              "cotton": {
                                    "price": 7980,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 3800,
                                    "mspComparison": "+6.1% above MSP"
                              },
                              "tomato": {
                                    "price": 2620,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 4500,
                                    "mspComparison": "Market Benchmark"
                              }
                        },
                        "handlingFeePerQtl": 18
                  }
            ]
      },
      "hyderabad": {
            "id": "hyderabad",
            "name": {
                  "en": "Hyderabad",
                  "te": "హైదరాబాద్",
                  "hi": "हैदराबाद"
            },
            "markets": [
                  {
                        "id": "hyd_bowenpally",
                        "name": "Bowenpally Agricultural Market Yard",
                        "nameTe": "బోయిన్‌పల్లి వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Perishable Mega Terminal",
                        "address": "Bowenpally, Secunderabad - 500011",
                        "distanceEstimateKm": 8,
                        "mapUrl": "https://maps.google.com/?q=Bowenpally+Market+Yard",
                        "phone": "040-27751240",
                        "operatingHours": "04:00 AM - 06:00 PM",
                        "currentQueueVehicles": 30,
                        "currentWaitMins": 45,
                        "congestion": "red",
                        "crops": {
                              "tomato": {
                                    "price": 2690,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 18000,
                                    "mspComparison": "Top Metro Benchmark"
                              },
                              "onion": {
                                    "price": 2840,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 22000,
                                    "mspComparison": "+58% above benchmark"
                              }
                        },
                        "handlingFeePerQtl": 20
                  }
            ]
      },
      "siddipet": {
            "id": "siddipet",
            "name": {
                  "en": "Siddipet",
                  "te": "సిద్దిపేట",
                  "hi": "सिद्दिपेट"
            },
            "markets": [
                  {
                        "id": "sdp_siddipet_amc",
                        "name": "Siddipet Model APMC Yard",
                        "nameTe": "సిద్దిపేట మోడల్ వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Modern Agricultural Terminal",
                        "address": "Rajiv Rahadari, Siddipet - 502103",
                        "distanceEstimateKm": 12,
                        "mapUrl": "https://maps.google.com/?q=Siddipet+Market+Yard",
                        "phone": "08457-224150",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 8,
                        "currentWaitMins": 16,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2515,
                                    "demand": "high",
                                    "arrivalsTodayQtl": 9400,
                                    "mspComparison": "+8.4% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      },
      "suryapet": {
            "id": "suryapet",
            "name": {
                  "en": "Suryapet",
                  "te": "సూర్యాపేట",
                  "hi": "सूर्यापेट"
            },
            "markets": [
                  {
                        "id": "spt_suryapet_amc",
                        "name": "Suryapet APMC Market Yard",
                        "nameTe": "సూర్యాపేట వ్యవసాయ మార్కెట్ యార్డ్",
                        "type": "Govt Grain Terminal",
                        "address": "NH-65, Suryapet - 508213",
                        "distanceEstimateKm": 10,
                        "mapUrl": "https://maps.google.com/?q=Suryapet+Market+Yard",
                        "phone": "08684-222340",
                        "operatingHours": "06:30 AM - 04:30 PM",
                        "currentQueueVehicles": 10,
                        "currentWaitMins": 18,
                        "congestion": "green",
                        "crops": {
                              "paddy": {
                                    "price": 2520,
                                    "demand": "very_high",
                                    "arrivalsTodayQtl": 12800,
                                    "mspComparison": "+8.6% above MSP"
                              }
                        },
                        "handlingFeePerQtl": 16
                  }
            ]
      }
,
      "bhadradri_kothagudem": {
      "id": "bhadradri_kothagudem",
      "name": {
            "en": "Bhadradri Kothagudem",
            "te": "భద్రాద్రి కొత్తగూడెం",
            "hi": "भद्राद्री कोठागुडेम"
      },
      "markets": [
            {
                  "id": "kothagudem_amc",
                  "name": "Kothagudem APMC Market Yard",
                  "nameTe": "కొత్తగూడెం వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Bhadradri Kothagudem - 507101",
                  "distanceEstimateKm": 14,
                  "mapUrl": "https://maps.google.com/?q=Kothagudem+APMC",
                  "phone": "08744-242150",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 12,
                  "currentWaitMins": 22,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2510,
                              "demand": "high",
                              "arrivalsTodayQtl": 7400,
                              "mspComparison": "+8.2% above MSP"
                        },
                        "chilli": {
                              "price": 21800,
                              "demand": "high",
                              "arrivalsTodayQtl": 3600,
                              "mspComparison": "+32% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "jagtial": {
      "id": "jagtial",
      "name": {
            "en": "Jagtial",
            "te": "జగిత్యాల",
            "hi": "जगतीयाल"
      },
      "markets": [
            {
                  "id": "jagtial_amc",
                  "name": "Jagtial APMC Yard (Major Mango & Paddy Market)",
                  "nameTe": "జగిత్యాల వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Jagtial - 505327",
                  "distanceEstimateKm": 9,
                  "mapUrl": "https://maps.google.com/?q=Jagtial+APMC",
                  "phone": "08724-222340",
                  "operatingHours": "06:00 AM - 04:00 PM",
                  "currentQueueVehicles": 16,
                  "currentWaitMins": 28,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2490,
                              "demand": "high",
                              "arrivalsTodayQtl": 8900,
                              "mspComparison": "+7.3% above MSP"
                        },
                        "turmeric": {
                              "price": 14800,
                              "demand": "high",
                              "arrivalsTodayQtl": 2100,
                              "mspComparison": "+25% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "jangaon": {
      "id": "jangaon",
      "name": {
            "en": "Jangaon",
            "te": "జనగాం",
            "hi": "जनगांव"
      },
      "markets": [
            {
                  "id": "jangaon_amc",
                  "name": "Jangaon Agricultural Market Yard",
                  "nameTe": "జనగాం వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Station Road, Jangaon - 506167",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Jangaon+APMC",
                  "phone": "08716-222045",
                  "operatingHours": "06:30 AM - 04:00 PM",
                  "currentQueueVehicles": 14,
                  "currentWaitMins": 25,
                  "congestion": "green",
                  "crops": {
                        "cotton": {
                              "price": 7980,
                              "demand": "high",
                              "arrivalsTodayQtl": 4100,
                              "mspComparison": "+6.1% above MSP"
                        },
                        "paddy": {
                              "price": 2470,
                              "demand": "medium",
                              "arrivalsTodayQtl": 5800,
                              "mspComparison": "+6.5% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "jayashankar_bhupalpally": {
      "id": "jayashankar_bhupalpally",
      "name": {
            "en": "Jayashankar Bhupalpally",
            "te": "జయశంకర్ భూపాలపల్లి",
            "hi": "जयशंकर भूपालपल्ली"
      },
      "markets": [
            {
                  "id": "bhupalpally_amc",
                  "name": "Bhupalpally APMC Market Yard",
                  "nameTe": "భూపాలపల్లి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Procurement Center",
                  "address": "Bhupalpally - 506169",
                  "distanceEstimateKm": 11,
                  "mapUrl": "https://maps.google.com/?q=Bhupalpally+APMC",
                  "phone": "08713-277120",
                  "operatingHours": "07:00 AM - 04:00 PM",
                  "currentQueueVehicles": 10,
                  "currentWaitMins": 18,
                  "congestion": "green",
                  "crops": {
                        "chilli": {
                              "price": 21900,
                              "demand": "high",
                              "arrivalsTodayQtl": 3100,
                              "mspComparison": "+32% above benchmark"
                        },
                        "cotton": {
                              "price": 7920,
                              "demand": "high",
                              "arrivalsTodayQtl": 2900,
                              "mspComparison": "+5.3% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 16
            }
      ]
},
      "jogulamba_gadwal": {
      "id": "jogulamba_gadwal",
      "name": {
            "en": "Jogulamba Gadwal",
            "te": "జోగులాంబ గద్వాల",
            "hi": "जोगुलाम्बा गडवाल"
      },
      "markets": [
            {
                  "id": "gadwal_amc",
                  "name": "Gadwal APMC Cotton & Groundnut Yard",
                  "nameTe": "గద్వాల వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Gadwal - 509125",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Gadwal+APMC",
                  "phone": "08546-272030",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 18,
                  "currentWaitMins": 30,
                  "congestion": "amber",
                  "crops": {
                        "cotton": {
                              "price": 8050,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 9400,
                              "mspComparison": "+7.1% above MSP"
                        },
                        "groundnut": {
                              "price": 7100,
                              "demand": "high",
                              "arrivalsTodayQtl": 4200,
                              "mspComparison": "+4.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "kamareddy": {
      "id": "kamareddy",
      "name": {
            "en": "Kamareddy",
            "te": "కామారెడ్డి",
            "hi": "कामारेड्डी"
      },
      "markets": [
            {
                  "id": "kamareddy_amc",
                  "name": "Kamareddy APMC Yard (Soybean & Paddy)",
                  "nameTe": "కామారెడ్డి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "NH-44 Highway, Kamareddy - 503111",
                  "distanceEstimateKm": 6,
                  "mapUrl": "https://maps.google.com/?q=Kamareddy+APMC",
                  "phone": "08468-221230",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 15,
                  "currentWaitMins": 24,
                  "congestion": "green",
                  "crops": {
                        "soybean": {
                              "price": 4980,
                              "demand": "high",
                              "arrivalsTodayQtl": 5800,
                              "mspComparison": "+6.2% above MSP"
                        },
                        "paddy": {
                              "price": 2480,
                              "demand": "high",
                              "arrivalsTodayQtl": 6200,
                              "mspComparison": "+6.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "kumuram_bheem": {
      "id": "kumuram_bheem",
      "name": {
            "en": "Kumuram Bheem Asifabad",
            "te": "కొమరం భీమ్ ఆసిఫాబాద్",
            "hi": "कुमुरम भीम आसिफाबाद"
      },
      "markets": [
            {
                  "id": "asifabad_amc",
                  "name": "Asifabad APMC Cotton Yard",
                  "nameTe": "ఆసిఫాబాద్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Procurement Center",
                  "address": "Asifabad - 504293",
                  "distanceEstimateKm": 10,
                  "mapUrl": "https://maps.google.com/?q=Asifabad+APMC",
                  "phone": "08733-279140",
                  "operatingHours": "07:00 AM - 04:00 PM",
                  "currentQueueVehicles": 9,
                  "currentWaitMins": 16,
                  "congestion": "green",
                  "crops": {
                        "cotton": {
                              "price": 7950,
                              "demand": "high",
                              "arrivalsTodayQtl": 3900,
                              "mspComparison": "+5.7% above MSP"
                        },
                        "soybean": {
                              "price": 4920,
                              "demand": "medium",
                              "arrivalsTodayQtl": 2100,
                              "mspComparison": "+4.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 16
            }
      ]
},
      "mahabubabad": {
      "id": "mahabubabad",
      "name": {
            "en": "Mahabubabad",
            "te": "మహబూబాబాద్",
            "hi": "महबूबाबाद"
      },
      "markets": [
            {
                  "id": "mahabubabad_amc",
                  "name": "Mahabubabad APMC Chilli & Paddy Yard",
                  "nameTe": "మహబూబాబాద్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Mahabubabad - 506101",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Mahabubabad+APMC",
                  "phone": "08719-242050",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 15,
                  "currentWaitMins": 25,
                  "congestion": "green",
                  "crops": {
                        "chilli": {
                              "price": 22050,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 8400,
                              "mspComparison": "+33% above benchmark"
                        },
                        "cotton": {
                              "price": 7990,
                              "demand": "high",
                              "arrivalsTodayQtl": 5200,
                              "mspComparison": "+6.3% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "mancherial": {
      "id": "mancherial",
      "name": {
            "en": "Mancherial",
            "te": "మంచిర్యాల",
            "hi": "मंचेरियल"
      },
      "markets": [
            {
                  "id": "mancherial_amc",
                  "name": "Mancherial APMC Market Yard",
                  "nameTe": "మంచిర్యాల వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Bellampalli Road, Mancherial - 504208",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Mancherial+APMC",
                  "phone": "08736-252180",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 13,
                  "currentWaitMins": 20,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2485,
                              "demand": "high",
                              "arrivalsTodayQtl": 7100,
                              "mspComparison": "+7.1% above MSP"
                        },
                        "cotton": {
                              "price": 7960,
                              "demand": "high",
                              "arrivalsTodayQtl": 3600,
                              "mspComparison": "+5.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "medak": {
      "id": "medak",
      "name": {
            "en": "Medak",
            "te": "మెదక్",
            "hi": "मेदक"
      },
      "markets": [
            {
                  "id": "medak_amc",
                  "name": "Medak Agricultural Market Yard",
                  "nameTe": "మెదక్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Medak - 502110",
                  "distanceEstimateKm": 6,
                  "mapUrl": "https://maps.google.com/?q=Medak+APMC",
                  "phone": "08452-222410",
                  "operatingHours": "07:00 AM - 04:30 PM",
                  "currentQueueVehicles": 11,
                  "currentWaitMins": 19,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2475,
                              "demand": "high",
                              "arrivalsTodayQtl": 6400,
                              "mspComparison": "+6.7% above MSP"
                        },
                        "maize": {
                              "price": 2340,
                              "demand": "medium",
                              "arrivalsTodayQtl": 3100,
                              "mspComparison": "+5.2% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "medchal_malkajgiri": {
      "id": "medchal_malkajgiri",
      "name": {
            "en": "Medchal Malkajgiri",
            "te": "మేడ్చల్ మల్కాజిగిరి",
            "hi": "मेडचल मलकाजगिरी"
      },
      "markets": [
            {
                  "id": "medchal_bowenpally",
                  "name": "Bowenpally / Medchal APMC Wholesale Terminal",
                  "nameTe": "బోయిన్‌పల్లి / మేడ్చల్ వ్యవసాయ హోల్‌సేల్ మార్కెట్",
                  "type": "Principal APMC Yard",
                  "address": "Bowenpally, Secunderabad - 500011",
                  "distanceEstimateKm": 14,
                  "mapUrl": "https://maps.google.com/?q=Bowenpally+Market",
                  "phone": "040-27752100",
                  "operatingHours": "04:30 AM - 06:00 PM",
                  "currentQueueVehicles": 26,
                  "currentWaitMins": 42,
                  "congestion": "amber",
                  "crops": {
                        "tomato": {
                              "price": 3450,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 8900,
                              "mspComparison": "+40% market spread"
                        },
                        "onion": {
                              "price": 2850,
                              "demand": "high",
                              "arrivalsTodayQtl": 9400,
                              "mspComparison": "+22% market spread"
                        },
                        "maize": {
                              "price": 2380,
                              "demand": "high",
                              "arrivalsTodayQtl": 3200,
                              "mspComparison": "+6.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 22
            }
      ]
},
      "mulugu": {
      "id": "mulugu",
      "name": {
            "en": "Mulugu",
            "te": "ములుగు",
            "hi": "मुलुगु"
      },
      "markets": [
            {
                  "id": "mulugu_amc",
                  "name": "Mulugu Agricultural Market Yard",
                  "nameTe": "ములుగు వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Procurement Center",
                  "address": "Mulugu - 506343",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Mulugu+APMC",
                  "phone": "08715-271030",
                  "operatingHours": "07:00 AM - 04:00 PM",
                  "currentQueueVehicles": 8,
                  "currentWaitMins": 15,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2490,
                              "demand": "high",
                              "arrivalsTodayQtl": 4100,
                              "mspComparison": "+7.3% above MSP"
                        },
                        "chilli": {
                              "price": 21700,
                              "demand": "medium",
                              "arrivalsTodayQtl": 1800,
                              "mspComparison": "+31% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 16
            }
      ]
},
      "nagarkurnool": {
      "id": "nagarkurnool",
      "name": {
            "en": "Nagarkurnool",
            "te": "నాగర్‌కర్నూల్",
            "hi": "नागरकुरनूल"
      },
      "markets": [
            {
                  "id": "nagarkurnool_amc",
                  "name": "Nagarkurnool APMC Groundnut & Cotton Yard",
                  "nameTe": "నాగర్‌కర్నూల్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Nagarkurnool - 509209",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Nagarkurnool+APMC",
                  "phone": "08540-230110",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 14,
                  "currentWaitMins": 23,
                  "congestion": "green",
                  "crops": {
                        "groundnut": {
                              "price": 7180,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 5900,
                              "mspComparison": "+6.1% above MSP"
                        },
                        "cotton": {
                              "price": 7970,
                              "demand": "high",
                              "arrivalsTodayQtl": 4200,
                              "mspComparison": "+6.0% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "narayanpet": {
      "id": "narayanpet",
      "name": {
            "en": "Narayanpet",
            "te": "నారాయణపేట",
            "hi": "नारायणपेट"
      },
      "markets": [
            {
                  "id": "narayanpet_amc",
                  "name": "Narayanpet Agricultural Market Yard",
                  "nameTe": "నారాయణపేట వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Narayanpet - 509210",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Narayanpet+APMC",
                  "phone": "08506-282030",
                  "operatingHours": "07:00 AM - 04:00 PM",
                  "currentQueueVehicles": 12,
                  "currentWaitMins": 20,
                  "congestion": "green",
                  "crops": {
                        "cotton": {
                              "price": 8010,
                              "demand": "high",
                              "arrivalsTodayQtl": 4800,
                              "mspComparison": "+6.5% above MSP"
                        },
                        "redgram": {
                              "price": 7650,
                              "demand": "high",
                              "arrivalsTodayQtl": 2600,
                              "mspComparison": "+8.2% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "nirmal": {
      "id": "nirmal",
      "name": {
            "en": "Nirmal",
            "te": "నిర్మల్",
            "hi": "निर्मल"
      },
      "markets": [
            {
                  "id": "nirmal_amc",
                  "name": "Nirmal APMC Market Yard",
                  "nameTe": "నిర్మల్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Mancherial Road, Nirmal - 504106",
                  "distanceEstimateKm": 6,
                  "mapUrl": "https://maps.google.com/?q=Nirmal+APMC",
                  "phone": "08734-242220",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 11,
                  "currentWaitMins": 19,
                  "congestion": "green",
                  "crops": {
                        "soybean": {
                              "price": 4950,
                              "demand": "high",
                              "arrivalsTodayQtl": 3800,
                              "mspComparison": "+5.5% above MSP"
                        },
                        "cotton": {
                              "price": 7940,
                              "demand": "high",
                              "arrivalsTodayQtl": 3200,
                              "mspComparison": "+5.6% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "peddapalli": {
      "id": "peddapalli",
      "name": {
            "en": "Peddapalli",
            "te": "పెద్దపల్లి",
            "hi": "पेद्दापल्ली"
      },
      "markets": [
            {
                  "id": "peddapalli_amc",
                  "name": "Peddapalli APMC Paddy Yard",
                  "nameTe": "పెద్దపల్లి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Peddapalli - 505172",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Peddapalli+APMC",
                  "phone": "08728-222140",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 14,
                  "currentWaitMins": 24,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2495,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 9800,
                              "mspComparison": "+7.5% above MSP"
                        },
                        "cotton": {
                              "price": 7960,
                              "demand": "high",
                              "arrivalsTodayQtl": 2900,
                              "mspComparison": "+5.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "rajanna_sircilla": {
      "id": "rajanna_sircilla",
      "name": {
            "en": "Rajanna Sircilla",
            "te": "రాజన్న సిరిసిల్ల",
            "hi": "राजन्ना सिरसिल्ला"
      },
      "markets": [
            {
                  "id": "sircilla_amc",
                  "name": "Sircilla Agricultural Market Yard",
                  "nameTe": "సిరిసిల్ల వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Vemulawada Road, Sircilla - 505301",
                  "distanceEstimateKm": 6,
                  "mapUrl": "https://maps.google.com/?q=Sircilla+APMC",
                  "phone": "08723-234120",
                  "operatingHours": "06:30 AM - 04:00 PM",
                  "currentQueueVehicles": 12,
                  "currentWaitMins": 21,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2485,
                              "demand": "high",
                              "arrivalsTodayQtl": 6700,
                              "mspComparison": "+7.1% above MSP"
                        },
                        "cotton": {
                              "price": 7950,
                              "demand": "medium",
                              "arrivalsTodayQtl": 2700,
                              "mspComparison": "+5.7% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "sangareddy": {
      "id": "sangareddy",
      "name": {
            "en": "Sangareddy",
            "te": "సంగారెడ్డి",
            "hi": "संगारेड्डी"
      },
      "markets": [
            {
                  "id": "sadasivpet_amc",
                  "name": "Sadasivpet / Sangareddy APMC Yard",
                  "nameTe": "సదాశివపేట / సంగారెడ్డి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Sadasivpet, Sangareddy - 502291",
                  "distanceEstimateKm": 12,
                  "mapUrl": "https://maps.google.com/?q=Sadasivpet+APMC",
                  "phone": "08455-251200",
                  "operatingHours": "06:00 AM - 04:30 PM",
                  "currentQueueVehicles": 17,
                  "currentWaitMins": 30,
                  "congestion": "amber",
                  "crops": {
                        "cotton": {
                              "price": 8020,
                              "demand": "high",
                              "arrivalsTodayQtl": 5600,
                              "mspComparison": "+6.7% above MSP"
                        },
                        "soybean": {
                              "price": 4970,
                              "demand": "high",
                              "arrivalsTodayQtl": 4100,
                              "mspComparison": "+5.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "vikarabad": {
      "id": "vikarabad",
      "name": {
            "en": "Vikarabad",
            "te": "వికారాబాద్",
            "hi": "विकाराबाद"
      },
      "markets": [
            {
                  "id": "tandur_amc",
                  "name": "Tandur APMC Yard (World Famous GI Tag Redgram / Dal)",
                  "nameTe": "తాండూరు వ్యవసాయ మార్కెట్ యార్డ్ (ప్రసిద్ధ కంది పప్పు GI ట్యాగ్)",
                  "type": "Principal APMC Yard",
                  "address": "Tandur, Vikarabad - 501141",
                  "distanceEstimateKm": 14,
                  "mapUrl": "https://maps.google.com/?q=Tandur+APMC",
                  "phone": "08411-272020",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 21,
                  "currentWaitMins": 36,
                  "congestion": "amber",
                  "crops": {
                        "redgram": {
                              "price": 7850,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 9200,
                              "mspComparison": "+11.1% above MSP"
                        },
                        "cotton": {
                              "price": 7980,
                              "demand": "high",
                              "arrivalsTodayQtl": 3800,
                              "mspComparison": "+6.1% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "wanaparthy": {
      "id": "wanaparthy",
      "name": {
            "en": "Wanaparthy",
            "te": "వనపర్తి",
            "hi": "वनपर्थी"
      },
      "markets": [
            {
                  "id": "wanaparthy_amc",
                  "name": "Wanaparthy APMC Groundnut & Paddy Yard",
                  "nameTe": "వనపర్తి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Wanaparthy - 509103",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Wanaparthy+APMC",
                  "phone": "08543-220110",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 13,
                  "currentWaitMins": 22,
                  "congestion": "green",
                  "crops": {
                        "groundnut": {
                              "price": 7150,
                              "demand": "high",
                              "arrivalsTodayQtl": 4600,
                              "mspComparison": "+5.6% above MSP"
                        },
                        "paddy": {
                              "price": 2490,
                              "demand": "high",
                              "arrivalsTodayQtl": 5800,
                              "mspComparison": "+7.3% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "yadadri_bhuvanagiri": {
      "id": "yadadri_bhuvanagiri",
      "name": {
            "en": "Yadadri Bhuvanagiri",
            "te": "యాదాద్రి భువనగిరి",
            "hi": "यादाद्री भुवनगिरी"
      },
      "markets": [
            {
                  "id": "bhongir_amc",
                  "name": "Bhongir APMC Market Yard",
                  "nameTe": "భువనగిరి వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Bhongir - 508116",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Bhongir+APMC",
                  "phone": "08685-242220",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 16,
                  "currentWaitMins": 27,
                  "congestion": "green",
                  "crops": {
                        "paddy": {
                              "price": 2480,
                              "demand": "high",
                              "arrivalsTodayQtl": 6900,
                              "mspComparison": "+6.9% above MSP"
                        },
                        "cotton": {
                              "price": 7970,
                              "demand": "high",
                              "arrivalsTodayQtl": 3400,
                              "mspComparison": "+6.0% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "hanumakonda": {
      "id": "hanumakonda",
      "name": {
            "en": "Hanumakonda",
            "te": "హనుమకొండ",
            "hi": "हनुमकोंडा"
      },
      "markets": [
            {
                  "id": "hanamkonda_sub_mkt",
                  "name": "Hanamkonda Grain & Vegetable Sub-Market",
                  "nameTe": "హనుమకొండ సబ్ మార్కెట్ యార్డ్",
                  "type": "Sub-Market Yard",
                  "address": "Subedari, Hanamkonda - 506001",
                  "distanceEstimateKm": 5,
                  "mapUrl": "https://maps.google.com/?q=Hanamkonda+Market",
                  "phone": "0870-2578910",
                  "operatingHours": "06:00 AM - 03:30 PM",
                  "currentQueueVehicles": 12,
                  "currentWaitMins": 20,
                  "congestion": "green",
                  "crops": {
                        "maize": {
                              "price": 2370,
                              "demand": "high",
                              "arrivalsTodayQtl": 3800,
                              "mspComparison": "+6.5% above MSP"
                        },
                        "paddy": {
                              "price": 2490,
                              "demand": "high",
                              "arrivalsTodayQtl": 5200,
                              "mspComparison": "+7.3% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 16
            }
      ]
}
    }
  },

  // 3. Karnataka
  karnataka: {
    id: 'karnataka',
    name: { en: 'Karnataka', te: 'కర్ణాటక', hi: 'कर्नाटक', ta: 'கர்நாடகா', kn: 'ಕರ್ನಾಟಕ' },
    districts: {
      ballari: {
        id: 'ballari',
        name: { en: 'Ballari / Vijayanagara', te: 'బళ్లారి', hi: 'बल्लारी' },
        markets: [
          {
            id: 'blr_central',
            name: 'Ballari APMC Cotton & Chilli Yard',
            nameTe: 'బళ్లారి ఏపీఎంసీ కాటన్ & మిర్చి యార్డ్',
            type: 'Principal APMC Yard',
            address: 'Anantapur Road, Ballari - 583101',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Ballari+APMC',
            phone: '08392-273111',
            operatingHours: '07:00 AM - 05:00 PM',
            currentQueueVehicles: 17,
            currentWaitMins: 34,
            congestion: 'amber',
            crops: {
              cotton: { price: 8080, demand: 'very_high', arrivalsTodayQtl: 12000, mspComparison: '+7.4% above MSP' },
              chilli: { price: 21800, demand: 'very_high', arrivalsTodayQtl: 9500, mspComparison: '+32% above benchmark' }
            },
            handlingFeePerQtl: 20
          }
        ]
      },
      kolar: {
        id: 'kolar',
        name: { en: 'Kolar', te: 'కోలార్', hi: 'कोलार' },
        markets: [
          {
            id: 'klr_tomato',
            name: 'Kolar APMC Tomato Market Yard',
            nameTe: 'కోలార్ టమోటా మార్కెట్ (ఆసియా అతిపెద్ద మండీ)',
            type: 'Asia Major Tomato Market',
            address: 'NH-75, Kolar - 563101',
            distanceEstimateKm: 15,
            mapUrl: 'https://maps.google.com/?q=Kolar+APMC',
            phone: '08152-222889',
            operatingHours: '05:00 AM - 04:00 PM',
            currentQueueVehicles: 35,
            currentWaitMins: 70,
            congestion: 'red',
            crops: {
              tomato: { price: 2450, demand: 'very_high', arrivalsTodayQtl: 55000, mspComparison: '+104% above baseline' }
            },
            handlingFeePerQtl: 22
          }
        ]
      },
      haveri: {
        id: 'haveri',
        name: { en: 'Haveri / Byadgi', te: 'హవేరి / బ్యాడగి', hi: 'हावेरी' },
        markets: [
          {
            id: 'byadgi_apmc',
            name: 'Byadgi APMC Yard (World Famous Chilli Market)',
            nameTe: 'బ్యాడగి మార్కెట్ యార్డ్ (ప్రముఖ రంగు మిర్చి మండీ)',
            type: 'National Benchmark Yard',
            address: 'Main Road, Byadgi, Haveri - 581106',
            distanceEstimateKm: 20,
            mapUrl: 'https://maps.google.com/?q=Byadgi+APMC',
            phone: '08375-228220',
            operatingHours: '06:00 AM - 04:00 PM',
            currentQueueVehicles: 28,
            currentWaitMins: 50,
            congestion: 'amber',
            crops: {
              chilli: { price: 24500, demand: 'very_high', arrivalsTodayQtl: 32000, mspComparison: '+48% above benchmark' }
            },
            handlingFeePerQtl: 22
          }
        ]
      },
      davanagere: {
        id: 'davanagere',
        name: { en: 'Davanagere', te: 'దావణగెరె', hi: 'दावणगेरे' },
        markets: [
          {
            id: 'davangere_apmc',
            name: 'Davanagere APMC Market (Maize & Paddy)',
            nameTe: 'దావణగెరె ఏపీఎంసీ మార్కెట్',
            type: 'Principal Yard',
            address: 'PB Road, Davanagere - 577002',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Davanagere+APMC',
            phone: '08192-231110',
            operatingHours: '07:00 AM - 05:00 PM',
            currentQueueVehicles: 18,
            currentWaitMins: 30,
            congestion: 'green',
            crops: {
              maize: { price: 2420, demand: 'very_high', arrivalsTodayQtl: 28000, mspComparison: '+8.7% above MSP' },
              paddy: { price: 2490, demand: 'high', arrivalsTodayQtl: 14000, mspComparison: '+7.3% above MSP' }
            },
            handlingFeePerQtl: 19
          }
        ]
      }
    ,
      "belagavi": {
      "id": "belagavi",
      "name": {
            "en": "Belagavi",
            "te": "బెళగావి",
            "hi": "बेलगावी",
            "kn": "ಬೆಳಗಾವಿ"
      },
      "markets": [
            {
                  "id": "belagavi_apmc",
                  "name": "Belagavi APMC Central Yard (Major Sugar, Maize & Soybean)",
                  "nameTe": "బెళగావి ఏపీఎంసీ సెంట్రల్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Khasbag, Belagavi - 590003",
                  "distanceEstimateKm": 11,
                  "mapUrl": "https://maps.google.com/?q=Belagavi+APMC",
                  "phone": "0831-2481020",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 22,
                  "currentWaitMins": 38,
                  "congestion": "amber",
                  "crops": {
                        "soybean": {
                              "price": 5020,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 7900,
                              "mspComparison": "+7.0% above MSP"
                        },
                        "maize": {
                              "price": 2360,
                              "demand": "high",
                              "arrivalsTodayQtl": 6200,
                              "mspComparison": "+6.1% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "bengaluru_rural": {
      "id": "bengaluru_rural",
      "name": {
            "en": "Bengaluru Rural",
            "te": "బెంగళూరు గ్రామీణ",
            "hi": "बेंगलुरु ग्रामीण",
            "kn": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ"
      },
      "markets": [
            {
                  "id": "doddaballapura_apmc",
                  "name": "Doddaballapura APMC Market Yard",
                  "nameTe": "దొడ్డబల్లాపుర వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Doddaballapura - 561203",
                  "distanceEstimateKm": 15,
                  "mapUrl": "https://maps.google.com/?q=Doddaballapura+APMC",
                  "phone": "080-27622310",
                  "operatingHours": "06:00 AM - 04:30 PM",
                  "currentQueueVehicles": 15,
                  "currentWaitMins": 25,
                  "congestion": "green",
                  "crops": {
                        "tomato": {
                              "price": 3200,
                              "demand": "high",
                              "arrivalsTodayQtl": 7400,
                              "mspComparison": "+30% market spread"
                        },
                        "maize": {
                              "price": 2340,
                              "demand": "medium",
                              "arrivalsTodayQtl": 3100,
                              "mspComparison": "+5.2% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "chikkaballapur": {
      "id": "chikkaballapur",
      "name": {
            "en": "Chikkaballapur",
            "te": "చిక్కబళ్లాపూర్",
            "hi": "चिक्कबल्लापुर",
            "kn": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ"
      },
      "markets": [
            {
                  "id": "cbp_tomato_mkt",
                  "name": "Chikkaballapur APMC Tomato & Veg Terminal",
                  "nameTe": "చిక్కబళ్లాపూర్ టమాటా & కూరగాయల మార్కెట్",
                  "type": "Principal APMC Yard",
                  "address": "NH-44 Highway, Chikkaballapur - 562101",
                  "distanceEstimateKm": 9,
                  "mapUrl": "https://maps.google.com/?q=Chikkaballapur+APMC",
                  "phone": "08156-272440",
                  "operatingHours": "05:00 AM - 04:00 PM",
                  "currentQueueVehicles": 25,
                  "currentWaitMins": 42,
                  "congestion": "red",
                  "crops": {
                        "tomato": {
                              "price": 3520,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 14200,
                              "mspComparison": "+45% market benchmark"
                        },
                        "onion": {
                              "price": 2780,
                              "demand": "high",
                              "arrivalsTodayQtl": 4100,
                              "mspComparison": "+18% market spread"
                        }
                  },
                  "handlingFeePerQtl": 22
            }
      ]
},
      "chitradurga": {
      "id": "chitradurga",
      "name": {
            "en": "Chitradurga",
            "te": "చిత్రదుర్గ",
            "hi": "चित्रदुर्ग",
            "kn": "ಚಿತ್ರದುರ್ಗ"
      },
      "markets": [
            {
                  "id": "chitradurga_apmc",
                  "name": "Chitradurga APMC Groundnut & Cotton Yard",
                  "nameTe": "చిత్రదుర్గ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Chitradurga - 577501",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Chitradurga+APMC",
                  "phone": "08194-222830",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 16,
                  "currentWaitMins": 26,
                  "congestion": "green",
                  "crops": {
                        "groundnut": {
                              "price": 7250,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 6100,
                              "mspComparison": "+7.1% above MSP"
                        },
                        "cotton": {
                              "price": 7980,
                              "demand": "high",
                              "arrivalsTodayQtl": 4800,
                              "mspComparison": "+6.1% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "dharwad": {
      "id": "dharwad",
      "name": {
            "en": "Dharwad / Hubballi",
            "te": "ధార్వాడ / హుబ్బళ్ళి",
            "hi": "धारवाड़ / हुबली",
            "kn": "ಧಾರವಾಡ / ಹುಬ್ಬಳ್ಳಿ"
      },
      "markets": [
            {
                  "id": "hubballi_apmc",
                  "name": "Hubballi Amaragol APMC Yard (Asia's Top Chilli & Onion Hub)",
                  "nameTe": "హుబ్బళ్ళి అమరగోళ్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Amaragol, Hubballi - 580025",
                  "distanceEstimateKm": 10,
                  "mapUrl": "https://maps.google.com/?q=Amaragol+APMC+Hubballi",
                  "phone": "0836-2223800",
                  "operatingHours": "06:00 AM - 05:30 PM",
                  "currentQueueVehicles": 28,
                  "currentWaitMins": 48,
                  "congestion": "amber",
                  "crops": {
                        "chilli": {
                              "price": 22600,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 18900,
                              "mspComparison": "+37% above benchmark"
                        },
                        "onion": {
                              "price": 2820,
                              "demand": "high",
                              "arrivalsTodayQtl": 9800,
                              "mspComparison": "+20% market spread"
                        },
                        "cotton": {
                              "price": 8040,
                              "demand": "high",
                              "arrivalsTodayQtl": 5400,
                              "mspComparison": "+6.9% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "kalaburagi": {
      "id": "kalaburagi",
      "name": {
            "en": "Kalaburagi (Gulbarga)",
            "te": "కలబురగి (గుల్బర్గా)",
            "hi": "कलबुर्गी (गुलबर्गा)",
            "kn": "ಕಲಬುರಗಿ"
      },
      "markets": [
            {
                  "id": "kalaburagi_apmc",
                  "name": "Kalaburagi APMC Redgram / Toor Bowl Yard",
                  "nameTe": "కలబురగి వ్యవసాయ మార్కెట్ యార్డ్ (కంది పప్పు రాజధాని)",
                  "type": "Principal APMC Yard",
                  "address": "Nehru Gunj, Kalaburagi - 585104",
                  "distanceEstimateKm": 9,
                  "mapUrl": "https://maps.google.com/?q=Kalaburagi+APMC",
                  "phone": "08472-221540",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 24,
                  "currentWaitMins": 40,
                  "congestion": "amber",
                  "crops": {
                        "redgram": {
                              "price": 7920,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 15400,
                              "mspComparison": "+12.1% above MSP"
                        },
                        "soybean": {
                              "price": 4980,
                              "demand": "high",
                              "arrivalsTodayQtl": 4200,
                              "mspComparison": "+6.2% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "mysuru": {
      "id": "mysuru",
      "name": {
            "en": "Mysuru",
            "te": "మైసూరు",
            "hi": "मैसूर",
            "kn": "ಮೈಸೂರು"
      },
      "markets": [
            {
                  "id": "mysuru_bandipalya",
                  "name": "Bandipalya APMC Mega Yard Mysuru",
                  "nameTe": "బండిపాళ్య వ్యవసాయ మార్కెట్ యార్డ్ మైసూరు",
                  "type": "Principal APMC Yard",
                  "address": "Bandipalya, Nanjangud Road, Mysuru - 570025",
                  "distanceEstimateKm": 12,
                  "mapUrl": "https://maps.google.com/?q=Bandipalya+APMC",
                  "phone": "0821-2480330",
                  "operatingHours": "05:30 AM - 05:00 PM",
                  "currentQueueVehicles": 20,
                  "currentWaitMins": 32,
                  "congestion": "amber",
                  "crops": {
                        "paddy": {
                              "price": 2520,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 8600,
                              "mspComparison": "+8.6% above MSP"
                        },
                        "tomato": {
                              "price": 3150,
                              "demand": "high",
                              "arrivalsTodayQtl": 5900,
                              "mspComparison": "+28% market spread"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "raichur": {
      "id": "raichur",
      "name": {
            "en": "Raichur",
            "te": "రాయచూరు",
            "hi": "रायचूर",
            "kn": "ರಾಯಚೂರು"
      },
      "markets": [
            {
                  "id": "raichur_apmc",
                  "name": "Raichur APMC Cotton & Sona Masoori Paddy Yard",
                  "nameTe": "రాయచూరు వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Raichur - 584102",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Raichur+APMC",
                  "phone": "08532-230140",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 21,
                  "currentWaitMins": 36,
                  "congestion": "amber",
                  "crops": {
                        "cotton": {
                              "price": 8080,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 11200,
                              "mspComparison": "+7.5% above MSP"
                        },
                        "paddy": {
                              "price": 2540,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 14600,
                              "mspComparison": "+9.5% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
}
    }
  },

  // 4. Tamil Nadu
  tamil_nadu: {
    id: 'tamil_nadu',
    name: { en: 'Tamil Nadu', te: 'తమిళనాడు', hi: 'तमिलनाडु', ta: 'தமிழ்நாடு', kn: 'ತಮಿಳುನಾಡು' },
    districts: {
      erode: {
        id: 'erode',
        name: { en: 'Erode', te: 'ఈరోడ్', hi: 'इरोड' },
        markets: [
          {
            id: 'erd_turmeric',
            name: 'Erode Regulated Market (Yellow City Turmeric Hub)',
            nameTe: 'ఈరోడ్ పసుపు నియంత్రిత మార్కెట్',
            type: 'National Turmeric Center',
            address: 'Semmampalayam, Perundurai Road, Erode - 638011',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Erode+Turmeric+Market',
            phone: '0424-2221230',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 20,
            currentWaitMins: 40,
            congestion: 'amber',
            crops: {
              turmeric: { price: 16400, demand: 'very_high', arrivalsTodayQtl: 14000, mspComparison: '+67% above benchmark' }
            },
            handlingFeePerQtl: 20
          }
        ]
      },
      coimbatore: {
        id: 'coimbatore',
        name: { en: 'Coimbatore', te: 'కోయంబత్తూరు', hi: 'कोयंबटूर' },
        markets: [
          {
            id: 'cbe_market',
            name: 'Coimbatore Agricultural Wholesale Market',
            nameTe: 'కోయంబత్తూరు వ్యవసాయ టోకు మార్కెట్',
            type: 'Principal Yard',
            address: 'Mettupalayam Road, Coimbatore - 641002',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Coimbatore+Agricultural+Market',
            phone: '0422-2431100',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 16,
            currentWaitMins: 30,
            congestion: 'green',
            crops: {
              tomato: { price: 2360, demand: 'high', arrivalsTodayQtl: 19000, mspComparison: '+96% above baseline' },
              cotton: { price: 8100, demand: 'high', arrivalsTodayQtl: 7200, mspComparison: '+7.7% above MSP' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    ,
      "tiruppur": {
      "id": "tiruppur",
      "name": {
            "en": "Tiruppur",
            "te": "తిరుప్పూర్",
            "hi": "तिरुपुर",
            "ta": "திருப்பூர்"
      },
      "markets": [
            {
                  "id": "kangeyam_apmc",
                  "name": "Kangeyam / Tiruppur APMC Yard",
                  "nameTe": "కాంగేయం / తిరుప్పూర్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Kangeyam, Tiruppur - 638701",
                  "distanceEstimateKm": 11,
                  "mapUrl": "https://maps.google.com/?q=Kangeyam+APMC",
                  "phone": "04257-220310",
                  "operatingHours": "06:30 AM - 04:30 PM",
                  "currentQueueVehicles": 16,
                  "currentWaitMins": 26,
                  "congestion": "green",
                  "crops": {
                        "groundnut": {
                              "price": 7220,
                              "demand": "high",
                              "arrivalsTodayQtl": 4900,
                              "mspComparison": "+6.6% above MSP"
                        },
                        "cotton": {
                              "price": 8020,
                              "demand": "high",
                              "arrivalsTodayQtl": 3800,
                              "mspComparison": "+6.7% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
},
      "salem": {
      "id": "salem",
      "name": {
            "en": "Salem",
            "te": "సేలం",
            "hi": "सेलम",
            "ta": "சேலம்"
      },
      "markets": [
            {
                  "id": "salem_apmc",
                  "name": "Shevapet Central APMC Yard Salem",
                  "nameTe": "షెవాపేట వ్యవసాయ మార్కెట్ యార్డ్ సేలం",
                  "type": "Principal APMC Yard",
                  "address": "Shevapet, Salem - 636002",
                  "distanceEstimateKm": 8,
                  "mapUrl": "https://maps.google.com/?q=Shevapet+APMC+Salem",
                  "phone": "0427-2212450",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 21,
                  "currentWaitMins": 34,
                  "congestion": "amber",
                  "crops": {
                        "turmeric": {
                              "price": 15400,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 8200,
                              "mspComparison": "+28% above benchmark"
                        },
                        "tomato": {
                              "price": 3250,
                              "demand": "high",
                              "arrivalsTodayQtl": 6100,
                              "mspComparison": "+32% market spread"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "madurai": {
      "id": "madurai",
      "name": {
            "en": "Madurai",
            "te": "మధురై",
            "hi": "मदुरै",
            "ta": "மதுரை"
      },
      "markets": [
            {
                  "id": "madurai_central",
                  "name": "Mattuthavani APMC Wholesale Central Market",
                  "nameTe": "మాట్టుతావణి హోల్‌సేల్ మార్కెట్ మధురై",
                  "type": "Principal APMC Yard",
                  "address": "Mattuthavani, Madurai - 625007",
                  "distanceEstimateKm": 10,
                  "mapUrl": "https://maps.google.com/?q=Mattuthavani+Market",
                  "phone": "0452-2581200",
                  "operatingHours": "05:00 AM - 05:30 PM",
                  "currentQueueVehicles": 24,
                  "currentWaitMins": 38,
                  "congestion": "amber",
                  "crops": {
                        "paddy": {
                              "price": 2510,
                              "demand": "high",
                              "arrivalsTodayQtl": 7200,
                              "mspComparison": "+8.2% above MSP"
                        },
                        "chilli": {
                              "price": 21900,
                              "demand": "high",
                              "arrivalsTodayQtl": 4100,
                              "mspComparison": "+32% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "dharmapuri": {
      "id": "dharmapuri",
      "name": {
            "en": "Dharmapuri",
            "te": "ధర్మపురి",
            "hi": "धर्मपुरी",
            "ta": "தருமபுரி"
      },
      "markets": [
            {
                  "id": "dharmapuri_apmc",
                  "name": "Dharmapuri APMC Tomato & Turmeric Yard",
                  "nameTe": "ధర్మపురి టమాటా & పసుపు మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Dharmapuri - 636701",
                  "distanceEstimateKm": 7,
                  "mapUrl": "https://maps.google.com/?q=Dharmapuri+APMC",
                  "phone": "04342-260140",
                  "operatingHours": "05:30 AM - 04:30 PM",
                  "currentQueueVehicles": 19,
                  "currentWaitMins": 30,
                  "congestion": "amber",
                  "crops": {
                        "tomato": {
                              "price": 3480,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 11800,
                              "mspComparison": "+42% market spread"
                        },
                        "turmeric": {
                              "price": 15100,
                              "demand": "high",
                              "arrivalsTodayQtl": 3600,
                              "mspComparison": "+26% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 18
            }
      ]
}
    }
  },

  // 5. Maharashtra
  maharashtra: {
    id: 'maharashtra',
    name: { en: 'Maharashtra', te: 'మహారాష్ట్ర', hi: 'महाराष्ट्र', ta: 'மகாராஷ்டிரா', kn: 'ಮಹಾರಾಷ್ಟ್ರ' },
    districts: {
      nashik: {
        id: 'nashik',
        name: { en: 'Nashik', te: 'నాసిక్', hi: 'नासिक' },
        markets: [
          {
            id: 'nsk_lasalgaon',
            name: 'Lasalgaon APMC (Asia’s Biggest Onion Market)',
            nameTe: 'లసల్‌గావ్ ఏపీఎంసీ (ఆసియాలో అతిపెద్ద ఉల్లి మార్కెట్)',
            type: 'Asia Benchmark Onion Market',
            address: 'Lasalgaon, Niphad Taluka, Nashik - 422306',
            distanceEstimateKm: 25,
            mapUrl: 'https://maps.google.com/?q=Lasalgaon+APMC',
            phone: '02550-266028',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 40,
            currentWaitMins: 85,
            congestion: 'red',
            crops: {
              onion: { price: 2950, demand: 'very_high', arrivalsTodayQtl: 62000, mspComparison: '+64% above baseline' },
              tomato: { price: 2320, demand: 'high', arrivalsTodayQtl: 24000, mspComparison: '+93% above baseline' }
            },
            handlingFeePerQtl: 22
          }
        ]
      },
      latur: {
        id: 'latur',
        name: { en: 'Latur', te: 'లాతూర్', hi: 'लातूर' },
        markets: [
          {
            id: 'latur_apmc',
            name: 'Latur APMC Market Yard (Soybean & Pulses Hub)',
            nameTe: 'లాతూర్ ఏపీఎంసీ మార్కెట్ (సోయా & కందులు)',
            type: 'Major Oilseed Yard',
            address: 'Barshi Road, Latur - 413512',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Latur+APMC',
            phone: '02382-243510',
            operatingHours: '06:30 AM - 05:00 PM',
            currentQueueVehicles: 26,
            currentWaitMins: 45,
            congestion: 'amber',
            crops: {
              soybean: { price: 5210, demand: 'very_high', arrivalsTodayQtl: 34000, mspComparison: '+6.5% above MSP' },
              redgram: { price: 9350, demand: 'very_high', arrivalsTodayQtl: 11000, mspComparison: '+23.8% above MSP' }
            },
            handlingFeePerQtl: 21
          }
        ]
      }
    ,
      "pune": {
      "id": "pune",
      "name": {
            "en": "Pune",
            "te": "పూణే",
            "hi": "पुणे",
            "mr": "पुणे"
      },
      "markets": [
            {
                  "id": "pune_gultekdi",
                  "name": "Gultekdi Market Yard APMC Pune (Western Hub)",
                  "nameTe": "గుల్టేక్డి మార్కెట్ యార్డ్ పూణే",
                  "type": "Principal APMC Yard",
                  "address": "Gultekdi, Pune - 411037",
                  "distanceEstimateKm": 16,
                  "mapUrl": "https://maps.google.com/?q=Gultekdi+Market+Yard",
                  "phone": "020-24266100",
                  "operatingHours": "05:00 AM - 06:00 PM",
                  "currentQueueVehicles": 32,
                  "currentWaitMins": 50,
                  "congestion": "red",
                  "crops": {
                        "onion": {
                              "price": 2890,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 17800,
                              "mspComparison": "+24% market spread"
                        },
                        "tomato": {
                              "price": 3380,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 11200,
                              "mspComparison": "+38% market benchmark"
                        },
                        "soybean": {
                              "price": 5040,
                              "demand": "high",
                              "arrivalsTodayQtl": 6400,
                              "mspComparison": "+7.5% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 24
            }
      ]
},
      "ahmednagar": {
      "id": "ahmednagar",
      "name": {
            "en": "Ahmednagar (Ahilyanagar)",
            "te": "అహ్మద్‌నగర్",
            "hi": "अहमदनगर",
            "mr": "अहिल्यानगर"
      },
      "markets": [
            {
                  "id": "ahmednagar_apmc",
                  "name": "Ahmednagar / Rahuri APMC Onion & Jowar Yard",
                  "nameTe": "అహ్మద్‌నగర్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Nepti, Ahmednagar - 414005",
                  "distanceEstimateKm": 10,
                  "mapUrl": "https://maps.google.com/?q=Ahmednagar+APMC",
                  "phone": "0241-2351220",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 26,
                  "currentWaitMins": 44,
                  "congestion": "amber",
                  "crops": {
                        "onion": {
                              "price": 2850,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 19400,
                              "mspComparison": "+22% market spread"
                        },
                        "cotton": {
                              "price": 7980,
                              "demand": "high",
                              "arrivalsTodayQtl": 4800,
                              "mspComparison": "+6.1% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "solapur": {
      "id": "solapur",
      "name": {
            "en": "Solapur",
            "te": "సోలాపూర్",
            "hi": "सोलापुर",
            "mr": "सोलापूर"
      },
      "markets": [
            {
                  "id": "solapur_apmc",
                  "name": "Solapur APMC Red Onion & Pomegranate Yard",
                  "nameTe": "సోలాపూర్ వ్యవసాయ మార్కెట్ యార్డ్",
                  "type": "Principal APMC Yard",
                  "address": "Siddheshwar Peth, Solapur - 413001",
                  "distanceEstimateKm": 9,
                  "mapUrl": "https://maps.google.com/?q=Solapur+APMC",
                  "phone": "0217-2721840",
                  "operatingHours": "06:00 AM - 05:00 PM",
                  "currentQueueVehicles": 24,
                  "currentWaitMins": 38,
                  "congestion": "amber",
                  "crops": {
                        "onion": {
                              "price": 2920,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 16500,
                              "mspComparison": "+26% market spread"
                        },
                        "groundnut": {
                              "price": 7180,
                              "demand": "high",
                              "arrivalsTodayQtl": 3600,
                              "mspComparison": "+6.1% above MSP"
                        }
                  },
                  "handlingFeePerQtl": 20
            }
      ]
},
      "nagpur": {
      "id": "nagpur",
      "name": {
            "en": "Nagpur",
            "te": "నాగ్‌పూర్",
            "hi": "नागपुर",
            "mr": "नागपूर"
      },
      "markets": [
            {
                  "id": "nagpur_kalamna",
                  "name": "Kalamna Market Yard APMC Nagpur (Central India Mega Hub)",
                  "nameTe": "కలమ్నా మార్కెట్ యార్డ్ నాగ్‌పూర్",
                  "type": "Principal APMC Yard",
                  "address": "Kalamna, Old Kamptee Road, Nagpur - 440026",
                  "distanceEstimateKm": 14,
                  "mapUrl": "https://maps.google.com/?q=Kalamna+Market+Yard",
                  "phone": "0712-2681200",
                  "operatingHours": "05:00 AM - 06:00 PM",
                  "currentQueueVehicles": 30,
                  "currentWaitMins": 46,
                  "congestion": "amber",
                  "crops": {
                        "cotton": {
                              "price": 8120,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 14800,
                              "mspComparison": "+8.0% above MSP"
                        },
                        "soybean": {
                              "price": 5080,
                              "demand": "very_high",
                              "arrivalsTodayQtl": 12400,
                              "mspComparison": "+8.3% above MSP"
                        },
                        "chilli": {
                              "price": 22300,
                              "demand": "high",
                              "arrivalsTodayQtl": 5800,
                              "mspComparison": "+35% above benchmark"
                        }
                  },
                  "handlingFeePerQtl": 22
            }
      ]
}
    }
  },

  // 6. Gujarat
  gujarat: {
    id: 'gujarat',
    name: { en: 'Gujarat', te: 'గుజరాత్', hi: 'गुजरात', ta: 'குஜராத்', kn: 'ಗುಜರಾತ್' },
    districts: {
      rajkot: {
        id: 'rajkot',
        name: { en: 'Rajkot', te: 'రాజ్‌కోట్', hi: 'राजकोट' },
        markets: [
          {
            id: 'guj_rajkot_apmc',
            name: 'Rajkot APMC Bedi Yard (Cotton & Groundnut Hub)',
            nameTe: 'రాజ్‌కోట్ ఏపీఎంసీ బేడి యార్డ్ (వేరుశనగ & పత్తి)',
            type: 'Saurashtra Mega APMC Yard',
            address: 'Bedi Village, Jamnagar Highway, Rajkot - 360003',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=APMC+Bedi+Yard+Rajkot',
            phone: '0281-2702110',
            operatingHours: '06:00 AM - 04:30 PM',
            currentQueueVehicles: 36,
            currentWaitMins: 68,
            congestion: 'red',
            crops: {
              groundnut: { price: 7550, demand: 'very_high', arrivalsTodayQtl: 48000, mspComparison: '+11.3% above MSP' },
              cotton: { price: 8120, demand: 'very_high', arrivalsTodayQtl: 29000, mspComparison: '+8% above MSP' }
            },
            handlingFeePerQtl: 21
          }
        ]
      }
    }
  },

  // 7. Punjab
  punjab: {
    id: 'punjab',
    name: { en: 'Punjab', te: 'పంజాబ్', hi: 'पंजाब', ta: 'பஞ்சாப்', kn: 'ಪಂಜಾಬ್' },
    districts: {
      ludhiana: {
        id: 'ludhiana',
        name: { en: 'Ludhiana / Khanna', te: 'లూధియానా / ఖన్నా', hi: 'लुधियाना' },
        markets: [
          {
            id: 'khanna_grain',
            name: 'Khanna Grain Market Yard (Asia’s Largest Grain Mandi)',
            nameTe: 'ఖన్నా గ్రెయిన్ మార్కెట్ (ఆసియా అతిపెద్ద ధాన్యం మండీ)',
            type: 'Asia Major Grain Mandi',
            address: 'GT Road, Khanna - 141401',
            distanceEstimateKm: 22,
            mapUrl: 'https://maps.google.com/?q=Khanna+Grain+Market',
            phone: '01628-220134',
            operatingHours: '06:00 AM - 06:00 PM',
            currentQueueVehicles: 45,
            currentWaitMins: 90,
            congestion: 'red',
            crops: {
              wheat: { price: 2680, demand: 'very_high', arrivalsTodayQtl: 85000, mspComparison: '+10.5% above MSP' },
              paddy: { price: 2580, demand: 'very_high', arrivalsTodayQtl: 72000, mspComparison: '+11.2% above MSP' }
            },
            handlingFeePerQtl: 22
          }
        ]
      }
    }
  },

  // 8. Haryana
  haryana: {
    id: 'haryana',
    name: { en: 'Haryana', te: 'హర్యానా', hi: 'हरियाणा', ta: 'ஹரியானா', kn: 'ಹರಿಯಾಣ' },
    districts: {
      karnal: {
        id: 'karnal',
        name: { en: 'Karnal', te: 'కర్నాల్', hi: 'करनाल' },
        markets: [
          {
            id: 'hr_karnal_mandi',
            name: 'Karnal Grain Market (Basmati Rice Capital)',
            nameTe: 'కర్నాల్ ధాన్యం మార్కెట్ (బాస్మతి హబ్)',
            type: 'Principal Grain Market',
            address: 'Railway Road, New Anaj Mandi, Karnal - 132001',
            distanceEstimateKm: 15,
            mapUrl: 'https://maps.google.com/?q=Karnal+Anaj+Mandi',
            phone: '0184-2252110',
            operatingHours: '06:30 AM - 05:30 PM',
            currentQueueVehicles: 30,
            currentWaitMins: 55,
            congestion: 'amber',
            crops: {
              paddy: { price: 2650, demand: 'very_high', arrivalsTodayQtl: 45000, mspComparison: '+14% above MSP' },
              wheat: { price: 2610, demand: 'high', arrivalsTodayQtl: 38000, mspComparison: '+7.6% above MSP' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 9. Madhya Pradesh
  madhya_pradesh: {
    id: 'madhya_pradesh',
    name: { en: 'Madhya Pradesh', te: 'మధ్యప్రదేశ్', hi: 'मध्य प्रदेश', ta: 'மத்திய பிரதேசம்', kn: 'ಮಧ್ಯಪ್ರದೇಶ' },
    districts: {
      indore: {
        id: 'indore',
        name: { en: 'Indore', te: 'ఇండోర్', hi: 'इंदौर' },
        markets: [
          {
            id: 'mp_indore_krishi',
            name: 'Indore Krishi Upaj Mandi (Soybean & Wheat Hub)',
            nameTe: 'ఇండోర్ కృషి ఉపజ్ మండీ (సోయాబీన్ & గోధుమ)',
            type: 'Principal Krishi Upaj Mandi',
            address: 'Laxmibai Nagar Mandi, Sanwer Road, Indore - 452006',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Laxmibai+Nagar+Mandi+Indore',
            phone: '0731-2415112',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 34,
            currentWaitMins: 65,
            congestion: 'red',
            crops: {
              soybean: { price: 5280, demand: 'very_high', arrivalsTodayQtl: 52000, mspComparison: '+7.9% above MSP' },
              wheat: { price: 2640, demand: 'high', arrivalsTodayQtl: 41000, mspComparison: '+8.8% above MSP' }
            },
            handlingFeePerQtl: 21
          }
        ]
      }
    }
  },

  // 10. Uttar Pradesh
  uttar_pradesh: {
    id: 'uttar_pradesh',
    name: { en: 'Uttar Pradesh', te: 'ఉత్తరప్రదేశ్', hi: 'उत्तर प्रदेश', ta: 'உத்தரப் பிரதேசம்', kn: 'ಉತ್ತರ ಪ್ರದೇಶ' },
    districts: {
      agra: {
        id: 'agra',
        name: { en: 'Agra', te: 'ఆగ్రా', hi: 'आगरा' },
        markets: [
          {
            id: 'up_agra_apmc',
            name: 'Agra Mandi Samiti (Major Wheat & Potato Yard)',
            nameTe: 'ఆగ్రా కృషి ఉత్పాదన్ మండి సమితి',
            type: 'Principal Mandi Samiti',
            address: 'Fatehabad Road, Shamsabad, Agra - 282001',
            distanceEstimateKm: 16,
            mapUrl: 'https://maps.google.com/?q=Mandi+Samiti+Agra',
            phone: '0562-2331440',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 28,
            currentWaitMins: 48,
            congestion: 'amber',
            crops: {
              wheat: { price: 2590, demand: 'high', arrivalsTodayQtl: 32000, mspComparison: '+6.8% above MSP' },
              tomato: { price: 2150, demand: 'steady', arrivalsTodayQtl: 14000, mspComparison: '+79% above baseline' }
            },
            handlingFeePerQtl: 19
          }
        ]
      }
    }
  },

  // 11. Rajasthan
  rajasthan: {
    id: 'rajasthan',
    name: { en: 'Rajasthan', te: 'రాజస్థాన్', hi: 'राजस्थान', ta: 'ராஜஸ்தான்', kn: 'ರಾಜಸ್ಥಾನ' },
    districts: {
      kota: {
        id: 'kota',
        name: { en: 'Kota', te: 'కోటా', hi: 'कोटा' },
        markets: [
          {
            id: 'raj_kota_bhamashah',
            name: 'Kota Bhamashah Krishi Upaj Mandi',
            nameTe: 'కోటా భామాషా కృషి ఉపజ్ మండీ',
            type: 'Rajasthan Major Mega Mandi',
            address: 'Anantpura, Jhalawar Road, Kota - 324005',
            distanceEstimateKm: 18,
            mapUrl: 'https://maps.google.com/?q=Bhamashah+Mandi+Kota',
            phone: '0744-2490110',
            operatingHours: '06:30 AM - 05:00 PM',
            currentQueueVehicles: 30,
            currentWaitMins: 55,
            congestion: 'amber',
            crops: {
              soybean: { price: 5240, demand: 'very_high', arrivalsTodayQtl: 39000, mspComparison: '+7.1% above MSP' },
              wheat: { price: 2600, demand: 'high', arrivalsTodayQtl: 28000, mspComparison: '+7.2% above MSP' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 12. Bihar
  bihar: {
    id: 'bihar',
    name: { en: 'Bihar', te: 'బీహార్', hi: 'बिहार', ta: 'பீகார்', kn: 'ಬಿಹಾರ' },
    districts: {
      purnia: {
        id: 'purnia',
        name: { en: 'Purnia / Gulabbagh', te: 'పూర్ణియా / గులాబ్‌బాగ్', hi: 'पूर्णिया' },
        markets: [
          {
            id: 'bih_gulabbagh',
            name: 'Gulabbagh Mandi Purnia (Asia’s Largest Maize Hub)',
            nameTe: 'గులాబ్‌బాగ్ మార్కెట్ పూర్ణియా (ఆసియా అతిపెద్ద మొక్కజొన్న మండీ)',
            type: 'Asia Major Maize Trading Mandi',
            address: 'Gulabbagh, NH-31, Purnia - 854326',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Gulabbagh+Mandi+Purnia',
            phone: '06454-242120',
            operatingHours: '06:00 AM - 06:00 PM',
            currentQueueVehicles: 42,
            currentWaitMins: 80,
            congestion: 'red',
            crops: {
              maize: { price: 2460, demand: 'very_high', arrivalsTodayQtl: 65000, mspComparison: '+10.5% above MSP' },
              paddy: { price: 2470, demand: 'high', arrivalsTodayQtl: 21000, mspComparison: '+6.4% above MSP' }
            },
            handlingFeePerQtl: 21
          }
        ]
      }
    }
  },

  // 13. West Bengal
  west_bengal: {
    id: 'west_bengal',
    name: { en: 'West Bengal', te: 'పశ్చిమ బెంగాల్', hi: 'पश्चिम बंगाल', ta: 'மேற்கு வங்காளம்', kn: 'ಪಶ್ಚಿಮ ಬಂಗಾಳ' },
    districts: {
      burdwan: {
        id: 'burdwan',
        name: { en: 'Purba Bardhaman', te: 'బర్ధమాన్', hi: 'बर्दवान' },
        markets: [
          {
            id: 'wb_memari_apmc',
            name: 'Memari Regulated Market (Rice Bowl of Bengal)',
            nameTe: 'మెమారీ నియంత్రిత మార్కెట్ (ధాన్యం హబ్)',
            type: 'Regulated Market Yard',
            address: 'GT Road, Memari, Purba Bardhaman - 713146',
            distanceEstimateKm: 16,
            mapUrl: 'https://maps.google.com/?q=Memari+Regulated+Market',
            phone: '0342-2250110',
            operatingHours: '06:30 AM - 05:00 PM',
            currentQueueVehicles: 24,
            currentWaitMins: 45,
            congestion: 'amber',
            crops: {
              paddy: { price: 2540, demand: 'very_high', arrivalsTodayQtl: 38000, mspComparison: '+9.4% above MSP' }
            },
            handlingFeePerQtl: 19
          }
        ]
      }
    }
  },

  // 14. Odisha
  odisha: {
    id: 'odisha',
    name: { en: 'Odisha', te: 'ఒడిశా', hi: 'ओडिशा', ta: 'ஒடிசா', kn: 'ಒಡಿಶಾ' },
    districts: {
      bargarh: {
        id: 'bargarh',
        name: { en: 'Bargarh', te: 'బర్‌గఢ్', hi: 'बरगढ़' },
        markets: [
          {
            id: 'od_bargarh_rmc',
            name: 'Bargarh Regulated Market Committee (Paddy Bowl)',
            nameTe: 'బర్‌గఢ్ ఆర్ఎంసీ మార్కెట్ యార్డ్',
            type: 'Principal RMC Yard',
            address: 'Near NH-6, Bargarh - 768028',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Bargarh+Regulated+Market',
            phone: '06646-232110',
            operatingHours: '07:00 AM - 05:00 PM',
            currentQueueVehicles: 22,
            currentWaitMins: 42,
            congestion: 'amber',
            crops: {
              paddy: { price: 2510, demand: 'very_high', arrivalsTodayQtl: 32000, mspComparison: '+8.1% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 15. Kerala
  kerala: {
    id: 'kerala',
    name: { en: 'Kerala', te: 'కేరళ', hi: 'केरल', ta: 'கேரளா', kn: 'ಕೇರಳ' },
    districts: {
      palakkad: {
        id: 'palakkad',
        name: { en: 'Palakkad', te: 'పాలక్కాడ్', hi: 'पालक्काड़' },
        markets: [
          {
            id: 'kl_palakkad_market',
            name: 'Palakkad Agriculture Wholesale Market (Paddy Bowl of Kerala)',
            nameTe: 'పాలక్కాడ్ వ్యవసాయ టోకు మార్కెట్',
            type: 'Govt Regulated Market',
            address: 'Valanchery Road, Palakkad - 678001',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Palakkad+Wholesale+Market',
            phone: '0491-2533110',
            operatingHours: '06:00 AM - 04:30 PM',
            currentQueueVehicles: 15,
            currentWaitMins: 28,
            congestion: 'green',
            crops: {
              paddy: { price: 2820, demand: 'very_high', arrivalsTodayQtl: 19000, mspComparison: '+21% above MSP (State Bonus)' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 16. Assam
  assam: {
    id: 'assam',
    name: { en: 'Assam', te: 'అస్సాం', hi: 'असम' },
    districts: {
      nagaon: {
        id: 'nagaon',
        name: { en: 'Nagaon', te: 'నాగావ్', hi: 'नगांव' },
        markets: [
          {
            id: 'as_nagaon_amc',
            name: 'Nagaon Regulated Market Committee Yard',
            nameTe: 'నాగావ్ మార్కెట్ కమిటీ యార్డ్',
            type: 'Regulated Market',
            address: 'Haibargaon, Nagaon - 782002',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Nagaon+Regulated+Market',
            phone: '03672-231120',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 12,
            currentWaitMins: 20,
            congestion: 'green',
            crops: {
              paddy: { price: 2460, demand: 'high', arrivalsTodayQtl: 12000, mspComparison: '+6% above MSP' },
              turmeric: { price: 15100, demand: 'high', arrivalsTodayQtl: 3500, mspComparison: '+54% above benchmark' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 17. Chhattisgarh
  chhattisgarh: {
    id: 'chhattisgarh',
    name: { en: 'Chhattisgarh', te: 'ఛత్తీస్‌గఢ్', hi: 'छत्तीसगढ़' },
    districts: {
      raipur: {
        id: 'raipur',
        name: { en: 'Raipur', te: 'రాయ్‌పూర్', hi: 'रायपुर' },
        markets: [
          {
            id: 'cg_raipur_krishi',
            name: 'Raipur Krishi Upaj Mandi Samiti',
            nameTe: 'రాయ్‌పూర్ కృషి ఉపజ్ మండీ',
            type: 'Principal Mandi Yard',
            address: 'Dhanmandi, Raipur - 492001',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Raipur+Mandi+Samiti',
            phone: '0771-2521100',
            operatingHours: '07:00 AM - 05:00 PM',
            currentQueueVehicles: 25,
            currentWaitMins: 45,
            congestion: 'amber',
            crops: {
              paddy: { price: 2550, demand: 'very_high', arrivalsTodayQtl: 42000, mspComparison: '+9.9% above MSP' },
              maize: { price: 2380, demand: 'high', arrivalsTodayQtl: 8500, mspComparison: '+7% above MSP' }
            },
            handlingFeePerQtl: 19
          }
        ]
      }
    }
  },

  // 18. Jharkhand
  jharkhand: {
    id: 'jharkhand',
    name: { en: 'Jharkhand', te: 'జార్ఖండ్', hi: 'झारखंड' },
    districts: {
      ranchi: {
        id: 'ranchi',
        name: { en: 'Ranchi', te: 'రాంచీ', hi: 'रांची' },
        markets: [
          {
            id: 'jh_ranchi_market',
            name: 'Ranchi Krishi Utpadan Bazar Samiti (Pandra Market)',
            nameTe: 'పాండ్రా మార్కెట్ సమితి రాంచీ',
            type: 'Principal Bazar Samiti',
            address: 'Pandra, Itki Road, Ranchi - 834005',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Pandra+Bazar+Samiti+Ranchi',
            phone: '0651-2512200',
            operatingHours: '06:00 AM - 04:30 PM',
            currentQueueVehicles: 20,
            currentWaitMins: 35,
            congestion: 'green',
            crops: {
              tomato: { price: 2280, demand: 'high', arrivalsTodayQtl: 14000, mspComparison: '+90% above baseline' },
              paddy: { price: 2470, demand: 'high', arrivalsTodayQtl: 9800, mspComparison: '+6.4% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 19. Uttarakhand
  uttarakhand: {
    id: 'uttarakhand',
    name: { en: 'Uttarakhand', te: 'ఉత్తరాఖండ్', hi: 'उत्तराखंड' },
    districts: {
      us_nagar: {
        id: 'us_nagar',
        name: { en: 'Udham Singh Nagar / Rudrapur', te: 'ఉధమ్ సింగ్ నగర్', hi: 'उधम सिंह नगर' },
        markets: [
          {
            id: 'uk_rudrapur_mandi',
            name: 'Rudrapur Krishi Utpadan Mandi Samiti',
            nameTe: 'రుద్రపూర్ కృషి మండీ సమితి',
            type: 'Principal Yard',
            address: 'Kashipur Road, Rudrapur - 263153',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Rudrapur+Mandi+Samiti',
            phone: '05944-242110',
            operatingHours: '07:00 AM - 05:00 PM',
            currentQueueVehicles: 18,
            currentWaitMins: 30,
            congestion: 'green',
            crops: {
              paddy: { price: 2540, demand: 'high', arrivalsTodayQtl: 18000, mspComparison: '+9.4% above MSP' },
              wheat: { price: 2600, demand: 'high', arrivalsTodayQtl: 15000, mspComparison: '+7.2% above MSP' }
            },
            handlingFeePerQtl: 19
          }
        ]
      }
    }
  },

  // 20. Himachal Pradesh
  himachal_pradesh: {
    id: 'himachal_pradesh',
    name: { en: 'Himachal Pradesh', te: 'హిమాచల్ ప్రదేశ్', hi: 'हिमाचल प्रदेश' },
    districts: {
      shimla: {
        id: 'shimla',
        name: { en: 'Shimla', te: 'సిమ్లా', hi: 'शिमला' },
        markets: [
          {
            id: 'hp_shimla_apmc',
            name: 'Shimla APMC Market Yard (Dhali Market)',
            nameTe: 'ఢలీ మార్కెట్ యార్డ్ సిమ్లా',
            type: 'Principal APMC Yard',
            address: 'Dhali, Shimla - 171012',
            distanceEstimateKm: 14,
            mapUrl: 'https://maps.google.com/?q=Dhali+APMC+Shimla',
            phone: '0177-2841200',
            operatingHours: '06:00 AM - 04:00 PM',
            currentQueueVehicles: 15,
            currentWaitMins: 25,
            congestion: 'green',
            crops: {
              tomato: { price: 2420, demand: 'high', arrivalsTodayQtl: 11000, mspComparison: '+101% above baseline' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 21. Jammu & Kashmir
  jammu_kashmir: {
    id: 'jammu_kashmir',
    name: { en: 'Jammu & Kashmir', te: 'జమ్మూ కాశ్మీర్', hi: 'जम्मू और कश्मीर' },
    districts: {
      jammu: {
        id: 'jammu',
        name: { en: 'Jammu', te: 'జమ్మూ', hi: 'जम्मू' },
        markets: [
          {
            id: 'jk_jammu_narwal',
            name: 'Narwal Fruit & Grain Mandi Jammu',
            nameTe: 'నర్వాల్ మార్కెట్ జమ్మూ',
            type: 'Principal Mandi',
            address: 'Narwal Yard, Bypass Road, Jammu - 180006',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Narwal+Mandi+Jammu',
            phone: '0191-2471100',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 18,
            currentWaitMins: 32,
            congestion: 'green',
            crops: {
              paddy: { price: 2560, demand: 'high', arrivalsTodayQtl: 14000, mspComparison: '+10.3% above MSP' },
              wheat: { price: 2620, demand: 'high', arrivalsTodayQtl: 12500, mspComparison: '+8% above MSP' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 22. Goa
  goa: {
    id: 'goa',
    name: { en: 'Goa', te: 'గోవా', hi: 'गोवा' },
    districts: {
      north_goa: {
        id: 'north_goa',
        name: { en: 'North Goa', te: 'ఉత్తర గోవా', hi: 'उत्तर गोवा' },
        markets: [
          {
            id: 'ga_mapusa_apmc',
            name: 'Goa State Agricultural Marketing Board (Mapusa Sub Yard)',
            nameTe: 'మాపుసా మార్కెట్ యార్డ్ గోవా',
            type: 'State Marketing Yard',
            address: 'Mapusa Market Complex, Goa - 403507',
            distanceEstimateKm: 12,
            mapUrl: 'https://maps.google.com/?q=Mapusa+Market+Goa',
            phone: '0832-2262210',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 10,
            currentWaitMins: 18,
            congestion: 'green',
            crops: {
              paddy: { price: 2520, demand: 'steady', arrivalsTodayQtl: 3500, mspComparison: '+8.6% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 23. Delhi (NCT)
  delhi: {
    id: 'delhi',
    name: { en: 'Delhi (NCT)', te: 'ఢిల్లీ', hi: 'दिल्ली' },
    districts: {
      north_delhi: {
        id: 'north_delhi',
        name: { en: 'North Delhi / Narela & Azadpur', te: 'ఉత్తర ఢిల్లీ / నరేలా & ఆజాద్‌పూర్', hi: 'उत्तरी दिल्ली' },
        markets: [
          {
            id: 'dl_narela_mandi',
            name: 'Narela Food Grain Mandi (APMC)',
            nameTe: 'నరేలా ధాన్యం మార్కెట్ ఢిల్లీ',
            type: 'Principal Grain Mandi',
            address: 'Narela Mandi Complex, Delhi - 110040',
            distanceEstimateKm: 15,
            mapUrl: 'https://maps.google.com/?q=Narela+Mandi+Delhi',
            phone: '011-27281120',
            operatingHours: '06:00 AM - 05:00 PM',
            currentQueueVehicles: 28,
            currentWaitMins: 48,
            congestion: 'amber',
            crops: {
              wheat: { price: 2650, demand: 'very_high', arrivalsTodayQtl: 28000, mspComparison: '+9.2% above MSP' },
              paddy: { price: 2620, demand: 'very_high', arrivalsTodayQtl: 22000, mspComparison: '+12.9% above MSP' }
            },
            handlingFeePerQtl: 21
          },
          {
            id: 'dl_azadpur_mandi',
            name: 'Azadpur APMC (Asia’s Largest Fruit & Veg Market)',
            nameTe: 'ఆజాద్‌పూర్ మార్కెట్ (ఆసియా అతిపెద్ద కూరగాయల మండీ)',
            type: 'Asia National Benchmark',
            address: 'GT Karnal Road, Azadpur, Delhi - 110033',
            distanceEstimateKm: 18,
            mapUrl: 'https://maps.google.com/?q=Azadpur+Mandi+Delhi',
            phone: '011-27671140',
            operatingHours: '04:00 AM - 06:00 PM',
            currentQueueVehicles: 48,
            currentWaitMins: 95,
            congestion: 'red',
            crops: {
              onion: { price: 2980, demand: 'very_high', arrivalsTodayQtl: 75000, mspComparison: '+65% above baseline' },
              tomato: { price: 2420, demand: 'very_high', arrivalsTodayQtl: 42000, mspComparison: '+101% above baseline' }
            },
            handlingFeePerQtl: 22
          }
        ]
      }
    }
  },

  // 24. Tripura
  tripura: {
    id: 'tripura',
    name: { en: 'Tripura', te: 'త్రిపుర', hi: 'त्रिपुरा' },
    districts: {
      west_tripura: {
        id: 'west_tripura',
        name: { en: 'West Tripura / Agartala', te: 'పశ్చిమ త్రిపుర / అగర్తల', hi: 'पश्चिम त्रिपुरा' },
        markets: [
          {
            id: 'tr_agartala_market',
            name: 'Agartala Regulated Market Yard',
            nameTe: 'అగర్తల మార్కెట్ యార్డ్',
            type: 'Regulated Market',
            address: 'Battala Market Complex, Agartala - 799001',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Battala+Market+Agartala',
            phone: '0381-2321100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 10,
            currentWaitMins: 15,
            congestion: 'green',
            crops: {
              paddy: { price: 2480, demand: 'high', arrivalsTodayQtl: 6500, mspComparison: '+6.8% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 25. Meghalaya
  meghalaya: {
    id: 'meghalaya',
    name: { en: 'Meghalaya', te: 'మేఘాలయ', hi: 'मेघालय' },
    districts: {
      east_khasi_hills: {
        id: 'east_khasi_hills',
        name: { en: 'East Khasi Hills / Shillong', te: 'తూర్పు ఖాసీ హిల్స్ / షిల్లాంగ్', hi: 'ईस्ट खासी हिल्स' },
        markets: [
          {
            id: 'ml_shillong_market',
            name: 'Shillong Regulated Market Yard (Iewduh Bara Bazar)',
            nameTe: 'షిల్లాంగ్ బారా బజార్ యార్డ్',
            type: 'Principal Yard',
            address: 'Iewduh, Shillong - 793002',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Iewduh+Bara+Bazar+Shillong',
            phone: '0364-2224100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 8,
            currentWaitMins: 15,
            congestion: 'green',
            crops: {
              turmeric: { price: 16500, demand: 'very_high', arrivalsTodayQtl: 2800, mspComparison: '+68% above benchmark (Lakadong)' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 26. Manipur
  manipur: {
    id: 'manipur',
    name: { en: 'Manipur', te: 'మణిపూర్', hi: 'मणिपुर' },
    districts: {
      imphal_west: {
        id: 'imphal_west',
        name: { en: 'Imphal West', te: 'ఇంఫాల్ పశ్చిమ', hi: 'इम्फाल पश्चिम' },
        markets: [
          {
            id: 'mn_imphal_market',
            name: 'Imphal Agricultural Wholesale Market',
            nameTe: 'ఇంఫాల్ వ్యవసాయ టోకు మార్కెట్',
            type: 'Principal Yard',
            address: 'Khwairamband Bazar, Imphal - 795001',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Khwairamband+Bazar+Imphal',
            phone: '0385-2451100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 10,
            currentWaitMins: 15,
            congestion: 'green',
            crops: {
              paddy: { price: 2480, demand: 'high', arrivalsTodayQtl: 4200, mspComparison: '+6.8% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 27. Nagaland
  nagaland: {
    id: 'nagaland',
    name: { en: 'Nagaland', te: 'నాగాలాండ్', hi: 'नागालैंड' },
    districts: {
      dimapur: {
        id: 'dimapur',
        name: { en: 'Dimapur', te: 'దిమాపూర్', hi: 'दीमापुर' },
        markets: [
          {
            id: 'nl_dimapur_amc',
            name: 'Dimapur Agriculture Produce Marketing Yard',
            nameTe: 'దిమాపూర్ వ్యవసాయ మార్కెట్ యార్డ్',
            type: 'Principal Yard',
            address: 'Purana Bazar, Dimapur - 797112',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Purana+Bazar+Dimapur',
            phone: '03862-231120',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 11,
            currentWaitMins: 16,
            congestion: 'green',
            crops: {
              maize: { price: 2380, demand: 'high', arrivalsTodayQtl: 3800, mspComparison: '+7% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 28. Mizoram
  mizoram: {
    id: 'mizoram',
    name: { en: 'Mizoram', te: 'మిజోరామ్', hi: 'मिजोरम' },
    districts: {
      aizawl: {
        id: 'aizawl',
        name: { en: 'Aizawl', te: 'ఐజ్వాల్', hi: 'आइजोल' },
        markets: [
          {
            id: 'mz_aizawl_market',
            name: 'Aizawl Agriculture Regulated Market',
            nameTe: 'ఐజ్వాల్ వ్యవసాయ మార్కెట్',
            type: 'Regulated Market',
            address: 'Bawngkawn, Aizawl - 796014',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Bawngkawn+Aizawl',
            phone: '0389-2341100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 7,
            currentWaitMins: 14,
            congestion: 'green',
            crops: {
              turmeric: { price: 15400, demand: 'high', arrivalsTodayQtl: 1900, mspComparison: '+57% above benchmark' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 29. Arunachal Pradesh
  arunachal_pradesh: {
    id: 'arunachal_pradesh',
    name: { en: 'Arunachal Pradesh', te: 'అరుణాచల్ ప్రదేశ్', hi: 'अरुणाचल प्रदेश' },
    districts: {
      papum_pare: {
        id: 'papum_pare',
        name: { en: 'Papum Pare / Itanagar', te: 'ఇటానగర్', hi: 'पापुम पारे' },
        markets: [
          {
            id: 'ar_naharlagun_market',
            name: 'Naharlagun Agriculture Wholesale Market',
            nameTe: 'నహర్‌లగున్ వ్యవసాయ మార్కెట్',
            type: 'Regulated Yard',
            address: 'Daily Market, Naharlagun, Itanagar - 791110',
            distanceEstimateKm: 10,
            mapUrl: 'https://maps.google.com/?q=Naharlagun+Market',
            phone: '0360-2244100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 6,
            currentWaitMins: 12,
            congestion: 'green',
            crops: {
              maize: { price: 2360, demand: 'steady', arrivalsTodayQtl: 2100, mspComparison: '+6% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 30. Sikkim
  sikkim: {
    id: 'sikkim',
    name: { en: 'Sikkim (Organic State)', te: 'సిక్కిమ్', hi: 'सिक्किम' },
    districts: {
      gangtok: {
        id: 'gangtok',
        name: { en: 'Gangtok / East Sikkim', te: 'గాంగ్‌టక్', hi: 'गंगटोक' },
        markets: [
          {
            id: 'sk_gangtok_market',
            name: 'Gangtok Organic Agriculture Market (Lall Market)',
            nameTe: 'లాల్ బజార్ ఆర్గానిక్ మార్కెట్ గాంగ్‌టక్',
            type: '100% Certified Organic Yard',
            address: 'Lall Bazar, Gangtok - 737101',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Lall+Bazar+Gangtok',
            phone: '03592-202110',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 6,
            currentWaitMins: 12,
            congestion: 'green',
            crops: {
              turmeric: { price: 16200, demand: 'very_high', arrivalsTodayQtl: 1400, mspComparison: '+65% above benchmark (Organic)' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 31. Chandigarh (UT)
  chandigarh: {
    id: 'chandigarh',
    name: { en: 'Chandigarh (UT)', te: 'చండీగఢ్', hi: 'चंडीगढ़' },
    districts: {
      chandigarh_city: {
        id: 'chandigarh_city',
        name: { en: 'Chandigarh Central', te: 'చండీగఢ్ సిటీ', hi: 'चंडीगढ़' },
        markets: [
          {
            id: 'ch_sector26_apmc',
            name: 'Sector 26 Grain & Vegetable APMC Mandi',
            nameTe: 'సెక్టార్ 26 మార్కెట్ చండీగఢ్',
            type: 'UT Principal Mandi',
            address: 'Sector 26, Chandigarh - 160019',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Sector+26+Mandi+Chandigarh',
            phone: '0172-2791100',
            operatingHours: '05:00 AM - 05:00 PM',
            currentQueueVehicles: 20,
            currentWaitMins: 35,
            congestion: 'green',
            crops: {
              wheat: { price: 2640, demand: 'high', arrivalsTodayQtl: 18000, mspComparison: '+8.8% above MSP' },
              onion: { price: 2900, demand: 'high', arrivalsTodayQtl: 12000, mspComparison: '+61% above baseline' }
            },
            handlingFeePerQtl: 20
          }
        ]
      }
    }
  },

  // 32. Puducherry (UT)
  puducherry: {
    id: 'puducherry',
    name: { en: 'Puducherry (UT)', te: 'పుదుచ్చేరి', hi: 'पुदुच्चेरी' },
    districts: {
      puducherry_dist: {
        id: 'puducherry_dist',
        name: { en: 'Puducherry / Karaikal', te: 'పుదుచ్చేరి / కారైకాల్', hi: 'पुदुच्चेरी' },
        markets: [
          {
            id: 'py_regulated_market',
            name: 'Puducherry Regulated Market Committee',
            nameTe: 'పుదుచ్చేరి నియంత్రిత మార్కెట్',
            type: 'Regulated Yard',
            address: 'Thattanchavady, Puducherry - 605009',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Thattanchavady+Market+Puducherry',
            phone: '0413-2271100',
            operatingHours: '07:00 AM - 04:30 PM',
            currentQueueVehicles: 12,
            currentWaitMins: 20,
            congestion: 'green',
            crops: {
              paddy: { price: 2500, demand: 'high', arrivalsTodayQtl: 8500, mspComparison: '+7.7% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 33. Ladakh (UT)
  ladakh: {
    id: 'ladakh',
    name: { en: 'Ladakh (UT)', te: 'లడఖ్', hi: 'लद्दाख' },
    districts: {
      leh: {
        id: 'leh',
        name: { en: 'Leh', te: 'లేహ్', hi: 'लेह' },
        markets: [
          {
            id: 'ld_leh_market',
            name: 'Leh Agriculture Cooperative Marketing Yard',
            nameTe: 'లేహ్ సహకార మార్కెట్ యార్డ్',
            type: 'Cooperative Market',
            address: 'Main Bazaar, Leh - 194101',
            distanceEstimateKm: 6,
            mapUrl: 'https://maps.google.com/?q=Main+Bazaar+Leh',
            phone: '01982-252100',
            operatingHours: '08:00 AM - 03:00 PM',
            currentQueueVehicles: 5,
            currentWaitMins: 10,
            congestion: 'green',
            crops: {
              wheat: { price: 2600, demand: 'steady', arrivalsTodayQtl: 1500, mspComparison: '+7.2% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 34. Andaman & Nicobar (UT)
  andaman_nicobar: {
    id: 'andaman_nicobar',
    name: { en: 'Andaman & Nicobar Islands (UT)', te: 'అండమాన్ నికోబార్', hi: 'अंडमान निकोबार' },
    districts: {
      south_andaman: {
        id: 'south_andaman',
        name: { en: 'South Andaman / Port Blair', te: 'పోర్ట్ బ్లెయిర్', hi: 'दक्षिण अंडमान' },
        markets: [
          {
            id: 'an_portblair_market',
            name: 'Port Blair Agricultural Marketing Yard',
            nameTe: 'పోర్ట్ బ్లెయిర్ మార్కెట్ యార్డ్',
            type: 'Islands Yard',
            address: 'Aberdeen Bazar, Port Blair - 744101',
            distanceEstimateKm: 6,
            mapUrl: 'https://maps.google.com/?q=Aberdeen+Bazar+Port+Blair',
            phone: '03192-232100',
            operatingHours: '07:00 AM - 03:30 PM',
            currentQueueVehicles: 6,
            currentWaitMins: 12,
            congestion: 'green',
            crops: {
              paddy: { price: 2580, demand: 'high', arrivalsTodayQtl: 2100, mspComparison: '+11.2% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 35. Dadra and Nagar Haveli and Daman and Diu (UT)
  dadra_daman_diu: {
    id: 'dadra_daman_diu',
    name: { en: 'Dadra & Nagar Haveli and Daman & Diu (UT)', te: 'దాద్రా నగర్ హవేలీ & డామన్ డయ్యూ', hi: 'दादरा और नगर हवेली' },
    districts: {
      daman: {
        id: 'daman',
        name: { en: 'Daman & Silvassa', te: 'డామన్ & సిల్వాస్సా', hi: 'दमन' },
        markets: [
          {
            id: 'dn_silvassa_market',
            name: 'Silvassa Agriculture Market Complex',
            nameTe: 'సిల్వాస్సా వ్యవసాయ మార్కెట్',
            type: 'UT Yard',
            address: 'Naroli Road, Silvassa - 396230',
            distanceEstimateKm: 8,
            mapUrl: 'https://maps.google.com/?q=Silvassa+Market',
            phone: '0260-2642100',
            operatingHours: '07:00 AM - 04:00 PM',
            currentQueueVehicles: 8,
            currentWaitMins: 15,
            congestion: 'green',
            crops: {
              paddy: { price: 2510, demand: 'steady', arrivalsTodayQtl: 3200, mspComparison: '+8.1% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  },

  // 36. Lakshadweep (UT)
  lakshadweep: {
    id: 'lakshadweep',
    name: { en: 'Lakshadweep (UT)', te: 'లక్షద్వీప్', hi: 'लक्षद्वीप' },
    districts: {
      kavaratti: {
        id: 'kavaratti',
        name: { en: 'Kavaratti', te: 'కవరత్తి', hi: 'कवरत्ती' },
        markets: [
          {
            id: 'lk_kavaratti_market',
            name: 'Kavaratti Island Produce Center',
            nameTe: 'కవరత్తి కొనుగోలు కేంద్రం',
            type: 'Island Center',
            address: 'Harbour Complex, Kavaratti - 682555',
            distanceEstimateKm: 4,
            mapUrl: 'https://maps.google.com/?q=Kavaratti+Harbour',
            phone: '04896-262100',
            operatingHours: '08:00 AM - 02:00 PM',
            currentQueueVehicles: 4,
            currentWaitMins: 10,
            congestion: 'green',
            crops: {
              paddy: { price: 2550, demand: 'steady', arrivalsTodayQtl: 900, mspComparison: '+9.9% above MSP' }
            },
            handlingFeePerQtl: 18
          }
        ]
      }
    }
  }
};

// Initial simulated active bookings & queue items
export const INITIAL_BOOKINGS = [
  {
    token: 'AP-GNT-2026-0842',
    farmerName: 'Venkat Reddy (వెంకట్ రెడ్డి)',
    mobile: '9848022341',
    state: 'andhra_pradesh',
    district: 'guntur',
    marketId: 'gnt_amc_mirchi',
    marketName: 'Guntur Mirchi Yard (Ankireddypalem)',
    cropId: 'chilli',
    cropName: 'Red Chilli (తేజ మిరప)',
    quantityQtl: 45,
    vehicleType: 'minitruck',
    vehicleNo: 'AP 07 TJ 4821',
    slotDate: '2026-09-14',
    slotTime: '09:00 AM - 10:30 AM',
    gateNo: 'Gate 2 (Weighbridge Bay A)',
    status: 'arrived',
    queuePosition: 3,
    estWaitMins: 18,
    moisturePercent: 11.2,
    qualityGrade: 'Grade A (Export Quality)',
    grossWeightQtl: 45.2,
    tareWeightQtl: 0.2,
    netWeightQtl: 45.0,
    ratePerQtl: 22400,
    totalAmount: 1008000,
    dbtBank: 'State Bank of India (SBI)',
    dbtAccountLast4: '4109',
    dbtStatus: 'Dispatched to RBI PFMS Gateway',
    timestamp: '2026-09-13T08:15:00'
  },
  {
    token: 'TG-WGL-2026-0195',
    farmerName: 'K. Ramesh Rao (రమేష్ రావు)',
    mobile: '9440192837',
    state: 'telangana',
    district: 'warangal',
    marketId: 'wgl_enumamula',
    marketName: 'Enumamula Market Yard Warangal',
    cropId: 'cotton',
    cropName: 'Cotton / Kapas (పత్తి)',
    quantityQtl: 80,
    vehicleType: 'tractor',
    vehicleNo: 'TS 03 TA 9912',
    slotDate: '2026-09-13',
    slotTime: '08:00 AM - 09:30 AM',
    gateNo: 'Gate 1 (Cotton Shed 4)',
    status: 'billed',
    queuePosition: 0,
    estWaitMins: 0,
    moisturePercent: 8.4,
    qualityGrade: 'Grade A (Long Staple)',
    grossWeightQtl: 81.0,
    tareWeightQtl: 1.0,
    netWeightQtl: 80.0,
    ratePerQtl: 8180,
    totalAmount: 654400,
    dbtBank: 'Telangana Grameena Bank',
    dbtAccountLast4: '7723',
    dbtStatus: 'DBT Credit Successful (Ref: DBT-TS-99214)',
    timestamp: '2026-09-13T07:30:00'
  }
];
