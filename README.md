# ETJump website

Source for [etjump.com](https://etjump.com). Built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/), using the [Galaxy](https://github.com/frostybee/starlight-theme-galaxy)
docs theme as a baseline.

The site is a static build deployed to GitHub Pages. It hosts the main site, downloads, news, tutorials, tools and a
placeholder documentation section that will eventually replace Read the Docs.

## Requirements

- Node.js 22 or newer (the repo pins `>=22.23.4` in `package.json`)
- npm

## Developing

| Command                | Action                                          |
| ---------------------- | ----------------------------------------------- |
| `npm install`          | Install dependencies                            |
| `npm run dev`          | Start the dev server at `http://localhost:4321` |
| `npm run build`        | Build the static site into `dist/`              |
| `npm run preview`      | Serve the built `dist/` locally                 |
| `npm run check`        | Type-check Astro files with `astro check`       |
| `npm run lint`         | Lint the project with ESLint                    |
| `npm run lint:fix`     | Lint and apply automatic fixes                  |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Check formatting without writing changes        |
| `npm run validate`     | Run check, lint and format check in sequence    |

## Where things live

| Path                       | What it is                                                        |
| -------------------------- | ----------------------------------------------------------------- |
| `src/pages/`               | Site pages (file-based routing)                                   |
| `src/pages/news/`          | News index and `[...slug]` route                                  |
| `src/pages/tutorials/`     | Tutorial index and `[...slug]` route                              |
| `src/components/`          | Header, footer, theme toggle and shared article components        |
| `src/layouts/`             | `BaseLayout` for site pages, `NewsPost` for news posts            |
| `src/content/news/`        | News posts (Markdown/MDX)                                         |
| `src/content/tutorials/`   | Long-form tutorials (Markdown/MDX)                                |
| `src/content/docs/docs/`   | Starlight docs, served at `/docs/*`                               |
| `src/assets/`              | Images optimised at build time                                    |
| `src/lib/releases.ts`      | Build-time GitHub Releases lookup for the downloads page          |
| `src/consts.ts`            | Site-wide constants and external URLs                             |
| `src/styles/tokens.css`    | Brand colors, fonts and radii (shared with Starlight)             |
| `src/styles/global.css`    | Site styles                                                       |
| `src/styles/starlight.css` | Maps tokens onto Starlight's and Galaxy's variables               |
| `src/pages/design.astro`   | Preview of type, palette and components (noindex, not in sitemap) |
| `public/`                  | Static files served as-is (`CNAME`, favicon, fonts, social image) |

## Adding content

Content contributions are welcome through pull requests. News posts and tutorials are plain Markdown or MDX files, and
the site builds everything else automatically.

### News

A news post is a file in `src/content/news/` with this frontmatter:

```yaml
---
title: 'Post title'
description: 'One-line summary used in lists, the page lede and RSS.'
pubDate: 2026-11-03
author: 'Your name'
tags: ['release']
draft: false
---
```

- `src/content/news/my-post.md` becomes `/news/my-post/`.
- `author` is optional and defaults to `ETJump Team`. It appears on the post, the news index and the home page.
- `updatedDate` and `heroImage` are optional.
- `tags` is optional metadata; it is stored but not currently rendered.
- `draft: true` hides the post from lists, pages, RSS and the sitemap.
- Reading time is calculated automatically.
- Use `.mdx` if you need JSX functionality.

### Tutorials

Tutorials live in `src/content/tutorials/` and support `title`, `description`, optional `author`, optional `updated`,
optional `difficulty` (`beginner`, `intermediate` or `advanced`), `tags` and `draft`. They render in the article layout
with a table of contents, reading progress bar, back-to-top button and image lightbox. These can be either markdown or
MDX pages.

### Documentation

Documentation pages go under `src/content/docs/docs/` and are served at `/docs/<path>`. The sidebar is defined in
`astro.config.mjs`.

The `/docs` section is currently a placeholder: pages are marked `noindex` and excluded from the sitemap until the
migration from Read the Docs is complete. The canonical documentation is still
[etjump.readthedocs.io](https://etjump.readthedocs.io/). When migrating, remove the `noindex` head entry and the sitemap
filter from `astro.config.mjs`.

## Design

The docs use `starlight-theme-galaxy`, which provides the layout and component design. Its styles are injected before
the project's custom CSS, so `src/styles/starlight.css` overrides its palette without touching its components.

The site and `/docs` share one set of colors, fonts and radii through `src/styles/tokens.css` (`Inter` +
`JetBrains Mono`, with `Saira` for display type). The theme toggle writes to the same `localStorage` key Starlight uses
(`starlight-theme`), so the choice carries between the main site and the docs.

`/design` is a style-tile page showing buttons, cards, badges, asides, prose, tables, code and inputs. Use it to
evaluate palette changes before applying them elsewhere.

## Licenses

The site source is licensed under the BSD 3-Clause License; see [`LICENSE`](LICENSE). Third-party notices and full
license texts are in [`THIRD_PARTY_LICENSES.md`](THIRD_PARTY_LICENSES.md) and [`licenses/`](licenses/).

## Current state

- [x] Basic functional site
- [x] Home page, downloads page and resources
- [x] Tutorials
- [x] News posts and RSS feed
- [x] Overbounce calculator
- [x] Settle the color palette and general redesign
- [x] `/design` style tile for evaluating the visual system
- [x] Override the Starlight header so `/docs` uses the site navigation
- [x] Port over Starlight's component themes to the website
- [x] Placeholder documentation
- [x] Deploy and sunset the old site
- [ ] Migrate documentation from Read the Docs
