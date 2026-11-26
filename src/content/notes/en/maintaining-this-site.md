---
lang: "en"
slugKey: "maintaining-this-site"
title: "How to Maintain This Bilingual Academic Website"
date: "2026-11-25"
readingTime: 3
tags:
  - "Guide"
  - "Astro"
  - "GitHub Pages"
summary: "A quick reference for updating your bio, adding new publications or projects, and deploying automatically with git push."
---

This website is built with **Astro** and deployed automatically via **GitHub Actions** whenever changes are pushed to the `main` branch. Day-to-day updates require editing only clean data files and Markdown documents:

| What to update | File location |
| --- | --- |
| Bio, affiliation, links, avatar & CV PDF | `src/data/profile.ts` |
| Interactive draggable timeline milestones | `src/data/timeline.ts` |
| Education, research experience, honors & skills | `src/data/experience.ts` |
| Papers, preprints & conference abstracts | `src/content/publications/*.md` |
| Open-source projects & research tools | `src/content/projects/*.md` |
| Research notes & essays | `src/content/notes/en/*.md` and `src/content/notes/zh/*.md` |

## Publishing Updates

Once you finish editing locally, preview with `npm run dev`, then commit and push to GitHub:

```bash
git add .
git commit -m "Update publications and bio"
git push
```

GitHub Actions will type-check, build the static site, and refresh GitHub Pages within about a minute. Once you are familiar with the workflow, you can delete this starter note and set `showTemplateBanner: false` in `src/data/profile.ts`.
