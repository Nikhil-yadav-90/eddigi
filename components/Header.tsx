"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-sm px-4 sm:px-6 md:px-10 py-3 md:py-2 w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20 md:h-32">
        {/* Logo */}
        <div className="relative w-24 h-16 md:w-32 md:h-24 shrink-0">
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt="logo_eddigi"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-1 justify-evenly space-x-8 text-base font-extrabold text-black">
          <li>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:underline">
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Blog</li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex shrink-0 basis-[15%] justify-start text-center">
          <Link
            href="#"
            className="h-12 px-8 flex items-center justify-center text-foreground rounded-lg text-sm font-medium hover:rounded-xl hover:ring-2 hover:ring-blue-400 shadow-md transition"
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-black hover:bg-gray-200 transition"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background shadow-md px-4 py-6 relative z-50">
          <ul className="flex flex-col space-y-5 text-black font-semibold text-lg">
            <li>
              <Link href="/courses">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block hover:underline"
                >
                  Courses
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block hover:underline"
                >
                  About
                </span>
              </Link>
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </li>
            <li>
              <Link href="#">
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block mt-3 px-6 py-3 text-center bg-foreground text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  Start Learning
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
