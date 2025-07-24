"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { shayariData, Shayari } from "@/data/shayari";
import clsx from "clsx";

// Utility to pick N random elements from an array
const getRandomShayaris = (data: Shayari[], count: number) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function ShayariBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const [selectedShayari, setSelectedShayari] = useState<Shayari[]>([]);

  useEffect(() => {
    const random = getRandomShayaris(shayariData, 2);
    setSelectedShayari(random);
    console.log("Selected Shayari:", random);
  }, []);

  return (
    <div className="pl-4">
      <div>
        <span className="italic text-2xl tracking-wide font-instrument_serif">
          Here's my aoidion — quiet, but it lingers.
        </span>
      </div>
      <div className="w-full h-full space-y-6 mt-10" ref={ref}>
        {selectedShayari.map((shayari, index) => (
          <motion.div
            className="relative h-52 border border-stone-800/90 p-3 rounded-lg flex justify-between gap-4 group"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 130,
              damping: 9,
            }}
          >
            {/* Content Div */}
            <div className="w-[60%] flex flex-col gap-2 items-start justify-between">
              <p
                className={clsx(
                  "mb-0 leading-none text-sm",
                  shayari?.poet_name ? "text-orange-400" : "text-zinc-500"
                )}
              >
                {shayari?.poet_name ? "Contemplating on" : "Last played"}
              </p>
              <p className="mb-0 leading-none whitespace-pre-line">
                <a
                  href={shayari?.poet_name || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  {shayari?.poem_couplet}
                  {" // // ~ "} {shayari?.poet_name} {" 𓂃"}
                </a>
              </p>
            </div>

            {/* Decorative Image in Bottom Right */}
            {/* <img
              src="/images/bottom-right.png"
              alt="decorative"
              className="absolute bottom-0 right-0 w-16 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
            /> */}
            <p className="absolute bottom-0 right-0 w-8 pb-2 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out text-orange-400">𖤐 </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Old Component

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { shayariData, Shayari } from "@/data/shayari";

// // Utility to pick N random elements from an array
// const getRandomShayaris = (data: Shayari[], count: number) => {
//   const shuffled = [...data].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

// export default function ShayariBlock() {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { once: true });

//   const [selectedShayari, setSelectedShayari] = useState<Shayari[]>([]);

//   useEffect(() => {
//     const random = getRandomShayaris(shayariData, 2);
//     setSelectedShayari(random);
//   }, []);

//   return (
//     <div className="pl-4">
//       <div>
//         <span className="italic text-2xl tracking-wide font-instrument_serif">
//           Here's my aoidion — quiet, but it lingers.
//         </span>
//       </div>
//       <div className="w-full h-full space-y-6 mt-10" ref={ref}>
//         {selectedShayari.map((shayari, index) => (
//           <motion.div
//             key={index}
//             className="border border-stone-800/90 p-4 flex flex-col gap-3"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 120,
//               damping: 10,
//             }}
//           >
//             <p className="text-white leading-relaxed whitespace-pre-line text-[0.8rem]">
//               {shayari.poem_couplet}
//             </p>
//             <p className="text-[#747474] text-xs font-CabinetGrotesk_Thin">
//               — {shayari.poet_name}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
