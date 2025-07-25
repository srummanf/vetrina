"use client";

import React from "react";
import Subheader from "@/components/Subheader";
import { location } from "@/data/location";

const page = () => {
  return (
    <>
      <Subheader />
      <div className="p-4 pt-2 pb-12 gap-6">
        <div className="flex flex-col gap-12 w-full h-full">
          <div className="p-4">
            <span className="font-Italianno italic text-2xl tracking-wide">
              Well, looks like we have a friend here.
            </span>
            <p className="my-5 font-CabinetGrotesk_Light text-base leading-relaxed text-gray-300">
              I'm currently in{" "}
              {/* <span className="font-CabinetGrotesk_Medium"> */}
              {location.city}
              {/* </span> */},{" "}
              <span className="uppercase tracking-wider">
                {location.country_code}
              </span>
              . That's where the sun hits the soul right!
              <br />
              I'm someone who revels in the minds of Fyodor, Kafka, and Camus —
              drawn to existential depths — yet hopelessly romantic, often found
              reciting Urdu poetry under my breath. You get the picture: an
              ambivert with layers, my friend.
              <br />
              <br />
              Ideally, we'd meet over a slow coffee in a quiet café — or maybe
              at a Chinese joint serving proper halal. But let's be honest…
              nothing beats bonding over a Biryani ⊹ Raita ⊹ Coke combo. (Yes
              yes — Diet Coke with a 1000-calorie plate. Hypocrisy tastes good.)
              <br />
              <br />
              Am I always free? <span className="italic">Ha! </span> Not quite.
              But if you're my friend, or maybe my{" "}
              <span className="italic">amore</span> — I will **definitely** find
              a way.
              <br />
              Text me. Call me. You probably have my number if you know me.
              <br />
              <br />
              <br />
              <br />
              <span className="font-Italianno text-2xl text-[#b56333]">
                Woo Haah!
              </span>
              <br /> Let's make it a scene.
              <br />
              <br />
              <span className="font-CabinetGrotesk_Thin text-sm">
                thank you 𓂃.
              </span>
            </p>
          </div>
          {/* <HiddenFooter /> */}
        </div>
      </div>
    </>
  );
};

export default page;
