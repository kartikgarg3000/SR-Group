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
    visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Subtle gradient overlay for initial visibility */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 ${
          scrolled || menuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* LOGO FIX: Using the correct path and adding a drop-shadow filter */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.jpg" // Corrected path to your single logo file
            alt="SR Group Logo"
            width={120}
            height={48}
            className="h-12 w-auto"
            style={{
              // This drop-shadow makes the logo visible on any background
              filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))',
            }}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              {link.subLinks ? (
                <>
                  <button
                    className={`flex items-center text-base font-medium transition-colors duration-300 ${
                      scrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white hover:text-amber-300'
                    }`}
                  >
                    {link.label}
                    <FaChevronDown className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-56">
                      <div className="py-2">
                        {link.subLinks.map(subLink => (
                          <Link key={subLink.label} href={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-amber-600">
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href || '#'}
                  className={`text-base font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white hover:text-amber-300'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${scrolled || menuOpen ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-200'}`}>
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-50 transition-colors duration-300 ${scrolled || menuOpen ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="transform transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)'}}>
              <motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={{ closed: { d: "M 2 5 L 22 5" }, open: { d: "M 5 19 L 19 5" }}} animate={menuOpen ? "open" : "closed"} transition={{ duration: 0.3 }} />
              <motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M 2 12 L 22 12" variants={{ closed: { opacity: 1 }, open: { opacity: 0 }}} animate={menuOpen ? "open" : "closed"} transition={{ duration: 0.3 }} />
              <motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={{ closed: { d: "M 2 19 L 22 19" }, open: { d: "M 5 5 L 19 19" }}} animate={menuOpen ? "open" : "closed"} transition={{ duration: 0.3 }} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={menuItemVariants}>
                  {link.subLinks ? (
                    <div>
                      <h4 className="text-gray-500 font-bold py-2">{link.label}</h4>
                      <div className="flex flex-col pl-4">
                        {link.subLinks.map(subLink => (
                          <Link key={subLink.label} href={subLink.href} className="block text-gray-800 text-lg font-medium py-2 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href || '#'} className="block text-gray-800 text-lg font-medium py-2 hover:text-amber-600" onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-6">
                <Link href="/contact" className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700">
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