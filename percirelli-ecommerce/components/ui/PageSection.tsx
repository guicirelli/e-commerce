import React from 'react';

interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  vPadding?: string;
  hPadding?: string;
  children: React.ReactNode;
}

export default function PageSection({
  id,
  title,
  subtitle,
  bgColor = "bg-white dark:bg-gray-900",
  vPadding = "py-16 md:py-24",
  hPadding = "px-4 md:px-8",
  children
}: PageSectionProps) {
  return (
    <section id={id} className={`${bgColor} ${vPadding}`}>
      <div className={`max-w-7xl mx-auto ${hPadding}`}>
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

