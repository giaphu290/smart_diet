'use client';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        <span className="bg-gradient-to-r from-[#3E2723] to-[#8D6E63] text-transparent bg-clip-text">
          Smart
        </span>
        <span className="text-[#3E2723]">Diet</span>
      </motion.div>
    </motion.div>
  );
};

export default Logo; 