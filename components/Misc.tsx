import React from "react";
import SpotifyNP from "@/components/SpotifyNP";
import HiddenFooter from "./HiddenFooter";
import ShayariBlock from "./ShayariBlock";

const Misc = () => {
  return (
    <div className="p-4 pt-24 pb-12 gap-6">
      <div className="flex flex-col gap-12 w-full h-full">
        <div className="border-b border-b-stone-800/90 p-4">
          <span className="font-Italianno italic text-2xl tracking-wide text-[#ddbb90]">
            You clicked here! I adore your curiosity.
          </span>
          <p className="my-6 font-CabinetGrotesk_Light text-base leading-relaxed text-gray-300">
            Welcome to my <span className="italic font-CabinetGrotesk_Thin bg-[#2e2e2e]">fount</span>.  
            Finally — we enjoin through some warmth and love.
            <br />
            <br />
            <span className="font-CabinetGrotesk_Thin">This space is a reflection —</span>
            <br />
            A moment to pause.  
            <br />
            To <span className="italic font-instrument_serif">imagine</span>, to <span className="italic font-instrument_serif">think</span>, to <span className="italic font-instrument_serif">read</span>, to <span className="italic font-instrument_serif">reflect</span>.
            <br />
            <br />
            And above all, to embrace what’s learned:  
            through <span className="font-CabinetGrotesk_ExtraLight">trial</span>, through <span className="font-CabinetGrotesk_Thin">rhythm</span>,  
            through slow, honest pacing.
            <br />
            <br />
            <span className="font-Italianno text-lg text-stone-400">thank you 𓂃</span>
          </p>

          
        </div>

        <ShayariBlock />
        <HiddenFooter />
      </div>
    </div>
  );
};

export default Misc;


// This is the old Misc component with all the components and sections

// import React from "react";
// import SpotifyNP from "@/components/SpotifyNP";
// import HiddenFooter from "./HiddenFooter";
// import { alexBrush } from "../app/font";
// import ShayariBlock from "./ShayariBlock";

// const Misc = () => {
//   return (
//     <div className="p-4 pt-24 pb-12 gap-6">
//       <div className="flex flex-col gap-12 w-full h-full">
//         {/* ////////////////////////////// */}
//         <div className="">
//           <span className="font-Italianno italic text-2xl tracking-wide">
//             Well, looks like we have a friend here.
//           </span>
//           <p className="my-5">
//             Welcome to my home. ! Atlast, we enjoin through some warmth and
//             love.
//             <br />
//             It's a reflection we all need to take, a moment to pause and
//             <br />
//             Imagine, Think, Read, Reflect
//             <br />
//             It is learned through learning and experimenting and consistency and
//             pacing.
//             <br />
//             <br />
//             thank you 𓂃.
//           </p>
//           <p className={`mt-12 text-xl font-instrument_serif`}>
//             Here's my aoidion — quiet, but it lingers.
//           </p>
//         </div>
//         {/* ////////////////////////////// */}
//         <section className="w-full flex flex-col gap-4 justify-start p-[0.4rem] leading-[1.625rem]">
//           <h2>Hello ~</h2>
//           <p>
//             Lorem ipsum dolor sit . Quos alias, omnis accusantium
//             <a>amet consectetur adipisicing elit</a> ~ amet{" "}
//             <a>amet consectetur adipisicing elit</a> said{" "}
//             <mark> srummanf </mark>
//             lorem.
//           </p>
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
//             sapiente tenetur facilis ea cupiditate at?
//           </p>
//           <p className="mb-0">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//         </section>
//         <p className="divider italic">{"/ / / / / / / /"}</p>

//         {/* Link Section */}
//         <section className="w-full flex flex-col justify-start p-[0.4rem]">
//           <h2 className="mb-8">Find me here ~</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
//             <div>
//               <p className="mb-2 text-zinc-400 font-semibold">GitHub</p>
//               <a href="https://github.com/srummanf">@srummanf</a>
//             </div>
//             <div>
//               <p className="mb-2 text-zinc-400 font-semibold">
//                 X (formerly Twitter)
//               </p>
//               <a href="https://x.com/srummanf">@srummanf</a>
//             </div>
//             <div>
//               <p className="mb-2 text-zinc-400 font-semibold">LinkedIn</p>
//               <a href="https://www.linkedin.com/in/srummanf/">@srummanf</a>
//             </div>
//             <div>
//               <p className="mb-2 text-zinc-400 font-semibold">Email</p>
//               <a href="mailto:rummanfardeen4567@gmail.com">
//                 rummanfardeen4567@gmail.com
//               </a>
//             </div>
//           </div>
//         </section>
//         <ShayariBlock />
//         <HiddenFooter />
//       </div>
//     </div>
//   );
// };

// export default Misc;
