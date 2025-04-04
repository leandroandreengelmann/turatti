"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Search, Copy, CheckCircle2 } from 'lucide-react';
import type { Collection, Color } from '@/data/colorCollections';

interface ColorDetailPageProps {
  collection: Collection;
}

const ColorDetailPage: React.FC<ColorDetailPageProps> = ({ collection }) => {
  const [activeTab, setActiveTab] = useState<'todas'>('todas');
  const [selectedColor, setSelectedColor] = useState<Color | null>(collection.colors[0] || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Filtrar cores com base na pesquisa
  const filteredColors = collection.colors.filter(color => {
    return color.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           color.code.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Efeito de sombra no cabeçalho ao rolar
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 10) {
          headerRef.current.classList.add('shadow-md');
        } else {
          headerRef.current.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Copiar código da cor para a área de transferência
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCode(text);
      setTimeout(() => {
        setCopiedCode(null);
      }, 2000);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho fixo */}
      <div 
        ref={headerRef}
        className="sticky top-0 z-40 bg-white transition-shadow duration-300"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/colecoes-cores" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span className="font-medium">Voltar para Coleções</span>
            </Link>
            
            <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
              {collection.name}
            </h1>
            
            <div className="flex items-center gap-3">
              <button 
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Compartilhar"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner da coleção */}
      <div className="relative h-60 md:h-80 overflow-hidden">
        <img 
          src={collection.image || `https://via.placeholder.com/1200x400/E3F1D5/333333?text=${collection.name}`}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">{collection.name}</h2>
          <p className="max-w-2xl text-center text-lg">{collection.description}</p>
        </div>
      </div>
      
      {/* Catálogo de cores */}
      <div className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Catálogo de Cores</h3>
            
            {/* Barra de pesquisa */}
            <div className="relative mt-4 md:mt-0 w-full md:w-64">
              <input
                type="text"
                placeholder="Buscar por nome ou código"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          {/* Tabs para todas cores */}
          <div className="border-b border-gray-300 mb-6">
            <div className="flex gap-8">
              <h3 className="py-2 px-1 font-medium text-blue-600 relative">
                Todas as Cores
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              </h3>
            </div>
          </div>
          
          {/* Grid de cores */}
          {filteredColors.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredColors.map(color => (
                <div 
                  key={color.id}
                  className={`rounded-xl overflow-hidden transition-transform duration-300 ${
                    selectedColor?.id === color.id ? 'ring-2 ring-blue-600 transform scale-105' : 'shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <div 
                    className="h-40 w-full transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="p-4 bg-white">
                    <div className="mb-2">
                      <h4 className="font-medium text-gray-800">{color.name}</h4>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        {color.code}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(color.code);
                        }}
                        className="p-1.5 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {copiedCode === color.code ? (
                          <CheckCircle2 size={16} className="text-green-600" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-2">
                Nenhuma cor encontrada com esse termo de busca.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorDetailPage;