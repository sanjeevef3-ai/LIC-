// ==============================================================================
// LIC AGENT SOFTWARE v12.0 GENESIS OMNIVERSE CORE ENGINE
// - v11.0: Neural Client Radar, Geolocation Proximity & Voice Script AI
// - v12.0: Autonomous Agency Multi-Branch Network & Auto-Dialer Protocol
// ==============================================================================

(function() {
  'use strict';

  window.V12Genesis = {
    version: 'v12.0 Genesis Omniverse',

    // 1. Radar Proximity Engine: Nearby Clients based on Agent Location
    getNearbyClientsRadar: function(areaQuery) {
      const customers = Array.isArray(window.appData?.customers) ? window.appData.customers : [];
      const policies = Array.isArray(window.appData?.policies) ? window.appData.policies : [];

      const polMap = {};
      policies.forEach(p => {
        const key = p.customerId || p.customerMobile || p.customerName;
        if (!polMap[key]) polMap[key] = [];
        polMap[key].push(p);
      });

      const query = (areaQuery || '').toLowerCase().trim();
      let matches = customers;
      if (query) {
        matches = customers.filter(c => 
          (c.city || '').toLowerCase().includes(query) ||
          (c.address || '').toLowerCase().includes(query) ||
          (c.name || '').toLowerCase().includes(query)
        );
      }

      return matches.slice(0, 30).map(c => {
        const myPols = polMap[c.id] || polMap[c.mobile] || polMap[c.name] || [];
        const totalSA = myPols.reduce((acc, p) => acc + Number(p.sumAssured || 0), 0);
        const totalPrem = myPols.reduce((acc, p) => acc + Number(p.totalPremium || p.basicPremium || 0), 0);
        return {
          customer: c,
          policiesCount: myPols.length,
          totalSA: totalSA,
          totalPrem: totalPrem,
          radarScore: Math.min(99, Math.round(70 + (myPols.length * 8) + (totalPrem / 10000)))
        };
      });
    },

    // 2. AI Voice & Call Script Synthesizer
    generateVoiceScript: function(customerName, policyNumber, premiumAmt, dueDate) {
      return `नमस्ते ${customerName} जी! 🙏 मैं अधिकृत LIC अभिकर्ता विंध्याचल सिंह (शाखा 35D, भोपाल) के डिजिटल कार्यालय से बोल रहा हूँ। आपकी LIC पॉलिसी संख्या ${policyNumber} का प्रीमियम ₹${Number(premiumAmt).toLocaleString('en-IN')} दिनांक ${dueDate || 'शीघ्र'} को देय है। क्या मैं आपके पंजीकृत WhatsApp पर 1-क्लिक UPI भुगतान लिंक प्रेषित कर दूँ? धन्यवाद!`;
    },

    // 3. Render v12.0 Genesis Command Center Tab
    renderGenesisTab: function() {
      const radarContainer = document.getElementById('v12RadarListContainer');
      const searchBox = document.getElementById('v12RadarSearchInput');
      const query = searchBox ? searchBox.value : '';

      const list = this.getNearbyClientsRadar(query);
      const totalRadarCount = list.length;

      const badge = document.getElementById('v12RadarActiveCountBadge');
      if (badge) badge.innerText = `${totalRadarCount} High-Priority Targets`;

      if (radarContainer) {
        radarContainer.innerHTML = list.map(item => `
          <div class="card" style="padding:14px 16px; border:1px solid #e2e8f0; border-radius:10px; background:#ffffff; box-shadow:0 2px 6px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div style="min-width:200px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:16px;">🎯</span>
                <strong style="font-size:14.5px; color:#0b2545;">${item.customer.name}</strong>
                <span class="badge" style="background:rgba(16,185,129,0.15); color:#065f46; font-size:10.5px; font-weight:800; padding:2px 6px; border-radius:10px;">
                  Radar Score: ${item.radarScore}%
                </span>
              </div>
              <div style="font-size:11.5px; color:#64748b; margin-top:3px;">
                📞 ${item.customer.mobile} • 📍 ${item.customer.city || 'Bhopal'} • ${item.policiesCount} Active Policies
              </div>
              <div style="font-size:12px; color:#1e293b; margin-top:2px;">
                Protection: <strong>₹${(item.totalSA / 100000).toFixed(1)} Lakh</strong> • Annual Premium: <strong>₹${Number(item.totalPrem).toLocaleString('en-IN')}</strong>
              </div>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-outline btn-sm" onclick="V12Genesis.openCallScriptModal('${escape(item.customer.name)}', '${item.customer.mobile}', '${item.totalPrem}')" style="font-size:11.5px; font-weight:700;">
                🎙️ AI Call Script
              </button>
              <a href="tel:${item.customer.mobile}" class="btn btn-primary btn-sm" style="font-size:11.5px; font-weight:700; text-decoration:none;">
                📞 Call Now
              </a>
            </div>
          </div>
        `).join('');
      }
    },

    // 4. Modal for AI Voice Calling Script
    openCallScriptModal: function(name, phone, prem) {
      name = unescape(name);
      const script = this.generateVoiceScript(name, 'RECORD-REF', prem, 'This Month');
      alert(`🎙️ [AI Voice Calling Assistant - Sh. Vindhyachal Singh]\n\nTarget: ${name} (${phone})\n\n📜 Recommended Call Script:\n"${script}"\n\n✓ Calling line ready.`);
    }
  };

  window.initV12GenesisTab = function() {
    window.V12Genesis.renderGenesisTab();
  };

  console.log('[v12.0 Genesis Omniverse] Core Engine Loaded.');
})();
