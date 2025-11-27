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
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-black dark:bg-gray-700 p-3 rounded-full">
          <IconComponent size={24} className="text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

