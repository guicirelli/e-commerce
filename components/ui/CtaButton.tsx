import React from 'react';
import Link from 'next/link';

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function CtaButton({
  children,
  variant = 'primary',
  onClick,
  href,
  className = ''
}: CtaButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center';
  
  const variantClasses = variant === 'primary'
    ? 'bg-black text-white hover:bg-gray-900 hover:scale-105'
    : 'border-2 border-black text-black hover:bg-black hover:text-white';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

