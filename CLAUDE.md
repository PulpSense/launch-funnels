# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

This is a Next.js 16 landing page template using the App Router, Tailwind CSS v4, and React 19.

### Component Layering

The codebase follows a props-driven component architecture:

1. **Pages** (`src/app/[funnel-name]/`) - Route entry points that define all content as props
2. **Sections** (`src/components/sections/`) - Props-driven page sections (HeroSection, FAQ, DisclaimerFooter, etc.)
3. **UI Components** (`src/components/ui/`) - Reusable UI primitives (GradientButton, TrustBadge, FormEmbed, etc.)

### Funnel Routing

Each funnel has its own explicit folder in `src/app/`. To add a new funnel:

1. Create a new folder: `src/app/[your-funnel-name]/`
2. Add `page.tsx` with content defined as a `content` object and passed to section components as props
3. Add `thank-you/page.tsx` and `unqualified/page.tsx` as needed

Example structure:
```
src/app/sell-ai-funnel/
├── page.tsx              # Lander with all content defined here
├── thank-you/page.tsx    # Thank you page
└── unqualified/page.tsx  # Unqualified page
```

### Creating New Funnels

Copy an existing funnel folder and modify the `content` object in each page. All section components accept typed props defined in `src/components/sections/types.ts`.

### Configuration

- `src/utils/AppConfig.ts` - Global site config (name, title, description, locale)

### Styling

Uses Tailwind v4 with PostCSS. Global styles are in `src/app/globals.css`. The project uses `styled-jsx` for component-scoped styles where needed.

### Code Standards

- ESLint with Next.js + TypeScript configs
- Prettier for formatting (with Tailwind plugin)
- Husky + lint-staged for pre-commit hooks
- Prefix unused variables with `_` (configured in eslint)
- Use consistent type imports (`import type { X }`)
