'use client';

import { motion, Variants } from "framer-motion";
import { FaAward, FaRocket, FaGem } from "react-icons/fa";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export default function PhilosophySection() {
  return (
    <div className="mb-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-24"
      >
        <motion.h3
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Identity & Philosophy
        </motion.h3>
        <motion.div
          className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 rounded-full mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Enhanced Mission */}
        <motion.div
          className="relative group p-10 bg-gradient-to-br from-white via-blue-50/50 to-white border-2 border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden"
          custom={0}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-600 to-purple-600 transition-opacity duration-500"
          />
          
          <motion.div
            className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 relative"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaAward className="text-3xl text-blue-600 relative z-10" />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 group-hover:opacity-30 blur-md will-change-transform"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-blue-700 mb-4 group-hover:text-blue-800 transition-colors">
              Our Mission
            </h4>
            <p className="text-gray-700 leading-relaxed">
              To deliver world-class industrial and agricultural products that uplift businesses and enrich lives through uncompromised quality and service excellence.
            </p>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Enhanced Vision */}
        <motion.div
          className="relative group p-10 bg-gradient-to-br from-white via-purple-50/50 to-white border-2 border-purple-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-500 overflow-hidden"
          custom={1}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-purple-600 to-pink-600 transition-opacity duration-500"
          />
          
          <motion.div
            className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 relative"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="text-3xl text-purple-600 relative z-10" />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-purple-400 opacity-0 group-hover:opacity-30 blur-md will-change-transform"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors">
              Our Vision
            </h4>
            <p className="text-gray-700 leading-relaxed">
              To become a multi-industry leader recognized for innovation, transparency, and long-term value creation across India and beyond.
            </p>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* Enhanced Values */}
        <motion.div
          className="relative group p-10 bg-gradient-to-br from-white via-amber-50/50 to-white border-2 border-amber-100 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-300 transition-all duration-500 overflow-hidden"
          custom={2}
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-amber-600 to-yellow-600 transition-opacity duration-500"
          />
          
          <motion.div
            className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-300 relative"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaGem className="text-3xl text-amber-600 relative z-10" />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-amber-400 opacity-0 group-hover:opacity-30 blur-md will-change-transform"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold text-amber-700 mb-4 group-hover:text-amber-800 transition-colors">
              Core Values
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Trust, discipline, ethics, customer satisfaction, innovation, and an unwavering commitment to quality — the foundation of everything we do.
            </p>
          </div>
          
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.div>
    </div>
  );
}
