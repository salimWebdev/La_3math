import { achievements } from '../data/memoryData';
import ScrollReveal from './ScrollReveal';

const AchievementsPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <ScrollReveal animation="fade-up" delay={0}>
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex justify-center mb-4">
            <span className="flourish text-2xl sm:text-3xl tracking-widest opacity-60 wind-sway">~ ~ ~</span>
          </div>
          <p className="font-script text-vintage-gold text-lg sm:text-xl mb-2 opacity-80 wind-drift">Our Journey of</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sepia mb-4 embossed-text">
            Glorious Achievements
          </h2>
          <div className="flex items-center justify-center gap-3 my-4 sm:my-6 wind-sway">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-vintage-gold" />
            <span className="text-vintage-gold text-sm">✦</span>
            <span className="text-vintage-gold text-xl sm:text-2xl animate-shimmer">❦</span>
            <span className="text-vintage-gold text-sm">✦</span>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-vintage-gold" />
          </div>
          <p className="font-body text-warm-brown italic max-w-xl mx-auto text-base sm:text-lg px-2">
            Milestones and accomplishments that made us proud
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical ornate line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px">
          <div className="h-full w-full bg-gradient-to-b from-vintage-gold/20 via-vintage-gold to-vintage-gold/20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-vintage-gold rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-vintage-gold rounded-full" />
        </div>

        {/* Achievement Items */}
        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <ScrollReveal
              key={achievement.id}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={150}
              distance={40}
            >
              <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline milestone marker */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 w-14 h-14 -m-1 bg-vintage-gold rounded-full opacity-20 blur-sm" />
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                         style={{
                           background: 'linear-gradient(135deg, #B8860B, #DAA520, #B8860B)',
                           border: '3px solid #F5E6C8',
                           boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.3)'
                         }}>
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                  <div className="ornate-frame rounded-sm p-1 ornate-hover">
                    <div className="bg-gradient-to-br from-cream to-parchment rounded-sm p-6">
                      <div className="inline-block mb-4">
                        <div className="vintage-badge rounded-sm px-4 py-1.5">
                          <span className="font-body text-xs tracking-widest uppercase">{achievement.date}</span>
                        </div>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-sepia mb-3 embossed-text leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-1 h-px bg-gradient-to-r from-vintage-gold/40 to-transparent" />
                        <span className="text-vintage-gold text-xs">◆</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-vintage-gold/40 to-transparent" />
                      </div>
                      <p className="font-body text-warm-brown leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex justify-center mt-4">
                        <span className="text-vintage-gold text-xs opacity-40">❧</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Certificate Section */}
      <ScrollReveal animation="scale-in" delay={200}>
        <div className="mt-12 sm:mt-20 max-w-2xl mx-auto px-2 sm:px-4">
          <div className="double-frame rounded-sm p-2 sm:p-3">
            <div className="ornate-frame rounded-sm p-1.5 sm:p-2">
              <div className="bg-gradient-to-br from-cream via-ivory to-cream rounded-sm p-5 sm:p-8 md:p-12 text-center relative">
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-2xl sm:text-3xl text-vintage-gold opacity-40">❧</div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-2xl sm:text-3xl text-vintage-gold opacity-40 rotate-90">❧</div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-2xl sm:text-3xl text-vintage-gold opacity-40 -rotate-90">❧</div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-2xl sm:text-3xl text-vintage-gold opacity-40 rotate-180">❧</div>
                <div className="flex justify-center mb-3 sm:mb-4">
                  <span className="flourish text-xl sm:text-2xl opacity-60">~ ~ ~</span>
                </div>
                <div className="mb-4 sm:mb-6">
                  <div className="wax-seal w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl filter brightness-125">🏫</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-sepia mb-2 embossed-text">
                  Certificate of Achievement
                </h3>
                <p className="font-script text-vintage-gold text-base sm:text-lg mb-4 sm:mb-6 opacity-80">
                  With Honor & Distinction
                </p>
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-vintage-gold" />
                  <span className="text-vintage-gold text-lg sm:text-xl">❦</span>
                  <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-vintage-gold" />
                </div>
                <p className="font-body text-warm-brown leading-relaxed text-base sm:text-lg italic max-w-lg mx-auto mb-6 sm:mb-8 px-2">
                  "This certifies that the Class of 2024 has successfully completed their journey
                  with honor, friendship, and countless beautiful memories that will be cherished forever."
                </p>
                <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                  <div className="w-8 sm:w-12 h-px bg-warm-beige" />
                  <span className="text-vintage-gold text-xs">◆</span>
                  <div className="w-8 sm:w-12 h-px bg-warm-beige" />
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 md:gap-16 mt-6 sm:mt-8">
                  <div className="text-center">
                    <div className="w-24 sm:w-32 h-px bg-sepia/60 mb-3 mx-auto" />
                    <p className="font-script text-xs sm:text-sm text-sepia">Class Teacher</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 sm:w-32 h-px bg-sepia/60 mb-3 mx-auto" />
                    <p className="font-script text-xs sm:text-sm text-sepia">Principal</p>
                  </div>
                </div>
                <div className="flex justify-center mt-6 sm:mt-8">
                  <span className="flourish text-lg sm:text-xl opacity-40">~ ~ ~</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Empty state */}
      {achievements.length === 0 && (
        <div className="text-center py-16">
          <div className="ornate-frame rounded-sm p-12 max-w-md mx-auto">
            <div className="text-6xl mb-4">🏆</div>
            <p className="font-serif text-xl text-sepia">No achievements yet</p>
            <p className="font-body text-warm-brown mt-2 italic">Add your milestones to the data file!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage;
