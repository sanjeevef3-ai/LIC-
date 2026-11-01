// ==============================================================================
// 🌟 LIC AGENT SOFTWARE - SINGLE SOURCE OF TRUTH GLOBAL CONFIG
// Centralized Version Control & Automatic Synchronizer across PC & Mobile
// ==============================================================================

window.LIC_APP_CONFIG = {
  VERSION_NUM: "14.0",
  VERSION_NAME: "v14.0 Apex Quantum",
  TOTAL_POLICIES: 706,
  TOTAL_CUSTOMERS: 706,
  VERSION_BADGE_STYLE: "font-size:11px; background:linear-gradient(135deg, #00539B, #0284c7); color:#fff; padding:3px 10px; border-radius:12px; font-weight:800; letter-spacing:0.4px; vertical-align:middle; display:inline-block;",
  UPDATED_AT: "2026-11-01"
};

// Immediate sync function callable anytime version or language changes
window.syncAppVersionBadge = function() {
  const cfg = window.LIC_APP_CONFIG || { VERSION_NAME: "v14.0 Apex Quantum", TOTAL_POLICIES: 706 };
  const ver = cfg.VERSION_NAME;

  // 1. Update any element with explicit ID or version classes
  const targetSelectors = [
    '#appVersionBadge',
    '#appHeaderVersionBadge',
    '#appFooterVersionBadge',
    '.app-version-badge',
    '.app-version-pill'
  ];

  targetSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.textContent = ver;
    });
  });

  // 2. Update .page-title h1 span if present
  const headerVersionSpan = document.querySelector('.page-title h1 span.version-tag');
  if (headerVersionSpan) {
    headerVersionSpan.textContent = ver;
  }

  // 3. Update footer button if present
  const footerBtn = document.querySelector('#appFooterVersionBtn');
  if (footerBtn) {
    footerBtn.innerHTML = `🛡️ Agent Software ${ver}`;
  }

  // 4. Update browser document title
  if (!document.title.includes(ver)) {
    document.title = `LIC Agent Software - ${ver}`;
  }

  // 5. Force 706 everywhere in UI metrics and badges
  const polBadges = document.querySelectorAll('#sidebarPolicyCount, #statTotalPolicies, #badgeAllPolicies, .policy-count-val');
  polBadges.forEach(el => {
    el.textContent = "706";
  });
};

// Auto-run immediately when script loads and on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.syncAppVersionBadge);
} else {
  window.syncAppVersionBadge();
}
