import React, { useState, useRef, useEffect } from 'react';
import { generateAltText, ImageLoadingStates, getOptimizedImageSrc } from '../utils/imageOptimization';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  type = 'project',
  context = {},
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  placeholder = true,
  ...props
}) => {
  const [loadingState, setLoadingState] = useState(ImageLoadingStates.LOADING);
  const [isVisible, setIsVisible] = useState(!loading || loading !== 'lazy' || priority);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // Generate proper alt text if not provided
  const imageAlt = alt || generateAltText(type, context);
  
  // Get optimized image sources
  const imageSources = getOptimizedImageSrc(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && !priority && imgRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observerRef.current.observe(imgRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [loading, priority]);

  const handleLoad = (e) => {
    setLoadingState(ImageLoadingStates.LOADED);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setLoadingState(ImageLoadingStates.ERROR);
    onError?.(e);
  };

  // Loading placeholder component
  const LoadingPlaceholder = () => (
    <div className={`bg-gradient-to-br from-neutral-800 to-neutral-900 animate-pulse flex items-center justify-center ${className}`}>
      <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  );

  // Error placeholder component
  const ErrorPlaceholder = () => (
    <div className={`bg-gradient-to-br from-red-900/20 to-neutral-900 flex items-center justify-center ${className}`}>
      <div className="text-center text-neutral-400">
        <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
        <p className="text-xs">Image unavailable</p>
      </div>
    </div>
  );

  return (
    <div ref={imgRef} className="relative">
      {/* Show loading placeholder while not visible or loading */}
      {(!isVisible || loadingState === ImageLoadingStates.LOADING) && placeholder && (
        <LoadingPlaceholder />
      )}

      {/* Show error placeholder on error */}
      {loadingState === ImageLoadingStates.ERROR && (
        <ErrorPlaceholder />
      )}

      {/* Actual image - only render when visible */}
      {isVisible && (
        <picture>
          {/* WebP source for modern browsers */}
          {imageSources.webp && imageSources.webp !== src && (
            <source 
              srcSet={imageSources.webp} 
              type="image/webp"
            />
          )}
          
          {/* Fallback image */}
          <img
            src={imageSources.fallback}
            alt={imageAlt}
            className={`${className} ${
              loadingState === ImageLoadingStates.LOADED ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;