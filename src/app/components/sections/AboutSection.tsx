"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import {
  Code,
  Palette,
  TrendingUp,
  Award,
  Users,
  Calendar,
  Coffee,
  Music,
  Mountain,
  Camera,
  BookOpen,
  BrainCog,
  Brain,
} from "lucide-react";
import PixelTransition from "../ui/PixelTransition";

export default function AboutSection() {
  const { theme } = useTheme();

  const funFacts = [
    {
      icon: Coffee,
      fact: "I've consumed over 1,000 cups of coffee while coding",
      color: "text-amber-500",
    },
    {
      icon: Music,
      fact: "I code better with lo-fi hip-hop playing in the background",
      color: "text-purple-500",
    },
    {
      icon: Mountain,
      fact: "I've hiked 15+ mountains and find my best ideas on trails",
      color: "text-green-500",
    },
    {
      icon: Camera,
      fact: "Photography taught me to see the world in pixels and perspectives",
      color: "text-blue-500",
    },
    {
      icon: BookOpen,
      fact: "I read one tech book and one fiction book every month",
      color: "text-pink-500",
    },
    {
      icon: BrainCog,
      fact: "I think algorithms are like puzzles waiting to be solved",
      color: "text-pink-500",
    },
  ];

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Opening */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <h3
            className={`text-2xl font-semibold mb-6 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Building Digital Solutions That Matter
          </h3>
          <p
            className={`text-lg leading-relaxed max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a passionate Full Stack Developer who believes technology should
            solve real problems and create meaningful experiences. Every line of
            code I write is driven by curiosity, creativity, and the desire to
            make the digital world a little bit better.
          </p>
        </div>

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
                  className={`w-full h-full flex items-center justify-center p-6 rounded-[15px] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                      : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <div className="text-2xl font-bold">5+</div>
                        <div className="text-sm opacity-75">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <Award className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <div className="text-2xl font-bold">100+</div>
                        <div className="text-sm opacity-75">
                          Projects Delivered
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Code className="w-5 h-5 text-blue-400" />
                        <span className="text-sm">Full Stack Architect</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Growth Strategist</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm">Team Builder</span>
                      </div>
                    </div>
                  </div>
                </div>
              }
              gridSize={15}
              animationStepDuration={0.4}
              className="w-full max-w-md mx-auto"
              aspectRatio="100%"
              pixelColor={theme === "dark" ? "#ffffff" : "#6b7280"}
            />
          </div>

          {/* Story & Expertise section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* The Story */}
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
                What started as curiosity about "how websites work" transformed
                into a 5+ year journey of building digital experiences. My path
                began in digital marketing, where I learned to understand user
                behavior and business needs. This foundation became my secret
                weapon when I transitioned into development.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                The turning point came when I realized I could bridge the gap
                between beautiful code and business impact. Now, I don't just
                build applications—I craft solutions that drive growth, enhance
                user experiences, and solve real problems.
              </p>
            </div>

            {/* The Expertise */}
            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                What I Bring to the Table
              </h3>
              <p
                className={`text-base leading-relaxed mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I specialize in full-stack development with React, Next.js, and
                Node.js, but my superpower lies in understanding the business
                side of technology. I help startups and established companies
                build scalable web applications that not only work flawlessly
                but also drive measurable results.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
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
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="font-semibold">Strategy</div>
                      <div className="text-sm opacity-75">Growth Focused</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The CTA */}
        <div
          className={`text-center p-8 rounded-xl mb-16 ${
            theme === "dark"
              ? "bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20"
              : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Build Something Amazing?
          </h3>
          <p
            className={`text-lg mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Whether you have a project in mind, need technical consultation, or
            just want to chat about the latest in web development, I'd love to
            connect. Let's turn your ideas into impactful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "border border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
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
                <Palette className="w-8 h-8 text-blue-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Design Spotter
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                React, Next.js, TypeScript, Tailwind CSS, Vue.js, Three.js
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
                <Brain className="w-8 h-8 text-green-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  High Perception
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
                <Users className="w-8 h-8 text-purple-500" />
                <h4
                  className={`text-xl font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Enthusiast in Collaboration
                </h4>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                SEO, Analytics, Performance Optimization, User Experience,
                Growth Marketing
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h3
            className={`text-2xl font-semibold text-center mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent
                      className={`w-8 h-8 ${item.color} flex-shrink-0 mt-1`}
                    />
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.fact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
