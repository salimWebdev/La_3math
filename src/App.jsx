import { useState, useRef } from 'react';
import SplashScreen from './components/SplashScreen';
import Navigation from './components/Navigation';
import ClassmatesPage from './components/ClassmatesPage';
import SouvenirsPage from './components/SouvenirsPage';
import AchievementsPage from './components/AchievementsPage';
import WindParticles from './components/WindParticles';
import TypewriterText from './components/TypewriterText';
import WaveDivider from './components/WaveDivider';
import { classInfo } from './data/memoryData';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introClosing, setIntroClosing] = useState(false);
  const [currentPage, setCurrentPage] = useState('classmates');
  const [transitioning, setTransitioning] = useState(false);
  const [transitionPage, setTransitionPage] = useState(null);
  const audioRef = useRef(null);

  const handleNavigate = (page) => {
    if (page === currentPage || transitioning) return;
    setTransitionPage(page);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setTransitioning(false);
        setTransitionPage(null);
      }, 600);
    }, 400);
  };

  const handleStart = () => {
    setShowSplash(false);
    setShowIntro(true);
  };

  const closeIntro = () => {
    setIntroClosing(true);
    setTimeout(() => {
      setShowIntro(false);
      setIntroClosing(false);
    }, 800);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const resumeAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'classmates': return <ClassmatesPage />;
      case 'souvenirs': return <SouvenirsPage onPauseAudio={pauseAudio} onResumeAudio={resumeAudio} />;
      case 'achievements': return <AchievementsPage />;
      default: return <ClassmatesPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#2C1810] film-grain overflow-x-hidden">
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/assets/audio/bg-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating wind particles */}
      <WindParticles count={16} />

      {/* Candlelight flicker overlay */}
      <div className="candlelight-flicker" />

      {/* Splash Screen */}
      {showSplash && <SplashScreen onStart={handleStart} onPlayAudio={playAudio} />}

      {/* Intro Popup */}
      {showIntro && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${introClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
             style={{ backgroundColor: 'rgba(26, 15, 10, 0.95)' }}>
          <div className={`relative max-w-2xl w-full ${introClosing ? 'animate-popup-exit' : 'animate-scale-up'}`}>
            {/* Ornate frame */}
            <div className="double-frame rounded-sm p-3">
              <div className="ornate-frame rounded-sm p-6 md:p-10 bg-gradient-to-br from-[#FDF5E6] to-[#F5E6C8]">
                {/* Corner ornaments */}
                <div className="absolute top-4 left-4 text-2xl text-vintage-gold/40">❧</div>
                <div className="absolute top-4 right-4 text-2xl text-vintage-gold/40 rotate-90">❧</div>
                <div className="absolute bottom-4 left-4 text-2xl text-vintage-gold/40 -rotate-90">❧</div>
                <div className="absolute bottom-4 right-4 text-2xl text-vintage-gold/40 rotate-180">❧</div>

                {/* Top flourish */}
                <div className="flex items-center justify-center gap-2 mb-6" style={{ animation: 'textReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards', opacity: 0 }}>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-vintage-gold/50" />
                  <span className="text-vintage-gold text-sm">✦</span>
                  <span className="text-vintage-gold text-xl">❦</span>
                  <span className="text-vintage-gold text-sm">✦</span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-vintage-gold/50" />
                </div>

                {/* Greeting */}
                <div className="text-center mb-4" style={{ animation: 'greetingPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards', opacity: 0 }}>
                  <p className="font-script text-[#B8860B] text-xl md:text-2xl">
                    Dear La 3 Math
                  </p>
                </div>

                {/* Text content */}
                <div className="text-center space-y-4">
                  <p className="font-body text-[#3E2723] text-sm md:text-base leading-relaxed italic">
                    <TypewriterText
                      text="Since 2024, we've shared more than just a classroom. We shared laughs, memories, difficult days, and countless little moments that we'll probably never forget."
                      delay={500}
                      speed={25}
                    />
                  </p>
                  <p className="font-body text-[#3E2723] text-sm md:text-base leading-relaxed italic">
                    <TypewriterText
                      text="True friendship is not only about being together every day—it's about loyalty, standing by each other, and knowing that even when life takes us in different directions, the bond remains."
                      delay={4500}
                      speed={25}
                    />
                  </p>
                  <p className="font-body text-[#3E2723] text-sm md:text-base leading-relaxed italic">
                    <TypewriterText
                      text="Today, we're not just saying goodbye to classmates. We're saying goodbye to a chapter of our lives that we built together."
                      delay={8750}
                      speed={25}
                    />
                  </p>
                  <p className="font-body text-[#3E2723] text-sm md:text-base leading-relaxed italic">
                    <TypewriterText
                      text="We may be going our separate ways, but the memories, friendship, and loyalty we shared will always stay with us."
                      delay={11000}
                      speed={25}
                    />
                  </p>
                </div>

                {/* Bottom flourish */}
                <div className="flex items-center justify-center gap-2 mt-6" style={{ animation: 'textReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.3s forwards', opacity: 0 }}>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-vintage-gold/50" />
                  <span className="text-vintage-gold text-sm">✦</span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-vintage-gold/50" />
                </div>

                {/* Close button */}
                <div className="text-center mt-8" style={{ animation: 'textReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 1.5s forwards', opacity: 0 }}>
                  <button
                    onClick={closeIntro}
                    className="vintage-button font-serif text-sm md:text-base px-8 py-3 rounded-sm tracking-wide uppercase"
                  >
                    <span className="relative z-10">Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Transition Overlay */}
      {transitioning && (
        <div className="page-transition-overlay">
          {/* Dark curtain left */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#2C1810] via-[#3E2723] to-[#2C1810]"
               style={{ transformOrigin: 'left', animation: 'curtainLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards' }} />
          {/* Dark curtain right */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#2C1810] via-[#3E2723] to-[#2C1810]"
               style={{ transformOrigin: 'right', animation: 'curtainRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards' }} />
          {/* Gold flash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#B8860B]/0 via-[#B8860B]/40 to-[#B8860B]/0"
               style={{ animation: 'flashGold 1s ease-out forwards' }} />
          {/* Center ornament */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#B8860B] text-6xl drop-shadow-[0_0_15px_rgba(184,134,11,0.5)]"
                  style={{ animation: 'ornamentSpin 1s ease-in-out forwards' }}>❦</span>
          </div>
          {/* Corner ornaments */}
          <div className="absolute top-1/3 left-1/3 text-[#B8860B]/50 text-4xl"
               style={{ animation: 'ornamentSpin 1s ease-in-out 0.1s forwards', opacity: 0 }}>✦</div>
          <div className="absolute top-1/3 right-1/3 text-[#B8860B]/50 text-4xl"
               style={{ animation: 'ornamentSpin 1s ease-in-out 0.15s forwards', opacity: 0 }}>✦</div>
          <div className="absolute bottom-1/3 left-1/3 text-[#B8860B]/50 text-4xl"
               style={{ animation: 'ornamentSpin 1s ease-in-out 0.2s forwards', opacity: 0 }}>✦</div>
          <div className="absolute bottom-1/3 right-1/3 text-[#B8860B]/50 text-4xl"
               style={{ animation: 'ornamentSpin 1s ease-in-out 0.25s forwards', opacity: 0 }}>✦</div>
          {/* Page name */}
          <div className="absolute inset-0 flex items-center justify-center mt-20">
            <p className="font-script text-[#B8860B] text-xl tracking-[0.3em] uppercase opacity-0 drop-shadow-[0_0_10px_rgba(184,134,11,0.4)]"
               style={{ animation: 'textReveal 0.6s ease-out 0.25s forwards' }}>
              {transitionPage}
            </p>
          </div>
        </div>
      )}

      {/* Main Content — always mounted when splash is done, hidden behind z-50 popup */}
      {!showSplash && (
        <div className={showIntro ? 'invisible' : 'animate-fade-in'}>
          {/* Decorative top border */}
          <div className="h-2 bg-gradient-to-r from-dark-sepia via-sepia to-dark-sepia">
            <div className="h-full bg-gradient-to-r from-transparent via-vintage-gold/30 to-transparent" />
          </div>

          {/* Navigation */}
          <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

          {/* Header */}
          <header className="relative overflow-hidden">
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178320/uvk2lvkwqyab8drqso4q.jpg"
              alt="Welcome Class of 2026"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(30,15,8,0.4))' }}
            />

            {/* Text content overlaid on the image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-12 sm:px-[10%] sm:py-[10%] md:px-[15%] md:py-[12%]">
              <p className="font-script text-[#8B6914] text-xs sm:text-sm md:text-base mb-1 opacity-80 wind-drift">
                Welcome to the
              </p>

              <h1 className="font-serif text-[#3E2723] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3rem] leading-none mb-2 text-center embossed-text">
                {classInfo.className}
              </h1>

              <p className="font-body text-[#8B6914] text-[0.6rem] sm:text-xs md:text-sm italic tracking-wide mb-2 opacity-65 wind-sway-slow">
                "{classInfo.motto}"
              </p>

              <div className="flex items-center gap-1 sm:gap-2 mb-2 opacity-50 wind-sway">
                <svg width="24" height="8" viewBox="0 0 36 10" className="sm:w-9 sm:h-3">
                  <path d="M0 5 Q9 0, 18 5 Q27 10, 36 5" fill="none" stroke="#B8860B" strokeWidth="1"/>
                </svg>
                <span className="text-[#B8860B] text-[0.5rem] sm:text-xs">✦</span>
                <svg width="24" height="8" viewBox="0 0 36 10" className="sm:w-9 sm:h-3 scale-x-[-1]">
                  <path d="M0 5 Q9 0, 18 5 Q27 10, 36 5" fill="none" stroke="#B8860B" strokeWidth="1"/>
                </svg>
              </div>

              <div className="inline-block rounded-full px-3 sm:px-5 py-0.5 sm:py-1 breathe-glow"
                   style={{
                     background: 'linear-gradient(135deg, #6B3A1C, #5C2E14)',
                     border: '1.5px solid #B8860B',
                     boxShadow: '0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)'
                   }}>
                <span className="font-serif text-[#FAF0E6] text-[0.5rem] sm:text-[0.6rem] tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  {classInfo.yearRange}
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent" />
          </header>
          <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
            <div className="absolute -left-4 top-20 text-vintage-gold/8 text-5xl wind-drift" style={{ animationDelay: '1s' }}>❧</div>
            <div className="absolute -right-4 top-40 text-vintage-gold/8 text-5xl wind-drift" style={{ animationDelay: '3s' }}>❧</div>
            <div className="absolute left-1/4 -top-2 text-vintage-gold/6 text-3xl wind-sway-fast" style={{ animationDelay: '0.5s' }}>✦</div>
            <div className="absolute right-1/3 bottom-10 text-vintage-gold/6 text-3xl wind-sway-fast" style={{ animationDelay: '2.5s' }}>✦</div>

            <div key={currentPage} className="page-transition">
              {renderPage()}
            </div>
          </main>

          {/* Divider to footer */}
          <div className="h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent" />

          {/* Footer */}
          <footer className="paper-texture relative">
            <div className="absolute top-6 left-1/4 text-vintage-gold/15 text-3xl wind-sway-slow">❦</div>
            <div className="absolute top-8 right-1/4 text-vintage-gold/15 text-3xl wind-sway-slow" style={{ animationDelay: '1.5s' }}>❦</div>

            <div className="py-10 px-4 text-center">
              <div className="flex justify-center mb-4">
                <span className="flourish text-2xl opacity-50 wind-sway">~ ~ ~</span>
              </div>

              <div className="flex items-center justify-center gap-3 mb-4 wind-sway" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-vintage-gold/50" />
                <span className="text-vintage-gold text-lg">❦</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-vintage-gold/50" />
              </div>

              <p className="font-serif text-lg text-sepia mb-1 wind-drift">
                {classInfo.schoolName}
              </p>

              <p className="font-body text-sm text-warm-brown">
                {classInfo.className}
              </p>

              <p className="font-script text-warm-beige text-base mt-4 italic opacity-70 wind-sway-slow">
                "Memories fade, but friendship lasts forever"
              </p>

              <div className="flex justify-center mt-4">
                <span className="flourish text-xl opacity-40 wind-sway" style={{ animationDelay: '3s' }}>~ ~ ~</span>
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-dark-sepia via-sepia to-dark-sepia">
              <div className="h-full bg-gradient-to-r from-transparent via-vintage-gold/30 to-transparent" />
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
