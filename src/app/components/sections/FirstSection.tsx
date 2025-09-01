"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import ProfileCard from "../ui/profileCard";

export default function FirstSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen pt-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-2 grid-rows-1 gap-4 items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I&apos;m <span className="text-blue-500">Eroll Oliver</span>
          </h1>
          <p
            className={`text-xl md:text-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Full Stack Developer & Digital Marketing Expert
          </p>
          <p className="text-justify mt-6 max-w-lg mx-auto text-gray-500">
            
            I am Eroll Oliver, a seasoned digital marketing expert with over 5
            years of proven success in crafting and executing effective
            strategies. As a Digital Strategist, I thrive on creativity and
            innovation, continuously seeking new ways to drive growth and
            deliver exceptional results.
          </p>

          {/* Additional Information */}
          {/* to be added CV, number, email. location (City, Country),  */}
        </div>
        {/* column 2 */}
        <div className="flex justify-center">
          <ProfileCard
            name="Eroll Oliver"
            title="Full Stack Developer"
            handle="erolloliver"
            status="Available for hire"
            contactText="Contact Me"
            avatarUrl="/assets/teloy.jpeg" // This will work if image exists in public/assets/
            showUserInfo={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </section>
  );
}
