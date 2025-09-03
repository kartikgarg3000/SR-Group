'use client';

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('/images/industrial-pattern.svg')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand & Tagline */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.jpg"
                alt="SR Group Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Pioneering Excellence in Chemical and Industrial Solutions since 1983.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link, index) => (
                <li key={`nav-${index}`}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-base text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : link.subLinks ? (
                    link.subLinks.map((subLink) => (
                      <Link
                        key={`sublink-${subLink.href}`}
                        href={subLink.href}
                        className="text-base text-gray-400 hover:text-amber-400 transition-colors block mt-2"
                      >
                        {subLink.label}
                      </Link>
                    ))
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Our Businesses</h3>
            <ul className="mt-4 space-y-2">
              {businessLinks.map(business => (
                <li key={`business-${business.href}`}>
                  <Link
                    href={business.href}
                    className="text-base text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {business.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-base text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>123 Industrial Area, Muzaffarnagar, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-3" />
                <a href="tel:+911234567890" className="hover:text-amber-400">+91 123-456-7890</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <a href="mailto:contact@srgroup.com" className="hover:text-amber-400">contact@srgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Socials & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 text-2xl">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={`social-${href}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-amber-400 transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="mt-4 sm:mt-0 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SR Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
