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
      className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-3 sm:mb-4 md:mb-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-black flex items-center justify-center text-white font-semibold mr-3 sm:mr-4 text-xs sm:text-sm md:text-base lg:text-lg">
          {getInitials(name)}
        </div>
        <div>
          <h4 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900">{name}</h4>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-2 sm:mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            size={14}
            className={`sm:w-4 sm:h-4 md:w-5 md:h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 italic">"{text}"</p>
    </motion.div>
  );
}

