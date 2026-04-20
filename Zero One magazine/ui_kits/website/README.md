# Website UI Kit — Zero One

Interactive prototype of Zero One's personal website for *Her* magazine.

## Run
Open `index.html`. Stateful (router, language, subscribed state) is held in React state; route + language persist to `localStorage` under `zo-nav`.

## Screens
- **Home** — hero, featured + recent articles, newsletter card
- **Archive** — filterable list (all / profiles / essays / interviews)
- **Article page** — essay layout with lede, drop-cap, pull quotes, asterism dividers
- **Profile page** — portrait + name + dek header followed by article body
- **About** — short, personal

## Components
| File | Exports |
|---|---|
| `Header.jsx` | `Header` — sticky nav, EN/中 toggle |
| `Footer.jsx` | `Footer` — columns + asterism signoff |
| `Hero.jsx` | `Hero` — home hero, illustrated |
| `ArticleCard.jsx` | `ArticleCard` — default + `featured` variants |
| `NewsletterCard.jsx` | `NewsletterCard` — pill button + letter ornament |
| `ProfileHeader.jsx` | `ProfileHeader` — portrait + blurb |
| `ArticleBody.jsx` | `ArticleBody` — prose + pullquotes + ornament dividers |
| `ArchiveFilters.jsx` | `ArchiveFilters`, `window.ARTICLES` — sample data |

## Interactions
- Click any article card → opens the piece.
- EN · 中 toggle in header → switches all copy + typefaces live.
- Filter tags on Archive → live filter.
- Subscribe form → shows "thank you — Z" / "谢谢你 — 零一".

## Notes
- Bodies of the last four sample articles are stubs — only the first two have full prose.
- All illustrations are the house-style placeholders from `assets/illustrations/`.
