# liannsun.com

Personal site. The main page is vanilla HTML/CSS/JS. The blog is an [Astro](https://astro.build) subsite at `/blog`.

## Running locally

### Blog

The blog needs Astro's development server. From the repository root, run:

```sh
npm install
npm run blog
```

Then open [http://127.0.0.1:4321/blog/](http://127.0.0.1:4321/blog/).

Do not use a generic static file server for the blog's source directory; it
will show a folder listing instead of rendering the Astro site.

### Main site

The main site is static HTML/CSS/JS. Open `index.html` directly, or serve the
repository root with any static file server:

```sh
npx serve .
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
