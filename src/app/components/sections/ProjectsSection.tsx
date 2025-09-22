"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  Filter,
  Share2,
  TrendingUp,
  Video,
  Users,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Campaign - Brand Awareness",
    description:
      "Strategic social media campaign for brand visibility and engagement",
    longDescription:
      "Comprehensive social media marketing campaign designed to increase brand awareness, drive engagement, and build a strong online community. Includes content strategy, visual design, and performance analytics.",
    technologies: [
      "Facebook Ads",
      "Instagram",
      "Content Strategy",
      "Analytics",
      "Canva",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp063om_p0.webp",
    demoUrl: "https://facebook.com/campaign",
    status: "completed",
  },
  {
    id: 2,
    title: "E-commerce Product Promotion",
    description:
      "Product launch campaign with targeted social media advertising",
    longDescription:
      "Multi-platform social media campaign for e-commerce product launch, featuring targeted advertising, influencer partnerships, and conversion-optimized content across all major social platforms.",
    technologies: [
      "Facebook Ads",
      "Instagram Shopping",
      "TikTok Ads",
      "Google Analytics",
      "Hootsuite",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp0k2rmbo0.webp",
    demoUrl: "https://instagram.com/campaign",
    status: "completed",
  },
  {
    id: 3,
    title: "Restaurant Social Media Management",
    description: "Complete social media management for restaurant chain",
    longDescription:
      "Full-service social media management including daily content creation, community management, promotional campaigns, and customer engagement strategies for a growing restaurant chain.",
    technologies: [
      "Instagram",
      "Facebook",
      "Content Creation",
      "Community Management",
      "Scheduling Tools",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp1gvij9vn.webp",
    demoUrl: "https://instagram.com/restaurant",
    status: "completed",
  },
  {
    id: 4,
    title: "Fitness Brand Content Strategy",
    description: "Health and fitness brand social media content strategy",
    longDescription:
      "Developed comprehensive content strategy for fitness brand including workout videos, nutrition tips, success stories, and community building initiatives across multiple social platforms.",
    technologies: [
      "Video Content",
      "Instagram Reels",
      "YouTube",
      "Content Planning",
      "Engagement Strategy",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp49azcblo.webp",
    demoUrl: "https://youtube.com/fitness",
    status: "completed",
  },
  {
    id: 5,
    title: "Tech Startup Launch Campaign",
    description: "Social media launch strategy for tech startup",
    longDescription:
      "Strategic social media campaign for tech startup launch, including thought leadership content, product demonstrations, investor outreach, and community building across LinkedIn, Twitter, and Instagram.",
    technologies: [
      "LinkedIn Ads",
      "Twitter",
      "Content Marketing",
      "Lead Generation",
      "Analytics",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp4ut17_2n.webp",
    demoUrl: "https://linkedin.com/company/startup",
    status: "completed",
  },
  {
    id: 6,
    title: "Fashion Brand Visual Campaign",
    description: "Visual storytelling campaign for fashion brand",
    longDescription:
      "Creative visual campaign for fashion brand featuring lifestyle photography, product showcases, behind-the-scenes content, and user-generated content campaigns across Instagram and Pinterest.",
    technologies: [
      "Photography",
      "Instagram",
      "Pinterest",
      "Visual Design",
      "UGC Strategy",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp92y9b9ir.webp",
    demoUrl: "https://pinterest.com/fashion",
    status: "completed",
  },
  {
    id: 7,
    title: "Real Estate Social Marketing",
    description: "Real estate social media marketing and lead generation",
    longDescription:
      "Comprehensive social media strategy for real estate agency including property showcases, virtual tours, client testimonials, and targeted advertising for lead generation and brand building.",
    technologies: [
      "Facebook Lead Ads",
      "Instagram Stories",
      "Virtual Tours",
      "CRM Integration",
      "Local SEO",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmp9wexqk65.webp",
    demoUrl: "https://facebook.com/realestate",
    status: "completed",
  },
  {
    id: 8,
    title: "Beauty Brand Influencer Campaign",
    description: "Influencer marketing campaign for beauty products",
    longDescription:
      "Strategic influencer marketing campaign for beauty brand featuring micro and macro influencers, product reviews, tutorials, and user-generated content to drive brand awareness and sales.",
    technologies: [
      "Influencer Marketing",
      "TikTok",
      "Instagram",
      "Campaign Management",
      "ROI Tracking",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpalw0_cpm.webp",
    demoUrl: "https://tiktok.com/beauty",
    status: "completed",
  },
  {
    id: 9,
    title: "Non-Profit Awareness Campaign",
    description: "Social media campaign for non-profit organization",
    longDescription:
      "Awareness and fundraising campaign for non-profit organization including storytelling content, donation drives, volunteer recruitment, and community engagement across multiple platforms.",
    technologies: [
      "Facebook Fundraisers",
      "Instagram Stories",
      "Email Marketing",
      "Volunteer Management",
      "Impact Metrics",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpau8nn21z.webp",
    demoUrl: "https://facebook.com/nonprofit",
    status: "completed",
  },
  {
    id: 10,
    title: "Event Promotion Campaign",
    description: "Social media promotion for major events and conferences",
    longDescription:
      "Comprehensive event promotion strategy including pre-event buzz, live coverage, speaker highlights, attendee engagement, and post-event follow-up across all major social platforms.",
    technologies: [
      "Event Marketing",
      "Live Streaming",
      "Facebook Events",
      "Twitter",
      "LinkedIn",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpduhurj4p.webp",
    demoUrl: "https://facebook.com/events",
    status: "completed",
  },
  {
    id: 11,
    title: "Travel Agency Social Strategy",
    description: "Travel and tourism social media marketing strategy",
    longDescription:
      "Creative travel marketing campaign featuring destination highlights, travel tips, customer experiences, and booking promotions designed to inspire wanderlust and drive bookings.",
    technologies: [
      "Instagram",
      "Pinterest",
      "Travel Content",
      "Booking Integration",
      "Geo-targeting",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmphx2kylot.webp",
    demoUrl: "https://instagram.com/travel",
    status: "completed",
  },
  {
    id: 12,
    title: "Food & Beverage Campaign",
    description: "Food and beverage brand social media campaign",
    longDescription:
      "Appetizing social media campaign for food and beverage brand including recipe content, behind-the-scenes footage, user-generated content, and seasonal promotional campaigns.",
    technologies: [
      "Food Photography",
      "Recipe Content",
      "Instagram",
      "TikTok",
      "Seasonal Campaigns",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpjpf5s6sk.webp",
    demoUrl: "https://instagram.com/food",
    status: "completed",
  },
  {
    id: 13,
    title: "Educational Platform Promotion",
    description: "Social media strategy for online education platform",
    longDescription:
      "Educational content marketing strategy including course highlights, student success stories, instructor spotlights, and lead generation campaigns to drive enrollment and engagement.",
    technologies: [
      "Educational Content",
      "LinkedIn",
      "YouTube",
      "Lead Generation",
      "Student Engagement",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmplqxeddms.webp",
    demoUrl: "https://linkedin.com/education",
    status: "completed",
  },
  {
    id: 14,
    title: "Healthcare Social Media",
    description: "Healthcare provider social media management",
    longDescription:
      "Professional healthcare social media strategy focusing on patient education, health tips, service highlights, and community health initiatives while maintaining compliance and professionalism.",
    technologies: [
      "Healthcare Marketing",
      "Educational Content",
      "Compliance",
      "Facebook",
      "LinkedIn",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpos5kwl69.webp",
    demoUrl: "https://facebook.com/healthcare",
    status: "completed",
  },
  {
    id: 15,
    title: "Automotive Brand Campaign",
    description: "Automotive industry social media marketing campaign",
    longDescription:
      "Dynamic automotive marketing campaign featuring vehicle showcases, test drive promotions, customer testimonials, and seasonal sales campaigns across multiple social media platforms.",
    technologies: [
      "Automotive Marketing",
      "Video Content",
      "Facebook Ads",
      "Instagram",
      "Lead Generation",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpu4p19odx.webp",
    demoUrl: "https://facebook.com/automotive",
    status: "completed",
  },
  {
    id: 16,
    title: "Corporate B2B Strategy",
    description: "B2B corporate social media strategy and implementation",
    longDescription:
      "Strategic B2B social media approach for corporate clients including thought leadership content, industry insights, networking strategies, and lead generation campaigns on professional platforms.",
    technologies: [
      "B2B Marketing",
      "LinkedIn",
      "Thought Leadership",
      "Lead Generation",
      "Industry Content",
    ],
    category: "social-media",
    image: "/assets/sample-social-media/tmpw2smznxm.webp",
    demoUrl: "https://linkedin.com/company/corporate",
    status: "completed",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: Globe },
  { id: "social-media", name: "Social Media", icon: Share2 },
  { id: "campaigns", name: "Campaigns", icon: TrendingUp },
  { id: "content", name: "Content Creation", icon: Video },
  { id: "strategy", name: "Strategy", icon: Users },
];

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return theme === "dark" ? "text-green-400" : "text-green-600";
      case "in-progress":
        return theme === "dark" ? "text-yellow-400" : "text-yellow-600";
      case "planned":
        return theme === "dark" ? "text-blue-400" : "text-blue-600";
      default:
        return theme === "dark" ? "text-gray-400" : "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Social Media Portfolio
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of successful social media campaigns, content strategies,
            and digital marketing initiatives across various industries. Each
            project demonstrates creative storytelling, strategic thinking, and
            measurable results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? theme === "dark"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
                {activeCategory === category.id && (
                  <Filter className="w-4 h-4" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-2xl"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )} ${theme === "dark" ? "bg-gray-900/80" : "bg-white/80"}`}
                >
                  {getStatusText(project.status)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-md ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      +{project.technologies.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex space-x-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`text-2xl ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    ×
                  </button>
                </div>

                {/* Project Image */}
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p
                  className={`text-lg mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4
                    className={`text-lg font-semibold mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Tools & Platforms Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-lg ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Campaign</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
