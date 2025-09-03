"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "eroll.oliver@example.com",
      href: "mailto:eroll.oliver@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/eroll-oliver",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/eroll-oliver",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://erolloliver.dev",
    },
  ];

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
      }`}
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const content = (
                    <div
                      className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-white hover:bg-gray-100"
                      } ${item.href ? "cursor-pointer" : ""}`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          theme === "dark" ? "bg-blue-600" : "bg-blue-100"
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${
                            theme === "dark" ? "text-white" : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a key={index} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                        theme === "dark"
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white"
                          : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                      }`}
                      title={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-xl ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-400"
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-400"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className={`absolute left-3 top-3 w-5 h-5 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-400"
                    }`}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
              </div>

              {/* Status Message */}
              {status.type !== "idle" && (
                <div
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === "success"
                      ? theme === "dark"
                        ? "bg-green-900/20 border border-green-500/20"
                        : "bg-green-50 border border-green-200"
                      : status.type === "error"
                      ? theme === "dark"
                        ? "bg-red-900/20 border border-red-500/20"
                        : "bg-red-50 border border-red-200"
                      : theme === "dark"
                      ? "bg-blue-900/20 border border-blue-500/20"
                      : "bg-blue-50 border border-blue-200"
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {status.type === "error" && (
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  )}
                  {status.type === "loading" && (
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  )}
                  <p
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-600 dark:text-green-400"
                        : status.type === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {status.message}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  status.type === "loading"
                    ? theme === "dark"
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
              >
                {status.type === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
