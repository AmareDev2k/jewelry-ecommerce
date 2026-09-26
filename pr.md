# UI Overhaul: Agency-Tier Luxury Aesthetic

## Description
This pull request completely overhauls the UI design of the Aurelia jewelry e-commerce application, implementing a $150k+ agency-level visual language. The changes upgrade the project from a standard starter template to a breathtaking, premium digital experience.

## Key Changes
- **Editorial Typography**: Integrated `Playfair Display` (Serif) and `Plus Jakarta Sans` (Sans) via Google Fonts, setting a massive, high-contrast type scale.
- **Custom WebGL Background**: Imported and wired up the `Aurora` fluid animation component from React Bits using `ogl`. Added a fractal noise CSS overlay over the entire app for a high-end tactile texture.
- **Double-Bezel Architecture**: Engineered a nested CSS component pattern for all product cards and summary blocks to simulate a physical, glass-on-aluminum look.
- **Layout Upgrades**:
  - Rewrote the Homepage hero to use the "Editorial Split" layout archetype with an asymmetric text/media split and "Eyebrow tag" badges.
  - Implemented an "Asymmetrical Bento" grid for the shop categories section.
  - Upgraded the Navbar to a sticky "Fluid Island" glassmorphic pill.
- **Haptic Motion Choreography**: Stripped all default linear animations and implemented heavy, physical-feeling `cubic-bezier(0.32, 0.72, 0, 1)` transitions, including staggered fade-ups and magnetic-style button hover scales.
- **Editorial Imagery**: Replaced all `placehold.co` mock images in `products.js` with professional, 85mm-style macro photography pulled from Unsplash.
- **Copywriting Clean-up**: Polished marketing text on the landing page to use direct, high-end vocabulary.
- **Documentation**: Completely rewrote `README.md` to document the new design engine and dependencies.

## Testing Instructions
1. Run `npm install` to install the newly added `ogl` dependency.
2. Run `npm run dev`.
3. Verify that the fluid background gradient plays smoothly.
4. Verify that the hero section splits cleanly into text/image on Desktop, and collapses correctly to a vertical stack on mobile screens (≤768px).
5. Hover over product cards and buttons to confirm the custom cubic-bezier haptic feedback.

## Dependencies Added
- `ogl` (Required for the Aurora WebGL background)
