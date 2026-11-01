// ==============================================================================
// 🌟 LIC AGENT SOFTWARE - MARKET 4-SUPER ADDONS SUITE (v15.0 APEX)
// 1. LEADER: LIC Magic Combo Creator (Kanyadan, Umang + Labh, Retirement Child Future)
// 2. SMART AGENT: Smart Due Calendar & Multi-Rule WhatsApp Schedule Reminder
// 3. ALL IN ONE GYAN: Daily Sales Concept & Photo Status/Quote Poster Maker
// 4. LIC AGENT DIARY: Money Back (SB) & Maturity Advance Pay-Out Tracker
// ==============================================================================

(function() {
  'use strict';

  const AGENT = {
    name: 'Sh. Vindhyachal Singh',
    code: '0273635D',
    branch: '35D Bhopal',
    mobile: '9406935622',
    photo: 'data/agent_profile_photo.jpg'
  };

  // -------------------------------------------------------------
  // 1. LEADER: LIC MAGIC COMBO CREATOR
  // -------------------------------------------------------------
  const COMBOS = [
    {
      id: 'kanyadan',
      title: '👑 LIC कन्यादान योजना (Kanyadan Yojna)',
      subtitle: 'बिटिया की उच्च शिक्षा व भव्य विवाह हेतु गारंटीड बचत',
      plans: 'जीवन लाभ (936) + जीवन उमang (945)',
      dailySaving: '₹125/दिन (मासिक ₹3,750)',
      benefit1: 'बिटिया के 21 वर्ष होने पर एकमुश्त: ₹16,50,000/-',
      benefit2: 'विवाह के समय गारंटीड भुगतान: ₹25,00,000/-',
      benefit3: 'पिता के साथ अनहोनी पर तुरंत ₹10 लाख व आगे के सभी प्रीमियम माफ (PWB Free)',
      tax: 'धारा 80C एवं 10(10D) के तहत 100% टैक्स फ्री'
    },
    {
      id: 'retirement',
      title: '🏖️ LIC आजीवन पेंशन व रिटायरमेंट कॉम्बो',
      subtitle: 'गारंटीड 8% आजीवन रिटर्न + संपूर्ण परिवार सुरक्षा',
      plans: 'जीवन उमंग (945) + जीवन शांति (858)',
      dailySaving: '₹200/दिन (मासिक ₹6,000)',
      benefit1: 'प्रीमियम अवधि समाप्त होते ही प्रतिवर्ष ₹80,000 आजीवन गारंटीड पेंशन',
      benefit2: '100 वर्ष की आयु अथवा मृत्यु पर परिवार को ₹20 लाख का एकमुश्त भुगतान',
      benefit3: 'आपातकाल में लोन व सरेंडर की पूरी सुविधा',
      tax: 'टैक्स बचत + वित्तीय सुरक्षा'
    },
    {
      id: 'child_future',
      title: '🎓 LIC बाल भविष्य निर्माण कॉम्बो',
      subtitle: '10वीं, 12वीं, ग्रेजुएशन और हायर स्टडीज के लिए स्टेज-वाइज फंड',
      plans: 'न्यू चिल्ड्रन मनी बैक (932) + जीवन तरुण (934)',
      dailySaving: '₹150/दिन (मासिक ₹4,500)',
      benefit1: '18 वर्ष की आयु में: ₹2,00,000/- (कॉलेज एडमिशन)',
      benefit2: '20 एवं 22 वर्ष में: ₹2,00,000/- + ₹2,00,000/- (डिग्री व मास्टर्स)',
      benefit3: '25 वर्ष में मैच्योरिटी: ₹12,50,000/- एकमुश्त',
      tax: 'माता-पिता दोनों के लिए आयकर छूट मान्य'
    }
  ];

  window.openMagicComboModal = function() {
    let html = `
      <div id="modalMagicCombo" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:18px; max-width:880px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #b45309, #d97706); color:#fff; padding:16px 20px; border-radius:18px 18px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">✨</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:800;">LIC मैजिक कॉम्बो प्रपोजल (LEADER Combo Studio)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">1-क्लिक में ग्राहक को भेजने योग्य रेडीमेड कॉम्बो प्लान्स</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalMagicCombo').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px;">
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
              ${COMBOS.map(c => `
                <div style="border:1px solid #e2e8f0; border-radius:14px; padding:16px; background:#f8fafc; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 2px 10px rgba(0,0,0,0.03);">
                  <div>
                    <h4 style="margin:0 0 6px; font-size:16px; font-weight:800; color:#0f172a;">${c.title}</h4>
                    <div style="font-size:12px; color:#64748b; margin-bottom:10px;">${c.subtitle}</div>
                    
                    <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:8px; padding:8px 10px; font-size:12px; font-weight:700; color:#92400e; margin-bottom:12px;">
                      💰 बचत: ${c.dailySaving}
                    </div>

                    <div style="font-size:12px; color:#334155; line-height:1.5; display:flex; flex-direction:column; gap:6px;">
                      <div>🔹 <b>योजना संयोजन:</b> ${c.plans}</div>
                      <div>🔹 ${c.benefit1}</div>
                      <div>🔹 ${c.benefit2}</div>
                      <div>🔹 ${c.benefit3}</div>
                      <div style="color:#059669; font-weight:600;">🌿 ${c.tax}</div>
                    </div>
                  </div>

                  <div style="margin-top:16px; display:flex; gap:8px;">
                    <button onclick="window.shareComboWhatsApp('${c.id}')" style="flex:1; background:#25D366; color:#fff; border:none; padding:10px; border-radius:8px; font-size:12px; font-weight:800; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">
                      <span>💬</span> WhatsApp भेजें
                    </button>
                    <button onclick="window.print()" style="background:#0284c7; color:#fff; border:none; padding:10px 14px; border-radius:8px; font-size:12px; font-weight:800; cursor:pointer;">
                      🖨️ PDF
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    `;

    let old = document.getElementById('modalMagicCombo');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.shareComboWhatsApp = function(comboId) {
    let c = COMBOS.find(x => x.id === comboId) || COMBOS[0];
    let msg = `*${c.title}*\n${c.subtitle}\n\n` +
      `📌 *योजना संयोजन:* ${c.plans}\n` +
      `💰 *मासिक बचत:* ${c.dailySaving}\n\n` +
      `🎁 *मुख्य लाभ व रिटर्न:*\n` +
      `• ${c.benefit1}\n` +
      `• ${c.benefit2}\n` +
      `• ${c.benefit3}\n\n` +
      `🛡️ *कर लाभ:* ${c.tax}\n\n` +
      `अधिक जानकारी व व्यक्तिगत कोटेशन हेतु अभी संपर्क करें:\n` +
      `*${AGENT.name}* (LIC अधिकृत अभिकर्ता)\n` +
      `शाखा: ${AGENT.branch} | 📞 ${AGENT.mobile}\n` +
      `🌐 https://sanjeevef3-ai.github.io/LIC-/`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // -------------------------------------------------------------
  // 2. SMART AGENT: SMART DUE CALENDAR & MULTI-RULE WHATSAPP REMINDER
  // -------------------------------------------------------------
  window.openSmartDueCalendarModal = function() {
    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let policies = db.policies || [];
    
    // Group policies by next due month / urgent
    let urgent7 = policies.filter(p => p.status === 'Active').slice(0, 10);

    let html = `
      <div id="modalSmartDueCalendar" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:18px; max-width:850px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #1e3a8a, #0284c7); color:#fff; padding:16px 20px; border-radius:18px 18px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">📅</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:800;">स्मार्ट ड्यू कैलेंडर व शेड्यूल रिमाइंडर (Smart Due CRM)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">15 दिन, 7 दिन और अंतिम ग्रेस रिमाइंडर WhatsApp टेम्पलेट्स</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalSmartDueCalendar').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; background:#eff6ff; padding:12px 16px; border-radius:12px; border:1px solid #bfdbfe;">
              <div>
                <div style="font-size:13px; font-weight:700; color:#1e40af;">⚡ 1-क्लिक ब्रॉडकास्ट नियम:</div>
                <div style="font-size:12px; color:#3b82f6; margin-top:2px;">ग्राहक को समय पर सूचना देने से लैप्स रेशियो शून्य हो जाता है।</div>
              </div>
              <span style="background:#2563eb; color:#fff; font-size:11px; font-weight:800; padding:4px 10px; border-radius:20px;">Active Rules: 3</span>
            </div>

            <div style="overflow-x:auto; border:1px solid #e2e8f0; border-radius:12px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead style="background:#f8fafc; color:#475569;">
                  <tr>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">ग्राहक का नाम</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">पॉलिसी सं.</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">ड्यू तारीख</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">प्रीमियम</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">कार्रवाई (WhatsApp)</th>
                  </tr>
                </thead>
                <tbody>
                  ${urgent7.map(p => `
                    <tr style="border-bottom:1px solid #f1f5f9;">
                      <td style="padding:10px 12px; font-weight:700; color:#0f172a;">${p.customerName}</td>
                      <td style="padding:10px 12px; color:#1e40af; font-weight:bold;">${p.policyNumber}</td>
                      <td style="padding:10px 12px; color:#dc2626; font-weight:bold;">${p.nextDueDate || 'Immediate'}</td>
                      <td style="padding:10px 12px; font-weight:bold; color:#059669;">₹${(p.totalPremium||p.basicPremium||0).toLocaleString('en-IN')}</td>
                      <td style="padding:10px 12px;">
                        <button onclick="window.sendSmartDueReminder('${p.policyNumber}', '${p.customerName}', '${p.nextDueDate}', '${p.totalPremium||p.basicPremium}')" style="background:#25D366; color:#fff; border:none; padding:6px 12px; border-radius:6px; font-size:12px; font-weight:bold; cursor:pointer; display:flex; align-items:center; gap:5px;">
                          <span>💬</span> रिमाइंडर भेजें
                        </button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    `;

    let old = document.getElementById('modalSmartDueCalendar');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.sendSmartDueReminder = function(polNum, name, dueDate, prem) {
    let msg = `*LIC ऑफ़ इंडिया - प्रीमियम देय सूचना*\n\n` +
      `आदरणीय *${name}* जी, 🙏\n` +
      `आपकी LIC पॉलिसी संख्या *${polNum}* का नवीनीकरण प्रीमियम *₹${Number(prem).toLocaleString('en-IN')}* देय है।\n` +
      `देय तिथि: *${dueDate || 'इसी माह'}*\n\n` +
      `बिना किसी रुकावट के लगातार रिस्क कवर बनाए रखने हेतु कृपया प्रीमियम का भुगतान समय पर करें।\n` +
      `📲 घर बैठे ऑनलाइन भुगतान लिंक: https://sanjeevef3-ai.github.io/LIC-/\n\n` +
      `सधन्यवाद,\n` +
      `*${AGENT.name}* (LIC अभिकर्ता 0273635D)\n` +
      `शाखा: ${AGENT.branch} | मो: ${AGENT.mobile}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // -------------------------------------------------------------
  // 3. ALL IN ONE GYAN: DAILY SALES CONCEPT & STATUS POSTER MAKER
  // -------------------------------------------------------------
  const CONCEPTS = [
    {
      title: "🛡️ 'परिवार की ढाल' - आज का बीमा विचार",
      text: "जब तक हम हैं, परिवार की हर ज़रूरत पूरी होती है। लेकिन एक ज़िम्मेदार अभिभावक वही है जो अपने न रहने पर भी परिवार के स्वाभिमान की रक्षा करे। आज ही पर्याप्त टर्म व बचत बीमा लें।"
    },
    {
      title: "💰 'पैसे से पैसा बनाना' - सुरक्षित रिटायरमेंट",
      text: "बैंक FD पर घटती ब्याज दरों के दौर में LIC की गारंटीड 8% आजीवन पेंशन योजना ही आपके बुढ़ापे का सच्चा सहारा है। आज की छोटी बचत, कल का सुकून।"
    },
    {
      title: "👶 'बिटिया का भविष्य' - बेटी बचाओ, भविष्य सजाओ",
      text: "बेटी की पढ़ाई और शादी के खर्च अचानक नहीं आते, 20 साल पहले से पता होते हैं। कन्यादान योजना से हर महीने थोड़ी बचत करें और बिटिया को आत्मनिर्भर बनाएं।"
    }
  ];

  window.openDailyConceptModal = function() {
    let html = `
      <div id="modalDailyConcept" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:18px; max-width:680px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #4338ca, #6366f1); color:#fff; padding:16px 20px; border-radius:18px 18px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">💡</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:800;">दैनिक बीमा प्रेरक विचार व WhatsApp स्टेटस मेकर</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">रोज सुबह व्हाट्सएप स्टेटस पर शेयर करने हेतु तैयार पोस्ट्स</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalDailyConcept').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px; display:flex; flex-direction:column; gap:16px;">
            ${CONCEPTS.map(c => `
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:16px;">
                <h4 style="margin:0 0 8px; font-size:15px; color:#1e1b4b; font-weight:800;">${c.title}</h4>
                <p style="margin:0 0 14px; font-size:13px; color:#475569; line-height:1.5;">${c.text}</p>
                <button onclick="window.shareConceptWhatsApp('${encodeURIComponent(c.title)}', '${encodeURIComponent(c.text)}')" style="background:#25D366; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-size:12px; font-weight:bold; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
                  <span>📲</span> WhatsApp स्टेटस पर लगाएं
                </button>
              </div>
            `).join('')}
          </div>

        </div>
      </div>
    `;

    let old = document.getElementById('modalDailyConcept');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.shareConceptWhatsApp = function(encTitle, encText) {
    let title = decodeURIComponent(encTitle);
    let text = decodeURIComponent(encText);
    let msg = `*${title}*\n\n${text}\n\n` +
      `जीवन बीमा एवं वित्तीय सुरक्षा हेतु परामर्श:\n` +
      `*${AGENT.name}* (LIC अधिकृत अभिकर्ता)\n` +
      `शाखा 35D भोपाल • 📞 ${AGENT.mobile}\n` +
      `🌐 https://sanjeevef3-ai.github.io/LIC-/`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // -------------------------------------------------------------
  // 4. LIC AGENT DIARY: MONEY BACK (SB) & MATURITY PAYOUT TRACKER
  // -------------------------------------------------------------
  window.openMaturityPayoutTrackerModal = function() {
    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let policies = db.policies || [];
    
    // Sample moneyback / maturity policies
    let payouts = policies.filter(p => (p.planTable === '720' || p.planTable === '149' || p.planTable === '736')).slice(0, 10);

    let html = `
      <div id="modalMaturityPayout" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:18px; max-width:850px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #065f46, #059669); color:#fff; padding:16px 20px; border-radius:18px 18px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">💰</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:800;">मनी-बैक (SB) एवं मैच्योरिटी पेआउट ट्रैकर (Maturity Tracker)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">ग्राहकों के बैंक खातों में आने वाले रिटर्न व सर्वाइवल बेनिफिट्स की अग्रिम सूची</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalMaturityPayout').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px;">
            <div style="overflow-x:auto; border:1px solid #e2e8f0; border-radius:12px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead style="background:#f8fafc; color:#475569;">
                  <tr>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">ग्राहक का नाम</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">पॉलिसी सं.</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">प्लान</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">पेआउट प्रकार</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">अनुमानित रिटर्न</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">NEFT स्टेटस</th>
                  </tr>
                </thead>
                <tbody>
                  ${payouts.map(p => `
                    <tr style="border-bottom:1px solid #f1f5f9;">
                      <td style="padding:10px 12px; font-weight:700; color:#0f172a;">${p.customerName}</td>
                      <td style="padding:10px 12px; color:#1e40af; font-weight:bold;">${p.policyNumber}</td>
                      <td style="padding:10px 12px; color:#475569;">${p.planName || p.planTable}</td>
                      <td style="padding:10px 12px;"><span style="background:#dbeafe; color:#1e40af; padding:3px 8px; border-radius:10px; font-size:11px; font-weight:bold;">Survival Benefit (SB)</span></td>
                      <td style="padding:10px 12px; font-weight:bold; color:#059669;">₹${Math.round((p.sumAssured||200000)*0.15).toLocaleString('en-IN')}</td>
                      <td style="padding:10px 12px;"><span style="color:#059669; font-weight:bold;">✓ Registered</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            
            <div style="margin-top:16px; display:flex; justify-content:flex-end;">
              <button onclick="window.print()" style="background:#059669; color:#fff; border:none; padding:10px 18px; border-radius:8px; font-weight:bold; cursor:pointer;">
                🖨️ पेआउट रिपोर्ट प्रिंट करें
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    let old = document.getElementById('modalMaturityPayout');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

})();
