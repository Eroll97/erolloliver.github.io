"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Palette, 
  Database,
  Globe,
  Smartphone,
  Zap,
  Filter,
  ChevronRight
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
  status: 'completed' | 'in-progress' | 'planned';
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI and robust backend",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js, featuring user authentication, payment processing, inventory management, and admin dashboard. Includes real-time notifications and responsive design.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    category: "fullstack",
    image: "/api/placeholder/600/400",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    status: "completed"
  },
  {
    id: 2,
    title: "Digital Marketing Dashboard",
    description: "Analytics dashboard for tracking marketing campaigns and ROI",
    longDescription: "An advanced analytics dashboard that aggregates data from multiple marketing channels including Google Ads, Facebook, and email campaigns. Features custom reporting, automated alerts, and predictive analytics.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB", "Docker"],
    category: "analytics",
    image: "/api/placeholder/600/400",
    demoUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/example/dashboard",
    status: "completed"
  },
  {
    id: 3,
    title: "Mobile App Design System",
    description: "Comprehensive design system for mobile applications",
    longDescription: "A complete design system built for mobile applications with reusable components, style guides, and documentation. Includes Figma libraries, React Native components, and automated testing.",
    technologies: ["React Native", "Figma", "Storybook", "Jest", "TypeScript"],
    category: "mobile",
    image: "/api/placeholder/600/400",
    demoUrl: "https://design.example.com",
    status: "in-progress"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "AI-powered tool for generating marketing content",
    longDescription: "An intelligent content generation platform that uses machine learning to create marketing copy, social media posts, and email campaigns. Features template management, brand voice consistency, and performance tracking.",
    technologies: ["Python", "OpenAI API", "Vue.js", "Django", "Celery", "AWS"],
    category: "ai",
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/example/ai-content",
    status: "in-progress"
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Scalable chat platform with video calling features",
    longDescription: "A modern chat application supporting real-time messaging, file sharing, video calls, and group conversations. Built with scalability in mind to handle thousands of concurrent users.",
    technologies: ["Socket.io", "WebRTC", "Express.js", "MySQL", "AWS S3"],
    category: "fullstack",
    image: "/api/placeholder/600/400",
    demoUrl: "https://chat.example.com",
    githubUrl: "https://github.com/example/chat",
    status: "completed"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology",
    longDescription: "A transparent and secure voting system built on blockchain technology. Features voter verification, real-time results, and immutable vote records with complete audit trails.",
    technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS", "React"],
    category: "blockchain",
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/example/voting",
    status: "planned"
  }
];

const categories = [
  { id: "all", name: "All Projects", icon: Globe },
  { id: "fullstack", name: "Full Stack", icon: Code },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "analytics", name: "Analytics", icon: Database },
  { id: "ai", name: "AI/ML", icon: Zap },
  { id: "blockchain", name: "Blockchain", icon: Database }
];

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return theme === "dark" ? "text-green-400" : "text-green-600";
      case 'in-progress':
        return theme === "dark" ? "text-yellow-400" : "text-yellow-600";
      case 'planned':
        return theme === "dark" ? "text-blue-400" : "text-blue-600";
      default:
        return theme === "dark" ? "text-gray-400" : "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return "Completed";
      case 'in-progress':
        return "In Progress";
      case 'planned':
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
            Featured Projects
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my recent work spanning full-stack development, mobile applications, 
            data analytics, and emerging technologies. Each project represents a unique solution 
            to real-world challenges.
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
                {activeCategory === category.id && <Filter className="w-4 h-4" />}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white opacity-50" />
                </div>
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} ${
                    theme === "dark" ? "bg-gray-900/80" : "bg-white/80"
                  }`}
                >
                  {getStatusText(project.status)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
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
                  {project.technologies.length > 3 && (
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
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
              className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
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
                      theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    ×
                  </button>
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
                    Technologies Used
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
                      <span>View Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                      }`}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
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