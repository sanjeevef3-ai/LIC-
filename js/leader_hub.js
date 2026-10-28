// LIC Leader App 16-Grid & Hub Modals Logic
function openSupportModal() {
  const modal = document.getElementById('modalLeaderSupport');
  if (modal) modal.style.display = 'flex';
}

function openReminderModal() {
  const modal = document.getElementById('modalLeaderReminder');
  if (modal) {
    populateLeaderReminders();
    modal.style.display = 'flex';
  }
}

function openNotificationModal() {
  const modal = document.getElementById('modalLeaderNotifications');
  if (modal) {
    populateLeaderNotifications();
    modal.style.display = 'flex';
  }
}

function openNachModal() {
  const modal = document.getElementById('modalNachStatus');
  if (modal) {
    populateNachStatusTable();
    modal.style.display = 'flex';
  }
}

function openServicingModal() {
  const modal = document.getElementById('modalServicingPolicy');
  if (modal) modal.style.display = 'flex';
}

function openOtherPolicyStatusModal() {
  const modal = document.getElementById('modalOtherPolicyStatus');
  if (modal) modal.style.display = 'flex';
}

function openTrainingVideosModal() {
  const modal = document.getElementById('modalTrainingVideos');
  if (modal) modal.style.display = 'flex';
}

function populateLeaderReminders() {
  const container = document.getElementById('leaderRemindersList');
  if (!container) return;
  const policies = (window.licDatabase && window.licDatabase.policies) ? window.licDatabase.policies : [];
  
  // Find due policies & upcoming FUPs
  const dues = policies.filter(p => p.status === 'Grace Period' || p.status === 'Overdue' || p.status === 'Lapsed').slice(0, 15);
  
  if (dues.length === 0) {
    container.innerHTML = '<div style="text-align:center; padding:20px; color:#64748b;">No urgent reminders for today. All accounts are updated!</div>';
    return;
  }
  
  container.innerHTML = dues.map(p => `
    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #f59e0b; border-radius:8px; padding:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div>
        <div style="font-weight:800; color:#0f172a; font-size:14px;">${p.name || 'Policyholder'}</div>
        <div style="font-size:12px; color:#64748b;">Policy No: <strong>${p.policyNumber}</strong> | Plan: ${p.planNo || p.planName || 'LIC'}</div>
        <div style="font-size:12px; color:#d97706; font-weight:700;">FUP: ${p.fup || p.dueDate || 'N/A'} • Premium: ₹${(p.totalPremium || p.premium || 0).toLocaleString('en-IN')}</div>
      </div>
      <div style="display:flex; gap:8px;">
        <a href="https://wa.me/91${(p.mobile || '9406935622').replace(/\D/g,'')}?text=${encodeURIComponent('नमस्ते ' + p.name + ' जी, आपकी LIC पॉलिसी नं ' + p.policyNumber + ' का प्रीमियम देय है। कृपया समय पर भुगतान करें। - विंध्याचल सिंह, LIC अभिकर्ता')}" target="_blank" class="btn btn-sm btn-gold" style="padding:4px 10px; font-size:12px; text-decoration:none;">📲 WhatsApp</a>
        <button class="btn btn-sm" onclick="showPolicyDetails('${p.policyNumber}')" style="padding:4px 10px; font-size:12px; background:#00539b; color:#fff;">विवरण</button>
      </div>
    </div>
  `).join('');
}

function populateLeaderNotifications() {
  const container = document.getElementById('leaderNotificationsList');
  if (!container) return;
  const policies = (window.licDatabase && window.licDatabase.policies) ? window.licDatabase.policies : [];
  
  const alerts = [
    { type: 'sync', title: 'डेटाबेस सिंक्रोनाइज़ेशन पूर्ण', time: 'अभी-अभी', desc: `कुल ${policies.length} आधिकारिक पॉलिसियां (शाखा 35D) पूरी तरह सुरक्षित व सक्रिय हैं।`, icon: '✅', color: '#10b981' },
    { type: 'fup', title: 'प्रीमियम ड्यू अलर्ट (FY 2026-27)', time: 'दैनिक अलर्ट', desc: 'सक्रिय पॉलिसियों में मासिक/तिमाही प्रीमियम देय सूची अपडेट कर दी गई है।', icon: '⏰', color: '#f59e0b' },
    { type: 'revival', title: 'LIC विशेष रिवाइवल छूट अभियान', time: 'सक्रिय स्कीम', desc: 'व्यपगत (Lapsed) पॉलिसियों पर लेट फीस में 30% तक छूट का लाभ ग्राहकों को दिलाएं।', icon: '🔄', color: '#6366f1' },
    { type: 'nach', title: 'NACH / ऑटो-डेबिट अलर्ट', time: 'बैंक क्लीयरेंस', desc: 'मासिक ECS/NACH बैंक मैंडेट धारकों के खाते में पर्याप्त बैलेंस रखने हेतु सूचित करें।', icon: '🏦', color: '#0ea5e9' }
  ];
  
  container.innerHTML = alerts.map(a => `
    <div style="background:#ffffff; border:1px solid #e2e8f0; border-left:4px solid ${a.color}; border-radius:8px; padding:12px; margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:800; font-size:13px; color:#0f172a;">${a.icon} ${a.title}</span>
        <span style="font-size:10.5px; color:#94a3b8; font-weight:700;">${a.time}</span>
      </div>
      <p style="margin:4px 0 0 0; font-size:12px; color:#475569;">${a.desc}</p>
    </div>
  `).join('');
}

function populateNachStatusTable() {
  const tbody = document.getElementById('nachStatusTableBody');
  if (!tbody) return;
  const policies = (window.licDatabase && window.licDatabase.policies) ? window.licDatabase.policies : [];
  
  // Policies with NACH / Bank ECS or Mly mode
  const nachPolicies = policies.filter(p => p.mode === 'NACH' || p.mode === 'Mly' || p.bankNach === true || (p.mode && p.mode.toUpperCase().includes('NACH'))).slice(0, 30);
  const displayList = nachPolicies.length > 0 ? nachPolicies : policies.slice(0, 20);
  
  tbody.innerHTML = displayList.map((p, idx) => `
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:10px; font-weight:700;">${idx+1}</td>
      <td style="padding:10px; font-weight:800; color:#00539b;">${p.policyNumber}</td>
      <td style="padding:10px; font-weight:700;">${p.name}</td>
      <td style="padding:10px;">${p.planNo || p.planName || 'LIC'}</td>
      <td style="padding:10px;"><span class="badge" style="background:#e0f2fe; color:#0369a1; font-weight:800;">${p.mode || 'Mly/NACH'}</span></td>
      <td style="padding:10px; font-weight:800; color:#059669;">₹${(p.totalPremium || p.premium || 0).toLocaleString('en-IN')}</td>
      <td style="padding:10px;"><span class="badge" style="background:#dcfce7; color:#15803d; font-weight:800;">✓ Active NACH</span></td>
      <td style="padding:10px;">
        <button class="btn btn-sm btn-gold" onclick="showPolicyDetails('${p.policyNumber}')" style="padding:3px 8px; font-size:11px;">विवरण</button>
      </td>
    </tr>
  `).join('');
}

window.openSupportModal = openSupportModal;
window.openReminderModal = openReminderModal;
window.openNotificationModal = openNotificationModal;
window.openNachModal = openNachModal;
window.openServicingModal = openServicingModal;
window.openOtherPolicyStatusModal = openOtherPolicyStatusModal;
window.openTrainingVideosModal = openTrainingVideosModal;
