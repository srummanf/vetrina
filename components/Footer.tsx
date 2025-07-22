import Time from "./Time";

interface FooterProps {
  showMisc: boolean;
  toggleMisc: () => void;
}

export default function Footer({ showMisc, toggleMisc }: FooterProps) {
  return (
    <footer className="flex px-4 py-4 justify-center gap-6 items-center w-full border-y border-stone-800/90">
      <div className="w-full lg:w-[55%] flex justify-between items-center">
        <p className="leading-none m-0">made by srummanf</p>
        
        {/* Toggle Button */}
        <button
          onClick={toggleMisc}
          className="p-2 hover:bg-stone-800/30 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-600 group"
          aria-label={showMisc ? "Hide content" : "Show content"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-gray-400 animate-pulse group-hover:text-gray-300 transition-all duration-300 ${
              showMisc ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        
        <Time />
      </div>
    </footer>
  );
}