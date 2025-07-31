/**
 * SpotifyNP Component - Now Playing Display
 * 
 * Note: This component is using SWR library which uses cached state.
 * When the external API returns errors, SWR would serve stale cached data instead 
 * of falling back to the fallback data, making it appear as if the API was working
 * when it was actually returning errors. This version uses vanilla fetch with 
 * no-cache headers to ensure real-time API status.
 * 
 */

// /* eslint-disable @next/next/no-img-element */
// "use client";

// import useSWR from "swr";
// import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import clsx from "clsx";

// type Song = {
//   song_name: string;
//   artists: string;
//   album_name: string;
//   album_image: string;
//   spotify_url: string;
//   playing: boolean;
// };

// // This works in a fashion that if the played song is the same as this fallback song, it will display "Stuck in mind" instead of "Jamming to" or "Last played".
// const fallbackData: Song = {
//   playing: true,
//   song_name: "back to friends",
//   artists: "sombr",
//   album_image:
//     "https://i.scdn.co/image/ab67616d0000b2739d24f74c1e2d8a12b1e591ec",
//   album_name: "back to friends",
//   spotify_url: "https://open.spotify.com/track/0FTmksd2dxiE5e3rWyJXs6",
// };

// const fetcher = async (url: string): Promise<Song> => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     // console.log("Fetched Music data:", data);
//     return data;
//   } catch (err) {
//     console.warn("Falling back to default song due to error:", err);
//     return fallbackData;
//   }
// };

// export default function SpotifyNP() {
//   const { data, error } = useSWR<Song>("/api/np", fetcher, {
//     refreshInterval: 10000,
//   });

//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, {
//     once: true,
//   });

//   return (
//     <>
//       <div className="w-full h-full" ref={ref}>
//         <motion.div
//           className="border border-stone-800/90 p-3 rounded-lg flex flex-row-reverse justify-between"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
//           transition={{
//             duration: 0.4,
//             type: "spring",
//             stiffness: 130,
//             damping: 9,
//           }}
//         >
//           <div className="w-20 h-20">
//             <img
//               src={data?.album_image}
//               alt="cover-image"
//               className="object-fit rounded-lg shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
//             />
//           </div>
//           <div className="flex flex-col gap-2 h-20 items-start justify-between">
//             <p
//               className={clsx(
//                 "mb-0 leading-none text-sm flex items-center gap-1",
//                 data?.song_name === fallbackData.song_name
//                   ? "text-rose-500"
//                   : data?.playing
//                   ? "text-emerald-500"
//                   : "text-zinc-500"
//               )}
//             >
//               {data?.song_name === fallbackData.song_name ? (
//                 <>
//                   <span className="text-[#ea0000]">Stuck in mind</span>
//                 </>
//               ) : data?.playing ? (
//                 "Jamming to"
//               ) : (
//                 "Last played"
//               )}
//             </p>

//             <p className="mb-0 leading-none">
//               <a
//                 href={data?.spotify_url || "#"}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="no-underline"
//               >
//                 {data?.song_name}
//                 {" // "} {data?.artists}
//               </a>
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// -----------------------------------------------------------------------------------------------------------------------------------

// CODE with no fallback state.

/* eslint-disable @next/next/no-img-element */
"use client";

import useSWR from "swr";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Song = {
  song_name: string;
  artists: string;
  album_name: string;
  album_image: string;
  spotify_url: string;
  playing: boolean;
};

export default function SpotifyNP() {
  const { data, error } = useSWR<Song>("/api/np", fetcher, {
    refreshInterval: 10000,
  });

  if (error) {
    console.error(error);
  }
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  // if (!data) {
  //   return (
  //     <div className="w-full bg-stone-800/90 flex items-center justify-center z-50 animate-pulse"></div>
  //   );
  // }

  return (
    <div className="w-full h-full" ref={ref}>
      <motion.div
        className="border border-stone-800/90 p-3 rounded-lg flex flex-row-reverse justify-between"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 130,
          damping: 9,
        }}
      >
        <div className="w-20 h-20">
          <img
            src={data?.album_image}
            alt="cover-image"
            className="object-fit rounded-lg shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
          />
        </div>
        <div className="flex flex-col gap-2 h-20 items-start justify-between">
          <p
            className={clsx(
              "mb-0 leading-none text-sm",
              data?.playing ? "text-emerald-500" : "text-zinc-500"
            )}
          >
            {data?.playing ? "Jamming to" : "Last played"}
          </p>
          <p className="mb-0 leading-none">
            <a
              href={data?.spotify_url || "#"}
              target="_blank"
              rel="norefferer"
              className="no-underline"
            >
              {data?.song_name}
              {" // "} {data?.artists}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
