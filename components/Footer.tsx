'use client';

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";

const businessLinks = [
  { href: '/chemicals', label: 'SR Trade Vision', icon: '🧪' },
  { href: '/industrial', label: 'SR Industrial Corp', icon: '🏭' }
];

const socialLinks = [
  { href: 'https://wa.me/91XXXXXXXXXX', icon: FaWhatsapp, label: 'WhatsApp', color: 'from-green-500 to-green-600' },
  { href: 'https://facebook.com/your-page', icon: FaFacebook, label: 'Facebook', color: 'from-blue-600 to-blue-700' },
  { href: 'https://linkedin.com/company/your-company', icon: FaLinkedin, label: 'LinkedIn', color: 'from-blue-700 to-blue-800' },
  { href: 'https://instagram.com/your-page', icon: FaInstagram, label: 'Instagram', color: 'from-pink-500 to-purple-600' },
];

const linkVariants = {
  hidden: { opacity: 0, y: 10, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Footer() {
  const { scrollYProgress } = useScroll();
  // Fixed: Ensure footer is always visible, only fade in near bottom
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0.3, 1]);

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Tagline - Enhanced */}
          <motion.div
            className="col-span-1 md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="inline-block mb-8 group relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <Image
                src="/images/logo.jpg"
                alt="SR Group Logo"
                width={180}
                height={60}
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-110 relative z-10 filter drop-shadow-2xl"
              />
            </Link>
            
            <motion.p
              className="text-lg text-gray-300 max-w-md leading-relaxed font-medium mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pioneering excellence in chemical and industrial solutions since{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 font-bold animate-gradient">
                1983
              </span>.
            </motion.p>
            
            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ href, icon: Icon, label, color }, index) => (
                <motion.a
                  key={`social-${label}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <Icon className="relative z-10 text-xl group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h3
              className="text-lg font-bold tracking-wider uppercase text-white mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
              Navigation
            </motion.h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={`nav-${index}`}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="group relative text-gray-300 hover:text-white transition-colors inline-flex items-center gap-3 py-2"
                    >
                      <motion.span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-8 transition-all duration-300"
                      />
                      <span className="relative pl-2 group-hover:pl-4 transition-all duration-300">{link.label}</span>
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                    </Link>
                  ) : link.subLinks ? (
                    link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={`sublink-${subLink.href}`}
                        href={subLink.href}
                        className="group relative text-gray-300 hover:text-white transition-colors block mt-2 inline-flex items-center gap-3 py-2"
                      >
                        <motion.span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-6 transition-all duration-300"
                        />
                        <span className="relative pl-2 group-hover:pl-3 transition-all duration-300">{subLink.label}</span>
                        <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs" />
                      </Link>
                    ))
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Verticals - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h3
              className="text-lg font-bold tracking-wider uppercase text-white mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="w-1 h-6 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />
              Our Businesses
            </motion.h3>
            <ul className="space-y-4">
              {businessLinks.map((business, index) => (
                <motion.li
                  key={`business-${business.href}`}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link
                    href={business.href}
                    className="group relative text-gray-300 hover:text-white transition-colors inline-flex items-center gap-3 py-2 font-medium"
                  >
                    <motion.span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full group-hover:w-8 transition-all duration-300"
                    />
                    <span className="text-xl mr-2 group-hover:scale-110 transition-transform duration-300">{business.icon}</span>
                    <span className="relative pl-2 group-hover:pl-4 transition-all duration-300">{business.label}</span>
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-sm" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us - Enhanced */}
          <motion.div
            className="col-span-1 md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h3
              className="text-lg font-bold tracking-wider uppercase text-white mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
              Contact
            </motion.h3>
            <ul className="space-y-6 text-base text-gray-300">
              <motion.li
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                </motion.div>
                <span className="group-hover:text-white transition-colors pt-2 leading-relaxed">
                  123 Industrial Area, Muzaffarnagar, UP, India
                </span>
              </motion.li>
              
              <motion.li
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaPhoneAlt className="w-5 h-5 text-green-400" />
                </motion.div>
                <a href="tel:+911234567890" className="hover:text-green-400 transition-colors font-medium">
                  +91 123-456-7890
                </a>
              </motion.li>
              
              <motion.li
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FaEnvelope className="w-5 h-5 text-pink-400" />
                </motion.div>
                <a href="mailto:contact@srgroup.com" className="hover:text-pink-400 transition-colors font-medium">
                  contact@srgroup.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Divider */}
        <motion.div
          className="relative my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Bottom Bar - Enhanced */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p
            className="text-sm text-gray-400 text-center sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 font-bold animate-gradient">
              SR Group
            </span>
            . All rights reserved.
          </motion.p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors relative group"
            >
              <span className="relative z-10">Privacy Policy</span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
              />
            </Link>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors relative group"
            >
              <span className="relative z-10">Terms of Service</span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}