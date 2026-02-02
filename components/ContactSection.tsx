'use client';

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-40 px-4 bg-gradient-to-br from-white via-blue-50/50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-2xl will-change-transform"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-15 blur-2xl will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-gray-900"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Let&apos;s Build Together
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Looking to place an order, collaborate, or discuss partnerships? Our team is here to help you build something remarkable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            aria-label="Get in touch"
            className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-full font-bold text-lg md:text-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ translateX: ['-100%', '200%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />

            <span className="relative z-10">Get In Touch</span>

            <motion.span
              className="relative z-10 text-2xl"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </Link>
        </motion.div>

        <motion.p
          className="mt-12 text-gray-600 font-medium text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="text-2xl">📞</span>
            Or call us directly for immediate assistance
          </span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
