import { useNavigate } from 'react-router-dom';
import { Video, Sparkles, Cloud, Users, ArrowRight, Play, CheckCircle2, Zap } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cb-black text-white selection:bg-cb-orange/30 overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cb-orange opacity-[0.07] blur-[150px] animate-float" />
        <div className="absolute bottom-[0%] right-[-10%] w-[40vw] h-[40vw] bg-cb-amber opacity-[0.05] blur-[120px] animate-float" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[40%] left-[20%] w-[20vw] h-[20vw] rounded-full bg-blue-500 opacity-10 blur-[100px] animate-float" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigate('/')}>
          <div className="text-cb-orange group-hover:scale-110 transition-transform duration-300">
            <Video size={32} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gradient">CutBoard</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#ai" className="hover:text-white transition-colors">Gemini AI</a>
          <button 
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all active:scale-95"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Colorful backdrop glowing ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-gradient-to-br from-orange-500/20 via-blue-500/10 to-purple-500/20 blur-[100px] pointer-events-none rounded-full" />
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter max-w-5xl font-display text-white relative z-10">
          Audit Videos at <br />
          The Speed of <span className="text-[#4E79A7]">Thought.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light relative z-10">
          The ultimate workspace for editors and clients. Synchronize feedback, 
          automate visual audits, and deliver <span className="text-[#FF9DA7] font-medium">pixel-perfect content</span> in half the time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md relative z-10">
          <button 
            onClick={() => navigate('/login')}
            className="w-full py-4 text-base font-bold bg-white hover:bg-gray-200 text-black transition-colors rounded shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex justify-center items-center gap-2"
          >
            Launch Studio
            <ArrowRight size={18} />
          </button>
          <button className="w-full py-4 text-base font-bold bg-transparent text-gray-300 border border-gray-500/40 hover:border-gray-400 hover:bg-white/5 transition-colors rounded flex justify-center items-center gap-2">
            Watch Demo
            <Play size={18} fill="currentColor" />
          </button>
        </div>
      </section>

      {/* Trust Section - Left to Right Continuous Marquee */}
      <section className="relative z-10 py-12 border-y border-white/10 bg-black overflow-hidden flex items-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
        <div className="flex w-max animate-marquee-lr whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center justify-start gap-16 px-8 flex-shrink-0">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Trusted by top editors</h4>
            <span className="text-4xl font-black font-display tracking-tight text-[#E15759] hover:scale-105 transition-transform cursor-default">ADOBE</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#F28E2B] hover:scale-105 transition-transform cursor-default">REDDRAGON</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#4E79A7] hover:scale-105 transition-transform cursor-default">BLACKMAGIC</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#D090D1] hover:scale-105 transition-transform cursor-default">VANTAGE</span>
          </div>
          <div className="flex items-center justify-start gap-16 px-8 flex-shrink-0">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Trusted by top editors</h4>
            <span className="text-4xl font-black font-display tracking-tight text-[#E15759] hover:scale-105 transition-transform cursor-default">ADOBE</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#F28E2B] hover:scale-105 transition-transform cursor-default">REDDRAGON</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#4E79A7] hover:scale-105 transition-transform cursor-default">BLACKMAGIC</span>
            <span className="text-4xl font-black font-display tracking-tight text-[#D090D1] hover:scale-105 transition-transform cursor-default">VANTAGE</span>
          </div>
        </div>
      </section>

      {/* Feature Grid - Minimalist Typographic Layout */}
      <section id="features" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 - Orange Focus */}
          <div className="group flex flex-col items-start text-left border-t-[3px] border-[#F28E2B] pt-8 bg-gradient-to-b from-[#F28E2B]/5 to-transparent rounded-b-xl px-4 pb-6">
            <span className="text-7xl font-display font-black text-[#F28E2B] mb-8 drop-shadow-[0_0_15px_rgba(242,142,43,0.3)]">
              01
            </span>
            <h3 className="text-3xl font-bold mb-4 font-display tracking-tight text-white">Smart Audits</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Automated frame-by-frame analysis. Detect branding errors, audio desyncs, and pacing issues instantly with total precision.
            </p>
          </div>

          {/* Card 2 - Cyan Focus */}
          <div className="group flex flex-col items-start text-left border-t-[3px] border-[#76B7B2] pt-8 bg-gradient-to-b from-[#76B7B2]/5 to-transparent rounded-b-xl px-4 pb-6">
            <span className="text-7xl font-display font-black text-[#76B7B2] mb-8 drop-shadow-[0_0_15px_rgba(118,183,178,0.3)]">
              02
            </span>
            <h3 className="text-3xl font-bold mb-4 font-display tracking-tight text-white">Cloud Native</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              High-speed video hosting powered by distributed edge nodes. Access your library from anywhere with zero buffering.
            </p>
          </div>

          {/* Card 3 - Pink Focus */}
          <div className="group flex flex-col items-start text-left border-t-[3px] border-[#FF9DA7] pt-8 bg-gradient-to-b from-[#FF9DA7]/5 to-transparent rounded-b-xl px-4 pb-6">
            <span className="text-7xl font-display font-black text-[#FF9DA7] mb-8 drop-shadow-[0_0_15px_rgba(255,157,167,0.3)]">
              03
            </span>
            <h3 className="text-3xl font-bold mb-4 font-display tracking-tight text-white">Client Portals</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Distraction-free, unbranded review pages for your clients. Socket-powered real-time commenting straight exactly on the frame.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="relative z-10 py-32 px-6 text-center border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent">
        <h2 className="text-5xl font-black mb-10 font-display tracking-tight text-white">Ready to cut the noise?</h2>
        <button 
          onClick={() => navigate('/login')}
          className="bg-white text-black font-bold px-12 py-5 text-lg hover:scale-105 hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all uppercase tracking-widest rounded shadow-xl"
        >
          Start Editing
        </button>
        <p className="mt-16 text-gray-500 text-sm font-mono uppercase tracking-widest">
          &copy; 2026 CutBoard Studio
        </p>
      </footer>
    </div>
  );
}
