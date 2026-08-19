import { useState, useEffect, useRef } from 'react';

const Navigation = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const menuRef = useRef(null);

  const navItems = [
    { id: 'classmates', label: 'Classmates', icon: 'https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178139/wxygndpjr3t4kbusia6d.png' },
    { id: 'souvenirs', label: 'Souvenirs', icon: 'https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178306/duvpoggtbk2tinzvkozw.png' },
    { id: 'achievements', label: 'Achievements', icon: 'https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178011/txdyab7ta5za8bd9jrtd.png' }
  ];

  const handleClick = (id) => {
    setClickedItem(id);
    onNavigate(id);
    setTimeout(() => setClickedItem(null), 600);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPage]);

  return (
    <nav className="relative z-40">
      {/* Navbar bar - overflow hidden clips the bg image and overlays */}
      <div className="relative overflow-hidden min-h-[70px] sm:min-h-[80px] md:min-h-[90px]" ref={menuRef}>
        <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178148/ahlc4lvgtjn4p4g5jp2p.png"
          alt="Navigation"
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
        />

        {/* Desktop Navigation overlay */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
          <div className="flex items-center gap-2">
            {/* Left key */}
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178146/cbluusc6twuwvsorxw6x.png"
              alt=""
              className="w-20 h-auto opacity-80 transition-transform duration-500 hover:scale-110"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
            />

            {/* Nav items */}
            <div className="flex items-center gap-5">
              {navItems.map((item, index) => (
                <div key={item.id} className="flex items-center group">
                  <button
                    onClick={() => handleClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center gap-2.5 transition-all duration-300 px-3 py-2 rounded-sm"
                  >
                    {/* Hover background glow */}
                    <div className={`absolute inset-0 rounded-sm transition-all duration-500 ${
                      currentPage === item.id
                        ? 'bg-[#B8860B]/20 shadow-[0_0_20px_rgba(184,134,11,0.3),inset_0_0_15px_rgba(184,134,11,0.15)]'
                        : hoveredItem === item.id
                          ? 'bg-[#B8860B]/10 shadow-[inset_0_0_10px_rgba(184,134,11,0.1)]'
                          : 'bg-transparent'
                    }`} />

                    {/* Icon with bounce on hover/active */}
                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`w-9 h-9 object-contain relative z-10 transition-all duration-300 ${
                        clickedItem === item.id ? 'animate-bounce' :
                        hoveredItem === item.id ? 'scale-110 -translate-y-0.5' : 'scale-100'
                      }`}
                      style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}
                    />

                    {/* Label */}
                    <span className={`font-serif text-base tracking-wide relative z-10 transition-all duration-300 ${
                      currentPage === item.id
                        ? 'text-[#3E2723] font-semibold'
                        : 'text-[#5C2E14] group-hover:text-[#3E2723]'
                    }`}
                    style={{ textShadow: currentPage === item.id ? '0 0 8px rgba(184,134,11,0.3)' : '0 1px 2px rgba(255,255,255,0.4)' }}>
                      {item.label}
                    </span>

                    {/* Active underline with glow */}
                    {currentPage === item.id && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#B8860B] to-transparent animate-shimmer" />
                        <div className="absolute inset-0 bg-[#B8860B]/40 blur-sm" />
                      </div>
                    )}

                    {/* Click ripple effect */}
                    {clickedItem === item.id && (
                      <div className="absolute inset-0 rounded-sm bg-[#B8860B]/20 animate-ping" />
                    )}
                  </button>

                  {/* Diamond separator */}
                  {index < navItems.length - 1 && (
                    <span className={`text-[#8B6914] text-[9px] mx-2 transition-all duration-300 ${
                      currentPage === item.id || currentPage === navItems[index + 1].id
                        ? 'opacity-70 text-[#B8860B]'
                        : 'opacity-40 group-hover:opacity-70'
                    }`}>◆</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right key flipped */}
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178146/cbluusc6twuwvsorxw6x.png"
              alt=""
              className="w-20 h-auto opacity-80 transition-transform duration-500 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                transform: 'scaleX(-1)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scaleX(-1) scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scaleX(-1)'}
            />
          </div>
        </div>

        {/* Tablet Navigation (md breakpoint) */}
        <div className="hidden md:flex lg:hidden absolute inset-0 items-center justify-center">
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Left key */}
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178146/cbluusc6twuwvsorxw6x.png"
              alt=""
              className="w-12 lg:w-14 h-auto opacity-80 transition-transform duration-500 hover:scale-110"
              style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }}
            />

            {/* Nav items */}
            <div className="flex items-center gap-1.5 lg:gap-3">
              {navItems.map((item, index) => (
                <div key={item.id} className="flex items-center group">
                  <button
                    onClick={() => handleClick(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative flex items-center gap-1.5 lg:gap-2 transition-all duration-300 px-1.5 lg:px-2 py-1.5 rounded-sm"
                  >
                    {/* Hover background */}
                    <div className={`absolute inset-0 rounded-sm transition-all duration-500 ${
                      currentPage === item.id
                        ? 'bg-[#B8860B]/20 shadow-[0_0_15px_rgba(184,134,11,0.25)]'
                        : hoveredItem === item.id
                          ? 'bg-[#B8860B]/10'
                          : 'bg-transparent'
                    }`} />

                    <img
                      src={item.icon}
                      alt={item.label}
                      className={`w-6 h-6 lg:w-7 lg:h-7 object-contain relative z-10 transition-all duration-300 ${
                        clickedItem === item.id ? 'animate-bounce' :
                        hoveredItem === item.id ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
                    />

                    <span className={`font-serif text-xs lg:text-sm tracking-wide relative z-10 transition-all duration-300 ${
                      currentPage === item.id ? 'text-[#3E2723] font-semibold' : 'text-[#5C2E14]'
                    }`}
                    style={{ textShadow: currentPage === item.id ? '0 0 6px rgba(184,134,11,0.25)' : '0 1px 1px rgba(255,255,255,0.4)' }}>
                      {item.label}
                    </span>

                    {currentPage === item.id && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#B8860B] to-transparent animate-shimmer" />
                        <div className="absolute inset-0 bg-[#B8860B]/40 blur-sm" />
                      </div>
                    )}

                    {clickedItem === item.id && (
                      <div className="absolute inset-0 rounded-sm bg-[#B8860B]/20 animate-ping" />
                    )}
                  </button>

                  {index < navItems.length - 1 && (
                    <span className="text-[#8B6914] text-[8px] mx-0.5 lg:mx-1 opacity-40">◆</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right key flipped */}
            <img
              src="https://res.cloudinary.com/gdbmrkzo/image/upload/f_auto,q_auto,w_100/v1787178146/cbluusc6twuwvsorxw6x.png"
              alt=""
              className="w-12 lg:w-14 h-auto opacity-80 transition-transform duration-500 hover:scale-110"
              style={{
                filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))',
                transform: 'scaleX(-1)'
              }}
            />
          </div>
        </div>

        {/* Mobile Navigation - Hamburger button + page title */}
        <div className="md:hidden absolute inset-0 flex items-center justify-between px-4">
          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-5 h-0.5 bg-[#5C2E14] rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-5 h-0.5 bg-[#5C2E14] rounded-full transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-5 h-0.5 bg-[#5C2E14] rounded-full transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>

          {/* Centered page title */}
          <span className="font-serif text-sm text-[#5C2E14] tracking-wide capitalize" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.3)' }}>
            {currentPage}
          </span>

          {/* Spacer to balance the hamburger */}
          <div className="w-8" />
        </div>
      </div>

      {/* Mobile dropdown menu - OUTSIDE overflow-hidden so it can extend below */}
      <div className={`md:hidden absolute top-full left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-gradient-to-b from-[#F5E6D3] to-[#E8D5B7] border-b border-[#B8860B]/30 shadow-lg">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={(e) => { e.stopPropagation(); handleClick(item.id); }}
              className={`w-full flex items-center gap-3 px-6 py-3.5 transition-all duration-300 ${
                currentPage === item.id
                  ? 'bg-[#B8860B]/20 shadow-[inset_0_0_10px_rgba(184,134,11,0.15)]'
                  : 'hover:bg-[#B8860B]/10'
              } ${index < navItems.length - 1 ? 'border-b border-[#B8860B]/10' : ''}`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-7 h-7 object-contain transition-all duration-300 ${
                  clickedItem === item.id ? 'animate-bounce' : ''
                }`}
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))' }}
              />
              <span className={`font-serif text-sm tracking-wide transition-all duration-300 ${
                currentPage === item.id ? 'text-[#3E2723] font-semibold' : 'text-[#5C2E14]'
              }`}
              style={{ textShadow: currentPage === item.id ? '0 0 6px rgba(184,134,11,0.2)' : 'none' }}>
                {item.label}
              </span>
              {currentPage === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
