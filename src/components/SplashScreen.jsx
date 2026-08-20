import { useState, useEffect, useRef, useMemo } from 'react';

const SplashScreen = ({ onStart, onPlayAudio }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState('idle');
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particleAnimRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isOpening) return;

    if (onPlayAudio) {
      onPlayAudio();
    }

    setPhase('sparkle');
    startSparkles();

    const t1 = setTimeout(() => setPhase('dissolve'), 600);
    const t2 = setTimeout(() => setPhase('reveal'), 1200);
    const t3 = setTimeout(() => onStart(), 1600);
    const t4 = setTimeout(() => setIsVisible(false), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (particleAnimRef.current) cancelAnimationFrame(particleAnimRef.current);
    };
  }, [isOpening]);

  const ambientParticles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 8,
        drift: -30 + Math.random() * 60,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles = [];
    const colors = ['#FFD700', '#DAA520', '#B8860B', '#F5E6C8', '#FFF8DC'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.5,
        size: 0.5 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0,
        maxAlpha: 0.2 + Math.random() * 0.4,
        fadeSpeed: 0.003 + Math.random() * 0.005,
        phase: 'in',
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.phase === 'in') {
          p.alpha += p.fadeSpeed;
          if (p.alpha >= p.maxAlpha) p.phase = 'hold';
        } else if (p.phase === 'hold') {
          p.alpha -= p.fadeSpeed * 0.5;
          if (p.alpha <= 0) {
            p.phase = 'reset';
          }
        } else {
          p.x = Math.random() * w;
          p.y = h + 10;
          p.alpha = 0;
          p.phase = 'in';
        }

        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      particleAnimRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (particleAnimRef.current) cancelAnimationFrame(particleAnimRef.current);
    };
  }, []);

  const startSparkles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#FFD700', '#DAA520', '#B8860B', '#F5E6C8', '#FFF8DC', '#FFE4B5'];
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let i = 0; i < 120; i++) {
      const angle = (Math.PI * 2 * i) / 120 + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 6;
      const size = 1 + Math.random() * 3;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.008 + Math.random() * 0.015,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
        type: Math.random() > 0.6 ? 'star' : 'circle',
      });
    }

    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 3;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.random() * 6,
        color: '#FFD700',
        alpha: 0.8,
        decay: 0.005 + Math.random() * 0.008,
        rotation: 0,
        rotSpeed: 0,
        type: 'glow',
      });
    }

    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius, rotation) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * i) / spikes - Math.PI / 2;
        if (i === 0) ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        else ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive = true;

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.vx *= 0.99;
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        ctx.globalAlpha = Math.max(0, p.alpha);

        if (p.type === 'glow') {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          gradient.addColorStop(0, `rgba(255, 215, 0, ${p.alpha * 0.6})`);
          gradient.addColorStop(0.5, `rgba(218, 165, 32, ${p.alpha * 0.3})`);
          gradient.addColorStop(1, 'rgba(184, 134, 11, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star') {
          ctx.fillStyle = p.color;
          drawStar(ctx, p.x, p.y, 4, p.size, p.size * 0.4, p.rotation);
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      if (alive) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Deep rich background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-sepia via-[#2C1810] to-dark-sepia" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />

      {/* Ambient floating gold particles (canvas) */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 z-[1] pointer-events-none"
      />

      {/* Radial glow behind frame */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-vintage-gold rounded-full blur-3xl transition-all duration-700 ${
          phase === 'sparkle' ? 'opacity-30 scale-150' : phase === 'dissolve' ? 'opacity-50 scale-200' : 'opacity-10'
        }`} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 w-full max-w-xl mx-auto px-6 transition-all duration-700 ${
        phase === 'idle' ? 'opacity-100 scale-100' :
        phase === 'sparkle' ? 'opacity-100 scale-105' :
        phase === 'dissolve' ? 'opacity-0 scale-110 blur-sm' :
        'opacity-0 scale-95 blur-md'
      }`}>

        {/* Desktop: Frame with text overlay */}
        <div className="hidden md:block relative">
          {/* Corner ornaments */}
          <div className={`absolute -top-10 -left-10 text-5xl text-vintage-gold opacity-60 transition-all duration-500 ${
            loaded && phase === 'idle' ? 'opacity-60 translate-x-0 translate-y-0' : phase !== 'idle' ? 'opacity-0 -translate-x-4 -translate-y-4' : 'opacity-0 -translate-x-6 -translate-y-6'
          }`} style={{textShadow: '0 0 10px rgba(184,134,11,0.3)', transitionDelay: loaded ? '0.8s' : '0s', transitionDuration: '0.6s'}}>❧</div>
          <div className={`absolute -top-10 -right-10 text-5xl text-vintage-gold opacity-60 rotate-90 transition-all duration-500 ${
            loaded && phase === 'idle' ? 'opacity-60 translate-x-0 translate-y-0' : phase !== 'idle' ? 'opacity-0 translate-x-4 -translate-y-4' : 'opacity-0 translate-x-6 -translate-y-6'
          }`} style={{textShadow: '0 0 10px rgba(184,134,11,0.3)', transitionDelay: loaded ? '0.9s' : '0s', transitionDuration: '0.6s'}}>❧</div>
          <div className={`absolute -bottom-10 -left-10 text-5xl text-vintage-gold opacity-60 -rotate-90 transition-all duration-500 ${
            loaded && phase === 'idle' ? 'opacity-60 translate-x-0 translate-y-0' : phase !== 'idle' ? 'opacity-0 -translate-x-4 translate-y-4' : 'opacity-0 -translate-x-6 translate-y-6'
          }`} style={{textShadow: '0 0 10px rgba(184,134,11,0.3)', transitionDelay: loaded ? '1.0s' : '0s', transitionDuration: '0.6s'}}>❧</div>
          <div className={`absolute -bottom-10 -right-10 text-5xl text-vintage-gold opacity-60 rotate-180 transition-all duration-500 ${
            loaded && phase === 'idle' ? 'opacity-60 translate-x-0 translate-y-0' : phase !== 'idle' ? 'opacity-0 translate-x-4 translate-y-4' : 'opacity-0 translate-x-6 translate-y-6'
          }`} style={{textShadow: '0 0 10px rgba(184,134,11,0.3)', transitionDelay: loaded ? '1.1s' : '0s', transitionDuration: '0.6s'}}>❧</div>

          <div className="relative frame-glow-wrapper">
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178108/mn3jkew610p5wnghz7sf.png"
              alt="Ornate Frame"
              className={`w-full h-auto drop-shadow-2xl transition-all duration-1000 ease-out ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                filter: 'drop-shadow(0 10px 40px rgba(30,15,8,0.6))',
                transitionDelay: '0.2s'
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: '22% 22%' }}>
              <p className={`font-script text-[#8B6914] text-base mb-1 transition-all duration-700 ${
                loaded ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-3'
              }`} style={{ transitionDelay: loaded ? '0.6s' : '0s' }}>Welcome to the</p>
              <h1 className={`font-serif text-[#3E2723] text-4xl leading-none mb-2 text-center embossed-text transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ transitionDelay: loaded ? '0.8s' : '0s' }}>Class of 2026</h1>
              <p className={`font-body text-[#8B6914] text-sm italic tracking-wide mb-2 transition-all duration-700 ${
                loaded ? 'opacity-65 translate-y-0' : 'opacity-0 translate-y-3'
              }`} style={{ transitionDelay: loaded ? '1.0s' : '0s' }}>"Together We Shined"</p>
              <div className={`flex items-center gap-2 mb-2 opacity-50 transition-all duration-700 ${
                loaded ? 'opacity-50 scale-100' : 'opacity-0 scale-75'
              }`} style={{ transitionDelay: loaded ? '1.1s' : '0s' }}>
                <svg width="36" height="10" viewBox="0 0 36 10"><path d="M0 5 Q9 0, 18 5 Q27 10, 36 5" fill="none" stroke="#B8860B" strokeWidth="1"/></svg>
                <span className="text-[#B8860B] text-xs">✦</span>
                <svg width="36" height="10" viewBox="0 0 36 10" className="scale-x-[-1]"><path d="M0 5 Q9 0, 18 5 Q27 10, 36 5" fill="none" stroke="#B8860B" strokeWidth="1"/></svg>
              </div>
              <div className={`inline-block rounded-full px-5 py-1 relative transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-90'
              }`} style={{ zIndex: 999, background: 'linear-gradient(135deg, #6B3A1C, #5C2E14)', border: '1.5px solid #B8860B', boxShadow: '0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)', transitionDelay: loaded ? '1.2s' : '0s' }}>
                <span className="font-serif text-[#FAF0E6] text-[0.6rem] tracking-[0.3em] uppercase">2024 — 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Text only, no frame background */}
        <div className="md:hidden text-center">
          <p className={`font-script text-[#D2B48C] text-base mb-2 transition-all duration-700 ${
            loaded ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-3'
          }`} style={{ transitionDelay: loaded ? '0.3s' : '0s' }}>Welcome to the</p>
          <h1 className={`font-serif text-[#FAF0E6] text-4xl leading-none mb-3 embossed-text transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: loaded ? '0.5s' : '0s' }}>Class of 2026</h1>
          <p className={`font-body text-[#D2B48C] text-xs italic tracking-wide mb-4 transition-all duration-700 ${
            loaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-3'
          }`} style={{ transitionDelay: loaded ? '0.7s' : '0s' }}>"Together We Shined"</p>

          {/* Ornate divider */}
          <div className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
            loaded ? 'opacity-50 scale-100' : 'opacity-0 scale-75'
          }`} style={{ transitionDelay: loaded ? '0.9s' : '0s' }}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#B8860B]" />
            <span className="text-[#B8860B] text-xs">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#B8860B]" />
          </div>

          {/* Year badge */}
          <div className={`inline-block rounded-full px-6 py-1.5 relative transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-90'
          }`} style={{ zIndex: 999, background: 'linear-gradient(135deg, #6B3A1C, #5C2E14)', border: '1.5px solid #B8860B', boxShadow: '0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)', transitionDelay: loaded ? '1.1s' : '0s' }}>
            <span className="font-serif text-[#FAF0E6] text-[0.6rem] tracking-[0.3em] uppercase">2024 — 2026</span>
          </div>
        </div>

        {/* Call to action button */}
        <div className={`mt-8 sm:mt-10 text-center transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`} style={{ transitionDelay: loaded ? '1.4s' : '0s' }}>
          <button
            onClick={handleClick}
            disabled={isOpening}
            className={`vintage-button font-serif text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-sm tracking-wide uppercase transition-all duration-300 shimmer-btn ${
              isOpening ? 'scale-110 shadow-[0_0_40px_rgba(184,134,11,0.6)]' : ''
            }`}
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl">📖</span>
              Open the Album
            </span>
          </button>
        </div>

        <p className={`font-script text-warm-beige text-xs sm:text-sm italic opacity-50 mt-4 text-center transition-all duration-700 ${
          loaded ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-3'
        }`} style={{ transitionDelay: loaded ? '1.6s' : '0s' }}>
          Click to begin our story
        </p>
      </div>

      {/* Sparkle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-30 pointer-events-none"
      />

      {/* Golden light wash sweep */}
      {phase === 'reveal' && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 25 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
               style={{ animation: 'goldenSweep 1s ease-out forwards' }} />
        </div>
      )}

      {/* Vignette overlay during transition */}
      {phase !== 'idle' && (
        <div className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500"
             style={{
               background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,15,10,0.8) 100%)',
               opacity: phase === 'dissolve' || phase === 'reveal' ? 1 : 0.3
             }} />
      )}

      <style>{`
        @keyframes goldenSweep {
          0% { transform: translateX(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .frame-glow-wrapper {
          animation: frameGlow 3s ease-in-out infinite;
        }

        @keyframes frameGlow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(184, 134, 11, 0.15));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(184, 134, 11, 0.3)) drop-shadow(0 0 40px rgba(184, 134, 11, 0.1));
          }
        }

        .shimmer-btn {
          position: relative;
          overflow: hidden;
        }

        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 215, 0, 0.15),
            transparent
          );
          animation: btnShimmer 3s ease-in-out infinite;
        }

        @keyframes btnShimmer {
          0%, 70%, 100% { left: -100%; }
          50% { left: 150%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
