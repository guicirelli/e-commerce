'use client';

import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const CloseIcon = FiX as React.ComponentType<{ size?: number; className?: string }>;

interface TopRibbonProps {
  message: string;
  closeable?: boolean;
}

export default function TopRibbon({ message, closeable = true }: TopRibbonProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (closeable) {
      const isClosed = localStorage.getItem('topRibbonClosed');
      if (isClosed === 'true') {
        setIsVisible(false);
      }
    }
  }, [closeable]);

  const handleClose = () => {
    setIsVisible(false);
    if (closeable) {
      localStorage.setItem('topRibbonClosed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-[1920px] mx-auto flex items-center justify-center">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center px-8 sm:px-10 md:px-12">{message}</p>
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Fechar"
          >
            <CloseIcon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

