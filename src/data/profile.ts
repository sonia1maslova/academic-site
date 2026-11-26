import type { BilingualText } from '../i18n/ui';

export interface ProfileConfig {
  /** Primary display name in English and Chinese. */
  name: BilingualText;
  /** One-sentence standfirst shown under the name on the home page. */
  dek: BilingualText;
  /** Short monogram shown in the editorial emblem when no photo is set. */
  monogram: string;
  /**
   * Optional profile photo placed inside `public/`, e.g. `'/avatar.jpg'`.
   * Leave empty string `''` to show the minimalist monogram badge.
   */
  avatarPath: string;
  /**
   * Optional downloadable CV placed inside `public/`, e.g. `'/cv.pdf'`.
   * Leave empty string `''` to link to the printable Experience & CV page instead.
   */
  cvPdfPath: string;
  /** Current role or academic title. */
  role: BilingualText;
  /** Institution / Department / Laboratory. */
  affiliation: BilingualText;
  /** City / Country. */
  location: BilingualText;
  /** Primary academic contact email. */
  email: string;
  /** GitHub username and repository name for this site. */
  githubUsername: string;
  siteRepoName: string;
  /** Optional academic identifiers — leave empty string '' to hide. */
  googleScholarUrl: string;
  orcidUrl: string;
  /** Short intro paragraphs shown on the About / Home page. */
  bio: {
    en: string[];
    zh: string[];
  };
  /** Core research interests shown as clean tags / topic cards. */
  researchInterests: {
    title: BilingualText;
    description: BilingualText;
  }[];
  /**
   * Set to `false` once you have replaced the placeholder bio/CV/publication entries
   * with your own real academic details.
   */
  showTemplateBanner: boolean;
}

export const profile: ProfileConfig = {
  name: {
    en: 'Yuhao Duan',
    // 可改为中文姓名；首页大标题会按空格拆分，最后一个词显示为斜体/强调色
    zh: 'Yuhao Duan',
  },
  dek: {
    en: 'Studying how the human brain organises overlapping functional networks — from resting-state fMRI to intracranial recordings — and building open tools that make the work inspectable.',
    zh: '研究人脑如何组织相互重叠的功能网络——从静息态 fMRI 到颅内电生理记录——并构建开放工具，让研究过程可检验、可复现。',
  },
  monogram: 'YD',
  avatarPath: '', // Put your photo in public/avatar.jpg and change this to '/avatar.jpg'
  cvPdfPath: '', // Put your CV PDF in public/cv.pdf and change this to '/cv.pdf'
  role: {
    en: 'Cognitive & Computational Neuroscience Researcher',
    zh: '认知与计算神经科学研究人员',
  },
  affiliation: {
    en: '[Your Department & Institution — edit in src/data/profile.ts]',
    zh: '[请填写所在院系 / 实验室 — 在 src/data/profile.ts 修改]',
  },
  location: {
    en: '[City, Country]',
    zh: '[所在城市]',
  },
  email: 'dyhbianjie@163.com',
  githubUsername: 'sonia1maslova',
  siteRepoName: 'academic-site',
  googleScholarUrl: '', // e.g. 'https://scholar.google.com/citations?user=YOUR_ID'
  orcidUrl: '', // e.g. 'https://orcid.org/0000-0000-0000-0000'
  bio: {
    en: [
      'I study how human brain networks organize functional specialization and overlap across spatial and temporal scales, combining resting-state neuroimaging, intracranial electrophysiology (sEEG), and quantitative statistical modeling.',
      'Alongside empirical investigations into individual-level functional networks, neural pleiotropy, and spatial navigation dynamics, I build open-source analysis toolkits and reproducible figure workflows to make neuroimaging and electrophysiological results transparent and inspectable.',
    ],
    zh: [
      '我的研究关注人类大脑网络在不同空间与时间尺度上的功能分化与重叠机制，结合静息态脑影像（fMRI）、人类颅内立体定向脑电（sEEG）以及定量统计建模方法，探索个体化功能网络组织、神经多效性与空间导航神经动力学。',
      '在开展实证研究的同时，我也致力于构建开源分析工具包与可复现的科研图表工作流，提升脑影像与神经电生理结果的可检验性与开放共享水平。（提示：可在 src/data/profile.ts 中自由替换为你完整的个人简介。）',
    ],
  },
  researchInterests: [
    {
      title: {
        en: 'Individual Brain Networks & fMRI',
        zh: '个体化脑网络与静息态 fMRI',
      },
      description: {
        en: 'Template-guided network extraction (Dual Regression, GIG-ICA), cross-subject network topography, and functional overlap.',
        zh: '模板引导的个体脑网络提取（双回归、GIG-ICA）、跨被试拓扑变异与功能网络重叠度分析。',
      },
    },
    {
      title: {
        en: 'Human sEEG & Spatial Navigation',
        zh: '人类 sEEG 与空间导航电生理',
      },
      description: {
        en: 'Spectral power, phase-locking (PLV), phase-amplitude coupling (PAC), and directed connectivity during navigation.',
        zh: '空间导航任务中的频谱功率、相位锁定（PLV）、相位-振幅耦合（PAC）与定向连接动力学。',
      },
    },
    {
      title: {
        en: 'Neural Pleiotropy & Quantitative Methods',
        zh: '神经多效性与统计建模',
      },
      description: {
        en: 'Multilevel modeling, spatial null models, statistical genetics, and rigorous uncertainty reporting.',
        zh: '多层线性模型、空间零模型、统计遗传学方法与稳健的统计推断报告规范。',
      },
    },
    {
      title: {
        en: 'Open Scientific Software & Visualization',
        zh: '开源科研工具与可复现可视化',
      },
      description: {
        en: 'Reusable Python toolkits, interactive figure galleries, and transparent end-to-end plotting pipelines.',
        zh: '可复用的 Python 分析包、层次化在线科研图表画廊与端到端可复现绘图流程。',
      },
    },
  ],
  showTemplateBanner: true,
};
