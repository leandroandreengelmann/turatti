"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Color {
  id: string;
  name: string;
  hex: string;
  code: string;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  image?: string;
  colors: Color[];
  slug: string;
}

interface ColorCollectionProps {
  collections: Collection[];
  title?: string;
}

const ColorCollection: React.FC<ColorCollectionProps> = ({ 
  collections, 
  title = "Coleções de Cores" 
}) => {
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore nossas coleções de cores Suvinil para encontrar a combinação perfeita para seu ambiente.
            Cada coleção foi cuidadosamente criada para trazer harmonia e estilo ao seu projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              href={`/colecoes-cores/${collection.slug}`} 
              key={collection.id}
              className="block"
            >
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredCollection(collection.id)}
                onMouseLeave={() => setHoveredCollection(null)}
              >
                {/* Imagem de capa da coleção */}
                <div className="relative h-60 overflow-hidden">
                  {collection.image ? (
                    <img 
                      src={collection.image} 
                      alt={collection.name} 
                      className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">Imagem não disponível</span>
                    </div>
                  )}
                  
                  {/* Overlay com o nome da coleção */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">{collection.name}</h3>
                  </div>
                </div>
                
                {/* Exibição das cores da coleção */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{collection.description}</p>
                  
                  <div className="flex gap-2">
                    {collection.colors.slice(0, 5).map((color) => (
                      <div 
                        key={color.id} 
                        className="relative group"
                      >
                        <div 
                          className="w-8 h-8 rounded-full shadow-sm border border-gray-200"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        
                        {/* Tooltip com o nome da cor */}
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded pointer-events-none transition-opacity duration-200 whitespace-nowrap ${
                          hoveredCollection === collection.id ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'
                        }`}>
                          {color.name}
                        </div>
                      </div>
                    ))}
                    
                    {/* Contador para mostrar quantas cores adicionais existem */}
                    {collection.colors.length > 5 && (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        +{collection.colors.length - 5}
                      </div>
                    )}
                  </div>
                  
                  {/* Botão de visualizar coleção */}
                  <div className="mt-6">
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300">
                      Ver Coleção
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorCollection;