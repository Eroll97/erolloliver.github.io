"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";

interface Experience {
  title: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Video Editing 2020 - 2024",
    period: "2020-2024",
    description:
      "Recognized as the top-performing employee for six consecutive months, consistently surpassing performance expectations and making outstanding contributions to team success. Demonstrated excellence in managing a wide range of administrative responsibilities, including coordinating schedules, maintaining detailed records, and performing complex data entry with accuracy. Effortlessly handled diverse tasks, showcasing a high level of organizational skill and dedication that significantly enhanced overall team efficiency and effectiveness.",
  },
  {
    title: "Graphic Design Experience 2019-2024",
    period: "2019-2024",
    description:
      "Designed and produced visually compelling content for TikTok and YouTube channels, markedly enhancing brand visibility and audience engagement. Created dynamic graphics, striking thumbnails, and promotional materials that captivated viewers and boosted interaction across social media and video platforms. Developed a wide array of portfolios, branding assets, and web visuals, contributing to numerous digital projects and enriching user experiences. Applied creative design skills to deliver high-impact visuals that elevate brand presence and effectively communicate key messages.",
  },
  {
    title: "Web Development/Design 2019-2024",
    period: "2019-2024",
    description:
      "Developed Stoneysystems.io utilizing the GoHighLevel CRM platform, showcasing advanced capabilities in customer relationship management. Designed and launched a highly functional WooCommerce website using WordPress, enhancing e-commerce capabilities and user experience. Spearheaded the creation of numerous portfolio websites, web designs, and branding and web platforms, demonstrating a strong expertise in creating visually appealing and highly functional sites. Successfully built and optimized multiple portfolio and agency websites, consistently delivering high-quality, tailored solutions that meet client needs and drive business growth.",
  },
  {
    title: "SEO Experience 2023-2024",
    period: "2023-2024",
    description:
      "Significantly improved website visibility and search rankings by applying targeted SEO strategies and optimizing keywords. Performed detailed SEO audits to evaluate current site performance and pinpoint areas for enhancement, implementing both on-page and off-page SEO improvements. Developed and executed robust content strategies, fine-tuning web pages and content to maximize organic traffic, thereby increasing user engagement and achieving higher positions in search engine results.",
  },
  {
    title: "Bookkeeping K&S Mobile Tax Mobile Services 2020-2024",
    period: "2020-2024",
    description:
      "Will handle a full spectrum of Financial data management in QuickBooks, including crafting and sending detailed invoices, resolving issues with duplicate entries to maintain data integrity, and processing vendor payments. Responsible with preparing and updating balance sheets, accurately categorizing transactions across precise financial reporting, and reconciling bank statements with internal records to verify consistency. Additionally, will perform thorough data entry to support comprehensive and reliable financial documentation.",
  },
  {
    title: "Copywriting Experience 2022-2024",
    period: "2022-2024",
    description:
      "Crafted dynamic and persuasive copy for TikTok and YouTube channels, leading to substantial increases in audience engagement and enhanced brand visibility. Developed a wide range of marketing materials, including compelling advertisements, engaging website content, and engaging social media posts, tailored to resonate with target audiences. Collaborated closely with marketing and creative teams planning to align brand messages with audience needs and preferences, driving higher conversion rates and achieving measurable marketing objectives.",
  },
];

export default function WorkExperience() {
  const { theme } = useTheme();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="work-experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              WORK EXPERIENCE
            </span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`h-full p-6 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-cyan-500"
                    : "bg-gray-50 border-gray-200 hover:border-cyan-500 hover:shadow-xl"
                }`}
              >
                {/* Card Header */}
                <div
                  className={`pb-4 mb-4 border-b ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {exp.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div
                  className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <p>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
