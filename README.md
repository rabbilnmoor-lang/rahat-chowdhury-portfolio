# Mohammad Abul Rahat Chowdhury — Professional Portfolio

A clean, fast, executive-style portfolio website built with **Astro** and **Tailwind CSS**.
It is a **static site** — completely free to host on **GitHub Pages**. No database, no paid services.

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Fonts:** Inter + Fraunces (self-hosted, no external calls)
- **Hosting:** GitHub Pages (free), deployed automatically by GitHub Actions

---

## 1. What you need first (one-time)

1. Install **Node.js** (version 18 or 20) → https://nodejs.org (choose the "LTS" version).
2. Install **Git** → https://git-scm.com
3. A free **GitHub** account → https://github.com

You do **not** need to be a developer. You will mostly edit simple text files.

---

## 2. Run the website on your own computer

Open a terminal / command prompt **in this project folder** and run:

```bash
npm install      # download the tools (only needed the first time)
npm run dev      # start a local preview
```

Then open the address it prints (usually **http://localhost:4321**) in your browser.
The site updates automatically as you edit files. Press `Ctrl + C` to stop.

---

## 3. Where your information lives (this is the important part)

**All of your content is in one folder: `src/data/`.** You can update the website
without touching the design.

| File | What it controls |
|------|------------------|
| `src/data/site.ts` | Your name, role, email, LinkedIn, the homepage **metrics**, SEO description, and the website URL |
| `src/data/about.ts` | The About text, the four "How I Work" pillars, your **career timeline**, and education |
| `src/data/projects.ts` | Every **project case study** (title, metrics, role, what you did, outcome, skills) |
| `src/data/expertise.ts` | The **expertise matrix**, the **tools** list, and the **cover letter** text |

To change wording, open the file in any text editor (even Notepad), edit the text
between the quotation marks `"..."`, and save. The preview updates instantly.

> Tip: keep the quotes, commas and brackets exactly as they are — only change the words inside the quotes.

---

## 4. How to add a new project

1. Open `src/data/projects.ts`.
2. Copy one existing project block (from `{` to `},`) and paste it as a new block in the list.
3. Change the fields:
   - `slug`: a short web-friendly name, lowercase with dashes (e.g. `"new-venture-study"`). This becomes the page address.
   - `title`, `short`, `category`, `metrics`, `tags`, `overview`, `challenge`, `role`, `whatIDid`, `execution`, `outcome`, `skills`, and an optional `note`.
   - Set `featured: true` if you want it on the homepage (keep this to ~3 projects).
4. Save. A new page is created automatically at `/projects/your-slug/`.

---

## 5. How to update your CV or Cover Letter (the download files)

The downloadable PDFs live in the `public/` folder:

- **CV:** `public/cv/Mohammad-Abul-Rahat-Chowdhury-CV.pdf`
- **Cover letter:** `public/cover-letter/Mohammad-Abul-Rahat-Chowdhury-Cover-Letter.pdf`

To update, simply **replace these PDF files with your new versions, keeping the same file names**.
If you change a file name, update it in `src/data/site.ts` (the `cv` and `coverLetter` lines).

---

## 6. How to replace images / favicon

- **Favicon / logo:** `public/favicon.svg`
- **Social share image** (shown when the link is posted on LinkedIn/WhatsApp): `public/og-image.svg`

Replace these files (keep the same names) or point to new ones in `src/layouts/Base.astro`.

---

## 7. How to build the final site

```bash
npm run build      # creates the finished website in the "dist" folder
npm run preview    # (optional) preview the finished build locally
```

You normally don't need this locally — GitHub builds it for you (next step).

---

## 8. How to deploy to GitHub Pages (free) — step by step

**A. Create the repository**

The simplest setup is a **user site**:

1. On GitHub, click **New repository**.
2. Name it **exactly** `YOUR-USERNAME.github.io` (replace with your GitHub username).
3. Leave it public. Create it.

**B. Tell the site its address**

1. Open `astro.config.mjs`.
2. Change `SITE` to `https://YOUR-USERNAME.github.io`.
3. Leave `BASE` as `'/'`.
4. In `public/robots.txt`, replace `USERNAME` with your username.

**C. Upload the project**

In the terminal, in this folder:

```bash
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

**D. Turn on Pages**

1. On GitHub, open your repository → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Done. Every time you push changes, the site rebuilds and deploys automatically
   (watch progress under the **Actions** tab). Your site will be live at
   **https://YOUR-USERNAME.github.io**.

**If you prefer a project repo instead** (e.g. `github.com/you/portfolio` →
`you.github.io/portfolio`): name the repo `portfolio`, and in `astro.config.mjs`
set `BASE = '/portfolio/'` (keep the slashes). Everything else is the same.

---

## 9. Making changes later

```bash
git add .
git commit -m "Update projects"
git push
```

That's it — GitHub rebuilds and republishes automatically in a minute or two.

---

## 10. Project structure (for reference)

```
portfolio/
├─ public/                 # files served as-is (PDFs, favicon, robots.txt)
│  ├─ cv/                   # your CV PDF
│  └─ cover-letter/         # your cover-letter PDF
├─ src/
│  ├─ data/                 # ← YOUR CONTENT lives here (edit these)
│  ├─ components/           # reusable pieces (cards, timeline, nav, footer)
│  ├─ layouts/              # the page shell + SEO
│  ├─ pages/                # the actual pages and project route
│  └─ styles/global.css     # colours, fonts, buttons
├─ astro.config.mjs         # site URL + base path
├─ tailwind.config.mjs      # colour palette + fonts
└─ .github/workflows/       # auto-deploy to GitHub Pages
```

---

## Notes on accuracy

All content is drawn from the provided CV and Career Master File. Metrics are presented
as documented project/career outcomes, ongoing projects (Sitakunda ICD/CFS) are clearly
labelled as ongoing with **projected** (not realised) figures, and no confidential
information is included. References are intentionally not published on the public site.
