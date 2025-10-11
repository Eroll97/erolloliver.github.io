"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface VideoItem {
  id: string;
  embedUrl: string;
  thumbnail: string;
  click: string;
  // Optional metadata
  wardrobe?: {
    item: string;
    brand?: string;
    source?: string;
  }[];
}

const videos: VideoItem[] = [
  {
    id: "1",
    embedUrl:
      "https://drive.google.com/file/d/1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1y0P5A2Nec1vAcGfwThw5vRifnt6wep8G&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "2",
    embedUrl:
      "https://drive.google.com/file/d/1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1j6bJ_Dytm--NVCPbayl1YGsC4h4IZnhw&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "3",
    embedUrl:
      "https://drive.google.com/file/d/1_NMD-ziVq8O8hADninitTiXsLNInPeuM/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1_NMD-ziVq8O8hADninitTiXsLNInPeuM&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "4",
    embedUrl:
      "https://drive.google.com/file/d/1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1JfCeJXqh2zhhPJlupJfubSOQAB1tT8FI&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "5",
    embedUrl:
      "https://drive.google.com/file/d/17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=17YfTbfk1l0jgUkd2fcqt7q5U6kCoSp72&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "6",
    embedUrl:
      "https://drive.google.com/file/d/1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1rgWdZ92BGTJtWkgSLfDSh4tsYdr8wVgQ&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "7",
    embedUrl:
      "https://drive.google.com/file/d/12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=12qsxzp5rC0lWn-QigozxwJQ5khyTSbcB&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "8",
    embedUrl:
      "https://drive.google.com/file/d/16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=16KZPPr4sK3Jxh8nwQ9zaKBnuHMNPhBfv&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "9",
    embedUrl:
      "https://drive.google.com/file/d/1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1K3NNxYUEgEQONFYppe0a7syk4ff5QSOH&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "10",
    embedUrl:
      "https://drive.google.com/file/d/1SsgLAjMv408KrTsMFMKh7oODxKSMvC__/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1SsgLAjMv408KrTsMFMKh7oODxKSMvC__&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "11",
    embedUrl:
      "https://drive.google.com/file/d/1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1fDfu2unNLchzvlWW1HyW2OzDHNVD7S8g&sz=w640-h360`,
    click: "click video",
  },
  {
    id: "12",
    embedUrl:
      "https://drive.google.com/file/d/1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t/preview",
    thumbnail: `https://drive.google.com/thumbnail?id=1xjt1zDpGG3qwB0qcTSSlgRkBxRddf-7t&sz=w640-h360`,
    click: "click video",
  },
];

export default function VideoSection(): React.ReactElement {
  const { theme } = useTheme();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [imageError, setImageError] = useState<Set<string>>(new Set());

  const handleImageError = (videoId: string): void => {
    setImageError((prev) => new Set(prev).add(videoId));
  };

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="videos"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            SAMPLE VIDEO
          </h2>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A collection of professional video content including commercials,
            social media campaigns, tutorials, and creative productions that
            engage audiences and drive meaningful results.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
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
                    alt={`Video ${video.id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => handleImageError(video.id)}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <Play
                      className={`w-8 h-8 sm:w-12 sm:h-12 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 sm:p-3 mb-1 sm:mb-2">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black" />
                    </div>
                    <p
                      className={`text-xs sm:text-sm stroke font-medium ${
                        theme === "dark" ? "text-gray-100" : "text-white"
                      }`}
                    >
                      {video.click}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className={`fixed inset-0 flex items-center justify-center p-2 sm:p-4 z-50 ${
              theme === "dark"
                ? "bg-black/70 backdrop-blur-sm"
                : "bg-black/60 backdrop-blur-sm"
            }`}
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={`max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-lg sm:rounded-xl `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`flex justify-end items-center p-2 sm:p-4 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className={`p-1 sm:p-2 rounded-full transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  title="Close video modal"
                  aria-label="Close video modal"
                >
                  <X
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.embedUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Video ${selectedVideo.id}`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
