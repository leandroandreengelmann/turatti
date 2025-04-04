"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discountPercent?: number;
  category: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine number of visible products based on screen size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setVisibleProducts(1);
        } else if (window.innerWidth < 768) {
          setVisibleProducts(2);
        } else if (window.innerWidth < 1024) {
          setVisibleProducts(3);
        } else {
          setVisibleProducts(4);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex < products.length - visibleProducts) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75 && currentIndex < products.length - visibleProducts) {
      // Swipe left
      nextSlide();
    } else if (touchStart - touchEnd < -75 && currentIndex > 0) {
      // Swipe right
      prevSlide();
    }
  };

  // Format currency to BRL
  const formatCurrency = (value: number) => {
    if (typeof window !== 'undefined') {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    }
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  // Calculate original price before discount
  const calculateOriginalPrice = (price: number, discountPercent?: number) => {
    if (!discountPercent) return null;
    const originalPrice = price / (1 - discountPercent / 100);
    return formatCurrency(originalPrice);
  };

  return (
    <div className="w-full py-6 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with title and navigation buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
              aria-label="Produto anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentIndex >= products.length - visibleProducts}
              className={`p-2 rounded-full ${currentIndex >= products.length - visibleProducts ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'} transition-colors`}
              aria-label="Próximo produto"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex justify-center mb-4 md:hidden">
          <p className="text-sm text-gray-500">
            ← Deslize para navegar →
          </p>
        </div>
        
        {/* Carousel container */}
        <div 
          className="overflow-hidden" 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 px-2" 
                style={{ width: `${100 / visibleProducts}%` }}
              >
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* Product image */}
                  <div className="relative pt-[100%] bg-gray-100">
                    {product.image && !product.image.startsWith('/') ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-contain p-4"
                      />
                    ) : (
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400">{product.category}</span>
                      </div>
                    )}
                    
                    {/* Discount badge */}
                    {product.discountPercent && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discountPercent}%
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-xs py-1 px-2">
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Product info */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto">
                      {/* Price information */}
                      {product.discountPercent && (
                        <span className="text-sm text-gray-500 line-through block">
                          {calculateOriginalPrice(product.price, product.discountPercent)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-blue-600">
                        {formatCurrency(product.price)}
                      </span>
                      
                      {/* Ver produtos button */}
                      <div className="mt-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center space-x-2">
                          <span>Ver Produtos</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
              className={`p-3 rounded-full ${currentIndex === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'} shadow-md`}
              aria-label="Produto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentIndex >= products.length - visibleProducts}
              className={`p-3 rounded-full ${currentIndex >= products.length - visibleProducts ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white'} shadow-md`}
              aria-label="Próximo produto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Pagination dots for mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          {Array.from({ length: Math.min(products.length - visibleProducts + 1, 5) }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;