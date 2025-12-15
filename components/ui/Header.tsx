'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { getTranslation, type Locale } from '../../lib/translations';

// Wrappers para compatibilidade com React 19
const MenuIcon = FiMenu as React.ComponentType<{ size?: number; className?: string }>;
const CloseIcon = FiX as React.ComponentType<{ size?: number; className?: string }>;

interface HeaderProps {
  brandName: string;
  brandLogo?: string;
  showThemeToggle?: boolean;
}

export default function Header({ brandName, brandLogo, showThemeToggle = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { locale = 'en', asPath } = router;
  const currentLocale = (locale as Locale) || 'en';
  const t = (key: string) => getTranslation(currentLocale, key);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.products'), href: '#produtos' },
    { label: t('nav.features'), href: '#diferenciais' },
    { label: t('nav.testimonials'), href: '#depoimentos' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-md backdrop-blur-sm'
          : 'bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
              PERCIRELLI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-gray-300 transition-colors font-semibold text-sm md:text-base lg:text-lg"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher - Centralizado */}
            <div className="flex items-center space-x-2 lg:space-x-3 ml-4 lg:ml-8">
              <Link 
                href={asPath} 
                locale="en"
                className={`px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded transition-colors font-medium text-sm md:text-base ${
                  locale === 'en'
                    ? 'bg-white text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                EN
              </Link>
              <Link 
                href={asPath} 
                locale="pt"
                className={`px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded transition-colors font-medium text-sm md:text-base ${
                  locale === 'pt'
                    ? 'bg-white text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                PT
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher for Mobile */}
            <div className="flex items-center space-x-1 mr-2">
              <Link 
                href={asPath} 
                locale="en"
                className={`px-3 py-1 rounded text-sm ${
                  locale === 'en'
                    ? 'bg-white text-black'
                    : 'bg-gray-700 text-white'
                }`}
              >
                EN
              </Link>
              <Link 
                href={asPath} 
                locale="pt"
                className={`px-3 py-1 rounded text-sm ${
                  locale === 'pt'
                    ? 'bg-white text-black'
                    : 'bg-gray-700 text-white'
                }`}
              >
                PT
              </Link>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={24} className="text-white" />
              ) : (
                <MenuIcon size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

