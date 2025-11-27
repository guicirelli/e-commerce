'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const StarIcon = FiStar as React.ComponentType<{ size?: number; className?: string }>;

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  index: number;
}

export default function TestimonialCard({ name, role, rating, text, index }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-black dark:bg-gray-700 flex items-center justify-center text-white font-semibold mr-4">
          {getInitials(name)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic">"{text}"</p>
    </motion.div>
  );
}

