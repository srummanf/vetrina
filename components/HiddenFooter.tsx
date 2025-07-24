import React from "react";
import Time from "./Time";
import { alexBrush } from "../app/font";
import Link from "next/link"; // Assuming you're using Next.js

const HiddenFooter = () => {
  return (
    <footer className="flex py-4 gap-6 items-center w-full">
      <div className="w-full p-4 flex items-center justify-between">
        <p className="mt-12 pl-2 text-xl font-bold italic font-instrument_serif">
          <Link
            href="https://github.com/srummanf/vetrina/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            𓂃  Shaikh Rumman Fardeen   𓂃
          </Link>
        </p>

        {/* GitHub Link aligned to end */}
        {/* <Link
          href="https://github.com/srummanf/your-repo-name"
          target="_blank"
          rel="noopener noreferrer"
          className="font-CabinetGrotesk_Thin font-semibold mt-12 text-xs text-[#ffffff] hover:underline tracking-widest opacity-20 hover:opacity-100 transition-opacity duration-300"
        >
          View Source Code
        </Link> */}

      </div>
    </footer>
  );
};

export default HiddenFooter;
