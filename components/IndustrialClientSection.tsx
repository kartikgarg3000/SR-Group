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
};

interface IndustrialClientSectionProps {
  products: Product[];
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

export default function IndustrialClientSection({
  products,
}: IndustrialClientSectionProps) {
  return (
    <>
      {/* ================= HERO ================= */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-40 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-72 h-72 bg-gray-700 rounded-full blur-3xl opacity-30"
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
            <span className="inline-block mb-6 px-5 py-2 text-sm tracking-widest font-bold rounded-full bg-orange-500/20 border border-orange-400/50 backdrop-blur-sm uppercase">
              Industrial &amp; Agricultural Division
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            SR Industrial Corp
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Delivering <span className="text-orange-400 font-semibold">high-performance waterproofing solutions</span> and <span className="text-orange-400 font-semibold">premium agricultural produce</span> with uncompromising standards and excellence.
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
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-2xl hover:shadow-3xl"
            >
              Request a Quote
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
              <div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded"></div>
              <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Our Products</span>
              <div className="h-1 w-12 bg-gradient-to-l from-orange-600 to-orange-400 rounded"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each product is carefully selected to meet industry demands, performance benchmarks, and quality expectations with precision.
            </p>
          </motion.div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <motion.div
              className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {products.map((product, idx) => (
                <motion.article
                  key={product._id}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer"
                  custom={idx}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <Image
                      src={urlFor(product.image)
                        .width(600)
                        .height(400)
                        .url()}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-115"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    <motion.div
                      className="mt-6 flex items-center gap-2 text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Enquire Now <FaArrowRight className="text-sm" />
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-orange-600 to-transparent transition-opacity duration-300 pointer-events-none"></div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-500 text-xl font-medium">
                Products will be added shortly. Please check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
}