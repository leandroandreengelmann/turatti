// src/data/productData.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    discountPercent?: number;
    category: string;
  }
  
  export const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Furadeira de Impacto Bosch 750W",
      price: 299.90,
      image: "/images/products/furadeira.jpg",
      discountPercent: 15,
      category: "Ferramentas Elétricas"
    },
    {
      id: 2,
      name: "Conjunto de Chaves de Fenda 12 peças",
      price: 89.90,
      image: "/images/products/chaves.jpg",
      category: "Ferramentas Manuais"
    },
    {
      id: 3,
      name: "Tinta Acrílica Premium 18L",
      price: 249.90,
      image: "/images/products/tinta.jpg",
      discountPercent: 10,
      category: "Tintas"
    },
    {
      id: 4,
      name: "Serra Circular Makita 1800W",
      price: 599.90,
      image: "/images/products/serra.jpg",
      category: "Ferramentas Elétricas"
    },
    {
      id: 5,
      name: "Argamassa Colante AC-II 20kg",
      price: 32.90,
      image: "/images/products/argamassa.jpg",
      category: "Materiais Básicos"
    },
    {
      id: 6,
      name: "Porcelanato Polido 60x60cm",
      price: 89.90,
      image: "/images/products/porcelanato.jpg",
      discountPercent: 20,
      category: "Acabamento"
    },
    {
      id: 7,
      name: "Kit Torneira e Cuba para Banheiro",
      price: 199.90,
      image: "/images/products/torneira.jpg",
      category: "Hidráulica"
    },
    {
      id: 8,
      name: "Escada Multifuncional 4x4 Alumínio",
      price: 349.90,
      image: "/images/products/escada.jpg",
      discountPercent: 5,
      category: "Ferramentas"
    }
  ];
  
  export const newArrivals: Product[] = [
    {
      id: 9,
      name: "Serra Mármore Profissional 1500W",
      price: 349.90,
      image: "/images/products/serra-marmore.jpg",
      category: "Ferramentas Elétricas"
    },
    {
      id: 10,
      name: "Revestimento 3D Decorativo",
      price: 79.90,
      image: "/images/products/revestimento.jpg",
      discountPercent: 12,
      category: "Acabamento"
    },
    // Adicione mais produtos conforme necessário
  ];
  
  export const promotionProducts: Product[] = [
    {
      id: 11,
      name: "Caixa D'água 1000 Litros",
      price: 399.90,
      image: "/images/products/caixa-dagua.jpg",
      discountPercent: 25,
      category: "Hidráulica"
    },
    {
      id: 12,
      name: "Kit Ferramentas Manuais 100 peças",
      price: 149.90,
      image: "/images/products/kit-ferramentas.jpg",
      discountPercent: 30,
      category: "Ferramentas Manuais"
    },
    // Adicione mais produtos conforme necessário
  ];