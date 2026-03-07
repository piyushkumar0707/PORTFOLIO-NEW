const achievements = [
  {
    icon: '🏆',
    title: 'GSSoC Top 50 Contributor',
    desc: 'Rank #32 out of 3,414 participants. 48+ merged PRs across 10+ production repositories, contributing 5,000+ lines of code.',
    color: 'from-yellow-400 to-amber-500',
    badge: 'Top 1%',
    badgeColor: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30',
    glowRaw: 'rgba(250,204,21,0.15)',
  },
  {
    icon: '📊',
    title: 'Naukri Campus Young Turks 2025',
    desc: '98.55 Percentile in India\'s largest skill contest (500,000+ participants). Recognized by Infosys, Hitachi, CES, and other industry leaders.',
    color: 'from-blue-400 to-cyan-500',
    badge: '98.55 Percentile',
    badgeColor: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
    glowRaw: 'rgba(59,130,246,0.15)',
  },
  {
    icon: '🥇',
    title: 'DSA MasterMind – CodeClash',
    desc: '81st Rank (Top 1.5%) in DSA MasterMind MCQ Elimination Round out of 6,999+ national participants. Certificate of Excellence from Unstop.',
    color: 'from-emerald-400 to-teal-500',
    badge: '81st Rank',
    badgeColor: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
    glowRaw: 'rgba(52,211,153,0.15)',
  },
  {
    icon: '🚀',
    title: 'CodeSprint – Final Coding Round',
    desc: '190th Rank in CodeSprint Final Coding Round of CodeClash – The Battle of Logic & Code among 6,999+ national competitors.',
    color: 'from-purple-400 to-violet-500',
    badge: '190th Rank',
    badgeColor: 'bg-purple-400/10 text-purple-400 border-purple-400/30',
    glowRaw: 'rgba(168,85,247,0.15)',
  },
  {
    icon: '🌐',
    title: 'Hacktoberfest 2025 Supercontributor',
    desc: 'Achieved the highest Hacktoberfest contribution level with high-quality, significant open-source contributions across diverse repositories.',
    color: 'from-orange-400 to-red-500',
    badge: 'Supercontributor',
    badgeColor: 'bg-orange-400/10 text-orange-400 border-orange-400/30',
    glowRaw: 'rgba(251,146,60,0.15)',
  },
  {
    icon: '📅',
    title: 'LeetCode 100-Day Badge 2025',
    desc: 'Achieved the LeetCode 100 Days Badge (2025) for consistent daily problem-solving. 499+ DSA problems solved with 800+ GitHub contributions.',
    color: 'from-red-400 to-pink-500',
    badge: '499+ Problems',
    badgeColor: 'bg-red-400/10 text-red-400 border-red-400/30',
    glowRaw: 'rgba(248,113,113,0.15)',
  },
];

const certifications = [
  {
    title: 'OCI 2025 Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Oct 2025',
    valid: 'Valid until Oct 2027',
    icon: '⚡',
    color: 'from-red-400 to-orange-400',
    credentialId: '322511771OCI25GAIOCP',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=89A6B4FFD84462B69642F0742A7C82A3EE953B34AAF1A909240F9483426A2AF3',
    glowRaw: 'rgba(248,113,113,0.15)',
  },
  {
    title: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Sep 2025',
    valid: null,
    icon: '🏅',
    color: 'from-orange-400 to-amber-400',
    credentialId: '322511771OCI25AICFA',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DDF1498F3C03E2F5E7390AC91CE0C39E26BA42BBC06B50A23C351B7DF88CACE1',
    glowRaw: 'rgba(251,146,60,0.15)',
  },
  {
    title: 'Oracle Fusion AI Agent Studio Foundations',
    issuer: 'Oracle University',
    date: 'Dec 2025',
    valid: null,
    icon: '🤖',
    color: 'from-rose-400 to-red-500',
    credentialId: '32251171FOFAASGFA',
    link: null,
    glowRaw: 'rgba(251,113,133,0.15)',
  },
  {
    title: 'OpenCV Bootcamp (100% Grade)',
    issuer: 'OpenCV University',
    date: 'Jan 2026',
    valid: null,
    icon: '👁️',
    color: 'from-blue-400 to-cyan-400',
    credentialId: 'b1e3fc31993244618c7ebd229b49edc1',
    link: null,
    glowRaw: 'rgba(59,130,246,0.15)',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    date: 'Sep 2025',
    valid: null,
    icon: '🛠️',
    color: 'from-orange-300 to-amber-500',
    credentialId: null,
    link: 'https://badgr.com/public/assertions/NW1Y1z-lSkqoaSV0CYAXYg?identity__email=121piyush466mits@gmail.com',
    glowRaw: 'rgba(251,146,60,0.15)',
  },
  {
    title: 'GfG 160 – 160 Days of Problem Solving',
    issuer: 'GeeksforGeeks',
    date: 'May 2025',
    valid: null,
    icon: '📚',
    color: 'from-green-400 to-emerald-500',
    credentialId: null,
    link: 'https://media.geeksforgeeks.org/courses/certificates/13ab697fc9d09addbe68a46d0177a6b8.pdf',
    glowRaw: 'rgba(74,222,128,0.15)',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-dark-900 relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-brand-pink/10 top-1/4 right-0" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Achievements */}
        <div className="text-center mb-16 reveal">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">Ranked & Recognized</p>
          <h2 className="section-title gradient-text">Achievements</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="glass rounded-2xl p-5 reveal border border-white/5 group relative overflow-hidden"
              style={{ transition: 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1px ${a.glowRaw}, 0 20px 50px ${a.glowRaw}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(600px circle at 0% 0%, ${a.glowRaw}, transparent 40%)` }}
              />
              <div className="flex items-start gap-4 relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {a.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm leading-tight">{a.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${a.badgeColor}`}>
                      {a.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center mb-16 reveal">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">Verified Credentials</p>
          <h2 className="section-title gradient-text">Certifications</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="glass rounded-2xl p-5 reveal border border-white/5 flex flex-col group relative overflow-hidden"
              style={{ transition: 'box-shadow 0.5s ease, border-color 0.5s ease, transform 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 1px ${c.glowRaw}, 0 20px 50px ${c.glowRaw}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {/* Inner radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(600px circle at 0% 0%, ${c.glowRaw}, transparent 40%)` }}
              />
              <div className="flex items-center gap-3 mb-3 relative">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-xl shadow-lg`}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs">{c.issuer}</div>
                  <div className="text-slate-400 text-xs">{c.date}{c.valid && ` · ${c.valid}`}</div>
                </div>
              </div>
              <h3 className="font-bold text-white text-sm mb-2 flex-1">{c.title}</h3>
              {c.credentialId && (
                <div className="font-mono text-xs text-slate-500 bg-dark-700/50 rounded px-2 py-1 mb-3 break-all">
                  ID: {c.credentialId}
                </div>
              )}
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-cyan hover:underline flex items-center gap-1 mt-auto"
                >
                  Verify Credential
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <span className="text-xs text-slate-600 mt-auto">Certificate on File</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
