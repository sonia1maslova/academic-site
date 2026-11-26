import type { BilingualText } from '../i18n/ui';

export type TimelineCategory =
  | 'education'
  | 'research'
  | 'software'
  | 'publication'
  | 'milestone';

export interface TimelineLink {
  label: BilingualText;
  href: string;
  external?: boolean;
}

export interface TimelineNode {
  /** Unique identifier for deep-linking or DOM tracking. */
  id: string;
  /** Sortable ISO date string (YYYY-MM or YYYY-MM-DD). */
  date: string;
  /** Short date shown on the timeline rail and focus badge. */
  shortDate: string;
  /** Full localized date shown in the detail panel. */
  displayDate: BilingualText;
  year: number;
  category: TimelineCategory;
  title: BilingualText;
  subtitle?: BilingualText;
  summary: BilingualText;
  details: {
    en: string[];
    zh: string[];
  };
  tags: string[];
  links?: TimelineLink[];
  /** Mark placeholder entries so they are easy to spot and replace. */
  isTemplate?: boolean;
}

/**
 * Chronological nodes for the interactive draggable timeline.
 * Add new milestones here in any order — the component sorts them chronologically.
 */
export const timelineNodes: TimelineNode[] = [
  {
    id: 'undergrad-milestone',
    date: '2022-06',
    shortDate: '2022 · 06',
    displayDate: { en: 'June 2022', zh: '2022 年 6 月' },
    year: 2022,
    category: 'education',
    title: {
      en: 'B.S. Thesis & Foundations in Quantitative Neuroscience',
      zh: '本科毕业论文与定量神经科学基础（示例占位）',
    },
    subtitle: {
      en: '[Undergraduate University — edit in src/data/timeline.ts]',
      zh: '[本科院校名称 — 可在 src/data/timeline.ts 修改]',
    },
    summary: {
      en: 'Completed undergraduate training in experimental psychology, statistical modeling, and scientific programming—laying the foundation for later neuroimaging and electrophysiology work.',
      zh: '完成实验心理学、统计建模与科学计算基础训练及本科毕业论文研究，为后续脑影像与神经电生理研究打下基础。',
    },
    details: {
      en: [
        'Replace this template node with your actual undergraduate degree, thesis topic, or key early milestone.',
        'You can add as many nodes per year as you like—the horizontal timeline automatically scales and groups years.',
      ],
      zh: [
        '请将本示例节点替换为你的真实本科经历、毕业论文主题或早期重要科研节点。',
        '同一年份内可以任意添加多个节点，时间轴会自动按时间排序并生成年份标记。',
      ],
    },
    tags: ['Education', 'Statistics', 'Foundations'],
    isTemplate: true,
  },
  {
    id: 'grad-research-start',
    date: '2024-09',
    shortDate: '2024 · 09',
    displayDate: { en: 'September 2024', zh: '2024 年 9 月' },
    year: 2024,
    category: 'education',
    title: {
      en: 'Started Graduate Research in Brain Networks & Electrophysiology',
      zh: '进入认知与计算神经科学研究生阶段（示例占位）',
    },
    subtitle: {
      en: '[Department / Lab Name]',
      zh: '[所在院系 / 课题组名称]',
    },
    summary: {
      en: 'Began systematic research on individual-level functional brain networks, resting-state fMRI methodology, and human intracranial electrophysiology.',
      zh: '开始系统开展个体化脑功能网络提取、静息态 fMRI 方法学及人类颅内电生理动力学研究。',
    },
    details: {
      en: [
        'Defined core research directions spanning resting-state fMRI network extraction and intracranial sEEG dynamics.',
        'Established reproducible Python/Conda workflows and structured statistical notes for day-to-day research.',
      ],
      zh: [
        '确立围绕个体脑网络拓扑、神经多效性与人类 sEEG 空间导航的核心研究方向。',
        '搭建标准化 Python/Conda 可复现科研分析流程与定量方法知识库。',
      ],
    },
    tags: ['Graduate Research', 'fMRI', 'sEEG'],
    isTemplate: true,
  },
  {
    id: 'conference-poster-template',
    date: '2025-06',
    shortDate: '2025 · 06',
    displayDate: { en: 'June 2025', zh: '2025 年 6 月' },
    year: 2025,
    category: 'publication',
    title: {
      en: 'Conference Presentation on Reproducible Network Workflows',
      zh: '学术会议报告 / 墙报展示（示例占位）',
    },
    subtitle: {
      en: '[Conference Name, e.g. OHBM / SfN / CNS]',
      zh: '[学术会议名称，例如 OHBM / SfN / 国内神经科学年会]',
    },
    summary: {
      en: 'Template node for academic talks, conference posters, or paper milestones. Replace with your real presentation title, conference location, and slides/poster URL.',
      zh: '用于记录学术会议口头报告、墙报展示或论文录用节点的示例条目，可附加幻灯片、海报或论文链接。',
    },
    details: {
      en: [
        'Presented methodological comparisons for template-guided individual brain network extraction.',
        'Shared open-source validation scripts and interactive figure inspection utilities with peers.',
      ],
      zh: [
        '展示模板引导个体脑网络提取与可视化验证工作流。',
        '与同行交流开源分析脚本及可复现图表审查经验。',
      ],
    },
    tags: ['Conference', 'Open Science', 'Neuroimaging'],
    isTemplate: true,
  },
  {
    id: 'neural-pleiotropy-gallery',
    date: '2026-09-24',
    shortDate: '2026 · 09',
    displayDate: { en: 'September 24, 2026', zh: '2026 年 9 月 24 日' },
    year: 2026,
    category: 'research',
    title: {
      en: 'Launched Public Neural Pleiotropy Figure Gallery',
      zh: '上线神经多效性研究公开在线图表画廊',
    },
    subtitle: {
      en: 'GitHub Pages · neural-pleiotropy-figure-gallery',
      zh: 'GitHub Pages · neural-pleiotropy-figure-gallery',
    },
    summary: {
      en: 'Built and deployed a static hierarchical figure browser for inspecting large-scale neural pleiotropy neuroimaging analysis outputs directly in the browser.',
      zh: '构建并部署面向神经多效性（Neural Pleiotropy）脑影像分析结果目录树的静态在线图表画廊，方便跨目录与多条件快速审阅。',
    },
    details: {
      en: [
        'Mirrors the analysis `figures/` tree into a searchable static web index (`gallery_index.json`) with zero backend dependency.',
        'Supports multi-level folder breadcrumbs, inferred tag filters, scoped search, pagination, and click-to-enlarge lightbox inspection.',
      ],
      zh: [
        '自动映射研究目录树生成可检索静态索引（`gallery_index.json`），零后端托管于 GitHub Pages。',
        '支持多级目录导航、自动标签筛选、子目录/全局范围检索、分页浏览与高清大图切换对比。',
      ],
    },
    tags: ['Neural Pleiotropy', 'Figure Gallery', 'Open Science'],
    links: [
      {
        label: { en: 'Online Gallery', zh: '浏览画廊' },
        href: 'https://sonia1maslova.github.io/neural-pleiotropy-figure-gallery/',
        external: true,
      },
      {
        label: { en: 'GitHub Repo', zh: 'GitHub 仓库' },
        href: 'https://github.com/sonia1maslova/neural-pleiotropy-figure-gallery',
        external: true,
      },
    ],
  },
  {
    id: 'interactive-wordcloud-launch',
    date: '2026-10-01',
    shortDate: '2026 · 10',
    displayDate: { en: 'October 1, 2026', zh: '2026 年 10 月 1 日' },
    year: 2026,
    category: 'software',
    title: {
      en: 'Released Interactive Word Cloud Lab',
      zh: '发布纯前端交互式科研词云工具 Interactive Word Cloud Lab',
    },
    subtitle: {
      en: 'Web Visualization Utility · interactive-wordcloud',
      zh: 'Web 可视化工具 · interactive-wordcloud',
    },
    summary: {
      en: 'Published a zero-build browser tool for crafting publication-ready research term clouds weighted by effect size, with draggable layout editing and transparent PNG export.',
      zh: '上线零构建纯前端交互式词云编辑器，面向科研术语与效应量可视化，支持手动拖拽布局、自定义遮罩与透明底高清 PNG 导出。',
    },
    details: {
      en: [
        'Imports JSON, TSV, CSV, or TXT term-weight lists and scales typography by effect size or custom weight.',
        'Supports built-in geometric masks and custom transparent PNG/SVG masks, per-layer alpha controls, and reusable JSON layout snapshots.',
      ],
      zh: [
        '支持导入 JSON/TSV/CSV/TXT 词权数据，按效应量精准控制字号。',
        '支持内置几何遮罩与自定义透明 PNG/SVG 遮罩、分层不透明度微调以及布局 JSON 导出复原。',
      ],
    },
    tags: ['JavaScript', 'Visualization', 'Research Tool'],
    links: [
      {
        label: { en: 'Try Live App', zh: '在线使用' },
        href: 'https://sonia1maslova.github.io/interactive-wordcloud/',
        external: true,
      },
      {
        label: { en: 'GitHub Repo', zh: 'GitHub 仓库' },
        href: 'https://github.com/sonia1maslova/interactive-wordcloud',
        external: true,
      },
    ],
  },
  {
    id: 'seeg-navigation-release',
    date: '2026-10-11',
    shortDate: '2026 · 10',
    displayDate: { en: 'October 11, 2026', zh: '2026 年 10 月 11 日' },
    year: 2026,
    category: 'research',
    title: {
      en: 'Human sEEG Spatial Navigation Analysis & Figure Gallery',
      zh: '更新人类 sEEG 空间导航可复现分析代码与在线图表画廊',
    },
    subtitle: {
      en: 'seeg_navigation & seeg-navigation-figure-gallery',
      zh: 'seeg_navigation 与 seeg-navigation-figure-gallery',
    },
    summary: {
      en: 'Published a major snapshot of reproducible Python plotting pipelines for human sEEG spatial navigation—spanning PLV, PAC, spectral power, and Granger causality—paired with a dedicated public gallery.',
      zh: '发布人类立体定向脑电（sEEG）空间导航研究的可复现绘图与统计代码更新，覆盖 PLV、PAC、频谱功率与 Granger 因果，并同步维护独立在线图表画廊。',
    },
    details: {
      en: [
        'Added PLV shared-legend visualizations, four-ROI Granger combined plots, scoped three-band DFI figures, and reorganized PAC heatmaps & forest plots.',
        'Documented code hashes, external inputs, unchanged FDR reporting rules, and reproduction boundaries without bundling protected data.',
      ],
      zh: [
        '新增 PLV 共享图例图、四脑区 Granger 组合图、三频段 DFI 绘图以及重组后的 PAC 热图、森林图与描述均值趋势。',
        '配套记录代码哈希快照、数据清单、FDR 规则与可复现边界说明，将源码仓库与渲染图库清晰解耦。',
      ],
    },
    tags: ['Human sEEG', 'PLV / PAC', 'Granger Causality', 'Python'],
    links: [
      {
        label: { en: 'Online Gallery', zh: '在线画廊' },
        href: 'https://sonia1maslova.github.io/seeg-navigation-figure-gallery/',
        external: true,
      },
      {
        label: { en: 'Analysis Code', zh: '分析代码仓库' },
        href: 'https://github.com/sonia1maslova/seeg_navigation',
        external: true,
      },
    ],
  },
  {
    id: 'learning-notes-hub',
    date: '2026-11-08',
    shortDate: '2026 · 11',
    displayDate: { en: 'November 8, 2026', zh: '2026 年 11 月 8 日' },
    year: 2026,
    category: 'milestone',
    title: {
      en: 'Structured Open Quantitative & Neuroscience Study Notebook',
      zh: '系统整理定量方法与神经科学公开学习笔记库',
    },
    subtitle: {
      en: 'GitHub · ai-assisted-learning-notes',
      zh: 'GitHub · ai-assisted-learning-notes',
    },
    summary: {
      en: 'Consolidated multi-disciplinary study notes spanning multilevel modeling, PLS, statistical genetics, Bayesian/MCMC methods, MRI/fMRI atlases, electrophysiology, and graph theory.',
      zh: '整合跨学科定量研究笔记，系统覆盖应用多层模型、偏最小二乘（PLS）、统计遗传学、贝叶斯与 MCMC、MRI/fMRI 生物学图谱、电生理及图论分析。',
    },
    details: {
      en: [
        'Organized 10+ thematic directories with standardized GitHub LaTeX math formatting conventions.',
        'Introduced explicit YAML review-status metadata to transparently track AI-assisted drafts versus manually verified notes.',
      ],
      zh: [
        '按专题划分为十余个模块，并建立统一的 GitHub 数学公式排版规范。',
        '引入透明的 YAML 审核元数据，明确区分 AI 辅助草稿与已完成人工核查的笔记。',
      ],
    },
    tags: ['Statistical Modeling', 'Neuroimaging', 'Bayesian', 'Notes'],
    links: [
      {
        label: { en: 'Browse Notes', zh: '查看笔记库' },
        href: 'https://github.com/sonia1maslova/ai-assisted-learning-notes',
        external: true,
      },
    ],
  },
  {
    id: 'indinetextract-pypi',
    date: '2026-11-11',
    shortDate: '2026 · 11',
    displayDate: { en: 'November 11, 2026', zh: '2026 年 11 月 11 日' },
    year: 2026,
    category: 'software',
    title: {
      en: 'Published IndiNetExtract (0.1.0.dev0) on PyPI',
      zh: '在 PyPI 发布个体脑网络提取包 IndiNetExtract (0.1.0.dev0)',
    },
    subtitle: {
      en: 'Python Package · indi-net-extract',
      zh: 'Python 软件包 · indi-net-extract',
    },
    summary: {
      en: 'Released a standalone Python toolkit for template-guided individual resting-state fMRI brain network extraction, supporting both classic Dual Regression and NumPy/SciPy GIG-ICA.',
      zh: '发布面向静息态 fMRI 的模板引导个体脑网络提取 Python 工具包，无需 MATLAB 或 FSL 运行环境即可执行经典双回归与独立版 GIG-ICA。',
    },
    details: {
      en: [
        'Supports multi-subject parallel extraction (`extract_batch`) with deterministic metadata manifests and per-subject atomic saving.',
        'Includes decoupled post-processing (`postprocess_maps`, `template_dice`, `overlap_fraction`) and BSD-3-Clause open-source licensing.',
      ],
      zh: [
        '支持多被试进程并行批处理（`extract_batch`）、确定性元数据追踪与单被试原子化结果落盘。',
        '提供独立后处理模块（空间平滑、Top-N 二值化、模板 Dice 评估与多效性重叠度图谱），以 BSD-3-Clause 协议开源。',
      ],
    },
    tags: ['Python', 'PyPI', 'fMRI', 'GIG-ICA', 'Dual Regression'],
    links: [
      {
        label: { en: 'PyPI Package', zh: 'PyPI 页面' },
        href: 'https://pypi.org/project/indi-net-extract/0.1.0.dev0/',
        external: true,
      },
      {
        label: { en: 'GitHub Repo', zh: 'GitHub 仓库' },
        href: 'https://github.com/sonia1maslova/indi-net-extract',
        external: true,
      },
    ],
  },
  {
    id: 'academic-site-launch',
    date: '2026-11-26',
    shortDate: '2026 · 11',
    displayDate: { en: 'November 26, 2026', zh: '2026 年 11 月 26 日' },
    year: 2026,
    category: 'milestone',
    title: {
      en: 'Launched Bilingual Academic Homepage & Interactive Timeline',
      zh: '上线中英双语科研主页与可拖拽交互式时间轴',
    },
    subtitle: {
      en: 'Astro · GitHub Pages · academic-site',
      zh: 'Astro · GitHub Pages · academic-site',
    },
    summary: {
      en: 'Built a minimalist bilingual academic website backed by Markdown content collections and GitHub Actions CI/CD, uniting open-source research tools, papers, CV, and an interactive timeline.',
      zh: '基于 Astro、Markdown 内容集合与 GitHub Actions 搭建并上线极简双语个人学术主页，集中展示开源科研工具、学术成果、个人履历与交互式时间轴。',
    },
    details: {
      en: [
        'Configured automatic GitHub Pages deployment on every push to `main`.',
        'Added an interactive draggable timeline supporting pointer inertia, scrubbing, keyboard navigation, and category filters.',
      ],
      zh: [
        '配置推送 `main` 分支即自动完成类型校验与 GitHub Pages 发布的 CI/CD 流程。',
        '打造支持拖拽惯性滑动、标尺拖拉定位、键盘切换与分类筛选的交互式时间轴。',
      ],
    },
    tags: ['Astro', 'GitHub Pages', 'Interactive Timeline'],
    links: [
      {
        label: { en: 'Site Repository', zh: '主页源码仓库' },
        href: 'https://github.com/sonia1maslova/academic-site',
        external: true,
      },
    ],
  },
];
