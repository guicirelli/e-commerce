import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function SafeImage({ src, alt, className, fallback }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center ${className}`}>
        {fallback || (
          <div className="text-center text-white p-4">
            <div className="text-2xl mb-2">👕</div>
            <div className="text-sm font-semibold">{alt}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
          <div className="text-gray-400">Carregando...</div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}



