# ETJump website

Source for [etjump.com](https://etjump.com). Built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/) with the [Galaxy](https://github.com/frostybee/starlight-theme-galaxy) docs
theme as a baseline.

This is still a work in progress and not deployed live yet. See [current state](#current-state) for progress.

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

| Path                       | What it is                                            |
| -------------------------- | ----------------------------------------------------- |
| `src/pages/`               | Site pages (file-based routing)                       |
| `src/components/`          | Header, footer, theme toggle, shared pieces           |
| `src/layouts/`             | `BaseLayout` for site pages, `NewsPost` for posts     |
| `src/content/news/`        | News posts (Markdown/MDX)                             |
| `src/content/tutorials/`   | Long-form tutorials (Markdown/MDX)                    |
| `src/content/docs/docs/`   | Starlight docs - served at `/docs/*`                  |
| `src/styles/tokens.css`    | Brand colors, fonts and radii (shared with Starlight) |
| `src/styles/global.css`    | Site styles                                           |
| `src/styles/starlight.css` | Maps tokens onto Starlight's and Galaxy's variables   |
| `src/pages/design.astro`   | Preview of type, palette and components               |
| `public/`                  | Static files served as-is (`CNAME`, favicon)          |

## Adding content

A news post is a Markdown file in `src/content/news/` with this frontmatter:

```yaml
---
title: 'Post title'
description: 'One-line summary used in lists and RSS.'
pubDate: 2026-11-03
tags: ['release']
---
```

The file `src/content/news/my-post.md` becomes `/news/my-post/`. Drafts are hidden from lists, pages and RSS when
`draft: true` is set.

Tutorials work the same way under `src/content/tutorials/`, with `title`, `description`, and optional tags (currently
unused).

Documentation pages go under `src/content/docs/docs/` and are served at `/docs/<path>`. Starlight's sidebar is generated
from that directory.

## Design

The docs use `starlight-theme-galaxy`, which provides the layout and component design. Its styles are injected before
the project's custom CSS, so `src/styles/starlight.css` overrides its palette without touching its components.

The site and `/docs` share one set of colors, fonts and radii through `src/styles/tokens.css` (`Inter` +
`JetBrains Mono`, with `Saira` for display type). The theme toggle writes to the same `localStorage` key Starlight uses
(`starlight-theme`), so the choice carries between the main site and the docs.

`/design` is a style-tile page showing buttons, cards, badges, asides, prose, tables, code and inputs. Use it to
evaluate palette changes before applying them elsewhere.

## Deployment

TODO

## Licenses

The site source is licensed under the BSD 3-Clause License; see [`LICENSE`](LICENSE). Third-party notices and full
license texts are in [`THIRD_PARTY_LICENSES.md`](THIRD_PARTY_LICENSES.md).

## Current state

- [x] Basic functional site
- [x] Placeholder documentation
- [x] `/design` style tile for evaluating the visual system
- [x] Tutorials ported over to new site
- [x] Overbounce calculator working
- [x] Proper home page
- [x] Proper downloads page
- [ ] Migrate documentation from Read the Docs
- [x] Settle the color palette and general redesign
- [ ] Override the Starlight header so `/docs` uses the site navigation
- [x] Port over starlight's component themes to the website
- [ ] Deploy and sunset the old site
