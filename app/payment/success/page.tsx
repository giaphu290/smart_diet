'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Thử mở app điện thoại trước
    const appUrl = 'smartdiet://payment/success';
    window.location.href = appUrl;

    // Nếu không mở được app, chuyển hướng về trang chủ sau 3 giây
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md"
      >
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative w-10 h-10">
              <Image
                src="/images/smartdiet-logo.png"
                alt="SmartDiet Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="font-bold text-2xl">
              <span className="bg-gradient-to-r from-[#3E2723] to-[#8D6E63] text-transparent bg-clip-text">
                Smart
              </span>
              <span className="text-[#3E2723]">Diet</span>
            </div>
          </div>
          <FaCheckCircle className="text-8xl text-green-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
          Thanh toán thành công!
        </h1>
        <p className="text-gray-600 mb-6">
          Đang chuyển hướng về ứng dụng SmartDiet...
        </p>
      </motion.div>
    </main>
  );
} 