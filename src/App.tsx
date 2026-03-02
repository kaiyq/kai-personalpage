import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Navigation with Avatar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass px-2 py-1.5 rounded-full flex items-center gap-1">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-white/60 shadow-sm flex-shrink-0 mx-1">
            <img src={`${import.meta.env.BASE_URL}avatar.jpg`} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="w-px h-4 bg-black/10 mx-0.5" />
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
      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-border flex justify-center items-center text-muted text-sm">
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
          { src: `${import.meta.env.BASE_URL}photo1.jpg`, alt: '雪山湖泊' },
          { src: `${import.meta.env.BASE_URL}photo2.jpg`, alt: '演讲比赛' },
          { src: `${import.meta.env.BASE_URL}photo3.jpg`, alt: '与狗狗在山间' },
          { src: `${import.meta.env.BASE_URL}photo4.jpg`, alt: '俯瞰城市风景' }
        ].map((img, i) => (
          <div key={i} className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
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
            {ARTICLES.slice(0, 2).map((article) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row gap-6 p-4 -m-4 rounded-3xl hover:bg-black/[0.02] transition-all duration-300 hover:scale-[1.02]"
              >
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
              </a>
            ))}
          </div>
        </section>

        {/* Right: Internship & Awards */}
        <section className="space-y-7">
          {/* Internship Experience */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <Zap size={20} /> 实习经历
            </h2>
            <div className="space-y-2.5">
              {INTERNSHIPS.map((exp) => (
                <div key={exp.id}>
                  <h3 className="text-sm font-bold leading-snug">{exp.company}</h3>
                  {exp.role && <p className="text-xs text-muted">{exp.role}</p>}
                  <p className="text-[10px] text-muted/60 uppercase tracking-wider">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
              <Zap size={20} /> 荣誉奖项
            </h2>
            <div className="space-y-2.5">
              {AWARDS.map((award) => (
                <div key={award.id}>
                  <h3 className="text-sm font-bold leading-snug">{award.company}</h3>
                  {award.role && <p className="text-xs text-muted">{award.role}</p>}
                  <p className="text-[10px] text-muted/60 uppercase tracking-wider">{award.period}</p>
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
      <header className="mb-20 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/50 mb-5">Writing</p>
        <h1 className="text-5xl font-bold mb-6">欢迎光临我的文章</h1>
        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
          这里记录了我对口译、AI 产品以及技术探索的思考。
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
        {ARTICLES.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted/50 mb-2.5">
              {article.category}
            </span>
            <h2 className="text-[15px] font-bold leading-snug mb-2.5 group-hover:text-muted transition-colors flex-1">
              {article.title}
            </h2>
            <p className="text-sm text-muted line-clamp-2 mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted mt-auto">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-black/15" />
              <span>{article.readTime}</span>
            </div>
          </a>
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted/50 mb-5">Work</p>
        <h1 className="text-5xl font-bold mb-5">动手验证，解决真实问题</h1>
        <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
          从口译备考工具到 AI 驱动的课程系统，每个项目都源于身边真实的痛点。
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-7">
        {PROJECTS.map((project) => {
          const isDark = project.accent === '#18181b' || project.accent === '#292524';
          const tagColor = isDark ? '#888' : project.accent;

          return (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-black/[0.06] hover:shadow-2xl hover:shadow-black/[0.07] hover:-translate-y-1.5 transition-all duration-500 flex flex-col bg-white/60 backdrop-blur-sm"
            >
              {/* Rich colored header area */}
              <div
                className="relative h-32 w-full flex items-end px-7 pb-5 overflow-hidden"
                style={{ backgroundColor: project.accent + '10' }}
              >
                {/* Subtle dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `radial-gradient(${project.accent} 1px, transparent 1px)`,
                    backgroundSize: '18px 18px',
                  }}
                />
                {/* Gradient fade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

                <div className="relative flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm"
                    style={{ backgroundColor: project.accent + '1a', border: `1px solid ${project.accent}18` }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: project.accent + '18', color: tagColor }}
                  >
                    {project.category}
                  </span>
                </div>

                {project.stats && (
                  <span className="absolute top-5 right-7 text-[11px] font-medium text-muted">
                    {project.stats}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-7 pt-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                  <p className="text-xs text-muted mt-1">{project.subtitle}</p>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium rounded-full px-2.5 py-1"
                      style={{ backgroundColor: project.accent + '0d', color: tagColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-black/[0.06] pt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-ink transition-colors group/link"
                  >
                    访问项目
                    <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
