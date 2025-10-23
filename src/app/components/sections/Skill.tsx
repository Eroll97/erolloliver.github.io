"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import { Code, TrendingUp, Cloud, Smartphone, Palette } from "lucide-react";

interface SkillProgress {
  name: string;
  percentage: number;
  color: string;
}

const skillsProgress: SkillProgress[] = [
  {
    name: "Website Developer WordPress/GoHighLevel",
    percentage: 92,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Website Design",
    percentage: 95,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Project Management",
    percentage: 97,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Graphic Designer",
    percentage: 93,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Video Editing",
    percentage: 97,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Bookkeeping",
    percentage: 89,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Search Engine Optimization",
    percentage: 88,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
];

export default function Skill() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate each bar with a delay
          skillsProgress.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBars((prev) => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Skills section */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <h3
              className={`text-4xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                SKILLED
              </span>{" "}
              IN
            </h3>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </div>
          </div>
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

        {/* Skills Progress Section */}
        <div ref={progressRef} className="mt-12">
          <div className="text-center mb-10">
            <h2
              className={`text-4xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              MY{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                SKILLS
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            </div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Proficiency levels across key professional competencies
            </p>
          </div>

          {/* Progress Bars */}
          <div className="max-w-4xl mx-auto space-y-6">
            {skillsProgress.map((skill, index) => (
              <div key={index} className="relative">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`font-semibold text-lg uppercase tracking-wide ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {skill.name}
                  </h3>
                  <span
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  >
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div
                  className={`w-full h-4 rounded-full overflow-hidden ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                  }`}
                >
                  {/* Progress Bar Fill */}
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-[1500ms] ease-out transform relative overflow-hidden`}
                    style={{
                      width: animatedBars.includes(index)
                        ? `${skill.percentage}%`
                        : "0%",
                    }}
                  >
                    {/* Shine effect - Fixed the animation conflict */}
                    {animatedBars.includes(index) && (
                      <div
                        className="absolute top-0 left-0 h-full w-8 bg-white opacity-30 transform skew-x-12"
                        style={{
                          animation: `shine 2s ease-in-out infinite ${
                            index * 0.3
                          }s`,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(12deg);
          }
          100% {
            transform: translateX(300px) skewX(12deg);
          }
        }
      `}</style>
    </section>
  );
}
