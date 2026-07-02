# Chakill Lab — Design System

> **Chakill Lab** crea piezas decorativas en impresión 3D. Vende en línea a través de
> redes sociales (Instagram, TikTok, marketplaces) apoyándose en una web propia.
> Es una marca de producto artesanal-tecnológico: cálida, cercana y cuidada, pero
> con un acento moderno y "de laboratorio".

This repository is the brand's design system: brand assets, color & type tokens,
reusable UI components, and product UI kits. Consuming projects link a single file:
`styles.css`.

---

## Sources provided

- **Logos** — 8 PNG lockups (read-only mount `LOGOS sin fondo /`, also uploaded to
  `uploads/`). Copied into `assets/logos/`:
  - `wordmark-principal.png` — horizontal lockup, "Chakill" ink + "Lab" pill (light blue)
  - `wordmark-blanco.png` — for dark backgrounds
  - `wordmark-azul.png` — alt color
  - `wordmark-apilado.png` — stacked lockup
  - `wordmark-monocromatico.png` — single-color ink version
  - `isotipo-appicon.png` — "C." mark on ink rounded-square (app icon)
  - `isotipo-mono.png` — "C." mark, transparent
  - `pastilla-lab.png` — the "Lab" pill alone
- **Color palette** — supplied by the client (see Visual Foundations → Color).
- **Brand guideline PDFs** (in `uploads/`): `Tipografía.pdf`, `Sistema gráfico.pdf`,
  `Web y papelería.pdf`, `Redes sociales.pdf`. These define the official type system,
  the graphic "caja de herramientas", the web/stationery layouts and the social
  templates — all reflected below.
- No codebase, Figma, or live site was provided. UI kits below are faithful brand
  recreations of the *type* of surfaces this business runs (shop website + IG-style
  social), built from the brand language — not copied from existing source.

> ✅ **Fonts are the official ones.** All five brand families (Archivo Black, Oswald,
> Space Grotesk, Newsreader, Space Mono) are free on Google Fonts and loaded directly
> via `tokens/fonts.css` — no substitution needed.

---

## Color

| Token | Hex | Name | Role |
|---|---|---|---|
| `--azul-chakill` | `#6CA0CF` | Azul Chakill | Primary accent, "Lab" pill, CTAs |
| `--azul-medio` | `#5E7CA6` | Azul Medio | Secondary blue, hovers |
| `--azul-tinta` | `#1E3653` | Azul Tinta | Ink — wordmark, headings, dark surfaces |
| `--azul-polvo` | `#BFD2E6` | Azul Polvo | Soft surfaces, fills |
| `--crema-hueso` | `#ECE6D6` | Crema Hueso | Warm page canvas |
| `--arena` | `#D9C0A0` | Arena | Warm sand accent |

The palette pairs **cool blues** (tech / lab / precision) with **warm neutrals**
(craft / handmade / decor). Cream is the default page background, not white.

## Typography — official system (from `Tipografía.pdf`)

Hierarchy rule: **Titular Archivo Black → acento Newsreader → bajada Oswald → cuerpo Space Grotesk.**

| Role | Family | Token | Use |
|---|---|---|---|
| Titular / Display | **Archivo Black** | `--font-display` | Headlines — pesado y ancho |
| Bajada / Etiquetas / Badges | **Oswald** | `--font-label` | Condensed labels, badges, subheads |
| Cuerpo / Subtítulos / Logo / Web | **Space Grotesk** | `--font-body` / `--font-ui` | Body, UI, the logotype |
| Acento (itálica) | **Newsreader** italic | `--font-accent` | Editorial accents ("actitud · accesible") |
| Códigos / SKU | **Space Mono** | `--font-mono` | Codes, SKUs, barcode labels |

See `tokens/typography.css`. Scale: 1.250 major third.

---

## CONTENT FUNDAMENTALS — voice & tone

- **Tagline:** **"ORDEN CON ACTITUD."** — the brand line (often set in Archivo Black,
  uppercase). The product promise: *"Piezas para ordenar y embellecer tu depa chico."*
- **Language:** Spanish (Peru / neutral LatAm). Confident and with *actitud* — a maker
  brand with a streetwear/"drop" edge, not a soft artisanal one.
- **Person:** "nosotros" (we) and **"tú"** (informal, never "usted").
- **Casing:** Two registers. **UPPERCASE** for headlines, stickers, badges and the
  tagline (Archivo Black / Oswald) — bold and graphic. **Sentence case** for body copy
  and UI labels ("Agregar al carrito", "Ver catálogo").
- **Tone:** Con actitud, directo, ordenado. Pride in craft + a drop/limited-edition
  feel ("NEW IN", "PIEZA DEL MES", "edición"). Targets small-apartment living
  ("espacios chicos", "depa chico").
- **Length:** Short and punchy. Headlines are 2–4 words ("NEW IN", "ORDEN CON ACTITUD",
  "ESPACIOS CHICOS"). Descriptions 1–2 sentences.
- **Emoji:** Sparingly, social captions only. The **✕** glyph is a brand graphic mark
  (separator / repeated-type), not a typed emoji.
- **Vocabulary cues:** orden, actitud, depa chico, espacios chicos, NEW IN, pieza del
  mes, edición, hecho a pedido, color a elección, impresión 3D.
- **Contact / handles:** `@CHAKILL.LAB` · `HOLA@CHAKILL.LAB` · Lima, Perú.
- **Examples:**
  - Hero: *"ORDEN CON ACTITUD. Piezas para ordenar y embellecer tu depa chico."*
  - CTA: *"Ver catálogo"*, *"Conoce más"*, *"Lo quiero"*, *"Personalizar"*
  - Social: *"NEW IN ✕ nueva pieza en el lab ¿de qué color la quieres?"*

---

## SISTEMA GRÁFICO — la caja de herramientas (from `Sistema gráfico.pdf`)

A set of graphic "tools" layered over the type + color system to give pieces *actitud*:

1. **Sticker** — rotated die-cut label (Oswald uppercase, cream outline). → `Sticker` component.
2. **Marca ✕** — the **✕** glyph as a recurring mark / separator.
3. **Badge** — Oswald uppercase pill (NEW IN, edición). → `Badge` component.
4. **Código de barras** — decorative barcode + Space Mono SKU ("CHK · LAB · 0042"). → `Barcode`.
5. **Tipo repetida** — scrolling repeated type ("NEW IN ✕ NEW IN ✕"). → `Marquee`.
6. **Contorno** — outline/stroke treatment of type and shapes.

Use 1–2 of these per layout — they are seasoning, not the whole plate.

---

## VISUAL FOUNDATIONS

**Color vibe.** Cool blues + warm sand/cream. Cream (`--crema-hueso`) is the default
canvas — warmer and softer than white. Ink blue anchors text and dark sections. Light
blue is the single "pop" accent and should stay special (CTAs, the Lab pill, active
states). Imagery skews warm and natural — products photographed on cream/wood/neutral
surfaces, soft daylight, gentle shadows; never cold or clinical.

**Type.** Geometric rounded sans throughout. Headlines are bold Poppins, tight
tracking. Body is Nunito Sans. Eyebrows/labels are uppercase Poppins-semibold with
wide tracking (`--tracking-caps`).

**Spacing & layout.** Generous, airy. 4px base scale. Comfortable padding on cards and
sections; products get room to breathe. Centered max-width containers on web.

**Backgrounds.** Mostly flat cream or white. Occasional soft powder-blue or sand
panels to section content. No loud gradients; at most a very soft cream→white wash.
No heavy textures (the products are the texture).

**Corner radii.** Soft and rounded — core to the brand (the wordmark is built on a
rounded pill). Cards `--radius-lg` (20px), buttons `--radius-pill` or `--radius-md`,
the signature "Lab"-style pill `--radius-pill`. Nothing sharp-cornered.

**Cards.** White or cream fill, very soft cool-tinted shadow (`--shadow-sm`/`md`),
optional 1px warm/cool hairline border. Rounded `--radius-lg`. Tactile, light, never
heavy or neon.

**Shadows.** Soft, low-contrast, cool-tinted (ink-blue alpha). Used for lift, not
drama. Inner highlight (`--shadow-inset`) optional on raised pills.

**Borders.** Hairline 1px. Cool `--border-subtle` on white; warm `--border-warm` on
cream. Strong ink border only for emphasis/outline buttons.

**Buttons.** Primary = light-blue (`--brand`) fill, white text, pill or md radius.
Secondary = ink outline or powder-blue fill. Ghost = text only.

**Hover.** Subtle. Fills darken toward `--azul-medio`; ghost/outline gain a faint
powder-blue tint. Slight lift on cards (shadow grows). ~120–220ms.

**Press.** Gentle scale-down (~0.97) and/or one step darker. No harsh flashes.

**Focus.** 3px light-blue ring (`--focus-ring`) with offset. Always visible.

**Motion.** Calm and soft. `--ease-out` for entrances, 120–380ms. Fades + small
translate/scale. No bouncing, no spinning, no aggressive parallax.

**Transparency / blur.** Light. Optional translucent cream/ink header on scroll with
a small backdrop blur. Used subtly, not as a glassmorphism theme.

---

## ICONOGRAPHY

- No proprietary icon set was provided. We use **Lucide** (CDN) — a clean, rounded,
  even-stroke (1.75–2px) line-icon family that matches the geometric-rounded brand.
  Linked from CDN in cards/kits; documented here so it's swappable.
- Style rules: line icons only, ~2px stroke, rounded caps/joins, ink (`--text-strong`)
  or muted (`--text-muted`) color, never multicolor or filled-glyph.
- The **"C." isotype** (`assets/logos/isotipo-mono.png` / `-appicon.png`) is the brand
  glyph — used as favicon, app icon, avatar, and loading mark. Don't substitute icons
  for it.
- **Emoji:** only in social-caption contexts, never as functional UI icons.
- **Unicode glyphs:** avoided as icons; use Lucide instead.

---

## INDEX / manifest

**Root**
- `styles.css` — entry point (consumers link this). `@import`s the token files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/logos/` — all brand lockups & isotypes (see Sources).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**Foundation cards** (`guidelines/` — populate the Design System tab): color, type,
spacing, radii, shadows, logo specimens.

**Components** (`components/` — namespace `window.ChakillLabDesignSystem_a2a62e`):
- `core/` — Button, Badge, Card, Input, Pill
- `brand/` — Sticker, Barcode, Marquee (the "caja de herramientas")
- See each `*.prompt.md` for usage.

**UI kits** (`ui_kits/`):
- `shop/` — Chakill Lab shop website (home, collection, product).

---

*Bundle namespace:* `ChakillLabDesignSystem_a2a62e`
