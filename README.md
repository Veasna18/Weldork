# Weldork — React Conversion

This is the original **Weldork** HTML/Bootstrap welding-website template,
converted page-for-page into a React (Vite) single-page app with client-side
routing. Visually and structurally it matches the original template exactly.

## What changed structurally

- All 9 pages (`index`, `about`, `service`, `feature`, `team`, `testimonial`,
  `appoinment`, `contact`, `404`) are now React components under `src/pages/`.
- The topbar/navbar and footer/copyright/back-to-top — identical across every
  original HTML page — are now shared components: `src/components/Header.jsx`
  and `src/components/Footer.jsx`. The navbar's active link now highlights
  automatically based on the current route.
- Routing is handled by `react-router-dom` (`src/App.jsx`):

  | Route            | Page          |
  |-------------------|---------------|
  | `/`               | Home          |
  | `/about`          | About         |
  | `/services`       | Services      |
  | `/features`       | Features      |
  | `/team`           | Our Team      |
  | `/testimonials`   | Testimonial   |
  | `/appointment`    | Appoinment    |
  | `/contact`        | Contact       |
  | `/404`, `*`       | 404 Page      |

- The original `js/main.js` (jQuery) behavior — WOW.js scroll animations,
  the testimonial owl-carousel, the counter-up stats, the experience progress
  bars, the sticky navbar, and the back-to-top button — is reproduced in
  `src/hooks/useTemplateEffects.js`, which every page calls on mount so the
  same interactions work when React Router swaps pages in.
- All original assets (`css/`, `img/`, `lib/`) are preserved as-is under
  `public/`.

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Notes

- jQuery, Bootstrap's JS bundle, and the small WOW/OwlCarousel/CounterUp/
  Waypoints plugins are loaded as global `<script>` tags in `index.html`
  (as in the original template) rather than converted to React idioms, since
  they're what drive the template's original animations/carousels.
- Content, copy, and markup are otherwise a faithful line-for-line JSX
  conversion of the original HTML.
