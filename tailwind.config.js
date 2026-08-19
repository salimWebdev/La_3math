/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF5E6',
        parchment: '#F5E6C8',
        sepia: '#704214',
        'warm-brown': '#8B6914',
        'vintage-gold': '#B8860B',
        'dark-sepia': '#3E2723',
        'warm-beige': '#D2B48C',
        'faded-rose': '#BC8F8F',
        'old-paper': '#FAF0E6',
        'deep-burgundy': '#5C1A1A',
        'antique-brass': '#CD853F',
        'ivory': '#FFFFF0',
        'linen': '#FAF0E6',
        'chocolate': '#D2691E',
        'sienna': '#A0522D',
        'mahogany': '#C04000',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-out': 'fadeOut 0.7s ease-in forwards',
        'scale-up': 'scaleUp 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-down': 'scaleDown 0.7s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'popup-exit': 'popupExit 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'text-reveal': 'textReveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'greeting-pop': 'greetingPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.7) rotate(-2deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.85)', opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(184, 134, 11, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(184, 134, 11, 0.6), 0 0 40px rgba(184, 134, 11, 0.2)' },
        },
        popupExit: {
          '0%': { opacity: '1', transform: 'scale(1) rotate(0deg)', filter: 'blur(0px)' },
          '50%': { opacity: '0.5', transform: 'scale(1.03) rotate(0.5deg)', filter: 'blur(1px)' },
          '100%': { opacity: '0', transform: 'scale(0.8) rotate(-1deg)', filter: 'blur(6px)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        greetingPop: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(10px)' },
          '60%': { transform: 'scale(1.05) translateY(-2px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
