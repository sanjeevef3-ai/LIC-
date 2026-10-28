// ==============================================================================
// 🌟 LIC AGENT SOFTWARE - SINGLE SOURCE OF TRUTH GLOBAL CONFIG
// Centralized Version Control & Automatic Synchronizer across PC & Mobile
// ==============================================================================

window.LIC_APP_CONFIG = {
  VERSION_NUM: "13.0",
  VERSION_NAME: "v13.0 Omni-AI Sentinel",
  VERSION_BADGE_STYLE: "font-size:11px; background:linear-gradient(135deg, #059669, #0284c7); color:#fff; padding:3px 10px; border-radius:12px; font-weight:800; letter-spacing:0.4px; vertical-align:middle; display:inline-block;",
  UPDATED_AT: "2026-10-27"
};

// Immediate sync function callable anytime version or language changes
window.syncAppVersionBadge = function() {
  const cfg = window.LIC_APP_CONFIG || { VERSION_NAME: "v13.0 Omni-AI Sentinel" };
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
};

// Auto-run immediately when script loads and on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.syncAppVersionBadge);
} else {
  window.syncAppVersionBadge();
}
