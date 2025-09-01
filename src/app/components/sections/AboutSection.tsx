"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl text-center font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg text-justify  leading-relaxed mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am a passionate Full Stack Developer with expertise in building
          dynamic web applications. With over 3 years of experience in crafting
          digital solutions, I specialize in modern web technologies and digital
          marketing strategies that drive results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Frontend
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>

          <div
            className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Backend
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Node.js, Python, PostgreSQL, MongoDB
            </p>
          </div>

          <div
            className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-100 border border-gray-200"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Marketing
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              SEO, Social Media, Analytics, Strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
