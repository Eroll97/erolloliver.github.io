"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3
              className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Eroll Oliver
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 lg:mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate developer creating innovative web solutions with modern
              technologies. Always learning, always building.
            </p>

            <p
              className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Isaiah 29:11
              <br />
              &ldquo;For I know the plans I have for you, declares the Lord,
              plans to prosper you and not to harm you, plans to give you hope
              and a future.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3
              className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {["About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-xs sm:text-sm transition-colors duration-200 hover:text-blue-500 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h3
              className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="Visit GitHub Profile"
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Github size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="Visit LinkedIn Profile"
                className={`transition-colors duration-200 hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:eroll@example.com"
                title="Send Email"
                aria-label="Send an email"
                className={`transition-colors duration-200 hover:text-red-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="text-center sm:flex sm:flex-row sm:justify-between sm:items-center">
            <p
              className={`text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              © {currentYear} Eroll Oliver. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
