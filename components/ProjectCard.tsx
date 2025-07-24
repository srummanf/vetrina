import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start pt-2">
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-[1.02] hover:bg-[#171717]"
      >
        <div className="flex items-center justify-between font-medium tracking-tight md:group-hover:text-accent">
          <div className="flex items-center">
            <h1 className="text-[1rem] font-CabinetGrotesk_Medium x text-white">
              <span className="text-xs">𓂃</span>
              {" "}
              {project.title}
              {" "}
              {" "}
              <span className="text-xs">𓂃</span>
            </h1>
          </div>
        </div>
        <p className="text-[0.87rem] text-gray-400"> {project.description}</p>
      </Link>
    </div>
  );
}
