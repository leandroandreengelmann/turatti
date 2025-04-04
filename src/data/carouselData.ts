// src/data/carouselData.ts

export interface CarouselImage {
    id: number;
    src: string;
    alt: string;
    title?: string;
    description?: string;
    link?: string;
  }
  
  export const bannerImages: CarouselImage[] = [
    {
      id: 1,
      src: "/images/banners/banner1.jpg",
      alt: "Promoção de ferramentas",
      title: "Ferramentas com até 30% OFF",
      description: "Aproveite nossas ofertas especiais em ferramentas elétricas e manuais para sua obra.",
      link: "/promocoes/ferramentas"
    },
    {
      id: 2,
      src: "/images/banners/banner2.jpg",
      alt: "Materiais para acabamento",
      title: "Acabamento perfeito para sua obra",
      description: "Conheça nossa linha completa de materiais para acabamento com qualidade garantida.",
      link: "/categorias/acabamento"
    },
    {
      id: 3,
      src: "/images/banners/banner3.jpg",
      alt: "Tintas e revestimentos",
      title: "As melhores tintas para sua casa",
      description: "Opções de cores e texturas para transformar seus ambientes.",
      link: "/categorias/tintas"
    },
    {
      id: 4,
      src: "/images/banners/banner4.jpg",
      alt: "Materiais para construção",
      title: "Tudo para sua construção",
      description: "Cimento, tijolos, areia e tudo que você precisa com preços especiais.",
      link: "/categorias/construcao"
    }
  ];
  
  // Placeholder para quando não tiver imagens reais
  export const placeholderBanners: CarouselImage[] = [
    {
      id: 1,
      src: "https://via.placeholder.com/1200x400/0046CC/FFFFFF?text=Promoção+de+Ferramentas",
      alt: "Promoção de ferramentas",
      title: "Ferramentas com até 30% OFF",
      description: "Aproveite nossas ofertas especiais em ferramentas elétricas e manuais para sua obra.",
      link: "/promocoes/ferramentas"
    },
    {
      id: 2,
      src: "https://via.placeholder.com/1200x400/00AA55/FFFFFF?text=Materiais+para+Acabamento",
      alt: "Materiais para acabamento",
      title: "Acabamento perfeito para sua obra",
      description: "Conheça nossa linha completa de materiais para acabamento com qualidade garantida.",
      link: "/categorias/acabamento"
    },
    {
      id: 3,
      src: "https://via.placeholder.com/1200x400/FF5500/FFFFFF?text=Tintas+e+Revestimentos",
      alt: "Tintas e revestimentos",
      title: "As melhores tintas para sua casa",
      description: "Opções de cores e texturas para transformar seus ambientes.",
      link: "/categorias/tintas"
    },
    {
      id: 4,
      src: "https://via.placeholder.com/1200x400/6600CC/FFFFFF?text=Materiais+para+Construção",
      alt: "Materiais para construção",
      title: "Tudo para sua construção",
      description: "Cimento, tijolos, areia e tudo que você precisa com preços especiais.",
      link: "/categorias/construcao"
    }
  ];