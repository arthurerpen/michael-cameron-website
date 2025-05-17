import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  'FILM PHOTOGRAPHS',
  'MANIPULATED PHOTOGRAPHS',
  'DARKROOM PHOTOGRAPHS',
  'INSTANT FILM',
  'PAINTINGS'
];

function Work() {
  return (
    <div className="space-y-16">
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <h2 className="category-title">{category}</h2>
        </motion.div>
      ))}
    </div>
  );
}

export default Work;