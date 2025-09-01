"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className={`bg-${theme === "light" ? "WHITE" : "GRAY-900"} dark:${theme === "dark" ? "WHITE" : "GRAY-900"} border-t border-gray-200 dark:border-gray-700`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Eroll Oliver
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Passionate developer creating innovative web solutions with modern
              technologies. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:eroll@example.com"
                title="Send Email"
                aria-label="Send an email"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} Eroll Oliver. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center mt-2 sm:mt-0">
              Made with{" "}
              <Heart
                size={16}
                className="mx-1 text-red-500"
                fill="currentColor"
              />{" "}
              and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
