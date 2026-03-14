# Portfolio

A dark, brutalist editorial portfolio site — built with plain HTML, CSS, and JS. No frameworks, no build step, no dependencies.

## File structure

```
portfolio/
├── index.html      ← All content lives here
├── style.css       ← All styles
├── main.js         ← Lightbox logic
├── images/         ← Put your photos here (create this folder)
│   ├── hero.jpg
│   ├── 01-golden-hour.jpg
│   └── ...
└── README.md
```

## Quick start

1. Clone or download this repo
2. Open `index.html` in your browser — it works locally, no server needed
3. Customise the content (see below)
4. Push to GitHub and enable Pages

---

## Customising the content

### Your name & role
In `index.html`, find the hero section and update:
```html
<h1 class="hero-name">YOUR<span>NAME</span></h1>
```
The `<span>` makes that part appear in blue. Split your name however you like.

Update the role line:
```html
Photographer &amp; Director
<strong>Available for commissions</strong>
```

### Hero photo
Create an `images/` folder and add your photo. Then replace the placeholder div:
```html
<!-- Remove this: -->
<div class="hero-photo hero-photo--placeholder" aria-hidden="true"></div>

<!-- Add this: -->
<img src="images/hero.jpg" alt="Your Name" class="hero-photo" />
```
Recommended: high-contrast B&W portrait, at least 1200px tall.

### Adding your work photos
Each `.grid-item` in the grid section holds one photo. Replace the `.grid-placeholder` div with a real `<img>`:

```html
<!-- Before -->
<div class="grid-item">
  <div class="grid-placeholder" style="--ph-hue:210deg;--ph-sat:15%;--ph-lit:25%"></div>
  <div class="grid-label">Golden Hour</div>
  <div class="grid-num">01</div>
</div>

<!-- After -->
<div class="grid-item">
  <img src="images/01-golden-hour.jpg" alt="Golden Hour" loading="lazy" />
  <div class="grid-label">Golden Hour</div>
  <div class="grid-num">01</div>
</div>
```

**Recommended image sizes:**
| Type | Dimensions |
|------|-----------|
| Portrait (normal) | 800 × 1067 px |
| Landscape (wide) | 1600 × 900 px |

Wide items use the `.grid-item--wide` class and `grid-column: span 2`.

### Adding / removing grid items
Just add or remove `.grid-item` blocks in `index.html`. The grid handles the rest.

### Accent colour
The electric blue is `#1a3fff`. Change it in `style.css`:
```css
:root {
  --blue: #1a3fff; /* ← change this */
}
```

### Intro text, about, services
All editable directly in `index.html` — search for the section comments.

### Contact & social links
```html
<a href="mailto:hello@yourname.com" class="contact-email">hello@yourname.com</a>

<div class="socials">
  <a href="https://instagram.com/yourhandle" ...>Instagram</a>
  <a href="https://vimeo.com/yourchannel" ...>Vimeo</a>
  <a href="https://linkedin.com/in/yourprofile" ...>LinkedIn</a>
</div>
```

---

## Deploy to GitHub Pages (free hosting)

1. Create a new repo on GitHub (e.g. `portfolio`)
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/portfolio`

### Custom domain (optional)
1. Buy a domain (~$12/yr from Namecheap or Cloudflare)
2. In GitHub Pages settings, enter your domain under **Custom domain**
3. Add a `CNAME` file to your repo root containing just your domain:
   ```
   www.yourname.com
   ```
4. Point your domain's DNS to GitHub's IPs (GitHub docs have the exact values)

---

## Lightbox
Clicking any grid item opens the fullscreen lightbox. Keyboard controls:
- `←` / `→` — navigate between photos
- `Esc` — close

The lightbox only opens if the item contains a real `<img>` tag (not a placeholder).
