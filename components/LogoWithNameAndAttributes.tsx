import { cn } from "@/lib/utils";
import React from "react";

const LogoWithNameAndAttributes = () => {
  return (
    <>
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
              <h2 className="text-base text-foreground">bard</h2>
              <span className="text-[#b56333]">•</span>
              <h2 className="text-base text-foreground">selenophile</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoWithNameAndAttributes;
