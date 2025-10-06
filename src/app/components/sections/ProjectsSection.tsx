"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import GraphicDesignShowcase, {
  GraphicDesign,
} from "@/app/components/card/graphic-design-showcase";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string; // Main thumbnail image
  images?: string[]; // Additional gallery images
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
    image: "/assets/sample-social-media/pro-hub.webp",
    images: [
      "/assets/sample-social-media/pro-hub.webp",
      "/assets/sample-social-media/pro-hub2.webp",
      "/assets/sample-social-media/pro-hub3.webp",
      "/assets/sample-social-media/pro-hub4.webp",
      "/assets/sample-social-media/pro-hub5.webp",
      "/assets/sample-social-media/pro-hub6.webp",
      "/assets/sample-social-media/pro-hub7.webp",
    ],
    status: "completed",
  },
  {
    id: 2,
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
    image: "/assets/sample-social-media/workgenix.webp",
    images: [
      "/assets/sample-social-media/workgenix.webp",
      "/assets/sample-social-media/workgenix2.webp",
    ],
    status: "completed",
  },
  {
    id: 3,
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
    image: "/assets/sample-social-media/multipeak.webp",
    images: ["/assets/sample-social-mediamultipeak.webp"],
    status: "completed",
  },
  {
    id: 4,
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
    image: "/assets/sample-social-media/level3d1.webp",
    images: [
      "/assets/sample-social-media/level3d1.webp",
      "/assets/sample-social-media/level3d2.webp",
      "/assets/sample-social-media/level3d3.webp",
      "/assets/sample-social-media/level3d4.webp",
      "/assets/sample-social-media/level3d5.webp",
      "/assets/sample-social-media/level3d6.webp",
    ],
    status: "completed",
  },
];

const graphicDesigns: GraphicDesign[] = [
 
  {
    id: 107,
    click: "Click Design",
    image:
      "/assets/graphic-design/307e91d3b702ba7884eeb70d381fbea3_1200_80.webp",
  },
  {
    id: 108,
    click: "Click Design",
    image:
      "/assets/graphic-design/392604fc3031162dbf80378171c12db9_1200_80.webp",
  },
  {
    id: 109,
    click: "Click Design",
    image:
      "/assets/graphic-design/44f0c79f9f9a48f2f6f19789386fba7e_1200_80.webp",
  },
  {
    id: 110,
    click: "Click Design",
    image:
      "/assets/graphic-design/4925fb9409deba833f68c97db72241c6_1200_80.webp",
  },
  {
    id: 111,
    click: "Click Design",
    image:
      "/assets/graphic-design/724b0b0396c6d662c4a78a7fccd17b34_1200_80.webp",
  },
  {
    id: 112,
    click: "Click Design",
    image:
      "/assets/graphic-design/73c0637d3421e12b945a62cc7eef1817_1200_80.webp",
  },
  {
    id: 113,
    click: "Click Design",
    image:
      "/assets/graphic-design/823716ac2c9953e30c19a8e01e293fe3_1200_80.webp",
  },
  {
    id: 114,
    click: "Click Design",
    image:
      "/assets/graphic-design/9deeb10205264a7ec2f68c2c18294474_1200_80.webp",
  },
  {
    id: 115,
    click: "Click Design",
    image:
      "/assets/graphic-design/9e8185e0db50e1862238ce06cc3f15bc_1200_80.webp",
  },
  {
    id: 116,
    click: "Click Design",
    image:
      "/assets/graphic-design/a6eaab960af24cd55852dd63d8ddaff0_1200_80.webp",
  },
  {
    id: 117,
    click: "Click Design",
    image:
      "/assets/graphic-design/aaf0d5a1303e60f697ae43f2d99fb76d_1200_80.webp",
  },
  {
    id: 118,
    click: "Click Design",
    image:
      "/assets/graphic-design/badc04978759160f8290986f7aad3e9d_1200_80.webp",
  },
  {
    id: 119,
    click: "Click Design",
    image:
      "/assets/graphic-design/bef19539e12fae89a52a1ce1cc418f60_1200_80.webp",
  },
  {
    id: 120,
    click: "Click Design",
    image:
      "/assets/graphic-design/d16dd0631d6a69c898fbd7ef6ac21eac_1200_80.webp",
  },
  {
    id: 121,
    click: "Click Design",
    image:
      "/assets/graphic-design/d79f54b07152a02873c5282ec5db9056_1200_80.webp",
  },
  {
    id: 122,
    click: "Click Design",
    image:
      "/assets/graphic-design/e8dab1d270eee67a8201d394c1552ed5_1200_80.webp",
  },
  {
    id: 123,
    click: "Click Design",
    image:
      "/assets/graphic-design/ea7ed901cfe7dc35ffc9378dcdc3bca6_1200_80.webp",
  },
  {
    id: 124,
    click: "Click Design",
    image:
      "/assets/graphic-design/fc61c3db2e4b545b468177073631abc1_1200_80.webp",
  },
];

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<GraphicDesign | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);

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

  const openImageGallery = (project: Project, imageIndex = 0) => {
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
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
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
        {/* Social Media Campaigns Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h3
              className={`text-3xl font-bold text-center mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Social Media Campaigns
            </h3>
            <p
              className={`text-center max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Strategic social media marketing campaigns across various
              platforms, driving engagement, brand awareness, and measurable
              business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                  theme === "dark"
                    ? "bg-gray-800 border border-gray-700 hover:shadow-2xl"
                    : "bg-white border border-gray-200 hover:shadow-2xl"
                }`}
              >
                {/* Project Image */}
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() =>
                    project.images && project.images.length > 1
                      ? openImageGallery(project, 0)
                      : setSelectedProject(project)
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Image count indicator */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{project.images.length}</span>
                    </div>
                  )}

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
        </div>

        {/* Graphic Design Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h3
              className={`text-3xl font-bold text-center mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Graphic Design
            </h3>
            <p
              className={`text-center max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Creative visual designs including branding, logos, illustrations,
              and print materials that communicate powerful messages and build
              brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {graphicDesigns.map((design) => (
              <GraphicDesignShowcase
                key={design.id}
                design={design}
                onClick={setSelectedDesign}
              />
            ))}
          </div>
        </div>

        {/* Simplified Design Modal for Large Image View */}
        {selectedDesign && (
          <div
            className={`fixed inset-0 flex items-center justify-center p-4 z-50 ${
              theme === "dark"
                ? "bg-black/70 backdrop-blur-sm"
                : "bg-black/60 backdrop-blur-sm"
            }`}
            onClick={() => setSelectedDesign(null)}
          >
            <div
              className="max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/*X and image */}
                <div className="flex justify-end items-center -mt-8 mb-2 text-white">
              
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-4xl hover:text-gray-300 transition-colors"
                >
                  ×
                </button>
                </div>

              {/* Large Image Display */}
              <div className="flex-1 relative min-h-[90vh]">
                <Image
                  src={selectedDesign.image}
                  alt={selectedDesign.click}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Image Gallery Modal */}
        {showImageGallery && selectedProject?.images && (
          <div
            className={`fixed inset-0 flex items-center justify-center p-4 z-50 ${
              theme === "dark"
                ? "bg-black/70 backdrop-blur-sm"
                : "bg-black/60 backdrop-blur-sm"
            }`}
            onClick={closeImageGallery}
          >
            <div
              className="max-w-5xl w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gallery Header */}
              <div
                className={`flex justify-between items-center mb-4 ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">
                    {selectedImageIndex + 1} of {selectedProject.images.length}
                  </span>
                  <button
                    className={`text-2xl transition-colors ${
                      theme === "dark"
                        ? "hover:text-gray-300"
                        : "hover:text-gray-200"
                    }`}
                    onClick={closeImageGallery}
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="flex-1 relative mb-4">
                <Image
                  src={selectedProject.images[selectedImageIndex]}
                  alt={`${selectedProject.title} - Image ${
                    selectedImageIndex + 1
                  }`}
                  fill
                  className="object-contain"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
                        theme === "dark"
                          ? "bg-black/60 text-white hover:bg-black/80"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
                        theme === "dark"
                          ? "bg-black/60 text-white hover:bg-black/80"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.images.length > 1 && (
                <div className="flex space-x-2 justify-center overflow-x-auto pb-2">
                  {selectedProject.images.map((img, index) => (
                    <button
                      title={`Select image ${index + 1}`}
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex
                          ? theme === "dark"
                            ? "border-white"
                            : "border-white"
                          : theme === "dark"
                          ? "border-gray-500 hover:border-gray-300"
                          : "border-gray-400 hover:border-gray-200"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
