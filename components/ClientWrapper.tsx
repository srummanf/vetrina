"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Misc from "@/components/Misc";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import ClickSound from "@/components/ClickSound";
import LogoWithNameAndAttributes from "./LogoWithNameAndAttributes";
import NavBar from "./Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMisc, setShowMisc] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const toggleMisc = () => {
    setShowMisc(!showMisc);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ClickSound />
      <div
        className={`w-full min-h-screen flex flex-col items-center justify-between transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
          <NavBar />
          <LogoWithNameAndAttributes />
          {children}
        </main>

        <Footer showMisc={showMisc} toggleMisc={toggleMisc} />

        {/* Hidden Misc Component */}
        <div
          className={`w-full flex justify-center transition-all duration-500 ease-in-out overflow-hidden ${
            showMisc
              ? "max-h-[2000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="animate-in slide-in-from-top-4 w-full lg:w-[55%]">
            <Misc />
          </div>
        </div>
      </div>
    </>
  );
}
