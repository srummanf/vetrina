import React from "react";
import Time from "./Time";
import { alexBrush } from "../app/font";

const HiddenFooter = () => {
  return (
    <footer className="flex  py-4 gap-6 items-center w-full ">
      <div className="w-full lg:w-[55%] items-center flex ">
        <p className={` mt-12 text-xl font-bold italic font-instrument_serif`}>
          Shaikh Rumman Fardeen
        </p>
        {/* <Time /> */}
      </div>
    </footer>
  );
};

export default HiddenFooter;
