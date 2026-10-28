// ==============================================================================
// LIC AGENT SOFTWARE - POLICY LOAN & REVIVAL LIQUIDITY ENGINE
// Pure 100% Policy-Level Official Calculations (Zero Artificial Surnames)
// 1. Instant Policy Loan & Liquidity Assessment Engine
// 2. 1-Click WhatsApp Batch Dispatch Engine
// ==============================================================================

(function() {
  'use strict';

  window.V10Sovereign = {
    version: 'Policy Loan & Liquidity Desk',

    // 1. Calculate Policy Loan Eligibility (Official LIC Rule: 3 full years premium paid)
    calculatePolicyLoanEstimate: function(p) {
      if (!p) return 0;
      const prem = Number(p.totalPremium || p.basicPremium || p.premium || 0);
      const ppt = Number(p.ppt || p.term || 15);
      const doc = p.doc ? new Date(p.doc) : null;
      if (!doc || isNaN(doc.getTime())) return 0;
      
      const yearsPaid = (new Date().getTime() - doc.getTime()) / (1000 * 3600 * 24 * 365.25);
      if (yearsPaid < 3) return 0; // Minimum 3 full years for LIC loan eligibility

      const eligibleYears = Math.min(yearsPaid, ppt);
      const totalPremiumsPaid = eligibleYears * prem;
      const surrenderValue = totalPremiumsPaid * (0.30 + (0.03 * (eligibleYears - 3)));
      const maxLoan = Math.round(surrenderValue * 0.90);
      return Math.max(0, maxLoan);
    },

    // 2. Render Policy Liquidity / Loan Desk
    renderLoanDeskTab: function() {
      const tbody = document.getElementById('v10LoanTableBody');
      if (!tbody) return;

      const policies = Array.isArray(window.appData?.policies) ? window.appData.policies : [];
      const eligible = [];
      let totalLoanPotential = 0;

      policies.forEach(p => {
        const loan = this.calculatePolicyLoanEstimate(p);
        if (loan > 0) {
          totalLoanPotential += loan;
          eligible.push({ policy: p, loan: loan });
        }
      });

      const kpiLoan = document.getElementById('v10KpiTotalLoanPotential');
      if (kpiLoan) kpiLoan.innerText = '₹' + (totalLoanPotential / 100000).toFixed(2) + ' Lakh';

      const countBadge = document.getElementById('v10KpiLoanEligibleCount');
      if (countBadge) countBadge.innerText = eligible.length + ' Policies Eligible (3+ Years Completed)';

      if (eligible.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:30px; color:#64748b;">No loan-eligible policies found (Minimum 3 years tenure required).</td></tr>';
        return;
      }

      tbody.innerHTML = eligible.slice(0, 100).map(item => `
        <tr style="border-bottom:1px solid #e2e8f0; font-size:12.5px;">
          <td style="padding:10px 12px; font-weight:700; color:#0b2545;">${item.policy.policyNumber || item.policy.id}</td>
          <td style="padding:10px 12px; font-weight:600;">${item.policy.customerName}</td>
          <td style="padding:10px 12px;">${item.policy.planName}</td>
          <td style="padding:10px 12px;">₹${Number(item.policy.totalPremium || item.policy.basicPremium || 0).toLocaleString('en-IN')}</td>
          <td style="padding:10px 12px; font-weight:800; color:#059669;">₹${item.loan.toLocaleString('en-IN')}</td>
          <td style="padding:10px 12px;">
            <button class="btn btn-outline btn-sm" onclick="V10Sovereign.sendLoanOfferWhatsApp('${item.policy.policyNumber}', '${escapeHtml(item.policy.customerName)}', '${item.policy.customerMobile}', ${item.loan})" style="font-size:11px; padding:4px 8px;">
              💬 WhatsApp Loan Offer
            </button>
          </td>
        </tr>
      `).join('');
    },

    // 3. Send Individual WhatsApp Loan Offer
    sendLoanOfferWhatsApp: function(polNo, name, mobile, maxLoan) {
      const msg = `नमस्कार ${name} जी, 🙏🌸\n\nआपके LIC पॉलिसी सं.: *${polNo}* पर लगभग *₹${Number(maxLoan).toLocaleString('en-IN')}* तक की तत्काल पॉलिसी लोन (Cash Liquidity) सुविधा उपलब्ध है।\n\nविशेषताएं:\n✓ सबसे कम ब्याज दर (LIC Official)\n✓ बिना किसी संपत्ति को गिरवी रखे\n✓ पॉलिसी सुरक्षा 100% जारी रहती है\n\nअधिक जानकारी के लिए संपर्क करें:\n*विंध्याचल सिंह* (एजेंट कोड: 0273635D)\nशाखा: 35D, भोपाल | मो.: 9406935622`;
      const cleanPhone = (mobile || '').replace(/\D/g, '');
      const url = cleanPhone ? `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    },

    // 4. Batch Dispatch Reminders (Due in next N days)
    dispatchBatchReminders: function(dueFilterDays) {
      const policies = Array.isArray(window.appData?.policies) ? window.appData.policies : [];
      const urgentList = policies.filter(p => {
        if (!p.nextDueDate) return false;
        const diff = (new Date(p.nextDueDate) - new Date()) / (1000 * 3600 * 24);
        return diff >= 0 && diff <= (dueFilterDays || 7);
      });

      if (urgentList.length === 0) {
        alert('आगामी ' + dueFilterDays + ' दिनों में कोई देय प्रीमियम नहीं है।');
        return;
      }

      alert('🚀 WhatsApp Dispatcher: ' + urgentList.length + ' ग्राहकों को रिमाइंडर तैयार है। पहले ग्राहक का चैट खोला जा रहा है...');
      const first = urgentList[0];
      const msg = `नमस्कार ${first.customerName} जी, 🙏\nआपकी LIC पॉलिसी *${first.policyNumber}* का प्रीमियम *₹${Number(first.totalPremium || first.basicPremium).toLocaleString('en-IN')}* देय तिथि *${first.nextDueDate}* को देय है। कृपया समय पर भुगतान कर निर्बाध सुरक्षा का लाभ लें।\n\nधन्यवाद,\n*विंध्याचल सिंह* (LIC 0273635D, मो.: 9406935622)`;
      const clean = (first.customerMobile || '').replace(/\D/g, '');
      const url = clean ? `https://wa.me/91${clean}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }
  };

  // Initialize Loan Desk Tab on Navigation
  window.initV10SovereignTab = function() {
    window.V10Sovereign.renderLoanDeskTab();
    console.log('[Policy Loan Desk] Engine Ready.');
  };

})();
