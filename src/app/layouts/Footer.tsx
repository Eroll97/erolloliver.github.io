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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3
              className={`text-base md:text-lg font-semibold mb-3 md:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Eroll Oliver
            </h3>
            <p
              className={`text-xs md:text-sm leading-relaxed mb-3 md:mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate developer creating innovative web solutions with modern
              technologies. Always learning, always building.
            </p>

            <p
              className={`text-xs md:text-sm ${
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
          <div className="text-center md:text-left">
            <h3
              className={`text-base md:text-lg font-semibold mb-3 md:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-1 md:space-y-2">
              {["About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-xs md:text-sm transition-colors duration-200 hover:text-blue-500 ${
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
          <div className="text-center md:text-left">
            <h3
              className={`text-base md:text-lg font-semibold mb-3 md:mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
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
                <Github size={18} className="md:w-5 md:h-5" />
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
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a
                href="mailto:eroll@example.com"
                title="Send Email"
                aria-label="Send an email"
                className={`transition-colors duration-200 hover:text-red-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <Mail size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-6 md:mt-8 pt-6 md:pt-8 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="text-center sm:flex sm:flex-row sm:justify-between sm:items-center">
            <p
              className={`text-xs md:text-sm ${
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
