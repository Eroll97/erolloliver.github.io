"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function WorldwideExperience() {
  const { theme } = useTheme();
  const [isWorldVisible, setIsWorldVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    feedback: 0,
  });
  const worldRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      className={`p-5 -mt-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mt-32 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Title Section - Always visible */}
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Worldwide Experience
              </span>
            </h2>
            <p
              className={`text-base md:text-lg max-w-4xl text-nowrap mx-auto italic leading-relaxed ${
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
            className={`relative w-full h-full md:h-[700px] lg:h-[800px] overflow-hidden transition-all duration-1000 ${
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
    </section>
  );
}
