'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/data';

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

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <Link href="/" className="-ml-4">
          <Image
            src="/images/logo.jpg"
            alt="SR Group Logo"
            width={200}
            height={60}
            className="h-[65px] w-[99px]"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-brand-yellow' : 'text-white hover:text-amber-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-50 ${scrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <motion.path
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 5 L 22 5" },
                  open: { d: "M 5 19 L 19 5" }
                }}
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                d="M 2 12 L 22 12"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 19 L 22 19" },
                  open: { d: "M 5 5 L 19 19" }
                }}
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl"
          >
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => (
                <motion.div key={link.label} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    className="block text-gray-800 text-lg font-medium py-2 hover:text-brand-yellow"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence> {/* <-- FIX: Corrected typo here */}
    </header>
  );
}