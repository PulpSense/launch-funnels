# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm start        # Run production build locally
pnpm lint         # Run ESLint
pnpm format       # Fix lint + format JSON/YAML with Prettier
pnpm check-types  # TypeScript type checking
pnpm build-prod   # Clean + production build
```

## Architecture

This is a Next.js 16 funnel app using the App Router, Tailwind CSS v4, and React 19. AI OS is the canonical live funnel.

### Component Layering

The codebase follows a props-driven component architecture:

1. **Pages** (`src/app/[funnel-name]/`) - Route entry points that define all content as props
2. **Funnel Primitives** (`src/components/funnel/`) - Reusable page shell, section, CTA, checklist, marquee, video grid, and legal footer primitives for future funnels
3. **Feature Sections** (`src/app/[funnel-name]/_components/`) - Funnel-specific sections and CSS Modules that compose primitives
4. **UI Components** (`src/components/ui/`) - Reusable UI primitives and interactive widgets

### Funnel Routing

Each funnel has its own explicit folder in `src/app/`. AI OS is currently the only live funnel. To add a new funnel:

1. Create a new folder: `src/app/[your-funnel-name]/`
2. Add `content.ts` with typed copy, media, form config, and section data
3. Add `page.tsx` that composes feature sections from `content.ts`
4. Add `thank-you/page.tsx` and `thank-you-u/page.tsx` as needed

Example structure:
```
src/app/ai-os/
├── content.ts            # Typed funnel content/config
├── page.tsx              # Lander route entry
├── _components/          # Funnel-specific sections and CSS Modules
├── thank-you/page.tsx    # Qualified thank-you page
└── thank-you-u/page.tsx  # Unqualified thank-you page
```

### Creating New Funnels

Use AI OS as the architecture reference, but keep future funnel-specific styling in that funnel's `_components` folder. Reuse `src/components/funnel` primitives instead of copying large page components.

### Asset Organization

Assets are organized in `public/` with a parallel structure to funnels:

```
public/
├── assets/                    # Shared assets across all funnels
│   └── images/
├── [another-funnel]/          # Each funnel gets its own folder
│   └── images/
└── favicon.ico                # Root-level files
```

**Usage in content objects:**
- Shared: `"/assets/images/logo.svg"`
- Funnel-specific: `"/[funnel-name]/images/hero.png"`

Create a matching folder in `public/` only when the funnel has assets that should not be shared.

### Configuration

- `src/utils/AppConfig.ts` - Global site config (name, title, description, locale)

### Styling

Uses Tailwind v4 with PostCSS. Global styles are in `src/app/globals.css`. Funnel-specific visual systems should live in CSS Modules under the funnel's `_components` folder.

### Code Standards

- ESLint with Next.js + TypeScript configs
- Prettier for formatting (with Tailwind plugin)
- Husky + lint-staged for pre-commit hooks
- Prefix unused variables with `_` (configured in eslint)
- Use consistent type imports (`import type { X }`)
