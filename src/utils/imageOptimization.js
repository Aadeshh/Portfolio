/**
 * Image optimization utilities for performance and accessibility
 */

// Import image manifest for optimized sources
let imageManifest = null;
try {
  imageManifest = await import('../assets/image-manifest.json');
} catch (error) {
  console.warn('Image manifest not found, using fallback optimization');
}

// WebP support detection
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Generate WebP and fallback image sources
export const getOptimizedImageSrc = (originalSrc, options = {}) => {
  const { quality = 80, format = 'webp' } = options;
  
  // Extract filename from src for manifest lookup
  const filename = originalSrc.split('/').pop()?.split('.')[0];
  
  if (imageManifest?.images?.[filename]) {
    const manifestEntry = imageManifest.images[filename];
    return {
      webp: manifestEntry.webp || originalSrc,
      fallback: manifestEntry.original || originalSrc,
      original: originalSrc
    };
  }
  
  // Fallback for images not in manifest
  return {
    webp: originalSrc, // Would be converted WebP version in production
    fallback: originalSrc,
    original: originalSrc
  };
};

// Lazy loading hook
export const useLazyLoading = (threshold = 0.1) => {
  const [loadedImages, setLoadedImages] = React.useState(new Set());
  const [visibleElements, setVisibleElements] = React.useState(new Set());
  const observerRef = React.useRef(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.lazyId;
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  const registerElement = (element, id) => {
    if (element && observerRef.current) {
      element.dataset.lazyId = id;
      observerRef.current.observe(element);
    }
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  return {
    loadedImages,
    visibleElements,
    registerElement,
    handleImageLoad,
    isVisible: (id) => visibleElements.has(id),
    isLoaded: (id) => loadedImages.has(id)
  };
};

// Generate comprehensive alt text for images
export const generateAltText = (type, context = {}) => {
  const altTexts = {
    profile: `${context.name || 'Professional'} - ${context.title || 'Software Developer & AI Enthusiast'}`,
    project: `Screenshot of ${context.title || 'project'} showing ${context.description ? context.description.substring(0, 80) + '...' : 'project interface'}`,
    logo: `${context.company || 'Company'} logo`,
    icon: `${context.technology || 'Technology'} icon`,
    placeholder: 'Loading image...',
    about: 'About section image',
    technology: `${context.name || 'Technology'} logo and icon`
  };

  return altTexts[type] || altTexts.placeholder;
};

// Image loading states
export const ImageLoadingStates = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

// Optimized image component props
export const getImageProps = (src, alt, options = {}) => {
  const {
    loading = 'lazy',
    decoding = 'async',
    fetchPriority = 'auto',
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  } = options;

  return {
    src,
    alt,
    loading,
    decoding,
    fetchPriority,
    sizes
  };
};