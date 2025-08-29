"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/providers/ThemeToggle";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    // Main navbar - WHITE in light mode, GRAY-900 in dark mode
    <nav className={`bg-${theme === "light" ? "WHITE" : "GRAY-900"} dark:${theme === "dark" ? "WHITE" : "GRAY-900"} shadow-lg fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700 transition-all duration-300`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className={`text-2xl font-bold text-${theme === "light" ? "GRAY-900" : "WHITE"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              Eroll Oliver
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                href="/"
                className={`text-${theme === "light" ? "GRAY-900" : "WHITE"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors`}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`text-${theme === "light" ? "GRAY-900" : "WHITE"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors`}
              >
                About
              </Link>
              <Link
                href="#projects"
                className={`text-${theme === "light" ? "GRAY-900" : "WHITE"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors`}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className={`text-${theme === "light" ? "GRAY-900" : "WHITE"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:text-gray-900 dark:hover:text-white px-3 py-2 transition-colors`}
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md text-${theme === "light" ? "GRAY-700" : "GRAY-300"} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden bg-${theme === "light" ? "WHITE" : "GRAY-900"} border-t border-gray-200 dark:border-gray-700`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 text-${theme === "light" ? "GRAY-700" : "GRAY-300"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`block px-3 py-2 text-${theme === "light" ? "GRAY-700" : "GRAY-300"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`block px-3 py-2 text-${theme === "light" ? "GRAY-700" : "GRAY-300"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`block px-3 py-2 text-${theme === "light" ? "GRAY-700" : "GRAY-300"} dark:text-${theme === "dark" ? "WHITE" : "GRAY-900"} hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
