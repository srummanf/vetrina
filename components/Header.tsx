import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

interface HeaderProps {
  showHomeLink?: boolean;
}

export default function Header({ showHomeLink = false }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between pb-8 tracking-tight">
      {showHomeLink && (
        <div>
          <Link
            href="/"
            className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
          >
            <span className="text-primary flex items-center gap-1">
              <IoArrowBack className="w-4 h-4" />
              home
            </span>
          </Link>
        </div>
      )}
      <div
        className={`flex items-center gap-5 ${!showHomeLink ? "ml-auto" : ""}`}
      >
        <Link
          href="/projects"
          className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
        >
          <span className={cn(
            "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
          )}>
            projects
          </span>
        </Link>
        <Link
          href="/me"
          className="hover:text-accent underline-offset-4 transition duration-150 ease-in-out hover:underline"
        >
          <span className={cn(
            "relative inline-block hover-underline text-gray-300 hover:text-[#b56333] transition-colors"
          )}>
            me
          </span>
        </Link>
      </div>
    </nav>
  );
}
