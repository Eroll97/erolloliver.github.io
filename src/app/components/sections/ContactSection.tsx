"use client";

import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const { theme } = useTheme();

  const contactMethods = [
    {
      icon: Mail,
      label: "Gmail",
      value: "erolloliver97@gmail.com",
      href: "mailto:erolloliver97@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+63 963 824 9137",
      href: "https://wa.me/639638249137",
      color: "bg-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@eroll_onnn",
      href: "https://www.instagram.com/eroll_onnn",
      color: "bg-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Eroll Oliver",
      href: "https://www.facebook.com/eroll.oliver.98",
      color: "bg-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Eroll Oliver",
      href: "https://www.linkedin.com/in/eroll-oliver-20009b290/",
      color: "bg-blue-700",
    },
  ];

  return (
    <section
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to start your next project? Let&apos;s connect! Choose your
            preferred way to reach out.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 border border-gray-600"
                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-xl"
                }`}
              >
                {/* Icon Background */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className={`p-4 rounded-full ${method.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {method.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {method.value}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 sm:mt-16">
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            I typically respond within 24 hours. Looking forward to hearing from
            you!
          </p>
        </div>
      </div>
    </section>
  );
}
