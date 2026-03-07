const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'piyushkumar0707',
    href: 'https://github.com/piyushkumar0707',
    color: 'hover:border-slate-400/40 hover:text-white',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'piyush-kumar-singh',
    href: 'https://www.linkedin.com/in/piyush-kumar-singh-702360287/',
    color: 'hover:border-blue-400/40 hover:text-blue-400',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: '121piyush466mits@gmail.com',
    href: 'mailto:121piyush466mits@gmail.com',
    color: 'hover:border-brand-cyan/40 hover:text-brand-cyan',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm-1 4v5.586l-3.707 3.707 1.414 1.414L12 14l3.293 3.293 1.414-1.414L13 12.586V7h-2z" />
      </svg>
    ),
    label: 'Codolio',
    value: 'codolio.com/profile/piyush_07',
    href: 'https://codolio.com/profile/piyush_07',
    color: 'hover:border-brand-purple/40 hover:text-brand-purple',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-dark-800 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-brand-purple/20 -bottom-[100px] -left-[100px]" />
      <div className="orb w-[300px] h-[300px] bg-brand-cyan/10 -top-[50px] right-[10%]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="reveal mb-12">
          <p className="text-brand-cyan font-mono text-sm mb-2 tracking-widest uppercase">Let's Connect</p>
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        {/* Hero CTA */}
        <div className="glass rounded-3xl p-10 border border-white/8 reveal mb-12">
          <div className="text-6xl mb-4">👋</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Open to Opportunities!
          </h3>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-8">
            I'm actively looking for <span className="text-white font-semibold">SDE internships</span> and <span className="text-white font-semibold">full-time roles</span> in backend engineering, full-stack development, or AI/ML. I'd love to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:121piyush466mits@gmail.com" className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-kumar-singh-702360287/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Contact links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
          {contactLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`glass rounded-xl p-4 border border-white/5 flex flex-col items-center gap-2 text-slate-400 transition-all duration-300 ${link.color}`}
            >
              {link.icon}
              <div className="text-xs font-semibold">{link.label}</div>
              <div className="text-xs text-slate-500 text-center truncate w-full max-w-full">{link.value}</div>
            </a>
          ))}
        </div>

        {/* Phone */}
        <div className="mt-8 reveal">
          <p className="text-slate-600 text-sm">
            📞 <span className="text-slate-500">+91-9893894132</span>
            <span className="mx-3">·</span>
            📍 <span className="text-slate-500">Gwalior, Madhya Pradesh, India</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-white/5 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white font-bold text-xs">
              P
            </div>
            <span className="text-slate-500 text-sm font-mono">piyush<span className="text-brand-cyan">.</span>dev</span>
          </div>
          <p className="text-slate-600 text-xs text-center">
            © 2026 Piyush Kumar Singh · Built with React & Tailwind CSS
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/piyushkumar0707" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-cyan transition-colors text-xs">GitHub</a>
            <a href="https://www.linkedin.com/in/piyush-kumar-singh-702360287/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-cyan transition-colors text-xs">LinkedIn</a>
            <a href="https://codolio.com/profile/piyush_07" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-cyan transition-colors text-xs">Codolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
