# Gomes IA Digital Arouca

One-page website for **Gomes IA Digital**, a technology support and digital services business based in Arouca, Portugal. The public name on the page is Gomes IA Digital. The header and the hero keep “· Arouca” next to that name.

**Status:** In development. Visible copy is European Portuguese, for clients in Portugal.

## Stack

Plain HTML, CSS, and a small JavaScript file (`contacto.js`). No database, no build step, and no paid services.

## Contact link (WhatsApp)

The only public email on the page is `sjgomesarouca@gmail.com`. Do not add any other address.

Every WhatsApp button points straight at the short link in `contacto.js`:

```javascript
var WHATSAPP_SHORT_LINK = "https://wa.me/message/5VB7SV74VVEKE1";
```

The same address is the `href` on each button. The script does not build a `wa.me` address, and the phone number is not in the repository.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server
```

## Deploy

Static hosting from the repository root. `.nojekyll` is included for GitHub Pages, and the repository is connected to Cloudflare Workers Builds. `wrangler.jsonc` publishes this folder as static assets only (no Worker script). The empty `previews` block lets `wrangler preview` inherit that assets config. `.assetsignore` keeps non-site files out of the asset upload. The address written in `index.html`, `robots.txt`, and `sitemap.xml` is `https://wizzynoise.github.io/gomes-digital-arouca/`.

## Files

| File | Role |
| --- | --- |
| `index.html` | The page, including search and social metadata |
| `styles.css` | Layout and appearance |
| `contacto.js` | WhatsApp link and the services carousel |
| `assets/monograma.svg` | GIA monogram in the header |
| `assets/logo-gomes-ia.webp` | Gomes IA Digital logo in the footer |
| `assets/og.jpg` | Image used when the link is shared |
| `assets/icon-180.png` | Home-screen icon |
| `favicon.svg` | Browser-tab icon |
| `wrangler.jsonc` | Static-assets Worker config, including previews |
| `.assetsignore` | Files left out of the Worker asset upload |
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |
| `robots.txt`, `sitemap.xml` | Point crawlers at the page |
