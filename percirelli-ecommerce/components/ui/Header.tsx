'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Wrappers para compatibilidade com React 19
const MenuIcon = FiMenu as React.ComponentType<{ size?: number; className?: string }>;
const CloseIcon = FiX as React.ComponentType<{ size?: number; className?: string }>;
const MoonIcon = FiMoon as React.ComponentType<{ size?: number; className?: string }>;
const SunIcon = FiSun as React.ComponentType<{ size?: number; className?: string }>;

interface HeaderProps {
  brandName: string;
  brandLogo?: string;
  showThemeToggle?: boolean;
}

export default function Header({ brandName, brandLogo, showThemeToggle = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
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

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              <span className="text-black dark:text-white">PERCI</span>
              <span className="text-gray-600 dark:text-gray-300">RELLI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <MenuIcon size={24} className="text-gray-700 dark:text-gray-300" />
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
                    className="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
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

