"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Mail, MapPin, Phone } from "lucide-react";
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
      <div className="pl-16  pt-16 w-full text-center lg:text-left mt-20">
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
        <p className="text-justify max-w-lg mx-auto lg:mx-0 text-gray-500">
          I am Eroll Oliver, a seasoned digital marketing expert with over 5
          years of proven success in crafting and executing effective
          strategies. As a Digital Strategist, I thrive on creativity and
          innovation, continuously seeking new ways to drive growth and deliver
          exceptional results.
        </p>

        <a
          href="https://drive.google.com/file/d/1wikQl77-nIu-bgLFePNkNT4jTvslUQ5j/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-6"
        >
          View CV
        </a>

        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Mail
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Email
              </p>
              <a
                href="mailto:erolloliver97@gmail.com"
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                erolloliver97@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <MapPin
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-green-400" : "text-green-600"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Location
              </p>
              <p
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Butuan City, Agusan del Norte, Philippines
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Phone
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                }`}
              />
            </div>
            <div>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Phone
              </p>
              <a
                href="tel:+639638249137"
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                +63 963 824 9137
              </a>
            </div>
          </div>
        </div>
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
