# Scratchpad

A small static React scratchpad built with Vite, TypeScript, Tailwind CSS, and MDX.

## Run locally

```sh
npm install
npm run dev
```

You can also use Bun:

```sh
bun install
bun run dev
```

## Add a post

Create a new `.mdx` file in `src/content/posts` with frontmatter:

```mdx
---
title: My Post Title
description: A short summary for post lists.
date: 2026-05-12
slug: my-post-title
---

## Start writing

Your MDX content goes here.
```

Posts are discovered automatically with Vite's `import.meta.glob`. The `slug` field controls the URL at `/posts/:slug`.

## Build for GitHub Pages

```sh
npm run build
npm run preview
```

The static site is emitted to `dist/`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it with GitHub Pages. `public/404.html` redirects direct pretty URL loads back through the app so routes like `/posts/my-post-title` work on GitHub Pages.

## Custom domain

The custom domain is configured in `public/CNAME`:

```txt
scratchpad.jvanhouts.com
```

In the GitHub repository settings, enable GitHub Pages with GitHub Actions as the source and set the custom domain to `scratchpad.jvanhouts.com`. Make sure DNS points `scratchpad.jvanhouts.com` at GitHub Pages.
