import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            PERCIRELLI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
              Home
            </Link>
            <Link href="/basicas" className="text-gray-700 hover:text-black font-medium transition-colors">
              Básicas
            </Link>
            <Link href="/estampadas" className="text-gray-700 hover:text-black font-medium transition-colors">
              Estampadas
            </Link>
            <Link href="/galeria" className="text-gray-700 hover:text-black font-medium transition-colors">
              Galeria
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-black font-medium transition-colors">
              Sobre
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Link href="/pesquisa" className="hidden md:block relative">
              <input 
                type="text" 
                placeholder="Buscar camisas..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64 cursor-pointer"
                readOnly
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8M17 18a1 1 0 100 2 1 1 0 000-2zM9 18a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link href="/login" className="p-2 text-gray-700 hover:text-black transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
                Home
              </Link>
              <Link href="/basicas" className="text-gray-700 hover:text-black font-medium transition-colors">
                Básicas
              </Link>
              <Link href="/estampadas" className="text-gray-700 hover:text-black font-medium transition-colors">
                Estampadas
              </Link>
              <Link href="/galeria" className="text-gray-700 hover:text-black font-medium transition-colors">
                Galeria
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-black font-medium transition-colors">
                Sobre
              </Link>
            </nav>
            
            {/* Mobile Search */}
            <Link href="/pesquisa" className="mt-4 block relative">
              <input 
                type="text" 
                placeholder="Buscar camisas..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer"
                readOnly
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

