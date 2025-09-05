"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Lanyard from "./../ui/Lanyard";

export default function FirstSection() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
          {/* Text Column */}
          <div className="text-center lg:text-left">
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I&apos;m <span className="text-blue-500">Eroll Oliver</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Full Stack Developer & Digital Marketing Expert
            </p>
            <p
              className={`text-justify mt-6 max-w-lg mx-auto lg:mx-0 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              I am Eroll Oliver, a seasoned digital marketing expert with over 5
              years of proven success in crafting and executing effective
              strategies. As a Digital Strategist, I thrive on creativity and
              innovation, continuously seeking new ways to drive growth and deliver
              exceptional results.
            </p>
          </div>

          {/* 3D Lanyard Column */}
          <div className="flex justify-center lg:justify-end">
            <Lanyard
              position={[0, 0, 10]}
              gravity={[0, -40, 0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
