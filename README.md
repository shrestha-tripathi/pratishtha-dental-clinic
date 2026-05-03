# 🦷 Pratishtha Dental Clinic

Stunning, trust-first website for **Pratishtha Dental Clinic** — Dr. Pratishtha Tripathi, BDS (Root Canal Specialist), Greater Noida.

**Live:** https://shrestha-tripathi.github.io/pratishtha-dental-clinic/

## Stack
- ⚡ Vite 6 + React 19 + TypeScript
- 🎨 Tailwind CSS v4 (Oxide engine, CSS-first config)
- 🎬 Framer Motion · Lucide icons · React Helmet Async
- 🚀 Auto-deploy to GitHub Pages via Actions

## Quick start
```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
```

## Editing content
All copy, services, hours, photos, and contact info live in **`src/data/clinic.ts`**.
Edit that one file → push → GH Actions ships it.

## Adding photos
Drop into `public/` and reference by filename (e.g. `asset("new-photo.jpeg")`).

## Extending
- **Blog/services pages** — add routes in `App.tsx` (React Router already installed)
- **Online booking** — embed Cal.com / Calendly in a new component
- **Hindi/English toggle** — wrap `clinic.ts` with i18n keys
- **Multi-doctor** — add `doctors[]` array to `clinic.ts`

## License
© Pratishtha Dental Clinic. All rights reserved.
