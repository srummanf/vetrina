"use client";
import { useEffect, useState } from "react";

const SlashDivider = () => {
  const [divider, setDivider] = useState("");

  useEffect(() => {
    const generateDivider = () => {
      const screenWidth = window.innerWidth;
      const charWidth = 10; // approx width of "/ " in px (adjust as needed for your font)
      const count = Math.floor(screenWidth / charWidth);
      const slashString = Array(count).fill("/").join(" ");
      setDivider(slashString);
    };

    generateDivider();
    window.addEventListener("resize", generateDivider);
    return () => window.removeEventListener("resize", generateDivider);
  }, []);

  return (
    <p className="divider italic w-full text-nowrap overflow-hidden text-sm md:text-base lg:text-lg">
      {divider}
    </p>
  );
};

export default SlashDivider;
