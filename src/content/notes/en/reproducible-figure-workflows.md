---
lang: "en"
slugKey: "reproducible-figure-workflows"
title: "Why Separate Analysis Code and Figure Galleries in Neuroimaging & sEEG Projects"
date: "2026-11-20"
readingTime: 4
tags:
  - "Reproducibility"
  - "Neuroimaging"
  - "Workflow"
summary: "Notes on keeping research repositories lean while still sharing hundreds of browsable, high-resolution analysis figures via static GitHub Pages galleries."
---

When a neuroimaging or intracranial electrophysiology study grows beyond a handful of exploratory plots, keeping raw rendered PNGs inside the main analysis GitHub repository quickly becomes painful: Git history bloats, code diffs get noisy, and collaborators still have to download folders locally just to compare across regions, frequency bands, or smoothing kernels.

## A Lightweight Two-Repository Pattern

Across recent projects (`seeg_navigation` + `seeg-navigation-figure-gallery`, and `neural-pleiotropy-figure-gallery`), separating **reproducible computation** from **static visual browsing** has worked cleanly:

1. **Code & Manifest Repository**: Holds versioned plotting scripts, Conda environment specs, data manifests, and source code hashes—no large binary figure dumps.
2. **Static Figure Gallery Repository**: Mirrors the `figures/` tree into a lightweight static site hosted on GitHub Pages, complete with folder breadcrumbs, inferred tag filters, and click-to-enlarge comparison.

```text
project_root/
├── codes/              # Versioned analysis & plotting scripts
├── data_manifest.md    # Explicit input provenance
└── figures/            # Synced selectively to the public static gallery
```

## Practical Safeguards Before Publishing

- Verify that no participant identifiers, clinical metadata, or protected paths appear in filenames, axes, or annotations.
- Keep statistical reporting conventions and reproduction limits documented alongside each snapshot.
- Treat figure galleries as a complement to—not a replacement for—self-contained plotting scripts and pinned dependencies.

---

*This is a starter research note written in Markdown. Add new `.md` files under `src/content/notes/en/` and `src/content/notes/zh/` to publish updates automatically.*
