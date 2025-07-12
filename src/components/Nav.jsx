"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // or your preferred icon library

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full py-3 bg-white shadow-xs md:bg-inherit md:shadow-none relative z-50">
      <div className="flex items-center justify-between py-2 md:py-4 md:px-10 px-7">
        {/* Logo */}
        <Link href="/">
        <div className="w-[180px] md:w-[200px] lg:w-[240px]">
          <Image
            src="/images/faceframe_logo.png"
            alt="FaceFrame Logo"
            width={240}
            height={80}
            priority
            style={{ height: 'auto', width: '100%' }}
          />
        </div>

        </Link>

        {/* Desktop nav + mobile toggle */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center gap-6">
            <li className="nav-item">
              <Link href="#features-section">Features</Link>
            </li>
            <li className="nav-item">
              <Link href="#how-it-works-section">How It Works</Link>
            </li>
            <li className="nav-item">
              <Link href="#contact-section">
                <button className="primary-btn">Contact Us</button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-black z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white w-full
          ${menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}
        `}
      >
        <li className="nav-item px-6 py-2">
          <Link href="#features-section" onClick={closeMenu}>Features</Link>
        </li>
        <li className="nav-item px-6 py-2">
          <Link href="#how-it-works-section" onClick={closeMenu}>How It Works</Link>
        </li>
        <li className="nav-item px-6 py-4">
          <Link href="#contact-section" onClick={closeMenu}>
            <button className="primary-btn">Contact Us</button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;
