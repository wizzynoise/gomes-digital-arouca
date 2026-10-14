# Gomes IA Digital Arouca

One-page website for **Gomes IA Digital**, a technology support and digital services business based in Arouca, Portugal. Visible copy is European Portuguese.

## Stack

Static HTML pages, with styles and scripts in each file. No database, no build step, and no paid services. A visit from `github.io` is sent to the Workers address.

## Contact

The only public email on the page is `sjgomesarouca@gmail.com`. Do not add any other address.

Every WhatsApp button opens `https://wa.me/message/5VB7SV74VVEKE1`. The contact form stays on the page and opens that same short link with the visitor's message attached. The phone number is not in the repository.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server
```

## Deploy

Static hosting from the repository root. `.nojekyll` is included for GitHub Pages, and the repository is connected to Cloudflare Workers Builds. `wrangler.jsonc` publishes this folder as static assets only (no Worker script). The empty `previews` block lets `wrangler preview` inherit that assets config. `.assetsignore` keeps non-site files out of the asset upload. The public address in `index.html`, `robots.txt`, and `sitemap.xml` is `https://gomes-digital-arouca.sjgomesarouca.workers.dev/`.

## Files

| File | Role |
| --- | --- |
| `index.html` | The page, including styles, scripts, and search metadata |
| `politica-privacidade.html` | Privacy policy in European Portuguese |
| `assets/monograma.svg` | GIA monogram |
| `assets/logo-gomes-ia.webp` | Gomes IA Digital logo in the header |
| `assets/og.jpg` | Image used when the link is shared |
| `assets/icon-180.png` | Home-screen icon |
| `favicon.svg` | Browser-tab icon |
| `wrangler.jsonc` | Static-assets Worker config, including previews |
| `.assetsignore` | Files left out of the Worker asset upload |
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |
| `robots.txt`, `sitemap.xml` | Point crawlers at the page |
