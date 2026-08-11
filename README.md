# BalanceBit Solutions — Luxury Site Rebuild

A dark, glass-panel redesign of the BalanceBit Solutions website, built with
React, Vite, and Three.js.

## Stack

- **React 18** — component structure, routing (`react-router-dom`, `HashRouter`)
- **Three.js** — animated node/network background in the hero
- **Vite** — build tool / dev server
- **Plain CSS** (no framework) — design tokens in `src/index.css`
- **Fonts**: Fraunces (display), Inter (body), JetBrains Mono (labels/data)

## Project structure

```
src/
  components/
    Nav.jsx           sticky nav, mobile menu
    Footer.jsx
    NetworkField.jsx   three.js hero background
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Contact.jsx
  App.jsx              routes
  index.css            design tokens + global styles
```

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally to check it
```

---

## Hosting it on GitHub Pages (free)

There are two ways to do this. **Option A is easiest** and stays up to date
automatically every time you push.

### Option A — GitHub Actions (automatic, recommended)

This repo already includes a workflow at
`.github/workflows/deploy.yml` that builds and deploys the site every time
you push to `main`.

1. **Create a new GitHub repository** (e.g. `balancebit-luxury`).
2. Push this project to it:
   ```bash
   cd balancebit-luxury
   git init
   git add .
   git commit -m "Initial luxury redesign"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/balancebit-luxury.git
   git push -u origin main
   ```
3. In your repo on GitHub: go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push again (or go to the **Actions** tab and re-run the workflow). After
   it finishes, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/balancebit-luxury/
   ```

**Important:** the `base` path in `vite.config.js` is currently set to
`/balancebit-luxury/`. If you name your GitHub repo something different,
update this line to match:

```js
// vite.config.js
base: '/your-repo-name/',
```

### Option B — Manual deploy with `gh-pages`

If you'd rather not use Actions:

```bash
npm install --save-dev gh-pages
```

Add this to `package.json` under `"scripts"`:

```json
"deploy": "npm run build && npx gh-pages -d dist"
```

Then run:

```bash
npm run deploy
```

This pushes the built site to a `gh-pages` branch. In **Settings → Pages**,
set the source to **Deploy from a branch → `gh-pages` → `/ (root)`**.

### Using a custom domain (optional)

If you want `balancebitsolutions.com` (or a subdomain) to point at the
GitHub Pages site instead of the `github.io` URL:

1. In **Settings → Pages**, add your custom domain in the **Custom domain**
   field — this creates a `CNAME` file in the repo automatically.
2. At your domain registrar, add a `CNAME` record pointing your subdomain
   (e.g. `www`) to `YOUR-USERNAME.github.io`, or `A` records for an apex
   domain pointing to GitHub's Pages IPs (search GitHub's docs for
   "GitHub Pages custom domain apex" for the current list).
3. Once DNS propagates (can take a few hours), the **Enforce HTTPS**
   checkbox will become available — turn it on.

---

## Notes on customizing

- **Colors / fonts** — all defined once as CSS variables at the top of
  `src/index.css` (`:root { ... }`). Change them there and the whole site
  updates.
- **Copy** — page text lives directly in each file under `src/pages/`.
- **Three.js background** — tweak node count, colors, or speed in
  `src/components/NetworkField.jsx`.
- **Contact form** — currently shows a local "message sent" confirmation
  only. To actually receive submissions, wire it up to a form backend
  (e.g. Formspree, Web3Forms) or your own API endpoint inside
  `handleSubmit` in `src/pages/Contact.jsx`.
