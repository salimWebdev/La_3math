import { useState } from 'react';

const LazyImage = ({ src, alt, className = '', style = {}, onError }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${!loaded && !error ? 'skeleton-shimmer' : ''}`}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={style}
          loading="eager"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setError(true);
            onError?.(e);
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;
