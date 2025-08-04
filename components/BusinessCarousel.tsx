'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { carouselSlides } from '@/lib/data'; // Import data

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.3, // Staggered delay
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function BusinessCarousel() {
  return (
    <div className="w-full relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !w-3 !h-3 !bg-white/60 !opacity-100 transition-all duration-300 hover:!bg-brand-yellow"></span>`;
          },
        }}
        className="h-screen"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index} className="h-screen">
            <div className="relative w-full h-full">
              <Image
                src={slide.img} alt={slide.title} fill priority={index === 0}
                className="object-cover" sizes="100vw" quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="relative z-10 h-full flex items-center justify-start text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                  <div className="max-w-2xl">
                    <motion.h2
                      custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}
                      className={`font-extrabold mb-4 text-5xl md:text-7xl tracking-tighter`}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}
                      className="text-lg md:text-xl mb-8 text-white/90"
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants} className="flex flex-wrap gap-4">
                      {slide.isWelcome ? (
                        <>
                          <Link href="#about" className="inline-block bg-brand-yellow text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-amber-300 transition-all duration-300 shadow-lg transform hover:scale-105">
                            Discover More
                          </Link>
                          <Link href="#contact" className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                            Contact Us
                          </Link>
                        </>
                      ) : (
                        <Link href={slide.href} className="inline-block bg-brand-yellow text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-amber-300 transition-all duration-300 shadow-lg transform hover:scale-105">
                          Explore Products →
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Animated Scroll Down Indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>
    </div>
  );
}