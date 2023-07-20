import { site } from "../site";
import { twMerge } from "tailwind-merge";

const LinkedInButton = ({ className }: { className?: string }) => {
  return (
    <a className={twMerge(className, "hover:bg-gray-800 rounded-lg")} href={site.linkedIn} target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none">
        <path
          d="M5.372 24H.396V7.976h4.976V24ZM2.882 5.79C1.29 5.79 0 4.474 0 2.883a2.882 2.882 0 1 1 5.763 0c0 1.59-1.29 2.909-2.881 2.909ZM23.995 24H19.03v-7.8c0-1.86-.038-4.243-2.587-4.243-2.587 0-2.984 2.02-2.984 4.109V24H8.49V7.976h4.772v2.186h.07c.664-1.259 2.287-2.587 4.708-2.587 5.035 0 5.961 3.316 5.961 7.623V24h-.005Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default LinkedInButton;
