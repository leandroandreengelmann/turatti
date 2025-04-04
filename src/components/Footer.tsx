'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Turatti Materiais de Construção</h2>
            <p className="text-gray-400">Sua parceira em construção desde 1990</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <nav aria-labelledby="footer-produtos">
              <h3 id="footer-produtos" className="text-sm font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/produtos" className="text-gray-400 hover:text-white transition-colors">
                    Todos os produtos
                  </Link>
                </li>
                <li>
                  <Link href="/promocoes" className="text-gray-400 hover:text-white transition-colors">
                    Promoções
                  </Link>
                </li>
                <li>
                  <Link href="/lancamentos" className="text-gray-400 hover:text-white transition-colors">
                    Lançamentos
                  </Link>
                </li>
              </ul>
            </nav>
            
            <nav aria-labelledby="footer-empresa">
              <h3 id="footer-empresa" className="text-sm font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/trabalhe-conosco" className="text-gray-400 hover:text-white transition-colors">
                    Trabalhe conosco
                  </Link>
                </li>
              </ul>
            </nav>
            
            <nav aria-labelledby="footer-contato">
              <h3 id="footer-contato" className="text-sm font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                    Fale conosco
                  </Link>
                </li>
                <li>
                  <Link href="/lojas" className="text-gray-400 hover:text-white transition-colors">
                    Nossas lojas
                  </Link>
                </li>
                <li>
                  <Link href="/suporte" className="text-gray-400 hover:text-white transition-colors">
                    Suporte
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Turatti Materiais de Construção. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 