'use client';

import Link from "next/link";
import Image from "next/image";
import BusinessCarousel from "@/components/BusinessCarousel";
import { siteStats } from "@/lib/data";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import {
  FaPaintBrush,
  FaCapsules,
  FaScroll,
  FaBug,
  FaBoxOpen,
  FaTree,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ================= HERO – BUSINESS CAROUSEL ================= */}
      <div className="relative h-screen">
        <BusinessCarousel />
      </div>

      {/* ================= ABOUT US – ENTERPRISE LEVEL ================= */}
      <motion.section
        id="about"
        className="py-32 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Title with enhanced animation */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">Our Story</span>
            <div className="h-1 w-12 bg-gradient-to-l from-blue-600 to-blue-400 rounded"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Pioneering Excellence
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              For Over 40 Years
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From industrial innovation to premium agricultural excellence — our journey reflects growth, integrity, and an unwavering commitment to shaping a better tomorrow for industries and communities.
          </motion.p>
        </div>

        {/* Founder Section - Enhanced */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 mb-32 bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-3xl shadow-lg border border-blue-100 overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>

          <motion.div
            className="w-full lg:w-1/3 flex justify-center relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              <Image
                src="/images/founder.jpg"
                alt="Founder Late Shri Sitaram Aggarwal"
                width={288}
                height={288}
                className="rounded-2xl shadow-2xl w-72 h-72 object-cover border-4 border-white relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3 relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FaStar className="text-blue-600" />
              Late Shri Sitaram Aggarwal
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">
              A visionary entrepreneur whose principles laid the foundation of SR Group.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With deep-rooted values of honesty, commitment, and service, Shri Sitaram Aggarwal built an organization that prioritizes <span className="font-semibold text-blue-700">trust over transactions</span> and <span className="font-semibold text-blue-700">relationships over revenue</span>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              His legacy lives on through our culture — one where quality is non-negotiable, innovation is continuous, and customer satisfaction is the ultimate goal.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-32">
          {/* Story */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl font-bold mb-8 text-gray-900">Our Journey</h3>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Established in <span className="font-bold text-blue-700">1983</span>, SR Group began its journey with SR Trade Vision — a venture dedicated to supplying high-quality industrial oils and chemicals. Over the years, we earned the trust of manufacturing industries across North India through consistency, integrity, and customer-centric service.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              With evolving times and growing market needs, the group expanded in <span className="font-bold text-blue-700">2021</span> with SR Industrial Corp, strengthening its portfolio with waterproofing solutions and premium agricultural products. Today, SR Group stands as a diversified powerhouse built on the pillars of innovation, ethics, and excellence.
            </motion.p>
          </motion.div>

          {/* Roadmap Timeline - Enhanced */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative space-y-12">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400"></div>

              {/* 1983 */}
              <motion.div
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 ring-4 ring-white shadow-lg flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div className="bg-white p-5 rounded-xl border-2 border-blue-100 shadow-md hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">1983 — The Foundation</h4>
                  <p className="text-gray-700">SR Trade Vision launches as a supplier of industrial oils &amp; chemicals across North India.</p>
                </div>
              </motion.div>

              {/* 2021 */}
              <motion.div
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 ring-4 ring-white shadow-lg flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div className="bg-white p-5 rounded-xl border-2 border-blue-100 shadow-md hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">2021 — Diversification</h4>
                  <p className="text-gray-700">SR Industrial Corp expands into Waterproofing Solutions &amp; premium dry fruits.</p>
                </div>
              </motion.div>

              {/* Present */}
              <motion.div
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 ring-4 ring-white shadow-lg flex items-center justify-center text-white font-bold">
                  ★
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl border-2 border-amber-200 shadow-md">
                  <h4 className="text-xl font-bold text-amber-700 mb-2">Today — Market Leader</h4>
                  <p className="text-gray-700">A trusted diversified powerhouse delivering excellence across multiple industries.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Vision Values - Enhanced */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h3 className="text-5xl font-bold text-gray-900">Our Identity &amp; Philosophy</h3>
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded mx-auto"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* Mission */}
            <motion.div
              className="relative group p-10 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
              custom={0}
              variants={cardVariants}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-blue-600 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h4>
                <p className="text-gray-700 leading-relaxed">
                  To deliver world-class industrial and agricultural products that uplift businesses and enrich lives through uncompromised quality and service excellence.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative group p-10 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 overflow-hidden"
              custom={1}
              variants={cardVariants}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-purple-600 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-2xl font-bold text-purple-700 mb-4">Our Vision</h4>
                <p className="text-gray-700 leading-relaxed">
                  To become a multi-industry leader recognized for innovation, transparency, and long-term value creation across India and beyond.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              className="relative group p-10 bg-gradient-to-br from-white to-amber-50 border-2 border-amber-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-300 overflow-hidden"
              custom={2}
              variants={cardVariants}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-amber-600 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                  <span className="text-3xl">💎</span>
                </div>
                <h4 className="text-2xl font-bold text-amber-700 mb-4">Core Values</h4>
                <p className="text-gray-700 leading-relaxed">
                  Trust, discipline, ethics, customer satisfaction, innovation, and an unwavering commitment to quality — the foundation of everything we do.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Verticals - Enhanced */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h3 className="text-5xl font-bold text-gray-900 mb-6">Our Business Verticals</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Diversified solutions across industries with unwavering commitment to excellence</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* SR Trade Vision */}
            <motion.div
              className="group relative bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border-2 border-blue-100 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 overflow-hidden"
              custom={0}
              variants={cardVariants}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                    <FaPaintBrush className="text-blue-600 text-xl" />
                  </span>
                  SR Trade Vision
                </h4>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Delivering premium industrial oils, chemicals, and machinery to the region&apos;s core manufacturing sectors with uncompromised quality.
                </p>

                <div className="grid grid-cols-2 gap-4 text-gray-800 text-base">
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-blue-100 hover:border-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaPaintBrush className="text-blue-600 flex-shrink-0" /> Paint Industry
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-blue-100 hover:border-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaCapsules className="text-blue-600 flex-shrink-0" /> Pharma Industry
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-blue-100 hover:border-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaScroll className="text-blue-600 flex-shrink-0" /> Paper Industry
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-blue-100 hover:border-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaBug className="text-blue-600 flex-shrink-0" /> Pesticides Industry
                  </motion.div>
                </div>

                <Link
                  href="/chemicals"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all"
                >
                  Explore <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>

            {/* SR Industrial Corp */}
            <motion.div
              className="group relative bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl border-2 border-orange-100 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 overflow-hidden"
              custom={1}
              variants={cardVariants}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-200 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100">
                    <FaBoxOpen className="text-orange-600 text-xl" />
                  </span>
                  SR Industrial Corp
                </h4>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Authorized C&amp;F agent for Waterproofing Solutions and a leading distributor of premium dry fruits sourced from India&apos;s finest regions.
                </p>

                <div className="grid grid-cols-2 gap-4 text-gray-800 text-base">
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-orange-100 hover:border-orange-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaBoxOpen className="text-orange-600 flex-shrink-0" /> Sealan Blocks
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-orange-100 hover:border-orange-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaTree className="text-orange-600 flex-shrink-0" /> Almonds &amp; Cashews
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-orange-100 hover:border-orange-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaTree className="text-orange-600 flex-shrink-0" /> Walnuts &amp; Pistachios
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-orange-100 hover:border-orange-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaTree className="text-orange-600 flex-shrink-0" /> Raisins &amp; RCN
                  </motion.div>
                </div>

                <Link
                  href="/industrial"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all"
                >
                  Explore <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* ==================== STATS SECTION - ENHANCED ==================== */}
      <motion.section
        className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-32 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-white/70">Our track record of growth and excellence</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {siteStats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-4"
                custom={index}
                variants={cardVariants}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white to-transparent transition-opacity duration-300"></div>

                <div className="relative z-10 text-center">
                  <motion.p
                    className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-white mb-4"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </motion.p>
                  <p className="text-lg font-semibold text-white/90 tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ==================== CONTACT SECTION - ENHANCED ==================== */}
      <motion.section
        id="contact"
        className="py-32 px-4 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Let&apos;s Build Together
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Looking to place an order, collaborate, or discuss partnerships? Our team is here to help you build something remarkable.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Get In Touch</span>
              <motion.span
                className="ml-3 transform transition-transform"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          <motion.p
            className="mt-8 text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            📞 Or call us directly for immediate assistance
          </motion.p>
        </motion.div>
      </motion.section>

    </main>
  );
}