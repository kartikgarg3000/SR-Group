'use client';

import Image from "next/image";
import Link from "next/link";
import BusinessCarousel from "@/components/BusinessCarousel";
import { businessUnits, siteStats } from "@/lib/data"; // Import data
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const sectionVariants = {
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

      {/* Business Units */}
      <motion.section
        id="about"
        className="py-24 px-4 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Business Verticals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We operate across key sectors, delivering high-quality, trusted products and solutions through our specialized verticals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {businessUnits.map((unit, index) => (
            <motion.div
              key={unit.name}
              className="group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-900 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="overflow-hidden relative h-80">
                <Image
                  src={unit.image} alt={unit.name} fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-3">{unit.name}</h3>
                <p className="text-white/80 mb-6">{unit.description}</p>
                <Link href={unit.href} className="inline-flex items-center text-base font-semibold text-brand-yellow hover:text-amber-300 transition group">
                  Explore Vertical
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
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
              <p className="text-6xl font-extrabold text-brand-blue">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Let's Build Together</h2>
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