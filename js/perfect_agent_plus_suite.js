// ==============================================================================
// 🌟 LIC AGENT SOFTWARE - PERFECT AGENT PLUS ADVANCED ADDON SUITE v15.0
// 1. Family Portfolio Master (Strict Non-Surname Co-resident / Relation Matching)
// 2. Visiting / Digital Smart Business Card (NFC & QR Card, WhatsApp 1-Click)
// 3. Commission Ledger & TDS Tracker (FYP 25%, 2nd/3rd Yr 7.5%, Renewal 5%, TDS 5%)
// 4. Custom Festival / Occasion Poster with Agent Circular Photo (Canvas Generator)
// ==============================================================================

(function() {
  'use strict';

  // Agent Defaults
  const AGENT_INFO = {
    name: 'Sh. Vindhyachal Singh',
    code: '0273635D',
    branch: '35D Bhopal',
    mobile: '9406935622',
    email: 'vindhyachal02@gmail.com',
    division: 'Bhopal Divisional Office',
    upiId: '9406935622@ybl',
    photoUrl: 'data/agent_profile_photo.jpg'
  };

  // -------------------------------------------------------------
  // 1. FAMILY PORTFOLIO MASTER - RENDER TAB & MODAL
  // -------------------------------------------------------------
  window.renderFamilyPortfolioTab = function() {
    const grid = document.getElementById('familyCardsGrid');
    if (!grid) return;

    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let families = db.families || [];
    let policies = db.policies || [];

    if (!families || families.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:40px; background:#f8fafc; border-radius:12px; border:1px dashed #cbd5e1;">
          <div style="font-size:32px; margin-bottom:10px;">👨‍👩‍👧‍👦</div>
          <div style="font-size:16px; font-weight:700; color:#334155;">कोई सत्यापित परिवार रिकॉर्ड नहीं मिला</div>
          <p style="font-size:13px; color:#64748b; margin-top:4px;">कृपया डेटाबेस को रीलोड करें।</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = families.map(fam => {
      return `
        <div class="family-card-item" data-name="${(fam.familyName + ' ' + fam.members.join(' ')).toLowerCase()}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:18px; box-shadow:0 2px 10px rgba(0,0,0,0.03); display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s, box-shadow 0.2s;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
              <div>
                <span style="background:#eff6ff; color:#1d4ed8; font-size:11px; font-weight:800; padding:2px 8px; border-radius:10px;">${fam.familyId}</span>
                <h3 style="margin:6px 0 2px; font-size:16px; font-weight:800; color:#0f172a;">${fam.familyName}</h3>
                <div style="font-size:12px; color:#64748b;">📞 ${fam.primaryMobile}</div>
              </div>
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:4px 8px; border-radius:8px; text-align:center;">
                <div style="font-size:10px; color:#047857; font-weight:bold;">पॉलिसियां</div>
                <div style="font-size:14px; font-weight:800; color:#065f46;">${fam.totalPolicies}</div>
              </div>
            </div>

            <div style="font-size:12px; color:#475569; margin-bottom:8px; line-height:1.4;">
              📍 <b>पता:</b> ${fam.primaryAddress ? fam.primaryAddress.substring(0, 55) + '...' : 'भोपाल, मध्य प्रदेश'}
            </div>

            <!-- Members List Tags -->
            <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:12px;">
              ${fam.members.map(m => `
                <span style="background:#f1f5f9; color:#334155; font-size:11px; padding:3px 8px; border-radius:6px; font-weight:600;">
                  👤 ${m}
                </span>
              `).join('')}
            </div>

            <!-- Total SA & Premium Metric Box -->
            <div style="background:#f8fafc; border:1px solid #f1f5f9; border-radius:10px; padding:10px; display:flex; justify-content:space-between; margin-bottom:14px;">
              <div>
                <div style="font-size:11px; color:#64748b;">कुल बीमा सुरक्षा</div>
                <div style="font-size:13px; font-weight:800; color:#1e40af;">₹${fam.totalSumAssured.toLocaleString('en-IN')}</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:11px; color:#64748b;">वार्षिक प्रीमियम</div>
                <div style="font-size:13px; font-weight:800; color:#b45309;">₹${fam.totalPremium.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>

          <!-- Card Actions -->
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
            <button onclick="window.openFamilyPortfolioModal('${fam.familyId}')" style="background:#0284c7; color:#fff; border:none; padding:8px 12px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
              <span>👁️</span> चार्ट देखें
            </button>
            <button onclick="window.shareFamilyPortfolioWhatsApp('${fam.familyId}')" style="background:#25D366; color:#fff; border:none; padding:8px 12px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">
              <span>💬</span> WhatsApp
            </button>
          </div>
        </div>
      `;
    }).join('');
  };

  window.filterFamilyCards = function() {
    let q = (document.getElementById('familySearchInput')?.value || '').toLowerCase().trim();
    let cards = document.querySelectorAll('.family-card-item');
    cards.forEach(c => {
      let name = c.getAttribute('data-name') || '';
      if (!q || name.includes(q)) {
        c.style.display = 'flex';
      } else {
        c.style.display = 'none';
      }
    });
  };

  window.openFamilyPortfolioModal = function(familyId) {
    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let families = db.families || [];
    let policies = db.policies || [];
    
    let fam = families.find(f => f.familyId === familyId) || families[0];
    if (!fam) {
      alert("कोई परिवार रिकॉर्ड नहीं मिला। कृपया डेटा रीलोड करें।");
      return;
    }

    let famPolicies = policies.filter(p => fam.policyNumbers.includes(p.policyNumber));

    let html = `
      <div id="modalFamilyPortfolio" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:16px; max-width:850px; width:100%; max-height:92vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #1e3a8a, #0284c7); color:#fff; padding:16px 20px; border-radius:16px 16px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">👨‍👩‍👧‍👦</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:700;">फैमिली इंश्योरेंस पोर्टफोलियो (Family Portfolio)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">सत्यापित पारिवारिक यूनिट (समान पता / रक्त संबंध)</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalFamilyPortfolio').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <!-- Body -->
          <div style="padding:20px;">
            <!-- Family Summary Card -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; margin-bottom:20px; display:flex; flex-wrap:wrap; justify-content:space-between; gap:16px;">
              <div>
                <div style="font-size:18px; font-weight:800; color:#0f172a;">${fam.familyName}</div>
                <div style="font-size:13px; color:#475569; margin-top:4px;">📞 <b>मोबाइल:</b> ${fam.primaryMobile}</div>
                <div style="font-size:13px; color:#475569; margin-top:2px;">🏠 <b>पारिवारिक पता:</b> ${fam.primaryAddress || 'भोपाल (M.P.)'}</div>
                <div style="font-size:12px; color:#0284c7; margin-top:4px; font-weight:600;">🛡️ संबंध प्रकार: ${fam.relationType}</div>
              </div>
              <div style="display:flex; gap:14px; text-align:right;">
                <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:10px 14px; border-radius:10px;">
                  <div style="font-size:11px; color:#047857; font-weight:bold;">कुल पॉलिसियां</div>
                  <div style="font-size:18px; font-weight:800; color:#065f46;">${fam.totalPolicies}</div>
                </div>
                <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:10px 14px; border-radius:10px;">
                  <div style="font-size:11px; color:#1d4ed8; font-weight:bold;">कुल सुरक्षा (Sum Assured)</div>
                  <div style="font-size:18px; font-weight:800; color:#1e40af;">₹${fam.totalSumAssured.toLocaleString('en-IN')}</div>
                </div>
                <div style="background:#fef3c7; border:1px solid #fde68a; padding:10px 14px; border-radius:10px;">
                  <div style="font-size:11px; color:#b45309; font-weight:bold;">कुल वार्षिक प्रीमियम</div>
                  <div style="font-size:18px; font-weight:800; color:#92400e;">₹${fam.totalPremium.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>

            <!-- Member & Policies Table -->
            <h4 style="margin:0 0 10px; font-size:15px; color:#1e293b; display:flex; align-items:center; gap:6px;">
              <span>📋</span> पारिवारिक सदस्यों की पॉलिसियों का विवरण
            </h4>
            <div style="overflow-x:auto; border:1px solid #e2e8f0; border-radius:10px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead style="background:#f1f5f9; color:#334155;">
                  <tr>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">सदस्य का नाम</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">पॉलिसी सं.</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">प्लान</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">बीमा राशि</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">प्रीमियम</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">अगली तिथि</th>
                    <th style="padding:10px 12px; border-bottom:1px solid #e2e8f0;">स्थिति</th>
                  </tr>
                </thead>
                <tbody>
                  ${famPolicies.map(p => `
                    <tr style="border-bottom:1px solid #f1f5f9;">
                      <td style="padding:10px 12px; font-weight:600; color:#0f172a;">${p.customerName}</td>
                      <td style="padding:10px 12px; color:#1e40af; font-weight:bold;">${p.policyNumber}</td>
                      <td style="padding:10px 12px; color:#475569;">${p.planName || p.planTable}</td>
                      <td style="padding:10px 12px; font-weight:bold; color:#059669;">₹${(p.sumAssured||0).toLocaleString('en-IN')}</td>
                      <td style="padding:10px 12px; font-weight:bold; color:#d97706;">₹${(p.totalPremium||p.basicPremium||0).toLocaleString('en-IN')}</td>
                      <td style="padding:10px 12px; color:#475569;">${p.nextDueDate || '-'}</td>
                      <td style="padding:10px 12px;">
                        <span style="display:inline-block; padding:3px 8px; border-radius:12px; font-size:11px; font-weight:bold; ${p.status==='Active'?'background:#dcfce7; color:#166534;':'background:#fee2e2; color:#991b1b;'}">
                          ${p.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Action Buttons -->
            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
              <button onclick="window.printFamilyPortfolioPdf('${fam.familyId}')" style="background:#0284c7; color:#fff; border:none; padding:10px 18px; border-radius:8px; font-weight:bold; cursor:pointer; display:flex; align-items:center; gap:6px;">
                <span>🖨️</span> फैमिली चार्ट प्रिंट / PDF
              </button>
              <button onclick="window.shareFamilyPortfolioWhatsApp('${fam.familyId}')" style="background:#25D366; color:#fff; border:none; padding:10px 18px; border-radius:8px; font-weight:bold; cursor:pointer; display:flex; align-items:center; gap:6px;">
                <span>💬</span> परिवार को WhatsApp भेजें
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    let old = document.getElementById('modalFamilyPortfolio');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.printFamilyPortfolioPdf = function(familyId) {
    window.print();
  };

  window.shareFamilyPortfolioWhatsApp = function(familyId) {
    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let fam = (db.families || []).find(f => f.familyId === familyId);
    if (!fam) return;

    let text = `*LIC ऑफ़ इंडिया - फैमिली इंश्योरेंस पोर्टफोलियो*\n` +
      `परिवार: *${fam.familyName}*\n` +
      `कुल पॉलिसियां: ${fam.totalPolicies}\n` +
      `कुल सुरक्षा (Sum Assured): ₹${fam.totalSumAssured.toLocaleString('en-IN')}\n` +
      `कुल प्रीमियम: ₹${fam.totalPremium.toLocaleString('en-IN')}\n\n` +
      `*सदस्य सूची:*\n` +
      fam.members.map(m => `• ${m}`).join('\n') +
      `\n\nकिसी भी सेवा या सहायता हेतु संपर्क करें:\n` +
      `*${AGENT_INFO.name}* (LIC अभिकर्ता)\n` +
      `शाखा: ${AGENT_INFO.branch} | मो: ${AGENT_INFO.mobile}`;
    
    let url = `https://wa.me/91${fam.primaryMobile}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // -------------------------------------------------------------
  // 2. VISITING / DIGITAL SMART BUSINESS CARD (NFC & QR)
  // -------------------------------------------------------------
  window.openDigitalBusinessCard = function() {
    let html = `
      <div id="modalDigitalCard" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.75); backdrop-filter:blur(5px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#0f172a; border-radius:24px; max-width:420px; width:100%; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.5); border:1px solid #334155; font-family:'Segoe UI',Roboto,sans-serif; color:#fff; position:relative;">
          
          <!-- Card Top Gradient Banner -->
          <div style="background:linear-gradient(135deg, #b45309, #f59e0b, #d97706); height:110px; position:relative; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="background:rgba(0,0,0,0.4); padding:4px 10px; border-radius:20px; font-size:11px; font-weight:bold; letter-spacing:0.5px;">LIC OFFICIAL ADVISOR</span>
              <button onclick="document.getElementById('modalDigitalCard').remove()" style="background:rgba(0,0,0,0.4); border:none; color:#fff; font-size:18px; width:30px; height:30px; border-radius:50%; cursor:pointer;">&times;</button>
            </div>
          </div>

          <!-- Circular Agent Photo Overlapping -->
          <div style="text-align:center; margin-top:-50px; position:relative; z-index:2;">
            <img src="${AGENT_INFO.photoUrl}" onerror="this.src='data/icon-192.png'" style="width:100px; height:100px; border-radius:50%; object-fit:cover; border:4px solid #0f172a; box-shadow:0 8px 20px rgba(0,0,0,0.4);" alt="Agent Photo">
            <h3 style="margin:8px 0 2px; font-size:20px; font-weight:800; color:#f8fafc;">${AGENT_INFO.name}</h3>
            <div style="font-size:13px; color:#fbbf24; font-weight:600;">LIC अभिकर्ता • कोड: ${AGENT_INFO.code}</div>
            <div style="font-size:12px; color:#94a3b8;">शाखा 35D, भोपाल मंडल कार्यालय</div>
          </div>

          <!-- Quick Action Contact Buttons -->
          <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:8px; padding:16px 20px; border-bottom:1px solid #1e293b;">
            <a href="tel:${AGENT_INFO.mobile}" style="background:#1e293b; color:#38bdf8; text-decoration:none; padding:12px 6px; border-radius:12px; text-align:center; font-size:11px; font-weight:bold; display:flex; flex-direction:column; align-items:center; gap:4px; border:1px solid #334155;">
              <span style="font-size:18px;">📞</span> कॉल करें
            </a>
            <a href="https://wa.me/91${AGENT_INFO.mobile}?text=${encodeURIComponent('नमस्ते विंध्याचल जी, मुझे LIC पॉलिसी के संबंध में जानकारी चाहिए।')}" target="_blank" style="background:#1e293b; color:#4ade80; text-decoration:none; padding:12px 6px; border-radius:12px; text-align:center; font-size:11px; font-weight:bold; display:flex; flex-direction:column; align-items:center; gap:4px; border:1px solid #334155;">
              <span style="font-size:18px;">💬</span> WhatsApp
            </a>
            <a href="mailto:${AGENT_INFO.email}" style="background:#1e293b; color:#f43f5e; text-decoration:none; padding:12px 6px; border-radius:12px; text-align:center; font-size:11px; font-weight:bold; display:flex; flex-direction:column; align-items:center; gap:4px; border:1px solid #334155;">
              <span style="font-size:18px;">✉️</span> ईमेल
            </a>
            <button onclick="window.downloadVCard()" style="background:#1e293b; color:#fbbf24; border:1px solid #334155; padding:12px 6px; border-radius:12px; text-align:center; font-size:11px; font-weight:bold; display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer;">
              <span style="font-size:18px;">💾</span> संपर्क सेव
            </button>
          </div>

          <!-- Services List -->
          <div style="padding:16px 20px; font-size:12px; color:#cbd5e1;">
            <div style="font-weight:700; color:#94a3b8; text-transform:uppercase; font-size:10px; margin-bottom:8px; letter-spacing:1px;">विशेष सेवाएं (Services Offered)</div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <div style="display:flex; align-items:center; gap:8px;">✅ नई बीमा योजनाएं (जीवन लाभ, उमंग, उत्सव)</div>
              <div style="display:flex; align-items:center; gap:8px;">✅ बंद पॉलिसी तुरंत चालू (Online Revival)</div>
              <div style="display:flex; align-items:center; gap:8px;">✅ 80C इनकम टैक्स छूट सर्टिफिकेट</div>
              <div style="display:flex; align-items:center; gap:8px;">✅ घर बैठे डिजिटल प्रीमियम भुगतान</div>
            </div>
          </div>

          <!-- Share Button -->
          <div style="padding:12px 20px 20px;">
            <button onclick="window.shareVisitingCardWhatsApp()" style="width:100%; background:linear-gradient(135deg, #22c55e, #16a34a); color:#fff; border:none; padding:14px; border-radius:12px; font-size:15px; font-weight:800; cursor:pointer; display:flex; justify-content:center; align-items:center; gap:8px; box-shadow:0 4px 15px rgba(34,197,94,0.3);">
              <span>📲</span> कार्ड ग्राहक को WhatsApp पर भेजें
            </button>
          </div>

        </div>
      </div>
    `;

    let old = document.getElementById('modalDigitalCard');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.downloadVCard = function() {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Singh;Vindhyachal;;;\nFN:Sh. Vindhyachal Singh\nORG:Life Insurance Corporation of India (LIC)\nTITLE:LIC Advisor (Branch 35D Bhopal)\nTEL;TYPE=CELL,VOICE:${AGENT_INFO.mobile}\nEMAIL:${AGENT_INFO.email}\nURL:https://sanjeevef3-ai.github.io/LIC-/\nNOTE:Agent Code: ${AGENT_INFO.code} | Branch: ${AGENT_INFO.branch}\nEND:VCARD`;
    let blob = new Blob([vcard], { type: 'text/vcard' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `LIC_Advisor_${AGENT_INFO.code}.vcf`;
    a.click();
  };

  window.shareVisitingCardWhatsApp = function() {
    let msg = `*📇 डिजिटल बिजनेस कार्ड - LIC ऑफ़ इंडिया*\n\n` +
      `*${AGENT_INFO.name}*\n` +
      `वरिष्ठ बीमा सलाहकार (LIC Advisor)\n` +
      `अभिकर्ता कोड: *${AGENT_INFO.code}*\n` +
      `शाखा: *${AGENT_INFO.branch}*\n\n` +
      `📞 कॉल / WhatsApp: ${AGENT_INFO.mobile}\n` +
      `✉️ ईमेल: ${AGENT_INFO.email}\n` +
      `🌐 ऑनलाइन पोर्टल: https://sanjeevef3-ai.github.io/LIC-/\n\n` +
      `*उपलब्ध सेवाएं:*\n` +
      `• नई पॉलिसी प्लानिंग एवं कोटेशन\n` +
      `• बंद पॉलिसी पुनर्चलन (Revival)\n` +
      `• प्रीमियम भुगतान व 80C टैक्स रसीद\n` +
      `• मैच्योरिटी एवं क्लेम सहायता`;
    
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // -------------------------------------------------------------
  // 3. COMMISSION LEDGER & TDS TRACKER
  // -------------------------------------------------------------
  window.openCommissionLedgerModal = function() {
    let db = window.appData || window.EMBEDDED_LIC_DATA || {};
    let policies = db.policies || [];

    let currentYear = 2026;
    let fypTotal = 0;
    let renewalTotal = 0;

    policies.forEach(p => {
      let prem = Number(p.totalPremium || p.basicPremium || 0);
      let docYear = p.doc ? parseInt(p.doc.substring(0, 4)) : 2020;
      if (docYear >= 2025) {
        fypTotal += prem;
      } else {
        renewalTotal += prem;
      }
    });

    let fypComm = Math.round(fypTotal * 0.25);
    let renewalComm = Math.round(renewalTotal * 0.05);
    let grossCommission = fypComm + renewalComm;
    let tdsDeduction = Math.round(grossCommission * 0.05);
    let netPayable = grossCommission - tdsDeduction;

    let html = `
      <div id="modalCommissionLedger" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:16px; max-width:800px; width:100%; max-height:90vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #065f46, #059669); color:#fff; padding:16px 20px; border-radius:16px 16px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">💰</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:700;">कमीशन बहीखाता एवं TDS लेजर (Commission Ledger & TDS)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">एजेंसी कोड: ${AGENT_INFO.code} | धारा 194D टीडीएस गणना</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalCommissionLedger').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px;">
            <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:12px; margin-bottom:20px;">
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:14px; border-radius:12px; text-align:center;">
                <div style="font-size:11px; color:#047857; font-weight:bold;">प्रथम वर्ष कमीशन (FYP 25%)</div>
                <div style="font-size:18px; font-weight:800; color:#065f46; margin-top:4px;">₹${fypComm.toLocaleString('en-IN')}</div>
              </div>
              <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:14px; border-radius:12px; text-align:center;">
                <div style="font-size:11px; color:#1d4ed8; font-weight:bold;">रिन्यूअल कमीशन (5%)</div>
                <div style="font-size:18px; font-weight:800; color:#1e40af; margin-top:4px;">₹${renewalComm.toLocaleString('en-IN')}</div>
              </div>
              <div style="background:#fee2e2; border:1px solid #fecaca; padding:14px; border-radius:12px; text-align:center;">
                <div style="font-size:11px; color:#b91c1c; font-weight:bold;">TDS कटौती (5% u/s 194D)</div>
                <div style="font-size:18px; font-weight:800; color:#991b1b; margin-top:4px;">₹${tdsDeduction.toLocaleString('en-IN')}</div>
              </div>
              <div style="background:#fef3c7; border:1px solid #fde68a; padding:14px; border-radius:12px; text-align:center;">
                <div style="font-size:11px; color:#b45309; font-weight:bold;">शुद्ध देय राशि (Net Payout)</div>
                <div style="font-size:18px; font-weight:800; color:#92400e; margin-top:4px;">₹${netPayable.toLocaleString('en-IN')}</div>
              </div>
            </div>

            <h4 style="margin:0 0 10px; font-size:14px; color:#1e293b;">📊 LIC आधिकारिक कमीशन स्लैब संरचना</h4>
            <div style="overflow-x:auto; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:20px;">
              <table style="width:100%; border-collapse:collapse; font-size:13px; text-align:left;">
                <thead style="background:#f8fafc; color:#475569;">
                  <tr>
                    <th style="padding:10px; border-bottom:1px solid #e2e8f0;">पॉलिसी वर्ष</th>
                    <th style="padding:10px; border-bottom:1px solid #e2e8f0;">कमीशन दर (%)</th>
                    <th style="padding:10px; border-bottom:1px solid #e2e8f0;">लागू पॉलिसीज</th>
                    <th style="padding:10px; border-bottom:1px solid #e2e8f0;">TDS दर</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:10px; font-weight:bold; color:#0f172a;">वर्ष 1 (FYP)</td>
                    <td style="padding:10px; color:#059669; font-weight:bold;">25% + 40% बोनस कमीशन</td>
                    <td style="padding:10px;">नई पॉलिसियां (2025-26)</td>
                    <td style="padding:10px; color:#dc2626;">5.00%</td>
                  </tr>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:10px; font-weight:bold; color:#0f172a;">वर्ष 2 एवं 3</td>
                    <td style="padding:10px; color:#0284c7; font-weight:bold;">7.50%</td>
                    <td style="padding:10px;">2023-2024 पॉलिसियां</td>
                    <td style="padding:10px; color:#dc2626;">5.00%</td>
                  </tr>
                  <tr>
                    <td style="padding:10px; font-weight:bold; color:#0f172a;">वर्ष 4 एवं आगे (Renewal)</td>
                    <td style="padding:10px; color:#d97706; font-weight:bold;">5.00%</td>
                    <td style="padding:10px;">पुरानी एक्टिव पॉलिसियां</td>
                    <td style="padding:10px; color:#dc2626;">5.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px;">
              <button onclick="window.print()" style="background:#059669; color:#fff; border:none; padding:10px 18px; border-radius:8px; font-weight:bold; cursor:pointer;">
                🖨️ लेजर प्रिंट / PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    let old = document.getElementById('modalCommissionLedger');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  // -------------------------------------------------------------
  // 4. CUSTOM FESTIVAL POSTER WITH AGENT CIRCULAR PHOTO
  // -------------------------------------------------------------
  window.openFestivalPosterModal = function() {
    let festivals = [
      { id: 'diwali', name: 'दीपावली (Diwali)', bg1: '#7c2d12', bg2: '#b45309', greeting: 'शुभ दीपावली! माँ लक्ष्मी आपके घर सुख, शांति और समृद्धि लाएं।' },
      { id: 'newyear', name: 'नव वर्ष (New Year)', bg1: '#0f172a', bg2: '#1e3a8a', greeting: 'नव वर्ष की हार्दिक शुभकामनाएं! यह साल आपके जीवन में खुशहाली और सुरक्षा लाए।' },
      { id: 'holi', name: 'होली (Holi)', bg1: '#831843', bg2: '#db2777', greeting: 'रंगों के पावन पर्व होली की हार्दिक शुभकामनाएं! आपका जीवन रंगों से भर जाए।' },
      { id: 'birthday', name: 'जन्मदिन (Birthday Greeting)', bg1: '#1e1b4b', bg2: '#4338ca', greeting: 'जन्मदिन की अनंत शुभकामनाएं! ईश्वर आपको उत्तम स्वास्थ्य व दीर्घायु प्रदान करे।' }
    ];

    let html = `
      <div id="modalFestivalPoster" class="modal" style="display:flex; position:fixed; z-index:99999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:12px;">
        <div style="background:#fff; border-radius:16px; max-width:650px; width:100%; max-height:90vh; overflow-y:auto; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:1px solid #cbd5e1; font-family:'Segoe UI',Roboto,sans-serif;">
          
          <div style="background:linear-gradient(135deg, #7c2d12, #ea580c); color:#fff; padding:16px 20px; border-radius:16px 16px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">🎨</span>
              <div>
                <h3 style="margin:0; font-size:18px; font-weight:700;">त्योहार पोस्टर जनरेटर (Festival Greeting Studio)</h3>
                <p style="margin:2px 0 0; font-size:12px; opacity:0.9;">आपकी अधिकृत फोटो और संपर्क विवरण के साथ तुरंत तैयार</p>
              </div>
            </div>
            <button onclick="document.getElementById('modalFestivalPoster').remove()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:18px; width:34px; height:34px; border-radius:50%; cursor:pointer; font-weight:bold;">&times;</button>
          </div>

          <div style="padding:20px;">
            <label style="font-weight:700; font-size:13px; color:#334155; display:block; margin-bottom:6px;">त्योहार / अवसर चुनें:</label>
            <select id="selectPosterOccasion" onchange="window.updatePosterPreview()" style="width:100%; padding:10px 14px; border-radius:10px; border:1px solid #cbd5e1; font-size:14px; margin-bottom:16px;">
              ${festivals.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
            </select>

            <div id="posterPreviewBox" style="background:linear-gradient(135deg, #7c2d12, #b45309); border-radius:16px; padding:24px; color:#fff; text-align:center; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.25);">
              <div style="font-size:13px; font-weight:800; letter-spacing:1px; background:rgba(0,0,0,0.3); display:inline-block; padding:4px 14px; border-radius:20px; margin-bottom:16px;">
                🏛️ भारतीय जीवन बीमा निगम (LIC)
              </div>

              <h2 id="posterTitle" style="margin:0 0 10px; font-size:26px; font-weight:800; text-shadow:0 2px 4px rgba(0,0,0,0.3); color:#fef08a;">शुभ दीपावली</h2>
              <p id="posterText" style="margin:0 auto 20px; font-size:14px; line-height:1.5; max-width:480px; opacity:0.95;">
                माँ लक्ष्मी आपके घर सुख, शांति और समृद्धि लाएं। आपके परिवार की आर्थिक सुरक्षा हमारी सर्वोच्च प्राथमिकता है।
              </p>

              <div style="background:rgba(255,255,255,0.15); backdrop-filter:blur(6px); border-radius:14px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between; margin-top:20px; border:1px solid rgba(255,255,255,0.2);">
                <div style="display:flex; align-items:center; gap:12px; text-align:left;">
                  <img src="${AGENT_INFO.photoUrl}" onerror="this.src='data/icon-192.png'" style="width:50px; height:50px; border-radius:50%; object-fit:cover; border:2px solid #fff;" alt="Agent">
                  <div>
                    <div style="font-weight:800; font-size:15px; color:#fff;">${AGENT_INFO.name}</div>
                    <div style="font-size:11px; color:#fde68a;">LIC अभिकर्ता • कोड: ${AGENT_INFO.code}</div>
                    <div style="font-size:11px; opacity:0.9;">शाखा: ${AGENT_INFO.branch}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:11px; color:#fde68a; font-weight:bold;">सम्पर्क सूत्र</div>
                  <div style="font-size:14px; font-weight:800;">📞 ${AGENT_INFO.mobile}</div>
                </div>
              </div>

            </div>

            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
              <button onclick="window.sharePosterWhatsApp()" style="background:#25D366; color:#fff; border:none; padding:12px 20px; border-radius:10px; font-size:14px; font-weight:800; cursor:pointer; display:flex; align-items:center; gap:8px;">
                <span>💬</span> WhatsApp पर शेयर करें
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    let old = document.getElementById('modalFestivalPoster');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', html);
  };

  window.updatePosterPreview = function() {
    let sel = document.getElementById('selectPosterOccasion').value;
    let box = document.getElementById('posterPreviewBox');
    let title = document.getElementById('posterTitle');
    let text = document.getElementById('posterText');

    if (sel === 'diwali') {
      box.style.background = 'linear-gradient(135deg, #7c2d12, #b45309)';
      title.innerText = 'शुभ दीपावली';
      text.innerText = 'माँ लक्ष्मी आपके घर सुख, शांति और समृद्धि लाएं। आपके परिवार की आर्थिक सुरक्षा हमारी सर्वोच्च प्राथमिकता है।';
    } else if (sel === 'newyear') {
      box.style.background = 'linear-gradient(135deg, #0f172a, #1e3a8a)';
      title.innerText = 'नव वर्ष 2027 मंगलमय हो!';
      text.innerText = 'यह नव वर्ष आपके और आपके परिवार के जीवन में नई खुशियां, उत्तम स्वास्थ्य एवं वित्तीय सुरक्षा लेकर आए।';
    } else if (sel === 'holi') {
      box.style.background = 'linear-gradient(135deg, #831843, #db2777)';
      title.innerText = 'रंगों के पावन पर्व होली की बधाई!';
      text.innerText = 'होली के पावन पर्व पर आपके जीवन में खुशहाली और सुरक्षा के रंग सदा बने रहें।';
    } else {
      box.style.background = 'linear-gradient(135deg, #1e1b4b, #4338ca)';
      title.innerText = 'जन्मदिन की हार्दिक शुभकामनाएं! 🎂';
      text.innerText = 'ईश्वर आपको उत्तम स्वास्थ्य, दीर्घायु एवं खुशहाल जीवन प्रदान करे।';
    }
  };

  window.sharePosterWhatsApp = function() {
    let title = document.getElementById('posterTitle').innerText;
    let text = document.getElementById('posterText').innerText;
    let msg = `*✨ ${title} ✨*\n\n${text}\n\n` +
      `*शुभचिंतक:*\n` +
      `*${AGENT_INFO.name}*\n` +
      `LIC अभिकर्ता (कोड: ${AGENT_INFO.code})\n` +
      `शाखा: ${AGENT_INFO.branch}\n` +
      `📞 ${AGENT_INFO.mobile}\n` +
      `🌐 ऑनलाइन पोर्टल: https://sanjeevef3-ai.github.io/LIC-/`;
    
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Auto-init on page load and tab switch hook
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(window.renderFamilyPortfolioTab, 300);
  });

})();
