"use client";
import Time from "./Time";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  showMisc: boolean;
  toggleMisc: () => void;
}

export default function Footer({ showMisc, toggleMisc }: FooterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentYear = new Date().getFullYear();
  
  const motivationalTexts = [
  "Chase the feeling",
  "Write your myth",
  "Romance the unknown",
  "Risk the fall",
  "Feel, then create",
  "Stay wildly curious",
  "Fear means forward",
  "Make meaning daily",
  "Love your chaos",
  "Whisper to fate",
  "Dare with grace",
  "Code like poetry",
  "Speak your fire",
  "Rebuild, then rise",
  "Softness is strength",
  "Live like letters",
  "Wound into wonder",
  "Think, feel, repeat",
  "Truth takes time",
  "Keep the ache",
];


  // Pick random motivational text on component mount
  const [selectedMotivationalText] = useState(() => {
    return motivationalTexts[Math.floor(Math.random() * motivationalTexts.length)];
  });
  
  const rotatingTexts = [
    selectedMotivationalText,
    `© ${currentYear}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000); // Change text every n seconds

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <footer className="flex px-4 py-4 justify-center gap-6 items-center w-full border-y border-stone-800/90">
      <div className="w-full lg:w-[55%] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="relative h-5 flex items-center w-full sm:w-auto justify-center sm:justify-start mb-2 sm:mb-0">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
              className="leading-none m-0 absolute left-0 right-0 whitespace-nowrap text-center sm:text-left"
            >
              {rotatingTexts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-center mb-2 sm:mb-0">
          <Time />
        </div>
        {/* Toggle Button */}
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-end">
          <button
            onClick={toggleMisc}
            className="p-2 hover:cursor-pointer rounded-full transition-colors duration-200 focus:outline-none group"
            aria-label={showMisc ? "Hide content" : "Show content"}
          >
            {showMisc ? (
              // SVG 1: When active
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="justd-icons size-4 cursor-pointer"
                data-slot="icon"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8 6.25C8 5.56 8.56 5 9.25 5h8.5c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 1 1-2.5 0V9.268l-9.366 9.366a1.25 1.25 0 0 1-1.768-1.768L14.732 7.5H9.25C8.56 7.5 8 6.94 8 6.25"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // SVG 2: When inactive
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="justd-icons size-4 animate-pulse cursor-pointer"
                data-slot="icon"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M18.634 5.366a1.25 1.25 0 0 0-1.768 0L7.5 14.732V9.25a1.25 1.25 0 1 0-2.5 0v8.5c0 .69.56 1.25 1.25 1.25h8.5a1.25 1.25 0 1 0 0-2.5H9.268l9.366-9.366a1.25 1.25 0 0 0 0-1.768"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}