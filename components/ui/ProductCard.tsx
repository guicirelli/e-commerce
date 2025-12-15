'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';
import { getTranslation, type Locale } from '../../lib/translations';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const router = useRouter();
  const locale = (router.locale || 'en') as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const handleBuy = () => {
    // Scroll suave para a seção de produtos ou redirecionar para página do produto
    window.location.href = `/product/${id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1920px) 20vw, 16vw"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
          {name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 line-clamp-2">
          {description || t(`products.descriptions.${id}`)}
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
            {price}
          </span>
          <CtaButton
            variant="primary"
            onClick={handleBuy}
            className="text-xs sm:text-sm md:text-base w-full sm:w-auto px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5"
          >
            {t('products.buy')}
          </CtaButton>
        </div>
      </div>
    </motion.div>
  );
}

