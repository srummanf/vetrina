"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Misc from "@/components/Misc";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showMisc, setShowMisc] = useState(false);

  const toggleMisc = () => {
    setShowMisc(!showMisc);
  };

  return (
    <>
      <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
        <section className="w-full flex gap-4 justify-start mb-6 p-2">
          <div className="flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/68690233?s=100&v=4"
              alt="avatar"
              className="w-12 h-12 rounded-full py-0 shadow-lg grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <div>
              <h2 className="mb-0">srummanf</h2>
            </div>
            <div>
              <p className="mb-0 text-gray-400 font-normal leading-none">
                Student • Dev • Selenophile
              </p>
            </div>
          </div>
        </section>
        {children}
      </main>
      
      <Footer showMisc={showMisc} toggleMisc={toggleMisc} />

      {/* Animated Misc Component */}
      <div
        className={`w-full flex justify-center transition-all duration-500 ease-in-out overflow-hidden ${
          showMisc 
            ? 'max-h-[2000px] opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="animate-in slide-in-from-top-4 w-full lg:w-[55%]">
          <Misc />
        </div>
      </div>
    </>
  );
}