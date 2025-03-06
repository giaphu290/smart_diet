'use client';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold mb-4">
              Ứng dụng quản lý dinh dưỡng #1 Việt Nam
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Quản lý chế độ ăn
              <span className="text-gradient bg-gradient-to-r from-green-600 to-teal-600 block">
                thông minh cùng AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              SmartDiet giúp bạn theo dõi chế độ ăn uống, tính toán calories và đạt được mục tiêu sức khỏe của mình một cách khoa học và hiệu quả.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="#features" 
              className="group flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Khám phá ngay</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#testimonials" 
              className="flex items-center justify-center space-x-2 border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <FaHeart className="text-red-500" />
              <span>Người dùng nói gì?</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center justify-center space-x-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">100K+</div>
              <div className="text-gray-600">Người dùng</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600">4.8/5</div>
              <div className="text-gray-600">Đánh giá</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600">50K+</div>
              <div className="text-gray-600">Công thức</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 