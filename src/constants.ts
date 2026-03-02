export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  link: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  icon: string;
  category: string;
  stats: string;
  tags: string[];
  accent: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Gemini Dynamic View：如何导出',
    excerpt: 'Gemini 新推出的 Dynamic View 功能令人惊艳，但导出流程藏得很深——这篇文章手把手带你找到它。',
    date: '2026/02/06',
    category: 'AI工具',
    readTime: '3分钟阅读',
    image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/UMtiaGntyiahw17EcXbQv8HicBBaKniczQ3DTXBIxjZxXQVvkicibFalxIPYpQl6zcfAre33qoj66hNg6JaPrw3DaMY4ibpsGXQGrIuUvp5Oeu4Zzk/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/s0b4tJStGf6pG6wrQ5IUew'
  },
  {
    id: '2',
    title: 'gemini in chrome：不仅是少一步复制粘贴',
    excerpt: '读英文文章遇到生词就要切换 App？查资料碰到不能复制的文档？Gemini in Chrome 可能是你一直需要的解法。',
    date: '2026/01/20',
    category: 'AI工具',
    readTime: '5分钟阅读',
    image: 'https://mmbiz.qpic.cn/mmbiz_jpg/UMtiaGntyiahzI1Et98K5aibJibbhllicdnv2heyfRO9WqgVe5kjbtRW8B42lB0PeYsBEXvqcibqWIfao1m58fMxT2vkRaHzDunsY3PaYuxCMB1dQ/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/9CaxDFV-EedW8V4jHFSN8w'
  },
  {
    id: '3',
    title: '用 AI 做了一个单词学习小玩意儿',
    excerpt: '口译备考时背单词效率太低，于是用 AI 做了一个专属工具帮助自己——从想法到落地只花了一个下午。',
    date: '2026/01/08',
    category: 'AI工具',
    readTime: '4分钟阅读',
    image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/KiaicjSMb5iaibF4iaDrgzhdtXW55nepZIqNywYJlNdxMBicvibCFn5PESHvia06B0jH3046CiaP6lsCQt11HNcA4RRo9VQ/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/3MrJPdLYjuYd97dyC7U5qQ'
  },
  {
    id: '4',
    title: 'Express：怎么多"用好"材料',
    excerpt: '前两篇探讨了如何用 Notion 捕获和组织口译材料，但口译学习最终还是要输出的——开口才是关键。',
    date: '2025/12/28',
    category: '口译学习',
    readTime: '6分钟阅读',
    image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/KiaicjSMb5iaibHiaz9VkJWHOFzh4QYQfRFy1rqFBBKN84ReggJySvn0IEjxvqBCnHyjqgeKYBsJfzOnWiaLvg1kBmQQ/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/-h9JPeXQRwIHDyuLFTllgg'
  },
  {
    id: '5',
    title: '如何用 Notion 帮助口译学习',
    excerpt: '如何用 Notion 构建口译材料库，从素材捕获、分类整理到定期复习，让口译备考更有体系。',
    date: '2025/12/18',
    category: '效率工具',
    readTime: '5分钟阅读',
    image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/KiaicjSMb5iaibEgj4Zu6GmespEdgWr1xH7icrXoR8nq8sRSM6AH0ibNbrcNBojzwLQI8wvnp6X4iagQjYrn2dicPE0hoQ/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/0JMibVlEH20Pv6EdepyFyQ'
  },
  {
    id: '6',
    title: '口译材料如何尽量不是一次性用品？',
    excerpt: '材料不缺、方法也有，为什么就是学不进去？第一篇：聊聊口译学习里那个被忽视的"复用"问题。',
    date: '2025/12/11',
    category: '口译学习',
    readTime: '6分钟阅读',
    image: 'https://mmbiz.qpic.cn/sz_mmbiz_jpg/KiaicjSMb5iaibGnbicjkUzE92CMCm9euXZWEr7Tic9CUvyUKOkLACGvkk2nNiasGAsPdqngAynZYpemzDhXW70tAfAMA/0?wx_fmt=jpeg',
    link: 'https://mp.weixin.qq.com/s/JYxTcpMQoPjwMSVWYcJC5Q'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CE Memory',
    subtitle: 'MTI 专业背词工具',
    description: '针对口译"同义表达碎片化"的核心痛点独立打造。以语义标签为组织单元，支持中英对照录入、多级自定义分类与多模式复习，已在口译 / 翻译同学间自然传播。',
    link: 'https://kaiyq.github.io/ce-memory/',
    icon: '📚',
    category: '独立产品',
    stats: '30+ 用户',
    tags: ['口译工具', '语义标签', '多模式复习'],
    accent: '#18181b'
  },
  {
    id: '2',
    title: 'Run-A-Way',
    subtitle: '情绪记录与 AI 分析工具',
    description: '针对"事后遗忘、难以复盘"的情绪管理痛点独立开发。输入事件与感受后 AI 自动打标签，STATS 页可视化高频情绪触发模式，帮助用户建立情绪自我认知。',
    link: 'https://runaway307.netlify.app/',
    icon: '🏃',
    category: '独立产品',
    stats: '',
    tags: ['情绪管理', 'AI 标签', '数据可视化'],
    accent: '#292524'
  },
  {
    id: '3',
    title: 'TAPEPS',
    subtitle: '演讲能力评测平台',
    description: '为英语公共演讲课程设计的学生评价 Web 应用。前后测机制量化学习增益，生成个人维度雷达图，结合 AI 助教输出结构化反馈，完全替代纸质评价流程。',
    link: 'https://alicetapesps.pages.dev/',
    icon: '🎤',
    category: 'Web 应用',
    stats: '200+ 学生',
    tags: ['演讲评测', '前后测', 'AI 反馈'],
    accent: '#3b3bff'
  },
  {
    id: '4',
    title: '英语公共演讲数字课程',
    subtitle: 'AIGC 驱动的课程升级项目',
    description: '负责需求调研、RAG 知识库搭建、AI 评价链路设计与智能助教搭建，推动英语口语课从"纸质人工"向"数据驱动"全面升级，知识掌握率均值 90%+。',
    link: 'https://mooc1-api.chaoxing.com/course/233252013.html',
    icon: '🎓',
    category: '教育科技',
    stats: '200+ 学生 · 掌握率 90%+',
    tags: ['AIGC', 'RAG 知识库', 'Agent', 'Prompt 工程'],
    accent: '#6d28d9'
  }
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
}

export const INTERNSHIPS: Experience[] = [
  {
    id: '1',
    company: '北京元石科技有限公司（问小白）',
    role: '产品内容运营',
    period: '2025.04 - 2025.07',
    logo: ''
  },
  {
    id: '2',
    company: '5+ 场大型会议交传经历',
    role: '国际会议口译员',
    period: '2025 - 2026',
    logo: ''
  }
];

export const AWARDS: Experience[] = [
  {
    id: '1',
    company: 'CATTI 二级口译 · 三级笔译',
    role: '',
    period: '资格证书',
    logo: ''
  },
  {
    id: '2',
    company: '湖南省研究生翻译大赛亚军',
    role: '',
    period: '2025',
    logo: ''
  },
  {
    id: '3',
    company: '2025年国才杯翻译赛项 湖南省冠军 · 全国银奖',
    role: '',
    period: '2025',
    logo: ''
  }
];
