# Zero One Magazine

> A personal column — on women, on the moments that matter.

**Zero One Magazine** is the byline of a reporter who writes two kinds of stories: **profiles of notable women** and **essays on social hotspots**. This design system powers her personal website — an index of her work, a place for readers to subscribe, and a quiet room where her voice lives outside the masthead.

The identity is **quiet, warm, and literary** — a **Morandi paper palette** (warm stone, rose taupe, sand, muted terracotta), Georgia throughout, hand-drawn single-line contour illustrations, and a generous reading measure. English-language.

## Brand at a glance

| | |
|---|---|
| **Name** | Zero One Magazine |
| **Signoff** | Z. |
| **Beats** | Profiles of notable women · Social hotspots & culture |
| **Voice** | Warm, observant, first-person, unhurried |
| **Aesthetic** | Morandi · editorial · hand-drawn · literary |
| **Palette** | Paper cream, warm stone, rose taupe, sand, muted terracotta accent |
| **Type** | **Georgia** throughout — italic carries the expressive work |
| **Language** | English |

## Content fundamentals

### Voice
Zero One writes in **first person, present-tense observation**. She is a reporter who notices: the way a subject folds her hands, the temperature of a waiting room, the name of the song playing in the elevator. She is not clinical. She is not breathless. She is **present**.

- **"I" is used freely.** Readers come for her.
- **"You" is used with care** — usually in an essay, rarely in a profile. Never as marketing copy.
- **No jargon.** No "curated." No "empowering." No "journey."
- **Short sentences next to long ones.** Rhythm matters. She reads her drafts aloud.
- **No emoji.** Punctuation does the work: em-dashes, ellipses, the occasional semicolon.

### Tone examples
> **Profile lede:** "Liu Yuling answers the door barefoot. It is nine a.m. on a Tuesday in late March, and she has already written for three hours."
> **Essay opener:** "We keep asking what women want. The better question is what they've already decided."
> **About:** "I write about women. This site is where the rest lives — the outtakes, the longer thoughts, the names I keep coming back to."
> **Newsletter CTA:** "A letter, once a month. No roundups. Just one story."
> **Signoff:** "— with love, Z."

### Casing & mechanics
- **Sentence case** for almost everything.
- **Numerals** spelled out under ten in body text.
- **Italics** for emphasis and publication names. Georgia's italic is the voice of the brand — use it for headlines, dek, signatures, eyebrows.
- **Never bold in body.**
- **Dates** written out: "March 12, 2026".
- **Byline:** "by Z." or "Zero One Magazine"

### The banned list
Empowering, curated, elevated, iconic, bold, fierce, unapologetic · "In conversation with" · "A deep dive," "unpacking," "we need to talk about" · Emoji · Exclamation marks outside of dialogue.

## Visual foundations

### Colors — Morandi paper palette
Everything sits on cream, not white. Muted, dusty, lifted-from-oil-paint. A **single muted terracotta** is the accent — used once per screen, for one thing that matters.

**Neutrals**
- `--paper` #F1ECE4 · canvas
- `--cream` #F6F1E9 · raised surfaces
- `--sand-2` #D9D1C3 · subtle fills
- `--sand` #C8BFB2 · dividers
- `--clay` #A89A8C · metadata
- `--ink-3` #8A8378, `--ink-2` #6E6A62, `--ink` #4E4A44 · warm graphite text

**Morandi accents** (use sparingly, never more than one per surface)
- `--rose-taupe` #B9A89A · signature muted pink-brown
- `--dusty-rose` #C9A89E
- `--terracotta` #B48068 · the accent — links, pull-quote marks, primary button
- `--sage` #A8B0A0 · cool counterpoint
- `--powder-blue` #9AA6AC · the one cool note

No pure black, no pure white. No saturated color.

### Typography — Georgia, everywhere
**One family.** Georgia is universal, warm-toned, and has an expressive italic that does the heavy lifting. Three styles is enough:

- **Georgia Italic** — titles, dek, eyebrows, signatures, signoffs. The voice of the brand.
- **Georgia Regular** — body prose at 17px / 1.78 line-height.
- **Georgia Bold** — small meta labels only (rare).

No second family, no sans fallback for chrome, no webfont loading. Use monospace (`ui-monospace`) only for code.

**Scale:** 12 · 14 · 16 · 17 · 18 · 22 · 28 · 36 · 48 · 64 · 84.
**Reading measure:** 640px. **Body leading:** 1.78. **Tracking on eyebrows:** `0.22em` uppercase.

### Spacing & rhythm
8px baseline. Tokens: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Layout breathes — especially on article pages where text sits in a 640px measure flanked by whitespace.

### Backgrounds
- **Paper grain is always on** — subtle cream noise PNG on body, tiling.
- **No gradients. No glassmorphism. No photo hero backdrops.**
- **Full-bleed imagery is rare.** When used, a single illustration centered with generous margins.

### Imagery — single-line contour
**Editorial illustration in the vein of magazine interstitials.** Single-line contour drawings of women — portraits, hands, still lifes — in warm graphite ink on cream, with occasional Morandi color fills (rose taupe, sage, terracotta). Faces are suggested, not rendered. Eyes are a single dot. Subjects in quiet moments: reading, writing, looking out.

**Decorative ornaments** — small hand-drawn signs (leaf, sun, folded ribbon, asterism, wave, letter) used as section dividers and pull-quote markers. Drawn in terracotta on cream.

### Animation
- **Fades only.** 240ms ease-out.
- No bounces, no spring physics.
- **Links:** 1px terracotta underline grows from left to right in 240ms.
- **Cards:** border warms from Sand to Clay on hover; a small italic "→" appears at top-right.
- **Press:** 80ms opacity to 0.85. No scale transforms.

### Borders, radii, shadows
- **Radii:** 2px inputs · 4px cards · 999px for the **one** pill button (newsletter signup).
- **Borders:** 1px Sand on cards, 1px Clay on focused inputs.
- **Shadows:** essentially absent. One exception — a soft `0 1px 2px rgba(78,74,68,0.05)` on the floating newsletter card.

### Layout
Max content 1200px · article measure 640px · gutter 32px desktop / 20px mobile · header 84px sticky cream.

## Iconography
- **Hand-drawn SVG ornaments** in `assets/ornaments/` (leaf, sun, ribbon, asterism, wave, letter) — the "signs" scattered through the site.
- **No emoji, ever.** No unicode decorative characters (★ ♡ ✿).
- **Line arrows** (→, ←) rendered as Georgia italic glyphs — part of the voice.

## Logo
Georgia italic wordmark "Zero One" with "Magazine" eyebrow underneath in small-caps italic. Monogram is a rose-taupe ring framing a terracotta `Z.`

## File index
```
README.md                      — this file
SKILL.md                       — skill manifest
colors_and_type.css            — CSS tokens + semantic classes (Morandi · Georgia)
assets/
  logo/                        — wordmark + monogram
  ornaments/                   — leaf, sun, ribbon, asterism, wave, letter
  illustrations/               — single-line contour illustrations
  textures/                    — paper grain
preview/                       — design system cards
ui_kits/website/               — the personal website UI kit
```

## Caveats
- **Author's own illustrations not provided.** All artwork is system-drawn in the house style; swap in real work when available.
- **No dark mode.** The brand is rooted in paper.
