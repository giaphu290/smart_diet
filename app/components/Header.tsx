'use client';
import { motion } from 'framer-motion';
import { FaAndroid, FaLeaf } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const menuItems = ['Tính năng', 'Thực đơn', 'Hướng dẫn', 'Liên hệ'];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.a
              href="#download"
              className="hidden md:flex items-center space-x-2 text-green-600"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="text-xl" />
              <span>Bắt đầu miễn phí</span>
            </motion.a>
            
            <motion.a
              href="/smartdiet.apk"
              download
              className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaAndroid className="text-xl" />
              <span className="hidden sm:inline">Tải ứng dụng</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 