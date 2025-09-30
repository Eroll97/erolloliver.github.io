"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/components/providers/ThemeProvider";

export interface GraphicDesign {
  id: number;
  click: string;
  image: string;
}

interface GraphicDesignShowcaseProps {
  design: GraphicDesign;
  onClick?: (design: GraphicDesign) => void;
  className?: string;
}

export default function GraphicDesignShowcase({
  design,
  onClick,
  className = "",
}: GraphicDesignShowcaseProps) {
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden  transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
        theme === "dark"
          ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50"
          : "bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl"
      } ${className}`}
      onClick={() => onClick?.(design)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageError ? (
          <Image
            src={design.image}
            alt={design.click}
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
                className={`w-16 h-16 flex items-center justify-center mx-auto mb-2 ${
                  theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                }`}
              >
                <svg
                  className={`w-8 h-8 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
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
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg leading-tight">
              {design.click}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { GraphicDesignShowcaseProps };
