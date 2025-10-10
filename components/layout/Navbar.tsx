'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle'; // Import ThemeToggle

export const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Links for the navbar
  const navLinks = (
    <>
      <Link href="/features" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Features
      </Link>
      <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        About Us
      </Link>
      <Link href="/faq" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        FAQ
      </Link>
    </>
  );

  // Auth section (logged in/logged out states)
  const authSection = (
    <div className="flex items-center space-x-4">
      <ThemeToggle /> {/* Theme Toggle Button */}

      {status === 'loading' ? (
        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded-md"></div>
      ) : session?.user ? (
        <>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Dashboard
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
          >
            Sign Out
          </button>
        </>
      ) : (
        <Link href="/login" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Login
        </Link>
      )}
    </div>
  );

  return (
    <nav className="bg-[#f3f3f3] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png" // Ensure this path is correct
                alt="Career Counselor Logo"
                width={150} // Adjust width as needed
                height={100} // Adjust height as needed
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex md:items-center">{authSection}</div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-5">
            {authSection}
          </div>
        </div>
      )}
    </nav>
  );
};
