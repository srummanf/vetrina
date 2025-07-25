import { cn } from "@/lib/utils";
import React from "react";

const Connect = () => {
  return (
    <>
      <section className="font-CabinetGrotesk_ExtraLight w-full flex flex-col justify-start p-[0.4rem]">
        <div className="flex gap-3 items-center">
          <h1 className={cn("text-lg")}>Connect</h1>
          <div className="underlines bg-[#808080] h-[0.2px] w-full"></div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className={cn("justd-icons w-5 h-5 animate-spin-slower")}
              data-slot="icon"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v3m0 12v3M5.636 5.636l2.122 2.121m8.485 8.486 2.121 2.121M3 12.001h3m12 0h3M5.636 18.364l2.122-2.121m8.485-8.486 2.121-2.121"
              ></path>
            </svg>
          </div>
        </div>
        <p className="mt-5 animate-fade-down animate-delay-[2000ms]">
          So yeah, that's me 𓆩 —
          building, reciting, vibing. Always down for a thoughtful chat or
          complete nonsense. Just depends on the hour.---
          <br />
          <br />
          Reach me with handle <span className="bg-[#2e2e2e]">
            @srummanf
          </span>{" "}
          on internet—whether on{" "}
          <a
            target="_blank"
            className={cn(
              "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
            )}
            rel="noopener"
            href="https://instagram.com/ig.srummanf"
          >
            Instagram
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            className={cn(
              "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
            )}
            rel="noopener"
            href="https://github.com/srummanf"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            className={cn(
              "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
            )}
            rel="noopener"
            href="https://linkedin.com/in/srummanf"
          >
            Linkedin
          </a>
          , etc.
        </p>
      </section>
    </>
  );
};

export default Connect;
