# After the Thunder — Landing page

Single-page sales landing for the ebook **"After the Thunder"**. Static site (plain HTML + CSS + JS), no build, no frameworks. Ready to deploy on Vercel.

## The files

- **index.html** — the full page (structure and copy).
- **styles.css** — all the design (colors, typography, responsive).
- **script.js** — the buy buttons, the footer year, and the scroll animations.
- **cover.jpg** — your cover (you add it, see below).

## Before publishing: 3 things to edit

### 1. Your Hotmart link
The checkout link is already set in **script.js**:

```js
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/P107263303L";
```

If your product ever changes, update it here.

### 2. Your cover
Export the cover from Canva (recommended: vertical, 10:16 ratio, e.g. 1600 x 2560 px) and save the file as **cover.jpg** in this same folder. If there's no cover, the page won't break: it shows a box with the title.

### 3. The email
In the footer, replace `your-email@example.com` with your real contact email. The price ($9.99) is already set in index.html (search for "EDIT THE PRICE HERE" to change it).

## How to publish on Vercel

### Easy option (nothing to install)
1. Go to **vercel.com** and create a free account.
2. Click **Add New -> Project**.
3. Upload this folder (or connect it from a GitHub repository).
4. No build config needed: it's a static site. Just hit **Deploy**.
5. In seconds you'll get an address like **your-name.vercel.app**. That's your landing.

### CLI option (optional)
1. Install the CLI: `npm i -g vercel`
2. Inside this folder, run: `vercel`
3. Follow the on-screen instructions.

## Note
Vercel's free domain (**your-name.vercel.app**) works perfectly for your TikTok / Instagram bio. Later, if you want, you can connect a custom domain.
