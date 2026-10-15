# Gomes IA Digital Arouca

Website for **Gomes IA Digital**, Pedro Gomes, based in Arouca, Portugal. Visible copy is European Portuguese. The main offer is a simple business website. In-person technology help is a separate, local service.

## Stack

Static HTML pages, with styles and scripts in each file. No database, no build step, and no paid services. A visit from `github.io` is sent to the Workers address.

## Contact

The only public email on the site is `sjgomesarouca@gmail.com`. Do not add any other address.

Every WhatsApp button opens `https://wa.me/message/5VB7SV74VVEKE1`. The contact form stays on the page and opens that same short link with the visitor's message attached. Demonstration sites use the same short link with the prefilled sentence "Quero um site como este". The phone number is not in the repository.

## Portfolio

Real work on the homepage, separate from the fictional demonstrations:

| Project | State | Screenshot |
| --- | --- | --- |
| PainelLog | In testing, no public address | `assets/portfolio/painellog-390.webp`, `assets/portfolio/painellog-1280.webp` |
| 7Jardins | Online at https://7jardins26.vercel.app | `assets/portfolio/7jardins-1280.webp` |
| SjGomes Sistemas de Som | Online at https://sjgomes.sjgomesarouca.workers.dev | `assets/portfolio/sjgomes-1280.webp` (1280×800 capture, saved at 1600×1000) |

The four demonstration cards use screenshots of the demo pages themselves: `assets/demos/barbearia-leme-preview.webp`, `assets/demos/mesa-da-encosta-preview.webp`, `assets/demos/casa-do-vale-preview.webp` and `assets/demos/barro-e-linho-preview.webp`. The older photographs stay in `assets/demos/` because the demo pages still use them.

## Demonstration sites

Four fictional businesses live under `demos/`. Each page is `noindex` and is not listed in `sitemap.xml`, so a made-up shop is not offered to search engines as a real local business. Photo sources are in `CREDITS.md`.

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
| `index.html` | Homepage, including styles, the contact script, and search metadata |
| `politica-privacidade.html` | Privacy policy in European Portuguese |
| `demos/barbearia-leme/` | Fictional barbershop concept |
| `demos/mesa-da-encosta/` | Fictional restaurant concept |
| `demos/casa-do-vale/` | Fictional rural stay concept |
| `demos/barro-e-linho/` | Fictional shop concept |
| `assets/demos/` | Compressed WebP photographs for the concepts |
| `CREDITS.md` | Photograph authors and source URLs |
| `assets/monograma.svg` | GIA monogram |
| `assets/logo-gomes-ia.webp` | Gomes IA Digital logo in the header |
| `assets/og.jpg` | Image used when the link is shared |
| `assets/icon-180.png` | Home-screen icon |
| `favicon.svg` | Browser-tab icon |
| `wrangler.jsonc` | Static-assets Worker config, including previews |
| `.assetsignore` | Files left out of the Worker asset upload |
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |
| `robots.txt`, `sitemap.xml` | Point crawlers at the homepage and the privacy page |
