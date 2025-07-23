
import Footer from "@/components/Footer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Links from "@/components/Links";
import SpotifyNP from "@/components/SpotifyNP";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full h-full">
      <section className="w-full flex flex-col gap-4 justify-start p-[0.4rem] leading-[1.625rem]">
        <h2>Hello ~</h2>
        <p>
          Lorem ipsum dolor sit . Quos alias, omnis accusantium
          <a>amet consectetur adipisicing elit</a> ~ amet{" "}
          <a
            className={cn(
              "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
            )}
          >
            amet consectetur adipisicing elit
          </a>{" "}
          said <mark className="text-[#ddbb90]"> srummanf </mark>
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
      <p className="divider italic">{"/ / / / / / sad/ /"}</p>
      {/* <Links/> */}
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <div className="flex gap-3 items-center">
          <h1 className={cn("text-lg")}>Connect</h1>
          <div className="underlines bg-[#808080] h-[0.2px] w-full"></div>
          <div className="">
            {/* <svg
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
                fill="currentColor"
                d="M21.951 11.623c0-1.325-1.659-2.58-4.203-3.359.587-2.593.326-4.655-.823-5.316a1.8 1.8 0 0 0-.913-.228v.909c.187 0 .338.037.465.106.554.318.794 1.529.607 3.086-.045.383-.118.787-.208 1.199a20 20 0 0 0-2.589-.445 20 20 0 0 0-1.696-2.038c1.33-1.235 2.577-1.912 3.425-1.912v-.91c-1.121 0-2.589.8-4.073 2.186-1.484-1.378-2.951-2.169-4.072-2.169v.91c.844 0 2.095.672 3.424 1.899-.57.6-1.141 1.28-1.684 2.034-.92.098-1.793.249-2.592.449a12 12 0 0 1-.212-1.183c-.192-1.557.045-2.768.595-3.09a.9.9 0 0 1 .469-.106v-.909c-.343 0-.653.074-.922.228-1.145.66-1.402 2.72-.81 5.304-2.537.783-4.188 2.034-4.188 3.355 0 1.325 1.66 2.58 4.203 3.36-.587 2.592-.326 4.655.824 5.315.265.155.575.229.917.229 1.121 0 2.589-.8 4.073-2.185 1.484 1.378 2.951 2.168 4.072 2.168.343 0 .653-.073.922-.228 1.145-.66 1.402-2.72.81-5.304 2.528-.778 4.18-2.034 4.18-3.355Zm-5.307-2.719a19 19 0 0 1-.55 1.61 22 22 0 0 0-1.121-1.932q.869.128 1.67.322Zm-1.867 4.342a22 22 0 0 1-.983 1.557 21 21 0 0 1-3.677.004 21 21 0 0 1-1.834-3.172 21.7 21.7 0 0 1 1.826-3.184 21 21 0 0 1 3.677-.003 21 21 0 0 1 1.835 3.172 23 23 0 0 1-.845 1.626Zm1.316-.53c.22.546.408 1.092.563 1.622-.534.13-1.097.24-1.68.327a23 23 0 0 0 1.117-1.95Zm-4.133 4.35a17 17 0 0 1-1.134-1.305c.367.016.742.029 1.121.029q.577.001 1.134-.029a16 16 0 0 1-1.121 1.305m-3.033-2.401a18 18 0 0 1-1.672-.323c.151-.526.338-1.068.55-1.61.168.326.343.652.535.979a27 27 0 0 0 .587.954m3.012-8.484q.57.588 1.133 1.304a25 25 0 0 0-1.12-.028q-.577-.001-1.134.028c.367-.476.746-.913 1.121-1.304M8.922 8.582a23 23 0 0 0-1.117 1.945 18 18 0 0 1-.562-1.623 20 20 0 0 1 1.68-.322Zm-3.689 5.104c-1.443-.616-2.377-1.423-2.377-2.063s.934-1.451 2.377-2.063c.35-.15.734-.285 1.13-.411.232.799.537 1.63.917 2.482a19 19 0 0 0-.905 2.47 12 12 0 0 1-1.142-.415m2.193 5.826c-.554-.318-.795-1.53-.607-3.086.045-.384.118-.787.208-1.199.799.196 1.671.346 2.589.444.55.755 1.12 1.44 1.695 2.039-1.329 1.235-2.576 1.912-3.424 1.912a1 1 0 0 1-.46-.11Zm9.67-3.107c.192 1.557-.045 2.768-.595 3.09a.9.9 0 0 1-.469.106c-.844 0-2.095-.672-3.424-1.9.57-.599 1.141-1.28 1.683-2.034a19 19 0 0 0 2.593-.448q.143.618.212 1.186m1.57-2.719c-.35.15-.734.285-1.13.412a20 20 0 0 0-.917-2.483 19 19 0 0 0 .905-2.47q.607.19 1.146.415c1.443.616 2.376 1.423 2.376 2.063-.004.64-.937 1.452-2.38 2.063"
              ></path>
              <path
                fill="currentColor"
                d="M11.947 13.486a1.863 1.863 0 1 0 0-3.726 1.863 1.863 0 0 0 0 3.726"
              ></path>
            </svg> */}
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
        <p className="font-[family-name:var(--font-montreal)] mt-5 animate-fade-down animate-delay-[2000ms]">
          Today our internet is full of noise, internet celebrities drama's,
          infopreneurs, and less-social. We live with the world at our
          fingertips, we cling to a pocket-sized portal that promises dreams of
          escape, but leaves us feeling empty.---
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
    </div>
  );
}
