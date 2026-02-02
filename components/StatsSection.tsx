'use client';

import { motion, Variants, MotionValue } from "framer-motion";
import { siteStats } from "@/lib/data";
import dynamic from 'next/dynamic';

const CountUpClient = dynamic(() => import('@/components/CountUpClient'), {
  ssr: false,
});

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

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

interface StatsSectionProps {
  statsRef: React.RefObject<HTMLElement | null>;
  backgroundY: MotionValue<string>;
}

export default function StatsSection({ statsRef, backgroundY }: StatsSectionProps) {
  return (
    <motion.section
      ref={statsRef}
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-40 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Advanced Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? backgroundY : 0 }}
      >
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-2xl will-change-transform"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-2xl will-change-transform"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>

      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            By The Numbers
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our track record of growth and excellence
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {siteStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/10 backdrop-blur-2xl p-12 rounded-3xl border-2 border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 overflow-hidden"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-400 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"
              />

              <div className="relative z-10 text-center">
                <motion.p
                  className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <CountUpClient end={stat.value} suffix={stat.suffix} />
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl font-semibold text-white/90 tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                  }}
                >
                  {stat.label}
                </motion.p>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
