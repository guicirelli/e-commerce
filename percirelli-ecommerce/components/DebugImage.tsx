import { useState, useEffect } from 'react';

interface DebugImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function DebugImage({ src, alt, className }: DebugImageProps) {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [debugInfo, setDebugInfo] = useState('');

  useEffect(() => {
    // Testar se a imagem existe
    const img = new Image();
    
    img.onload = () => {
      setImageStatus('loaded');
      setDebugInfo(`✅ Carregada: ${src}`);
    };
    
    img.onerror = () => {
      setImageStatus('error');
      setDebugInfo(`❌ Erro: ${src}`);
    };
    
    img.src = src;
  }, [src]);

  if (imageStatus === 'loading') {
    return (
      <div className={`bg-gray-300 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-600 p-4">
          <div className="animate-spin text-2xl mb-2">⏳</div>
          <div className="text-xs">Carregando...</div>
        </div>
      </div>
    );
  }

  if (imageStatus === 'error') {
    return (
      <div className={`bg-red-100 border-2 border-red-300 flex items-center justify-center ${className}`}>
        <div className="text-center text-red-600 p-4">
          <div className="text-2xl mb-2">❌</div>
          <div className="text-xs font-semibold">{alt}</div>
          <div className="text-xs mt-1 break-all">{debugInfo}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        setImageStatus('error');
        setDebugInfo(`❌ Erro no render: ${src}`);
      }}
    />
  );
}



