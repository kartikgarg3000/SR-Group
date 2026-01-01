'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -15, x: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen 
          ? 'bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Animated Background Gradient */}
      {scrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/50 to-purple-50/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Subtle animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* LOGO with Hover Effect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/" className="flex-shrink-0 group relative inline-block">
            {/* Glow Effect */}
            <motion.div
              className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logo.jpg"
                alt="SR Group Logo"
                width={140}
                height={50}
                className="h-14 w-auto transition-all relative z-10 filter drop-shadow-lg"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link, idx) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <motion.button
                    className={`flex items-center text-base font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl relative overflow-hidden group ${
                      scrolled 
                        ? 'text-gray-800 hover:text-blue-600' 
                        : 'text-white hover:text-blue-200'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{link.label}</span>
                    <motion.span
                      className="ml-2 h-3 w-3 relative z-10"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  </motion.button>
                  
                  {/* Enhanced Dropdown */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <motion.div
                      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-gray-100 overflow-hidden border border-white/50"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Gradient Top Border */}
                      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
                      <div className="py-3">
                        {link.subLinks.map((subLink, subIdx) => (
                          <motion.div
                            key={subLink.label}
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIdx * 0.05 }}
                          >
                            <Link
                              href={subLink.href}
                              className="block px-6 py-3 text-base font-medium text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200 relative group/item"
                            >
                              <motion.span
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-blue-600 rounded-r-full group-hover/item:h-full transition-all duration-300"
                              />
                              <span className="relative pl-2">{subLink.label}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              ) : (
                <motion.div 
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href || '#'}
                    className={`text-base font-semibold transition-all duration-300 px-5 py-2.5 rounded-xl relative overflow-hidden group block ${
                      scrolled 
                        ? 'text-gray-800 hover:text-blue-600' 
                        : 'text-white hover:text-blue-200'
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Button with Shine Effect */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className={`group relative overflow-hidden px-8 py-3.5 rounded-full text-base font-bold transition-all duration-300 shadow-xl ${
              scrolled || menuOpen
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            {/* Shine Animation */}
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
            <span className="relative z-10">Contact Us</span>
          </Link>
        </motion.div>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative z-50 p-2.5 rounded-xl transition-all duration-300 ${
            scrolled || menuOpen 
              ? 'text-gray-800 bg-gray-100/50' 
              : 'text-white bg-white/10'
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            className="transition-transform duration-300"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={{ 
                closed: { d: "M 2 5 L 22 5", pathLength: 1 },
                open: { d: "M 5 19 L 19 5", pathLength: 1 }
              }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              d="M 2 12 L 22 12"
              variants={{ 
                closed: { opacity: 1, pathLength: 1 },
                open: { opacity: 0, pathLength: 0 }
              }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={{ 
                closed: { d: "M 2 19 L 22 19", pathLength: 1 },
                open: { d: "M 5 5 L 19 19", pathLength: 1 }
              }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.svg>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl overflow-hidden border-t border-gray-200"
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative flex flex-col p-8 space-y-3 max-w-7xl mx-auto">
              {navLinks.map((link, idx) => (
                <motion.div key={link.label} variants={menuItemVariants}>
                  {link.subLinks ? (
                    <div>
                      <h4 className="text-gray-700 font-bold text-lg py-3 flex items-center gap-2">
                        <motion.span
                          className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                        />
                        {link.label}
                      </h4>
                      <div className="flex flex-col pl-6 space-y-2">
                        {link.subLinks.map((subLink, subIdx) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className="text-gray-800 text-base font-medium py-2 hover:text-blue-600 hover:pl-3 transition-all relative group"
                            onClick={() => setMenuOpen(false)}
                          >
                            <motion.span
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3 transition-all duration-300 rounded-full"
                            />
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="block text-gray-800 text-lg font-medium py-3 hover:text-blue-600 transition-colors relative group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-8 bg-blue-100 group-hover:w-1 transition-all duration-300 rounded-r-full"
                      />
                      <span className="relative pl-3">{link.label}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div 
                variants={menuItemVariants} 
                className="pt-6 border-t border-gray-200 mt-6"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    whileHover={{
                      translateX: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}