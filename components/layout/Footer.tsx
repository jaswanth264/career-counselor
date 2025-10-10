// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png" // Make sure this logo is suitable for dark backgrounds
              alt="Career Counselor Logo"
              width={180}
              height={40}
              // No filter classes, just the original logo
            />
            <p className="text-gray-400 text-sm">
              Helping you find the career path that best fits your personality and skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-base text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/features" className="text-base text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/faq" className="text-base text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/test" className="text-base text-gray-400 hover:text-white">Start Test</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base text-gray-400">contact@careercounselor.com</li>
              <li className="text-base text-gray-400">+91 12345 67890</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Career Counselor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
