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
    image: "/assets/sample-social-media/tmp063om_p0.webp",
    images: [
      "/assets/sample-social-media/tmp063om_p0.webp",
      "/assets/sample-social-media/tmp0k2rmbo0.webp",
      "/assets/sample-social-media/tmp1gvij9vn.webp",
      "/assets/sample-social-media/tmp49azcblo.webp",
    ],
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
    image: "/assets/sample-social-media/tmpalw0_cpm.webp",
    demoUrl: "https://tiktok.com/beauty",
    status: "completed",
  },
];

const graphicDesigns: GraphicDesign[] = [
  {
    id: 101,
    title: "Modern Brand Identity Design",
    description:
      "Complete brand identity package with logo, colors, and typography",
    longDescription:
      "Comprehensive brand identity design including logo creation, color palette development, typography selection, and brand guidelines for a modern tech startup.",
    category: "branding",
    image: "/assets/graphic-design/1.webp",
    alt: "Modern brand identity design showcase",
    date: "2024-01-15",
    tags: ["Branding", "Logo", "Identity", "Modern"],
    likes: 45,
    views: 320,
    status: "featured",
    tools: ["Adobe Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 102,
    title: "Restaurant Menu Design",
    description: "Elegant menu design for upscale dining restaurant",
    longDescription:
      "Sophisticated menu design featuring elegant typography, food photography integration, and premium layout design for an upscale restaurant chain.",
    category: "print-design",
    image: "/assets/graphic-design/2.webp",
    alt: "Restaurant menu design",
    date: "2024-01-10",
    tags: ["Menu", "Restaurant", "Print", "Elegant"],
    likes: 32,
    views: 156,
    status: "popular",
    tools: ["Adobe InDesign", "Photoshop"],
  },
  {
    id: 103,
    title: "Concert Poster Design",
    description: "Dynamic poster design for music festival event",
    longDescription:
      "Vibrant and energetic poster design for a summer music festival, incorporating bold typography, colorful graphics, and festival branding elements.",
    category: "poster-design",
    image: "/assets/graphic-design/3.webp",
    alt: "Concert poster design",
    date: "2024-01-05",
    tags: ["Poster", "Music", "Festival", "Vibrant"],
    likes: 67,
    views: 234,
    status: "new",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 104,
    title: "Corporate Logo Design",
    description: "Professional logo design for business consulting firm",
    longDescription:
      "Clean and professional logo design for a business consulting firm, emphasizing trust, expertise, and modern business values through minimalist design approach.",
    category: "logo-design",
    image: "/assets/graphic-design/4.webp",
    alt: "Corporate logo design",
    date: "2023-12-20",
    tags: ["Logo", "Corporate", "Business", "Professional"],
    likes: 28,
    views: 189,
    status: "default",
    tools: ["Adobe Illustrator"],
  },
  {
    id: 105,
    title: "Mobile App UI Design",
    description: "User interface design for mobile fitness application",
    longDescription:
      "Modern and intuitive mobile app interface design for a fitness tracking application, featuring clean layouts, motivational color schemes, and user-friendly navigation.",
    category: "ui-design",
    image: "/assets/graphic-design/5.webp",
    alt: "Mobile app UI design",
    date: "2023-12-15",
    tags: ["UI", "Mobile", "App", "Fitness"],
    likes: 89,
    views: 445,
    status: "featured",
    tools: ["Figma", "Adobe XD"],
  },
  {
    id: 106,
    title: "Book Cover Illustration",
    description: "Creative book cover design for fantasy novel",
    longDescription:
      "Captivating book cover illustration for a fantasy novel, featuring mystical elements, dramatic lighting, and typography that captures the essence of the story.",
    category: "illustration",
    image: "/assets/graphic-design/6.webp",
    alt: "Book cover illustration",
    date: "2023-12-10",
    tags: ["Illustration", "Book", "Fantasy", "Cover"],
    likes: 76,
    views: 298,
    status: "popular",
    tools: ["Adobe Photoshop", "Illustrator"],
  },
  {
    id: 107,
    title: "Corporate Brand Guidelines",
    description:
      "Complete brand guideline documentation for corporate identity",
    longDescription:
      "Comprehensive brand guidelines including logo usage, color specifications, typography rules, and visual identity standards for corporate communications.",
    category: "branding",
    image:
      "/assets/graphic-design/307e91d3b702ba7884eeb70d381fbea3_1200_80.webp",
    alt: "Corporate brand guidelines design",
    date: "2023-11-25",
    tags: ["Guidelines", "Corporate", "Brand", "Standards"],
    likes: 34,
    views: 187,
    status: "default",
    tools: ["Adobe InDesign", "Illustrator"],
  },
  {
    id: 108,
    title: "E-commerce Product Catalog",
    description: "Product catalog design for online retail platform",
    longDescription:
      "Modern e-commerce catalog featuring product photography, layout design, and user-friendly navigation for enhanced shopping experience.",
    category: "print-design",
    image:
      "/assets/graphic-design/392604fc3031162dbf80378171c12db9_1200_80.webp",
    alt: "E-commerce product catalog design",
    date: "2023-11-20",
    tags: ["Catalog", "E-commerce", "Product", "Retail"],
    likes: 42,
    views: 203,
    status: "popular",
    tools: ["Adobe InDesign", "Photoshop"],
  },
  {
    id: 109,
    title: "Music Album Cover Design",
    description: "Creative album artwork for independent music artist",
    longDescription:
      "Artistic album cover design featuring abstract elements, creative typography, and visual storytelling that captures the essence of the musical composition.",
    category: "illustration",
    image:
      "/assets/graphic-design/44f0c79f9f9a48f2f6f19789386fba7e_1200_80.webp",
    alt: "Music album cover design",
    date: "2023-11-15",
    tags: ["Album", "Music", "Cover", "Artistic"],
    likes: 58,
    views: 267,
    status: "featured",
    tools: ["Adobe Photoshop", "Illustrator"],
  },
  {
    id: 110,
    title: "Event Flyer Design",
    description: "Promotional flyer for community event and festival",
    longDescription:
      "Eye-catching event flyer featuring vibrant colors, engaging graphics, and clear information hierarchy to attract attendees and communicate event details effectively.",
    category: "poster-design",
    image:
      "/assets/graphic-design/4925fb9409deba833f68c97db72241c6_1200_80.webp",
    alt: "Event flyer design",
    date: "2023-11-10",
    tags: ["Flyer", "Event", "Promotion", "Community"],
    likes: 39,
    views: 178,
    status: "new",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 111,
    title: "Digital Marketing Banner",
    description: "Web banner design for digital advertising campaign",
    longDescription:
      "Responsive web banner design optimized for digital platforms, featuring compelling visuals and clear call-to-action for maximum conversion rates.",
    category: "ui-design",
    image:
      "/assets/graphic-design/724b0b0396c6d662c4a78a7fccd17b34_1200_80.webp",
    alt: "Digital marketing banner design",
    date: "2023-11-05",
    tags: ["Banner", "Digital", "Marketing", "Web"],
    likes: 51,
    views: 234,
    status: "popular",
    tools: ["Adobe Photoshop", "Figma"],
  },
  {
    id: 112,
    title: "Food & Beverage Packaging",
    description: "Product packaging design for gourmet food brand",
    longDescription:
      "Premium packaging design for gourmet food products, incorporating brand identity, product information, and visual appeal to stand out on retail shelves.",
    category: "print-design",
    image:
      "/assets/graphic-design/73c0637d3421e12b945a62cc7eef1817_1200_80.webp",
    alt: "Food and beverage packaging design",
    date: "2023-10-30",
    tags: ["Packaging", "Food", "Beverage", "Retail"],
    likes: 47,
    views: 198,
    status: "featured",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 113,
    title: "Tech Startup Logo",
    description: "Modern logo design for technology startup company",
    longDescription:
      "Contemporary logo design for tech startup, emphasizing innovation, scalability, and modern technology through clean lines and strategic color choices.",
    category: "logo-design",
    image:
      "/assets/graphic-design/823716ac2c9953e30c19a8e01e293fe3_1200_80.webp",
    alt: "Tech startup logo design",
    date: "2023-10-25",
    tags: ["Logo", "Startup", "Technology", "Innovation"],
    likes: 63,
    views: 289,
    status: "new",
    tools: ["Adobe Illustrator"],
  },
  {
    id: 114,
    title: "Magazine Layout Design",
    description: "Editorial layout design for lifestyle magazine",
    longDescription:
      "Sophisticated magazine layout featuring typography hierarchy, image placement, and reading flow optimization for enhanced reader engagement and visual appeal.",
    category: "print-design",
    image:
      "/assets/graphic-design/9deeb10205264a7ec2f68c2c18294474_1200_80.webp",
    alt: "Magazine layout design",
    date: "2023-10-20",
    tags: ["Magazine", "Editorial", "Layout", "Typography"],
    likes: 41,
    views: 167,
    status: "default",
    tools: ["Adobe InDesign", "Photoshop"],
  },
  {
    id: 115,
    title: "Social Media Graphics",
    description: "Social media graphic templates for brand consistency",
    longDescription:
      "Cohesive social media graphics package including post templates, story designs, and profile elements to maintain brand consistency across all platforms.",
    category: "ui-design",
    image:
      "/assets/graphic-design/9e8185e0db50e1862238ce06cc3f15bc_1200_80.webp",
    alt: "Social media graphics design",
    date: "2023-10-15",
    tags: ["Social Media", "Templates", "Branding", "Digital"],
    likes: 55,
    views: 312,
    status: "popular",
    tools: ["Adobe Photoshop", "Canva"],
  },
  {
    id: 116,
    title: "Wellness Brand Identity",
    description: "Holistic brand identity for wellness and health company",
    longDescription:
      "Comprehensive brand identity for wellness company including logo, color palette, typography, and visual elements that convey health, balance, and natural healing.",
    category: "branding",
    image:
      "/assets/graphic-design/a6eaab960af24cd55852dd63d8ddaff0_1200_80.webp",
    alt: "Wellness brand identity design",
    date: "2023-10-10",
    tags: ["Wellness", "Health", "Brand", "Natural"],
    likes: 38,
    views: 145,
    status: "featured",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 117,
    title: "Annual Report Design",
    description:
      "Corporate annual report with infographics and data visualization",
    longDescription:
      "Professional annual report design featuring data visualization, infographics, and corporate messaging to effectively communicate company performance and achievements.",
    category: "print-design",
    image:
      "/assets/graphic-design/aaf0d5a1303e60f697ae43f2d99fb76d_1200_80.webp",
    alt: "Annual report design",
    date: "2023-10-05",
    tags: ["Report", "Corporate", "Data", "Infographics"],
    likes: 29,
    views: 134,
    status: "default",
    tools: ["Adobe InDesign", "Illustrator"],
  },
  {
    id: 118,
    title: "Fashion Brand Campaign",
    description: "Visual campaign design for fashion brand launch",
    longDescription:
      "Creative fashion campaign featuring lifestyle photography, typography design, and brand messaging to establish market presence and attract target audience.",
    category: "poster-design",
    image:
      "/assets/graphic-design/badc04978759160f8290986f7aad3e9d_1200_80.webp",
    alt: "Fashion brand campaign design",
    date: "2023-09-30",
    tags: ["Fashion", "Campaign", "Lifestyle", "Brand"],
    likes: 72,
    views: 356,
    status: "featured",
    tools: ["Adobe Photoshop", "Illustrator"],
  },
  {
    id: 119,
    title: "App Icon Design",
    description: "Mobile application icon design for iOS and Android",
    longDescription:
      "Modern app icon design optimized for both iOS and Android platforms, featuring scalable vector graphics and platform-specific design guidelines compliance.",
    category: "ui-design",
    image:
      "/assets/graphic-design/bef19539e12fae89a52a1ce1cc418f60_1200_80.webp",
    alt: "Mobile app icon design",
    date: "2023-09-25",
    tags: ["App Icon", "Mobile", "iOS", "Android"],
    likes: 44,
    views: 201,
    status: "new",
    tools: ["Adobe Illustrator", "Figma"],
  },
  {
    id: 120,
    title: "Real Estate Brochure",
    description: "Property brochure design for luxury real estate",
    longDescription:
      "Elegant real estate brochure featuring property photography, floor plans, and premium design elements to showcase luxury properties and attract potential buyers.",
    category: "print-design",
    image:
      "/assets/graphic-design/d16dd0631d6a69c898fbd7ef6ac21eac_1200_80.webp",
    alt: "Real estate brochure design",
    date: "2023-09-20",
    tags: ["Brochure", "Real Estate", "Luxury", "Property"],
    likes: 36,
    views: 167,
    status: "popular",
    tools: ["Adobe InDesign", "Photoshop"],
  },
  {
    id: 121,
    title: "Gaming Logo Design",
    description: "Esports team logo and gaming brand identity",
    longDescription:
      "Dynamic gaming logo design for esports team featuring bold graphics, gaming aesthetics, and versatile design elements suitable for tournaments and merchandise.",
    category: "logo-design",
    image:
      "/assets/graphic-design/d79f54b07152a02873c5282ec5db9056_1200_80.webp",
    alt: "Gaming logo design",
    date: "2023-09-15",
    tags: ["Gaming", "Esports", "Logo", "Team"],
    likes: 67,
    views: 298,
    status: "featured",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: 122,
    title: "Website UI Components",
    description: "Web interface design components and elements",
    longDescription:
      "Comprehensive UI component library for web applications including buttons, forms, navigation elements, and interactive components with consistent design language.",
    category: "ui-design",
    image:
      "/assets/graphic-design/e8dab1d270eee67a8201d394c1552ed5_1200_80.webp",
    alt: "Website UI components design",
    date: "2023-09-10",
    tags: ["UI", "Web", "Components", "Interface"],
    likes: 53,
    views: 243,
    status: "new",
    tools: ["Figma", "Adobe XD"],
  },
  {
    id: 123,
    title: "Non-Profit Campaign",
    description: "Awareness campaign design for non-profit organization",
    longDescription:
      "Impactful campaign design for non-profit organization featuring emotional storytelling, call-to-action elements, and visual messaging to drive awareness and donations.",
    category: "poster-design",
    image:
      "/assets/graphic-design/ea7ed901cfe7dc35ffc9378dcdc3bca6_1200_80.webp",
    alt: "Non-profit campaign design",
    date: "2023-09-05",
    tags: ["Non-Profit", "Campaign", "Awareness", "Social"],
    likes: 31,
    views: 156,
    status: "default",
    tools: ["Adobe Photoshop", "Illustrator"],
  },
  {
    id: 124,
    title: "Travel Agency Branding",
    description: "Complete branding package for travel and tourism company",
    longDescription:
      "Comprehensive travel agency branding including logo design, marketing materials, and visual identity that captures the spirit of adventure and wanderlust.",
    category: "branding",
    image:
      "/assets/graphic-design/fc61c3db2e4b545b468177073631abc1_1200_80.webp",
    alt: "Travel agency branding design",
    date: "2023-08-30",
    tags: ["Travel", "Tourism", "Branding", "Adventure"],
    likes: 49,
    views: 217,
    status: "popular",
    tools: ["Adobe Illustrator", "Photoshop", "InDesign"],
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
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            PROJECTS
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of successful social media campaigns, content strategies,
            graphic design projects, and digital marketing initiatives across
            various industries. Each project demonstrates creative storytelling,
            strategic thinking, and measurable results.
          </p>
        </div>

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
                onLike={(id) => console.log("Liked design:", id)}
                onShare={(id) => console.log("Shared design:", id)}
              />
            ))}
          </div>
        </div>

        {/* Design Modal */}
        {selectedDesign && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDesign(null)}
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
                    {selectedDesign.title}
                  </h3>
                  <button
                    onClick={() => setSelectedDesign(null)}
                    className={`text-2xl ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    ×
                  </button>
                </div>

                {/* Design Image */}
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedDesign.image}
                    alt={selectedDesign.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p
                  className={`text-lg mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedDesign.longDescription}
                </p>

                {selectedDesign.tools && (
                  <div className="mb-6">
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Design Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDesign.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`px-3 py-1 text-sm rounded-lg ${
                            theme === "dark"
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  {selectedDesign.externalUrl && (
                    <a
                      href={selectedDesign.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        theme === "dark"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Design</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Gallery Modal */}
        {showImageGallery && selectedProject?.images && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={closeImageGallery}
          >
            <div
              className="max-w-5xl w-full h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gallery Header */}
              <div className="flex justify-between items-center mb-4 text-white">
                <h3 className="text-xl font-semibold">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm">
                    {selectedImageIndex + 1} of {selectedProject.images.length}
                  </span>
                  <button
                    className="text-2xl hover:text-gray-300"
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
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
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex
                          ? "border-white"
                          : "border-gray-600 hover:border-gray-400"
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
