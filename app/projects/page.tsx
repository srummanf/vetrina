import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import { projects } from "@/data/projects";
import Subheader from "@/components/Subheader";

const page = () => {
  return (
    <>
      <Subheader />
      <h1 className="font-instrument_serif text-[2.5rem] tracking-tight text-primary">
        Projects
      </h1>
      <h2 className="text-base font-medium tracking-tight text-foreground">
        ~ some showcase of whatever I am doing.
      </h2>

      <section className="pt-8">
        
        <div className="pt-1.5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-5 group border border-foreground/10">
          <p className="my-4 w-fit rounded-md px-4 py-1 text-xs text-foreground transition-all duration-300 ease-in-out">
            Feel free to explore my{" "}
            <Link
              href="https://github.com/srummanf?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-primary underline underline-offset-2 transition-all duration-150 ease-in-out md:hover:text-accent md:group-hover:text-accent"
            >
              GitHub
            </Link>{" "}
            for more projects. Most of them are open-source.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
