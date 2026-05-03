# liannsun.com

Personal site. The main page is vanilla HTML/CSS/JS. The blog is an [Astro](https://astro.build) subsite at `/blog`.

## Running locally

**Main site** — just open `index.html` in a browser, or use any static file server:

```sh
npx serve .
```

**Blog** — runs a dev server at `http://localhost:4321/blog`:

```sh
npm run blog
```

First time only, install dependencies:

```sh
npm install --prefix blog
```

## Writing a blog post

Add a markdown file to `blog/src/content/posts/`:

```md
---
title: My post
date: 2025-01-01
tags: [engineering]
description: Optional.
---

Content here.
```

## Deployment

Pushing to `gh-pages` triggers a GitHub Actions workflow that builds the blog and deploys the full site to GitHub Pages.

> **Note:** the repo's Pages source must be set to "GitHub Actions" (Settings → Pages → Source).
