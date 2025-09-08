"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/providers/ThemeToggle";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`shadow-lg fixed w-full z-50 top-0 border-b transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900/95 backdrop-blur-md border-gray-700"
          : "bg-white/95 backdrop-blur-md border-gray-200"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors hover:text-blue-500 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Eroll Oliver
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on tablet/mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link
                href="/"
                className={`px-3 py-2 transition-colors hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`px-3 py-2 transition-colors hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                About
              </Link>
              <Link
                href="#projects"
                className={`px-3 py-2 transition-colors hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className={`px-3 py-2 transition-colors hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet menu button - Shows on tablets and phones */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />

            {/* Enhanced Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 rounded-md transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Animated Burger Icon */}
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu - Animated dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t ${
            theme === "dark"
              ? "bg-gray-900/95 backdrop-blur-md border-gray-700"
              : "bg-white/95 backdrop-blur-md border-gray-200"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            <Link
              href="/"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } transform hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              🏠 Home
            </Link>
            <Link
              href="#about"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } transform hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              👤 About
            </Link>
            <Link
              href="#projects"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } transform hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              💼 Projects
            </Link>
            <Link
              href="#contact"
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              } transform hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              📧 Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
