/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

type Song = {
  song_name: string;
  artists: string;
  album_name: string;
  album_image: string;
  spotify_url: string;
  playing: boolean;
};

// Fallback data in case the API fails or returns an error
// This should be a song that you like or is relevant to your profile

const fallbackData: Song = {
  playing: true,
  song_name: "back to friends",
  artists: "sombr",
  album_image:
    "https://i.scdn.co/image/ab67616d0000b2739d24f74c1e2d8a12b1e591ec",
  album_name: "back to friends",
  spotify_url: "https://open.spotify.com/track/0FTmksd2dxiE5e3rWyJXs6",
};

export default function SpotifyNP2() {
  const [data, setData] = useState<Song>(fallbackData);
  const [loading, setLoading] = useState(true);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
  });

  const fetchData = async () => {
    // console.log("🔄 Fetching data at:", new Date().toISOString());

    try {
      const res = await fetch("/api/np", {
        cache: "no-store", // Disable caching completely
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      // console.log("📡 Response Status:", res.status);
      // console.log("📡 Response OK:", res.ok);

      if (!res.ok) {
        console.warn("❌ API returned error status, using fallback data");
        setData(fallbackData);
        return;
      }

      const result = await res.json();
      // console.log("📋 Raw API response:", JSON.stringify(result, null, 2));

      // Check if the response contains an error
      if (result.error) {
        console.warn("❌ API returned error in JSON:", result.error);
        setData(fallbackData);
        return;
      }

      // console.log("✅ Setting real data");
      setData(result);
    } catch (err) {
      console.warn("💥 Fetch error:", err);
      setData(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Refresh every 10 seconds
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
              src={data.album_image}
              alt="cover-image"
              className="object-fit rounded-lg shadow-lg grayscale hover:grayscale-0 duration-300 ease-in"
            />
          </div>
          <div className="flex flex-col gap-2 h-20 items-start justify-between">
            <p
              className={clsx(
                "mb-0 leading-none text-sm flex items-center gap-1",
                data.song_name === fallbackData.song_name
                  ? "text-rose-500"
                  : data.playing
                  ? "text-emerald-500"
                  : "text-zinc-500"
              )}
            >
              {data.song_name === fallbackData.song_name ? (
                <>
                  <span className="text-[#ea0000]">Stuck in mind</span>
                </>
              ) : data.playing ? (
                "Jamming to"
              ) : (
                "Last played"
              )}
            </p>

            <p className="mb-0 leading-none">
              <a
                href={data.spotify_url || "#"}
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                {data.song_name}
                {" // "} {data.album_name}
                {" // "} {data.artists}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
