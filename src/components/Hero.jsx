import { useState, useEffect } from 'react';

const roles = [
  'Backend Engineer',
  'Full-Stack Developer',
  'AI/LLM Intern',
  'Open Source Contributor',
  'DSA Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Animated orbs */}
      <div className="orb w-[500px] h-[500px] bg-brand-purple top-[-100px] left-[-200px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <div className="orb w-[400px] h-[400px] bg-brand-cyan top-[20%] right-[-150px]" style={{ animation: 'float 6s ease-in-out infinite 2s' }} />
      <div className="orb w-[300px] h-[300px] bg-brand-pink bottom-[10%] left-[20%]" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-dark-600/80 border border-brand-cyan/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-slate-300 font-medium">
            Open to SDE Internships & Full-time Roles
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
          <span className="text-white">Piyush Kumar</span>{' '}
          <span className="gradient-text">Singh</span>
        </h1>

        {/* Typing role */}
        <div className="text-xl md:text-2xl font-mono font-medium text-slate-300 mb-6 h-10 flex items-center justify-center gap-1">
          <span className="text-brand-cyan">{'>'}</span>
          <span className="ml-2">{displayed}</span>
          <span className="w-0.5 h-6 bg-brand-cyan animate-pulse ml-0.5"></span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          3rd-year BTech student at{' '}
          <span className="text-white font-semibold">MITS Gwalior</span>{' '}
          (AI & Robotics) &nbsp;•&nbsp; GSSoC Top 1% Contributor
          <span className="text-brand-cyan font-semibold"> Rank #32</span> of 3,414 &nbsp;•&nbsp; LLM Post-Training Intern at{' '}
          <span className="text-white font-semibold">Ethara AI</span>
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { value: '499+', label: 'DSA Problems' },
            { value: '48+', label: 'PRs Merged' },
            { value: '5K+', label: 'Lines of Code' },
            { value: '8.14', label: 'CGPA' },
          ].map(s => (
            <div key={s.label} className="glass rounded-xl px-5 py-3 text-center">
              <div className="gradient-text-cyan text-2xl font-bold">{s.value}</div>
              <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a
            href="https://github.com/piyushkumar0707"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Profile
          </a>
          <a href="#contact" className="btn-outline !border-brand-purple/50 !text-brand-purple hover:!bg-brand-purple/10 hover:!border-brand-purple">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
        </div>


      </div>
    </section>
  );
}
