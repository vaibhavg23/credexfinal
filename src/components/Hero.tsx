// softsell/components/Hero.tsx
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Sell Unused Software License for users      </h1>
      <p className="text-xl mb-6">
        Turn your unused digital assets into cash effortlessly.
      </p>
      <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
        Get a Quote
      </button>
    </motion.section>
  );
};

export default Hero;
