import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  distance = 30,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1) rotate(0deg)';
    switch (animation) {
      case 'fade-up': return `translate(0, ${distance}px) scale(1)`;
      case 'fade-down': return `translate(0, -${distance}px) scale(1)`;
      case 'fade-left': return `translate(${distance}px, 0) scale(1)`;
      case 'fade-right': return `translate(-${distance}px, 0) scale(1)`;
      case 'scale-in': return `translate(0, 0) scale(0.85)`;
      case 'fade-in': return `translate(0, 0) scale(1)`;
      default: return `translate(0, ${distance}px) scale(1)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
