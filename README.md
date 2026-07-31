# BloomBytes — Digital Studio Website

A premium, dark-themed marketing site for BloomBytes, a digital studio that builds
websites, presentations, and Excel dashboards for growing businesses.

Built with **React 19 + Vite + Tailwind CSS 3 + Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview   # serve the build locally to check it
```

The static output is written to `dist/` — deploy that folder to any static host
(Vercel, Netlify, Cloudflare Pages, S3, etc).

## Project structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer
│   ├── sections/        Hero, Services, Projects, WhyChooseUs,
│   │                     Process, Testimonials, About, Contact
│   └── ui/              Reusable primitives: Button, Card, SectionHeading,
│                         Eyebrow, BloomGrid (signature background motif),
│                         ProjectPreview (SVG mockups), BrandIcons
├── data/                services.js, projects.js, process.js — edit these to
│                         update content without touching component code
├── App.jsx              Assembles all sections
├── index.css            Global styles, fonts, Tailwind layers
└── main.jsx             React entry point
```

## Customizing content

- **Services** — edit `src/data/services.js`.
- **Projects** — edit `src/data/projects.js`. Each project has a `type` of
  `"web"`, `"deck"`, or `"excel"`, which selects the matching SVG preview
  mockup in `ProjectPreview.jsx`. Swap in real screenshots by replacing that
  component's usage with an `<img>` once you have live project images.
- **Process steps** — edit `src/data/process.js`.
- **Testimonials** — currently placeholders by design ("Client testimonial
  coming soon"). Replace the placeholder cards in
  `src/components/sections/Testimonials.jsx` once you have real client quotes.
- **Contact form** — `src/components/sections/Contact.jsx` currently only
  simulates a submission client-side. Wire the `handleSubmit` function up to
  your email service or backend of choice (Formspree, Resend, a serverless
  function, etc).
- **Social links** — update the `mailto:`, Instagram, and GitHub URLs in
  `Contact.jsx` and `Footer.jsx`.

## Brand tokens

Colors, fonts, and custom animations live in `tailwind.config.js`:

- Primary: `#4F8CFF`
- Background: `#0B0F19`
- Surface: `#151B2D`
- Text: `#F8FAFC`
- Muted text: `#94A3B8`
- Accent (growth/bloom): `#34D399`
- Font: Inter (headings + body), JetBrains Mono (labels/eyebrows)

## Notes

- Respects `prefers-reduced-motion`.
- All interactive elements have visible keyboard focus states.
- Fully responsive from mobile through desktop.
