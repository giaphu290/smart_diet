'use client';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Nguyễn Thị Anh',
    avatar: '👩',
    role: 'Nhân viên văn phòng',
    rating: 5,
    comment: 'SmartDiet đã giúp tôi giảm 5kg trong 2 tháng một cách khoa học và bền vững. Ứng dụng rất dễ sử dụng và có nhiều tính năng hữu ích!',
    achievement: 'Giảm 5kg trong 2 tháng'
  },
  {
    name: 'Trần Văn Minh',
    avatar: '👨',
    role: 'Huấn luyện viên thể hình',
    rating: 5,
    comment: 'Là một HLV, tôi thường giới thiệu SmartDiet cho học viên của mình. Tính năng tính toán calories và theo dõi dinh dưỡng rất chính xác.',
    achievement: 'Đạt mục tiêu tăng cơ'
  },
  {
    name: 'Lê Thu Hà',
    avatar: '👩',
    role: 'Sinh viên',
    rating: 5,
    comment: 'Giao diện đẹp, dễ sử dụng và đặc biệt là tính năng gợi ý thực đơn rất hữu ích. Tôi đã duy trì được thói quen ăn uống lành mạnh nhờ SmartDiet.',
    achievement: 'Cải thiện thói quen ăn uống'
  },
  {
    name: 'Phạm Đức Thành',
    avatar: '👨',
    role: 'Kỹ sư phần mềm',
    rating: 5,
    comment: 'AI của SmartDiet thực sự thông minh trong việc đề xuất thực đơn. Tôi thích cách ứng dụng tự điều chỉnh dựa trên thói quen của người dùng.',
    achievement: 'Duy trì cân nặng lý tưởng'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Đánh giá từ người dùng</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
            Người dùng nói gì về SmartDiet?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những câu chuyện thành công và trải nghiệm thực tế từ cộng đồng SmartDiet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 relative">
                    <FaQuoteLeft className="absolute -left-2 -top-2 text-green-200 text-xl" />
                    <p className="text-gray-600 pl-6">{testimonial.comment}</p>
                  </div>
                  <div className="mt-4 inline-block px-4 py-2 bg-green-50 rounded-full">
                    <span className="text-green-600 text-sm font-medium">
                      ✨ {testimonial.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#download" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Tham gia cộng đồng SmartDiet ngay</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 