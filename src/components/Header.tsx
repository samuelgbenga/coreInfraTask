import { Context } from "@/context/context";
import { BellIcon, AvatarIcon } from "../assets/svgs";
import React, { useContext } from "react";

interface HeaderProps {
  icon: React.ReactNode;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ icon, title }) => {
  const { setShow } = useContext(Context);

  return (
    <header className="flex items-center h-12 justify-between bg-white px-5 py-3 border-b border-[#DEE6E2]">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden text-xl text-[#001735] mr-2 focus:outline-none cursor-pointer"
          onClick={() => setShow(true)}
          aria-label="Open sidebar"
        >
          <span>&#9776;</span>
        </button>
        <div className="text-xs font-medium text-[#001735] flex items-center gap-2 md:gap-3">
          <span className="mt-[0.2rem]">{icon}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <BellIcon className="cursor-pointer w-6 h-6 text-gray-500 duration-150 transition-transform hover:rotate-6" />
        <div className="cursor-pointer w-8 h-8 p-1 flex-none flex items-center justify-center rounded-full overflow-hidden duration-200 transition-colors text-[#475467] bg-[#f2f4f7] border-[0.6px] border-[#e0e2e6] hover:bg-[#475467] hover:text-white hover:border-[#475467]">
          <AvatarIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
