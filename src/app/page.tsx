// src/app/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCarousel from '@/components/ProductCarousel';
import ImageCarousel from '@/components/ImageCarousel';
import ColorCollection from '@/components/ColorCollection';
import { featuredProducts, newArrivals, promotionProducts } from '@/data/productData';
import placeholderBanners from '@/data/placeholderBanners';
import colorCollections from '@/data/colorCollections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turatti Materiais de Construção - Sua parceira em construção desde 1990',
  description: 'Encontre os melhores materiais de construção para sua obra. Ferramentas, materiais básicos e acabamentos com os melhores preços e qualidade.',
  keywords: 'materiais de construção, ferramentas, acabamentos, construção, reforma',
};

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex min-h-screen flex-col" role="main">
        {/* Carrossel de imagens logo abaixo do cabeçalho */}
        <ImageCarousel images={placeholderBanners || []} />
        
        {/* Carrosséis de produtos */}
        <ProductCarousel title="Produtos em Destaque" products={featuredProducts} />
        
        {/* Componente de coleções de cores */}
        <ColorCollection collections={colorCollections} title="Coleções de Cores Suvinil" />
        
        
        {/* Outros carrosséis podem ser adicionados conforme necessário */}
        {/* <ProductCarousel title="Novidades" products={newArrivals} /> */}
        {/* <ProductCarousel title="Ofertas Especiais" products={promotionProducts} /> */}
        
        {/* Restante do conteúdo será adicionado posteriormente */}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;