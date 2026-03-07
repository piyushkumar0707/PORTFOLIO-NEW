export default function About() {
  return (
    <section id="about" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-brand-purple/20 bottom-0 right-0" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">Who I Am</p>
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Avatar area */}
          <div className="relative flex justify-center reveal">
            <div className="relative w-64 h-64">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-brand-purple/20" style={{ animation: 'spin 12s linear infinite reverse' }} />
              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-pink flex items-center justify-center animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-dark-700 flex items-center justify-center">
                  <span className="text-6xl font-black gradient-text">P</span>
                </div>
              </div>
              {/* Floating tags */}
              <div className="absolute -top-2 -right-4 glass rounded-lg px-3 py-1.5 text-xs text-brand-cyan font-mono border border-brand-cyan/20 animate-float">
                #32 GSSoC
              </div>
              <div className="absolute -bottom-2 -left-4 glass rounded-lg px-3 py-1.5 text-xs text-brand-purple font-mono border border-brand-purple/20" style={{ animation: 'float 5s ease-in-out infinite 1.5s' }}>
                CGPA 8.14
              </div>
              <div className="absolute top-1/2 -right-16 glass rounded-lg px-3 py-1.5 text-xs text-slate-300 font-mono border border-white/10" style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}>
                499+ DSA
              </div>
              <div className="absolute -top-6 left-0 glass rounded-lg px-3 py-1.5 text-xs text-green-400 font-mono border border-green-400/20" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
                48+ PRs
              </div>
              <div className="absolute bottom-4 -right-16 glass rounded-lg px-3 py-1.5 text-xs text-orange-400 font-mono border border-orange-400/20" style={{ animation: 'float 5.5s ease-in-out infinite 2s' }}>
                🌐 Hacktoberfest
              </div>
              <div className="absolute top-4 -left-14 glass rounded-lg px-3 py-1.5 text-xs text-yellow-400 font-mono border border-yellow-400/20" style={{ animation: 'float 6.5s ease-in-out infinite 0.8s' }}>
                98.55%ile
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-white mb-4">
              Building scalable systems, one commit at a time.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a 3rd-year B.Tech student in <span className="text-white font-semibold">Information Technology (AI & Robotics)</span> at Madhav Institute of Technology and Science, Gwalior, with a CGPA of <span className="text-brand-cyan font-semibold">8.14/10</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              I specialize in building production-ready, full-stack applications with a strong backend focus — architecting RESTful APIs, real-time WebSocket systems, secure JWT + RBAC authentication, and microservices architectures deployed on the cloud.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              As an <span className="text-white font-semibold">LLM Post-Training Intern at Ethara AI</span>, I work on model evaluation, RLHF pipelines, and responsible AI practices. I'm also a <span className="text-white font-semibold">Top 1% GSSoC contributor</span> (Rank #32/3414) with 48+ merged PRs across 10+ production repositories.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'Education', value: 'MITS Gwalior (2023–2027)' },
                { icon: '📍', label: 'Location', value: 'Gwalior, India' },
                { icon: '💼', label: 'Experience', value: 'LLM Intern @ Ethara AI' },
                { icon: '🌟', label: 'Open Source', value: 'GSSoC Rank #32' },
              ].map(item => (
                <div key={item.label} className="glass rounded-xl p-3 flex gap-3 items-start glass-hover cursor-default">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
