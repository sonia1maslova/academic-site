# Academic Personal Website (`academic-site`)

A minimalist, bilingual (**English / 中文**) academic homepage built with **Astro** and **Tailwind CSS**, automatically built and published to **GitHub Pages** via GitHub Actions.

- **Live URL**: <https://sonia1maslova.github.io/academic-site/>
- **Repository**: <https://github.com/sonia1maslova/academic-site>

## Features

- **Bilingual routes**: English at `/` and Chinese at `/zh/`, with 1-click locale switching that preserves your current page.
- **Minimalist editorial design**: Academic serif display typography, clean sans-serif reading body, light/dark mode toggle, and print-ready CV layout.
- **Markdown-first content management**: Add publications, research projects, or notes by creating `.md` files with YAML frontmatter.
- **Interactive academic utilities**: Publication category filtering, expandable abstracts, 1-click BibTeX copy, and project category filtering.
- **Zero-touch GitHub Pages CI/CD**: Every push to `main` automatically runs `astro check && astro build` and deploys via `.github/workflows/deploy.yml`.

## Content Maintenance Guide / 日常内容更新指南

| Content / 内容 | File Path / 文件路径 |
| --- | --- |
| Bio, name, affiliation, links, avatar, CV PDF / 个人简介、头像与简历 | `src/data/profile.ts` |
| Interactive draggable timeline milestones / 交互式时间轴节点 | `src/data/timeline.ts` |
| Education, experience, honors, service, skills / 教育与科研履历 | `src/data/experience.ts` |
| Publications (1 Markdown file per paper) / 论文与成果 | `src/content/publications/*.md` |
| Research projects & open-source repos / 科研项目与开源工具 | `src/content/projects/*.md` |
| Research notes (EN & ZH Markdown) / 科研笔记 | `src/content/notes/en/*.md` & `src/content/notes/zh/*.md` |
| Static assets (avatar photo, CV PDF) / 头像与简历文件 | `public/avatar.jpg`, `public/cv.pdf` |

### Quick Personalization Checklist / 首次个性化清单

1. Edit `src/data/profile.ts` to fill in your Chinese name, institution/lab, location, optional Google Scholar / ORCID URLs, and set `showTemplateBanner: false` once done.
2. Optionally drop your headshot at `public/avatar.jpg` and set `avatarPath: '/avatar.jpg'`, and your CV PDF at `public/cv.pdf` with `cvPdfPath: '/cv.pdf'`.
3. Update `src/data/experience.ts` with your real education, research timeline, and honors.
4. Replace the `*-template.md` entries in `src/content/publications/` with your real papers, preprints, or conference abstracts.

## Local Development / 本地开发与发布

```bash
# Install dependencies
npm install

# Start local dev server (hot reload)
npm run dev

# Run TypeScript/Astro check + production build
npm run build

# Preview production build locally
npm run preview
```

To publish updates online:

```bash
git add .
git commit -m "Update research content"
git push
```

## Optional: Switching to Root Domain or Custom Domain Later

If you later rename this repository to `sonia1maslova.github.io` or attach a custom domain:

1. Open `astro.config.mjs`.
2. Update `site` to your domain and change `base: '/academic-site'` to `base: '/'`.
3. Commit and push — all internal links and assets adapt automatically via `withBase()`.
