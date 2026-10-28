# Modular Component Builder & Updater for LIC Agent Software

This directory contains individual component files for each key screen area. You can edit any individual component directly without touching or searching through the main `index.html`:

## Component Files
1. **[side_panel.html](file:///d:/LIC/components/side_panel.html)**:
   - Admin Login (Photo, Mobile, Agency Code, Branch)
   - Home / Dashboard button
   - All Policies dropdown (Due Tracker, Clients, SB/Maturity)
   - LIC All Plans Calculator
   - LIC Portal Direct Login
   - Themes Toggle
   - Data Import/Export (Excel, CSV, PDF)
   - Backend Control Room Link
   - Agent Profile & Backup

2. **[top_header.html](file:///d:/LIC/components/top_header.html)**:
   - Title: Life Insurance Corporation of India
   - Quick Search (Ctrl+K)
   - Customer Birthdays & Anniversaries widget with live WhatsApp greeting
   - Mobile APK direct download button
   - WhatsApp quick composer button

3. **[top_dashboard.html](file:///d:/LIC/components/top_dashboard.html)**:
   - 5 KPI buttons/cards: Total Policy (720), Insured Policyholders (506), Total SA (₹12.37 Cr), Premium Deposit (Year dropdown), Agent Commission (Year/Month dropdown).
   - Dynamic Chart with Year / Month-wise real-time sync.

4. **[middle_section.html](file:///d:/LIC/components/middle_section.html)**:
   - Due 07 Days (Separate Card/Button, Live Amount & Chart)
   - Due 30 Days (Separate Card/Button, Live Amount & Chart)
   - Lapsed Policies (Separate Card/Button, Revival Amount & Chart)
   - Agent Club & MDRT Tracker Chart (MDRT/COT/TOT/Club Member)
   - Agent Income & Premium Collection Chart (Quarterly / Annual)

5. **[footer.html](file:///d:/LIC/components/footer.html)**:
   - Left to right side-by-side: Agent Software v5.0 Ultimate Apex, © 2026 Webflow, Inc. All rights reserved, Developer ZENVO ENTERPRISES, Mobile no. 9111911275.

## Rebuilding index.html
Whenever you edit any of the files in `components\`, run:
```powershell
powershell -ExecutionPolicy Bypass -File d:\LIC\build_software.ps1
```
