'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/data';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      {/* Subtle gradient overlay for initial visibility */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none transition-opacity duration-300 ${
          scrolled || menuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/images/logo.jpg"
              alt="SR Group Logo"
              width={140}
              height={50}
              className="h-14 w-auto transition-transform group-hover:scale-105"
              style={{
                filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))',
              }}
              priority
            />
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <motion.button
                    className={`flex items-center text-base font-semibold transition-all duration-300 px-4 py-2 rounded-lg group-hover:bg-white/10 ${
                      scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {link.label}
                    <motion.span
                      className="ml-2 h-3 w-3"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  </motion.button>
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 overflow-hidden">
                      <div className="py-3">
                        {link.subLinks.map((subLink, idx) => (
                          <motion.div
                            key={subLink.label}
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              href={subLink.href}
                              className="block px-6 py-3 text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </>
              ) : (
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href={link.href || '#'}
                    className={`text-base font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 block ${
                      scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            href="/contact"
            className={`px-7 py-3 rounded-full text-base font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              scrolled || menuOpen
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${
            scrolled || menuOpen ? 'text-gray-800' : 'text-white'
          }`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" className="transition-transform duration-300">
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={{ closed: { d: "M 2 5 L 22 5" }, open: { d: "M 5 19 L 19 5" } }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              d="M 2 12 L 22 12"
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={{ closed: { d: "M 2 19 L 22 19" }, open: { d: "M 5 5 L 19 19" } }}
              animate={menuOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden border-t border-gray-200"
          >
            <div className="flex flex-col p-8 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={menuItemVariants}>
                  {link.subLinks ? (
                    <div>
                      <h4 className="text-gray-700 font-bold text-lg py-3">{link.label}</h4>
                      <div className="flex flex-col pl-6 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className="text-gray-800 text-base font-medium py-2 hover:text-blue-600 hover:pl-1 transition-all"
                            onClick={() => setMenuOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="block text-gray-800 text-lg font-medium py-3 hover:text-blue-600 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-6 border-t border-gray-200 mt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}