import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const Subheader = () => {
  return (
    <nav className="flex items-center justify-between pb-4 tracking-tight">
      <div>
        <Link href="/" className="group text-gray-300 hover:text-[#b56333] transition-colors">
          <span className="inline-flex items-center gap-1">
            <IoArrowBack className="w-4 h-4" />
            <span
              className={cn(
                "relative hover-underline transition-colors"
              )}
            >
              home
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Subheader;
