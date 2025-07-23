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
        <Time />
        {/* Toggle Button */}
        <button
          onClick={toggleMisc}
          className="p-2 hover:cursor-pointer rounded-full transition-colors duration-200 focus:outline-none group"
          aria-label={showMisc ? "Hide content" : "Show content"}
        >
          {showMisc ? (
            // SVG 1: When active
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="justd-icons size-4 cursor-pointer"
              data-slot="icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 6.25C8 5.56 8.56 5 9.25 5h8.5c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 1 1-2.5 0V9.268l-9.366 9.366a1.25 1.25 0 0 1-1.768-1.768L14.732 7.5H9.25C8.56 7.5 8 6.94 8 6.25"
                clip-rule="evenodd"
              ></path>
            </svg>
          ) : (
            // SVG 2: When inactive
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="justd-icons size-4 animate-pulse cursor-pointer"
              data-slot="icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M18.634 5.366a1.25 1.25 0 0 0-1.768 0L7.5 14.732V9.25a1.25 1.25 0 1 0-2.5 0v8.5c0 .69.56 1.25 1.25 1.25h8.5a1.25 1.25 0 1 0 0-2.5H9.268l9.366-9.366a1.25 1.25 0 0 0 0-1.768"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </div>
      
    </footer>
  );
}
