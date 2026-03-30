# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
npm run lint      # ESLint (max-warnings 0 — all warnings are errors)
npm run deploy    # Build + deploy to GitHub Pages via gh-pages
```

## Architecture

Single-page React app built with Vite. No traditional routing — navigation uses anchor links (`#about`, `#work`, etc.) via the Navbar.

**Section layout** (`src/App.jsx`): Sections render sequentially (Hero → About → Experience → Works → Feedbacks → Contact → Stars background). Each section (except Hero) is wrapped with the `SectionWrapper` HOC.

**HOC** (`src/hoc/SectionWrapper.jsx`): Wraps sections with Framer Motion scroll-triggered animations (`staggerContainer`) and injects the `id` anchor used by Navbar links.

**3D components** (`src/components/canvas/`): Three.js scenes via React Three Fiber and Drei, wrapped in `<Suspense>` with `<Loader>` fallback. The `isMobile` check in Hero disables the heavy `ComputersCanvas` on small screens.

**Animation utilities** (`src/utils/motion.js`): Exports reusable Framer Motion variants (`textVariant`, `fadeIn`, `slideIn`, `zoomIn`, `staggerContainer`) used throughout.

**Static data** (`src/constants/index.js`): All content (nav links, services, experiences, socials, projects) lives here as exported arrays/objects — the single source of truth for page content.

**Styling**: Tailwind CSS utility classes + a `src/styles.js` object for repeated class combos. Custom theme colors (`primary: #36454F`, `secondary: #aaa6c3`) and a custom `xs: 450px` breakpoint are defined in `tailwind.config.js`.

**Contact form**: Uses EmailJS (`@emailjs/browser`) for client-side email sending — no backend.

**Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to `https://kelanliu1.github.io/` on push.
