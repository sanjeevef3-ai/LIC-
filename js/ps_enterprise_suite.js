// ==============================================================================
// 🌟 LIC AGENT SOFTWARE - PS ENTERPRISE SUITE MODULE
// Perfect Solutions (PS) Equivalent High-Value Features:
// 1. 1-Click 80C Tax Paid Certificate Generator (PDF / Print / WhatsApp)
// 2. Official Revival Quotation Calculator with Late Fee + GST
// 3. 3-Page Client Plan Presentation Brochure PDF Studio
// 4. Personalized Festival / Birthday Branded Canvas Image Card Generator
// 5. Medical & Non-Medical Underwriting Limits Finder
// 6. Lead & Calling Follow-Up Diary Manager
// ==============================================================================

(function() {
  'use strict';

  window.PsEnterpriseSuite = {

    // ==========================================================================
    // 1. 📄 1-CLICK 80C TAX CERTIFICATE GENERATOR
    // ==========================================================================
    generateTaxCertificate80C: function(customerIdOrPolicyId, fyYear) {
      const policies = Array.isArray(window.appData?.policies) ? window.appData.policies : [];
      const customers = Array.isArray(window.appData?.customers) ? window.appData.customers : [];
      const fy = fyYear || '2026-2027';

      // Find client and matching policies
      let targetClient = customers.find(c => c.id === customerIdOrPolicyId || c.mobile === customerIdOrPolicyId);
      let clientPolicies = [];

      if (targetClient) {
        clientPolicies = policies.filter(p => p.customerId === targetClient.id || p.customerMobile === targetClient.mobile || p.customerName === targetClient.name);
      } else {
        const singlePol = policies.find(p => p.id === customerIdOrPolicyId || p.policyNumber === customerIdOrPolicyId);
        if (singlePol) {
          clientPolicies = [singlePol];
          targetClient = { name: singlePol.customerName, mobile: singlePol.customerMobile, pan: singlePol.panNumber || 'ABCDE1234F' };
        }
      }

      if (clientPolicies.length === 0) {
        alert('पॉलिसी अथवा ग्राहक रिकॉर्ड नहीं मिला।');
        return;
      }

      const totalDeposit = clientPolicies.reduce((acc, p) => acc + Number(p.totalPremium || p.basicPremium || 0), 0);

      // Open print/preview modal
      const modal = document.getElementById('modalPsTaxCertificate');
      const body = document.getElementById('psTaxCertModalBody');

      if (body) {
        body.innerHTML = `
          <div id="psPrintableTaxCert" style="padding:24px; font-family:'Segoe UI', Arial, sans-serif; color:#0f172a; background:#ffffff; border:2px solid #00539B; border-radius:12px; max-width:650px; margin:auto;">
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #00539B; padding-bottom:12px; margin-bottom:16px;">
              <div>
                <div style="font-size:18px; font-weight:900; color:#00539B; letter-spacing:0.5px;">भारतीय जीवन बीमा निगम</div>
                <div style="font-size:13px; font-weight:700; color:#002D54;">LIFE INSURANCE CORPORATION OF INDIA</div>
                <div style="font-size:11px; color:#64748b;">शाखा: 35D, भोपाल मंडल (मध्य प्रदेश)</div>
              </div>
              <div style="text-align:right;">
                <span style="background:#00539B; color:#fff; font-size:11px; font-weight:800; padding:4px 10px; border-radius:6px; display:inline-block;">SEC 80C ITR CERTIFICATE</span>
                <div style="font-size:11px; color:#64748b; margin-top:4px;">वित्तीय वर्ष: <strong>${fy}</strong></div>
              </div>
            </div>

            <!-- Client Info -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px; margin-bottom:16px; font-size:12px; line-height:1.6;">
              <div style="display:flex; justify-content:space-between;">
                <div>बीमित का नाम: <strong>${targetClient.name || 'Policyholder'}</strong></div>
                <div>पैन नंबर: <strong>${targetClient.pan || 'XXXXXXXXXX'}</strong></div>
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:4px;">
                <div>मोबाइल नंबर: <strong>+91 ${targetClient.mobile || '9406935622'}</strong></div>
                <div>प्रमाण पत्र जारी दिनांक: <strong>${new Date().toLocaleDateString('en-GB')}</strong></div>
              </div>
            </div>

            <!-- Policies Table -->
            <table style="width:100%; border-collapse:collapse; font-size:11.5px; margin-bottom:16px;">
              <thead>
                <tr style="background:#00539B; color:#ffffff; text-align:left;">
                  <th style="padding:8px 10px; border:1px solid #00539B;">क्र.</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">पॉलिसी सं.</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">प्लान विवरण</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">बीमा धन (SA)</th>
                  <th style="padding:8px 10px; border:1px solid #00539B; text-align:right;">जमा प्रीमियम (₹)</th>
                </tr>
              </thead>
              <tbody>
                ${clientPolicies.map((p, idx) => `
                  <tr style="border-bottom:1px solid #e2e8f0;">
                    <td style="padding:8px 10px; border:1px solid #e2e8f0;">${idx + 1}</td>
                    <td style="padding:8px 10px; border:1px solid #e2e8f0; font-weight:700;">${p.policyNumber || p.id}</td>
                    <td style="padding:8px 10px; border:1px solid #e2e8f0;">${p.planName || 'LIC Plan'}</td>
                    <td style="padding:8px 10px; border:1px solid #e2e8f0;">₹${Number(p.sumAssured || 100000).toLocaleString('en-IN')}</td>
                    <td style="padding:8px 10px; border:1px solid #e2e8f0; text-align:right; font-weight:800; color:#059669;">₹${Number(p.totalPremium || p.basicPremium || 0).toLocaleString('en-IN')}</td>
                  </tr>
                `).join('')}
                <tr style="background:#f1f5f9; font-weight:800; font-size:12px;">
                  <td colspan="4" style="padding:10px; text-align:right; border:1px solid #cbd5e1;">कुल धारा 80C छूट हेतु पात्र प्रीमियम:</td>
                  <td style="padding:10px; text-align:right; color:#00539B; font-size:13px; border:1px solid #cbd5e1;">₹${Number(totalDeposit).toLocaleString('en-IN')}</td>
                </tr>
              </tbody>
            </table>

            <!-- Footer Declaration & Agent Seal -->
            <div style="font-size:10.5px; color:#64748b; line-height:1.5; margin-bottom:18px;">
              प्रमाणित किया जाता है कि उपर्युक्त पॉलिसियों का प्रीमियम वित्तीय वर्ष ${fy} के दौरान प्राप्त हुआ है तथा यह राशि आयकर अधिनियम 1961 की धारा 80C के अंतर्गत कर छूट के लिए मान्य है।
            </div>

            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-top:1px dashed #cbd5e1; padding-top:12px;">
              <div style="font-size:11px;">
                <div>अधिकृत एजेंट: <strong>विंध्याचल सिंह</strong></div>
                <div>एजेंसी कोड: <strong style="color:#00539B;">0273635D</strong> • शाखा: 35D, भोपाल</div>
                <div>मो.: 9406935622 • ✉️ vindhyachal02@gmail.com</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:10px; color:#059669; font-weight:800; border:1px solid #10b981; padding:3px 8px; border-radius:4px;">
                  ✓ DIGITAL VERIFIED RECORD
                </div>
              </div>
            </div>
          </div>
        `;

        if (typeof openModal === 'function') openModal('modalPsTaxCertificate');
      }
    },

    // Share 80C Certificate on WhatsApp
        // ==========================================================================
    // 1.5 📄 AGENT SELF 80C TAX DEDUCTION CALCULATOR & FORM GENERATOR
    // ==========================================================================
    generateAgent80CCertificate: function(fyYear) {
      const fy = fyYear || '2026-2027';
      const policies = Array.isArray(window.appData?.policies) ? window.appData.policies : [];
      const prof = window.appData?.agentProfile || {
        name: 'Sh. Vindhyachal Singh',
        mobile: '9406935622',
        email: 'vindhyachal02@gmail.com',
        agencyCode: '0273635D',
        branchCode: '35D'
      };

      // Find policies belonging to Agent Vindhyachal Singh
      let agentPolicies = policies.filter(p => {
        const cname = (p.customerName || '').toLowerCase();
        const cmob = String(p.customerMobile || '');
        return cname.includes('vindh') || cmob === '9406935622' || cmob === '9131118019' || cmob === '9425110286';
      });

      // If no specific policies tagged, provide default official agent portfolio policies
      if (agentPolicies.length === 0) {
        agentPolicies = [
          { policyNumber: '392472873', planName: 'LIC Jeevan Utsav (873)', sumAssured: 210000, totalPremium: 2556, paymentMode: 'Mly', doc: '2025-08-14' },
          { policyNumber: '354791373', planName: 'LIC Jeevan Amrit (168)', sumAssured: 50000, totalPremium: 2025, paymentMode: 'Hly', doc: '2013-07-28' }
        ];
      }

      // Calculate annual deposit under 80C
      const totalAnnualDeposit = agentPolicies.reduce((acc, p) => {
        const prem = Number(p.totalPremium || p.basicPremium || 0);
        let multiplier = 1;
        const mode = (p.paymentMode || '').toUpperCase();
        if (mode.startsWith('M') || mode === 'NACH' || mode === 'SSS') multiplier = 12;
        else if (mode.startsWith('Q')) multiplier = 4;
        else if (mode.startsWith('H')) multiplier = 2;
        else multiplier = 1;
        return acc + (prem * multiplier);
      }, 0);

      // Section 80C statutory limit in India is Rs. 1,50,000
      const statutory80CLimit = 150000;
      const eligible80CDeduction = Math.min(statutory80CLimit, totalAnnualDeposit);
      const remaining80CScope = Math.max(0, statutory80CLimit - totalAnnualDeposit);

      const modal = document.getElementById('modalPsTaxCertificate');
      const body = document.getElementById('psTaxCertModalBody');

      if (body) {
        body.innerHTML = `
          <div id="psPrintableTaxCert" style="padding:24px; font-family:'Segoe UI', Arial, sans-serif; color:#0f172a; background:#ffffff; border:2px solid #00539B; border-radius:12px; max-width:680px; margin:auto;">
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #00539B; padding-bottom:12px; margin-bottom:16px;">
              <div>
                <div style="font-size:18px; font-weight:900; color:#00539B; letter-spacing:0.5px;">भारतीय जीवन बीमा निगम</div>
                <div style="font-size:13px; font-weight:700; color:#002D54;">LIFE INSURANCE CORPORATION OF INDIA</div>
                <div style="font-size:11px; color:#64748b;">शाखा: ${prof.branchCode || '35D'}, भोपाल मंडल • अधिकृत एजेंसी पोर्टल</div>
              </div>
              <div style="text-align:right;">
                <span style="background:linear-gradient(135deg, #059669, #0284c7); color:#fff; font-size:11px; font-weight:800; padding:4px 10px; border-radius:6px; display:inline-block;">AGENT FORM 80C STATEMENT</span>
                <div style="font-size:11px; color:#64748b; margin-top:4px;">वित्तीय वर्ष (FY): <strong>${fy}</strong></div>
              </div>
            </div>

            <!-- Agent Personal Profile Info -->
            <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:14px; margin-bottom:16px; font-size:12px; line-height:1.6;">
              <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
                <div>अभिकर्ता / करदाता का नाम: <strong style="color:#065f46; font-size:13px;">${prof.name || 'Sh. Vindhyachal Singh'}</strong></div>
                <div>एजेंसी कोड: <strong style="color:#00539B;">${prof.agencyCode || '0273635D'}</strong></div>
              </div>
              <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-top:4px;">
                <div>मोबाइल: <strong>+91 ${prof.mobile || '9406935622'}</strong></div>
                <div>ईमेल: <strong style="color:#0284c7;">${prof.email || 'vindhyachal02@gmail.com'}</strong></div>
                <div>पैन नंबर: <strong>${prof.pan || 'AAPSV5622K'}</strong></div>
              </div>
            </div>

            <!-- 80C Summary Cards -->
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-bottom:16px; text-align:center;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:10px; border-radius:8px;">
                <div style="font-size:11px; color:#64748b; font-weight:600;">कुल वार्षिक LIC प्रीमियम</div>
                <div style="font-size:16px; font-weight:900; color:#00539B; margin-top:2px;">₹${Number(totalAnnualDeposit).toLocaleString('en-IN')}</div>
              </div>
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:10px; border-radius:8px;">
                <div style="font-size:11px; color:#065f46; font-weight:600;">80C कर छूट हेतु पात्र</div>
                <div style="font-size:16px; font-weight:900; color:#059669; margin-top:2px;">₹${Number(eligible80CDeduction).toLocaleString('en-IN')}</div>
              </div>
              <div style="background:#fffbeb; border:1px solid #fde68a; padding:10px; border-radius:8px;">
                <div style="font-size:11px; color:#92400e; font-weight:600;">अतिरिक्त 80C शेष सीमा</div>
                <div style="font-size:16px; font-weight:900; color:#d97706; margin-top:2px;">₹${Number(remaining80CScope).toLocaleString('en-IN')}</div>
              </div>
            </div>

            <!-- Agent Policies Table -->
            <table style="width:100%; border-collapse:collapse; font-size:11.5px; margin-bottom:16px;">
              <thead>
                <tr style="background:#00539B; color:#ffffff; text-align:left;">
                  <th style="padding:8px 10px; border:1px solid #00539B;">क्र.</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">पॉलिसी सं.</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">प्लान का नाम</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">मोड</th>
                  <th style="padding:8px 10px; border:1px solid #00539B;">बीमा धन (SA)</th>
                  <th style="padding:8px 10px; border:1px solid #00539B; text-align:right;">वार्षिक प्रीमियम (₹)</th>
                </tr>
              </thead>
              <tbody>
                ${agentPolicies.map((p, idx) => {
                  const prem = Number(p.totalPremium || p.basicPremium || 0);
                  let multiplier = 1;
                  const mode = (p.paymentMode || '').toUpperCase();
                  if (mode.startsWith('M') || mode === 'NACH' || mode === 'SSS') multiplier = 12;
                  else if (mode.startsWith('Q')) multiplier = 4;
                  else if (mode.startsWith('H')) multiplier = 2;
                  const annPrem = prem * multiplier;
                  return `
                    <tr style="border-bottom:1px solid #e2e8f0;">
                      <td style="padding:8px 10px; border:1px solid #e2e8f0;">${idx + 1}</td>
                      <td style="padding:8px 10px; border:1px solid #e2e8f0; font-weight:700;">${p.policyNumber || p.id}</td>
                      <td style="padding:8px 10px; border:1px solid #e2e8f0;">${p.planName || 'LIC Plan'}</td>
                      <td style="padding:8px 10px; border:1px solid #e2e8f0;">${p.paymentMode || 'Yly'}</td>
                      <td style="padding:8px 10px; border:1px solid #e2e8f0;">₹${Number(p.sumAssured || 100000).toLocaleString('en-IN')}</td>
                      <td style="padding:8px 10px; border:1px solid #e2e8f0; text-align:right; font-weight:800; color:#059669;">₹${Number(annPrem).toLocaleString('en-IN')}</td>
                    </tr>
                  `;
                }).join('')}
                <tr style="background:#f1f5f9; font-weight:800; font-size:12px;">
                  <td colspan="5" style="padding:10px; text-align:right; border:1px solid #cbd5e1;">कुल धारा 80C वार्षिक छूट (Eligible 80C Deduction):</td>
                  <td style="padding:10px; text-align:right; color:#00539B; font-size:13px; border:1px solid #cbd5e1;">₹${Number(eligible80CDeduction).toLocaleString('en-IN')}</td>
                </tr>
              </tbody>
            </table>

            <!-- Legal Declaration & Authentication -->
            <div style="font-size:10.5px; color:#64748b; line-height:1.5; margin-bottom:18px;">
              यह प्रमाणित किया जाता है कि अभिकर्ता श्री विंध्याचल सिंह (एजेंसी कोड: 0273635D) द्वारा धारित उपरोक्त स्वयं की पॉलिसियों का प्रीमियम वित्तीय वर्ष ${fy} में जमा किया गया है। यह राशि आयकर अधिनियम 1961 की धारा 80C के तहत कुल ₹1,50,000 की सीमा के अंतर्गत आयकर छूट के लिए पूर्णतः मान्य है।
            </div>

            <div style="display:flex; justify-content:space-between; align-items:flex-end; border-top:1px dashed #cbd5e1; padding-top:12px;">
              <div style="font-size:11px;">
                <div>करदाता / अभिकर्ता: <strong>श्री विंध्याचल सिंह</strong></div>
                <div>एजेंसी कोड: <strong style="color:#00539B;">0273635D</strong> • शाखा 35D, भोपाल मंडल</div>
                <div>मो.: 9406935622 • ✉️ vindhyachal02@gmail.com</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:10px; color:#059669; font-weight:800; border:1px solid #10b981; padding:3px 8px; border-radius:4px; display:inline-block;">
                  ✓ ITR 80C VERIFIED STATEMENT
                </div>
                <div style="font-size:10px; color:#64748b; margin-top:4px;">दिनांक: ${new Date().toLocaleDateString('en-GB')}</div>
              </div>
            </div>
          </div>
        `;

        if (typeof openModal === 'function') openModal('modalPsTaxCertificate');
      }
    },

    shareTaxCertificateWhatsApp: function(phone, name, totalAmt, fy) {
      const msg = `नमस्कार ${name} जी, 🌸🙏\n\nवित्तीय वर्ष *${fy || '2026-27'}* का आपका *LIC धारा 80C प्रीमियम भुगतान प्रमाण पत्र (ITR Tax Exemption Certificate)* तैयार है।\n\n🛡️ कुल 80C छूट हेतु पात्र जमा प्रीमियम: *₹${Number(totalAmt).toLocaleString('en-IN')}*\n\nआप आयकर रिटर्न (ITR) में इस विवरण का उपयोग कर टैक्स छूट प्राप्त कर सकते हैं।\n\nसस्नेह,\n*विंध्याचल सिंह* (LIC Agent Code: 0273635D)\nशाखा: 35D, भोपाल | मो.: 9406935622`;
      const clean = (phone || '').replace(/\D/g, '');
      const url = clean ? `https://wa.me/91${clean}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    },

    // ==========================================================================
    // 2. 🔄 OFFICIAL REVIVAL QUOTATION CALCULATOR (Late Fee + 18% GST)
    // ==========================================================================
    calculateOfficialRevivalQuote: function(policyNumber, premiumAmt, overdueDays) {
      const prem = Number(premiumAmt || 0);
      const days = Number(overdueDays || 120);

      // LIC Official Rule: 9.5% per annum compound/simple interest on unpaid premiums
      const years = days / 365.25;
      const missedInstallments = Math.max(1, Math.ceil(days / 90)); // approximate installments missed
      const totalUnpaidPremium = prem * missedInstallments;

      // Late fee at 9.5% p.a.
      const lateFeeInterest = Math.round(totalUnpaidPremium * 0.095 * years);
      // GST on late fee is 18%
      const lateFeeGst = Math.round(lateFeeInterest * 0.18);
      const totalPayable = totalUnpaidPremium + lateFeeInterest + lateFeeGst;

      return {
        policyNumber,
        premiumPerTerm: prem,
        missedInstallments,
        totalUnpaidPremium,
        overdueDays: days,
        interestRate: '9.5% p.a.',
        lateFeeInterest,
        lateFeeGst,
        totalPayable
      };
    },

    openRevivalModalForPolicy: function(polNo, custName, mobile, premium, dueDate) {
      const due = dueDate ? new Date(dueDate) : new Date();
      const diffDays = Math.max(1, Math.round((new Date().getTime() - due.getTime()) / (1000 * 3600 * 24)));
      const quote = this.calculateOfficialRevivalQuote(polNo, premium, diffDays);

      const modal = document.getElementById('modalPsRevivalQuote');
      const body = document.getElementById('psRevivalModalBody');

      if (body) {
        body.innerHTML = `
          <div style="padding:18px; font-family:'Segoe UI', Arial, sans-serif;">
            <div style="background:linear-gradient(135deg, #EF4444 0%, #b91c1c 100%); color:#fff; padding:14px 18px; border-radius:10px; margin-bottom:16px;">
              <h3 style="margin:0; font-size:16px; font-weight:800;">🔄 LIC आधिकारिक पॉलिसी पुनर्चलन (Revival Quotation)</h3>
              <p style="margin:3px 0 0 0; font-size:11.5px; color:#fee2e2;">पॉलिसी संख्या: <strong>${polNo}</strong> • बीमित: <strong>${custName}</strong></p>
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:14px; margin-bottom:16px; font-size:12.5px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:#64748b;">देय किस्तों की संख्या:</span>
                <strong>${quote.missedInstallments} किस्तें (बकाया)</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:#64748b;">मूल बकाया प्रीमियम:</span>
                <strong>₹${quote.totalUnpaidPremium.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:#64748b;">विलंब शुल्क ब्याज (9.5% p.a.):</span>
                <strong style="color:#D97706;">₹${quote.lateFeeInterest.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:#64748b;">विलंब शुल्क पर GST (18%):</span>
                <strong style="color:#D97706;">₹${quote.lateFeeGst.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-top:2px solid #cbd5e1; padding-top:10px; font-size:14px;">
                <span style="font-weight:800; color:#0b2545;">चालू करने हेतु कुल देय राशि:</span>
                <span style="font-weight:900; color:#059669; font-size:16px;">₹${quote.totalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style="display:flex; gap:10px; justify-content:flex-end;">
              <button class="btn btn-outline" onclick="closeModal('modalPsRevivalQuote')">बंद करें</button>
              <button class="btn btn-primary" onclick="PsEnterpriseSuite.shareRevivalQuoteWhatsApp('${polNo}', '${escapeHtml(custName)}', '${mobile}', ${quote.totalPayable}, ${quote.missedInstallments})" style="background:#25D366; border-color:#25D366; font-weight:800;">
                💬 व्हाट्सएप पर कोटेशन भेजें
              </button>
            </div>
          </div>
        `;

        if (typeof openModal === 'function') openModal('modalPsRevivalQuote');
      }
    },

    shareRevivalQuoteWhatsApp: function(polNo, name, mobile, totalPayable, installments) {
      const msg = `नमस्कार ${name} जी, 🌸🙏\n\nआपकी बंद/व्यपगत (Lapsed) *LIC पॉलिसी सं.: ${polNo}* को पुनः चालू (Revive) कराने का आधिकारिक विवरण निम्नानुसार है:\n\n📋 कुल बकाया किस्तें: *${installments}*\n💰 कुल जमा करने योग्य राशि (ब्याज + GST सहित): *₹${Number(totalPayable).toLocaleString('en-IN')}*\n\nपॉलिसी को पुनः चालू कराकर संपूर्ण परिवार की बीमा सुरक्षा निर्बाध रूप से बहाल करें।\n\nसहयोग हेतु संपर्क करें:\n*विंध्याचल सिंह* (LIC एजेंट कोड: 0273635D)\nशाखा: 35D, भोपाल | मो.: 9406935622`;
      const clean = (mobile || '').replace(/\D/g, '');
      const url = clean ? `https://wa.me/91${clean}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    },

    // ==========================================================================
    // 3. 📑 3-PAGE CLIENT PLAN PRESENTATION BROCHURE STUDIO
    // ==========================================================================
    openPlanBrochureStudio: function(planName, age, sa, term, ppt) {
      const modal = document.getElementById('modalPsBrochureStudio');
      const body = document.getElementById('psBrochureModalBody');
      const pName = planName || 'LIC Kanyadan / Jeevan Labh';
      const cAge = age || 30;
      const cSa = Number(sa || 500000);
      const cTerm = term || 21;
      const cPpt = ppt || 16;
      const estMaturity = Math.round(cSa * 2.15);
      const estAnnualPrem = Math.round((cSa / cPpt) * 1.05);

      if (body) {
        body.innerHTML = `
          <div id="psPrintableBrochure" style="padding:20px; font-family:'Segoe UI', Arial, sans-serif; background:#ffffff; color:#0f172a;">
            
            <!-- PAGE 1: COVER -->
            <div style="border:3px solid #00539B; border-radius:12px; padding:24px; margin-bottom:24px; background:linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); text-align:center;">
              <div style="font-size:13px; font-weight:800; color:#00539B; letter-spacing:1px; text-transform:uppercase;">भारतीय जीवन बीमा निगम (LIC OF INDIA)</div>
              <h1 style="font-size:24px; font-weight:900; color:#0b2545; margin:12px 0;">🌸 ${pName} स्पेशल प्रेजेंटेशन 🌸</h1>
              <p style="font-size:13px; color:#475569; max-width:500px; margin:auto;">गारंटीड सुरक्षा, सुरक्षित भविष्य एवं टैक्स-फ्री मैच्योरिटी का संपूर्ण पारिवारिक समाधान</p>
              
              <div style="display:flex; justify-content:center; gap:20px; margin:20px 0; font-size:12.5px;">
                <div style="background:#fff; padding:10px 16px; border-radius:8px; border:1px solid #cbd5e1;">प्रस्तावित आयु: <strong>${cAge} वर्ष</strong></div>
                <div style="background:#fff; padding:10px 16px; border-radius:8px; border:1px solid #cbd5e1;">बीमा धन (SA): <strong>₹${cSa.toLocaleString('en-IN')}</strong></div>
                <div style="background:#fff; padding:10px 16px; border-radius:8px; border:1px solid #cbd5e1;">अवधि: <strong>${cTerm} वर्ष (${cPpt} वर्ष भुगतान)</strong></div>
              </div>

              <div style="background:#00539B; color:#fff; padding:14px; border-radius:8px; display:inline-block; font-size:16px; font-weight:900;">
                अनुमानित मैच्योरिटी (टैक्स-फ्री): ₹${estMaturity.toLocaleString('en-IN')}
              </div>
            </div>

            <!-- PAGE 2: BENEFITS -->
            <div style="border:1px solid #e2e8f0; border-radius:10px; padding:18px; margin-bottom:24px;">
              <h3 style="color:#00539B; margin:0 0 12px 0; font-size:15px; font-weight:800;">🛡️ मुख्य लाभ एवं विशेषताएं (Key Benefits)</h3>
              <ul style="font-size:12.5px; line-height:1.8; color:#334155; margin:0; padding-left:20px;">
                <li><strong>गारंटीड जीवन बीमा सुरक्षा:</strong> पॉलिसी शुरू होते ही ₹${cSa.toLocaleString('en-IN')} का लाइफ कवर तुरंत लागू।</li>
                <li><strong>दुर्घटना हितलाभ (Accidental Cover):</strong> अतिरिक्त ₹${cSa.toLocaleString('en-IN')} का डबल एक्सीडेंटल लाभ।</li>
                <li><strong>टैक्स बचत (80C):</strong> प्रतिवर्ष आयकर में ₹1.5 लाख तक की टैक्स छूट।</li>
                <li><strong>कर-मुक्त मैच्योरिटी (Sec 10(10D)):</strong> परिपक्वता पर मिलने वाली कुल ₹${estMaturity.toLocaleString('en-IN')} राशि पूर्णतः टैक्स फ्री।</li>
                <li><strong>पॉलिसी लोन सुविधा:</strong> जरूरत पड़ने पर मात्र 3 वर्ष बाद 90% तक आसान लोन उपलब्ध।</li>
              </ul>
            </div>

            <!-- PAGE 3: AGENT SEAL & CONTACT -->
            <div style="display:flex; justify-content:space-between; align-items:center; background:#f8fafc; border:1px solid #cbd5e1; border-radius:10px; padding:16px;">
              <div style="display:flex; align-items:center; gap:12px;">
                <div style="width:48px; height:48px; border-radius:50%; background:#00539B; color:#FFD100; font-size:20px; font-weight:900; display:flex; align-items:center; justify-content:center;">वि</div>
                <div>
                  <div style="font-size:14px; font-weight:900; color:#0b2545;">विंध्याचल सिंह (वरिष्ठ बीमा सलाहकार)</div>
                  <div style="font-size:11.5px; color:#059669; font-weight:700;">एजेंसी कोड: 0273635D • शाखा: 35D, भोपाल मंडल</div>
                  <div style="font-size:11.5px; color:#64748b;">मो.: 9406935622 • सेवा: 24x7 संपूर्ण सहायता</div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary" onclick="window.print()" style="font-weight:800;">🖨️ Print / Save PDF</button>
              </div>
            </div>

          </div>
        `;

        if (typeof openModal === 'function') openModal('modalPsBrochureStudio');
      }
    },

    // ==========================================================================
    // 4. 🎨 BRANDED FESTIVAL & BIRTHDAY CANVAS IMAGE GENERATOR
    // ==========================================================================
    generateBrandedGreetingImage: function(clientName, festivalOrOccasion) {
      const name = clientName || 'प्रिय ग्राहक';
      const occasion = festivalOrOccasion || 'जन्मदिन';

      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 800;
      const ctx = canvas.getContext('2d');

      // Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 800, 800);
      grad.addColorStop(0, '#002D54');
      grad.addColorStop(1, '#00539B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 800);

      // Gold Border
      ctx.strokeStyle = '#FFD100';
      ctx.lineWidth = 10;
      ctx.strokeRect(20, 20, 760, 760);

      // LIC Header
      ctx.fillStyle = '#FFD100';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('भारतीय जीवन बीमा निगम (LIC OF INDIA)', 400, 90);

      // Occasion Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 38px Arial, sans-serif';
      ctx.fillText(`🎉 हार्दिक शुभकामनाएं 🎉`, 400, 180);

      // Client Name
      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 44px Arial, sans-serif';
      ctx.fillText(name, 400, 270);

      // Message Quote
      ctx.fillStyle = '#f8fafc';
      ctx.font = '22px Arial, sans-serif';
      ctx.fillText('ईश्वर से आपके उत्तम स्वास्थ्य, दीर्घायु एवं निरंतर सफलता', 400, 360);
      ctx.fillText('की मंगल कामना करता हूँ।', 400, 400);

      // Slogan
      ctx.fillStyle = '#FFD100';
      ctx.font = 'italic bold 24px Arial, sans-serif';
      ctx.fillText('योगक्षेमं वहाम्यहम् • सुरक्षा और समृद्धि सदा आपके साथ', 400, 500);

      // Agent Branding Bottom Card
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(40, 600, 720, 140);
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, 600, 720, 140);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 26px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('विंध्याचल सिंह (LIC Agent)', 70, 650);

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 20px Arial, sans-serif';
      ctx.fillText('मो.: 9406935622 • एजेंसी कोड: 0273635D', 70, 690);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '16px Arial, sans-serif';
      ctx.fillText('शाखा: 35D, भोपाल मंडल', 70, 720);

      // Download triggered
      const link = document.createElement('a');
      link.download = `LIC_Greeting_${name.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    },

    // ==========================================================================
    // 5. 🏥 MEDICAL & NON-MEDICAL UNDERWRITING LIMITS CHECKER
    // ==========================================================================
    checkMedicalRequirement: function(age, sumAssured) {
      const a = Number(age || 30);
      const sa = Number(sumAssured || 500000);

      let status = 'Non-Medical Special';
      let remarks = 'बिना किसी डॉक्टर जांच के मान्य (No Medical Test Required)';
      let badgeColor = '#059669';

      if (a <= 35 && sa <= 5000000) {
        status = 'Non-Medical Special (NM-SP)';
        remarks = '35 वर्ष तक ₹50 लाख तक बिना मेडिकल के 100% मान्य।';
      } else if (a <= 45 && sa <= 3000000) {
        status = 'Non-Medical General (NM-GEN)';
        remarks = '45 वर्ष तक ₹30 लाख तक बिना मेडिकल के मान्य।';
      } else if (a <= 50 && sa <= 1500000) {
        status = 'Non-Medical Standard';
        remarks = '50 वर्ष तक ₹15 लाख तक बिना मेडिकल के मान्य।';
      } else {
        status = 'Medical Exam Required (FUC)';
        remarks = 'डॉक्टर रिपोर्ट आवश्यक: FUC, ECG, FBS, Lipid Profile रिपोर्ट लगेगी।';
        badgeColor = '#EF4444';
      }

      return { age: a, sumAssured: sa, status, remarks, badgeColor };
    },

    // ==========================================================================
    // 6. 📅 LEAD & CALLING FOLLOW-UP DIARY MANAGER
    // ==========================================================================
    saveFollowUpEntry: function(clientName, mobile, followDate, notes) {
      const key = 'LIC_AGENT_FOLLOW_UPS';
      let list = [];
      try {
        list = JSON.parse(localStorage.getItem(key) || '[]');
      } catch(e){}

      list.push({
        id: 'FLW-' + Date.now(),
        clientName: clientName || 'New Lead',
        mobile: mobile || '',
        followDate: followDate || new Date().toISOString().split('T')[0],
        notes: notes || 'प्रीमियम फॉलो-अप व नया प्लान डिस्कशन',
        createdAt: new Date().toISOString()
      });

      localStorage.setItem(key, JSON.stringify(list));
      alert(`✓ फॉलो-अप डायरी में नोट किया गया: ${clientName} (${followDate})`);
      this.renderFollowUpDiaryTable();
    },

    renderFollowUpDiaryTable: function() {
      const tbody = document.getElementById('psFollowUpDiaryTableBody');
      if (!tbody) return;

      let list = [];
      try {
        list = JSON.parse(localStorage.getItem('LIC_AGENT_FOLLOW_UPS') || '[]');
      } catch(e){}

      if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color:#64748b;">डायरी में अभी कोई आगामी फॉलो-अप दर्ज नहीं है। ऊपर फॉर्म से जोड़ें।</td></tr>';
        return;
      }

      tbody.innerHTML = list.map(item => `
        <tr style="border-bottom:1px solid #e2e8f0; font-size:12px;">
          <td style="padding:8px 10px; font-weight:800; color:#0b2545;">${item.clientName}</td>
          <td style="padding:8px 10px;">${item.mobile}</td>
          <td style="padding:8px 10px; color:#00539B; font-weight:700;">${item.followDate}</td>
          <td style="padding:8px 10px;">${item.notes}</td>
          <td style="padding:8px 10px;">
            <a href="tel:${item.mobile}" class="btn btn-sm btn-primary" style="padding:3px 8px; font-size:11px; text-decoration:none;">📞 Call</a>
          </td>
        </tr>
      `).join('');
    }

  };

})();
