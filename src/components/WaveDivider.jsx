const WaveDivider = ({ flip = false, color = '#FDF5E6', animate = true }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-[calc(100%+1.3px)] h-[50px] ${animate ? 'wave-animate' : ''}`}
        viewBox="0 0 1200 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0,25 C150,50 350,0 600,25 C850,50 1050,0 1200,25 L1200,50 L0,50 Z"
          fill={color}
          className="transition-all duration-1000"
        >
          {animate && (
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,25 C150,50 350,0 600,25 C850,50 1050,0 1200,25 L1200,50 L0,50 Z;
                M0,25 C200,0 400,50 600,25 C800,0 1000,50 1200,25 L1200,50 L0,50 Z;
                M0,25 C150,50 350,0 600,25 C850,50 1050,0 1200,25 L1200,50 L0,50 Z
              "
            />
          )}
        </path>
        <path
          d="M0,35 C200,10 400,45 600,35 C800,25 1000,45 1200,35 L1200,50 L0,50 Z"
          fill={color}
          opacity="0.5"
        >
          {animate && (
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,35 C200,10 400,45 600,35 C800,25 1000,45 1200,35 L1200,50 L0,50 Z;
                M0,35 C150,45 350,15 600,35 C850,45 1050,15 1200,35 L1200,50 L0,50 Z;
                M0,35 C200,10 400,45 600,35 C800,25 1000,45 1200,35 L1200,50 L0,50 Z
              "
            />
          )}
        </path>
      </svg>
    </div>
  );
};

export default WaveDivider;
