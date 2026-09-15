// RythuSeva Multi-Lingual Localization System
// Supports: English (en), Telugu (te), Hindi (hi), Tamil (ta), Kannada (kn)

export const TRANSLATIONS = {
  en: {
    appTitle: 'RythuSeva',
    appSubtitle: 'Smart Farmer Procurement & Mandi Intelligence',
    tagline: 'Direct Mandi Access • Real-time Queue • Transparent MSP Payment',
    
    // Nav
    navHome: 'Home',
    navBookSlot: 'Book Slot',
    navQueue: 'Live Queue',
    navMarkets: 'Markets & Best Profit',
    navTrack: 'Track Status',
    navVoice: 'Voice Assistant & Q&A',
    
    // Toll Free Support
    tollFreeBadge: '24x7 Kisan Toll-Free Helpline',
    tollFreeCallNow: 'Call Free: 1800-180-1551',
    allIndiaCentresNotice: 'Covering All 28 States & 8 Union Territories across India',
    
    // Auth, Biometric & Security Password
    biometricLoginBtn: 'Fast Biometric (Fingerprint / Face)',
    passwordLoginBtn: 'Security Password Login',
    fixPasswordBtn: 'Fix / Change Security Password',
    biometricPromptTitle: 'Farmer Biometric Authentication',
    biometricPromptDesc: 'Touch your fingerprint sensor or verify your face to instantly access your farmer account.',
    securityPasswordTitle: 'Farmer Security Password / PIN',
    securityPasswordDesc: 'Enter your personal security password to access your account alternatively.',
    fixPasswordTitle: 'Set Your Personal Security Password',
    fixPasswordDesc: 'Fix a security password / PIN (min 4 characters) that only you can use to access your bookings and payment status.',
    fieldPassword: 'Enter Security Password / PIN',
    fieldNewPassword: 'Enter New Security Password / PIN',
    fieldConfirmPassword: 'Confirm Security Password',
    btnSavePassword: 'Save & Fix Security Password',
    btnLoginWithPassword: 'Login with Security Password',
    biometricSuccess: 'Biometric Authenticated! Welcome, Farmer!',
    passwordSuccess: 'Password Verified! Welcome to RythuSeva!',
    welcomeFarmer: 'Welcome, Farmer',
    kisanId: 'Kisan ID',
    changeLang: 'Language',
    
    // Quick Metrics
    statActiveCentres: 'Active Govt Mandis',
    statAvgWait: 'Avg Mandi Wait Time',
    statMspDisbursed: 'Direct DBT Transferred',
    statActiveTokens: 'Active Slot Tokens',
    statMins: 'mins',
    statCrores: 'Cr',
    
    // Slot Booking Form
    bookSlotTitle: 'Farmer Registration & Yard Slot Booking',
    bookSlotSubtitle: 'Reserve your mandi arrival time, prevent waiting in long truck lines, and receive an instant QR Token Pass.',
    fieldName: 'Farmer Full Name',
    fieldMobile: 'Mobile Number (for SMS Alerts)',
    fieldAadhaar: 'Kisan ID / Aadhaar Last 4 Digits',
    fieldState: 'Select State (All Indian States & UTs)',
    fieldDistrict: 'Select District',
    fieldMandal: 'Mandal / Village',
    fieldMarket: 'Select Government Market Yard / Centre',
    fieldCrop: 'Crop to Procure',
    fieldQuantity: 'Estimated Quantity (Quintals)',
    fieldVehicle: 'Vehicle Type for Transportation',
    fieldVehicleNo: 'Vehicle Number (e.g., AP 07 AB 1234)',
    fieldDate: 'Preferred Arrival Date',
    fieldTimeSlot: 'Preferred Arrival Window',
    btnGenerateToken: 'Confirm Booking & Generate QR Token Pass',
    bookingSuccess: 'Slot Booked Successfully! Token generated.',
    
    // Queue Screen
    queueTitle: 'Real-Time Procurement Queue & Congestion Monitor',
    queueSubtitle: 'Live token counter, bay allocations, and congestion forecast across all government market yards.',
    yardCongestionStatus: 'Yard Congestion Level',
    congestionGreen: 'Smooth (Wait < 30 mins)',
    congestionAmber: 'Moderate Traffic (30 - 60 mins)',
    congestionRed: 'Heavy Traffic (Wait > 90 mins)',
    nowServing: 'Now Calling Token',
    yourToken: 'Your Token Number',
    vehiclesAhead: 'Vehicles Ahead of You',
    estWaitTime: 'Estimated Gate Wait',
    activeBays: 'Active Mandi Bays',
    bayWeighbridge: 'Electronic Weighbridge (Bays 1 & 2)',
    bayQuality: 'Quality & Moisture Testing (Bay 3)',
    bayUnload: 'Unloading & Bag Stacking Sheds',
    btnSimulateAdvance: 'Simulate Next Token Inward (Live Demo)',
    
    // Markets & Best Profit Calculator
    marketDirTitle: 'All Indian States & District Government Mandis',
    marketDirSubtitle: 'Select any state and district across India to view all official government market yards, exact locations, Google Maps, and live crop demand.',
    calcTitle: 'Best Selling & Net Profit Calculator',
    calcSubtitle: 'Formula: Best Selling (Net Earnings) = Crop Price - Transportation Cost - Other Charges',
    formulaCalloutBadge: '★ CORE FORMULA: Best Selling = Mandi Price - Transportation Cost - Other Charges ★',
    bestSellingDestinationsHeading: '🌟 Best Places to Sell & Preferred Buying Hubs',
    bestSellingDestinationsSubtitle: 'Where your crops fetch the highest prices, and which buyer clusters (exporters, millers, FCI/CCI) preferably buy them.',
    topMandisSellTitle: '🏆 Top Recommended Places to Sell Across India',
    whoPreferablyBuysTitle: '🏢 Who & Where Preferably Buys Your Crop (Demand Clusters)',
    whyBuyersPreferLabel: 'Why Buyers Prefer This Area:',
    selectCropToCompare: 'Select Crop to Evaluate',
    enterCropQty: 'Total Quantity to Sell (Quintals)',
    selectTransVehicle: 'Transport Vehicle',
    bestChoiceBadge: '★ HIGHEST NET PROFIT MARKET ★',
    grossRevenue: 'Gross Mandi Price',
    transportDeduction: 'Transportation Cost',
    otherChargesDeduction: 'Other Mandi Charges',
    netProfitAmount: 'Best Selling Realized Return',
    netPerQtl: 'Net Realized Price / Qtl',
    demandLabel: 'Mandi Demand',
    highDemand: 'High Demand',
    veryHighDemand: 'Very High Demand',
    steadyDemand: 'Steady Demand',
    viewOnMap: 'View on Google Maps',
    callYard: 'Call Yard Control Room',
    
    // Tracking
    trackTitle: 'Procurement & DBT Direct Payment Tracker',
    trackSubtitle: 'End-to-end transparency: Track moisture grade, electronic weight, procurement bill, and bank credit.',
    searchTokenPlaceholder: 'Enter Token Number (e.g. AP-GNT-2026-0842) or Mobile No',
    btnTrack: 'Track Live Status',
    stage1: '1. Slot Booked',
    stage2: '2. Gate Inward',
    stage3: '3. Quality & Moisture Check',
    stage4: '4. Electronic Weighment',
    stage5: '5. MSP Bill Issued',
    stage6: '6. Direct DBT Payment Credited',
    
    // Voice Assistant & Q&A
    talkToFarmDirectTitle: 'Talk to FarmDirect',
    talkToFarmDirectDesc: 'Ask about crop prices, markets and selling options in your language.',
    voiceFallbackLabel: 'You can also type your question:',
    micPermTitle: 'Microphone Permission Required',
    micPermDesc: 'To speak with FarmDirect Voice Assistant, your browser needs microphone permission.',
    micPermStepsHeader: 'How to Enable Microphone:',
    btnRetryMic: 'Retry After Allowing Access',
    suggestedQuestionsLabel: '🌾 Try asking in your language (Tap to test):',
    voiceTitle: 'AI Kisaan Voice Assistant & Q&A (రైతు వాయిస్)',
    voiceSubtitle: 'Speak or type your question. Our voice receiver listens and answers where to sell, who buys, prices, or calculates your net profit.',
    voiceListening: 'Listening to your voice... Speak now',
    voiceIdle: 'Tap Microphone to Speak / Record',
    voiceRecordReceiverBadge: '🎙️ Live Voice Record Receiver',
    voiceResponseLabel: 'Kisaan Vaani Voice Answer',
    voiceSpeakPrompt: 'Ask questions like: "Where is the best place to sell chilli?", "Which area preferably buys cotton?", or "How is best selling calculated?".',
    btnReadAloud: 'Read Answer Aloud (Audio)',
    btnSendVoiceQuery: 'Ask / Submit Question',
    btnClearVoice: 'Clear',
    sampleQuestionsTitle: 'Frequently Asked Voice Questions (Tap to Ask)',
    qaHistoryTitle: 'Interactive Voice Q&A Conversation Feed',
    
    // Notifications & SMS
    notificationsTitle: 'Mandi Notifications & SMS Alerts',
    simulateSmsTitle: 'Simulated Mobile SMS Feed',
    smsNotice: 'SMS sent to registered mobile for slot passes, gate entry, and DBT credit.'
  },

  te: {
    appTitle: 'రైతుసేవ',
    appSubtitle: 'స్మార్ట్ ప్రభుత్వ కొనుగోలు, క్యూ నిర్వహణ & మార్కెట్ సమాచారం',
    tagline: 'నేరుగా మార్కెట్ యాక్సెస్ • లైవ్ టోకెన్ క్యూ • పారదర్శక MSP చెల్లింపులు',
    
    // Nav
    navHome: 'హోమ్',
    navBookSlot: 'స్లాట్ బుకింగ్',
    navQueue: 'లైవ్ క్యూ',
    navMarkets: 'మార్కెట్లు & ఉత్తమ లాభం',
    navTrack: 'స్టేటస్ ట్రాకర్',
    navVoice: 'వాయిస్ అసిస్టెంట్ & Q&A',
    
    // Toll Free Support
    tollFreeBadge: '24x7 ఉచిత రైతు హెల్ప్‌లైన్',
    tollFreeCallNow: 'ఉచిత కాల్: 1800-180-1551',
    allIndiaCentresNotice: 'భారతదేశంలోని అన్ని 28 రాష్ట్రాలు & 8 కేంద్రపాలిత ప్రాంతాల్లోని ప్రభుత్వ మార్కెట్ యార్డులు',
    
    // Auth, Biometric & Security Password
    biometricLoginBtn: 'వేలిముద్ర లాగిన్ (బయోమెట్రిక్)',
    passwordLoginBtn: 'సెక్యూరిటీ పాస్‌వర్డ్ లాగిన్',
    fixPasswordBtn: 'పాస్‌వర్డ్ సెట్ / మార్చుకోండి',
    biometricPromptTitle: 'రైతు బయోమెట్రిక్ ప్రామాణీకరణ',
    biometricPromptDesc: 'మీ వేలిముద్ర సెన్సార్‌ను తాకండి లేదా ఫేస్ వెరిఫై చేసి వెంటనే మీ ఖాతా వివరాలను పొందండి.',
    securityPasswordTitle: 'రైతు సెక్యూరిటీ పాస్‌వర్డ్ / పిన్',
    securityPasswordDesc: 'బయోమెట్రిక్ లేనప్పుడు మీ వ్యక్తిగత సెక్యూరిటీ పాస్‌వర్డ్ ద్వారా ఖాతాలోకి ప్రవేశించండి.',
    fixPasswordTitle: 'మీ సెక్యూరిటీ పాస్‌వర్డ్‌ను సెట్ చేయండి',
    fixPasswordDesc: 'మీ ఖాతా భద్రత కోసం మీరు మాత్రమే ఉపయోగించే రహస్య పాస్‌వర్డ్ / పిన్‌ను నిర్ణయించండి (కనీసం 4 అక్షరాలు/అంకెలు).',
    fieldPassword: 'సెక్యూరిటీ పాస్‌వర్డ్ / పిన్ నమోదు చేయండి',
    fieldNewPassword: 'కొత్త సెక్యూరిటీ పాస్‌వర్డ్ / పిన్',
    fieldConfirmPassword: 'పాస్‌వర్డ్ మరలా నమోదు చేయండి',
    btnSavePassword: 'పాస్‌వర్డ్ భద్రపరచండి',
    btnLoginWithPassword: 'పాస్‌వర్డ్‌తో లాగిన్ అవ్వండి',
    biometricSuccess: 'బయోమెట్రిక్ ధృవీకరించబడింది! రైతు సోదరులకు స్వాగతం!',
    passwordSuccess: 'సెక్యూరిటీ పాస్‌వర్డ్ ధృవీకరించబడింది! స్వాగతం!',
    welcomeFarmer: 'రైతుకు స్వాగతం',
    kisanId: 'కిసాన్ ఐడీ',
    changeLang: 'భాష',
    
    // Quick Metrics
    statActiveCentres: 'ప్రభుత్వ మార్కెట్ యార్డులు',
    statAvgWait: 'సగటు వేచి ఉండే సమయం',
    statMspDisbursed: 'రైతుల ఖాతాల్లో జమైన DBT మొత్తం',
    statActiveTokens: 'క్యూలో ఉన్న టోకెన్లు',
    statMins: 'నిమిషాలు',
    statCrores: 'కోట్లు',
    
    // Slot Booking Form
    bookSlotTitle: 'రైతు నమోదు & మార్కెట్ స్లాట్ బుకింగ్',
    bookSlotSubtitle: 'మీరు మార్కెట్ యార్డుకు వచ్చే సమయాన్ని ముందుగా రిజర్వ్ చేసుకోండి. వాహనాల రద్దీని నివారించి తక్షణ QR టోకెన్ పాస్ పొందండి.',
    fieldName: 'రైతు పూర్తి పేరు',
    fieldMobile: 'మొబైల్ నంబర్ (SMS హెచ్చరికల కోసం)',
    fieldAadhaar: 'కిసాన్ ఐడీ / ఆధార్ చివరి 4 అంకెలు',
    fieldState: 'రాష్ట్రాన్ని ఎంచుకోండి (భారతదేశ రాష్ట్రాలన్నీ)',
    fieldDistrict: 'జిల్లాను ఎంచుకోండి',
    fieldMandal: 'మండలం / గ్రామం',
    fieldMarket: 'ప్రభుత్వ మార్కెట్ యార్డు / కొనుగోలు కేంద్రం',
    fieldCrop: 'విక్రయించదలచిన పంట',
    fieldQuantity: 'అంచనా పరిమాణం (క్వింటాళ్ళలో)',
    fieldVehicle: 'రవాణా వాహన రకం',
    fieldVehicleNo: 'వాహన నంబరు (ఉదా: AP 07 AB 1234)',
    fieldDate: 'రావాలనుకుంటున్న తేదీ',
    fieldTimeSlot: 'రావాలనుకుంటున్న సమయం (స్లాట్)',
    btnGenerateToken: 'స్లాట్ బుక్ చేయండి & QR టోకెన్ పొందండి',
    bookingSuccess: 'స్లాట్ విజయవంతంగా బుక్ అయింది! మీ టోకెన్ సిద్ధం.',
    
    // Queue Screen
    queueTitle: 'రియల్-టైమ్ కొనుగోలు క్యూ & రద్దీ పర్యవేక్షణ',
    queueSubtitle: 'ప్రభుత్వ మార్కెట్ యార్డులలో లైవ్ టోకెన్ స్థితి, బే కేటాయింపులు మరియు వాహనాల రద్దీ సమాచారం.',
    yardCongestionStatus: 'మార్కెట్ యార్డ్ రద్దీ స్థాయి',
    congestionGreen: 'సులభతర ప్రవేశం (వేచి ఉండే సమయం < 30 నిమిషాలు)',
    congestionAmber: 'మితమైన రద్దీ (30 - 60 నిమిషాలు)',
    congestionRed: 'తీవ్రమైన రద్దీ (వేచి ఉండే సమయం > 90 నిమిషాలు)',
    nowServing: 'ప్రస్తుతం పిలుస్తున్న టోకెన్',
    yourToken: 'మీ టోకెన్ సంఖ్య',
    vehiclesAhead: 'మీ కంటే ముందున్న వాహనాలు',
    estWaitTime: 'గేట్ వద్ద వేచి ఉండే అంచనా సమయం',
    activeBays: 'కార్యాచరణ బేలు',
    bayWeighbridge: 'ఎలక్ట్రానిక్ కాటా / తూకం (బే 1 & 2)',
    bayQuality: 'నాణ్యత & తేమ పరీక్ష (బే 3)',
    bayUnload: 'అన్‌లోడింగ్ షెడ్లు & గోదాములు',
    btnSimulateAdvance: 'తదుపరి టోకెన్ పిలవండి (లైవ్ డెమో)',
    
    // Markets & Best Profit Calculator
    marketDirTitle: 'భారతదేశంలోని అన్ని రాష్ట్రాలు, జిల్లా మార్కెట్ యార్డులు',
    marketDirSubtitle: 'ఏ రాష్ట్రాన్ని మరియు జిల్లానైనా ఎంచుకోండి. అందులోని అన్ని ప్రభుత్వ మార్కెట్ సెంటర్లు, ఖచ్చితమైన స్థానాలు, గూగుల్ మ్యాప్స్ మరియు లైవ్ పంట డిమాండ్ ఇక్కడే కనిపిస్తాయి.',
    calcTitle: 'ఉత్తమ మార్కెట్ సిఫార్సు & నికర లాభ కాలిక్యులేటర్',
    calcSubtitle: 'సూత్రం: నికర అమ్మకం లాభం = పంట ధర - రవాణా ఖర్చు - ఇతర మార్కెట్ ఛార్జీలు',
    formulaCalloutBadge: '★ ప్రధాన సూత్రం: నికర అమ్మకం లాభం = పంట ధర - రవాణా ఖర్చు - ఇతర మార్కెట్ ఛార్జీలు ★',
    bestSellingDestinationsHeading: '🌟 పంట అమ్మడానికి అత్యుత్తమ మార్కెట్లు & కొనుగోలు ప్రాధాన్య కేంద్రాలు',
    bestSellingDestinationsSubtitle: 'ఏ మార్కెట్లో అమ్మితే అత్యధిక ధర లభిస్తుంది? ఏ ప్రాంతాల్లోని కొనుగోలుదారులు (ఎగుమతిదారులు, మిల్లులు, CCI, FCI) ఎక్కువగా కొంటారు?',
    topMandisSellTitle: '🏆 దేశవ్యాప్తంగా అమ్మకానికి ఉత్తమమైన మార్కెట్లు (టాప్ ర్యాంకింగ్)',
    whoPreferablyBuysTitle: '🏢 మీ పంటను ఎక్కడ & ఎవరు ఎక్కువగా కొంటారు? (కొనుగోలు క్లస్టర్లు & ప్రమాణాలు)',
    whyBuyersPreferLabel: 'కొనుగోలుదారులు ఈ ప్రాంతాన్ని ఎందుకు ఇష్టపడతారు:',
    selectCropToCompare: 'పోల్చాల్సిన పంటను ఎంచుకోండి',
    enterCropQty: 'అమ్మాల్సిన పంట పరిమాణం (క్వింటాళ్ళు)',
    selectTransVehicle: 'రవాణా వాహనాన్ని ఎంచుకోండి',
    bestChoiceBadge: '★ అత్యధిక నికర లాభదాయక మార్కెట్ ★',
    grossRevenue: 'మొత్తం స్థూల విలువ',
    transportDeduction: 'రవాణా ఖర్చు (డీజిల్/కిరాయి)',
    otherChargesDeduction: 'మార్కెట్ హమాలీ & తూకం ఛార్జీలు',
    netProfitAmount: 'చేతికి వచ్చే నికర ఆదాయం',
    netPerQtl: 'క్వింటాలుకు దక్కే నికర రేటు',
    demandLabel: 'పంట డిమాండ్',
    highDemand: 'అధిక డిమాండ్',
    veryHighDemand: 'విపరీతమైన డిమాండ్',
    steadyDemand: 'స్థిరమైన డిమాండ్',
    viewOnMap: 'గూగుల్ మ్యాప్స్‌లో దారి చూడండి',
    callYard: 'యార్డు కంట్రోల్ రూమ్‌కు కాల్ చేయండి',
    
    // Tracking
    trackTitle: 'పంట కొనుగోలు & బ్యాంకు DBT పేమెంట్ ట్రాకర్',
    trackSubtitle: 'తేమ శాతం, ఎలక్ట్రానిక్ కాటా బరువు, MSP కొనుగోలు రశీదు మరియు బ్యాంకు ఖాతాకు జమ అయ్యే సమాచారం.',
    searchTokenPlaceholder: 'టోకెన్ నంబర్ (ఉదా: AP-GNT-2026-0842) లేదా మొబైల్ నంబర్ ఇవ్వండి',
    btnTrack: 'లైవ్ స్టేటస్ చూడండి',
    stage1: '1. స్లాట్ బుకింగ్ పూర్తయింది',
    stage2: '2. యార్డ్ గేట్ ఇన్వర్డ్',
    stage3: '3. నాణ్యత & తేమ పరీక్ష',
    stage4: '4. ఎలక్ట్రానిక్ కాటా తూకం',
    stage5: '5. MSP కొనుగోలు బిల్లు జారీ',
    stage6: '6. బ్యాంకు ఖాతాకు DBT జమ',
    
    // Voice Assistant & Q&A
    talkToFarmDirectTitle: 'రైతుసేవ వాయిస్ అసిస్టెంట్ (Talk to FarmDirect)',
    talkToFarmDirectDesc: 'మీ నోటితోనే అడగండి — పంట ధరలు, ఉత్తమ మార్కెట్లు మరియు అమ్మకపు ఎంపికలు మీ భాషలోనే తెలుసుకోండి.',
    voiceFallbackLabel: 'మీరు మీ ప్రశ్నను టైప్ కూడా చేయవచ్చు:',
    micPermTitle: 'మైక్రోఫోన్ అనుమతి అవసరం (Microphone Permission Required)',
    micPermDesc: 'FarmDirect రైతు వాయిస్ అసిస్టెంట్‌తో మాట్లాడటానికి మీ బ్రౌజర్ మైక్రోఫోన్ అనుమతి అవసరం.',
    micPermStepsHeader: 'మైక్రోఫోన్ ఎలా ప్రారంభించాలి (How to Enable):',
    btnRetryMic: 'అనుమతించిన తర్వాత మళ్ళీ ప్రయత్నించండి',
    suggestedQuestionsLabel: '🌾 మీ భాషలో అడగండి (పరీక్షించడానికి నొక్కండి):',
    voiceTitle: 'రైతు వాయిస్ అసిస్టెంట్ & ప్రశ్న సమాధానాలు (AI Kisaan Vaani)',
    voiceSubtitle: 'మీ నోటితోనే అడగండి. మైక్ తాకి పంట ధరలు, ఎక్కడ అమ్మితే లాభం, ఎవరు కొంటారు, లేదా నికర లాభ సూత్రం గురించి అడగండి.',
    voiceListening: 'మీరు మాట్లాడేది వింటున్నాము... మాట్లాడండి',
    voiceIdle: 'మాట్లాడటానికి / రికార్డ్ చేయడానికి మైక్ తాకండి',
    voiceRecordReceiverBadge: '🎙️ లైవ్ వాయిస్ రికార్డ్ రిసీవర్',
    voiceResponseLabel: 'రైతు వాణి సమాధానం',
    voiceSpeakPrompt: 'ఉదాహరణ ప్రశ్నలు: "మిర్చి ఎక్కడ అమ్మితే మంచి లాభం?", "పత్తి ఎవరు ఎక్కువగా కొంటారు?", "నికర అమ్మకం సూత్రం ఏమిటి?", "నా టోకెన్ స్టేటస్ ఏమిటి?".',
    btnReadAloud: 'సమాధానం గట్టిగా చదవండి (వాయిస్)',
    btnSendVoiceQuery: 'ప్రశ్న అడగండి / పంపండి',
    btnClearVoice: 'తుడిపివేయండి',
    sampleQuestionsTitle: 'తరచుగా అడిగే ప్రశ్నలు (నొక్కి చూడండి)',
    qaHistoryTitle: 'వాయిస్ ప్రశ్నలు & సమాధానాల సంభాషణ'
  },

  hi: {
    appTitle: 'किसान सेवा (RythuSeva)',
    appSubtitle: 'स्मार्ट किसान खरीद, मंडी इंटेलिजेंस और कतार प्रबंधन',
    tagline: 'सीधा मंडी एक्सेस • लाइव टोकन लाइन • पारदर्शी डीबीटी भुगतान',
    navHome: 'होम',
    navBookSlot: 'स्लॉट बुकिंग',
    navQueue: 'लाइव कतार',
    navMarkets: 'मंडियां व सर्वश्रेष्ठ लाभ',
    navTrack: 'स्थिति ट्रैकर',
    navVoice: 'वॉयस असिस्टेंट व प्रश्नोत्तर',
    tollFreeBadge: '24x7 राष्ट्रीय किसान टोल-फ्री हेल्पलाइन',
    tollFreeCallNow: 'निःशुल्क कॉल: 1800-180-1551',
    allIndiaCentresNotice: 'भारत के सभी 28 राज्यों व 8 केंद्र शासित प्रदेशों की सरकारी मंडियां',
    biometricLoginBtn: 'फिंगरप्रिंट लॉगिन (बायोमेट्रिक)',
    passwordLoginBtn: 'सुरक्षा पासवर्ड लॉगिन',
    fixPasswordBtn: 'पासवर्ड सेट / बदलें',
    calcTitle: 'सर्वश्रेष्ठ बिक्री मंडी एवं शुद्ध लाभ कैलकुलेटर',
    calcSubtitle: 'सूत्र: शुद्ध बिक्री लाभ = मंडी भाव - परिवहन खर्च - अन्य मंडी शुल्क',
    formulaCalloutBadge: '★ मुख्य सूत्र: शुद्ध बिक्री = मंडी भाव - परिवहन खर्च - अन्य मंडी शुल्क ★',
    bestSellingDestinationsHeading: '🌟 फसल बिक्री के सर्वोत्तम स्थान एवं प्राथमिक खरीद हब',
    bestSellingDestinationsSubtitle: 'फसल कहाँ बेचने पर सर्वाधिक भाव मिलेगा और कौन से खरीददार (निर्यातक, मिलें, FCI/CCI) किस गुणवत्ता पर खरीदते हैं।',
    topMandisSellTitle: '🏆 पूरे भारत में फसल बिक्री की शीर्ष अनुशंसित मंडियां',
    whoPreferablyBuysTitle: '🏢 आपकी फसल कौन और कहाँ प्राथमिकता से खरीदता है?',
    whyBuyersPreferLabel: 'खरीदार इस क्षेत्र को क्यों प्राथमिकता देते हैं:',
    talkToFarmDirectTitle: 'फार्मडायरेक्ट से बात करें (Talk to FarmDirect)',
    talkToFarmDirectDesc: 'फसल के भाव, मंडियां और बिक्री विकल्पों के बारे में अपनी भाषा में पूछें।',
    voiceFallbackLabel: 'आप अपना प्रश्न यहाँ टाइप भी कर सकते हैं:',
    micPermTitle: 'माइक्रोफ़ोन अनुमति आवश्यक है (Microphone Permission Required)',
    micPermDesc: 'फार्मडायरेक्ट वॉयस असिस्टेंट से बात करने के लिए आपके ब्राउज़र को माइक्रोफ़ोन अनुमति चाहिए।',
    micPermStepsHeader: 'माइक्रोफ़ोन कैसे चालू करें (How to Enable):',
    btnRetryMic: 'अनुमति देने के बाद पुनः प्रयास करें',
    suggestedQuestionsLabel: '🌾 अपनी भाषा में पूछें (क्लिक करके देखें):',
    voiceTitle: 'AI किसान वाणी (वॉयस असिस्टेंट व प्रश्नोत्तर)',
    voiceListening: 'हम आपकी आवाज़ सुन रहे हैं... बोलिए',
    voiceIdle: 'बोलने / रिकॉर्ड करने के लिए माइक दबाएं',
    voiceRecordReceiverBadge: '🎙️ लाइव वॉयस रिकॉर्ड रिसीवर',
    voiceResponseLabel: 'किसान वाणी उत्तर',
    btnReadAloud: 'उत्तर बोलकर सुनाएं (ऑडियो)',
    btnSendVoiceQuery: 'प्रश्न पूछें / भेजें',
    btnClearVoice: 'साफ़ करें',
    qaHistoryTitle: 'वॉयस प्रश्नोत्तर संवाद'
  },

  ta: {
    appTitle: 'உழவர் சேவை (RythuSeva)',
    appSubtitle: 'விவசாயிகள் கொள்முதல் & வரிசை மேலாண்மை தளம்',
    tagline: 'நேரடி சந்தை அணுகல் • நேரடி வரிசை • வெளிப்படையான MSP பணம்',
    navHome: 'முகப்பு',
    navBookSlot: 'நேரம் பதிவு',
    navQueue: 'நேரடி வரிசை',
    navMarkets: 'சந்தைகள் & சிறந்த லாபம்',
    navTrack: 'நிலை கண்காணிப்பு',
    navVoice: 'குரல் உதவியாளர் & கேள்வி-பதில்',
    tollFreeBadge: '24x7 இலவச உதவி எண்',
    tollFreeCallNow: 'இலவச அழைப்பு: 1800-180-1551',
    calcTitle: 'சிறந்த விற்பனை சந்தை & நிகர லாப கணக்கீடு',
    calcSubtitle: 'சூத்திரம்: நிகர விற்பனை லாபம் = பயிர் விலை - போக்குவரத்து செலவு - இதர கட்டணங்கள்',
    formulaCalloutBadge: '★ சூத்திரம்: சிறந்த விற்பனை = விலை - போக்குவரத்து - இதர கட்டணங்கள் ★',
    bestSellingDestinationsHeading: '🌟 சிறந்த விற்பனை சந்தைகள் & வாங்குவோர் மையங்கள்',
    voiceTitle: 'AI உழவர் குரல் (Voice Assistant & Q&A)',
    voiceListening: 'உங்கள் குரலைக் கேட்கிறது...',
    voiceIdle: 'பேச மைக்ரோஃபோனைத் தொடவும்'
  },

  kn: {
    appTitle: 'ರೈತ ಸೇವೆ (RythuSeva)',
    appSubtitle: 'ರೈತರ ಸಂಗ್ರಹಣೆ ಮತ್ತು ಕ್ಯೂ ನಿರ್ವಹಣಾ ವೇದಿಕೆ',
    tagline: 'ನೇರ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ • ನೈಜ ಸಮಯದ ಕ್ಯೂ • ಪಾರದರ್ಶಕ ಎಂಎಸ್‌ಪಿ ಪಾವತಿ',
    navHome: 'ಮುಖಪುಟ',
    navBookSlot: 'ಸ್ಲಾಟ್ ಬುಕಿಂಗ್',
    navQueue: 'ಲೈವ್ ಕ್ಯೂ',
    navMarkets: 'ಮಾರುಕಟ್ಟೆಗಳು & ಉತ್ತಮ ಲಾಭ',
    navTrack: 'ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ',
    navVoice: 'ಧ್ವನಿ ಸಹಾಯಕ & ಪ್ರಶ್ನೋತ್ತರ',
    tollFreeBadge: '24x7 ರೈತ ಉಚಿತ ಸಹಾಯವಾಣಿ',
    tollFreeCallNow: 'ಉಚಿತ ಕರೆ: 1800-180-1551',
    calcTitle: 'ಉತ್ತಮ ಮಾರಾಟ ಮಾರುಕಟ್ಟೆ & ನಿವ್ವಳ ಲಾಭ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
    calcSubtitle: 'ಸೂತ್ರ: ನಿವ್ವಳ ಮಾರಾಟ ಲಾಭ = ಬೆಳೆ ಬೆಲೆ - ಸಾರಿಗೆ ವೆಚ್ಚ - ಇತರೆ ಮಾರುಕಟ್ಟೆ ಶುಲ್ಕಗಳು',
    formulaCalloutBadge: '★ ಸೂತ್ರ: ನಿವ್ವಳ ಮಾರಾಟ = ಬೆಲೆ - ಸಾರಿಗೆ ವೆಚ್ಚ - ಇತರೆ ಶುಲ್ಕಗಳು ★',
    bestSellingDestinationsHeading: '🌟 ಬೆಳೆ ಮಾರಾಟಕ್ಕೆ ಅತ್ಯುತ್ತಮ ಮಾರುಕಟ್ಟೆಗಳು & ಖರೀದಿ ಕೇಂದ್ರಗಳು',
    voiceTitle: 'AI ರೈತ ಧ್ವನಿ (Voice Assistant & Q&A)',
    voiceListening: 'ಧ್ವನಿಯನ್ನು ಆಲಿಸಲಾಗುತ್ತಿದೆ...',
    voiceIdle: 'ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿರಿ'
  }
};

export let currentLanguage = 'te';

export function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    localStorage.setItem('rythu_lang', lang);
    document.documentElement.lang = lang;
    return true;
  }
  return false;
}

export function getLanguage() {
  const saved = localStorage.getItem('rythu_lang');
  if (saved && TRANSLATIONS[saved]) {
    currentLanguage = saved;
  }
  return currentLanguage;
}

export function t(key) {
  const langObj = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return langObj[key] || TRANSLATIONS.en[key] || key;
}
