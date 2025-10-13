"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  Lock,
  AlertCircle,
  XCircle,
} from "lucide-react";

interface WebProject {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  images: string[];
  websiteUrl?: string;
  category: string;
  status: "live" | "development" | "completed" | "unavailable";
}

const webProjects: WebProject[] = [
  {
    id: 1,
    name: "EarthBrew",
    description:
      "Sustainable brewing company website with eco-friendly design and modern user experience",
    technologies: ["canva", "Responsive Design"],
    images: [
      "/assets/web-images/earthbrew.webp",
      "/assets/web-images/earthbrew2.webp",
      "/assets/web-images/earthbrew3.webp",
    ],
    websiteUrl:
      "https://www.canva.com/design/DAGO27LNgo4/WIumcVIiPm0tggFjaeQw8w/edit",
    category: "Business",
    status: "live",
  },
  {
    id: 2,
    name: "Flow Rentals",
    description:
      "Property rental management platform with booking system and customer portal",
    technologies: ["Go High Level", "Funnel", "Frontend", "Stripe API"],
    images: [
      "/assets/web-images/flow_rentals.webp",
      "/assets/web-images/flow_rentals2.webp",
      "/assets/web-images/flow_rentals3.webp",
    ],
    websiteUrl: "https://flowrentalsva.com/",
    category: "Business",
    status: "live",
  },
  {
    id: 3,
    name: "Pontiac",
    description:
      "Automotive dealership website with inventory management and customer service features. Company has closed operations.",
    technologies: ["WordPress", "Integrations", "Frontend", "Custom Plugins"],
    images: [
      "/assets/web-images/pontiac.webp",
      "/assets/web-images/pontiac1.webp",
      "/assets/web-images/pontiac2.webp",
    ],
    websiteUrl: undefined, // No URL since company is closed
    category: "Automotive",
    status: "unavailable",
  },
  {
    id: 4,
    name: "SmartWeb",
    description:
      "Smart solutions web platform with integrated IoT dashboard and analytics",
    technologies: ["Vanilla JS", "HTML5", "CSS3", "Responsive Design"],
    images: [
      "/assets/web-images/smartweb.webp",
      "/assets/web-images/smartweb2.webp",
      "/assets/web-images/smartweb3.webp",
    ],
    websiteUrl: "https://smartwebusa.com/",
    category: "Technology",
    status: "development",
  },
  {
    id: 5,
    name: "Smoke Vibes",
    description:
      "Lifestyle brand website with e-commerce integration and social media features",
    technologies: ["Shopify", "Liquid", "JavaScript", "Custom Themes"],
    images: [
      "/assets/web-images/smoke_vibes.webp",
      "/assets/web-images/smoke _vibes2.webp",
      "/assets/web-images/smoke_vibes3.webp",
    ],
    websiteUrl: "https://www.smokevibes.com/",
    category: "Lifestyle",
    status: "live",
  },
  {
    id: 6,
    name: "Stone System",
    description:
      "Construction company website with project portfolio and contact management",
    technologies: ["Go High Level", "Funnel", "SEO"],
    images: [
      "/assets/web-images/stone_system.webp",
      "/assets/web-images/stone_system2.webp",
      "/assets/web-images/stone_system3.webp",
    ],
    websiteUrl: "https://stonesystems.io/",
    category: "Construction",
    status: "live",
  },
  {
    id: 7,
    name: "Swanson",
    description:
      "Professional services website with appointment booking and client portal",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    images: [
      "/assets/web-images/swanson.JPG",
      "/assets/web-images/swanson2.JPG",
      "/assets/web-images/swanson3.JPG",
    ],
    websiteUrl: "https://swansonreservecapital.com/",
    category: "Professional Services",
    status: "completed",
  },
  {
    id: 8,
    name: "Video Funeral",
    description:
      "Memorial services website with video streaming and tribute features",
    technologies: [
      "WordPress",
      "Video.js",
      "Custom Post Types",
      "Html5",
      "CSS3",
      "JavaScript",
    ],
    images: [
      "/assets/web-images/video_funeral.webp",
      "/assets/web-images/video_funeral2.webp",
      "/assets/web-images/vide_funeral3.webp",
    ],
    websiteUrl: "https://funeralvideomaker.com/",
    category: "Memorial Services",
    status: "live",
  },
  {
    id: 9,
    name: "Xtreme",
    description:
      "Extreme sports and adventure website with booking system and event management",
    technologies: ["Go High Level", "Funnel", "Frontend", "Payment Gateway"],
    images: [
      "/assets/web-images/Xtreme.webp",
      "/assets/web-images/Xtreme2.webp",
      "/assets/web-images/Xtreme3.webp",
    ],
    websiteUrl: "https://xtreme-coatings.com/",
    category: "Sports & Recreation",
    status: "development",
  },
  {
    id: 10,
    name: "Figma Redesign in Ibanez Project",
    description:
      "View famous guitar artist and musician, and can buy guitars online.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    images: [
      "/assets/web-images/figma-redesign-sample.png",
      "/assets/web-images/figma-redesign-sample2.png",
      "/assets/web-images/figma-redesign-sample4.png",
      "/assets/web-images/figma-redesign-sample3.png",
    ],
    websiteUrl: "https://www.ibanez.com/asia/",
    category: "Business",
    status: "live",
  },
];

export default function WebImagesSection() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(webProjects.map((project) => project.category))),
  ];
  const filteredProjects =
    filter === "all"
      ? webProjects
      : webProjects.filter((project) => project.category === filter);

  // Helper function to check if URL is available
  const isUrlAvailable = (project: WebProject) => {
    if (!project.websiteUrl) return false;
    if (project.status === "unavailable") return false;
    return !project.websiteUrl.includes("example.com");
  };

  // Helper function to get button text based on URL availability and status
  const getButtonText = (project: WebProject) => {
    if (project.status === "unavailable") return "Not Available";
    if (!project.websiteUrl) return "No Link";
    if (!isUrlAvailable(project)) return "Coming Soon";
    return "Live Site";
  };

  // Helper function to handle click for unavailable links
  const handleLinkClick = (project: WebProject, e: React.MouseEvent) => {
    if (!isUrlAvailable(project)) {
      e.preventDefault();
      if (project.status === "unavailable") {
        alert(
          `${project.name} website is no longer available. or the link cannot be found.`
        );
      } else {
        alert(`${project.name} website will be available soon!`);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return theme === "dark" ? "text-green-400" : "text-green-600";
      case "development":
        return theme === "dark" ? "text-yellow-400" : "text-yellow-600";
      case "completed":
        return theme === "dark" ? "text-blue-400" : "text-blue-600";
      case "unavailable":
        return theme === "dark" ? "text-red-400" : "text-red-600";
      default:
        return theme === "dark" ? "text-gray-400" : "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":
        return "Live";
      case "development":
        return "In Development";
      case "completed":
        return "Completed";
      case "unavailable":
        return "Unavailable";
      default:
        return "Unknown";
    }
  };

  const openImageGallery = (project: WebProject, imageIndex = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setShowImageGallery(true);
  };

  const closeImageGallery = () => {
    setShowImageGallery(false);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setSelectedImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      className={`py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="web-projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* ========== HEADER SECTION ========== */}
        <div className="mb-8 md:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Web Development Projects
          </h2>
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          <p
            className={`text-center max-w-4xl mx-auto text-sm sm:text-base md:text-lg px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Showcase of custom websites and web applications built with modern
            technologies. Each project represents unique solutions tailored to
            client needs and industry requirements.
          </p>
        </div>

        {/* ========== FILTER SECTION ========== */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 capitalize ${
                  filter === category
                    ? theme === "dark"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-white text-gray-600 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        {/* ========== PROJECTS GRID SECTION ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] md:hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-900 border border-gray-700 hover:shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-2xl"
              }`}
            >
              {/* Project Image */}
              <div
                className="relative h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openImageGallery(project, 0)}
              >
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Image count indicator */}
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                  <Globe className="w-3 h-3" />
                  <span className="hidden sm:inline">
                    {project.images.length} screens
                  </span>
                  <span className="sm:hidden">{project.images.length}</span>
                </div>

                {/* Status Badge */}
                <div
                  className={`absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )} ${theme === "dark" ? "bg-gray-900/80" : "bg-white/80"}`}
                >
                  <span className="hidden sm:inline">
                    {getStatusText(project.status)}
                  </span>
                  <span className="sm:hidden">
                    {project.status === "live"
                      ? "●"
                      : project.status === "development"
                      ? "◐"
                      : project.status === "completed"
                      ? "◉"
                      : "✕"}
                  </span>
                </div>

                {/* URL Availability Indicator */}
                {project.status === "unavailable" && (
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500/80 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                    <XCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">Website Offline</span>
                    <span className="sm:hidden">Offline</span>
                  </div>
                )}
                {project.status !== "unavailable" &&
                  !isUrlAvailable(project) &&
                  project.websiteUrl?.includes("example.com") && (
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-orange-500/80 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                      <Lock className="w-3 h-3" />
                      <span className="hidden sm:inline">Coming Soon</span>
                      <span className="sm:hidden">Soon</span>
                    </div>
                  )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Project</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-2 md:items-center">
                  <h3
                    className={`text-lg md:text-xl font-semibold flex-1 pr-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-md shrink-0 ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <p
                  className={`text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                  {/* Show only 2 technologies on mobile, 3 on larger screens */}
                  <div className="flex flex-wrap gap-1 md:hidden">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-md ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span
                        className={`px-2 py-1 text-xs rounded-md ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  {/* Show 3 technologies on larger screens */}
                  <div className="hidden md:flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-md ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 text-xs rounded-md ${
                          theme === "dark"
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => openImageGallery(project, 0)}
                    className={`flex items-center justify-center space-x-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors flex-1 ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">View Screens</span>
                    <span className="sm:hidden">View</span>
                  </button>

                  {(project.websiteUrl || project.status === "unavailable") && (
                    <a
                      href={isUrlAvailable(project) ? project.websiteUrl : "#"}
                      target={isUrlAvailable(project) ? "_blank" : "_self"}
                      rel={isUrlAvailable(project) ? "noopener noreferrer" : ""}
                      className={`flex items-center justify-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors flex-1 sm:flex-initial ${
                        isUrlAvailable(project)
                          ? theme === "dark"
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "bg-purple-600 hover:bg-purple-700 text-white"
                          : project.status === "unavailable"
                          ? theme === "dark"
                            ? "bg-red-600 text-gray-300 cursor-not-allowed"
                            : "bg-red-500 text-white cursor-not-allowed"
                          : theme === "dark"
                          ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                          : "bg-gray-400 text-gray-600 cursor-not-allowed"
                      }`}
                      onClick={(e) => handleLinkClick(project, e)}
                    >
                      {isUrlAvailable(project) ? (
                        <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                      ) : project.status === "unavailable" ? (
                        <XCircle className="w-3 md:w-4 h-3 md:h-4" />
                      ) : (
                        <AlertCircle className="w-3 md:w-4 h-3 md:h-4" />
                      )}
                      <span className="hidden sm:inline">
                        {getButtonText(project)}
                      </span>
                      <span className="sm:hidden">
                        {isUrlAvailable(project)
                          ? "Visit"
                          : project.status === "unavailable"
                          ? "N/A"
                          : "Soon"}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========== IMAGE GALLERY MODAL ========== */}
        {showImageGallery && selectedProject && (
          <div
            className={`fixed inset-0 flex items-center justify-center p-2 md:p-4 z-50 ${
              theme === "dark"
                ? "bg-black/80 backdrop-blur-sm"
                : "bg-black/70 backdrop-blur-sm"
            }`}
            onClick={closeImageGallery}
          >
            <div
              className="max-w-6xl w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gallery Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 text-white gap-3 sm:gap-0">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-2xl font-semibold mb-1 truncate">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {selectedProject.category}
                  </p>
                </div>
                <div className="flex items-center space-x-2 md:space-x-6 shrink-0">
                  <span className="text-xs md:text-sm">
                    {selectedImageIndex + 1} of {selectedProject.images.length}
                  </span>
                  {selectedProject.websiteUrl &&
                    isUrlAvailable(selectedProject) && (
                      <a
                        href={selectedProject.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-lg text-xs md:text-sm transition-colors"
                      >
                        <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                        <span>Visit Site</span>
                      </a>
                    )}
                  {selectedProject.status === "unavailable" && (
                    <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-red-600 rounded-lg text-xs md:text-sm">
                      <XCircle className="w-3 md:w-4 h-3 md:h-4" />
                      <span className="hidden md:inline">Website Offline</span>
                      <span className="md:hidden">Offline</span>
                    </div>
                  )}
                  {selectedProject.websiteUrl &&
                    !isUrlAvailable(selectedProject) &&
                    selectedProject.status !== "unavailable" && (
                      <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-gray-600 rounded-lg text-xs md:text-sm">
                        <AlertCircle className="w-3 md:w-4 h-3 md:h-4" />
                        <span className="hidden md:inline">Coming Soon</span>
                        <span className="md:hidden">Soon</span>
                      </div>
                    )}
                  <button
                    className="text-2xl md:text-3xl hover:text-gray-300 transition-colors"
                    onClick={closeImageGallery}
                    aria-label="Close image gallery"
                  >
                    <X className="w-6 md:w-8 h-6 md:h-8" />
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="flex-1 relative mb-2 md:mb-4">
                <Image
                  src={selectedProject.images[selectedImageIndex]}
                  alt={`${selectedProject.name} - Screen ${
                    selectedImageIndex + 1
                  }`}
                  fill
                  className="object-contain rounded-lg"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous screen"
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                    >
                      <ChevronLeft className="w-4 md:w-6 h-4 md:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next screen"
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                    >
                      <ChevronRight className="w-4 md:w-6 h-4 md:h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.images.length > 1 && (
                <div className="flex space-x-2 md:space-x-3 justify-center overflow-x-auto pb-2 px-4">
                  {selectedProject.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`View screen ${index + 1} of ${
                        selectedProject.name
                      }`}
                      className={`relative w-16 md:w-20 h-10 md:h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                        index === selectedImageIndex
                          ? "border-purple-500 scale-105 md:scale-110"
                          : "border-gray-500 hover:border-gray-300 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Screen ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Info */}
              <div className="mt-2 md:mt-4 text-center text-white px-4">
                <p className="text-xs md:text-sm text-gray-300 mb-2 line-clamp-2">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/20 text-white rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile-only action buttons */}
                <div className="sm:hidden mt-3 flex gap-2 justify-center">
                  {selectedProject.websiteUrl &&
                    isUrlAvailable(selectedProject) && (
                      <a
                        href={selectedProject.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-xs transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Visit Site</span>
                      </a>
                    )}
                  {selectedProject.status === "unavailable" && (
                    <div className="flex items-center space-x-2 px-3 py-2 bg-red-600 rounded-lg text-xs">
                      <XCircle className="w-3 h-3" />
                      <span>Offline</span>
                    </div>
                  )}
                  {selectedProject.websiteUrl &&
                    !isUrlAvailable(selectedProject) &&
                    selectedProject.status !== "unavailable" && (
                      <div className="flex items-center space-x-2 px-3 py-2 bg-gray-600 rounded-lg text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>Soon</span>
                      </div>
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
