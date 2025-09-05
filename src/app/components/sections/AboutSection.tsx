"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import { Code, TrendingUp, Cloud, Smartphone, Palette } from "lucide-react";
import PixelTransition from "../ui/PixelTransition";
import ScrambledText from "../Text-animation/ScrambledText";

export default function AboutSection() {
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
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-[15px] relative">
                  <Image
                    src="/assets/bee_farm_photo.jpeg"
                    alt="Eroll Oliver - Full Stack Developer"
                    fill
                    className="object-cover rounded-[13px]"
                    onError={() => {
                      console.log("Image failed to load");
                    }}
                  />
                  {/* Fallback content - only shows if image fails */}
                  <div className="absolute inset-0 flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-[13px] opacity-0 [&.show]:opacity-100">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="font-semibold">Eroll Oliver</p>
                      <p className="text-sm opacity-80">Full Stack Developer</p>
                    </div>
                  </div>
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
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-6xl font-semibold">
                        Handsome Yeah 😉
                      </h3>
                    </div>
                  </div>
                </div>
              }
              gridSize={15}
              animationStepDuration={0.4}
              className="w-full max-w-md mx-auto"
              aspectRatio="100%"
              pixelColor={theme === "dark" ? "#ffffff" : "#ffffff"}
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
              {/* Example usage of ScrambledText component */}
              <ScrambledText
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                <p className="text-base leading-relaxed mb-4">
                  As a seasoned digital marketing expert with over 5 years of
                  proven success, I&apos;ve evolved into a Full Stack Developer
                  who bridges the gap between technical excellence and business
                  strategy.
                </p>
               
              </ScrambledText>

                <ScrambledText
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
          
                <p className="text-base leading-relaxed">
                  I thrive on creativity and innovation, continuously seeking
                  new ways to drive growth and deliver exceptional results
                  through cutting-edge web technologies and data-driven
                  marketing approaches.
                </p>
              </ScrambledText>
            </div>
          </div>
        </div>

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
                Node.js, Python, PostgreSQL
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
