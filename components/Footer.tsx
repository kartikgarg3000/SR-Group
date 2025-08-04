import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { navLinks } from "@/lib/data";

const businessLinks = [
  { href: '/chemicals', label: 'SR Trade Vision' },
  { href: '/industrial', label: 'SR Industrial Corp' }
];

const socialLinks = [
  { href: 'https://wa.me/91XXXXXXXXXX', icon: FaWhatsapp, label: 'WhatsApp' },
  { href: 'https://facebook.com/srgroup', icon: FaFacebook, label: 'Facebook' },
  { href: 'https://linkedin.com/company/srgroup', icon: FaLinkedin, label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-white">SR Group</h2>
            <p className="mt-2 text-sm text-gray-400">
              Pioneering Excellence in Chemical and Industrial Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Verticals */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-300">Our Businesses</h3>
            <ul className="text-sm space-y-1">
              {businessLinks.map(business => (
                <li key={business.href}>
                  <Link 
                    href={business.href} 
                    className="text-gray-400 hover:text-brand-yellow transition-colors"
                  >
                    {business.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">Connect With Us</h3>
            <div className="flex space-x-4 text-2xl">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-yellow transition-colors"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SR Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}