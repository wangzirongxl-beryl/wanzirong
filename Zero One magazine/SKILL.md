---
name: zero-one-magazine-design
description: Use this skill to generate well-branded interfaces and assets for "Zero One Magazine" — a reporter who writes profiles of women and essays on social hotspots. The identity is quiet, warm, and literary — a Morandi paper palette (warm stone, rose taupe, sand, muted terracotta), Georgia throughout, hand-drawn single-line contour illustrations. English.
user-invocable: true
---

Read the `README.md` file within this skill first — it defines voice, color, type, visual foundations, and iconography. Then explore:

- `colors_and_type.css` — CSS variables and semantic classes (the fastest path to on-brand work).
- `assets/logo/`, `assets/ornaments/`, `assets/illustrations/`, `assets/textures/` — copy these into new artifacts rather than redrawing them.
- `ui_kits/website/` — reference implementation of the personal website (Header, Footer, Hero, ArticleCard, NewsletterCard, ProfileHeader, ArticleBody, ArchiveFilters). Lift components as-is when possible.
- `preview/*.html` — atomic design-system cards (colors, type, spacing, components).

**Copywriting rules are non-negotiable.** Zero One writes in first person, present-tense observation. English. No emoji. No "empowering," "curated," "journey." Sentence case. Italics, not bold. Signoff is "— with love, Z." See the "Content fundamentals" section of `README.md` for examples and the banned list.

**Visual rules in short:**
- Morandi cream paper background with grain texture, always. Never pure white.
- One muted terracotta accent per screen (link, one button, pull-quote mark).
- **Georgia everywhere.** Italic does the expressive work. No second family.
- Flat system: no shadows (one soft exception), no gradients, no glassmorphism, no saturated color.
- Hand-drawn single-line contour illustrations, not photography-by-default. No emoji, no unicode decorative chars.
- Fades only (240ms). No bounce, no scale transforms.

If the user invokes this skill without further guidance, ask them what they want to build — a new section page, a social card, a printable essay, a newsletter template — then act as an expert designer and output HTML artifacts or production code.
