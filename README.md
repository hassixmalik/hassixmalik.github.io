# hassixmalik.github.io

Personal portfolio for Muhammad Hassan Raza — full-stack engineer, Manama, Bahrain.
Live at **https://hassixmalik.github.io**.

Static, no build step. Edit the files, commit to `main`, and GitHub Pages publishes it.

| File | What's in it |
| --- | --- |
| `index.html` | All page content, plus the inlined brand-icon sprite |
| `styles.css` | Design tokens (light + dark) and layout |
| `icons.css` | Brand-mark colours — generated, see below |
| `main.js` | Theme toggle and the scroll-reveal observer |
| `favicon.svg` | Wordmark in miniature |

## Editing

**Colours, spacing, type** — the custom properties at the top of `styles.css`.
Dark mode overrides live in the `html[data-theme="dark"]` block right under them.

**Content** — plain HTML in `index.html`, in section order: hero, about, work,
timeline, stack, recognition, contact.

**Brand icons** — inlined as an SVG sprite at the top of `<body>`, referenced as
`<svg class="ic ic--vue"><use href="#i-vue" /></svg>`. Nothing is fetched at
runtime. Colours come from `icons.css`, generated from the
[Simple Icons](https://simpleicons.org) set: each mark keeps its native brand
colour, except a few adjusted per theme so they stay legible on both canvases
(ElevenLabs and Express on dark, JavaScript and React on light).

Brands with no Simple Icons slug render as plain mono text pills rather than a
fabricated logo — currently **AWS**, **Tap Payments**, and **Azure DevOps**.

## Open TODOs

Marked visibly on the page so they can't ship silently:

- Résumé PDF — drop the file in the repo root and point the two "Résumé" links at it
- Upwork profile URL — for the Top Rated Plus badge
