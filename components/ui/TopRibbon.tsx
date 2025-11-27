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
    <div className="bg-black text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm text-center">{message}</p>
        {closeable && (
          <button
            onClick={handleClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Fechar"
          >
            <CloseIcon size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

