export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  introLink: string;
  icon: string;
  category: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: '2023 年终总结，致我不同寻常的 28',
    excerpt: '写博客文章是我比较喜欢的沉淀分享方式，我希望能把好用的技术知识传递给更多的人。',
    date: '2023/12/23',
    category: '随笔',
    readTime: '13分钟阅读',
    image: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: '2',
    title: '如何复刻本网站，零基础快速建博客',
    excerpt: '我比较喜欢围绕着技术为主的话题，但是也会写一些非技术的话题，比如设计、创业、企业管理、生活随笔等等。',
    date: '2023/07/15',
    category: '教程',
    readTime: '13分钟阅读',
    image: 'https://picsum.photos/seed/blog2/800/600'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '佐玩官网',
    description: '为自己的公司佐玩，设计开发的官网。应该也算是我做过的项目吧。简约的设计，结合噪点材质感让页面更加独特。',
    link: 'https://zolplay.com',
    introLink: '#',
    icon: '🎯',
    category: 'Web'
  },
  {
    id: '2',
    title: 'Well Word (游戏网站)',
    description: 'Well Word 是一个有趣的英语拼字游戏，在一块 5x5 的图版上拼出词汇而得分。你可以通过有趣的方式学到新单词。',
    link: 'https://wellwordgame.com',
    introLink: '#',
    icon: '🎮',
    category: 'Game'
  },
  {
    id: '3',
    title: 'ChatGPT Slack 机器人',
    description: '当 ChatGPT API 发布出来的时候，怎能错过这大好机会？我给公司内部 Slack 开发了一个雏形版的 ChatGPT 机器人。',
    link: 'https://github.com',
    introLink: '#',
    icon: '🤖',
    category: 'Tool'
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
    company: '某知名 AI 实验室',
    role: 'AI 产品经理实习生',
    period: '2024.06 - 至今',
    logo: '🤖'
  },
  {
    id: '2',
    company: '国际会议中心',
    role: '同声传译实习生',
    period: '2023.09 - 2024.01',
    logo: '🎤'
  }
];

export const AWARDS: Experience[] = [
  {
    id: '1',
    company: '“外研社·国才杯”全国大学生外语能力大赛',
    role: '全国金奖',
    period: '2025',
    logo: '🏆'
  },
  {
    id: '2',
    company: '中南大学研究生学业奖学金',
    role: '一等奖',
    period: '2024',
    logo: '📜'
  }
];
