// src/data/colorCollections.ts

export interface Color {
    id: string;
    name: string;
    hex: string;
    code: string;
  }
  
  export interface Collection {
    id: string;
    name: string;
    description: string;
    image?: string;
    colors: Color[];
    slug: string;
  }
  
  export const colorCollections: Collection[] = [
    {
      id: "1",
      name: "Cores da Natureza",
      description: "Uma coleção inspirada nos tons suaves e acolhedores da natureza. Perfeita para criar ambientes tranquilos e harmoniosos.",
      image: "https://via.placeholder.com/800x600/E3F1D5/333333?text=Cores+da+Natureza",
      slug: "cores-da-natureza",
      colors: [
        { id: "n1", name: "Verde Bosque", hex: "#4D683F", code: "B771" },
        { id: "n2", name: "Piscina Natural", hex: "#8BB8BE", code: "C304" },
        { id: "n3", name: "Areia", hex: "#E7DECB", code: "A172" },
        { id: "n4", name: "Terra Batida", hex: "#B1764A", code: "B134" },
        { id: "n5", name: "Céu Aberto", hex: "#C4D9E5", code: "A112" },
        { id: "n6", name: "Caminho de Pedras", hex: "#8E8E8E", code: "C146" },
        { id: "n7", name: "Folha Seca", hex: "#C5B088", code: "A136" }
      ]
    },
    {
      id: "2",
      name: "Tons Urbanos",
      description: "Inspirada na arquitetura e vida urbana. Cores contemporâneas que dão personalidade e estilo a qualquer ambiente.",
      image: "https://via.placeholder.com/800x600/8E9DA5/FFFFFF?text=Tons+Urbanos",
      slug: "tons-urbanos",
      colors: [
        { id: "u1", name: "Concreto", hex: "#9E9E9E", code: "C148" },
        { id: "u2", name: "Grafite Escuro", hex: "#5A5A5A", code: "C152" },
        { id: "u3", name: "Azul Metrópole", hex: "#3A5999", code: "D107" },
        { id: "u4", name: "Cimento Queimado", hex: "#B2B2B2", code: "C379" },
        { id: "u5", name: "Tijolo", hex: "#AA4A3F", code: "B330" },
        { id: "u6", name: "Metal", hex: "#768087", code: "C173" }
      ]
    },
    {
      id: "3",
      name: "Cores Vibrantes",
      description: "Uma seleção de cores vivas e enérgicas para espaços que pedem personalidade e alegria.",
      image: "https://via.placeholder.com/800x600/FF8A65/FFFFFF?text=Cores+Vibrantes",
      slug: "cores-vibrantes",
      colors: [
        { id: "v1", name: "Amarelo Sol", hex: "#F9BE00", code: "B335" },
        { id: "v2", name: "Framboesa", hex: "#C4445D", code: "B340" },
        { id: "v3", name: "Azul Cobalto", hex: "#1F5AA3", code: "D108" },
        { id: "v4", name: "Verde Lima", hex: "#8CBE23", code: "B321" },
        { id: "v5", name: "Laranja", hex: "#F06A34", code: "B303" },
        { id: "v6", name: "Turquesa", hex: "#00A3AD", code: "D131" },
        { id: "v7", name: "Violeta", hex: "#9575CD", code: "D155" }
      ]
    },
    {
      id: "4",
      name: "Neutros Sofisticados",
      description: "Cores neutras e sofisticadas para criar ambientes elegantes e atemporais que nunca saem de moda.",
      image: "https://via.placeholder.com/800x600/E2D8CE/333333?text=Neutros+Sofisticados",
      slug: "neutros-sofisticados",
      colors: [
        { id: "s1", name: "Branco Gelo", hex: "#F5F5F5", code: "A001" },
        { id: "s2", name: "Camurça", hex: "#D1BBA7", code: "A148" },
        { id: "s3", name: "Bege Clássico", hex: "#E0D5C1", code: "A171" },
        { id: "s4", name: "Cinza Urbano", hex: "#B1ADA7", code: "C161" },
        { id: "s5", name: "Preto Fosco", hex: "#303030", code: "C153" },
        { id: "s6", name: "Marrom Glacê", hex: "#9D7D62", code: "A207" },
        { id: "s7", name: "Areia Dourada", hex: "#D7C9AD", code: "A178" },
        { id: "s8", name: "Cinza Platina", hex: "#D1D1CE", code: "C159" }
      ]
    },
    {
      id: "5",
      name: "Coleção Praiana",
      description: "Cores inspiradas no mar, na areia e no céu que trazem a sensação de férias à beira-mar para sua casa.",
      image: "https://via.placeholder.com/800x600/81D4FA/FFFFFF?text=Coleção+Praiana",
      slug: "colecao-praiana",
      colors: [
        { id: "p1", name: "Azul Oceano", hex: "#1A5B92", code: "D110" },
        { id: "p2", name: "Areia da Praia", hex: "#E6D2A8", code: "A177" },
        { id: "p3", name: "Coral", hex: "#FF8A65", code: "B304" },
        { id: "p4", name: "Água Cristalina", hex: "#8ECAE6", code: "D121" },
        { id: "p5", name: "Azul Horizonte", hex: "#4A6FA5", code: "D106" },
        { id: "p6", name: "Concha", hex: "#EFE6DB", code: "A161" }
      ]
    },
    {
      id: "6",
      name: "Coleção Clássica Suvinil",
      description: "As cores mais tradicionais e queridas da Suvinil, perfeitas para qualquer ambiente e estilo de decoração.",
      image: "https://via.placeholder.com/800x600/DCEDC8/333333?text=Clássica+Suvinil",
      slug: "classica-suvinil",
      colors: [
        { id: "c1", name: "Branco Neve", hex: "#FFFFFF", code: "A000" },
        { id: "c2", name: "Gelo", hex: "#F8F8F8", code: "A001" },
        { id: "c3", name: "Palha", hex: "#F5F0E1", code: "A167" },
        { id: "c4", name: "Perfeita Harmonia", hex: "#E5E1DA", code: "A023" },
        { id: "c5", name: "Algodão Egípcio", hex: "#E8E6DF", code: "A022" },
        { id: "c6", name: "Vanilla", hex: "#F0E8D3", code: "A170" },
        { id: "c7", name: "Bianco Sereno", hex: "#EFEEEA", code: "A025" }
      ]
    }
  ];
  
  export default colorCollections;