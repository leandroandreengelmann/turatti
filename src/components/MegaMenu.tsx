"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Hammer, BrickWall, Zap, Droplet, Paintbrush, Shield } from 'lucide-react';

// Estrutura de dados
interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  subcategories: SubCategory[];
}

const categories: Category[] = [
  { id: 1, name: 'Ferramentas', slug: 'ferramentas', icon: Hammer, subcategories: [
    { id: 101, name: 'Ferramentas Elétricas', slug: 'ferramentas-eletricas' },
    { id: 102, name: 'Ferramentas Manuais', slug: 'ferramentas-manuais' },
    { id: 103, name: 'Ferramentas de Medição', slug: 'ferramentas-de-medicao' },
    { id: 104, name: 'Ferramentas de Jardim', slug: 'ferramentas-de-jardim' },
    { id: 105, name: 'Ferramentas para Marcenaria', slug: 'ferramentas-para-marcenaria' },
  ]},
  { id: 2, name: 'Materiais Básicos', slug: 'materiais-basicos', icon: BrickWall, subcategories: [
    { id: 201, name: 'Cimento e Argamassa', slug: 'cimento-e-argamassa' },
    { id: 202, name: 'Areia e Pedra', slug: 'areia-e-pedra' },
    { id: 203, name: 'Tijolos e Blocos', slug: 'tijolos-e-blocos' },
    { id: 204, name: 'Telhas', slug: 'telhas' },
    { id: 205, name: 'Madeiras', slug: 'madeiras' },
  ]},
  { id: 3, name: 'Elétrica', slug: 'eletrica', icon: Zap, subcategories: [
    { id: 301, name: 'Fios e Cabos', slug: 'fios-e-cabos' },
    { id: 302, name: 'Disjuntores', slug: 'disjuntores' },
    { id: 303, name: 'Interruptores e Tomadas', slug: 'interruptores-e-tomadas' },
    { id: 304, name: 'Iluminação', slug: 'iluminacao' },
    { id: 305, name: 'Quadros de Distribuição', slug: 'quadros-de-distribuicao' },
  ]},
  { id: 4, name: 'Hidráulica', slug: 'hidraulica', icon: Droplet, subcategories: [
    { id: 401, name: 'Tubos e Conexões', slug: 'tubos-e-conexoes' },
    { id: 402, name: 'Registros e Válvulas', slug: 'registros-e-valvulas' },
    { id: 403, name: 'Caixas d\'água', slug: 'caixas-dagua' },
    { id: 404, name: 'Bombas e Pressurizadores', slug: 'bombas-e-pressurizadores' },
    { id: 405, name: 'Pias e Tanques', slug: 'pias-e-tanques' },
  ]},
  { id: 5, name: 'Acabamento', slug: 'acabamento', icon: Paintbrush, subcategories: [
    { id: 501, name: 'Pisos e Revestimentos', slug: 'pisos-e-revestimentos' },
    { id: 502, name: 'Tintas', slug: 'tintas' },
    { id: 503, name: 'Portas e Janelas', slug: 'portas-e-janelas' },
    { id: 504, name: 'Metais e Acessórios', slug: 'metais-e-acessorios' },
    { id: 505, name: 'Banheiras e Duchas', slug: 'banheiras-e-duchas' },
  ]},
  { id: 6, name: 'Equipamentos de Segurança', slug: 'equipamentos-de-seguranca', icon: Shield, subcategories: [
    { id: 601, name: 'EPIs', slug: 'epis' },
    { id: 602, name: 'Escadas e Andaimes', slug: 'escadas-e-andaimes' },
    { id: 603, name: 'Sinalização', slug: 'sinalizacao' },
    { id: 604, name: 'Extintores', slug: 'extintores' },
    { id: 605, name: 'Kits de Primeiros Socorros', slug: 'kits-de-primeiros-socorros' },
  ]},
];

const MegaMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [openCategoryMobile, setOpenCategoryMobile] = useState<number | null>(null); // Estado para controlar categorias abertas no mobile
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenCategoryMobile(null); // Resetar categorias abertas no mobile
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveCategory(categories[0].id);
      setOpenCategoryMobile(null); // Resetar ao abrir o menu
    } else {
      setActiveCategory(null);
    }
  };

  const handleCategoryHover = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  const toggleCategoryMobile = (categoryId: number) => {
    setOpenCategoryMobile(openCategoryMobile === categoryId ? null : categoryId);
    setActiveCategory(categoryId);
  };

  return (
    <div className="relative font-sans" ref={menuRef}>
      {/* Botão do Menu */}
      <button
        type="button"
        className="inline-flex items-center gap-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 transition-all dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="categories-menu"
      >
        <span>Categorias</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Menu Flyout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="categories-menu"
            className="absolute left-0 top-full z-20 mt-2 w-full max-w-5xl rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-700 overflow-hidden lg:w-[64rem] lg:max-w-none"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-4">
              {/* Categorias */}
              <div className="col-span-1 bg-gray-50 p-4 dark:bg-gray-800">
                <ul className="space-y-2">
                  {categories.map(category => {
                    const Icon = category.icon;
                    const isOpenMobile = openCategoryMobile === category.id;
                    return (
                      <li key={category.id}>
                        <button
                          className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeCategory === category.id
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400'
                          }`}
                          onMouseEnter={() => handleCategoryHover(category.id)} // Hover para desktop
                          onClick={() => toggleCategoryMobile(category.id)} // Clique para mobile
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 flex-shrink-0" />
                            <span className="truncate">{category.name}</span>
                          </div>
                          <ChevronDown
                            className={`h-4 w-4 lg:hidden transition-transform duration-200 ${
                              isOpenMobile ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Subcategorias no Mobile */}
                        <AnimatePresence>
                          {isOpenMobile && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-8 pt-2 space-y-2 lg:hidden"
                            >
                              {category.subcategories.map(subcategory => (
                                <Link
                                  href={`/categorias/${category.slug}/${subcategory.slug}`}
                                  key={subcategory.id}
                                  className="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenCategoryMobile(null);
                                  }}
                                >
                                  {subcategory.name}
                                </Link>
                              ))}
                              <Link
                                href={`/categorias/${category.slug}`}
                                className="block text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenCategoryMobile(null);
                                }}
                              >
                                Ver todos os produtos
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Subcategorias no Desktop */}
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block col-span-3 p-6 bg-white dark:bg-gray-900"
              >
                {activeCategory && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-5">
                      {(() => {
                        const category = categories.find(c => c.id === activeCategory);
                        const Icon = category?.icon;
                        return Icon && <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
                      })()}
                      {categories.find(c => c.id === activeCategory)?.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                      {categories
                        .find(c => c.id === activeCategory)
                        ?.subcategories.map(subcategory => (
                          <Link
                            href={`/categorias/${categories.find(c => c.id === activeCategory)?.slug}/${subcategory.slug}`}
                            key={subcategory.id}
                            className="group flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="h-2 w-2 bg-blue-200 rounded-full group-hover:bg-blue-600 dark:bg-blue-700 dark:group-hover:bg-blue-400 transition-colors" />
                            <span className="truncate">{subcategory.name}</span>
                          </Link>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <Link
                        href={`/categorias/${categories.find(c => c.id === activeCategory)?.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Ver todos os produtos
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;