# Aurelia — High-End Fine Jewelry E-Commerce (React)

An ultra-premium, agency-tier e-commerce experience for a luxury jewelry shop, built with React + Vite + React Router. It features a custom WebGL animated background, fluid haptic motion, and an editorial split layout.

## Design System & UX Features

- **Editorial Luxury Aesthetic**: Custom vanilla CSS implementation avoiding generic AI frameworks. Deep espresso text (`#1a1715`) on off-white creams (`#fdfbf7`) with a subtle fractal noise texture overlay.
- **WebGL Aurora Background**: Uses `ogl` to render a slow, fluid, cinematic gradient mesh behind the site, ported from React Bits.
- **Double-Bezel Architecture**: All product cards and summary containers are nested with an outer shell and an inner core, simulating machined glass on aluminum hardware.
- **Fluid Motion Choreography**: Strictly engineered `cubic-bezier(0.32, 0.72, 0, 1)` transitions replacing default linear fades. Elements simulate physical mass on hover and click.
- **Layout Archetypes**: 
  - *Editorial Split*: Homepage hero uses massive typography paired with framed, asymmetric imagery.
  - *Asymmetrical Bento*: Category grid breaks perfect symmetry for a more organic, gallery-like feel.
- **Premium Typography**: High-contrast pairing of *Playfair Display* (Serif) and *Plus Jakarta Sans* (Geometric Sans) loaded via Google Fonts.
- **Editorial Imagery**: Placeholder images have been swapped with 85mm-style macro photography from Unsplash to complete the luxury vibe.

## Folder Structure

```
jewelry-ecommerce/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # App entry point, wraps App in Router + CartProvider
│   ├── App.jsx               # Route definitions & global WebGL Aurora background
│   ├── index.css             # High-End Visual Design CSS engine
│   ├── assets/               # Local assets
│   ├── components/
│   │   ├── Aurora.jsx        # React Bits WebGL background component
│   │   ├── Aurora.css
│   │   ├── Navbar.jsx        # Floating Fluid Island Navigation
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx   # Double-Bezel nested cards
│   │   └── Loader.jsx
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state manager
│   ├── data/
│   │   └── products.js       # Unsplash-powered high-end mock data
│   ├── pages/
│   │   ├── Home.jsx          # Editorial Split hero & curated sections
│   │   ├── Shop.jsx          # Category filtering
│   │   ├── ProductDetail.jsx # Immersive PDP
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── services/
│       └── api.js            # Future API integration layer
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Connecting a real backend

All data currently comes from `src/data/products.js` via `src/services/api.js`.
To connect this to a real backend (e.g. Django REST Framework), just rewrite the functions in `src/services/api.js` to call `fetch('/api/products/')` etc. — no component code needs to change.

## Notes

- **Dependencies**: The `ogl` package is required for the Aurora background animation.
- Checkout and Contact forms are wired to local state only (no real payment or email sending yet) — hook them up to your payment provider / backend when ready.
