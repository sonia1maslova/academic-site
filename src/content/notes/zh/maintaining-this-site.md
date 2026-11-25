---
lang: "zh"
slugKey: "maintaining-this-site"
title: "如何用 Markdown 与 GitHub 维护你的双语学术主页"
date: "2026-11-25"
readingTime: 3
tags:
  - "使用指南"
  - "Astro"
  - "GitHub Pages"
summary: "简明维护手册：如何修改个人简介、添加新论文/项目/笔记，以及通过 git push 自动更新线上网站。"
---

本网站基于 **Astro** 构建，并已配置 **GitHub Actions** 自动部署：每次向 `main` 分支推送代码时，线上页面都会自动更新。日常维护几乎不需要改动页面布局代码，只需编辑对应的数据或 Markdown 文件：

| 需要更新的内容 | 对应文件路径 |
| --- | --- |
| 个人简介、所在院校、社交链接、头像与简历 PDF | `src/data/profile.ts` |
| 首页最新动态（News & Updates） | `src/data/news.ts` |
| 教育背景、科研经历、荣誉奖项与技术栈 | `src/data/experience.ts` |
| 论文、预印本与会议报告（每篇一个文件） | `src/content/publications/*.md` |
| 科研项目与开源仓库（每个项目一个文件） | `src/content/projects/*.md` |
| 科研笔记与随笔（中英文分别存放） | `src/content/notes/zh/*.md` 与 `src/content/notes/en/*.md` |

## 发布更新流程

本地修改完成后，可运行 `npm run dev` 实时预览，确认无误后直接推送到 GitHub：

```bash
git add .
git commit -m "Update publications and bio"
git push
```

GitHub Actions 会在约 1 分钟内完成类型检查、静态构建与 GitHub Pages 自动发布。熟悉流程并替换占位内容后，你可以删除这篇指南笔记，并在 `src/data/profile.ts` 中把 `showTemplateBanner` 设为 `false`。
