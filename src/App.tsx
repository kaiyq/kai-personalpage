import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Twitter, 
  Youtube, 
  Github, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  MessageSquare,
  Zap,
  User
} from 'lucide-react';
import { ARTICLES, PROJECTS, INTERNSHIPS, AWARDS, Article, Project, Experience } from './constants';

type Section = 'home' | 'blog' | 'projects';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-2 py-1.5 rounded-full flex items-center gap-1">
          {(['home', 'blog', 'projects'] as Section[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeSection === section 
                  ? 'bg-black text-white shadow-lg' 
                  : 'text-muted hover:text-ink hover:bg-black/5'
              }`}
            >
              {section === 'home' ? '首页' : section === 'blog' ? '文章' : '项目'}
            </button>
          ))}
        </div>
      </nav>

      {/* User Profile Icon (Top Left) */}
      <div className="fixed top-8 left-8 z-50">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="Avatar"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Contact Info (Top Right) */}
      <div className="fixed top-8 right-8 z-50 hidden md:flex flex-col items-end gap-1 text-[10px] uppercase tracking-widest text-muted/60 font-medium">
        <div className="flex items-center gap-2">
          <span>15580090959</span>
          <div className="w-1 h-1 rounded-full bg-black/10" />
          <span className="text-muted">TEL</span>
        </div>
        <div className="flex items-center gap-2">
          <span>1456329054@qq.com</span>
          <div className="w-1 h-1 rounded-full bg-black/10" />
          <span className="text-muted">MAIL</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && <Home onNavigate={setActiveSection} />}
          {activeSection === 'blog' && <Blog key="blog" />}
          {activeSection === 'projects' && <Projects key="projects" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-muted text-sm">
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink transition-all hover:scale-110">首页</a>
          <a href="#" className="hover:text-ink transition-all hover:scale-110">文章</a>
          <a href="#" className="hover:text-ink transition-all hover:scale-110">项目</a>
        </div>
        <div>© {new Date().getFullYear()} 秦宇凯. Built with Passion.</div>
      </footer>
    </div>
  );
}

function Home({ onNavigate }: { onNavigate: (s: Section) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
          <span className="block">AI产品爱好者</span>
          <span className="block whitespace-nowrap"><span className="underline decoration-black/10 underline-offset-8">&lt;口译er/&gt;</span>，🌍 探索者。</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-8">
          我是秦宇凯，中南大学口译专业硕士在读，AIGC爱好者。热衷于用AI解决真实问题，独立开发过多款小产品，相信最好的产品来自对用户痛点的真实感知。
        </p>
        {/* Social Icons Removed */}
      </section>

      {/* Image Gallery */}
      <section className="mb-20 -mx-6 overflow-x-auto no-scrollbar flex gap-4 px-6">
        {[
          { seed: 'mountain-lake', alt: '雪山湖泊' },
          { seed: 'speech-competition', alt: '演讲比赛' },
          { seed: 'shiba-inu-mountain', alt: '与狗狗在山间' },
          { seed: 'city-view-relax', alt: '俯瞰城市风景' }
        ].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <img 
              src={`https://picsum.photos/seed/${img.seed}/600/400`} 
              alt={img.alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </section>

      {/* Bottom Content: Articles + Experience */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left: Recent Articles */}
        <section className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ArrowRight size={20} /> 近期文章
            </h2>
            <button 
              onClick={() => onNavigate('blog')}
              className="text-sm text-muted hover:text-ink flex items-center gap-1 transition-all hover:translate-x-1"
            >
              查看全部 <ArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-8">
            {ARTICLES.map((article) => (
              <div key={article.id} className="group cursor-pointer flex flex-col sm:flex-row gap-6 p-4 -m-4 rounded-3xl hover:bg-black/[0.02] transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video w-full sm:w-48 rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-muted transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted mt-2 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted mt-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right: Internship & Awards */}
        <section className="space-y-12">
          {/* Internship Experience */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Zap size={20} /> 实习经历
            </h2>
            <div className="space-y-6">
              {INTERNSHIPS.map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-sm font-bold">{exp.company}</h3>
                  <p className="text-xs text-muted mt-0.5">{exp.role}</p>
                  <p className="text-[10px] text-muted/60 mt-1 uppercase tracking-wider">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
              <Zap size={20} /> 获奖经历
            </h2>
            <div className="space-y-6">
              {AWARDS.map((award) => (
                <div key={award.id}>
                  <h3 className="text-sm font-bold">{award.company}</h3>
                  <p className="text-xs text-muted mt-0.5">{award.role}</p>
                  <p className="text-[10px] text-muted/60 mt-1 uppercase tracking-wider">{award.period}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">欢迎光临我的文章</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          这里记录了我对口译、AI 产品以及技术探索的思考。我热衷于分享如何利用 AIGC 技术提升效率，以及在口译实践中的心得体会。
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {ARTICLES.map((article) => (
          <div key={article.id} className="group cursor-pointer hover:scale-[1.02] transition-all duration-500">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-4 relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-muted transition-colors leading-tight">
              {article.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{article.date}</span>
              <span>{article.category}</span>
              <span className="ml-auto">{article.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-6">我过去的项目冒险之旅</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          上学期间，我一直在用AI解决身边的真实问题——有课程里发现的，有自己遇到的，也有just for fun的。下面是我觉得还不错的几个产品，也是我理解用户需求、动手验证想法的最好见证。
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="glass p-6 rounded-3xl hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 transition-all duration-500 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
              {project.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-col gap-2 mt-auto">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                访问网站 <ExternalLink size={14} />
              </a>
              <a 
                href={project.introLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                产品介绍 <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
