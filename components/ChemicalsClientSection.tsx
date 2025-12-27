'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { urlFor } from "@/lib/sanityImage";
import { FaArrowRight } from "react-icons/fa";
import { SanityImage } from "@/types/sanity";

type Product = {
  _id: string;
  name: string;
  description: string;
  image: SanityImage;
  category: string;
};

interface ClientSectionProps {
  groupedProducts: Record<string, Product[]>;
}

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export default function ClientSection({ groupedProducts }: ClientSectionProps) {
  return (
    <>
      {/* ================= HERO ================= */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 py-40 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block mb-6 px-5 py-2 text-sm tracking-widest font-bold rounded-full bg-white/15 border border-white/30 backdrop-blur-sm uppercase">
              Industrial Chemicals Division
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            SR Trade Vision
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Engineering reliable, high-performance chemical solutions for India&apos;s core industries with decades of trusted expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl"
            >
              Inquire on WhatsApp
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= PRODUCTS ================= */}
      <motion.section
        id="products"
        className="px-6 py-32 bg-gradient-to-b from-white to-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
              <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">Our Products</span>
              <div className="h-1 w-12 bg-gradient-to-l from-blue-600 to-blue-400 rounded"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Chemicals by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Purpose-built chemical solutions tailored to meet the demands of diverse industrial sectors with precision and reliability.
            </p>
          </motion.div>

          <div className="space-y-32">
            {Object.entries(groupedProducts).map(([category, items], catIndex) => (
              <motion.section
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <motion.div
                  className="mb-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {category}
                  </h3>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-6"></div>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    High-quality chemical formulations engineered specifically for {category.toLowerCase()} applications with proven results.
                  </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {items.map((product, idx) => (
                    <motion.article
                      key={product._id}
                      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer"
                      custom={idx}
                      variants={cardVariants}
                      whileHover={{ y: -8 }}
                    >
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-gray-100">
                        <Image
                          src={urlFor(product.image)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-115"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-7 flex flex-col flex-grow relative z-10">
                        <h4 className="text-xl font-bold text-blue-900 mb-3 leading-tight">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                          {product.description}
                        </p>
                        <motion.div
                          className="mt-4 flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {/* Learn more <FaArrowRight className="text-sm" /> */}
                        </motion.div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-600 to-transparent transition-opacity duration-300 pointer-events-none"></div>
                    </motion.article>
                  ))}
                </motion.div>
              </motion.section>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}