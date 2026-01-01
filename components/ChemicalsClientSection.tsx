'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { urlFor } from "@/lib/sanityImage";
import { FaArrowRight, FaIndustry, FaFlask } from "react-icons/fa";
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

export default function ChemicalsClientSection({ groupedProducts }: ClientSectionProps) {
  return (
    <>
      {/* ================= ENHANCED HERO SECTION ================= */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-teal-900 py-48 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0 0', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Badge with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="inline-block mb-8 px-6 py-3 text-sm tracking-widest font-bold rounded-full bg-white/15 border border-white/30 backdrop-blur-xl uppercase relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  translateX: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <FaFlask className="text-yellow-300" />
                Industrial Chemicals Division
              </span>
            </motion.span>
          </motion.div>

          {/* Title with Enhanced Animation */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              SR Trade Vision
            </span>
            {/* Animated Underline */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-1.5 w-32 bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-14 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineering reliable, high-performance chemical solutions for India&apos;s core industries with{' '}
            <span className="text-yellow-300 font-semibold">decades of trusted expertise</span>.
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  translateX: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">Inquire on WhatsApp</span>
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
      </motion.section>

      {/* ================= ENHANCED PRODUCTS SECTION ================= */}
      <motion.section
        id="products"
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
              Our Products
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
            Chemicals
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              By Industry
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
            Purpose-built chemical solutions tailored to meet the demands of diverse industrial sectors with precision, reliability, and proven performance.
          </motion.p>
        </div>

        <div className="relative z-10">
          <div className="space-y-48">
            {Object.entries(groupedProducts).map(([category, items], catIndex) => (
              <motion.section
                key={category}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: catIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Category Header - Enhanced */}
                <motion.div
                  className="mb-24 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                    >
                      <FaIndustry className="text-white text-2xl relative z-10" />
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
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                      {category}
                    </h3>
                  </div>
                  
                  <motion.div
                    className="h-1.5 w-32 bg-gradient-to-r from-blue-600 via-blue-500 to-transparent rounded-full mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                  
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    High-quality chemical formulations engineered specifically for{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                      {category.toLowerCase()}
                    </span>{' '}
                    applications with proven results and industry-leading performance.
                  </motion.p>
                </motion.div>

                {/* Enhanced Products Grid */}
                <motion.div
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {items.map((product, idx) => (
                    <motion.article
                      key={product._id}
                      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl flex flex-col cursor-pointer"
                      custom={idx}
                      variants={cardVariants}
                      whileHover={{ y: -12, scale: 1.02 }}
                    >
                      {/* Enhanced Image Container */}
                      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={urlFor(product.image)
                            .width(800)
                            .height(600)
                            .url()}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-125"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        
                        {/* Gradient Overlay with Animation */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                        
                        {/* Shine Effect on Hover */}
                        <motion.div
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          whileHover={{
                            translateX: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>

                      {/* Enhanced Content */}
                      <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                        <motion.h4
                          className="text-xl font-bold text-blue-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 + 0.2 }}
                        >
                          {product.name}
                        </motion.h4>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6">
                          {product.description}
                        </p>
                        
                        {/* Enhanced CTA */}
                        <motion.div
                          className="flex items-center gap-2 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                          {/* <span>Learn More</span> */}
                          {/* <FaArrowRight className="text-sm" /> */}
                        </motion.div>
                      </div>

                      {/* Enhanced Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-600 via-purple-600 to-transparent transition-opacity duration-500 pointer-events-none blur-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/50" />
                      </div>
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