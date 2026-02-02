'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function FounderSection() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-16 mb-40 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-blue-100/50 overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-2xl will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-2xl will-change-transform"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <motion.div
        className="w-full lg:w-1/3 flex justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative group/image">
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 rounded-3xl opacity-0 group-hover/image:opacity-30 blur-xl transition-opacity duration-500 will-change-transform"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Image with Enhanced Border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <Image
              src="/images/founder.jpg"
              alt="Founder Late Shri Sitaram Aggarwal"
              width={320}
              height={320}
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-105"
            />
            {/* Decorative Corner Accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-blue-500 rounded-tl-lg opacity-60" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-purple-500 rounded-br-lg opacity-60" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-2/3 relative z-10"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaStar className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 text-4xl" />
          </motion.div>
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Late Shri Sitaram Aggarwal
          </span>
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          A visionary entrepreneur whose principles laid the foundation of SR Group.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          With deep-rooted values of honesty, commitment, and service, Shri Sitaram Aggarwal built an organization that prioritizes{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            trust over transactions
          </span>{' '}
          and{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
            relationships over revenue
          </span>.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          His legacy lives on through our culture — one where quality is non-negotiable, innovation is continuous, and customer satisfaction is the ultimate goal.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
