"use client";
import React from "react";
import { useTheme } from "@/app/components/providers/ThemeProvider";
import Image from "next/image";
import PixelTransition from "../ui/PixelTransition";
import ScrollReveal from "../Text-animation/ScrollReveal";
import ScrollFloat from "../Text-animation/ScrollFloat";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.08}
        >
          Learn More About Me
        </ScrollFloat>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={10}
              blurStrength={15}
            >
              Hi, I&apos;m Eroll Oliver — a passionate developer, loving
              husband, and proud father. With deep expertise in WordPress and
              GoHighLevel, I create websites that are not only visually striking
              but also optimized for performance and user experience.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={10}
              blurStrength={15}
            >
              Whether it&apos;s a sleek portfolio or a powerful e-commerce
              platform, I make sure your site looks amazing and works
              flawlessly. Beyond web development, I bring a versatile skill set
              to support your business operations. together.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={10}
              blurStrength={15}
            >
              I offer precise bookkeeping, compelling copywriting, and strategic
              SEO to improve your online visibility. I also specialize in social
              media management (SMM) to help your brand grow, and provide
              virtual assistant (V.A.) services to streamline your tasks and
              projects. But more than just a developer, I’m a family man. My
              wife and son are my biggest inspirations — they keep me grounded
              and constantly push me to strive for excellence in everything I
              do.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={1}
              enableBlur={true}
              baseRotation={10}
              blurStrength={15}
            >
              They remind me why I do what I do: to build a future that reflects
              hard work, creativity, and purpose. What sets me apart is my drive
              for innovation and continuous improvement. I embrace challenges
              and always aim to push boundaries to deliver outstanding results.
              Let&apos;s connect and explore how we can elevate your business to
              new heights — together.
            </ScrollReveal>
          </div>
          {/* Image section with PixelTransition */}
          <div className="flex justify-center">
            <PixelTransition
              firstContent={
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-[15px] relative">
                  <Image
                    src="/assets/eroll-girlie.jpeg"
                    alt="Eroll Oliver - Full Stack Developer"
                    fill
                    className="object-cover rounded-[13px]"
                    onError={() => {
                      console.log("Image failed to load");
                    }}
                  />
                  {/* Fallback content - only shows if image fails */}
                  <div className="absolute inset-0 flex items-center justify-center text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-[13px] opacity-0 [&.show]:opacity-100">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-10 h-10"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <p className="font-semibold">Eroll Oliver</p>
                      <p className="text-sm opacity-80">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              }
              secondContent={
                <div
                  className={`w-full h-full flex items-center justify-center p-8 rounded-[15px] ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
                      : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
                  }`}
                >
                  <div className="text-center space-y-6">
                    <div className="space-y-2">
                      <Image
                        src="/assets/etan.jpeg"
                        alt="Eroll Oliver - Full Stack Developer"
                        fill
                        className="object-cover rounded-[13px]"
                        onError={() => {
                          console.log("Image failed to load");
                        }}
                      />
                    </div>
                  </div>
                </div>
              }
              gridSize={15}
              animationStepDuration={0.4}
              className="w-full max-w-md mx-auto"
              aspectRatio="100%"
              pixelColor={theme === "dark" ? "#ffffff" : "#ffffff"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
