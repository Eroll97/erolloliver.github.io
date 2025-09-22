"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import { Code, TrendingUp, Cloud, Smartphone, Palette } from "lucide-react";

export default function Skill() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Skills section */}
        <div>
          <h3
            className={`text-4xl font-bold text-center mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Skilled In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-blue-500"
                  : "bg-gray-50 border border-gray-200 hover:border-blue-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Code className="w-8 h-8 text-blue-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Frontend
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                React, Next.js, TypeScript, Tailwind CSS, Vue.js
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-green-500"
                  : "bg-gray-50 border border-gray-200 hover:border-green-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VE</span>
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Video Editing & Graphics
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Adobe Premiere Pro, After Effects, Photoshop, Illustrator
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-purple-500"
                  : "bg-gray-50 border border-gray-200 hover:border-purple-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Marketing
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                SEO, Social Media, Analytics, Strategy, Content Marketing
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-orange-500"
                  : "bg-gray-50 border border-gray-200 hover:border-orange-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Cloud className="w-8 h-8 text-orange-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Cloud & DevOps
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                AWS, Docker, Vercel, CI/CD, Git
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-pink-500"
                  : "bg-gray-50 border border-gray-200 hover:border-pink-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Smartphone className="w-8 h-8 text-pink-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Mobile
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                React Native, Flutter, Progressive Web Apps
              </p>
            </div>

            <div
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-cyan-500"
                  : "bg-gray-50 border border-gray-200 hover:border-cyan-500 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-8 h-8 text-cyan-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Design
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Figma, Adobe Creative Suite, UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
