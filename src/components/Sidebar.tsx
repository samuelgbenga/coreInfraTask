import { Fragment, useContext } from "react";
import {
  LAPOLogo,
  DashboardIcon,
  LogoutIcon,
  CardInfraLogo,
  CloseIcon,
} from "../assets/svgs";
import { Link, useLocation } from "react-router-dom";
import { Context } from "@/context/context";

export const Sidebar = () => {
  const { pathname: activePath } = useLocation();
  const { show, setShow, sidebarLinks } = useContext(Context);
  const sidebarArr = [...sidebarLinks]

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      {/* Blur dark background */}
      <div
        onClick={handleClose}
        className={
          `fixed top-0 left-0 z-30 w-full h-full bg-[#101828d2] backdrop-blur-xs duration-300 transition-opacity` +
          (show ? "opacity-70 md:hidden block" : "opacity-0 hidden")
        }
      />

      {/* Sidebar */}
      <aside
        className={
          `fixed z-30 top-0 left-0 h-screen max-w-[14.375rem] w-[90%] bg-[#002F6C] text-[#D0D5DD] border-r border-[#DEDEDF] py-4 transition-transform duration-300 md:translate-x-0 md:static flex flex-col` +
          (show ? " translate-x-0" : " -translate-x-full")
        }
      >
        {/* Close Button */}
        <CloseIcon
          onClick={handleClose}
          className="md:hidden absolute top-5 right-5 duration-150 transition-colors cursor-pointer text-gray-500 hover:text-white"
        />

        {/* Logo */}
        <div className="flex flex-col h-full max-w-[12.875rem] w-full mx-auto">
          <div className="flex items-center gap-2 mb-10 px-2 flex-shrink-0">
            <LAPOLogo className="h-auto max-w-[8.645rem] w-full" />
          </div>

          {/* Fixed Dashboard Link */}
          <div className="flex flex-col gap-1 mb-3">
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 text-xs ${
                activePath === "/dashboard"
                  ? "bg-[#E4F0FF] text-[#014DAF] border-[#AEBAC9]"
                  : "hover:bg-[#E4F0FF]/10"
              }`}
              onClick={handleClose}
            >
              <span className="w-4 h-auto">
                <DashboardIcon />
              </span>
              Dashboard
            </Link>
          </div>

          <p className="text-[0.53125rem] text-[#7E8B9C] px-3">MAIN MENU</p>

          {/* Scrollable Links */}
          <nav className="h-full custom-scrollbar pr-2 overflow-y-auto mt-3">
            <div className="flex flex-col gap-1">
              {sidebarArr.map((link) => {
                return (
                  <Link
                    key={link.label}
                    to={link.to[0]}
                    className={`flex items-center h-[2.375rem] border-[0.6] border-transparent gap-3 pl-3 py-2 rounded-[8px] transition-colors duration-200 text-xs ${
                      link.to.includes(activePath) ||
                      (link.to[1] && link.to[1] === activePath)
                        ? "bg-[#E4F0FF] text-[#014DAF] border-[#AEBAC9]"
                        : "hover:bg-[#E4F0FF]/10"
                    }`}
                    onClick={handleClose}
                  >
                    <span className="w-4 h-auto">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Fixed Bottom Section */}
          <div className="flex flex-col gap-6 flex-shrink-0 mt-2">
            <button className="flex items-center h-[2.375rem] gap-3 px-3 py-2 rounded-[8px] text-white hover:bg-white/10 cursor-pointer text-xs">
              <LogoutIcon className="w-4 h-auto" /> <span>Logout</span>
            </button>
            <div className="flex flex-col gap-1 text-xs px-3">
              <span className="text-[#7E8B9C] text-[0.53125rem] uppercase">
                Powered by
              </span>
              <CardInfraLogo className="w-[5.83rem] h-auto" />
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};
