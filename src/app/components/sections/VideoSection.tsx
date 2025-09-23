"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import { Play, X, ExternalLink, Calendar, Eye, Heart } from "lucide-react";
import Image from "next/image";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  driveUrl: string;
  embedUrl: string;
  thumbnail: string;
  duration?: string;
  date?: string;
  views?: number;
  likes?: number;
}

const videos: VideoItem[] = [
  {
    id: "1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G",
    title: "Brand Awareness Campaign",
    description:
      "Dynamic social media campaign showcasing brand identity and engagement strategies across multiple platforms",
    category: "Social Media",
    driveUrl:
      "https://drive.google.com/file/d/1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G&sz=w640-h360`,
    duration: "2:30",
    date: "2024-01-15",
    views: 245,
    likes: 32,
  },
  {
    id: "1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw",
    title: "Product Showcase Video",
    description:
      "Professional product demonstration with engaging visual storytelling and compelling call-to-action",
    category: "Product Demo",
    driveUrl:
      "https://drive.google.com/file/d/1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw&sz=w640-h360`,
    duration: "1:45",
    date: "2024-01-10",
    views: 189,
    likes: 28,
  },
  {
    id: "1_NMD-ziVq8O8hADninitTiXsLNInPeuM",
    title: "Corporate Training Content",
    description:
      "Educational content designed for professional development and team training initiatives",
    category: "Corporate",
    driveUrl:
      "https://drive.google.com/file/d/1_NMD-ziVq8O8hADninitTiXsLNInPeuM/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1_NMD-ziVq8O8hADninitTiXsLNInPeuM/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1_NMD-ziVq8O8hADninitTiXsLNInPeuM&sz=w640-h360`,
    duration: "3:15",
    date: "2024-01-05",
    views: 156,
    likes: 45,
  },
  {
    id: "1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI",
    title: "Event Promotional Video",
    description:
      "High-energy promotional content for special events and community gatherings",
    category: "Events",
    driveUrl:
      "https://drive.google.com/file/d/1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI&sz=w640-h360`,
    duration: "2:00",
    date: "2023-12-28",
    views: 234,
    likes: 56,
  },
  {
    id: "17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72",
    title: "Tutorial & How-to Guide",
    description:
      "Step-by-step tutorial content for audience education and skill development",
    category: "Tutorial",
    driveUrl:
      "https://drive.google.com/file/d/17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72&sz=w640-h360`,
    duration: "4:20",
    date: "2023-12-20",
    views: 312,
    likes: 67,
  },
  {
    id: "1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ",
    title: "Lifestyle Content Creation",
    description:
      "Authentic lifestyle content showcasing daily routines and personal branding strategies",
    category: "Lifestyle",
    driveUrl:
      "https://drive.google.com/file/d/1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ&sz=w640-h360`,
    duration: "1:30",
    date: "2023-12-15",
    views: 178,
    likes: 39,
  },
  {
    id: "12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB",
    title: "Behind the Scenes",
    description:
      "Exclusive behind-the-scenes footage showing the creative process and production workflow",
    category: "Behind Scenes",
    driveUrl:
      "https://drive.google.com/file/d/12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB&sz=w640-h360`,
    duration: "5:45",
    date: "2023-12-10",
    views: 267,
    likes: 78,
  },
  {
    id: "16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv",
    title: "Commercial Advertisement",
    description:
      "Professional commercial content with strong call-to-action messaging and brand positioning",
    category: "Commercial",
    driveUrl:
      "https://drive.google.com/file/d/16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv&sz=w640-h360`,
    duration: "0:30",
    date: "2023-12-05",
    views: 445,
    likes: 89,
  },
  {
    id: "1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH",
    title: "Animation & Motion Graphics",
    description:
      "Creative animation showcasing design skills and advanced visual storytelling techniques",
    category: "Animation",
    driveUrl:
      "https://drive.google.com/file/d/1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH&sz=w640-h360`,
    duration: "3:00",
    date: "2023-11-30",
    views: 198,
    likes: 52,
  },
  {
    id: "1SsgLAjMv408KrTsMFMKh7oODxKSMvC__",
    title: "Client Testimonial",
    description:
      "Authentic client testimonial showcasing successful project outcomes and satisfaction",
    category: "Testimonial",
    driveUrl:
      "https://drive.google.com/file/d/1SsgLAjMv408KrTsMFMKh7oODxKSMvC__/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1SsgLAjMv408KrTsMFMKh7oODxKSMvC__/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1SsgLAjMv408KrTsMFMKh7oODxKSMvC__&sz=w640-h360`,
    duration: "2:15",
    date: "2023-11-25",
    views: 156,
    likes: 34,
  },
  {
    id: "1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g",
    title: "Creative Portfolio Reel",
    description:
      "Comprehensive portfolio showcase highlighting various creative projects and achievements",
    category: "Portfolio",
    driveUrl:
      "https://drive.google.com/file/d/1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g&sz=w640-h360`,
    duration: "1:20",
    date: "2023-11-20",
    views: 289,
    likes: 63,
  },
  {
    id: "1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t",
    title: "Social Media Short",
    description:
      "Short-form content optimized for social media platforms and viral engagement strategies",
    category: "Social Media",
    driveUrl:
      "https://drive.google.com/file/d/1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t/view?usp=drive_link",
    embedUrl:
      "https://drive.google.com/file/d/1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t&sz=w640-h360`,
    duration: "0:15",
    date: "2023-11-15",
    views: 378,
    likes: 94,
  },
];

export default function VideoSection(): React.ReactElement {
  const { theme } = useTheme();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [imageError, setImageError] = useState<Set<string>>(new Set());
  const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());

  const handleImageError = (videoId: string): void => {
    setImageError((prev) => new Set(prev).add(videoId));
  };

  const handleLike = (
    videoId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    setLikedVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      "Social Media": "bg-blue-500",
      "Product Demo": "bg-green-500",
      Corporate: "bg-indigo-500",
      Events: "bg-pink-500",
      Tutorial: "bg-orange-500",
      Lifestyle: "bg-yellow-500",
      "Behind Scenes": "bg-gray-500",
      Commercial: "bg-red-500",
      Animation: "bg-violet-500",
      Testimonial: "bg-teal-500",
      Portfolio: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="videos"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            VIDEO PORTFOLIO
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A collection of professional video content including commercials,
            social media campaigns, tutorials, and creative productions that
            engage audiences and drive meaningful results.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 hover:shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-2xl"
              }`}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                {!imageError.has(video.id) ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => handleImageError(video.id)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <Play
                      className={`w-12 h-12 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
                      video.category
                    )}`}
                  >
                    {video.category}
                  </span>
                </div>

                {/* Duration */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                )}

                {/* Stats Overlay */}
                <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white text-xs">
                  <div className="flex items-center space-x-1 bg-black bg-opacity-50 rounded px-2 py-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`font-semibold text-lg line-clamp-2 flex-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {video.title}
                  </h3>
                  {video.date && (
                    <div className="flex items-center text-xs text-gray-500 ml-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {video.date}
                    </div>
                  )}
                </div>

                <p
                  className={`text-sm line-clamp-2 mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {video.description}
                </p>

                {/* Stats and Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => handleLike(video.id, e)}
                      aria-label={`${likedVideos.has(video.id) ? 'Unlike' : 'Like'} ${video.title}`}
                      className={`flex items-center space-x-1 transition-colors ${
                        likedVideos.has(video.id)
                          ? "text-red-500"
                          : theme === "dark"
                          ? "text-gray-400 hover:text-red-400"
                          : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedVideos.has(video.id) ? "fill-current" : ""
                        }`}
                      />
                      <span className="text-xs">
                        {(video.likes || 0) +
                          (likedVideos.has(video.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">{video.views}</span>
                    </div>
                  </div>

                  <a
                    href={video.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                    title="Open in Google Drive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={`max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`flex justify-between items-center p-4 border-b ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {selectedVideo.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
                        selectedVideo.category
                      )}`}
                    >
                      {selectedVideo.category}
                    </span>
                    {selectedVideo.date && (
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {selectedVideo.date}
                      </span>
                    )}
                    {selectedVideo.duration && (
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {selectedVideo.duration}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className={`text-2xl ml-4 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  title="Close video modal"
                  aria-label="Close video modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.embedUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>

              {/* Video Description */}
              <div className="p-4">
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedVideo.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">
                        {selectedVideo.views} views
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">
                        {selectedVideo.likes} likes
                      </span>
                    </div>
                  </div>

                  <a
                    href={selectedVideo.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on Google Drive</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
