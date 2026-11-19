# IOARTS Sanity Storefront

This repository contains a Next.js storefront for IOARTS artwork and products. Product content is fetched from Sanity and displayed on the home page, products listing, and individual product pages.

## Features

- Featured products and product listings sourced from Sanity
- Product detail pages with links to Etsy and DeviantArt
- Shared site header and footer
- Responsive styling and Vercel Analytics

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Sanity Content Lake via `next-sanity`
- pnpm (the repository includes `pnpm-lock.yaml`)

## Getting started

### Requirements

- Node.js 20.9 or later
- pnpm
- A Sanity project and dataset

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` file in the project root:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Optional; defaults to 2024-01-01 in lib/sanity-client.ts.
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Optional read token for a private dataset. Keep it server-only.
SANITY_API_READ_TOKEN=your-read-token
```

The project ID and dataset name are public configuration and are used by the Sanity client. A read token is only needed when the dataset requires authenticated reads. Never prefix a token with `NEXT_PUBLIC_` or commit it to the repository.

The Sanity document schema is defined in `schemas/post.ts` and exported from `schemas/index.ts`. Register that schema in the Sanity Studio used to manage this project's content. The `post` document includes a title, slug, content, image URL, price, category, and featured flag.

## Routes

- `/` — featured product showcase
- `/products` — product listing
- `/products/[id]` — product detail page, where `id` is the Sanity slug

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Project structure

```text
app/                  App Router pages and global styles
components/           Storefront header, footer, and product grid
lib/sanity-client.ts  Sanity client configuration
lib/sanity-queries.ts GROQ queries and product types
schemas/              Sanity document schema definitions
public/               Static product images, icons, and assets
styles/               Shared styles
```

## Deployment

Deploy as a Next.js application on Vercel or another platform that supports Next.js. Add the required Sanity project ID and dataset variables to the deployment environment. If the dataset is private, configure `SANITY_API_READ_TOKEN` as a server-only environment variable.
