'use client';
import { motion } from 'framer-motion';
import { FaCalculator, FaChartLine, FaUtensils, FaBell, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: <FaCalculator className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600" />,
    title: 'Tính toán calories',
    description: 'Tính toán chính xác lượng calories nạp vào và tiêu thụ hàng ngày.',
    benefits: [
      'Theo dõi lượng calories hàng ngày',
      'Phân tích thành phần dinh dưỡng',
      'Gợi ý khẩu phần ăn phù hợp'
    ]
  },
  {
    icon: <FaChartLine className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600" />,
    title: 'Theo dõi tiến độ',
    description: 'Theo dõi sự tiến bộ của bạn qua các biểu đồ trực quan.',
    benefits: [
      'Biểu đồ theo dõi cân nặng',
      'Thống kê chế độ ăn uống',
      'Báo cáo chi tiết hàng tuần'
    ]
  },
  {
    icon: <FaUtensils className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600" />,
    title: 'Kế hoạch dinh dưỡng',
    description: 'Tạo và quản lý kế hoạch ăn uống phù hợp với mục tiêu của bạn.',
    benefits: [
      'Thực đơn được cá nhân hóa',
      'Công thức nấu ăn chi tiết',
      'Gợi ý thực phẩm thay thế'
    ]
  },
  {
    icon: <FaBell className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600" />,
    title: 'Nhắc nhở thông minh',
    description: 'Nhận thông báo về giờ ăn và lời khuyên dinh dưỡng hữu ích.',
    benefits: [
      'Nhắc nhở giờ ăn thông minh',
      'Lời khuyên từ chuyên gia',
      'Cập nhật kiến thức dinh dưỡng'
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Tính năng thông minh</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
            Mọi thứ bạn cần để duy trì lối sống lành mạnh
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SmartDiet cung cấp đầy đủ các công cụ bạn cần để duy trì lối sống lành mạnh
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-green-50 rounded-xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 