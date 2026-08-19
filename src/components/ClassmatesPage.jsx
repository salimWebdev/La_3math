import { classmates } from '../data/memoryData';

const ClassmatesPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="flex justify-center mb-4">
          <span className="flourish text-2xl sm:text-3xl tracking-widest opacity-60 wind-sway">~ ~ ~</span>
        </div>

        <p className="font-script text-vintage-gold text-lg sm:text-xl mb-2 opacity-80 wind-drift">The People Who</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sepia mb-4 embossed-text">
          Our Beloved Classmates
        </h2>

        <div className="flex items-center justify-center gap-3 my-4 sm:my-6 wind-sway">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-vintage-gold" />
          <span className="text-vintage-gold text-sm">✦</span>
          <span className="text-vintage-gold text-xl sm:text-2xl animate-shimmer">❦</span>
          <span className="text-vintage-gold text-sm">✦</span>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-vintage-gold" />
        </div>

        <p className="font-body text-warm-brown italic max-w-xl mx-auto text-base sm:text-lg px-2">
          The wonderful people who made our school days unforgettable
        </p>
      </div>

      {/* Full-width sections for each classmate */}
      <div className="space-y-8 sm:space-y-12">
        {classmates.map((classmate, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={classmate.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Full-width ornate section */}
              <div className="ornate-frame rounded-sm overflow-hidden">
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch min-h-[auto] md:min-h-[400px]`}>

                  {/* Photo + Name side */}
                  <div className={`md:w-[400px] flex-shrink-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-parchment/50 to-cream/50`}>
                    {/* Gold frame photo */}
                    <div className="relative w-full max-w-[280px] sm:max-w-[340px] mb-4 sm:mb-5">
                      <img
                        src="https://res.cloudinary.com/gdbmrkzo/image/upload/v1787178145/dx3uye0hwljxlocmlho9.png"
                        alt="Frame"
                        className="w-full h-auto"
                        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
                      />
                      {/* Student photo inside the frame */}
                      <div className="absolute inset-0 flex items-center justify-center" style={{ padding: '14% 16% 20% 16%' }}>
                        <div className="w-full h-full overflow-hidden photo-inner-shadow" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}>
                          <img
                            src={classmate.photo}
                            alt={classmate.name}
                            className="w-full h-full object-cover sepia-photo"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.querySelector('.placeholder-icon').style.display = 'flex';
                            }}
                          />
                          <div className="placeholder-icon hidden items-center justify-center absolute inset-0 text-5xl text-warm-beige/40">
                            📷
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-sepia embossed-text text-center leading-tight">
                      {classmate.name}
                    </h3>

                    {/* Nickname */}
                    {classmate.nickname && (
                      <p className="font-script text-vintage-gold text-sm sm:text-base italic mt-1 opacity-80 text-center">
                        "{classmate.nickname}"
                      </p>
                    )}
                  </div>

                  {/* Description side */}
                  <div className="flex-1 flex items-center justify-center p-5 sm:p-8 md:p-12 relative">
                    {/* Subtle vertical divider on desktop */}
                    <div className="hidden md:block absolute top-8 bottom-8 left-0 w-px bg-gradient-to-b from-transparent via-vintage-gold/30 to-transparent" />

                    <div className="max-w-lg">
                      {/* Ornate top accent */}
                      <div className="flex items-center gap-2 mb-4 sm:mb-5">
                        <div className="w-6 sm:w-8 h-px bg-vintage-gold/40" />
                        <span className="text-vintage-gold text-xs">◆</span>
                        <div className="w-8 sm:w-12 h-px bg-vintage-gold/40" />
                      </div>

                      <p className="font-body text-warm-brown leading-relaxed text-base sm:text-lg md:text-xl">
                        {classmate.description}
                      </p>

                      {/* Bottom ornament */}
                      <div className="flex items-center gap-2 mt-5 sm:mt-6">
                        <div className="w-8 sm:w-12 h-px bg-vintage-gold/40" />
                        <span className="text-vintage-gold text-xs">◆</span>
                        <div className="w-6 sm:w-8 h-px bg-vintage-gold/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassmatesPage;
