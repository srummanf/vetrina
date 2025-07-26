import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Adjust import based on your setup

const Links = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl md:text-2xl font-light tracking-wide text-neutral-200 mb-10">
        Look for me here <span className="text-orange-400">~</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
        {/* GitHub */}
        <div>
          <p className="mb-1 text-sm text-neutral-500  tracking-wider">GitHub</p>
          <Link
            href="https://github.com/srummanf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            <span
              className={cn(
                "relative inline-block hover-underline text-neutral-200 hover:text-orange-400 transition-colors"
              )}
            >
              @srummanf
            </span>
          </Link>
        </div>

        {/* Twitter */}
        <div>
          <p className="mb-1 text-sm text-neutral-500  tracking-wider">X (formerly Twitter)</p>
          <Link
            href="https://x.com/srummanf"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            <span
              className={cn(
                "relative inline-block hover-underline text-neutral-200 hover:text-orange-400 transition-colors"
              )}
            >
              @srummanf
            </span>
          </Link>
        </div>

        {/* LinkedIn */}
        <div>
          <p className="mb-1 text-sm text-neutral-500  tracking-wider">LinkedIn</p>
          <Link
            href="https://www.linkedin.com/in/srummanf/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            <span
              className={cn(
                "relative inline-block hover-underline text-neutral-200 hover:text-orange-400 transition-colors"
              )}
            >
              @srummanf
            </span>
          </Link>
        </div>

        {/* Email */}
        <div>
          <p className="mb-1 text-sm text-neutral-500  tracking-wider">Email</p>
          <Link
            href="mailto:rummanfardeen4567@gmail.com"
            className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            <span
              className={cn(
                "relative inline-block hover-underline text-neutral-200 hover:text-orange-400 transition-colors"
              )}
            >
              rummanfardeen4567@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Links;
