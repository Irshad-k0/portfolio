# Irshad Ahmad — Social Media Manager Portfolio

> A production-ready, fully responsive portfolio website for Irshad Ahmad, Social Media Manager (2023–2025).

---

## 🚀 Live Deployment

Deploy instantly to Vercel:

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Drag & drop the project folder at vercel.com/new
```

---

## 📁 Project Structure

```
irshad-ahmad-portfolio/
├── index.html          # Main single-page portfolio
├── css/
│   └── style.css       # Complete design system + responsive styles
├── js/
│   └── main.js         # Interactivity, charts, counters, animations
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

---

## ✅ Implemented Features

### Sections
| Section | Description |
|---------|-------------|
| **Hero** | Animated headline, live stat counters, gradient blobs, scroll indicator |
| **About** | Animated avatar orbital ring, bio, skill tags |
| **Services** | 6 service cards with icon + index number |
| **Projects** | 6 filterable case studies (Video / Graphic / Strategy) |
| **Analytics** | 6 KPI cards + 5 interactive Chart.js visualisations |
| **Skills** | Animated skill bars + tools badge grid |
| **Experience** | Alternating timeline (Work + Education + Certification) |
| **Insights** | 3 blog-style thought-leadership cards |
| **Contact** | Contact links + validated contact form (simulated send) |
| **Footer** | Navigation links + social icons |

### Technical Features
- ✅ Mobile-first responsive design (breakpoints: 1024px, 768px, 480px)
- ✅ Scroll-spy active navigation highlighting
- ✅ Intersection Observer scroll reveal animations
- ✅ Animated number counters (hero stats + KPI cards)
- ✅ Project category filtering (All / Video / Graphic / Strategy)
- ✅ Animated skill progress bars
- ✅ 5 Chart.js charts (Bar, Line/Area, Doughnut ×2, Multi-axis Line)
- ✅ Contact form with client-side validation
- ✅ Mobile hamburger navigation
- ✅ Security headers via vercel.json
- ✅ Asset caching headers for CSS/JS

---

## 📊 Analytics Charts Included

1. **Monthly Engagement Rate** — Bar chart (12-month illustrative trend)
2. **Organic Reach Growth** — Area line chart (cumulative, in thousands)
3. **Content Mix by Format** — Doughnut (Video, Carousels, Graphics, Stories, Long-form)
4. **Platform Distribution** — Doughnut (Instagram, TikTok, LinkedIn, Facebook, YouTube)
5. **Paid Campaign ROAS** — Multi-axis line (ROAS × vs Ad Spend $)

> ⚠️ **Portfolio Note**: All analytics figures are illustrative performance benchmarks for portfolio presentation purposes. They are clearly labelled as demo/showcase data throughout the site.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary accent | `#6c47ff` (violet) |
| Secondary accent | `#c044e0` (magenta) |
| Gradient | `135deg, #6c47ff → #c044e0` |
| Background | `#f8f7f4` (warm off-white) |
| Surface | `#ffffff` |
| Dark surface | `#13111c` |
| Typography | Inter (sans) + Playfair Display (serif) |

---

## 🔧 Customisation Guide

### Update Personal Details
1. **Email**: Search `irshad.ahmad@email.com` in `index.html` → replace
2. **LinkedIn**: Search `linkedin.com/in/irshadahmad` → replace
3. **Instagram**: Search `@irshad.creates` → replace
4. **Location**: Update "Pakistan" references in About and Footer

### Update Analytics Figures
- Hero stats: `data-target` attributes on `.stat-num` elements in `index.html`
- KPI cards: `data-target` attributes on `.kpi-num.counter` elements
- Chart data: Edit the arrays inside `buildAllCharts()` functions in `js/main.js`

### Add Real Project Images
Replace the CSS mockup thumbnails in `.project-thumb` divs with:
```html
<img src="images/project-name.jpg" alt="Project description" loading="lazy" />
```

---

## 📦 Dependencies (CDN — no npm needed)

| Library | Version | Purpose |
|---------|---------|---------|
| Google Fonts | — | Inter + Playfair Display |
| Font Awesome | 6.4.0 | Icons |
| Chart.js | Latest | Data visualisations |

---

## 🌐 Vercel Deployment Steps

1. **Via CLI**:
   ```bash
   npm install -g vercel
   cd irshad-ahmad-portfolio
   vercel --prod
   ```

2. **Via Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New → Project"
   - Import your GitHub repo or drag & drop the folder
   - Framework Preset: **Other** (Static Site)
   - Deploy → get your live URL

3. **Via GitHub**:
   - Push to GitHub repo
   - Connect repo in Vercel dashboard
   - Auto-deploys on every push to `main`

---

## ⚙️ Recommended Next Steps

- [ ] Replace simulated contact form with Formspree / EmailJS / Netlify Forms
- [ ] Add real project screenshots or video embeds
- [ ] Connect a custom domain (e.g. irshadahmad.com)
- [ ] Add Google Analytics / Plausible for visitor tracking
- [ ] Expand Insights section into a full blog with separate pages
- [ ] Add a PDF CV download button (host CV file in `/assets/`)
- [ ] Implement Open Graph image for social sharing preview

---

## 👤 Subject

**Irshad Ahmad** — Social Media Manager  
Experience: 2023–2025 (2+ years)  
Specialisations: Short-form video, graphic design, content strategy, paid social, analytics

---

*Built for Vercel deployment · Static HTML/CSS/JS · No build tools required*
