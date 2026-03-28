# SaunaMind — Project Memory

## What This Is
Astro static marketing site for **SaunaMind** — a science-backed iOS sauna tracking app.
Migrated from Squarespace. Deployed as a static site.

- Domain: `sauna-mind.com`
- Tagline: **Know your zones.**
- App Store ID: `id6739606516`
- TestFlight: `testflight.apple.com/join/rhU426fF`
- Instagram: `@thesaunamind`
- Formspree endpoint: `https://formspree.io/f/xeerzzoa`

---

## File Map

```
src/
  layouts/Layout.astro   ← global HTML shell, all shared CSS, nav/footer
  pages/index.astro      ← homepage (hero, stats, zones, science, waitlist, slider)
  pages/privacy.astro    ← privacy policy
  pages/support.astro    ← FAQ + contact
public/                  ← static assets
astro.config.mjs
copilot-instructions.md  ← authoritative design system spec (read this first)
AGENTS.md                ← agent behaviour rules
```

---

## Design System (NON-NEGOTIABLE)

### Theme: Dark

```css
--bg:          #080808;
--surface:     #0e0e0e;
--surface-2:   #111111;
--border:      #1a1a1a;
--border-2:    #1e1e1e;
--text:        #eeeeee;
--muted:       #555555;
--dim:         #444444;
--dead:        #333333;
--ghost:       #2a2a2a;
--orange:      #E8956A;
--orange-2:    #B46438;
--orange-glow: rgba(180,100,56,0.3);

/* Zone colours — never change */
--zone-1: #8E9AAF;   /* Warm-Up */
--zone-2: #4CAF50;   /* Heat Adaptation */
--zone-3: #FF9800;   /* HSP Activation */
--zone-4: #E8956A;   /* Deep Hormesis */
--zone-5: #F44336;   /* Caution */
```

### Fonts

```css
font-family: 'Outfit', sans-serif;          /* body, headings, nav */
font-family: 'JetBrains Mono', monospace;   /* stats, temps, formulas, citations */
```

Google Fonts import (in Layout.astro `<style is:global>`):
```
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap");
```

### Class Prefix
All classes use `.sm-` prefix — no exceptions.

---

## Architecture Rules

- **Layout.astro owns ALL CSS** — the complete `<style is:global>` block with every `.sm-*` class, fonts, reset, nav, footer, and responsive rules. Hard-coded colours (no CSS variables) matching the original design.
- **index.astro has NO `<style>` block** — all styles come from Layout.astro. Do NOT add a page-level `<style>` to index.astro or it will conflict with Layout and break the design.
- privacy.astro / support.astro may have a small `.doc-container` style block for page-specific layout only.
- Use `import.meta.env.BASE_URL` for all internal links
- Mobile breakpoint: `max-width: 768px`

### Logo (all pages)
- **Nav logo**: `<img src="/logo.png" alt="SaunaMind" width="40" height="40">` + `<span class="sm-logo-text">SaunaMind</span>`
- **Hero logo**: `<div class="sm-hero-logo-wrap">` containing 160×160 img + `.sm-hero-logo-text` + `.sm-hero-logo-sub`
- **Footer logo**: `<img src="/logo.png" width="28" height="28" style="opacity:0.4">`
- `public/logo.png` — the 5-zone temperature dial (black background, works on dark nav)
- **Never embed base64 images in page markup**

---

## The Science

### Core Formula (Jay & Kenny, 2010)
```
eCBT = 37.0 + (HR - restingHR) × 0.0162
```

### Five Zones (exact — never change)
| Zone | eCBT Range | CSS var |
|---|---|---|
| Warm-Up | 37.0–37.5°C | `--zone-1` `#8E9AAF` |
| Heat Adaptation | 37.5–38.0°C | `--zone-2` `#4CAF50` |
| HSP Activation | 38.0–38.5°C | `--zone-3` `#FF9800` |
| Deep Hormesis | 38.5–39.0°C | `--zone-4` `#E8956A` |
| Caution | 39.0°C+ | `--zone-5` `#F44336` |

Physiological ceiling: **39.5°C**

---

## JS Rules

### Existing functions — never redeclare
- `smSubmit(inputId, successId, formId)` — posts to Formspree, hides form on success
- `smFacts[]` + `setInterval` — rotating hero stat callout
- Temperature slider IIFE — auto-animating zone explorer

### Adding interactivity
- Wrap in IIFE `(function() { ... })()`
- Guard all DOM queries: `if(!el) return;`
- Animations: `requestAnimationFrame`, not `setInterval`
- Fade: add/remove `.sm-fade-out` (opacity 0.6s ease)
- No `console.log` in production

---

## Key Patterns

### Email form
```html
<div class="sm-hero-form" id="someForm">
  <input type="email" class="sm-email-input" id="someEmail" placeholder="your@email.com">
  <button class="sm-submit-btn" onclick="smSubmit('someEmail','someSuccess','someForm')">CTA</button>
</div>
<div class="sm-success" id="someSuccess">&#x2713; You're on the list.</div>
<div class="sm-form-note">No spam. Just a notification when we're ready.</div>
```

### Section wrapper
```html
<section style="background:#080808; padding:40px 0 0 0;">
  <div class="sm-section">
    <div class="sm-eyebrow">Label</div>
    <h2 class="sm-h2">Heading <span>word.</span></h2>
    <p class="sm-section-sub">...</p>
  </div>
</section>
```

### Zone dot + name
```html
<div class="sm-zone-cell">
  <div class="sm-zone-dot" style="background:#FF9800"></div>
  <span class="sm-zone-name" style="color:#FF9800">HSP Activation</span>
</div>
```

### Zone pill
```html
<span class="sm-zone-pill" style="background:#1a1000;color:#FF9800">Recovery</span>
```

---

## Deployment

- **Netlify site**: `saunamind.netlify.app` (project ID: `bf4bd615-a2e7-4bf6-b19c-5402e6c88818`, team: Biohackmaps)
- **Deploy command**: `cd C:\sauna-astro && netlify deploy --prod`
- **Custom domain**: `sauna-mind.com` — **FULLY LIVE ✅**
  - DNS managed via **Squarespace** (Google nameservers: `ns-cloud-c1-4.googledomains.com`)
  - Squarespace DNS records: `@ A 75.2.60.5`, `www CNAME saunamind.netlify.app`
  - SSL: Let's Encrypt cert covers `sauna-mind.com` + `www.sauna-mind.com` (expires Jun 2026)
  - Netlify DNS zone was created then **deleted** — domain uses external DNS only
  - `www.sauna-mind.com` registered as Netlify domain alias

---

## What NOT to Do
- **Never add a `<style>` block to index.astro** — it will override Layout.astro and break the design
- Never use a light/warm theme (the design is dark — `#080808` bg)
- Never use fonts other than Outfit + JetBrains Mono
- Never use colours outside the design system
- Never embed base64 images in page markup
- Never add React, Vue, or any JS framework
- Never redeclare `smSubmit()`
- Never change zone temperatures or colours
- Never make medical claims — describe research findings only

---

## Validation Checklist
1. `npm run build` — must pass with 0 errors
2. Routes that must build: `/`, `/privacy/`, `/support/`
3. Check that dark backgrounds render correctly (not warm/cream)
4. Check that Outfit font loads (not system fallback)
