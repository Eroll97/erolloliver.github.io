"use client";

import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("Toggle clicked, current theme:", theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonStar className="h-5 w-5 text-gray-800 dark:text-gray-100" />
      ) : (
        <Sun className="h-5 w-5 text-gray-800 dark:text-gray-100" />
      )}
    </button>
  );
}
