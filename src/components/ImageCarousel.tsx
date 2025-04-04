"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  link?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Limpa o timeout se o componente for desmontado
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, []);

  // Configura o autoplay
  useEffect(() => {
    if (autoPlay && !isTransitioning) {
      autoPlayRef.current = setTimeout(() => {
        goToNext();
      }, autoPlayInterval);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, autoPlay, isTransitioning, autoPlayInterval]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Corresponde à duração da transição
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Corresponde à duração da transição
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Manipuladores de eventos de toque para swipe em dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe para a esquerda (próximo)
      goToNext();
    } else if (touchStart - touchEnd < -75) {
      // Swipe para a direita (anterior)
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Principal container do carrossel */}
      <div 
        className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Imagens do carrossel */}
        {images.map((image, index) => (
          <div 
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay de texto */}
            {(image.title || image.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6 text-white">
                {image.title && (
                  <h2 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h2>
                )}
                {image.description && (
                  <p className="text-sm md:text-base max-w-md">{image.description}</p>
                )}
                {image.link && (
                  <a 
                    href={image.link} 
                    className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Saiba mais
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-20 transition-all hidden md:block"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} className="text-gray-800" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md z-20 transition-all hidden md:block"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} className="text-gray-800" />
      </button>

      {/* Indicadores (pontos) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-blue-600 w-6' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;