import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";



const Subheader = () => {
  return (
    <nav className="flex items-center justify-between pb-4 tracking-tight">
      
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
      
      
    </nav>
  )
}

export default Subheader