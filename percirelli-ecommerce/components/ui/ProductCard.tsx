'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaButton from './CtaButton';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <CtaButton
            variant="primary"
            onClick={handleBuy}
            className="text-sm px-4 py-2"
          >
            Comprar
          </CtaButton>
        </div>
      </div>
    </motion.div>
  );
}

