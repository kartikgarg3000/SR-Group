'use client';

import Link from "next/link";
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
} from "react-icons/fa";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ================= HERO – BUSINESS CAROUSEL ================= */}
      <div className="relative h-screen">
        <BusinessCarousel />
      </div>

      {/* ================= ABOUT US – ENTERPRISE LEVEL ================= */}
      <motion.section
        id="about"
        className="py-28 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building Trust for 40+ Years.
            <br />
            <span className="text-blue-700">Empowering Industries. Enriching Lives.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            From industrial innovation to premium agricultural excellence —
            our journey reflects growth, integrity, and a commitment to shaping a better tomorrow.
          </p>
        </div>

        {/* Founder Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 mb-28 bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="/images/founder.jpg"
              alt="Founder Late Shri Sitaram Aggarwal"
              className="rounded-xl shadow-lg w-72 h-72 object-cover"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Late Shri Sitaram Aggarwal
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              A visionary entrepreneur, a disciplined leader, and a man whose principles laid the foundation of what SR Group is today.
              With deep-rooted values of honesty, commitment, and service,
              <span className="font-semibold"> Shri Sitaram Aggarwal </span>
              built an organization that prioritizes trust over transactions and relationships over revenue.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              His legacy lives on through our culture — one where quality is non-negotiable,
              innovation is continuous, and customer satisfaction is the ultimate goal.
            </p>
          </div>
        </motion.div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Story */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Journey</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Established in 1983, <strong>SR Group</strong> began its journey with SR Trade Vision — a venture dedicated
              to supplying high-quality industrial oils and chemicals. Over the years, we earned the trust of
              manufacturing industries across North India through consistency, integrity, and customer-centric service.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With evolving times and growing market needs, the group expanded in 2021 with
              <strong> SR Industrial Corp</strong>, strengthening its portfolio with waterproofing solutions
              and premium agricultural products such as dry fruits.
              Today, SR Group stands as a diversified powerhouse built on the pillars of innovation, ethics, and excellence.
            </p>
          </motion.div>

          {/* Roadmap Timeline */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative border-l-4 border-blue-200 pl-8 space-y-16">

              {/* 1983 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 h-6 w-6 rounded-full bg-blue-700 ring-4 ring-white"></div>
                <h4 className="text-xl font-bold text-blue-800">1983 — The Foundation</h4>
                <p className="text-gray-700">
                  SR Trade Vision launches as a supplier of industrial oils & chemicals.
                </p>
              </div>

              {/* 2021 */}
              <div className="relative">
                <div className="absolute -left-5 top-1 h-6 w-6 rounded-full bg-blue-700 ring-4 ring-white"></div>
                <h4 className="text-xl font-bold text-blue-800">2021 — Diversification</h4>
                <p className="text-gray-700">
                  SR Industrial Corp expands into Waterproofing Solutions & premium dry fruits.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Mission Vision Values */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center mb-14">Our Identity & Philosophy</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Mission */}
            <motion.div
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-bold text-blue-700 mb-3">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class industrial and agricultural products that uplift businesses
                and enrich lives through uncompromised quality and service excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-blue-700 mb-3">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                To become a multi-industry leader recognized for innovation, transparency,
                and long-term value creation across India.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold text-blue-700 mb-3">Core Values</h4>
              <p className="text-gray-700 leading-relaxed">
                Trust, discipline, ethics, customer satisfaction, innovation, and a commitment
                to quality — the foundation of everything we do.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Verticals */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center mb-16">
            Our Business Verticals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* SR Trade Vision */}
            <motion.div
              className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-3xl font-bold mb-6 text-gray-900">
                SR Trade Vision
              </h4>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Delivering premium industrial oils, chemicals, and machinery to the region’s core manufacturing sectors.
              </p>

              <div className="grid grid-cols-2 gap-4 text-gray-800 text-base">
                <div className="flex items-center"><FaPaintBrush className="mr-3 text-blue-600"/> Paint Industry</div>
                <div className="flex items-center"><FaCapsules className="mr-3 text-blue-600"/> Pharma Industry</div>
                <div className="flex items-center"><FaScroll className="mr-3 text-blue-600"/> Paper Industry</div>
                <div className="flex items-center"><FaBug className="mr-3 text-blue-600"/> Pesticides Industry</div>
              </div>
            </motion.div>

            {/* SR Industrial Corp */}
            <motion.div
              className="bg-gray-50 p-10 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold mb-6 text-gray-900">
                SR Industrial Corp
              </h4>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Authorized C&F agent for Waterproofing Solutions and a leading distributor of premium dry fruits sourced from India’s finest regions.
              </p>

              <div className="grid grid-cols-2 gap-4 text-gray-800 text-base">
                <div className="flex items-center"><FaBoxOpen className="mr-3 text-blue-600"/> Sealan Blocks</div>
                <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Almonds & Cashews</div>
                <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Walnuts & Pistachios</div>
                <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Raisins & RCN</div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* ==================== STATS SECTION ==================== */}
      <motion.section
        className="bg-gray-100 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {siteStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-6xl font-extrabold text-blue-700">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </p>
              <p className="mt-3 text-gray-700 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ==================== CONTACT SECTION ==================== */}
      <motion.section
        id="contact"
        className="py-24 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Let&apos;s Build Together
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Looking to place an order, collaborate, or discuss partnerships?
            Our team is here to help you build something remarkable.
          </p>

          <Link
            href="/contact"
            className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-700 transition-all duration-300 inline-flex items-center group text-lg transform hover:scale-105"
          >
            Get In Touch
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </motion.section>

    </main>
  );
}
