const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'from-cyan-400 to-blue-500',
    glowRaw: 'rgba(34,211,238,0.15)',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-purple-400 to-pink-500',
    glowRaw: 'rgba(168,85,247,0.15)',
    skills: ['React.js', 'Next.js', 'CSS3', 'HTML5', 'Tailwind CSS', 'Zustand', 'Redux'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-400 to-cyan-500',
    glowRaw: 'rgba(52,211,153,0.15)',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices', 'JWT', 'RBAC'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-orange-400 to-red-500',
    glowRaw: 'rgba(251,146,60,0.15)',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose ODM', 'Indexing', 'Schema Design'],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    color: 'from-violet-400 to-purple-600',
    glowRaw: 'rgba(139,92,246,0.15)',
    skills: ['LLM Fine-tuning', 'SFT', 'RLHF', 'Prompt Engineering', 'Model Evaluation', 'OpenCV'],
  },
  {
    title: 'Real-Time & Security',
    icon: '🔐',
    color: 'from-yellow-400 to-orange-500',
    glowRaw: 'rgba(250,204,21,0.15)',
    skills: ['WebSocket', 'Socket.io', 'AES-256 Encryption', 'OTP Verification', 'API Rate Limiting', 'Event-Driven Architecture'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🚀',
    color: 'from-blue-400 to-indigo-500',
    glowRaw: 'rgba(59,130,246,0.15)',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Render', 'Vercel', 'Postman', 'Cloud Deployment'],
  },
  {
    title: 'Core CS',
    icon: '📐',
    color: 'from-slate-400 to-zinc-500',
    glowRaw: 'rgba(148,163,184,0.15)',
    skills: ['DSA (499+ problems)', 'OOP', 'DBMS', 'System Design', 'OS', 'Computer Networks'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-dark-800 relative">
      <div className="orb w-[350px] h-[350px] bg-brand-purple/15 top-1/3 left-0" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">My Toolkit</p>
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A constantly growing stack of technologies I use to build production-ready systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-2xl p-5 reveal group relative overflow-hidden"
              style={{ transition: 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1px ${cat.glowRaw}, 0 20px 50px ${cat.glowRaw}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(600px circle at 0% 0%, ${cat.glowRaw}, transparent 40%)` }}
              />
              <div className="flex items-center gap-3 mb-4 relative">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className={`font-bold text-sm bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-dark-700/60 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="mt-10 reveal">
          <h3 className="text-center text-slate-400 text-sm font-mono mb-6 tracking-widest uppercase">Coding Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'LeetCode',     handle: 'piyushsingh_07',   href: 'https://leetcode.com/u/piyushsingh_07/',                               textColor: 'text-yellow-400', strip: 'from-yellow-400 to-amber-500',   glowRaw: 'rgba(250,204,21,0.18)' },
              { name: 'GeeksforGeeks',handle: '176th Inst. Rank', href: 'https://auth.geeksforgeeks.org/user/121piyush466mits/',                 textColor: 'text-green-400',  strip: 'from-green-400 to-emerald-500', glowRaw: 'rgba(74,222,128,0.18)' },
              { name: 'Codolio',      handle: 'piyush_07',        href: 'https://codolio.com/profile/piyush_07',                               textColor: 'text-blue-400',   strip: 'from-blue-400 to-indigo-500',   glowRaw: 'rgba(59,130,246,0.18)' },
              { name: 'GitHub',       handle: 'piyushkumar0707',  href: 'https://github.com/piyushkumar0707',                                  textColor: 'text-slate-300',  strip: 'from-slate-400 to-zinc-500',    glowRaw: 'rgba(148,163,184,0.18)' },
            ].map(p => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 glass rounded-xl px-5 py-3 border border-white/5 ${p.textColor} group relative overflow-hidden`}
                style={{ transition: 'box-shadow 0.5s ease, transform 0.3s ease' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 0 0 1px ${p.glowRaw}, 0 20px 40px ${p.glowRaw}`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.strip} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Inner radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(300px circle at 0% 50%, ${p.glowRaw}, transparent 70%)` }}
                />
                <div className="relative">
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-xs opacity-70">{p.handle}</div>
                </div>
                <svg className="w-3 h-3 opacity-60 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
