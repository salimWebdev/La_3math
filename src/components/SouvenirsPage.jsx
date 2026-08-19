import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { souvenirs } from '../data/memoryData';

const getVideoThumbnail = (videoUrl) => {
  return videoUrl
    .replace('/video/upload/', '/video/upload/f_auto,q_auto,w_400,so_0/')
    .replace('.mp4', '.jpg');
};

const getOptimizedVideoUrl = (videoUrl) => {
  return videoUrl
    .replace('/video/upload/', '/video/upload/f_auto,q_auto:low,w_480,br_500k,so_0/')
    .replace('.mp4', '.mp4');
};

const SouvenirsPage = ({ onPauseAudio, onResumeAudio }) => {
  const [selectedSouvenir, setSelectedSouvenir] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedSouvenir?.type === 'video') {
      setVideoLoading(true);
      setVideoReady(false);
    }
  }, [selectedSouvenir]);

  const closeLightbox = () => {
    setSelectedSouvenir(null);
    setVideoLoading(false);
    setVideoReady(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = '';
    }
    if (onResumeAudio) onResumeAudio();
  };

  const handleVideoPlay = () => {
    if (onPauseAudio) onPauseAudio();
  };

  const handleVideoPause = () => {
    if (onResumeAudio) onResumeAudio();
  };

  const handleVideoEnded = () => {
    if (onResumeAudio) onResumeAudio();
  };

  const handleVideoLoadedData = () => {
    setVideoLoading(false);
    setVideoReady(true);
  };

  const handleVideoWaiting = () => {
    setVideoLoading(true);
  };

  const handleVideoCanPlay = () => {
    setVideoLoading(false);
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="flex justify-center mb-4">
          <span className="flourish text-2xl sm:text-3xl tracking-widest opacity-60 wind-sway">~ ~ ~</span>
        </div>

        <p className="font-script text-vintage-gold text-lg sm:text-xl mb-2 opacity-80 wind-drift">Treasured Memories of</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sepia mb-4 embossed-text">
          Our Cherished Souvenirs
        </h2>

        <div className="flex items-center justify-center gap-3 my-4 sm:my-6 wind-sway">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-vintage-gold" />
          <span className="text-vintage-gold text-sm">✦</span>
          <span className="text-vintage-gold text-xl sm:text-2xl animate-shimmer">❦</span>
          <span className="text-vintage-gold text-sm">✦</span>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-vintage-gold" />
        </div>

        <p className="font-body text-warm-brown italic max-w-xl mx-auto text-base sm:text-lg px-2">
          Photos and videos from our unforgettable moments together
        </p>
      </div>

      {/* Gallery - Pinterest Masonry Layout */}
      <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
        {souvenirs.map((souvenir, index) => {
          const rotations = ['rotate-[-1deg]', 'rotate-[0.5deg]', 'rotate-[-0.5deg]', 'rotate-[1deg]', 'rotate-[-0.8deg]', 'rotate-[0.3deg]'];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={souvenir.id}
              className={`break-inside-avoid ornate-hover cursor-pointer ${rotation}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedSouvenir(souvenir)}
            >
              {/* Polaroid / Scrapbook card */}
              <div className="relative mb-3 md:mb-4">
                {/* Tape effect on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 md:w-16 h-4 md:h-5 z-10"
                     style={{
                       background: 'linear-gradient(180deg, rgba(255,248,220,0.65), rgba(245,230,200,0.45))',
                       border: '1px solid rgba(210,180,140,0.35)',
                       boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                       transform: `translateX(-50%) rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`
                     }} />

                {/* Card body */}
                <div className="bg-cream border-2 border-warm-beige/60 p-2 md:p-3 shadow-lg"
                     style={{
                       boxShadow: '0 4px 20px rgba(62,39,35,0.15), 0 2px 6px rgba(62,39,35,0.1)'
                     }}>

                  {/* Media with ornate frame */}
                  <div className="photo-frame-ornate rounded-sm mb-2 md:mb-3">
                    <div className="bg-gradient-to-br from-parchment to-cream photo-inner-shadow overflow-hidden rounded-sm">
                      {souvenir.type === 'video' ? (
                        <div className="relative">
                          <img
                            src={getVideoThumbnail(souvenir.src)}
                            alt={souvenir.caption}
                            className="w-full object-cover sepia-photo"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.querySelector('.placeholder-icon').style.display = 'flex';
                            }}
                          />
                          <div className="placeholder-icon hidden items-center justify-center h-48 text-5xl text-warm-beige/40">
                            🎬
                          </div>
                          {/* Ornate play button */}
                          <div className="absolute inset-0 flex items-center justify-center bg-dark-sepia/30">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                                 style={{
                                   background: 'radial-gradient(circle at 35% 35%, #FDF5E6, #F5E6C8)',
                                   border: '3px solid #B8860B',
                                   boxShadow: '0 4px 12px rgba(0,0,0,0.3), inset 0 1px 3px rgba(255,255,255,0.5)'
                                 }}>
                              <svg className="w-5 h-5 md:w-6 md:h-6 text-sepia ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[4/3] bg-gradient-to-br from-parchment to-cream flex items-center justify-center relative">
                          <img
                            src={souvenir.src}
                            alt={souvenir.caption}
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
                      )}
                    </div>
                  </div>

                  {/* Caption area */}
                  <div className="text-center px-1 md:px-2 pb-1 md:pb-2 pt-1">
                    {/* Ornate mini divider */}
                    <div className="flex items-center justify-center gap-1 mb-1 md:mb-2">
                      <div className="w-4 md:w-6 h-px bg-warm-beige" />
                      <span className="text-vintage-gold text-[8px] md:text-[10px]">◆</span>
                      <div className="w-4 md:w-6 h-px bg-warm-beige" />
                    </div>

                    <p className="font-body text-xs md:text-sm text-warm-brown italic leading-snug">
                      "{souvenir.caption}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedSouvenir && ReactDOM.createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(26, 15, 10, 0.95)',
            padding: '16px',
            animation: 'fadeIn 0.3s ease-out',
            overflow: 'hidden'
          }}
          onClick={closeLightbox}
        >
          {/* Close X button - top right */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 10000,
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #704214, #5C1A1A)',
              border: '2px solid #B8860B',
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              cursor: 'pointer',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="24" height="24" fill="none" stroke="#FDF5E6" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Media Content - centered */}
          <div
            style={{
              position: 'relative',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'auto',
              animation: 'scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media in ornate frame */}
            <div className="double-frame rounded-sm p-2" style={{ width: '100%', flexShrink: 0 }}>
              <div className="ornate-frame rounded-sm p-2" style={{ overflow: 'hidden', position: 'relative' }}>
                {selectedSouvenir.type === 'video' ? (
                  <>
                    {/* Loading spinner */}
                    {videoLoading && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(26, 15, 10, 0.8)',
                        zIndex: 5,
                        borderRadius: '2px'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          border: '3px solid rgba(184, 134, 11, 0.3)',
                          borderTopColor: '#B8860B',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                        <p style={{
                          color: '#D2B48C',
                          fontSize: '14px',
                          marginTop: '12px',
                          fontFamily: 'Lora, Georgia, serif',
                          fontStyle: 'italic'
                        }}>
                          Loading video...
                        </p>
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      src={getOptimizedVideoUrl(selectedSouvenir.src)}
                      poster={getVideoThumbnail(selectedSouvenir.src)}
                      controls
                      preload="auto"
                      style={{
                        width: '100%',
                        maxHeight: '60vh',
                        objectFit: 'contain',
                        borderRadius: '2px',
                        opacity: videoReady ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      onEnded={handleVideoEnded}
                      onLoadedData={handleVideoLoadedData}
                      onWaiting={handleVideoWaiting}
                      onCanPlay={handleVideoCanPlay}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </>
                ) : (
                  <img
                    src={selectedSouvenir.src}
                    alt={selectedSouvenir.caption}
                    style={{ width: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '2px' }}
                  />
                )}
              </div>
            </div>

            {/* Caption below frame */}
            <div style={{ textAlign: 'center', marginTop: '16px', padding: '0 16px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                <div style={{ width: '32px', height: '1px', background: 'rgba(184,134,11,0.5)' }} />
                <span style={{ color: '#B8860B', fontSize: '14px' }}>✦</span>
                <div style={{ width: '32px', height: '1px', background: 'rgba(184,134,11,0.5)' }} />
              </div>
              <p className="font-body" style={{ fontSize: '16px', color: '#FAF0E6', fontStyle: 'italic' }}>
                "{selectedSouvenir.caption}"
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Empty state */}
      {souvenirs.length === 0 && (
        <div className="text-center py-16">
          <div className="ornate-frame rounded-sm p-12 max-w-md mx-auto">
            <div className="text-6xl mb-4">📷</div>
            <p className="font-serif text-xl text-sepia">No souvenirs yet</p>
            <p className="font-body text-warm-brown mt-2 italic">Add your memories to the data file!</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SouvenirsPage;
