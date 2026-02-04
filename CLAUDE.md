# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm format       # Fix lint + format JSON/YAML with Prettier
pnpm check-types  # TypeScript type checking
pnpm build-prod   # Clean + production build
```

## Architecture

This is a Next.js 16 landing page template using the App Router, Tailwind CSS v4, and React 19.

### Component Layering

The codebase follows a specific layering pattern:

1. **Pages** (`src/app/`) - Route entry points
2. **Templates** (`src/templates/`) - Full page sections that compose atomic components (Hero, Footer, Banner, VerticalFeatures)
3. **Atomic Components** (`src/button/`, `src/layout/`, etc.) - Reusable UI primitives organized by type

### Funnel Routing

Dynamic funnel routes live in `src/app/[funnel]/`. To add a new funnel:
1. Add the slug to `validFunnels` array in `src/app/[funnel]/page.tsx`
2. The route becomes available at `yourdomain.com/[slug]`
3. Thank-you pages are at `[funnel]/thank-you/`

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
