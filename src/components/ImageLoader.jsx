import React, { useState, useEffect } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <p className="text-white">Failed to load image</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        />
      )}
    </div>
  );
};

export default ImageLoader;