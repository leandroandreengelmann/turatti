// src/components/Placeholder.tsx
import React from 'react';

interface PlaceholderImageProps {
  category: string;
}

// Componente simples de placeholder para quando as imagens reais não estiverem disponíveis
const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ category }) => {
  // Cores diferentes para categorias diferentes
  const getCategoryColor = () => {
    switch (category) {
      case 'Ferramentas Elétricas':
        return 'bg-yellow-500';
      case 'Ferramentas Manuais':
        return 'bg-red-500';
      case 'Tintas':
        return 'bg-blue-500';
      case 'Materiais Básicos':
        return 'bg-gray-500';
      case 'Acabamento':
        return 'bg-purple-500';
      case 'Hidráulica':
        return 'bg-green-500';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center ${getCategoryColor()}`}>
      <div className="text-white text-center p-4">
        <svg 
          className="w-12 h-12 mx-auto mb-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <p className="font-medium">{category}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage;