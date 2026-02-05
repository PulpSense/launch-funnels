# Launch Funnels

A landing page template built with Next.js 16, Tailwind CSS v4, and React 19. Designed for quickly spinning up high-converting funnel pages with a props-driven component architecture.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (PostCSS)
- **TypeScript**
- **pnpm**

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Start dev server with Turbopack      |
| `pnpm build`       | Production build                     |
| `pnpm start`       | Run production build locally         |
| `pnpm lint`        | Run ESLint                           |
| `pnpm format`      | Fix lint + format JSON/YAML          |
| `pnpm check-types` | TypeScript type checking             |
| `pnpm build-prod`  | Clean + production build             |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   └── sell-ai-funnel/            # Example funnel
│       ├── page.tsx               # Lander
│       ├── thank-you/page.tsx     # Thank you page
│       └── unqualified/page.tsx   # Unqualified page
├── components/
│   ├── sections/                  # Page sections (HeroSection, FAQ, etc.)
│   └── ui/                        # Reusable UI primitives
└── utils/
    └── AppConfig.ts               # Global site config

public/
├── assets/                        # Shared assets
└── sell-ai-funnel/                # Funnel-specific assets
```

## Adding a New Funnel

1. Create a folder in `src/app/[your-funnel-name]/`
2. Add `page.tsx` with a `content` object passed to section components as props
3. Add `thank-you/page.tsx` and `unqualified/page.tsx` as needed
4. Create a matching folder in `public/[your-funnel-name]/` for assets

All section components accept typed props defined in `src/components/sections/types.ts`.

## Deployment

Deployed to [Vercel](https://vercel.com) via GitHub integration. Pushes to `master` trigger production deployments; PRs get preview deployments.

## License

ISC
