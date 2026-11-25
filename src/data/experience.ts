import type { BilingualText } from '../i18n/ui';

export interface TimelineEntry {
  period: string;
  title: BilingualText;
  organization: BilingualText;
  location?: BilingualText;
  advisor?: BilingualText;
  summary?: BilingualText;
  highlights?: {
    en: string[];
    zh: string[];
  };
  isTemplate?: boolean;
}

export interface HonorEntry {
  year: string;
  title: BilingualText;
  issuer: BilingualText;
  isTemplate?: boolean;
}

export interface SkillGroup {
  label: BilingualText;
  items: string[];
}

export const education: TimelineEntry[] = [
  {
    period: '202X — Present',
    title: {
      en: 'Ph.D. / M.S. Candidate in Cognitive & Computational Neuroscience',
      zh: '认知与计算神经科学 博士/硕士研究生（示例占位）',
    },
    organization: {
      en: '[University / Institute Name]',
      zh: '[请填写所在高校 / 研究所名称]',
    },
    location: {
      en: '[City, Country]',
      zh: '[城市]',
    },
    advisor: {
      en: 'Advisor: Prof. [Advisor Name]',
      zh: '导师：[导师姓名] 教授',
    },
    summary: {
      en: 'Research focusing on individual-level brain functional networks, neural pleiotropy, and human intracranial electrophysiology during spatial navigation.',
      zh: '研究方向聚焦于个体化脑功能网络提取、神经多效性以及空间导航中的人类颅内脑电动力学。',
    },
    isTemplate: true,
  },
  {
    period: '201X — 202X',
    title: {
      en: 'B.S. in Psychology / Neuroscience / Related Field',
      zh: '心理学 / 神经科学 / 相关专业 理学学士（示例占位）',
    },
    organization: {
      en: '[Undergraduate University Name]',
      zh: '[请填写本科院校名称]',
    },
    location: {
      en: '[City, Country]',
      zh: '[城市]',
    },
    summary: {
      en: 'Undergraduate thesis and foundational training in experimental psychology, statistics, and scientific computing.',
      zh: '完成实验心理学、统计建模与科学计算基础训练及本科毕业论文研究。',
    },
    isTemplate: true,
  },
];

export const researchExperience: TimelineEntry[] = [
  {
    period: '2025 — Present',
    title: {
      en: 'Graduate Researcher · Neuroimaging & Electrophysiology',
      zh: '研究生科研助理 · 脑影像与神经电生理（示例占位）',
    },
    organization: {
      en: '[Laboratory / Research Group Name]',
      zh: '[请填写课题组 / 实验室名称]',
    },
    highlights: {
      en: [
        'Developed IndiNetExtract, an open-source Python toolkit implementing Dual Regression and standalone GIG-ICA for individual-level resting-state fMRI network extraction.',
        'Built reproducible sEEG analysis and plotting pipelines (spectral power, PLV, PAC, Granger causality, LMM) paired with public static figure galleries.',
        'Designed hierarchical figure inspection tools for large-scale neural pleiotropy neuroimaging outputs.',
      ],
      zh: [
        '开发并发布开源 Python 工具包 IndiNetExtract，实现面向静息态 fMRI 的双回归与独立版 GIG-ICA 个体化网络提取及后处理评估。',
        '搭建人类 sEEG 空间导航可复现统计与绘图流程（频谱功率、PLV、PAC、Granger 因果与线性混合模型），并构建公开在线图表画廊。',
        '设计面向神经多效性大规模脑影像结果的层次化图表浏览与检索工具。',
      ],
    },
    isTemplate: true,
  },
];

export const honors: HonorEntry[] = [
  {
    year: '202X',
    title: {
      en: '[Graduate Scholarship / Best Poster Award — Template]',
      zh: '[请替换为奖学金 / 学术会议优秀报告或海报奖]',
    },
    issuer: {
      en: '[Granting Institution or Conference]',
      zh: '[颁发机构或学术会议]',
    },
    isTemplate: true,
  },
  {
    year: '202X',
    title: {
      en: '[Academic Excellence Award — Template]',
      zh: '[请替换为其他荣誉或资助项目]',
    },
    issuer: {
      en: '[Institution Name]',
      zh: '[颁发机构]',
    },
    isTemplate: true,
  },
];

export const academicService: TimelineEntry[] = [
  {
    period: 'Ongoing',
    title: {
      en: 'Open Science & Reproducible Research Contributor',
      zh: '开放科学与可复现研究维护者',
    },
    organization: {
      en: 'GitHub · PyPI',
      zh: 'GitHub · PyPI',
    },
    summary: {
      en: 'Maintaining open neuroimaging packages, reproducible plotting repositories, public figure galleries, and structured quantitative study notes.',
      zh: '持续维护开源脑影像软件包、可复现论文绘图仓库、公开科研图表画廊以及定量方法学习笔记库。',
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Neuroimaging & Electrophysiology', zh: '脑影像与神经电生理' },
    items: [
      'Resting-state fMRI',
      'Dual Regression',
      'GIG-ICA',
      'NiBabel / NIfTI',
      'Human sEEG',
      'PLV / PAC / Granger',
      'ALE Meta-analysis',
    ],
  },
  {
    label: { en: 'Statistical & Computational Modeling', zh: '统计建模与计算方法' },
    items: [
      'Linear Mixed Models (LMM)',
      'PLS & Multivariate Methods',
      'Bayesian Inference & MCMC',
      'Spatial Null Models',
      'Circular Statistics',
      'Graph Theory',
      'Statistical Genetics',
    ],
  },
  {
    label: { en: 'Programming & Reproducible Workflows', zh: '编程与可复现工程' },
    items: [
      'Python (NumPy, SciPy, Matplotlib)',
      'PyPI Packaging & Testing',
      'JavaScript / Astro / Web Visualization',
      'Git & GitHub Actions',
      'Conda / Linux HPC',
      'Markdown & LaTeX',
    ],
  },
];
