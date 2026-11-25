import type { BilingualText } from '../i18n/ui';

export interface NewsItem {
  date: string; // YYYY-MM format for crisp academic timelines
  category: 'release' | 'research' | 'talk' | 'milestone';
  text: BilingualText;
  link?: {
    label: BilingualText;
    href: string;
  };
  isTemplate?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    date: '2026-11',
    category: 'release',
    text: {
      en: 'Released IndiNetExtract (0.1.0.dev0) on PyPI — a Python toolkit for template-guided individual brain network extraction supporting Dual Regression and standalone GIG-ICA.',
      zh: '在 PyPI 发布个体脑网络提取工具包 IndiNetExtract（0.1.0.dev0），支持经典双回归与独立 NumPy/SciPy 版 GIG-ICA。',
    },
    link: {
      label: { en: 'PyPI & Repo', zh: '查看仓库' },
      href: 'https://github.com/sonia1maslova/indi-net-extract',
    },
  },
  {
    date: '2026-10',
    category: 'research',
    text: {
      en: 'Published updated reproducible plotting scripts and online figure gallery for the human sEEG spatial navigation project (PAC, PLV, spectral power, and Granger causality).',
      zh: '更新人类 sEEG 空间导航研究的开源绘图代码库与配套在线图表画廊（涵盖 PAC、PLV、频谱功率与 Granger 因果分析）。',
    },
    link: {
      label: { en: 'Online Gallery', zh: '浏览画廊' },
      href: 'https://sonia1maslova.github.io/seeg-navigation-figure-gallery/',
    },
  },
  {
    date: '2026-10',
    category: 'release',
    text: {
      en: 'Launched Interactive Word Cloud Lab, a zero-build web utility for crafting publication-ready research term clouds with custom shape masks and transparent PNG export.',
      zh: '上线零构建纯前端工具 Interactive Word Cloud Lab，支持自定义图形遮罩、拖拽排布与透明底高清 PNG 导出。',
    },
    link: {
      label: { en: 'Try Online', zh: '在线使用' },
      href: 'https://sonia1maslova.github.io/interactive-wordcloud/',
    },
  },
  {
    date: '2026-09',
    category: 'research',
    text: {
      en: 'Deployed the Public Neural Pleiotropy Figure Gallery to enable hierarchical browsing and tag-based inspection of neuroimaging analysis figures.',
      zh: '上线公开版 Neural Pleiotropy 图表画廊，支持多级目录浏览、标签筛选与大图对比审阅。',
    },
    link: {
      label: { en: 'View Gallery', zh: '查看画廊' },
      href: 'https://sonia1maslova.github.io/neural-pleiotropy-figure-gallery/',
    },
  },
];
