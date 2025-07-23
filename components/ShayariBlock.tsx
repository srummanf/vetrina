"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { shayariData, Shayari } from "@/data/shayari";

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
  }, []);

  return (
    <div className="w-full h-full space-y-6" ref={ref}>
      {selectedShayari.map((shayari, index) => (
        <motion.div
          key={index}
          className="border border-stone-800/90 p-4 rounded-lg flex flex-col gap-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        >
          <p className="text-zinc-400 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
            {shayari.poem_couplet}
          </p>
          <p className="text-[#747474] text-xs md:text-sm tracking-wider uppercase font-semibold">
            — {shayari.poet_name}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
