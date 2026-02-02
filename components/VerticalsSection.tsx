'use client';

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaPaintBrush, FaCapsules, FaScroll, FaBug, FaArrowRight, FaBoxOpen, FaTree } from "react-icons/fa";

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

export default function VerticalsSection() {
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
          Our Business Verticals
        </motion.h3>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Diversified solutions across industries with unwavering commitment to excellence
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Enhanced SR Trade Vision */}
        <motion.div
          className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-12 rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-500 overflow-hidden"
          custom={0}
          variants={cardVariants}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          {/* Animated Background Orbs */}
          <motion.div
            className="absolute -top-20 -right-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-xl will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <div className="relative z-10">
            <motion.h4
              className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaPaintBrush className="text-blue-600 text-2xl" />
              </motion.span>
              SR Trade Vision
            </motion.h4>
            
            <p className="text-gray-700 mb-10 text-lg md:text-xl leading-relaxed">
              Delivering premium industrial oils, chemicals, and machinery to the region&apos;s core manufacturing sectors with uncompromised quality.
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-800 text-base mb-10">
              {[
                { icon: FaPaintBrush, label: 'Paint Industry' },
                { icon: FaCapsules, label: 'Pharma Industry' },
                { icon: FaScroll, label: 'Paper Industry' },
                { icon: FaBug, label: 'Pesticides Industry' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group/item"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <item.icon className="text-blue-600 flex-shrink-0 text-lg group-hover/item:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/chemicals"
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  whileHover={{
                    translateX: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeInOut',
                  }}
                />
                <span className="relative z-10">Explore</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced SR Industrial Corp */}
        <motion.div
          className="group relative bg-gradient-to-br from-orange-50 via-white to-orange-50/30 p-12 rounded-3xl border-2 border-orange-100 shadow-xl hover:shadow-2xl hover:border-orange-400 transition-all duration-500 overflow-hidden"
          custom={1}
          variants={cardVariants}
          whileHover={{ y: -10, scale: 1.02 }}
        >
          <motion.div
            className="absolute -top-20 -right-20 w-48 h-48 bg-orange-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-xl will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          <div className="relative z-10">
            <motion.h4
              className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaBoxOpen className="text-orange-600 text-2xl" />
              </motion.span>
              SR Industrial Corp
            </motion.h4>

            <p className="text-gray-700 mb-10 text-lg md:text-xl leading-relaxed">
              Authorized C&amp;F agent for Waterproofing Solutions and a leading distributor of premium dry fruits sourced from India&apos;s finest regions.
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-800 text-base mb-10">
              {[
                { icon: FaBoxOpen, label: 'Sealan Blocks' },
                { icon: FaTree, label: 'Almonds & Cashews' },
                { icon: FaTree, label: 'Walnuts & Pistachios' },
                { icon: FaTree, label: 'Raisins & RCN' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 group/item"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <item.icon className="text-orange-600 flex-shrink-0 text-lg group-hover/item:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/industrial"
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  whileHover={{ translateX: ['-100%', '200%'] }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                <span className="relative z-10">Explore</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
