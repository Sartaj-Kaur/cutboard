import { Outlet, Navigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Video, Settings, LogOut, Scissors } from 'lucide-react';

const NAV = [
  { name: 'Board',    icon: Layers,  path: '/app/projects' },
  { name: 'Videos',   icon: Video,   path: '/app/videos'   },
  { name: 'Settings', icon: Settings, path: '/app/settings' },
];

function TopNav() {
  const { pathname } = useLocation();
  const { logout, user } = useAuthStore();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between bg-cb-surface/80 backdrop-blur-md border border-cb-border px-4 py-2.5 rounded-full shadow-2xl w-[90%] max-w-4xl">
      {/* Logo */}
      <div className="flex items-center gap-2 pr-6 border-r border-cb-border">
        <div className="w-7 h-7 rounded-lg bg-cb-accent flex items-center justify-center">
          <Scissors size={14} className="text-black" strokeWidth={2.5} />
        </div>
        <span className="text-[15px] font-bold tracking-tight text-white hidden sm:block">
          Cutboard
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-1.5 px-4 w-full justify-center">
        {NAV.map((item) => {
          const active =
            pathname === item.path ||
            (pathname.startsWith(item.path) && item.path !== '/app');
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 group ${
                active ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {active && (
                <motion.div
                  layoutId="topnav-active"
                  className="absolute inset-0 bg-cb-accent rounded-full"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
              <item.icon
                size={16}
                strokeWidth={active ? 2.5 : 2}
                className={`relative z-10 transition-colors ${active ? 'text-black' : ''}`}
              />
              <span className={`relative z-10 hidden md:block ${active ? 'text-black' : ''}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* User / Logout */}
      <div className="flex items-center gap-4 pl-6 border-l border-cb-border shrink-0">
        {user && (
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-cb-accent/20 border border-cb-accent/50 flex items-center justify-center text-[10px] font-bold text-cb-accent uppercase">
              {(user.name || user.email || 'U')[0]}
            </div>
          </div>
        )}
        <button
          onClick={logout}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all"
          title="Sign out"
        >
          <LogOut size={16} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
}

export default function DashboardLayout() {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col h-screen bg-cb-black overflow-hidden font-sans text-cb-text relative">
      
      {/* Background Solid Geometric Shapes (Non-gradient/Non-AI) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large abstract geometric blocks */}
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#1A1A1D] mix-blend-screen opacity-50" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[25vw] bg-[#222225] rotate-[-12deg]" />
        <div className="absolute bottom-[0%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-[#151518]" />
      </div>

      <TopNav />

      <main className="flex-1 flex flex-col overflow-hidden relative z-10 pt-24">
        {/* Top hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-cb-border pointer-events-none z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar px-6 md:px-12 lg:px-24 pb-12 pt-4"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
