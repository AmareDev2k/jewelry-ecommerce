# Aurelia — Jewelry E-Commerce (React)

A starter e-commerce website for a jewelry shop, built with React + Vite + React Router.
Includes a cart (React Context), product listing/filtering, product detail pages,
a checkout form, and static About/Contact pages.

## Folder Structure

```
jewelry-ecommerce/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # App entry point, wraps App in Router + CartProvider
│   ├── App.jsx                # Route definitions
│   ├── index.css              # Global styles
│   ├── assets/                 # Images/icons you add later
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── Loader.jsx
│   ├── context/
│   │   └── CartContext.jsx    # Cart state: add/remove/update quantity, totals
│   ├── data/
│   │   └── products.js        # Sample jewelry product data (swap for a real API)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx           # Category filtering via URL query param
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── services/
│       └── api.js             # Data-fetching layer — point this at a real backend later
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
To connect this to a real backend (e.g. Django REST Framework, which pairs well
if you're already using Django), just rewrite the functions in `src/services/api.js`
to call `fetch('/api/products/')` etc. — no component code needs to change.

## Notes

- Product images use placeholder URLs (placehold.co) — swap them for real photos
  in `src/data/products.js` or `src/assets/`.
- Checkout and Contact forms are wired to local state only (no real payment or
  email sending yet) — hook them up to your payment provider / backend when ready.
