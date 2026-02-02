'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; 
import { carouselSlides } from '@/lib/data';
import { useRef, useState, useEffect } from 'react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15 + 0.4,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 },
  },
};

export default function BusinessCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative h-screen overflow-hidden">
      {/* Animated background particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDuration = Math.random() * 20 + 20;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/10 rounded-full blur-[1px] will-change-transform"
                animate={{
                  y: ['0vh', '100vh'],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: 'linear',
                }}
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                }}
              />
            );
          })}
        </div>
      )}

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Parallax]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1200}
        autoplay={{ 
          delay: 6000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !w-12 !h-1.5 !bg-white/40 !opacity-100 !rounded-full transition-all duration-500 hover:!bg-brand-yellow !mx-1"></span>`;
          },
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="h-screen"
        parallax={true}
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index} className="h-screen relative">
            <div className="relative w-full h-full">
              {/* Background Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ 
                  scale: currentIndex === index ? 1 : 1.1,
                }}
                transition={{ duration: 8, ease: 'easeOut' }}
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={95}
                />
              </motion.div>

              {/* Enhanced Gradient Overlay with Animated Waves */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Animated Mesh Gradient Overlay */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
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

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-start text-left">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                  <div className="max-w-3xl">
                    {/* Decorative Accent Line */}
                    <motion.div
                      custom={-1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={textVariants}
                      className="flex items-center gap-3 mb-6"
                    >
                      <motion.div
                        className="h-1 w-16 bg-gradient-to-r from-brand-yellow to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                      />
                      <motion.span
                        className="text-sm font-bold tracking-widest text-brand-yellow uppercase"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        Excellence Since 1983
                      </motion.span>
                    </motion.div>

                    {/* Title with Glitch Effect on Hover */}
                    <motion.h2
                      custom={0}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={textVariants}
                      className="font-extrabold mb-6 text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] relative"
                    >
                      <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                        {slide.title}
                      </span>
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-brand-yellow via-amber-400 to-transparent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                      />
                    </motion.h2>

                    {/* Subtitle with Typewriter-like Effect */}
                    <motion.p
                      custom={1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={textVariants}
                      className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/95 leading-relaxed font-light tracking-wide drop-shadow-lg"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* CTA Buttons with Enhanced Effects */}
                    <motion.div
                      custom={2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={buttonVariants}
                      className="flex flex-wrap gap-5"
                    >
                      {slide.isWelcome ? (
                        <>
                          <motion.div whileHover="hover" variants={buttonVariants}>
                            <Link
                              href="#about"
                              className="group relative inline-block overflow-hidden bg-brand-yellow text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl"
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
                              <span className="relative z-10 flex items-center gap-2">
                                Discover More
                                <motion.span
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  →
                                </motion.span>
                              </span>
                            </Link>
                          </motion.div>
                          
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Link
                              href="#contact"
                              className="group relative inline-block bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl overflow-hidden"
                            >
                              {/* Animated Border Glow */}
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-white/50 opacity-0 group-hover:opacity-100"
                                animate={{
                                  scale: [1, 1.05, 1],
                                  opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                                }}
                              />
                              <span className="relative z-10">Contact Us</span>
                            </Link>
                          </motion.div>
                        </>
                      ) : (
                        <motion.div whileHover="hover" variants={buttonVariants}>
                          <Link
                            href={slide.href}
                            className="group relative inline-block overflow-hidden bg-brand-yellow text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl"
                          >
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
                            <span className="relative z-10 flex items-center gap-2">
                              Explore Products
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                →
                              </motion.span>
                            </span>
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Scroll Indicator with Magnetic Effect */}
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center group cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <span className="text-xs uppercase tracking-widest mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Pulsing Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.a>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellow"
          initial={{ width: '0%' }}
          animate={{
            width: `${((currentIndex + 1) / carouselSlides.length) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}