"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingFinished, setLoadingFinished] = useState(false);

  const greetings = [
  "✦⟡ Hello ⟡✦",
  "✦⟡ Ciao ⟡✦",
  "✦⟡ हेल्लो ⟡✦",        
  "✦⟡ Hola ⟡✦",
  "✦⟡ السلام عليكم ⟡✦",
  "✦⟡ Bonjour ⟡✦",
  "✦⟡ سلام ⟡✦",         
  "✦⟡ Konnichiwa ⟡✦",   
  "✦⟡ Merhaba ⟡✦",
];


  const greetingSpeeds = [500, 150, 150, 150, 150, 150, 150, 150, 150];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let totalTime = 0;

    greetingSpeeds.forEach((speed, index) => {
      totalTime += speed;
      const t = setTimeout(() => {
        setCurrentGreeting(index);

        if (index === greetings.length - 1) {
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              setLoadingFinished(true);
              onLoadingComplete();
            }, 500); // Curtain slide duration
          }, 500); // Last greeting duration
        }
      }, totalTime);

      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!loadingFinished && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isVisible ? 0 : "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0e0e]"
        >
          {currentGreeting === 0 ? (
            <motion.h1
              key={currentGreeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-6xl md:text-8xl font-bold font-instrument_serif"
            >
              {greetings[currentGreeting]}
            </motion.h1>
          ) : (
            <h1 className="text-white text-6xl md:text-8xl font-bold font-instrument_serif">
              {greetings[currentGreeting]}
            </h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';

// interface LoadingScreenProps {
//   onLoadingComplete: () => void;
// }

// export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
//   const [currentGreeting, setCurrentGreeting] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const greetings = [
//     "Hello",
//     "Ciao",
//     "Salve",
//     "Hola",
//     "السلام عليكم",
//     "Merhaba",
//   ];

//   useEffect(() => {
//     // Start showing greetings after 0.6 seconds
//     const initialDelay = setTimeout(() => {
//       setIsVisible(true);
//     }, 600);

//     // Cycle through greetings
//     const interval = setInterval(() => {
//       setCurrentGreeting((prev) => {
//         const next = (prev + 1) % greetings.length;

//         // If we've completed all greetings, start fade out after a short delay
//         if (next === 0) {
//           setTimeout(() => {
//             setIsVisible(false);
//             // Complete loading after fade out animation
//             setTimeout(() => {
//               onLoadingComplete();
//             }, 500);
//           }, 800); // Show last greeting for a bit longer
//         }

//         return next;
//       });
//     }, 200); // Change greeting every 0.8 seconds

//     return () => {
//       clearTimeout(initialDelay);
//       clearInterval(interval);
//     };
//   }, [onLoadingComplete, greetings.length]);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
//       style={{ backgroundColor: '#0d0e0e' }}
//     >
//       <div
//         className={`text-6xl md:text-8xl font-bold text-white transition-all duration-500 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//         }`}
//       >
//         {greetings[currentGreeting]}
//       </div>
//     </div>
//   );
// }
