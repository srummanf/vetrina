import React from "react";
import Time from "./Time";
import { alexBrush } from "../app/font";
import Link from "next/link"; // Assuming you're using Next.js

const HiddenFooter = () => {
  return (
    <footer className="mt-10 flex py-4 gap-6 items-center w-full">
      <div className="w-full flex items-center justify-between">
        <p className="mt-12 text-xl font-bold italic font-instrument_serif">
          Shaikh Rumman Fardeen
        </p>

        {/* GitHub Link aligned to end */}
        <Link
          href="https://github.com/srummanf/your-repo-name"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 text-xs text-gray-400 hover:underline tracking-widest opacity-30 hover:opacity-100 transition-opacity duration-300"
        >
          View Source Code
        </Link>
      </div>
    </footer>
  );
};

export default HiddenFooter;
