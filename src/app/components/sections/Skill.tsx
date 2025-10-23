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
  const [isWorldVisible, setIsWorldVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<number[]>([]);
  const [videoError, setVideoError] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    feedback: 0,
  });
  const progressRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Worldwide section observer with counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isWorldVisible) {
          setIsWorldVisible(true);

          // Animate counters
          const duration = 2000; // 2 seconds
          const steps = 60;
          const interval = duration / steps;

          const targets = {
            projects: 100,
            clients: 20,
            years: 5,
            feedback: 100,
          };

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;

            setCounters({
              projects: Math.floor(targets.projects * progress),
              clients: Math.floor(targets.clients * progress),
              years: Math.floor(targets.years * progress),
              feedback: Math.floor(targets.feedback * progress),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounters(targets);
            }
          }, interval);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (worldRef.current) {
      observer.observe(worldRef.current);
    }

    return () => observer.disconnect();
  }, [isWorldVisible]);

  // Force video to play when visible
  useEffect(() => {
    if (isWorldVisible && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [isWorldVisible]);

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Skills section */}
        <div className="mb-16">
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
        <div ref={progressRef} className="mt-20">
          <div className="text-center mb-12">
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

        {/* Worldwide Experience Section */}
        <div className="mt-32">
          {/* Title Section - Always visible */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Worldwide Experience
              </span>
            </h2>
            <p
              className={`text-base md:text-lg max-w-4xl mx-auto italic leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              &ldquo;I&rsquo;m Committed To Diving Deep Into My Clients And
              Users&rsquo; Expectations To Truly Grasp What They Need And
              Desire.&rdquo;
            </p>
          </div>

          {/* Video Background Section with Stats */}
          <div
            ref={worldRef}
            className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden transition-all duration-1000 ${
              isWorldVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Video Background */}
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                onError={() => {
                  console.error("Video failed to load");
                  setVideoError(true);
                }}
                onLoadedData={() => {
                  console.log("Video loaded successfully");
                }}
              >
                <source src="/assets/worldwide.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900" />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40" />

            {/* Stats Grid */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl">
                {/* Stat 1 - Successful Projects */}
                <div
                  className={`text-center transform transition-all duration-700 delay-100 ${
                    isWorldVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-10 scale-90"
                  } hover:scale-110 transition-transform cursor-default`}
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {counters.projects}+
                  </div>
                  <div className="text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide">
                    Successful Projects
                  </div>
                </div>

                {/* Stat 2 - Trusted Clients */}
                <div
                  className={`text-center transform transition-all duration-700 delay-300 ${
                    isWorldVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-90"
                  } hover:scale-110 transition-transform cursor-default`}
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {counters.clients}+
                  </div>
                  <div className="text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide">
                    Trusted Clients
                  </div>
                </div>

                {/* Stat 3 - Years of Experience */}
                <div
                  className={`text-center transform transition-all duration-700 delay-500 ${
                    isWorldVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-10 scale-90"
                  } hover:scale-110 transition-transform cursor-default`}
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {counters.years}+
                  </div>
                  <div className="text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide">
                    Years of Experience
                  </div>
                </div>

                {/* Stat 4 - Positive Feedbacks */}
                <div
                  className={`text-center transform transition-all duration-700 delay-700 ${
                    isWorldVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-90"
                  } hover:scale-110 transition-transform cursor-default`}
                >
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {counters.feedback}%
                  </div>
                  <div className="text-sm md:text-base lg:text-lg font-semibold text-white tracking-wide">
                    Positive Feedbacks
                  </div>
                </div>
              </div>
            </div>
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
