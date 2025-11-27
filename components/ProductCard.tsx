import Link from 'next/link';

export default function ProductCard({ product }: { product: { id: number; image: string; name: string; price: string; description?: string; } }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        {/* Imagem do produto */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            // Mostrar fallback visual
            const container = target.parentElement;
            if (container) {
              container.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div class="text-center text-white p-4">
                    <div class="text-4xl mb-2">👕</div>
                    <div class="text-sm font-semibold">${product.name}</div>
                    <div class="text-xs mt-2 opacity-75">Imagem não encontrada</div>
                  </div>
                </div>
              `;
            }
          }}
        />
        
        {/* Badge de desconto */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -20%
        </div>
        
        {/* Overlay com botão */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            Ver Detalhes
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            <span className="text-lg text-gray-500 line-through">R$ 149,90</span>
          </div>
          <div className="flex text-yellow-400">
            {'★'.repeat(5)}
          </div>
        </div>
        
        <button className="w-full bg-black text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
