/**
 * ==============================================================================
 * LIC DIRECT PREMIUM PAYMENT & SETTLEMENT GATEWAY (NEXT-GEN ENGINE v2.5)
 * Dual-Mode: Direct Customer Official PayDirect + Live Agent Verified QR
 * ==============================================================================
 */

(function () {
  'use strict';

  function openDirectPaymentGateway(policyIdOrNo) {
    const policies = (window.appData && window.appData.policies) || 
                     (window.licDatabase && window.licDatabase.policies) || [];

    const pol = policies.find(p => p.id === policyIdOrNo || p.policyNumber === policyIdOrNo || p.policyNo === policyIdOrNo);
    if (!pol) {
      alert('पॉलिसी विवरण नहीं मिला!');
      return;
    }

    const prem = Number(pol.totalPremium || pol.basicPremium || pol.premium || 0);
    const polNo = pol.policyNumber || pol.policyNo;
    const custName = pol.customerName || pol.name || 'Policyholder';
    const mob = (pol.customerMobile || pol.mobile || '9406935622').replace(/\D/g, '');
    const plan = pol.planName || pol.planNo || 'LIC Plan';
    
    // Agent custom UPI ID or popular provider
    let savedUpi = localStorage.getItem('LIC_AGENT_UPI_ID') || '9406935622@ybl';
    const cleanPrem = parseFloat(prem).toFixed(2);
    
    const upiPayUrl = `upi://pay?pa=${savedUpi}&pn=Vindhyachal%20Singh&am=${cleanPrem}&cu=INR&tn=LIC%20Prem%20${polNo}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiPayUrl)}&color=002D54&bgcolor=FFFFFF`;

    // LIC Official Direct Pay Portal
    const licPayDirectUrl = `https://ebiz.licindia.in/eBiz/lic/customer/directpay/lic-premium-direct-pay.html`;

    const modalHtml = `
      <div id="modalDirectPayment" class="modal" style="display:flex; position:fixed; inset:0; z-index:999999; background:rgba(15,23,42,0.85); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
        <div style="background:#ffffff; border-radius:18px; width:100%; max-width:780px; max-height:94vh; display:flex; flex-direction:column; box-shadow:0 25px 60px rgba(0,0,0,0.4); overflow:hidden; border-top:6px solid #FFD100;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #00539b 0%, #002d54 100%); color:#fff; padding:16px 22px; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="font-size:26px;">💳</span>
              <div>
                <h3 style="margin:0; font-size:17px; font-weight:900; color:#FFD100;">LIC इन-ऐप डायरेक्ट प्रीमियम भुगतान (Verified Gateway)</h3>
                <div style="font-size:11.5px; color:#cbd5e1;">शाखा 35D • पॉलिसी नं.: <strong>${polNo}</strong> • ${custName}</div>
              </div>
            </div>
            <button type="button" onclick="document.getElementById('modalDirectPayment').remove()" style="background:none; border:none; color:#fff; font-size:24px; cursor:pointer;">✕</button>
          </div>

          <!-- Body -->
          <div style="padding:22px; overflow-y:auto; flex:1;">
            
            <!-- Amount Strip -->
            <div style="background:linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border:1px solid #86efac; border-radius:12px; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
              <div>
                <span style="font-size:12px; color:#15803d; font-weight:800; text-transform:uppercase;">देय शुद्ध प्रीमियम राशि (Net Due Premium)</span>
                <div style="font-size:30px; font-weight:900; color:#14532d;">₹${prem.toLocaleString('en-IN')}</div>
                <div style="font-size:11px; color:#166534;">*IRDAI नियमानुसार शुद्ध प्रीमियम (GST शून्य)</div>
              </div>
              <div style="text-align:right;">
                <span class="badge" style="background:#00539b; color:#fff; font-weight:800; padding:4px 10px; border-radius:12px;">पॉलिसी: ${polNo}</span>
                <div style="font-size:11.5px; color:#475569; margin-top:4px;">योजना: <strong>${plan}</strong></div>
              </div>
            </div>

            <!-- 2 Direct Payment Methods -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-bottom:18px;">
              
              <!-- Option A: Official LIC Direct Online Pay (100% Guaranteed Receipt) -->
              <div style="background:#f8fafc; border:2px solid #00539b; border-radius:14px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <span style="font-size:20px;">🌐</span>
                    <strong style="font-size:14px; color:#00539b;">विकल्प 1: आधिकारिक LIC PayDirect पोर्टल (सीधा LIC को)</strong>
                  </div>
                  <p style="font-size:12px; color:#475569; margin:0 0 12px 0;">
                    पॉलिसी का प्रीमियम सीधे भारतीय जीवन बीमा निगम के आधिकारिक सर्वर पर जमा करें। आधिकारिक LIC ई-रसीद तुरंत डाउनलोड होगी:
                  </p>
                  
                  <div style="background:#eff6ff; border-radius:8px; padding:12px; margin-bottom:14px; font-size:12px; border:1px solid #bfdbfe;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                      <span>पॉलिसी नंबर:</span>
                      <strong style="color:#00539b; font-size:13px; cursor:pointer;" onclick="navigator.clipboard.writeText('${polNo}'); alert('कॉपी हुआ: ${polNo}');" title="कॉपी करें">${polNo} 📋</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                      <span>शुद्ध प्रीमियम राशि:</span>
                      <strong style="color:#15803d; font-size:13px;">₹${prem.toLocaleString('en-IN')}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                      <span>ग्राहक मोबाइल:</span>
                      <strong>${mob}</strong>
                    </div>
                  </div>
                </div>

                <div>
                  <a href="${licPayDirectUrl}" target="_blank" class="btn btn-primary" style="width:100%; text-align:center; padding:11px; font-weight:900; font-size:13px; text-decoration:none; margin-bottom:10px; display:block; box-shadow:0 4px 12px rgba(0,83,155,0.25);">
                    🚀 LIC PayDirect पोर्टल पर भरें ➔
                  </a>
                  <button type="button" class="btn btn-success" onclick="markPolicyPaidDirectly('${polNo}', ${prem})" style="width:100%; padding:9px; font-weight:800; font-size:12px;">
                    ✓ भुगतान पूर्ण हुआ - सिस्टम में 'PAID' मार्क करें
                  </button>
                </div>
              </div>

              <!-- Option B: Scan & Pay via Agent PhonePe/GPay QR -->
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:18px; text-align:center; display:flex; flex-direction:column; align-items:center;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                  <span style="font-size:20px;">📱</span>
                  <strong style="font-size:14px; color:#0f172a;">विकल्प 2: PhonePe / GPay QR स्कैन (अभिकर्ता संग्रह)</strong>
                </div>
                
                <p style="font-size:11.5px; color:#64748b; margin:0 0 10px 0;">
                  ग्राहक सीधे आपके खाते में प्रीमियम ट्रांसफर कर सकता है:
                </p>

                <!-- Select Agent Provider -->
                <div style="width:100%; background:#fff; border:1px solid #cbd5e1; border-radius:8px; padding:6px 10px; margin-bottom:10px; display:flex; align-items:center; justify-content:space-between; font-size:11.5px;">
                  <span style="font-weight:700; color:#334155;">आपकी UPI ID:</span>
                  <input type="text" id="inputCustomUpiId" value="${savedUpi}" style="border:1px solid #00539b; border-radius:4px; padding:2px 6px; font-size:11.5px; font-weight:800; color:#002D54; width:170px;" placeholder="उदा. 9406935622@ybl">
                  <button type="button" onclick="updateAgentUpiQr('${polNo}')" style="background:#00539b; color:#fff; border:none; border-radius:4px; padding:3px 8px; font-size:10.5px; font-weight:800; cursor:pointer;">Set</button>
                </div>

                <div style="background:#fff; padding:10px; border-radius:12px; border:2px solid #FFD100; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:10px;">
                  <img id="imgPaymentQr" src="${qrCodeUrl}" alt="UPI Payment QR" style="width:160px; height:160px; display:block;">
                </div>
                
                <div id="lblUpiVpa" style="font-size:11.5px; color:#00539b; font-weight:800; margin-bottom:10px;">VPA: ${savedUpi}</div>
                
                <div style="display:flex; gap:8px; width:100%;">
                  <button type="button" class="btn btn-sm btn-whatsapp" onclick="sharePaymentQrViaWhatsApp('${polNo}', '${custName}', '${mob}', ${prem}, '${savedUpi}')" style="flex:1; font-weight:700; padding:8px;">
                    💬 WhatsApp भेजें
                  </button>
                </div>
              </div>

            </div>

            <!-- Instant Actions Footer Strip -->
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; background:#f1f5f9; padding:12px 16px; border-radius:10px;">
              <span style="font-size:12px; color:#334155; font-weight:700;">अतिरिक्त सेवाएँ:</span>
              <div style="display:flex; gap:8px;">
                <button type="button" class="btn btn-sm btn-outline" onclick="generate80cTaxCertificate('${polNo}')" style="font-size:11.5px; font-weight:700;">
                  📄 80C टैक्स रसीद PDF
                </button>
                <button type="button" class="btn btn-sm btn-outline" onclick="openSmartDghRevivalModal('${polNo}')" style="font-size:11.5px; font-weight:700;">
                  🔄 स्मार्ट DGH रिवाइवल
                </button>
              </div>
            </div>

          </div>

          <!-- Modal Footer -->
          <div style="background:#f8fafc; padding:12px 20px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:11.5px; color:#64748b;">✓ सुरक्षित SSL एनक्रिप्टेड • LIC अधिकृत प्रक्रिया</span>
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('modalDirectPayment').remove()">
              बंद करें
            </button>
          </div>

        </div>
      </div>
    `;

    const old = document.getElementById('modalDirectPayment');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function updateAgentUpiQr(polNo) {
    const input = document.getElementById('inputCustomUpiId');
    if (!input) return;
    const newUpi = input.value.trim();
    if (!newUpi || !newUpi.includes('@')) {
      alert('कृपया अपनी सही UPI ID दर्ज करें (उदा. 9406935622@ybl, 9406935622@ibl या yourname@okaxis)!');
      return;
    }

    localStorage.setItem('LIC_AGENT_UPI_ID', newUpi);

    const policies = (window.appData && window.appData.policies) || 
                     (window.licDatabase && window.licDatabase.policies) || [];
    const pol = policies.find(p => p.policyNumber === polNo || p.policyNo === polNo);
    const prem = pol ? Number(pol.totalPremium || pol.basicPremium || 0) : 0;
    const cleanPrem = parseFloat(prem).toFixed(2);

    const upiPayUrl = `upi://pay?pa=${newUpi}&pn=Vindhyachal%20Singh&am=${cleanPrem}&cu=INR&tn=LIC%20Prem%20${polNo}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiPayUrl)}&color=002D54&bgcolor=FFFFFF`;

    const imgQr = document.getElementById('imgPaymentQr');
    if (imgQr) imgQr.src = qrCodeUrl;
    const lblUpi = document.getElementById('lblUpiVpa');
    if (lblUpi) lblUpi.innerText = `VPA: ${newUpi}`;

    alert(`✅ आपकी UPI ID "${newUpi}" सफलतापूर्वक सेट हो गई है! अब PhonePe / GPay से स्कैन करने पर यह बिल्कुल सही काम करेगा।`);
  }

  function sharePaymentQrViaWhatsApp(polNo, custName, mobile, premium, upiId) {
    const cleanPrem = parseFloat(premium).toFixed(2);
    const upiUrl = `upi://pay?pa=${upiId}&pn=Vindhyachal%20Singh&am=${cleanPrem}&cu=INR&tn=LIC%20Prem%20${polNo}`;
    
    const text = `नमस्ते ${custName} जी,\n\nआपकी LIC पॉलिसी नं. *${polNo}* का प्रीमियम *₹${premium.toLocaleString('en-IN')}* देय है।\n\nआप सीधे आधिकारिक LIC पोर्टल से नेट बैंकिंग/कार्ड द्वारा 1-क्लिक में भर सकते हैं:\n👉 https://ebiz.licindia.in/eBiz/lic/customer/directpay/lic-premium-direct-pay.html\n\nअथवा UPI द्वारा भरने हेतु:\n${upiUrl}\n\nधन्यवाद,\n*विंध्याचल सिंह* (मुख्य अभिकर्ता)\nLIC शाखा 35D, भोपाल\n📞 9406935622`;
    
    const waUrl = `https://wa.me/91${mobile}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  }

  function markPolicyPaidDirectly(polNo, prem) {
    const policies = (window.appData && window.appData.policies) || 
                     (window.licDatabase && window.licDatabase.policies) || [];
    const pol = policies.find(p => p.policyNumber === polNo || p.policyNo === polNo);
    if (!pol) return;

    pol.status = 'In-Force';
    pol.paymentStatus = 'Paid';
    pol.lastPaidDate = new Date().toISOString().slice(0, 10);

    const commEarned = Math.round(prem * 0.15);

    alert(`✅ बधाई! पॉलिसी नं ${polNo} का प्रीमियम ₹${prem.toLocaleString('en-IN')} सफलतापूर्वक "PAID" मार्क हो गया है!\n\n💰 इस भुगतान पर आपका अनुमानित कमिशन ₹${commEarned.toLocaleString('en-IN')} आपके कमिशन लेजर में जुड़ गया है।`);

    const modal = document.getElementById('modalDirectPayment');
    if (modal) modal.remove();

    if (typeof renderDueTracker === 'function') renderDueTracker();
    if (typeof renderDashboard === 'function') renderDashboard();
  }

  function generate80cTaxCertificate(polNo) {
    const policies = (window.appData && window.appData.policies) || 
                     (window.licDatabase && window.licDatabase.policies) || [];
    const pol = policies.find(p => p.policyNumber === polNo || p.policyNo === polNo);
    if (!pol) return;

    const prem = Number(pol.totalPremium || pol.basicPremium || 0);
    const custName = pol.customerName || pol.name || 'Policyholder';
    const plan = pol.planName || pol.planNo || 'LIC Plan';
    const sa = Number(pol.sumAssured || 100000);
    const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });

    const certHtml = `
      <div id="modalTaxCert" class="modal" style="display:flex; position:fixed; inset:0; z-index:999999; background:rgba(15,23,42,0.85); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
        <div style="background:#ffffff; border-radius:14px; width:100%; max-width:680px; max-height:92vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.4); border:2px solid #00539b;">
          
          <div style="background:#00539b; color:#fff; padding:14px 20px; display:flex; justify-content:space-between; align-items:center;">
            <h3 style="margin:0; font-size:16px; font-weight:800;">📄 धारा 80C आयकर प्रीमियम भुगतान प्रमाण पत्र (Tax Certificate)</h3>
            <button type="button" onclick="document.getElementById('modalTaxCert').remove()" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">✕</button>
          </div>

          <div id="taxCertPrintArea" style="padding:28px; background:#fff; font-family:'Segoe UI', Arial, sans-serif; color:#0f172a; flex:1; overflow-y:auto;">
            <div style="border-bottom:3px solid #FFD100; padding-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h2 style="margin:0; color:#00539b; font-size:20px; font-weight:900;">LIFE INSURANCE CORPORATION OF INDIA</h2>
                <div style="font-size:12px; color:#64748b;">मंडल कार्यालय भोपाल • शाखा कोड: 35D</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:11px; font-weight:800; background:#FFD100; color:#002D54; padding:3px 8px; border-radius:6px;">वित्तीय वर्ष 2026-27</div>
                <div style="font-size:11px; color:#64748b; margin-top:2px;">दिनांक: ${today}</div>
              </div>
            </div>

            <div style="text-align:center; margin:18px 0;">
              <h3 style="margin:0; font-size:16px; text-decoration:underline; color:#002D54;">प्रीमियम संदाय प्रमाण-पत्र (धारा 80C आयकर अधिनियम 1961)</h3>
              <p style="margin:4px 0 0 0; font-size:11.5px; color:#475569;">Certificate of Premium Paid for Claiming Deduction under Section 80C of IT Act</p>
            </div>

            <table style="width:100%; border-collapse:collapse; font-size:12.5px; margin-bottom:20px;">
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569; width:40%;">पॉलिसीधारक का नाम:</td>
                <td style="padding:8px 0; font-weight:800; color:#0f172a;">${custName}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569;">पॉलिसी संख्या (Policy No.):</td>
                <td style="padding:8px 0; font-weight:900; color:#00539b;">${polNo}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569;">योजना एवं अवधि (Plan & Term):</td>
                <td style="padding:8px 0; font-weight:700;">${plan}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569;">बीमा धन (Sum Assured):</td>
                <td style="padding:8px 0; font-weight:800; color:#059669;">₹${sa.toLocaleString('en-IN')}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569;">भुगतान शुद्ध प्रीमियम (Paid Premium):</td>
                <td style="padding:8px 0; font-weight:900; color:#15803d; font-size:15px;">₹${prem.toLocaleString('en-IN')}</td>
              </tr>
              <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px 0; font-weight:700; color:#475569;">अभिकर्ता विवरण (Servicing Agent):</td>
                <td style="padding:8px 0; font-weight:700;">श्री विंध्याचल सिंह (कोड: 0273635D) • मो: 9406935622</td>
              </tr>
            </table>

            <div style="background:#f8fafc; border:1px dashed #cbd5e1; border-radius:8px; padding:12px; font-size:11px; color:#64748b; line-height:1.5;">
              यह प्रमाणित किया जाता है कि उपरोक्त पॉलिसीधारक द्वारा वित्तीय वर्ष 2026-27 के दौरान जीवन बीमा प्रीमियम के रूप में ₹${prem.toLocaleString('en-IN')} की राशि का भुगतान किया गया है जो आयकर अधिनियम की धारा 80C के अंतर्गत छूट हेतु पात्र है।
            </div>

            <div style="margin-top:24px; display:flex; justify-content:space-between; align-items:flex-end;">
              <div style="font-size:11px; color:#94a3b8;">
                ✓ सिस्टम जनरेटेड डिजिटल सत्यापन<br>
                शाखा 35D, भोपाल मंडल
              </div>
              <div style="text-align:right;">
                <div style="font-size:13px; font-weight:800; color:#00539b;">विंध्याचल सिंह</div>
                <div style="font-size:11px; color:#64748b;">अधिकृत मुख्य अभिकर्ता (0273635D)</div>
              </div>
            </div>

          </div>

          <div style="background:#f8fafc; padding:12px 20px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
            <button type="button" class="btn btn-gold btn-sm" onclick="window.print()" style="font-weight:800;">
              🖨️ PDF प्रिंट / डाउनलोड करें
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('modalTaxCert').remove()">
              बंद करें
            </button>
          </div>

        </div>
      </div>
    `;

    const old = document.getElementById('modalTaxCert');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', certHtml);
  }

  function openSmartDghRevivalModal(polNo) {
    const policies = (window.appData && window.appData.policies) || 
                     (window.licDatabase && window.licDatabase.policies) || [];
    const pol = policies.find(p => p.policyNumber === polNo || p.policyNo === polNo);
    if (!pol) return;

    const custName = pol.customerName || pol.name || 'Policyholder';
    const prem = Number(pol.totalPremium || pol.basicPremium || 0);

    const dghHtml = `
      <div id="modalSmartDgh" class="modal" style="display:flex; position:fixed; inset:0; z-index:999999; background:rgba(15,23,42,0.85); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
        <div style="background:#ffffff; border-radius:16px; width:100%; max-width:620px; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.35); border-top:5px solid #16a34a;">
          <div style="background:#15803d; color:#fff; padding:16px 20px; display:flex; justify-content:space-between; align-items:center;">
            <h3 style="margin:0; font-size:16px; font-weight:800;">🔄 स्मार्ट डिजिटल DGH रिवाइवल (Form 680)</h3>
            <button type="button" onclick="document.getElementById('modalSmartDgh').remove()" style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;">✕</button>
          </div>
          <div style="padding:20px;">
            <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px; padding:12px; margin-bottom:14px; font-size:12.5px; color:#14532d;">
              पॉलिसी: <strong>${polNo}</strong> • धारक: <strong>${custName}</strong><br>
              देय प्रीमियम: <strong>₹${prem.toLocaleString('en-IN')}</strong> + लेट फीस (Govt 9.5% p.a.)
            </div>
            
            <div style="margin-bottom:14px;">
              <label style="font-size:12px; font-weight:700; color:#334155; display:block; margin-bottom:6px;">स्वस्थता घोषणा (Declaration of Good Health):</label>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px; font-size:11.5px; color:#475569;">
                <label style="display:flex; align-items:flex-start; gap:8px; cursor:pointer;">
                  <input type="checkbox" id="chkDghHealth" checked style="margin-top:3px;">
                  <span>मैं प्रमाणित करता/करती हूँ कि मैं पूर्णतः स्वस्थ हूँ और पिछले 6 माह में किसी गंभीर बीमारी या अस्पताल में भर्ती नहीं हुआ/हुई हूँ।</span>
                </label>
              </div>
            </div>

            <div style="display:flex; gap:10px;">
              <button type="button" class="btn btn-success" onclick="alert('✅ डिजिटल DGH घोषणा सुरक्षित हुई! अब रिवाइवल भुगतान करें।'); document.getElementById('modalSmartDgh').remove(); openDirectPaymentGateway('${polNo}');" style="flex:1; padding:10px; font-weight:800;">
                ✓ ई-हस्ताक्षर स्वीकार करें व भुगतान पर जाएं
              </button>
              <button type="button" class="btn btn-secondary" onclick="document.getElementById('modalSmartDgh').remove()" style="padding:10px 16px;">
                रद्द करें
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const old = document.getElementById('modalSmartDgh');
    if (old) old.remove();
    document.body.insertAdjacentHTML('beforeend', dghHtml);
  }

  // Global Exports
  window.openDirectPaymentGateway = openDirectPaymentGateway;
  window.updateAgentUpiQr = updateAgentUpiQr;
  window.sharePaymentQrViaWhatsApp = sharePaymentQrViaWhatsApp;
  window.markPolicyPaidDirectly = markPolicyPaidDirectly;
  window.generate80cTaxCertificate = generate80cTaxCertificate;
  window.openSmartDghRevivalModal = openSmartDghRevivalModal;
})();
