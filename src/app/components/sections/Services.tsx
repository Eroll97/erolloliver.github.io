"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Image from "next/image";

export default function Services() {
  const { theme } = useTheme();

  const services = [
    {
      title: "WEB DEVELOPMENT & DESIGN",
      description:
        "Creating stunning, responsive websites with cutting-edge design and flawless functionality using WordPress and modern web technologies.",
      image:
        "/assets/service-section/1961186a-8c14-4c83-92d0-0b04a40cb125.jpeg",
      category: "Development",
    },
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description:
        "Comprehensive social media strategies to boost your brand presence across all major platforms and engage your target audience effectively.",
      image:
        "/assets/service-section/1a99d7d8-3b0f-457a-8894-43f8564d1f80.jpeg",
      category: "Marketing",
    },
    {
      title: "VIDEO EDITING",
      description:
        "Professional video editing services for content creators, businesses, and digital marketing campaigns with cinematic quality results.",
      image:
        "/assets/service-section/2e75cdf4-5efa-46d4-86b1-c4538d759cb8.jpeg",
      category: "Creative",
    },
    {
      title: "GRAPHIC DESIGN",
      description:
        "Creative visual solutions including logos, branding materials, digital graphics, and promotional content that captivate your audience.",
      image:
        "/assets/service-section/321fe485-305e-41de-b149-12160adca83c.jpeg",
      category: "Design",
    },
    {
      title: "GHL SPECIALIZATION",
      description:
        "Expert GoHighLevel implementation and optimization for complete business automation, CRM management, and marketing workflows.",
      image:
        "/assets/service-section/6747beba-db49-4be7-8480-a8cd9e55cfc4.jpeg",
      category: "Automation",
    },
    {
      title: "SEO",
      description:
        "Strategic search engine optimization to improve your website's visibility, drive organic traffic, and achieve higher search rankings.",
      image:
        "/assets/service-section/75b0e32d-4bbe-4a9a-815c-544ba05ae515.jpeg",
      category: "Optimization",
    },
    {
      title: "BOOKKEEPING",
      description:
        "Accurate financial record management, expense tracking, and comprehensive bookkeeping services to keep your business finances organized.",
      image:
        "/assets/service-section/c3c32979-e6ef-485e-8f17-ccad40ae8a87.jpeg",
      category: "Finance",
    },
    {
      title: "COPYWRITING",
      description:
        "Compelling, persuasive copy that converts visitors into customers through strategic messaging and engaging content creation.",
      image:
        "/assets/service-section/caead848-7ad7-44e8-a992-10203e2dff90.jpeg",
      category: "Content",
    },
    {
      title: "VIRTUAL ASSISTANT",
      description:
        "Comprehensive virtual assistance including administrative tasks, project management, and business support to streamline your operations.",
      image:
        "/assets/service-section/e8854298-0f27-4b47-bba2-960e29c6f31e.jpeg",
      category: "Support",
    },
  ];

  return (
    <section
      className={` py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="services"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Services I Offer
          </h2>
          <p
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My innovative Digital Strategist services leverage advanced
            technology to craft extraordinary, boundary-pushing environments
            that redefine the conventional digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-blue-700 ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:border-blue-700"
                  : "bg-white border border-gray-200 hover:border-blue-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-cyan-500 text-white rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className={`text-sm font-bold uppercase tracking-wider mb-3 text-cyan-400`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
