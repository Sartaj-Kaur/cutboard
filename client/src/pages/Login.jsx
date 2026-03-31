import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { ArrowRight, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuthStore();
  const navigate    = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(
      { id: '1', name: 'Demo User', email: email || 'demo@cutboard.io', role: 'EDITOR' },
      'mock-token'
    );
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cb-black p-4 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-sm relative z-10"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 justify-center mb-10 group">
          <div className="w-8 h-8 rounded-lg bg-cb-accent/15 border border-cb-accent/30 flex items-center justify-center group-hover:border-cb-accent/60 transition-colors">
            <Scissors size={16} className="text-cb-accent" strokeWidth={2} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-cb-text">
            Cut<span className="text-cb-accent">board</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-cb-surface border border-cb-border rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-cb-border">
            <h1 className="text-[15px] font-semibold text-cb-text">Sign in to your workspace</h1>
            <p className="text-xs text-cb-faint mt-0.5">Demo mode — any credentials work</p>
          </div>

          <form onSubmit={handleLogin} className="px-6 py-5 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-cb-dim">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@cutboard.io"
                className="w-full bg-cb-panel border border-cb-border rounded-lg px-3 py-2.5 text-sm text-cb-text placeholder:text-cb-faint focus:outline-none focus:border-cb-subtle transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-cb-dim">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Any password…"
                className="w-full bg-cb-panel border border-cb-border rounded-lg px-3 py-2.5 text-sm text-cb-text placeholder:text-cb-faint focus:outline-none focus:border-cb-subtle transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary justify-center py-2.5 mt-2"
            >
              Continue
              <ArrowRight size={14} strokeWidth={2} />
            </button>
          </form>
        </div>

        <p className="text-center text-[11px] text-cb-faint mt-5 font-mono">
          Demo authentication — no real data is stored
        </p>
      </motion.div>
    </div>
  );
}
