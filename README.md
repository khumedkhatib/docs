# My Blog (Static Site)

A simple, fast, accessible static blog built with plain HTML, CSS, and a touch of JavaScript.

## Structure

```
/
├─ index.html            # Home with latest posts
├─ about.html            # About page
├─ contact.html          # Contact page
├─ posts/
│  ├─ index.html         # All posts index
│  └─ hello-world.html   # Sample post
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  └─ js/
│     └─ main.js
└─ feed.xml              # Basic RSS feed
```

## Local preview

Use any static file server. For example, with Python 3:

```bash
cd /workspace
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Host on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.).

- GitHub Pages: push to a `gh-pages` branch or enable Pages on `main` with root.
- Vercel/Netlify: import the repo, set build = none, output = `/`.

## Customization

- Search for "My Blog" and update the site name.
- Update `feed.xml` `<link>` and item links to your domain.
- Replace contact info in `contact.html`.
- Add new posts under `/posts/your-post.html` and link them from `/posts/index.html` and the home page list.

## Notes

- This is intentionally framework-free to keep things portable and snappy.
- You can later migrate to a generator (Jekyll, Eleventy, Astro, Next.js) keeping the same IA.
