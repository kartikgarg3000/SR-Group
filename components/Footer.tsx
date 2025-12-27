'use client';

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const businessLinks = [
  { href: '/chemicals', label: 'SR Trade Vision' },
  { href: '/industrial', label: 'SR Industrial Corp' }
];

const socialLinks = [
  { href: 'https://wa.me/91XXXXXXXXXX', icon: FaWhatsapp, label: 'WhatsApp' },
  { href: 'https://facebook.com/your-page', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://linkedin.com/company/your-company', icon: FaLinkedin, label: 'LinkedIn' }
];

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand & Tagline */}
          <motion.div
            className="col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/images/logo.jpg"
                alt="SR Group Logo"
                width={160}
                height={50}
                className="h-12 w-auto transition-transform group-hover:scale-110"
              />
            </Link>
            <p className="text-lg text-gray-300 max-w-xs leading-relaxed font-medium">
              Pioneering excellence in chemical and industrial solutions since <span className="text-blue-400 font-bold">1983</span>.
            </p>
            <div className="mt-6 flex space-x-4 text-2xl">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={`social-${href}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 group"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base font-bold tracking-wider uppercase text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li key={`nav-${index}`} variants={linkVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                    </Link>
                  ) : link.subLinks ? (
                    link.subLinks.map((subLink) => (
                      <Link
                        key={`sublink-${subLink.href}`}
                        href={subLink.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors block mt-2 inline-flex items-center gap-2 group"
                      >
                        <span>{subLink.label}</span>
                        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                      </Link>
                    ))
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Verticals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base font-bold tracking-wider uppercase text-white mb-6">Our Businesses</h3>
            <ul className="space-y-4">
              {businessLinks.map((business) => (
                <motion.li key={`business-${business.href}`} variants={linkVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link
                    href={business.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group font-medium"
                  >
                    <span>{business.label}</span>
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base font-bold tracking-wider uppercase text-white mb-6">Contact</h3>
            <ul className="space-y-5 text-base text-gray-300">
              <li className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="group-hover:text-white transition-colors">123 Industrial Area, Muzaffarnagar, UP, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">+91 123-456-7890</a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaEnvelope className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:contact@srgroup.com" className="hover:text-blue-400 transition-colors">contact@srgroup.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>

        {/* Bottom Bar: Copyright */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="text-blue-400 font-bold">SR Group</span>. All rights reserved.
          </p>
          <div className="text-sm text-gray-400 space-x-4">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}