"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import {
  ExternalLink,
  Heart,
  Eye,
  Download,
  Share2,
  Calendar,
  Tag,
  Palette,
} from "lucide-react";

export interface GraphicDesign {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  alt: string;
  date?: string;
  tags?: string[];
  likes?: number;
  views?: number;
  downloadUrl?: string;
  externalUrl?: string;
  status?: "featured" | "new" | "popular" | "default";
  tools?: string[];
}

interface GraphicDesignShowcaseProps {
  design: GraphicDesign;
  onClick?: (design: GraphicDesign) => void;
  onLike?: (id: number) => void;
  onShare?: (id: number) => void;
  className?: string;
}

export default function GraphicDesignShowcase({
  design,
  onClick,
  onLike,
  onShare,
  className = "",
}: GraphicDesignShowcaseProps) {
  const { theme } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    onLike?.(design.id);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onShare?.(design.id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "featured":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "new":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white";
      case "popular":
        return "bg-gradient-to-r from-orange-500 to-red-500 text-white";
      default:
        return theme === "dark"
          ? "bg-gray-700 text-gray-300"
          : "bg-gray-200 text-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "logo-design": "bg-blue-500",
      branding: "bg-purple-500",
      "poster-design": "bg-pink-500",
      illustration: "bg-yellow-500",
      "ui-design": "bg-indigo-500",
      "print-design": "bg-green-500",
    };
    return (
      colors[category.toLowerCase() as keyof typeof colors] || "bg-gray-500"
    );
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
        theme === "dark"
          ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50"
          : "bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl"
      } ${className}`}
      onClick={() => onClick?.(design)}
    >
      {/* Status Badge */}
      {design.status !== "default" && (
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
              design.status || "default"
            )}`}
          >
            {design.status ? design.status.charAt(0).toUpperCase() + design.status.slice(1) : ''}
          </span>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-20">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(
            design.category
          )}`}
        >
          <Palette size={10} className="inline mr-1" />
          {design.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageError ? (
          <Image
            src={design.image}
            alt={design.alt}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <div className="text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                }`}
              >
                <Palette
                  className={`w-8 h-8 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </div>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Design not available
              </p>
            </div>
          </div>
        )}

        {/* Loading Skeleton */}
        {!imageLoaded && !imageError && (
          <div
            className={`absolute inset-0 animate-pulse ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white">
              <Eye size={16} />
              <span className="text-sm">{design.views || 0}</span>
            </div>
            <div className="flex items-center space-x-2">
              {design.downloadUrl && (
                <a
                  href={design.downloadUrl}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={16} className="text-white" />
                </a>
              )}
              {design.externalUrl && (
                <a
                  href={design.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Date */}
        <div className="flex justify-between items-start">
          <h3
            className={`font-semibold text-lg leading-tight line-clamp-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {design.title}
          </h3>
          {design.date && (
            <div className="flex items-center text-xs text-gray-500 ml-2">
              <Calendar size={12} className="mr-1" />
              {design.date}
            </div>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed line-clamp-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {design.description}
        </p>

        {/* Tags */}
        {design.tags && design.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {design.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
            {design.tags.length > 3 && (
              <span
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${
                  theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                +{design.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 transition-colors ${
              isLiked
                ? "text-red-500"
                : theme === "dark"
                ? "text-gray-400 hover:text-red-400"
                : "text-gray-500 hover:text-red-500"
            }`}
          >
            <Heart size={16} className={isLiked ? "fill-current" : ""} />
            <span className="text-sm">
              {(design.likes || 0) + (isLiked ? 1 : 0)}
            </span>
          </button>

          <button
            onClick={handleShare}
            aria-label="Share design"
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "hover:bg-gray-700 text-gray-400 hover:text-white"
                : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Export types for use in other components
export type { GraphicDesignShowcaseProps };
