"use client";

import CircularGallery from "../animated-component/CircularGallery";
import { useTheme } from "../providers/ThemeProvider";

export default function Gallery() {
  const { theme } = useTheme();

  return (
    <div
      className={`transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
      style={{
        height: "clamp(400px, 50vh, 600px)",
        minHeight: "350px",
        position: "relative",
      }}
    >
      <CircularGallery bend={3} borderRadius={0.05} scrollEase={0.02} />
    </div>
  );
}
