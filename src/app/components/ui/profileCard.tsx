"use client";

import React from "react";
import { useTheme } from "../providers/ThemeProvider";
import Image from "next/image";

interface ProfileCardProps {
  avatarUrl: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name = "John Doe",
  title = "Developer",
  handle = "johndoe",
  status = "Available",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <div className={`group perspective-1000 ${className}`}>
      <div
        className={`
          relative w-80 h-96 rounded-3xl overflow-hidden cursor-pointer
          transition-all duration-300 ease-out transform-gpu
          shadow-xl hover:shadow-2xl
          ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700"
              : "bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200"
          }
        `}
      >
        {/* Animated background overlay */}
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${
              theme === "dark"
                ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            }
          `}
        />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 scale-150 translate-x-full group-hover:translate-x-[-100%] transition-all duration-1000 ease-in-out" />

        {/* Main content */}
        <div className="relative h-full flex flex-col">
          {/* Avatar section */}
          <div className="flex-1 flex items-center justify-center p-6">
            <div
              className={`
              relative w-32 overflow-hidden
              ${
                theme === "dark"
                  ? "ring-4 ring-gray-600"
                  : "ring-4 ring-gray-300"
              }
              transition-all duration-300 group-hover:scale-110
            `}
            >
              <Image
                src={avatarUrl}
                alt={`${name} avatar`}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    name || "User"
                  )}&size=128&background=6366f1&color=fff`;
                }}
              />
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
          </div>

          {/* Text content */}
          <div className="px-6 pb-6 text-center">
            <h3
              className={`
              text-2xl font-bold mb-2 transition-colors duration-300
              ${
                theme === "dark"
                  ? "text-white group-hover:text-blue-300"
                  : "text-gray-900 group-hover:text-blue-600"
              }
            `}
            >
              {name}
            </h3>
            <p
              className={`
              text-lg mb-4 transition-colors duration-300
              ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
            `}
            >
              {title}
            </p>
          </div>

          {/* User info bar */}
          {showUserInfo && (
            <div
              className={`
              absolute bottom-4 left-4 right-4 
              ${
                theme === "dark"
                  ? "bg-gray-800/80 border-gray-600"
                  : "bg-white/80 border-gray-200"
              }
              backdrop-blur-sm border rounded-2xl p-3
              transition-all duration-300 group-hover:scale-105
            `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={avatarUrl}
                      alt={`${name} mini avatar`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div
                      className={`
                      text-sm font-medium
                      ${theme === "dark" ? "text-white" : "text-gray-900"}
                    `}
                    >
                      @{handle}
                    </div>
                    <div
                      className={`
                      text-xs
                      ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
                    `}
                    >
                      {status}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onContactClick}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-blue-500 hover:bg-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                    }
                    transform hover:scale-105 active:scale-95
                  `}
                >
                  {contactText}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Glow effect on hover */}
        <div
          className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${
            theme === "dark"
              ? "shadow-2xl shadow-blue-500/20"
              : "shadow-2xl shadow-blue-500/10"
          }
        `}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
