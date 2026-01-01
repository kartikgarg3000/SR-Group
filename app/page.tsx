'use client';

import Link from "next/link";
import Image from "next/image";
import BusinessCarousel from "@/components/BusinessCarousel";
import { siteStats } from "@/lib/data";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import {
  FaPaintBrush,
  FaCapsules,
  FaScroll,
  FaBug,
  FaBoxOpen,
  FaTree,
  FaArrowRight,
  FaStar,
  FaRocket,
  FaGem,
  FaAward,
} from "react-icons/fa";

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

export default function Home() {
  const statsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ================= HERO – BUSINESS CAROUSEL ================= */}
      <div className="relative h-screen">
        <BusinessCarousel />
      </div>

      {/* ================= ABOUT US – ENTERPRISE LEVEL ================= */}
      <motion.section
        id="about"
        className="py-40 px-4 max-w-7xl mx-auto relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Enhanced Title Section */}
        <div className="text-center mb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div
              className="h-1.5 w-20 bg-gradient-to-r from-transparent via-blue-600 to-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.span
              className="text-sm font-bold tracking-widest text-blue-600 uppercase px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our Story
            </motion.span>
            <motion.div
              className="h-1.5 w-20 bg-gradient-to-l from-transparent via-blue-600 to-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
          >
            Pioneering Excellence
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              For Over 40 Years
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            From industrial innovation to premium agricultural excellence — our journey reflects growth, integrity, and an unwavering commitment to shaping a better tomorrow for industries and communities.
          </motion.p>
        </div>

        {/* Enhanced Founder Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16 mb-40 bg-gradient-to-br from-gray-50 via-blue-50/50 to-white p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-blue-100/50 overflow-hidden relative group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
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
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl"
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
                className="absolute -inset-6 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 rounded-3xl opacity-0 group-hover/image:opacity-30 blur-2xl transition-opacity duration-500"
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

        {/* Enhanced Our Story Section */}
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
                      scale: [1, 1.3, 1],
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
                      scale: [1, 1.3, 1],
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
                  className="absolute left-0 top-3 h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 ring-4 ring-white shadow-xl flex items-center justify-center text-white font-bold relative group"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(251, 191, 36, 0.7)',
                      '0 0 0 10px rgba(251, 191, 36, 0)',
                      '0 0 0 0 rgba(251, 191, 36, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }},
                >
                  <span className="relative z-10 text-lg">★</span>
                </motion.div>
                <motion.div
                  className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <h4 className="text-xl font-bold text-amber-700 mb-3 relative z-10">Today — Market Leader</h4>
                  <p className="text-gray-700 relative z-10">A trusted diversified powerhouse delivering excellence across multiple industries.</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Mission Vision Values */}
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
              Our Identity &amp; Philosophy
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
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-600 to-purple-600 transition-opacity duration-500"
              />
              
              {/* Floating Icon Container */}
              <motion.div
                className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 relative"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaAward className="text-3xl text-blue-600 relative z-10" />
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 group-hover:opacity-30 blur-lg"
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
              
              {/* Corner Accent */}
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
                  className="absolute inset-0 rounded-2xl bg-purple-400 opacity-0 group-hover:opacity-30 blur-lg"
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
                  className="absolute inset-0 rounded-2xl bg-amber-400 opacity-0 group-hover:opacity-30 blur-lg"
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

        {/* Enhanced Verticals */}
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
                className="absolute -top-20 -right-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl"
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
                className="absolute -top-20 -right-20 w-48 h-48 bg-orange-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl"
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
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transform transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
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
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== ENHANCED STATS SECTION ==================== */}
      <div ref={statsRef}></div>
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
          style={{ y: backgroundY }}
        >
          <motion.div
            className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
                    transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    >
                      {stat.suffix}
                    </motion.span>
                  </motion.p>
                  <motion.p
                    className="text-lg md:text-xl font-semibold text-white/90 tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
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
      

      {/* ==================== ENHANCED CONTACT SECTION ==================== */}
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
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
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
              className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white rounded-full font-bold text-lg md:text-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  translateX: ['-100%', '200%'],
                }}
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
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </Link>
          </motion.div>

          <motion.p
            className="mt-12 text-gray-600 font-medium text-lg"
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
    </main>
  );
}