"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Misc from "@/components/Misc";
import Header from "./Header";
import LoadingScreen from "./LoadingScreen";
import ClickSound from "@/components/ClickSound";
import { cn } from "@/lib/utils";

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
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
          <Header />
          <section className="w-full flex gap-4 justify-start mb-6 p-2">
            <div className="flex items-center justify-center">
              <img
                src="/images/srummanf.jpg"
                alt="avatar"
                className="w-12 h-12 scale-110 object-cover rounded-full py-0 shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <div>
                <h2
                  className={cn(
                    "mb-0 text-[2.5rem] font-serif tracking-tight text-primary font-instrument_serif"
                  )}
                >
                  Shaikh Rumman Fardeen
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-medium tracking-tight">
                  <h2 className="text-base text-foreground">developer</h2>
                  <span className="text-[#b56333]">•</span>
                  <h2 className="text-base text-foreground">designer</h2>
                  <span className="text-[#b56333]">•</span>
                  <h2 className="text-base text-foreground">selenophile</h2>
                </div>
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




// 

// "use client";
// import { useState } from "react";
// import Footer from "@/components/Footer";
// import Misc from "@/components/Misc";
// import Header from "@/components/Header";
// import LoadingScreen from "@/components/LoadingScreen";
// import { cn } from "@/lib/utils";

// export default function ClientWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [showMisc, setShowMisc] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);


//   const toggleMisc = () => {
//     setShowMisc(!showMisc);
//   };

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//     // Small delay before showing content for smooth transition
//     setTimeout(() => {
//       setShowContent(true);
//     }, 100);
//   };

//   return (
//     <>
//       <main className="p-4 py-24 gap-6 w-full lg:w-[55%]">
//         <Header />
//         <section className="w-full flex gap-4 justify-start mb-6 p-2">
//           <div className="flex items-center justify-center">
//             <img
//               src="https://avatars.githubusercontent.com/u/68690233?s=100&v=4"
//               alt="avatar"
//               className="w-12 h-12 rounded-full py-0 shadow-lg grayscale hover:grayscale-0 duration-300"
//             />
//           </div>
//           <div className="flex flex-col gap-2 justify-end">
//             <div>
//               <h2
//                 className={cn(
//                   "mb-0 text-[2.5rem] font-serif tracking-tight text-primary font-instrument_serif"
//                 )}
//               >
//                 Shaikh Rumman Fardeen
//               </h2>
//             </div>
//             <div>
//               <div className="flex items-center gap-1.5 font-medium tracking-tight">
//                 <h2 className="text-base text-foreground">developer</h2>
//                 <span className="text-foreground/50">•</span>
//                 <h2 className="text-base text-foreground">designer</h2>
//                 <span className="text-foreground/50">•</span>
//                 <h2 className="text-base text-foreground">selenophile</h2>
//               </div>
//               {/* <p className="mb-0 text-gray-400 font-normal leading-none">
//                 developer • designer • selenophile
//               </p> */}
//             </div>
//           </div>
//         </section>
//         {children}
//       </main>

//       <Footer showMisc={showMisc} toggleMisc={toggleMisc} />

//       {/* Animated Misc Component */}
//       <div
//         className={`w-full flex justify-center transition-all duration-500 ease-in-out overflow-hidden ${
//           showMisc
//             ? "max-h-[2000px] opacity-100 translate-y-0"
//             : "max-h-0 opacity-0 -translate-y-4"
//         }`}
//       >
//         <div className="animate-in slide-in-from-top-4 w-full lg:w-[55%]">
//           <Misc />
//         </div>
//       </div>
//     </>
//   );
// }