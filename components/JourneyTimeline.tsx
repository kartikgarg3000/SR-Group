'use client';

import { motion } from "framer-motion";

export default function JourneyTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mb-40">
      {/* Story */}
      <motion.div
        className="lg:col-span-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-2 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          Our Journey
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Established in{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 text-2xl">
            1983
          </span>
          , SR Group began its journey with SR Trade Vision — a venture dedicated to supplying high-quality industrial oils and chemicals. Over the years, we earned the trust of manufacturing industries across North India through consistency, integrity, and customer-centric service.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          With evolving times and growing market needs, the group expanded in{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 text-2xl">
            2021
          </span>{' '}
          with SR Industrial Corp, strengthening its portfolio with waterproofing solutions and premium agricultural products. Today, SR Group stands as a diversified powerhouse built on the pillars of innovation, ethics, and excellence.
        </motion.p>
      </motion.div>

      {/* Enhanced Roadmap Timeline */}
      <motion.div
        className="lg:col-span-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative space-y-16">
          {/* Enhanced Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 via-purple-500 to-blue-400 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* 1983 - Enhanced */}
          <motion.div
            className="relative pl-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute left-0 top-3 h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 ring-4 ring-white shadow-xl flex items-center justify-center text-white text-sm font-bold relative group"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">1</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-50 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:border-blue-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-3 relative z-10">1983 — The Foundation</h4>
              <p className="text-gray-700 relative z-10">SR Trade Vision launches as a supplier of industrial oils &amp; chemicals across North India.</p>
            </motion.div>
          </motion.div>

          {/* 2021 - Enhanced */}
          <motion.div
            className="relative pl-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute left-0 top-3 h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 ring-4 ring-white shadow-xl flex items-center justify-center text-white text-sm font-bold relative group"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative z-10">2</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-50 blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:border-blue-300 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-3 relative z-10">2021 — Diversification</h4>
              <p className="text-gray-700 relative z-10">SR Industrial Corp expands into Waterproofing Solutions &amp; premium dry fruits.</p>
            </motion.div>
          </motion.div>

          {/* Present - Enhanced */}
          <motion.div
            className="relative pl-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute left-0 top-3 h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 ring-4 ring-white shadow-xl flex items-center justify-center text-white font-bold group"
              whileHover={{ scale: 1.15, rotate: 360 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(251, 191, 36, 0.7)",
                  "0 0 0 10px rgba(251, 191, 36, 0)",
                  "0 0 0 0 rgba(251, 191, 36, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <span className="relative z-10 text-lg">★</span>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Shimmer animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />

              <h4 className="text-xl font-bold text-amber-700 mb-3 relative z-10">
                Today — Market Leader
              </h4>

              <p className="text-gray-700 relative z-10">
                A trusted diversified powerhouse delivering excellence across multiple industries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
