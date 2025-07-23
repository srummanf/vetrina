import React from "react";
import SpotifyNP from "@/components/SpotifyNP";
import HiddenFooter from "./HiddenFooter";

const Misc = () => {
  return (
    <div className="p-4 pt-24 pb-12 gap-6">
      <div className="flex flex-col gap-12 w-full h-full">
        <section className="w-full flex flex-col gap-4 justify-start p-[0.4rem] leading-[1.625rem]">
          <h2>Hello ~</h2>
          <p>
            Lorem ipsum dolor sit . Quos alias, omnis accusantium
            <a>amet consectetur adipisicing elit</a> ~ amet{" "}
            <a>amet consectetur adipisicing elit</a> said{" "}
            <mark> srummanf </mark>
            lorem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            sapiente tenetur facilis ea cupiditate at?
          </p>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        {/* <p className="divider italic">{"/ / / / / / / /"}</p> */}
        <SpotifyNP />
        {/* <p className="divider italic">{"/ / / / / / / /"}</p> */}
        <section className="w-full flex flex-col justify-start p-[0.4rem]">
          <h2 className="mb-8">Find me here ~</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
            <div>
              <p className="mb-2 text-zinc-400 font-semibold">GitHub</p>
              <a href="https://github.com/srummanf">@srummanf</a>
            </div>
            <div>
              <p className="mb-2 text-zinc-400 font-semibold">
                X (formerly Twitter)
              </p>
              <a href="https://x.com/srummanf">@srummanf</a>
            </div>
            <div>
              <p className="mb-2 text-zinc-400 font-semibold">LinkedIn</p>
              <a href="https://www.linkedin.com/in/srummanf/">@srummanf</a>
            </div>
            <div>
              <p className="mb-2 text-zinc-400 font-semibold">Email</p>
              <a href="mailto:rummanfardeen4567@gmail.com">
                rummanfardeen4567@gmail.com
              </a>
            </div>
          </div>
        </section>
        <HiddenFooter/>
      </div>
    </div>
  );
};

export default Misc;