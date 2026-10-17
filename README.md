# Gomes IA Digital Arouca

Website for **Gomes IA Digital**, Pedro Gomes, based in Arouca, Portugal. Visible copy is European Portuguese. The main offer is a simple business website. In-person technology help is a separate, local service.

## Stack

Static HTML pages, with styles and scripts in each file. No database, no build step, and no paid services. A visit from `github.io` is sent to `https://gomesiadigital.com`.

## Contact

The only public email on the site is `sjgomesarouca@gmail.com`. Do not add any other address.

Every WhatsApp control is a link to `https://wa.me/message/5VB7SV74VVEKE1` with `target="_blank"`. Do not add a `?text=` query: it breaks this short link. The homepage contact form still opens the visitor's email app with a message to `sjgomesarouca@gmail.com`. The phone number is not in the repository. Cloudflare Web Analytics (cookieless) is loaded on each HTML page.

## Portfolio

The homepage shows four example cards: Atelier Nórd, Leonor Matos, Nexora Inventory, and BRUMA Coffee. Desktop and mobile screenshots crossfade on hover, focus, or tap.

`/projetos` uses the same card style for completed work, in this order:

| Name on the card | Link | Screenshot |
| --- | --- | --- |
| 7Jardins - Serviços de jardinagem | https://7jardins26.vercel.app | `assets/projects/7jardins-desktop.webp`, `assets/projects/7jardins-mobile.webp` |
| SjGomes - Sistemas de som | None | `assets/projects/sjgomes-desktop.webp`, `assets/projects/sjgomes-mobile.webp` |
| Barbearia Leme | `/demos/barbearia-leme/` | `assets/projects/barbearia-leme-desktop.webp`, `assets/projects/barbearia-leme-mobile.webp` |
| Mesa da Encosta | `/demos/mesa-da-encosta/` | `assets/projects/mesa-da-encosta-desktop.webp`, `assets/projects/mesa-da-encosta-mobile.webp` |

Each card shows the name, one short line about the kind of site, and a link only where one exists. Casa do Vale and Barro & Linho stay on disk and are not linked from the homepage or `/projetos`.

## Pages

`servicos.html`, `projetos.html`, and `sobre.html` are served at `/servicos`, `/projetos`, and `/sobre`. They are listed in `sitemap.xml`. `/servicos#assistencia` is the technology-help block.

## Demonstration sites

Example pages live under `demos/`. Each page is `noindex` and is not listed in `sitemap.xml`. Photo sources are in `CREDITS.md`.

| Path | Page |
| --- | --- |
| `demos/atelier-nord/` | Architecture studio example |
| `demos/leonor-matos/` | Personal-brand example |
| `demos/nexora/` | Inventory prototype, in the browser only |
| `demos/bruma/` | Coffee storefront; each Comprar button uses the WhatsApp short link |
| `demos/barbearia-leme/` | Barbershop page linked from `/projetos` |
| `demos/mesa-da-encosta/` | Restaurant page linked from `/projetos` |
| `demos/casa-do-vale/` | Kept on disk, not linked from the homepage or `/projetos` |
| `demos/barro-e-linho/` | Kept on disk, not linked from the homepage or `/projetos` |

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server
```

Check the host redirects without deploying:

```bash
node test/redirects.mjs
```

## Deploy

The repository root is a Cloudflare Worker with static assets, connected to Workers Builds. `.nojekyll` is included for GitHub Pages. `worker.js` runs before the assets (`run_worker_first`). It returns 301 to `https://gomesiadigital.com`, with the same path and query, for `www.gomesiadigital.com` and `gomes-digital-arouca.sjgomesarouca.workers.dev`. Any other `*.workers.dev` host, including versioned previews, is served on that host. The apex is served in place. `env.ASSETS.fetch` still applies `_headers` and the default extensionless HTML redirect (307). The exception is `/googlef7be4e9e08c807ca.html`: the Worker returns that Google verification file with status 200, because the clean-URL rule would otherwise 307 it to the extensionless path. That file is not listed in `sitemap.xml`. The empty `previews` block lets preview URLs inherit this config. `.assetsignore` keeps non-site files out of the asset upload. The public address in the pages, `robots.txt`, and `sitemap.xml` is `https://gomesiadigital.com/`.

## Files

| File | Role |
| --- | --- |
| `index.html` | Homepage, search metadata, and contact script |
| `assets/home.css` | Homepage styles |
| `assets/bibo-widget.js` | Bibo assistant on the homepage and demonstrations |
| `assets/projects/` | Desktop and mobile screenshots for the homepage examples and `/projetos` |
| `servicos.html` | Services page at `/servicos` |
| `projetos.html` | Completed projects at `/projetos` |
| `sobre.html` | About page at `/sobre` |
| `politica-privacidade.html` | Privacy policy in European Portuguese |
| `demos/` | Example pages, all `noindex` |
| `assets/demos/` | Compressed WebP photographs for the concepts |
| `CREDITS.md` | Photograph authors and source URLs |
| `assets/monograma.svg` | GIA monogram |
| `assets/logo-gomes-ia.webp` | Gomes IA Digital logo in the header |
| `assets/og.jpg` | Image used when the link is shared |
| `assets/icon-180.png` | Home-screen icon |
| `favicon.svg` | Browser-tab icon |
| `googlef7be4e9e08c807ca.html` | Google Search Console file, served at the `.html` URL with status 200 |
| `worker.js` | 301 from www and the production workers.dev host to the apex |
| `wrangler.jsonc` | Worker and static-assets config, including previews |
| `test/redirects.mjs` | Local checks for the host redirects |
| `.assetsignore` | Files left out of the Worker asset upload |
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |
| `robots.txt`, `sitemap.xml` | Point crawlers at the homepage and the privacy page |
