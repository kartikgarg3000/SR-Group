import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">SR Group</h2>
          <p className="mt-2 text-sm text-gray-400">
            Excellence in Chemicals & Dry Fruits
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/chemicals" className="hover:text-yellow-400">Chemicals</Link></li>
            <li><Link href="/dryfruits" className="hover:text-yellow-400">Dry Fruits</Link></li>
            <li><Link href="#about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="#contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-400" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SR Group. All rights reserved.
      </div>
    </footer>
  );
}
