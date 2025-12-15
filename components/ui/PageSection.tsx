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
  bgColor = "bg-white",
  vPadding = "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32",
  hPadding = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20",
  children
}: PageSectionProps) {
  return (
    <section id={id} className={`${bgColor} ${vPadding}`}>
      <div className={`max-w-[1920px] mx-auto ${hPadding}`}>
        {title && (
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4">
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

