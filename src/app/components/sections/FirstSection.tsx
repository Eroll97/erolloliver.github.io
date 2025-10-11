"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Lanyard from "../ui/Lanyard";
import TextType from "../Text-animation/TextType";

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

        <TextType
          text={[
            "Digital Marketing Expert",
            "Video Editor",
            "Graphics Designer",
            "Social Media Manager",
            "Website Developer",
            "UI/UX Designer",
            "Bookkeeping",
            "Go High Level Specialist",
            "WordPress Developer",
            "Freelancer",
            "Father and Husband",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start space-x-3 md:space-x-4 mt-6 md:mt-8">
          <a
            href="https://www.instagram.com/eroll_onnn/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow me on Instagram"
            aria-label="Follow Eroll Oliver on Instagram"
            className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-pink-600 text-pink-400 hover:text-white"
                : "bg-gray-100 hover:bg-pink-600 text-pink-600 hover:text-white"
            }`}
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with me on LinkedIn"
            aria-label="Connect with Eroll Oliver on LinkedIn"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-blue-600 text-blue-400 hover:text-white"
                : "bg-gray-100 hover:bg-blue-600 text-blue-600 hover:text-white"
            }`}
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.facebook.com/eroll.oliver.98"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my Facebook profile"
            aria-label="Visit Eroll Oliver's Facebook profile"
            className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-blue-700 text-blue-400 hover:text-white"
                : "bg-gray-100 hover:bg-blue-700 text-blue-600 hover:text-white"
            }`}
          >
            <Facebook className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1wikQl77-nIu-bgLFePNkNT4jTvslUQ5j/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-4 md:mt-6"
        >
          View CV
        </a>

        <div className="hidden md:block mt-6 md:mt-8 space-y-3 md:space-y-4">
          <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
            <div
              className={`p-1.5 md:p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Phone
                className={`w-3 h-3 md:w-4 md:h-4 ${
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
                className={`text-xs md:text-sm font-medium hover:text-blue-500 transition-colors ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                +63 963 824 9137
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
            <div
              className={`p-1.5 md:p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Mail
                className={`w-3 h-3 md:w-4 md:h-4 ${
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
                className={`text-xs md:text-sm font-medium hover:text-blue-500 transition-colors ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                erolloliver97@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-3">
            <div
              className={`p-1.5 md:p-2 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <MapPin
                className={`w-3 h-3 md:w-4 md:h-4 ${
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
                className={`text-xs md:text-sm font-medium ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Butuan City, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Lanyard Column */}
      <div className="order-2 flex justify-center items-center h-full">
        <div className="w-full max-w-md">
          <Lanyard
            position={[0, 0, 11]}
            gravity={[0, -40, 0]}
            className="overflow-visible z-10"
          />
        </div>
      </div>
    </div>
  );
}
