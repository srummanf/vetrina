import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="p-4 pt-2 pb-12 gap-6">
        <div className="flex flex-col gap-12 w-full h-full">
          <div className="p-4">
            <span className="font-Italianno italic text-2xl tracking-wide">
              You have taken a wrong route.
            </span>
            <p className="my-5 font-CabinetGrotesk_Light text-base leading-relaxed text-gray-300">
              Seems like you've wandered into the void — <br />
              the place between thoughts, between pages.
              <br />
              <br />
              This page doesn't exist, much like the meaning Fyodor's unnamed
              man kept chasing or the love that slipped quietly into a Elia's
              couplet.
              <br />
              <br />
              <span className="font-CabinetGrotesk_Medium">
                Let's guide you home, shall we?
              </span>
              <br />
              <br />
              {/* <a
                href="/"
                className="text-[#ddbb90] underline underline-offset-2 hover:text-[#e7cba1]"
              >
                Go back to safety ↩
              </a> */}
              <Link
                href="/"
                className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
              >
                <span
                  className={cn(
                    "text-[#ddbb90] relative inline-block hover-underline hover:text-orange-400 transition-colors"
                  )}
                >
                  Go back to safety ↩
                </span>
              </Link>
              <br />
              <br />
              <br />
              <span className="font-CabinetGrotesk_Thin text-sm">
                this page is a whisper. and it just vanished.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
