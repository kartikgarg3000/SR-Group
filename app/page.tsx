'use client';

import Link from "next/link";
import BusinessCarousel from "@/components/BusinessCarousel";
import { siteStats } from "@/lib/data"; 
import { motion, Variants } from 'framer-motion'; 
import CountUp from 'react-countup';
import { FaPaintBrush, FaCapsules, FaScroll, FaBug, FaBoxOpen, FaTree } from "react-icons/fa";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Carousel */}
      <div className="relative h-screen">
        <BusinessCarousel />
      </div>

      {/* "About Us" Section with Timeline */}
      <motion.section
        id="about"
        className="py-24 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Forged in Tradition, Driven by Vision</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our journey is one of resilience, growth, and diversification, built on a foundation of trust and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h3>
            {/* MODIFIED: Narrative updated to remove the relaunch */}
            <p className="text-gray-600 leading-relaxed mb-4">
              The story of **SR Group** began in 1983 with the establishment of **SR Trade Vision**. For decades, we built a legacy as a trusted name in industrial supplies, consistently adapting to the evolving demands of modern industry and laying a strong foundation of quality and reliability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Embracing growth, we expanded our operations in 2021 with the launch of **SR Industrial Corp**. This new vertical broadened our portfolio with high-quality construction materials and premium agricultural products, marking a new chapter in our commitment to serving diverse market needs.
            </p>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-2">
            <div className="relative border-l-4 border-blue-200 pl-8 space-y-16"> {/* Increased space-y for better visual separation */}
              <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} viewport={{once: true}}>
                <div className="absolute -left-4 top-1 h-6 w-6 rounded-full bg-blue-600 ring-4 ring-white"></div>
                <h4 className="font-bold text-xl text-blue-800">1983 - Foundation</h4>
                <p className="text-gray-600">SR Trade Vision is established, beginning its journey in industrial oils and chemicals.</p>
              </motion.div>
              
              {/* REMOVED: The 2014 Relaunch block was here */}
              
              <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.4}} viewport={{once: true}}>
                <div className="absolute -left-4 top-1 h-6 w-6 rounded-full bg-blue-600 ring-4 ring-white"></div>
                <h4 className="font-bold text-xl text-blue-800">2021 - Diversification</h4>
                <p className="text-gray-600">SR Industrial Corp is launched, expanding into construction materials and dry fruits.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Detailed Verticals Section */}
        <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* SR Trade Vision Details */}
                <motion.div className="bg-gray-50 p-8 rounded-xl border border-gray-200" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.2}}>
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">SR Trade Vision</h3>
                    <p className="text-gray-600 mb-6">Supplying innovative industrial oils, chemicals, and machinery to core sectors.</p>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-center"><FaPaintBrush className="mr-3 text-blue-600"/> Paint Industry</div>
                        <div className="flex items-center"><FaCapsules className="mr-3 text-blue-600"/> Pharma Industry</div>
                        <div className="flex items-center"><FaScroll className="mr-3 text-blue-600"/> Paper Industry</div>
                        <div className="flex items-center"><FaBug className="mr-3 text-blue-600"/> Pesticides Industry</div>
                    </div>
                </motion.div>
                {/* SR Industrial Corp Details */}
                <motion.div className="bg-gray-50 p-8 rounded-xl border border-gray-200" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5, delay: 0.4}}>
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">SR Industrial Corp</h3>
                    <p className="text-gray-600 mb-6">Authorised C&F agent for Sealan Blocks and a trusted trader of premium dry fruits.</p>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-center"><FaBoxOpen className="mr-3 text-blue-600"/> Sealan Blocks</div>
                        <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Almonds & Cashews</div>
                        <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Walnuts & Pistachios</div>
                        <div className="flex items-center"><FaTree className="mr-3 text-blue-600"/> Raisins & RCN</div>
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.section>

      {/* Stats Section with CountUp */}
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
              <p className="text-6xl font-extrabold text-blue-600">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </p>
              <p className="mt-3 text-gray-600 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Let&apos;s Build Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Looking to place an order, partner with us, or learn more about our services? Our team is ready to assist you.
          </p>
          <Link
            href="/contact"
            className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-700 transition-all duration-300 inline-flex items-center group text-lg transform hover:scale-105"
          >
            Get In Touch
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}