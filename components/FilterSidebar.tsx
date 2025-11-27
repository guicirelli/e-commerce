import { useState } from 'react';

interface FilterSidebarProps {
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  selectedCategory: string;
  selectedSize: string;
}

export default function FilterSidebar({ onCategoryChange, onSizeChange, selectedCategory, selectedSize }: FilterSidebarProps) {
  const categories = [
    'Camisetas',
    'Acessórios', 
    'Camisas',
    'Bermudas',
    'Jaquetas',
    'Calças'
  ];

  const sizes = [
    '40', '42', '44', '46', '48', '50', 'UN', 'XXG', 'XXXG', 'P', 'M', 'G', 'GG'
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full overflow-y-auto">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Filtros</h3>
        
        {/* Categorias */}
        <div className="mb-8">
          <h4 className="text-md font-semibold text-gray-800 mb-4">Categoria</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="mr-3 text-black focus:ring-black"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tamanhos */}
        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-4">Tamanhos</h4>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <label key={size} className="flex items-center justify-center">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={(e) => onSizeChange(e.target.value)}
                  className="mr-2 text-black focus:ring-black"
                />
                <span className="text-gray-700 text-sm">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Botão Limpar Filtros */}
        <button 
          onClick={() => {
            onCategoryChange('');
            onSizeChange('');
          }}
          className="w-full mt-6 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
}



