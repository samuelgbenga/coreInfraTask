export const BackArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center cursor-pointer gap-1 text-[#1976D2] hover:text-[#1456a0] mb-1 font-medium text-base focus:outline-none"
    aria-label="Go back"
  >
    <svg
      className="w-5 h-5 mt-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    <span>Back</span>
  </button>
);
