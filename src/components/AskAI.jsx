import { useState, useRef, useEffect, useCallback } from 'react';

const GREETING = `Hey! 👋 I'm Piyush's AI assistant. Ask me anything about his projects, tech stack, experience, or whether he's open to work — I'm here to help recruiters like you get instant answers!`;

const SUGGESTED = [
  { label: '🏥 MediQueue project', prompt: 'Tell me about the MediQueue project in detail.' },
  { label: '🌍 Travira project', prompt: 'What is Travira and what problems does it solve?' },
  { label: '⚡ Tech stack', prompt: "What is Piyush's full tech stack?" },
  { label: '🏆 Achievements', prompt: "What are Piyush's biggest achievements?" },
  { label: '💼 Open to work?', prompt: 'Is Piyush currently open to SDE internships or full-time roles?' },
];

function formatMessage(text) {
  // Simple renderer: bold, inline code, newlines
  return text
    .split('\n')
    .map((line, i) => {
      const parts = line
        .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
        .map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code key={j} className="bg-white/10 text-brand-cyan font-mono text-[11px] px-1.5 py-0.5 rounded">
                {part.slice(1, -1)}
              </code>
            );
          }
          return part;
        });
      return <span key={i}>{parts}{i < text.split('\n').length - 1 && <br />}</span>;
    });
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-brand-cyan/70"
          style={{
            animation: 'typingDot 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [greeted, setGreeted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when panel opens; show greeting
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      if (!greeted) {
        setMessages([{ role: 'assistant', content: GREETING }]);
        setGreeted(true);
      }
    }
  }, [isOpen, greeted]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'Failed to get a response. Please try again.');
      setMessages(prev => prev.slice(0, -1)); // remove optimistic user msg
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (prompt) => {
    sendMessage(prompt);
  };

  const showSuggestions = messages.length <= 1; // show only before first user message

  return (
    <>
      {/* Typing dots keyframe */}
      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes askAiSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ask-ai-panel { animation: askAiSlideUp 0.28s cubic-bezier(0.16,1,0.3,1) forwards; }
      `}</style>

      {/* ── Floating Button ── */}
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-label="Ask AI about Piyush's projects"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 px-4 py-3 rounded-2xl font-semibold text-sm text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-brand-purple/50"
        style={{
          background: 'linear-gradient(135deg, #00f2fe 0%, #7b2ff7 60%, #f72585 100%)',
          boxShadow: isOpen
            ? '0 0 0 3px rgba(123,47,247,0.4), 0 20px 40px rgba(123,47,247,0.4)'
            : '0 8px 32px rgba(123,47,247,0.35)',
        }}
      >
        {/* Pulsing ring when closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-2xl"
            style={{ animation: 'glow 2.5s ease-in-out infinite alternate', pointerEvents: 'none' }}
          />
        )}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 shrink-0"
        >
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
          <path d="M8 9h8M8 13h5" />
          <path d="M17 17l3 3" />
        </svg>
        <span className="whitespace-nowrap">
          {isOpen ? 'Close Chat' : 'Ask AI about me'}
        </span>
        {!isOpen && (
          <span className="flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        )}
      </button>

      {/* ── Chat Panel ── */}
      {isOpen && (
        <div
          ref={panelRef}
          className="ask-ai-panel fixed bottom-[5.5rem] right-6 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: 'min(420px, calc(100vw - 24px))',
            height: 'min(560px, calc(100vh - 140px))',
            background: 'rgba(13,13,20,0.97)',
            border: '1px solid rgba(123,47,247,0.3)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(123,47,247,0.15)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0,242,254,0.08) 0%, rgba(123,47,247,0.12) 100%)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: 'linear-gradient(135deg, #00f2fe, #7b2ff7)' }}
              >
                🤖
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Piyush's AI</p>
                <p className="text-brand-cyan text-[11px] font-mono leading-tight flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Powered by Llama 3.3 · Groq
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(123,47,247,0.3) transparent' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0"
                    style={{ background: 'linear-gradient(135deg,#00f2fe,#7b2ff7)' }}
                  >
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-tr-sm'
                      : 'text-slate-200 rounded-tl-sm'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: 'linear-gradient(135deg, #00c6e0 0%, #7b2ff7 100%)' }
                      : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }
                  }
                >
                  {formatMessage(msg.content)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-xs mr-2 mt-0.5 shrink-0"
                  style={{ background: 'linear-gradient(135deg,#00f2fe,#7b2ff7)' }}
                >
                  🤖
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="flex justify-center">
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested prompts */}
          {showSuggestions && !loading && (
            <div
              className="px-3 py-2 flex flex-wrap gap-1.5 shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              {SUGGESTED.map(({ label, prompt }) => (
                <button
                  key={label}
                  onClick={() => handleSuggestion(prompt)}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'rgba(0,242,254,0.07)',
                    border: '1px solid rgba(0,242,254,0.2)',
                    color: '#94cdfe',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 px-3 py-3 shrink-0"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={e => {
                setInput(e.target.value);
                // auto-resize
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px';
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Ask about projects, skills, availability…"
              disabled={loading}
              className="flex-1 resize-none rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                minHeight: '38px',
                maxHeight: '80px',
                scrollbarWidth: 'none',
                lineHeight: '1.5',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
              style={{
                background: input.trim() && !loading
                  ? 'linear-gradient(135deg,#00f2fe,#7b2ff7)'
                  : 'rgba(255,255,255,0.07)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white -rotate-45 translate-x-px">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
