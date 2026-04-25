# Deploying to the root of your GitHub Pages site

Goal: make the magazine appear at
`https://wangzirongxl-beryl.github.io/wanzirong/`
instead of buried at `/wanzirong/Zero One magazine/ui_kits/website/`.

## What's in this folder

Everything is flat and self-contained — every file the site needs lives next to
`index.html`. There are **no `../../` paths**, so it works no matter where you
drop it.

```
index.html              ← the homepage
site.css
colors_and_type.css
articles.js
*.jsx                   ← React components
assets/
  illustrations/
  logo/
  ornaments/
  textures/
```

## How to deploy (3 options)

### Option 1 — GitHub web UI (easiest, no terminal)

1. Open your repo: <https://github.com/wangzirongxl-beryl/wanzirong>
2. For each file in this folder, click **Add file → Upload files** at the
   repo's root and drag it in. Keep the folder structure intact (`assets/…`
   stays under `assets/`).
3. Commit to your default branch (usually `main`).
4. GitHub Pages will rebuild in ~1 min. Visit
   `https://wangzirongxl-beryl.github.io/wanzirong/` — the magazine should be
   the homepage.

> Tip: if your repo already has a root `index.html` (e.g. a default README
> page), uploading this `index.html` will replace it. That is what you want.
> Anything else already at the root (like the old `Zero One magazine/`
> folder) can stay — it just won't be visited anymore.

### Option 2 — Drag-and-drop in GitHub Desktop

1. Clone the `wanzirong` repo with GitHub Desktop.
2. Open the repo folder in Finder/Explorer.
3. Copy everything from this `flat-export/` folder into the repo root.
   Overwrite when prompted.
4. Commit → push.

### Option 3 — Command line

```bash
git clone https://github.com/wangzirongxl-beryl/wanzirong.git
cd wanzirong

# copy the contents of flat-export/ into the repo root
cp -R /path/to/flat-export/. .

git add .
git commit -m "Move magazine site to repo root"
git push
```

## Cleaning up the old location (optional)

The old folder `Zero One magazine/ui_kits/website/` will keep working at its
old URL until you delete it. If you want a single canonical home, delete
that folder in the same commit, or set up a redirect:

Create `Zero One magazine/ui_kits/website/index.html` with just:

```html
<!doctype html>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=/wanzirong/">
<link rel="canonical" href="/wanzirong/">
<title>Redirecting…</title>
```

Visitors hitting the old URL will be bounced to the new one.

## Troubleshooting

- **Page is blank / 404 on assets** → check that the `assets/` folder is at
  the same level as `index.html` in your repo, not nested inside another
  folder.
- **Fonts look wrong** → the site uses Google Fonts (Noto Serif SC) plus
  Georgia from the system stack. Both load over the network; make sure
  you're online when testing.
- **Changes don't show up** → GitHub Pages caches aggressively. Hard-reload
  (Cmd/Ctrl + Shift + R) or wait a couple minutes.
