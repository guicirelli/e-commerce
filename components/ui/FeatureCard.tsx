'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiTruck, FiLock, FiStar, FiZap } from 'react-icons/fi';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const iconMap: Record<string, any> = {
  FiShield,
  FiTruck,
  FiLock,
  FiStar,
  FiZap,
};

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || FiStar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
    >
      <div className="flex justify-center mb-3 sm:mb-4 md:mb-5">
        <div className="bg-black p-2 sm:p-3 md:p-4 rounded-full">
          <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
      </div>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}

