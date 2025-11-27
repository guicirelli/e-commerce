import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DebugProductCard({ product }: { product: { id: number; image: string; name: string; price: string; description?: string; } }) {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Testar se a imagem carrega
    const img = new Image();
    img.onload = () => {
      console.log(`✅ Imagem carregada: ${product.image}`);
      setImageStatus('loaded');
    };
    img.onerror = () => {
      console.error(`❌ Erro na imagem: ${product.image}`);
      setImageStatus('error');
      setErrorMessage('Erro ao carregar imagem');
    };
    img.src = product.image;
  }, [product.image]);

  const handleImageLoad = () => {
    console.log(`✅ Imagem carregada no render: ${product.image}`);
    setImageStatus('loaded');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`❌ Erro na imagem no render: ${product.image}`);
    setImageStatus('error');
    setErrorMessage('Erro ao carregar imagem');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-500">
      {/* Debug Info */}
      <div className="bg-yellow-100 p-2 text-xs">
        <div><strong>Status:</strong> {imageStatus}</div>
        <div><strong>Imagem:</strong> {product.image}</div>
        <div><strong>Nome:</strong> {product.name}</div>
        {errorMessage && <div><strong>Erro:</strong> {errorMessage}</div>}
      </div>
      
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        {imageStatus === 'loading' && (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin text-2xl mb-2">⏳</div>
              <div className="text-xs">Carregando...</div>
            </div>
          </div>
        )}
        
        {imageStatus === 'error' && (
          <div className="w-full h-full bg-red-100 flex items-center justify-center">
            <div className="text-center text-red-600">
              <div className="text-2xl mb-2">❌</div>
              <div className="text-sm font-semibold">Erro</div>
              <div className="text-xs mt-1 break-all">{product.image}</div>
            </div>
          </div>
        )}
        
        {imageStatus === 'loaded' && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>
      
      <div className="p-6">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {product.name}
          </h3>
        </Link>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-3">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
        </div>
        
        <button className="w-full bg-black text-white py-3 px-4 rounded-xl font-semibold">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
