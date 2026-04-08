# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **api.video developer documentation site**, built with [Doctave](https://www.doctave.com/) (a documentation hosting platform). Content is authored in Markdown with Doctave-specific components and deployed automatically via GitHub Actions.

There is no local build system, test runner, or linter. The workflow is: edit Markdown files, push to `main`, and the CI deploys to Doctave.

## Deployment

- **CI workflow:** `.github/workflows/deploy.yml` runs on push to `main` and on PRs
- Deployment uses `curl -L http://dashboard.doctave.com/doctave-upload.sh | bash` with a `DOCTAVE_UPLOAD_TOKEN` secret
- There is no local preview server; validation happens via the Doctave deploy on PRs

## Key Configuration Files

- **`doctave.yaml`** — Master config: tabs, theme, custom CSS, OpenAPI spec bindings, and 450+ URL redirects for backward compatibility
- **`navigation.yaml`** — Defines the sidebar navigation tree for the entire site
- **`openapi.yaml`** — Main REST API spec (~17k lines, OpenAPI 3.0.0); auto-generates reference pages under `/reference/api/`
- **`admin-api.yaml`** — Admin API spec; generates pages under `/reference/admin-api/`

## Content Architecture

Documentation is organized by product tab, matching the `tabs:` in `doctave.yaml`:

| Directory | Tab |
|---|---|
| `/get-started/` | Get started (migrations, infra guides) |
| `/vod/` | VOD (upload, captions, chapters, encoding) |
| `/live-streaming/` | Live streaming |
| `/delivery/` | Delivery & players |
| `/analytics/` | Analytics & data |
| `/reference/` | API Reference (auth, errors, webhooks, endpoint docs) |
| `/sdks/` | Libraries & SDKs (api-clients, vod, livestream, player, nocode, security) |

### Frontmatter

Every Markdown file uses YAML frontmatter. Common fields:
- `title` — Page title
- `meta.description` — SEO description
- `toc: false` — Disable table of contents
- `breadcrumbs: false` — Disable breadcrumbs
- `hide_navigation: false` — Toggle sidebar

### Doctave Components and Partials

**Components** (`_components/`): Reusable UI blocks invoked as `<Component.LandingPageCard>`, `<Component.ApiVideoCard>`, etc. Defined with `attributes:` frontmatter.

**Partials** (`_partials/`): Template snippets using `{{variable}}` interpolation for things like dark/light images, code tabs, product cards, and SDK link cards.

**Built-in Doctave elements** used throughout: `<Grid>`, `<Card>`, `<Box>`, `<Flex>`, `<Button>`, `<Slot>`, `<Callout>`, `<Tabs>`, `<Tab>`.

### Custom CSS

Styling lives in `_assets/css/` with component-specific files (hero, cards, etc.) and is loaded via the `styles:` list in `doctave.yaml`.

## Editing Guidelines

- When adding a new page, it must also be added to `navigation.yaml` to appear in the sidebar
- When renaming or moving a page, add a redirect entry in `doctave.yaml` under the `redirects:` section to preserve old URLs
- OpenAPI spec changes in `openapi.yaml` or `admin-api.yaml` automatically regenerate the corresponding reference pages
- Internal links use root-relative paths (e.g., `/vod/video-object`) and can point to `.md` files
