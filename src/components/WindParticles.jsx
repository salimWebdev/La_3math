import { useEffect, useState, useMemo } from 'react';

const PARTICLE_TYPES = [
  { type: 'leaf', symbol: '🍂', className: 'particle-leaf' },
  { type: 'leaf2', symbol: '🍃', className: 'particle-leaf' },
  { type: 'petal', symbol: '✿', className: 'particle-petal' },
  { type: 'petal2', symbol: '❀', className: 'particle-petal' },
  { type: 'sparkle', symbol: '✦', className: 'particle-sparkle' },
  { type: 'sparkle2', symbol: '✧', className: 'particle-sparkle' },
  { type: 'star', symbol: '⮞', className: 'particle-dust' },
  { type: 'dust', symbol: '', className: 'particle-dust' },
  { type: 'paper', symbol: '', className: 'particle-paper' },
];

const WindParticles = ({ count = 18 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay particles until after splash screen
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const particleType = PARTICLE_TYPES[i % PARTICLE_TYPES.length];
      const size = 8 + Math.random() * 14;
      const startX = Math.random() * 100;
      const startY = 60 + Math.random() * 50;
      const duration = 12 + Math.random() * 18;
      const delay = Math.random() * duration;
      const driftX = -150 + Math.random() * 350;
      const driftY = -(400 + Math.random() * 600);
      const endRotation = 180 + Math.random() * 540;
      const opacity = 0.25 + Math.random() * 0.45;

      return {
        id: i,
        ...particleType,
        size,
        startX,
        startY,
        duration,
        delay,
        driftX,
        driftY,
        endRotation,
        opacity,
      };
    });
  }, [count]);

  if (!isVisible) return null;

  return (
    <div className="wind-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.className}`}
          style={{
            left: `${p.startX}%`,
            top: `${p.startY}%`,
            fontSize: p.symbol ? `${p.size}px` : undefined,
            width: !p.symbol ? `${p.size * 0.4}px` : undefined,
            height: !p.symbol ? `${p.size * 0.4}px` : undefined,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            '--end-rotation': `${p.endRotation}deg`,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};

export default WindParticles;
