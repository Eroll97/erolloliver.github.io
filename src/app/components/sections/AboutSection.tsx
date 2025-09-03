"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import {
  Code,
  Palette,
  TrendingUp,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import PixelTransition from "../ui/PixelTransition";

export default function   AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl text-center font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg text-center leading-relaxed mb-12 max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am a passionate Full Stack Developer with expertise in building
          dynamic web applications. With over 3 years of experience in crafting
          digital solutions, I specialize in modern web technologies and digital
          marketing strategies that drive results.
        </p>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image section with PixelTransition */}
          <div className="flex justify-center">
            <PixelTransition
              firstContent={
                <div className="w-full h-full bg-gradient-to-br flex items-center justify-center rounded-[15px]">
                  <img
                    src="./public/assets/bee_farm_photo.jpeg"
                    alt="Eroll Oliver - Full Stack Developer"
                    className="w-full h-full object-cover rounded-[13px]"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center text-white">
                          <div class="text-center">
                            <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                              </svg>
                            </div>
                            <p class="font-semibold">Eroll Oliver</p>
                            <p class="text-sm opacity-80">Full Stack Developer</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              }
              secondContent={
                <div
                  className={`w-full h-full flex items-center justify-center p-8 rounded-[15px] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                      : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <div className="text-2xl font-bold">3+</div>
                        <div className="text-sm opacity-75">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <Award className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-sm opacity-75">
                          Projects Completed
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="text-sm">Full Stack Development</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Digital Marketing</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm">Team Leadership</span>
                      </div>
                    </div>
                  </div>
                </div>
              }
              gridSize={8}
              animationStepDuration={0.4}
              className="w-full max-w-md mx-auto"
              aspectRatio="100%"
              pixelColor={theme === "dark" ? "#374151" : "#6b7280"}
            />
          </div>

          {/* Description section */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                My Journey
              </h3>
              <p
                className={`text-base leading-relaxed mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                As a seasoned digital marketing expert with over 5 years of
                proven success, I've evolved into a Full Stack Developer who
                bridges the gap between technical excellence and business
                strategy.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I thrive on creativity and innovation, continuously seeking new
                ways to drive growth and deliver exceptional results through
                cutting-edge web technologies and data-driven marketing
                approaches.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-blue-500" />
                  <div>
                    <div className="font-semibold">Development</div>
                    <div className="text-sm opacity-75">Full Stack</div>
                  </div>
                </div>
              </div>
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Marketing</div>
                    <div className="text-sm opacity-75">Digital Strategy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div>
          <h3
            className={`text-2xl font-semibold text-center mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <span className="text-white font-bold text-sm">DB</span>
                </div>
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Backend
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Node.js, Python, PostgreSQL, MongoDB, Express.js
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
          </div>
        </div>
      </div>
    </section>
  );
}
