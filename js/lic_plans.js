// LIC ALL PLANS ENGINE & ACTUARIAL CALCULATOR
// Contains complete plan rules, age limits, premium formulas, and maturity benefits

const LIC_ALL_PLANS = [
  {
    table: "936",
    name: "LIC Jeevan Labh (जीवन लाभ)",
    hindiName: "जीवन लाभ (तालिका 936)",
    category: "Endowment",
    categoryHindi: "एंडोमेंट / बचत",
    minAge: 8,
    maxAge: 59,
    minSA: 200000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 10000,
    terms: [
      { term: 16, ppt: 10, maxAge: 59, baseRate: 85.50, bonusRate: 40, fabRate: 25 },
      { term: 21, ppt: 15, maxAge: 54, baseRate: 54.20, bonusRate: 44, fabRate: 45 },
      { term: 25, ppt: 16, maxAge: 50, baseRate: 46.80, bonusRate: 48, fabRate: 70 }
    ],
    tagline: "कम अवधि प्रीमियम भुगतान और सर्वाधिक बोनस लाभ",
    desc: "एलआईसी का सर्वाधिक बिकने वाला सीमित प्रीमियम भुगतान प्लान। मात्र 10, 15 या 16 वर्ष प्रीमियम भरें और 16, 21 या 25 वर्ष पर भारी बोनस के साथ गारंटीड मैच्योरिटी प्राप्त करें।",
    features: [
      "सीमित प्रीमियम भुगतान अवधि (Limited PPT)",
      "उच्चतम बोनस दर (Highest Reversionary Bonus)",
      "लोन एवं सरेंडर सुविधा 2 वर्ष बाद",
      "आयकर छूट धारा 80C एवं 10(10D) के तहत"
    ]
  },
  {
    table: "945",
    name: "LIC Jeevan Umang (जीवन उमंग)",
    hindiName: "जीवन उमंग (तालिका 945)",
    category: "Whole Life",
    categoryHindi: "होल लाइफ / आजीवन पेंशन",
    minAge: 0, // 90 days
    maxAge: 55,
    minSA: 200000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 25000,
    terms: [
      { term: 100, ppt: 15, maxAge: 55, baseRate: 76.50, bonusRate: 46, fabRate: 60, survivalRate: 8 },
      { term: 100, ppt: 20, maxAge: 50, baseRate: 52.40, bonusRate: 48, fabRate: 70, survivalRate: 8 },
      { term: 100, ppt: 25, maxAge: 45, baseRate: 39.80, bonusRate: 50, fabRate: 80, survivalRate: 8 },
      { term: 100, ppt: 30, maxAge: 40, baseRate: 31.60, bonusRate: 52, fabRate: 90, survivalRate: 8 }
    ],
    tagline: "आजीवन 8% गारंटीड पेंशन और 100 वर्ष तक लाइफ कवर",
    desc: "प्रीमियम भुगतान अवधि समाप्त होते ही प्रति वर्ष बीमा धन का 8% गारंटीड आजीवन भुगतान + 100 वर्ष की आयु पर मूल बीमा धन, वेस्टेड बोनस व अंतिम अतिरिक्त बोनस का एकमुश्त भुगतान।",
    features: [
      "प्रीमियम खत्म होते ही प्रति वर्ष 8% आजीवन गारंटीड इनकम",
      "100 वर्ष की आयु तक रिस्क कवर सुरक्षा",
      "पेंशन के साथ-साथ परिवार के लिए विशाल फंड",
      "बच्चों से लेकर 55 वर्ष तक के व्यक्तियों हेतु उपयुक्त"
    ]
  },
  {
    table: "871",
    name: "LIC Jeevan Utsav (जीवन उत्सव)",
    hindiName: "जीवन उत्सव (तालिका 871)",
    category: "Whole Life",
    categoryHindi: "होल लाइफ / 10% गारंटीड",
    minAge: 0,
    maxAge: 65,
    minSA: 500000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 25000,
    terms: [
      { term: 100, ppt: 5, maxAge: 65, baseRate: 198.50, bonusRate: 40, fabRate: 0, survivalRate: 10 },
      { term: 100, ppt: 8, maxAge: 62, baseRate: 122.30, bonusRate: 40, fabRate: 0, survivalRate: 10 },
      { term: 100, ppt: 10, maxAge: 60, baseRate: 96.80, bonusRate: 40, fabRate: 0, survivalRate: 10 },
      { term: 100, ppt: 12, maxAge: 58, baseRate: 79.40, bonusRate: 40, fabRate: 0, survivalRate: 10 },
      { term: 100, ppt: 16, maxAge: 50, baseRate: 58.60, bonusRate: 40, fabRate: 0, survivalRate: 10 }
    ],
    tagline: "आजीवन 10% गारंटीड रिटर्न और फ्लेक्सी इनकम बेनिफिट",
    desc: "एलआईसी का नया गारंटीड रिटर्न प्लान। मात्र 5 से 16 वर्ष प्रीमियम भरें और जीवन भर प्रति वर्ष बीमा धन का 10% गारंटीड इनकम प्राप्त करें अथवा 5.5% वार्षिक ब्याज पर संचित करें।",
    features: [
      "प्रति वर्ष 10% गारंटीड नियमित आय (Regular Income)",
      "फ्लेक्सी इनकम बेनिफिट (5.5% कम्पाउंडिंग ब्याज पर जमा करने का विकल्प)",
      "गारंटीड एडिशन ₹40 प्रति हजार प्रति वर्ष प्रीमियम भुगतान अवधि में",
      "आजीवन लाइफ कवर"
    ]
  },
  {
    table: "915",
    name: "LIC New Jeevan Anand (न्यू जीवन आनंद)",
    hindiName: "न्यू जीवन आनंद (तालिका 915)",
    category: "Endowment",
    categoryHindi: "एंडोमेंट + आजीवन कवर",
    minAge: 18,
    maxAge: 50,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 10000,
    terms: [
      { term: 15, ppt: 15, maxAge: 50, baseRate: 78.40, bonusRate: 41, fabRate: 20 },
      { term: 20, ppt: 20, maxAge: 50, baseRate: 56.50, bonusRate: 45, fabRate: 40 },
      { term: 21, ppt: 21, maxAge: 49, baseRate: 53.20, bonusRate: 45, fabRate: 45 },
      { term: 25, ppt: 25, maxAge: 45, baseRate: 44.10, bonusRate: 47, fabRate: 70 },
      { term: 30, ppt: 30, maxAge: 40, baseRate: 36.80, bonusRate: 49, fabRate: 100 },
      { term: 35, ppt: 35, maxAge: 35, baseRate: 32.20, bonusRate: 50, fabRate: 150 }
    ],
    tagline: "ज़िंदगी के साथ भी, ज़िंदगी के बाद भी - डबल डेथ बेनिफिट",
    desc: "मैच्योरिटी पर सम एश्योर्ड + बोनस + FAB का भुगतान, और उसके बाद भी आजीवन 100 वर्ष की आयु तक सम एश्योर्ड का रिस्क कवर बिल्कुल मुफ्त!",
    features: [
      "मैच्योरिटी के बाद भी आजीवन मुफ्त रिस्क कवर (100% SA)",
      "डबल एक्सीडेंटल बेनिफिट एवं टर्म राइडर उपलब्ध",
      "बचत के साथ-साथ परिवार की संपूर्ण सुरक्षा",
      "एलआईसी का सबसे लोकप्रिय और भरोसेमंद प्लान"
    ]
  },
  {
    table: "914",
    name: "LIC New Endowment (न्यू एंडोमेंट)",
    hindiName: "न्यू एंडोमेंट (तालिका 914)",
    category: "Endowment",
    categoryHindi: "पारंपरिक बचत योजना",
    minAge: 8,
    maxAge: 55,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 5000,
    terms: [
      { term: 12, ppt: 12, maxAge: 55, baseRate: 88.50, bonusRate: 38, fabRate: 15 },
      { term: 15, ppt: 15, maxAge: 55, baseRate: 68.20, bonusRate: 39, fabRate: 20 },
      { term: 20, ppt: 20, maxAge: 55, baseRate: 48.60, bonusRate: 42, fabRate: 40 },
      { term: 21, ppt: 21, maxAge: 54, baseRate: 46.10, bonusRate: 43, fabRate: 45 },
      { term: 25, ppt: 25, maxAge: 50, baseRate: 38.30, bonusRate: 45, fabRate: 70 },
      { term: 30, ppt: 30, maxAge: 45, baseRate: 32.10, bonusRate: 47, fabRate: 100 },
      { term: 35, ppt: 35, maxAge: 40, baseRate: 28.00, bonusRate: 48, fabRate: 150 }
    ],
    tagline: "सुरक्षित बचत, आकर्षक बोनस एवं निश्चित मैच्योरिटी",
    desc: "सरल बचत और सुरक्षा योजना। बच्चों की शिक्षा, विवाह अथवा स्वयं के भविष्य के लिए अनुशासित दीर्घकालिक बचत का आदर्श साधन।",
    features: [
      "लचीली अवधि (12 से 35 वर्ष)",
      "वार्षिक वेस्टेड बोनस एवं अंतिम अतिरिक्त बोनस",
      "लोन, सरेंडर एवं राइडर सुविधाएं",
      "कर छूट का पूर्ण लाभ"
    ]
  },
  {
    table: "933",
    name: "LIC Jeevan Lakshya (जीवन लक्ष्य / कन्यादान)",
    hindiName: "जीवन लक्ष्य (कन्यादान पॉलिसी - 933)",
    category: "Children",
    categoryHindi: "बच्चों की शिक्षा / कन्यादान",
    minAge: 18,
    maxAge: 50,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 10000,
    terms: [
      { term: 15, ppt: 12, maxAge: 50, baseRate: 74.80, bonusRate: 42, fabRate: 25 },
      { term: 18, ppt: 15, maxAge: 50, baseRate: 60.10, bonusRate: 44, fabRate: 35 },
      { term: 21, ppt: 18, maxAge: 49, baseRate: 50.20, bonusRate: 46, fabRate: 45 },
      { term: 25, ppt: 22, maxAge: 45, baseRate: 42.40, bonusRate: 49, fabRate: 70 }
    ],
    tagline: "पिता रहे या न रहे, बच्चे का भविष्य और विवाह पूर्णतः सुरक्षित",
    desc: "अभिभावक की मृत्यु की स्थिति में सभी आगामी प्रीमियम माफ, परिवार को हर वर्ष 10% आय सहायता और मैच्योरिटी पर 110% सम एश्योर्ड + पूरा बोनस!",
    features: [
      "प्रीमियम वेवर बेनिफिट (दुर्भाग्यपूर्ण घटना पर आगे कोई प्रीमियम नहीं)",
      "प्रति वर्ष 10% बीमा धन की नियमित आय सहायता",
      "मैच्योरिटी पर पूरा 110% बीमा धन + सम्पूर्ण बोनस",
      "कन्या के विवाह अथवा उच्च शिक्षा हेतु सर्वश्रेष्ठ योजना"
    ]
  },
  {
    table: "920",
    name: "LIC 20 Year Money Back (मनी बैक 20 वर्ष)",
    hindiName: "20 वर्ष मनी बैक (तालिका 920)",
    category: "Money Back",
    categoryHindi: "मनी बैक / नकदी वापसी",
    minAge: 13,
    maxAge: 50,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 5000,
    terms: [
      { term: 20, ppt: 15, maxAge: 50, baseRate: 75.20, bonusRate: 39, fabRate: 40 }
    ],
    tagline: "हर 5 वर्ष में 20% मनी बैक और 20वें वर्ष 40% + बोनस",
    desc: "5वें, 10वें और 15वें वर्ष पर बीमा धन का 20%-20%-20% नकद भुगतान, तथा 20वें वर्ष मैच्योरिटी पर शेष 40% बीमा धन + पूरा वेस्टेड बोनस + FAB।",
    features: [
      "5वें वर्ष: 20% बीमा धन",
      "10वें वर्ष: 20% बीमा धन",
      "15वें वर्ष: 20% बीमा धन",
      "20वें वर्ष: शेष 40% + पूरा बोनस + FAB"
    ]
  },
  {
    table: "921",
    name: "LIC 25 Year Money Back (मनी बैक 25 वर्ष)",
    hindiName: "25 वर्ष मनी बैक (तालिका 921)",
    category: "Money Back",
    categoryHindi: "मनी बैक / नकदी वापसी",
    minAge: 13,
    maxAge: 45,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 5000,
    terms: [
      { term: 25, ppt: 20, maxAge: 45, baseRate: 59.80, bonusRate: 41, fabRate: 70 }
    ],
    tagline: "5वें, 10वें, 15वें, 20वें वर्ष 15% मनी बैक + 25वें वर्ष 40% + बोनस",
    desc: "दीर्घकालिक नकदी प्रवाह योजना। हर 5 वर्ष में 15% नकद लाभ तथा 25वें वर्ष 40% बीमा धन के साथ शानदार वेस्टेड बोनस।",
    features: [
      "5वें, 10वें, 15वें व 20वें वर्ष: 15% प्रत्येक (कुल 60%)",
      "25वें वर्ष: 40% बीमा धन + सम्पूर्ण बोनस",
      "मनी बैक लेने के बावजूद मृत्यु पर 100% पूरा रिस्क कवर",
      "व्यापारियों एवं वेतनभोगियों हेतु उत्कृष्ट नकदी प्रवाह"
    ]
  },
  {
    table: "861",
    name: "LIC Bima Ratna (बीमा रत्न)",
    hindiName: "बीमा रत्न (तालिका 861)",
    category: "Money Back",
    categoryHindi: "गारंटीड मनी बैक",
    minAge: 5,
    maxAge: 55,
    minSA: 500000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 25000,
    terms: [
      { term: 15, ppt: 11, maxAge: 55, baseRate: 98.20, bonusRate: 50, fabRate: 0 },
      { term: 20, ppt: 16, maxAge: 50, baseRate: 72.40, bonusRate: 50, fabRate: 0 },
      { term: 25, ppt: 21, maxAge: 45, baseRate: 58.10, bonusRate: 50, fabRate: 0 }
    ],
    tagline: "उच्च गारंटीड एडिशन (₹50 प्रति हजार) और मनी बैक",
    desc: "प्रीमियम भुगतान अवधि में ₹50 प्रति हजार का गारंटीड एडिशन प्रति वर्ष + अंतिम वर्षों में निश्चित मनी बैक सर्वाइवल बेनिफिट।",
    features: [
      "गारंटीड एडिशन ₹50 प्रति हजार प्रति वर्ष",
      "अंतिम दो वर्षों में प्रत्येक वर्ष 25% मनी बैक",
      "मैच्योरिटी पर शेष 50% + संपूर्ण गारंटीड एडिशन",
      "उच्च सम एश्योर्ड पर विशेष प्रीमियम छूट"
    ]
  },
  {
    table: "855",
    name: "LIC Tech Term / Jeevan Amar (जीवन अमर)",
    hindiName: "जीवन अमर (टर्म प्लान - 855)",
    category: "Term",
    categoryHindi: "प्योर टर्म इंश्योरेंस",
    minAge: 18,
    maxAge: 65,
    minSA: 5000000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 500000,
    terms: [
      { term: 20, ppt: 20, maxAge: 60, baseRate: 3.80, bonusRate: 0, fabRate: 0 },
      { term: 25, ppt: 25, maxAge: 55, baseRate: 4.40, bonusRate: 0, fabRate: 0 },
      { term: 30, ppt: 30, maxAge: 50, baseRate: 5.20, bonusRate: 0, fabRate: 0 },
      { term: 35, ppt: 35, maxAge: 45, baseRate: 6.30, bonusRate: 0, fabRate: 0 },
      { term: 40, ppt: 40, maxAge: 40, baseRate: 7.80, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "सबसे कम प्रीमियम में विशाल ₹50 लाख से ₹1 करोड़+ लाइफ कवर",
    desc: "शुद्ध जीवन सुरक्षा टर्म प्लान। परिवार के वित्तीय भविष्य को सुरक्षित करने के लिए सबसे किफायती प्रीमियम पर करोड़ों का जीवन बीमा।",
    features: [
      "अत्यंत कम प्रीमियम पर विशाल बीमा सुरक्षा",
      "नॉन-स्मोकर एवं महिलाओं हेतु विशेष रियायती दरें",
      "सम एश्योर्ड बढ़ाने का विकल्प (Increasing SA Option)",
      "किश्तों में क्लेम भुगतान की सुविधा (5, 10 या 15 वर्ष)"
    ]
  },
  {
    table: "856",
    name: "LIC New Jeevan Shanti (न्यू जीवन शांति)",
    hindiName: "न्यू जीवन शांति (पेंशन प्लान - 856)",
    category: "Pension",
    categoryHindi: "पेंशन / डेफर्ड वार्षिकी",
    minAge: 30,
    maxAge: 79,
    minSA: 150000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 25000,
    terms: [
      { term: 1, ppt: 1, maxAge: 79, baseRate: 1000, bonusRate: 0, fabRate: 0, annuityRate: 8.5 }
    ],
    tagline: "एकमुश्त निवेश - 1 से 12 वर्ष बाद आजीवन गारंटीड पेंशन",
    desc: "एक बार निवेश करें और अपनी इच्छानुसार 1 से 12 वर्ष के बाद आजीवन गारंटीड पेंशन प्राप्त करें। क्रय मूल्य (Purchase Price) नॉमिनी को शत-प्रतिशत वापस।",
    features: [
      "पेंशन दर आवेदन के समय ही आजीवन गारंटीड",
      "डिफरमेंट पीरियड (1 से 12 वर्ष) चुनने की स्वतंत्रता",
      "सिंगल अथवा जॉइंट लाइफ पेंशन विकल्प",
      "नॉमिनी को पूरी जमा पूंजी 100% वापसी गारंटी"
    ]
  },
  {
    table: "872",
    name: "LIC Amritbaal (अमृतबाल)",
    hindiName: "अमृतबाल (तालिका 872)",
    category: "Children",
    categoryHindi: "बच्चों की उच्च शिक्षा",
    minAge: 0, // 30 days
    maxAge: 13,
    minSA: 200000,
    maxSA: "कोई सीमा नहीं (No Limit)",
    saStep: 25000,
    terms: [
      { term: 15, ppt: 5, maxAge: 10, baseRate: 185.00, bonusRate: 80, fabRate: 0 },
      { term: 18, ppt: 6, maxAge: 12, baseRate: 155.00, bonusRate: 80, fabRate: 0 },
      { term: 20, ppt: 7, maxAge: 13, baseRate: 135.00, bonusRate: 80, fabRate: 0 }
    ],
    tagline: "रिकॉर्ड ₹80 प्रति हजार का सर्वाधिक गारंटीड एडिशन",
    desc: "नवजात शिशु से 13 वर्ष के बच्चों के लिए विशेष बाल योजना। प्रति वर्ष ₹80 प्रति हजार का अद्वितीय गारंटीड एडिशन बच्चे के उच्च अध्ययन हेतु बड़ा कोष तैयार करता है।",
    features: [
      "रिकॉर्ड ₹80 प्रति हजार गारंटीड एडिशन प्रत्येक वर्ष",
      "आयु 18 से 25 वर्ष पर मैच्योरिटी विकल्प",
      "प्रीमियम वेवर बेनिफिट (PWB) राइडर",
      "किश्तों में मैच्योरिटी लेने का विकल्प"
    ]
  },
  {
    table: "943",
    name: "LIC Aadhaar Stambh (आधार स्तंभ)",
    hindiName: "आधार स्तंभ (तालिका 943)",
    category: "Micro",
    categoryHindi: "माइक्रो इंश्योरेंस (पुरुष)",
    minAge: 8,
    maxAge: 55,
    minSA: 75000,
    maxSA: "₹3,00,000",
    saStep: 5000,
    terms: [
      { term: 10, ppt: 10, maxAge: 55, baseRate: 89.20, bonusRate: 25, fabRate: 10 },
      { term: 15, ppt: 15, maxAge: 55, baseRate: 58.40, bonusRate: 30, fabRate: 15 },
      { term: 20, ppt: 20, maxAge: 50, baseRate: 41.50, bonusRate: 35, fabRate: 20 }
    ],
    tagline: "आधार कार्ड धारक पुरुषों हेतु कम प्रीमियम पर सुरक्षित बचत",
    desc: "बिना किसी कठिन मेडिकल टेस्ट के साधारण पुरुषों के लिए कम प्रीमियम वाली सुविधाजनक जीवन बीमा एवं बचत योजना।",
    features: [
      "विशेष रूप से आधार कार्ड धारक पुरुषों हेतु",
      "लोयल्टी एडिशन (Loyalty Addition) का लाभ",
      "ऑटो कवर सुविधा (Auto Cover Benefit)",
      "कम लागत में संपूर्ण परिवार सुरक्षा"
    ]
  },
  {
    table: "944",
    name: "LIC Aadhaar Shila (आधार शिला)",
    hindiName: "आधार शिला (तालिका 944)",
    category: "Micro",
    categoryHindi: "माइक्रो इंश्योरेंस (महिला)",
    minAge: 8,
    maxAge: 55,
    minSA: 75000,
    maxSA: "₹3,00,000",
    saStep: 5000,
    terms: [
      { term: 10, ppt: 10, maxAge: 55, baseRate: 86.40, bonusRate: 25, fabRate: 10 },
      { term: 15, ppt: 15, maxAge: 55, baseRate: 56.10, bonusRate: 30, fabRate: 15 },
      { term: 20, ppt: 20, maxAge: 50, baseRate: 39.80, bonusRate: 35, fabRate: 20 }
    ],
    tagline: "आधार कार्ड धारक महिलाओं हेतु रियायती प्रीमियम एवं बचत",
    desc: "महिलाओं के वित्तीय सशक्तिकरण एवं सुरक्षा हेतु विशेष रियायती दरों पर तैयार की गई एलआईसी की सुरक्षित योजना।",
    features: [
      "विशेष रूप से आधार कार्ड धारक महिलाओं हेतु",
      "पुरुषों की तुलना में कम प्रीमियम दरें",
      "लोयल्टी एडिशन एवं लोन सुविधा",
      "गृहणियों व कामकाजी महिलाओं हेतु उपयुक्त"
    ]
  },
  {
    table: "948",
    name: "LIC SIIP (सीप - यूलिप)",
    hindiName: "सीप (SIIP - तालिका 948)",
    category: "ULIP",
    categoryHindi: "यूलिप / मार्केट लिंक्ड",
    minAge: 90, // days (0)
    maxAge: 65,
    minSA: 400000,
    maxSA: "कोई सीमा नहीं",
    saStep: 40000,
    terms: [
      { term: 10, ppt: 10, maxAge: 65, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 15, ppt: 15, maxAge: 60, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 20, ppt: 20, maxAge: 55, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 25, ppt: 25, maxAge: 50, baseRate: 100, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "म्यूचुअल फंड जैसा रिटर्न + 10 से 20 गुना लाइफ कवर",
    desc: "यूनिट लिंक्ड बीमा योजना। शेयर बाजार की ग्रोथ का लाभ, गारंटीड एडिशन, 4 अलग-अलग फंड विकल्प तथा मॉर्टेलिटी चार्ज की शत-प्रतिशत वापसी!",
    features: [
      "मॉर्टेलिटी चार्ज रिफंड (मैच्योरिटी पर पूरा बीमा शुल्क वापस)",
      "गारंटीड एडिशन 5%, 10%, 15%, 20% और 25%",
      "4 फंड विकल्प: बॉन्ड, सिक्योर्ड, बैलेंस्ड व ग्रोथ",
      "धारा 10(10D) के तहत कर मुक्त रिटर्न"
    ]
  },
  {
    table: "934",
    name: "LIC Jeevan Tarun (जीवन तरुण)",
    hindiName: "जीवन तरुण (तालिका 934)",
    category: "Children",
    categoryHindi: "बाल योजना / उच्च शिक्षा",
    minAge: 0, // 90 days
    maxAge: 12,
    minSA: 75000,
    maxSA: "कोई सीमा नहीं",
    saStep: 5000,
    terms: [
      { term: 25, ppt: 20, maxAge: 12, baseRate: 44.50, bonusRate: 42, fabRate: 45 }
    ],
    tagline: "आयु 20 से 24 वर्ष पर पढ़ाई का खर्च व 25वें वर्ष एकमुश्त फंड",
    desc: "0 से 12 वर्ष के बच्चों के लिए विशेष भागीदारी बाल योजना। 20 से 24 वर्ष की उच्च शिक्षा आयु में 5% से 15% वार्षिक नकदी और 25वें वर्ष पर पूर्ण मैच्योरिटी।",
    features: [
      "4 सर्वाइवल बेनिफिट विकल्प उपलब्ध",
      "प्रीमियम वेवर बेनिफिट (PWB) राइडर उपलब्ध",
      "बच्चों के सुनहरे भविष्य हेतु विशेष रूप से डिजाइन",
      "80C एवं 10(10D) टैक्स लाभ"
    ]
  },
  {
    table: "932",
    name: "LIC Children's Money Back (न्यू चिल्ड्रन्स मनी बैक)",
    hindiName: "न्यू चिल्ड्रन्स मनी बैक (तालिका 932)",
    category: "Children",
    categoryHindi: "बाल योजना / मनी बैक",
    minAge: 0,
    maxAge: 12,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं",
    saStep: 10000,
    terms: [
      { term: 25, ppt: 20, maxAge: 12, baseRate: 45.20, bonusRate: 40, fabRate: 40 }
    ],
    tagline: "18, 20 व 22 वर्ष पर 20% मनी बैक और 25 वर्ष पर 40% + बोनस",
    desc: "बच्चे की 18वीं, 20वीं व 22वीं वर्षगांठ पर 20% नकदी और 25 वर्ष की आयु में शेष 40% + सम्पूर्ण बोनस का विशाल एकमुश्त भुगतान।",
    features: [
      "18, 20 और 22 वर्ष पर 20%-20%-20% मनी बैक",
      "25 वर्ष पर 40% बीमा धन + सम्पूर्ण बोनस",
      "प्रीमियम वेवर बेनिफिट (PWB) सुविधा",
      "उच्च शिक्षा के प्रत्येक पड़ाव पर नकदी"
    ]
  },
  {
    table: "860",
    name: "LIC Bima Jyoti (बीमा ज्योति)",
    hindiName: "बीमा ज्योति (तालिका 860)",
    category: "Endowment",
    categoryHindi: "गारंटीड बचत योजना",
    minAge: 0,
    maxAge: 60,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं",
    saStep: 25000,
    terms: [
      { term: 15, ppt: 10, maxAge: 60, baseRate: 82.50, bonusRate: 50, fabRate: 0 },
      { term: 16, ppt: 11, maxAge: 59, baseRate: 75.80, bonusRate: 50, fabRate: 0 },
      { term: 18, ppt: 13, maxAge: 57, baseRate: 64.20, bonusRate: 50, fabRate: 0 },
      { term: 20, ppt: 15, maxAge: 55, baseRate: 55.40, bonusRate: 50, fabRate: 0 }
    ],
    tagline: "प्रति वर्ष ₹50 प्रति हजार का निश्चित गारंटीड एडिशन",
    desc: "प्रत्येक पॉलिसी वर्ष के अंत में बीमा धन पर ₹50 प्रति हजार का गारंटीड बोनस जुड़ता है। बाजार के उतार-चढ़ाव से मुक्त 100% सुरक्षित रिटर्न।",
    features: [
      "₹50 प्रति हजार गारंटीड एडिशन प्रत्येक वर्ष",
      "सीमित प्रीमियम भुगतान अवधि (Term से 5 वर्ष कम)",
      "लोन और सरेंडर 2 वर्ष बाद",
      "गारंटीड रिटर्न चाहने वालों हेतु श्रेष्ठ"
    ]
  },
  {
    table: "863",
    name: "LIC Dhan Rekha (धन रेखा)",
    hindiName: "धन रेखा (तालिका 863)",
    category: "Money Back",
    categoryHindi: "गारंटीड मनी बैक",
    minAge: 0,
    maxAge: 55,
    minSA: 200000,
    maxSA: "कोई सीमा नहीं",
    saStep: 25000,
    terms: [
      { term: 20, ppt: 10, maxAge: 55, baseRate: 102.50, bonusRate: 50, fabRate: 0 },
      { term: 30, ppt: 15, maxAge: 45, baseRate: 68.20, bonusRate: 55, fabRate: 0 },
      { term: 40, ppt: 20, maxAge: 35, baseRate: 51.40, bonusRate: 60, fabRate: 0 }
    ],
    tagline: "आधे समय प्रीमियम भरें, नियमित मनी बैक पाएं + 100% मैच्योरिटी",
    desc: "अवधि से ठीक आधी अवधि तक प्रीमियम भुगतान! नियमित अंतराल पर 10-15% सर्वाइवल बेनिफिट और मैच्योरिटी पर पूरा 100% बीमा धन + गारंटीड एडिशन।",
    features: [
      "सीमित प्रीमियम (टर्म से आधा PPT)",
      "गारंटीड एडिशन ₹50 से ₹60 प्रति हजार",
      "महिलाओं हेतु विशेष रियायती प्रीमियम",
      "मैच्योरिटी पर पूरा 100% बीमा धन वापस"
    ]
  },
  {
    table: "862",
    name: "LIC Saral Pension (सरल पेंशन)",
    hindiName: "सरल पेंशन (तालिका 862)",
    category: "Pension",
    categoryHindi: "तत्काल पेंशन (Immediate Annuity)",
    minAge: 40,
    maxAge: 80,
    minSA: 250000,
    maxSA: "कोई सीमा नहीं",
    saStep: 25000,
    terms: [
      { term: 1, ppt: 1, maxAge: 80, baseRate: 1000, bonusRate: 0, fabRate: 0, annuityRate: 7.2 }
    ],
    tagline: "एकमुश्त निवेश - अगले ही महीने से जीवन भर पेंशन प्रारंभ",
    desc: "मानक तत्काल एन्युइटी प्लान। एक बार एकमुश्त प्रीमियम जमा करें और तुरंत अगले माह से आजीवन पेंशन प्राप्त करें। मूल पूंजी नॉमिनी को 100% वापस।",
    features: [
      "अगले ही माह से पेंशन चालू (Immediate Annuity)",
      "पेंशन दर आजीवन गारंटीड (कभी कम नहीं होगी)",
      "सिंगल अथवा पति-पत्नी हेतु संयुक्त पेंशन",
      "मृत्यु पर क्रय मूल्य 100% नॉमिनी को वापस"
    ]
  },
  {
    table: "858",
    name: "LIC Saral Jeevan Bima (सरल जीवन बीमा)",
    hindiName: "सरल जीवन बीमा (तालिका 858)",
    category: "Term",
    categoryHindi: "मानक टर्म इंश्योरेंस",
    minAge: 18,
    maxAge: 65,
    minSA: 500000,
    maxSA: "₹25,00,000",
    saStep: 50000,
    terms: [
      { term: 10, ppt: 10, maxAge: 65, baseRate: 4.50, bonusRate: 0, fabRate: 0 },
      { term: 20, ppt: 20, maxAge: 55, baseRate: 6.20, bonusRate: 0, fabRate: 0 },
      { term: 30, ppt: 30, maxAge: 45, baseRate: 8.80, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "आईआरडीएआई मानक सरल और किफायती टर्म प्लान",
    desc: "साधारण शर्तों वाला स्टैंडर्ड टर्म प्लान। कम प्रीमियम पर ₹5 लाख से ₹25 लाख तक शुद्ध जीवन सुरक्षा।",
    features: [
      "मानक एवं पारदर्शी नियम व शर्तें",
      "कम आय वाले ग्राहकों हेतु भी उपलब्ध",
      "सस्ता एवं सुलभ टर्म कवर",
      "नियमित व सीमित भुगतान विकल्प"
    ]
  },
  {
    table: "917",
    name: "LIC Single Premium Endowment (सिंगल प्रीमियम एंडोमेंट)",
    hindiName: "सिंगल प्रीमियम एंडोमेंट (तालिका 917)",
    category: "Endowment",
    categoryHindi: "एकमुश्त बचत योजना",
    minAge: 0, // 90 days
    maxAge: 65,
    minSA: 50000,
    maxSA: "कोई सीमा नहीं",
    saStep: 5000,
    terms: [
      { term: 10, ppt: 1, maxAge: 65, baseRate: 650.00, bonusRate: 40, fabRate: 15 },
      { term: 15, ppt: 1, maxAge: 60, baseRate: 520.00, bonusRate: 43, fabRate: 25 },
      { term: 20, ppt: 1, maxAge: 55, baseRate: 420.00, bonusRate: 46, fabRate: 40 },
      { term: 25, ppt: 1, maxAge: 50, baseRate: 340.00, bonusRate: 48, fabRate: 60 }
    ],
    tagline: "मात्र एक बार प्रीमियम भरें और भारी बोनस के साथ मैच्योरिटी पाएं",
    desc: "एक बार निवेश करें और बार-बार प्रीमियम भरने के झंझट से मुक्ति पाएं। निश्चित अवधि बाद सम एश्योर्ड + बोनस + FAB प्राप्त करें।",
    features: [
      "एकमुश्त एकल प्रीमियम (One-Time Single Payment)",
      "90 दिन के शिशु से 65 वर्ष के बुजुर्ग हेतु",
      "पॉलिसी जारी होने के तुरंत बाद लोन सुविधा",
      "FD से बेहतर रिटर्न और लाइफ कवर"
    ]
  },
  {
    table: "849",
    name: "LIC Nivesh Plus (निवेश प्लस - यूलिप)",
    hindiName: "निवेश प्लस (तालिका 849)",
    category: "ULIP",
    categoryHindi: "सिंगल प्रीमियम यूलिप",
    minAge: 0, // 90 days
    maxAge: 70,
    minSA: 100000,
    maxSA: "कोई सीमा नहीं",
    saStep: 10000,
    terms: [
      { term: 10, ppt: 1, maxAge: 70, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 15, ppt: 1, maxAge: 65, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 20, ppt: 1, maxAge: 60, baseRate: 100, bonusRate: 0, fabRate: 0 },
      { term: 25, ppt: 1, maxAge: 55, baseRate: 100, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "एकमुश्त निवेश - शेयर बाजार ग्रोथ + गारंटीड एडिशन + टैक्स फ्री मैच्योरिटी",
    desc: "सिंगल प्रीमियम यूनिट लिंक्ड योजना। 4 प्रकार के फंड विकल्प (Bond, Secured, Balanced, Growth) और गारंटीड एडिशन्स का दोहरा लाभ।",
    features: [
      "एकल प्रीमियम यूलिप (Single Premium ULIP)",
      "गारंटीड एडिशन विशिष्ट अवधियों पर फंड में जुड़ते हैं",
      "फ्री फंड स्विचिंग सुविधा",
      "धारा 10(10D) कर मुक्त परिपक्वता"
    ]
  },
  {
    table: "905",
    name: "LIC Cancer Cover (कैंसर कवर)",
    hindiName: "कैंसर कवर (तालिका 905)",
    category: "Term",
    categoryHindi: "हेल्थ / गंभीर बीमारी",
    minAge: 20,
    maxAge: 65,
    minSA: 1000000,
    maxSA: "₹50,00,000",
    saStep: 100000,
    terms: [
      { term: 10, ppt: 10, maxAge: 65, baseRate: 1.80, bonusRate: 0, fabRate: 0 },
      { term: 20, ppt: 20, maxAge: 55, baseRate: 3.20, bonusRate: 0, fabRate: 0 },
      { term: 30, ppt: 30, maxAge: 45, baseRate: 5.50, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "कैंसर के इलाज हेतु विशाल एकमुश्त वित्तीय सहायता व प्रीमियम छूट",
    desc: "विशेष स्वास्थ्य बीमा योजना। अर्ली अथवा मेजर स्टेज कैंसर डाइग्नोस होने पर एकमुश्त आर्थिक सहायता, 3 वर्ष तक आगामी प्रीमियम माफ तथा नियमित आय लाभ।",
    features: [
      "अर्ली स्टेज पर 25% एकमुश्त + 3 वर्ष प्रीमियम माफ",
      "मेजर स्टेज पर 100% एकमुश्त + प्रति माह 1% आय सहायता",
      "सम एश्योर्ड 10% प्रति वर्ष बढ़ने का विकल्प",
      "अत्यंत किफायती वार्षिक प्रीमियम"
    ]
  },
  {
    table: "874",
    name: "LIC Yuva Term (युवा टर्म)",
    hindiName: "युवा टर्म (तालिका 874)",
    category: "Term",
    categoryHindi: "प्योर टर्म / युवा वर्ग",
    minAge: 18,
    maxAge: 45,
    minSA: 5000000,
    maxSA: "कोई सीमा नहीं",
    saStep: 500000,
    terms: [
      { term: 20, ppt: 20, maxAge: 45, baseRate: 3.20, bonusRate: 0, fabRate: 0 },
      { term: 30, ppt: 30, maxAge: 45, baseRate: 4.60, bonusRate: 0, fabRate: 0 },
      { term: 40, ppt: 40, maxAge: 40, baseRate: 6.50, bonusRate: 0, fabRate: 0 }
    ],
    tagline: "18 से 45 वर्ष के युवाओं हेतु सबसे कम प्रीमियम पर ₹50 लाख+ सुरक्षा",
    desc: "एलआईसी का नया युवा केंद्रित टर्म प्लान। युवा पीढ़ी के वित्तीय दायित्वों को पूरा करने हेतु नाममात्र प्रीमियम पर करोड़ों का टर्म कवर।",
    features: [
      "विशेष रूप से 18 से 45 वर्ष के युवाओं हेतु",
      "नॉन-स्मोकर एवं फिटनेस पर विशेष छूट",
      "सीमित अथवा नियमित प्रीमियम भुगतान विकल्प",
      "पारिवारिक भविष्य की पूर्ण सुरक्षा"
    ]
  }
];

// Calculation Functions
function calculateAgeFromDob(dobString) {
  if (!dobString) return null;
  const dob = new Date(dobString);
  if (isNaN(dob.getTime())) return null;

  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthDays;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    totalAgeYears: years + (months / 12)
  };
}

// Complete Quotation Calculator
function calculateLicPlanQuotation(planTable, age, sumAssured, termValue, paymentMode = 'Yearly') {
  const plan = LIC_ALL_PLANS.find(p => p.table === String(planTable)) || LIC_ALL_PLANS[0];
  const ageNum = parseInt(age, 10) || 30;
  const sa = Math.max(plan.minSA, parseInt(sumAssured, 10) || plan.minSA);

  // Term selection
  let selectedTermObj = plan.terms.find(t => t.term === parseInt(termValue, 10));
  if (!selectedTermObj) {
    selectedTermObj = plan.terms[0];
  }

  const term = selectedTermObj.term;
  const ppt = selectedTermObj.ppt;

  // Age eligibility
  const isEligible = (ageNum >= plan.minAge && ageNum <= selectedTermObj.maxAge);
  let eligibilityMsg = isEligible 
    ? `✅ पात्र (Eligible): ग्राहक की आयु ${ageNum} वर्ष इस प्लान के लिए पूर्णतः मान्य है।`
    : `❌ अपात्र (Not Eligible): इस टर्म हेतु न्यूनतम आयु ${plan.minAge} वर्ष व अधिकतम आयु ${selectedTermObj.maxAge} वर्ष है।`;

  // Base tabular rate adjusted for age
  let baseRate = selectedTermObj.baseRate;
  if (plan.table !== '856') {
    const ageDiff = (ageNum - 30);
    if (ageDiff > 0) {
      baseRate += (ageDiff * 0.45);
    } else if (ageDiff < 0) {
      baseRate = Math.max(baseRate * 0.75, baseRate + (ageDiff * 0.35));
    }
  }

  // High SA Rebate per 1000 SA
  let saRebate = 0;
  if (sa >= 1000000) saRebate = 2.50;
  else if (sa >= 500000) saRebate = 2.00;
  else if (sa >= 200000) saRebate = 1.50;

  let effectiveRate = Math.max(1, baseRate - saRebate);

  // Annual basic premium before mode factor
  let annualBasic = (sa / 1000) * effectiveRate;

  // Mode calculations
  // Mode Rebate: Yearly gets 2% rebate, Half-Yearly gets 1% rebate
  const yearlyBasic = Math.round(annualBasic * 0.98);
  const halfYearlyBasic = Math.round((annualBasic * 0.99) / 2);
  const quarterlyBasic = Math.round(annualBasic / 4);
  const monthlyBasic = Math.round(annualBasic / 12);

  let selectedBasic = yearlyBasic;
  if (paymentMode === 'Half-Yearly') selectedBasic = halfYearlyBasic;
  else if (paymentMode === 'Quarterly') selectedBasic = quarterlyBasic;
  else if (paymentMode === 'Monthly') selectedBasic = monthlyBasic;

  // GST: 4.5% in Year 1, 2.25% in Subsequent Years
  const gstYear1 = Math.round(selectedBasic * 0.045);
  const gstSubsequent = Math.round(selectedBasic * 0.0225);

  const totalYear1 = selectedBasic + gstYear1;
  const totalSubsequent = selectedBasic + gstSubsequent;

  // Total investment across PPT
  const totalInvestment = (yearlyBasic * ppt);

  // Bonus & Maturity calculation
  const bonusRate = selectedTermObj.bonusRate || 0;
  const fabRate = selectedTermObj.fabRate || 0;

  // Estimated Vested Bonus = (BonusRate * SA / 1000) * Term
  const vestedBonus = Math.round((bonusRate * sa / 1000) * (term === 100 ? ppt : term));
  const fabBonus = Math.round((fabRate * sa / 1000));

  let estimatedMaturity = sa + vestedBonus + fabBonus;
  let survivalBenefitText = "";

  if (plan.table === '945') {
    // Jeevan Umang gives 8% SA every year for life after PPT
    const annualPension = (sa * 0.08);
    survivalBenefitText = `PPT (${ppt} वर्ष) के बाद प्रति वर्ष ₹${annualPension.toLocaleString('en-IN')} (8% SA) आजीवन गारंटीड पेंशन + 100 वर्ष की आयु पर ₹${estimatedMaturity.toLocaleString('en-IN')}`;
  } else if (plan.table === '871') {
    // Jeevan Utsav gives 10% SA every year for life
    const annualIncome = (sa * 0.10);
    survivalBenefitText = `PPT (${ppt} वर्ष) के बाद प्रति वर्ष ₹${annualIncome.toLocaleString('en-IN')} (10% SA) आजीवन गारंटीड नियमित आय`;
  } else if (plan.table === '920') {
    survivalBenefitText = `5वें, 10वें, 15वें वर्ष पर ₹${(sa * 0.20).toLocaleString('en-IN')} (20%) तथा 20वें वर्ष मैच्योरिटी पर ₹${(sa * 0.40 + vestedBonus + fabBonus).toLocaleString('en-IN')}`;
  } else if (plan.table === '921') {
    survivalBenefitText = `5वें, 10वें, 15वें, 20वें वर्ष पर ₹${(sa * 0.15).toLocaleString('en-IN')} (15%) तथा 25वें वर्ष मैच्योरिटी पर ₹${(sa * 0.40 + vestedBonus + fabBonus).toLocaleString('en-IN')}`;
  } else if (plan.table === '856') {
    const annualAnnuity = Math.round(sa * 0.085);
    estimatedMaturity = sa;
    survivalBenefitText = `आजीवन गारंटीड पेंशन: ₹${annualAnnuity.toLocaleString('en-IN')} प्रति वर्ष + मृत्यु पर ₹${sa.toLocaleString('en-IN')} नॉमिनी को शत-प्रतिशत वापस।`;
  } else if (plan.table === '862') {
    const annualAnnuity = Math.round(sa * 0.072);
    estimatedMaturity = sa;
    survivalBenefitText = `तत्काल आजीवन पेंशन: ₹${annualAnnuity.toLocaleString('en-IN')} प्रति वर्ष (अगले माह से शुरू) + मृत्यु पर ₹${sa.toLocaleString('en-IN')} नॉमिनी को शत-प्रतिशत वापस।`;
  } else if (plan.table === '863') {
    survivalBenefitText = `नियमित मनी बैक सर्वाइवल बेनिफिट + मैच्योरिटी पर पूरा 100% बीमा धन + ₹50-60/हजार गारंटीड एडिशन`;
  } else if (plan.table === '932') {
    survivalBenefitText = `18वें, 20वें, 22वें वर्ष पर ₹${(sa * 0.20).toLocaleString('en-IN')} (20% प्रत्येक) तथा 25वें वर्ष पर ₹${(sa * 0.40 + vestedBonus + fabBonus).toLocaleString('en-IN')}`;
  } else if (plan.table === '860') {
    survivalBenefitText = `निश्चित गारंटीड एडिशन: ₹50 प्रति हजार प्रति वर्ष (कुल गारंटीड बोनस ₹${((50 * sa / 1000) * term).toLocaleString('en-IN')})`;
  }

  const netProfit = Math.max(0, estimatedMaturity - totalInvestment);
  const dailySavings = Math.round(selectedBasic / (paymentMode === 'Yearly' ? 365 : paymentMode === 'Half-Yearly' ? 180 : paymentMode === 'Quarterly' ? 90 : 30));

  return {
    plan,
    age: ageNum,
    sumAssured: sa,
    term,
    ppt,
    paymentMode,
    isEligible,
    eligibilityMsg,
    basicPremium: selectedBasic,
    yearlyBasic,
    halfYearlyBasic,
    quarterlyBasic,
    monthlyBasic,
    gstYear1,
    gstSubsequent,
    totalYear1,
    totalSubsequent,
    dailySavings,
    totalInvestment,
    vestedBonus,
    fabBonus,
    estimatedMaturity,
    netProfit,
    survivalBenefitText,
    lifeCoverNormal: sa,
    lifeCoverAccidental: (plan.table === '915' ? sa * 2 : sa * 2)
  };
}

const LIC_PLANS = LIC_ALL_PLANS;

if (typeof window !== 'undefined') {
  window.LIC_ALL_PLANS = LIC_ALL_PLANS;
  window.LIC_PLANS = LIC_ALL_PLANS;
  window.calculateAgeFromDob = calculateAgeFromDob;
  window.calculateLicPlanQuotation = calculateLicPlanQuotation;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LIC_ALL_PLANS, LIC_PLANS, calculateAgeFromDob, calculateLicPlanQuotation };
}

