"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar preferência de tema do sistema
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // Alternar tema manualmente
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Alternar menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-200 to-blue-100 dark:from-gray-800 dark:to-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Categorias */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
              Turatti
            </Link>
            <div className="hidden lg:block">
              <MegaMenu />
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/produtos"
              className="text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="/ofertas"
              className="text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              Ofertas
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Ícones de ação (apenas o botão de tema) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-gray-200" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
          </div>

          {/* Botão Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-6 space-y-4">
            <MegaMenu />
            <Link
              href="/produtos"
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              Produtos
            </Link>
            <Link
              href="/ofertas"
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              Ofertas
            </Link>
            <Link
              href="/contato"
              className="block text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contato
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5" /> Modo Claro
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" /> Modo Escuro
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;