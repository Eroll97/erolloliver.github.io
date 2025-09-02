"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Lanyard from "../ui/Lanyard";

export default function FirstSection() {
  const { theme } = useTheme();

  return (
    <div
      className={` pt-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } overflow-visible z-0 grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-16 min-h-auto
      `}
    >
      {/* Text Column */}
      <div className="pl-16  pt-16 w-full text-center lg:text-left mt-40">
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
        <p className="text-justify mt-6 max-w-lg mx-auto lg:mx-0 text-gray-500">
          I am Eroll Oliver, a seasoned digital marketing expert with over 5
          years of proven success in crafting and executing effective
          strategies. As a Digital Strategist, I thrive on creativity and
          innovation, continuously seeking new ways to drive growth and deliver
          exceptional results.
        </p>
      </div>

      {/* 3D Lanyard Column */}
      <Lanyard
        position={[0, 0, 11]}
        gravity={[0, -40, 0]}
        className="overflow-visible z-10"
      />
    </div>
  );
}
