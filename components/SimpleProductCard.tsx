export default function SimpleProductCard({ product }: { product: { id: number; image: string; name: string; price: string; description?: string; } }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-red-500">
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        {/* Imagem simples sem fallback complexo */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{ border: '2px solid blue' }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        
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



