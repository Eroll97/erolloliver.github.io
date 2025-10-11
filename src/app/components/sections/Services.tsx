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
      image: "/assets/service-section/web-dev.jpeg",
      category: "Development",
    },
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description:
        "Comprehensive social media strategies to boost your brand presence across all major platforms and engage your target audience effectively.",
      image: "/assets/service-section/social-media-marketing.jpeg",
      category: "Marketing",
    },
    {
      title: "VIDEO EDITING",
      description:
        "Professional video editing services for content creators, businesses, and digital marketing campaigns with cinematic quality results.",
      image: "/assets/service-section/video-editing.jpeg",
      category: "Creative",
    },
    {
      title: "GRAPHIC DESIGN",
      description:
        "Creative visual solutions including logos, branding materials, digital graphics, and promotional content that captivate your audience.",
      image: "/assets/service-section/graphic-designer.jpeg",
      category: "Design",
    },
    {
      title: "GHL SPECIALIZATION",
      description:
        "Expert GoHighLevel implementation and optimization for complete business automation, CRM management, and marketing workflows.",
      image: "/assets/service-section/go-high-level.jpeg",
      category: "Automation",
    },
    {
      title: "SEO",
      description:
        "Strategic search engine optimization to improve your website's visibility, drive organic traffic, and achieve higher search rankings.",
      image: "/assets/service-section/seo.jpeg",
      category: "Optimization",
    },
    {
      title: "BOOKKEEPING",
      description:
        "Accurate financial record management, expense tracking, and comprehensive bookkeeping services to keep your business finances organized.",
      image: "/assets/service-section/bookkeeping.jpeg",
      category: "Finance",
    },
    {
      title: "COPYWRITING",
      description:
        "Compelling, persuasive copy that converts visitors into customers through strategic messaging and engaging content creation.",
      image: "/assets/service-section/copy-writing.jpeg",
      category: "Content",
    },
    {
      title: "VIRTUAL ASSISTANT",
      description:
        "Comprehensive virtual assistance including administrative tasks, project management, and business support to streamline your operations.",
      image: "/assets/service-section/virtual-assistant-service.jpeg",
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
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Services I Offer
          </h2>
          <p
            className={`text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My innovative Digital Strategist services leverage advanced
            technology to craft extraordinary, boundary-pushing environments
            that redefine the conventional digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
              <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2 py-1 text-xs font-semibold bg-cyan-500 text-white rounded-full sm:px-3">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Title */}
                <h3
                  className={`text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3 text-cyan-400`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
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
