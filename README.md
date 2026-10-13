# Gomes Digital Arouca

One-page website for **Gomes IA Digital**, a technology support and digital services business based in Arouca, Portugal. On the page the public name is Gomes Digital, presented as a Gomes IA Digital brand.

**Status:** In development. Visible copy is European Portuguese, for clients in Portugal.

## Stack

Plain HTML, CSS, and a small JavaScript file (`contacto.js`). No database, no build step, and no paid services.

## Contact link (WhatsApp)

The only contact setting is in `contacto.js`:

```javascript
var WHATSAPP_SHORT_LINK = "";
```

Paste the WhatsApp Business short link between the quotes. The script accepts an address that starts with `https://wa.me/` or `https://api.whatsapp.com/` (a Business short link starts with `https://wa.me/message/`). The phone number is not shown on the page. While the quotes are empty, a click still opens WhatsApp: the address is built in the browser from parts kept in the same file, with the prefilled message stored in `MENSAGEM`.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server
```

## Deploy

Serve the repository root as a static site. `.nojekyll` is included so GitHub Pages can publish that root. The address written in `index.html`, `robots.txt`, and `sitemap.xml` is `https://wizzynoise.github.io/gomes-digital-arouca/`.

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
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |
| `robots.txt`, `sitemap.xml` | Point crawlers at the page |
