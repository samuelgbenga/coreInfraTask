import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Complaint } from "../data/complaintsData";
import { Pagination } from "@/components/Pagination";
import { PageTitle } from "@/components/PageTitle";
import React, { useContext, useState } from "react";
import {
  CalendarIcon,
  FilterIcon,
  SearchIcon,
  ComplaintsResolveIcon,
} from "../assets/svgs";
import { Context } from "@/context/context";

interface ComplaintsResolveProps {
  setSidebarOpen?: (open: boolean) => void;
}

export const ComplaintsResolve: React.FC<ComplaintsResolveProps> = () => {
  const [tab, setTab] = useState("Pending");
  const [search, setSearch] = useState("");
  const { setShowFilterModal, complaintsData: complaints } =
    useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <Header icon={<ComplaintsResolveIcon />} title={"Complaints: Resolve"} />

      {/* Main Content */}
      <div className="px-5 pt-2 pb-8 flex-1 overflow-y-auto">
        <div className="max-w-[95.625rem] w-full h-full mx-auto flex flex-col space-y-4">
          {/* Page Title & Actions */}
          <PageTitle isLog={false} title={"Complaints: Resolve"} />

          <div className="flex min-w-[12rem] w-fit h-[40px] border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] overflow-hidden">
            {["Pending", "Treated"].map((tabName, index) => (
              <button
                key={index}
                className={`flex items-center border-[#D0D5DD] cursor-pointer justify-center gap-1 px-4 py-2 w-full h-full font-medium transition ${
                  tab === tabName
                    ? "bg-[#f9fafb] text-[#1D2939]"
                    : "bg-white text-[#344054]"
                } ${index === 0 ? "border-r" : ""} `}
                onClick={() => setTab(tabName)}
              >
                {tab === tabName && (
                  <span className="block w-[10px] h-[10px] rounded-full mr-1 bg-[#002F6C]"></span>
                )}
                {tabName}
              </button>
            ))}
          </div>

          <div className="border border-[#f9fafb] rounded-[4px]">
            {/* Tabs & Search */}
            <div className="flex flex-wrap justify-between p-[0.375rem] border border-[#EAECF0] bg-[#F9FAFB] md:flex-row md:items-center md:justify-between gap-2">
              <div className="bg-white sm:max-w-80 w-full h-[36px] flex items-center rounded-[4px] shadow-[0px_1px_2px_0px_#1018280D] transition-colors duration-300 ring ring-white hover:ring-[#1976D2] focus-within:ring-2 focus-within:ring-[#1976D2]">
                <label htmlFor="search">
                  <span className="flex justify-center items-center w-12 h-full">
                    <SearchIcon className="text-[#667085] in-focus-within:text-[#1976D2]" />
                  </span>
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search complaint"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 md:w-64 pr-4 py-2 text-sm outline-none border-none placeholder:text-sm placeholder:text-[#667085]"
                />
              </div>

              <div className="flex flex-row items-center gap-4 h-full">
                <button
                  className="bg-white border border-[#D0D5DD] max-w-[5.125rem] h-[36px] w-fit rounded-[4px] px-3 py-2 flex items-center gap-1 cursor-pointer duration-200 transition-colors text-[#344054] hover:bg-[#475467] hover:text-white hover:border-[#475467]"
                  title="Date"
                >
                  <CalendarIcon />
                  <span className="font-medium text-xs">Date</span>
                </button>
                <button
                  className="bg-white border border-[#D0D5DD] max-w-[5.125rem] h-[36px] w-full rounded-[4px] px-3 py-2 flex items-center gap-1 cursor-pointer duration-200 transition-colors text-[#344054] hover:bg-[#475467] hover:text-white hover:border-[#475467]"
                  title="Filter"
                  onClick={() => setShowFilterModal(true)}
                >
                  <FilterIcon />
                  <span className="font-medium text-xs">Filter</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-[8px]">
                <thead>
                  <tr className="bg-[#F9FAFB] text-[#475467] border-b border-[#EAECF0]">
                    {[
                      "Account Number",
                      "Customer Name",
                      "Submission Date",
                      ...(tab !== "Pending" ? ["Resolution Date"] : []),
                      "Category",
                    ].map((name, index) => (
                      <th
                        key={index}
                        className={`px-6 py-2 font-medium text-xs h-full border-x border-[#EAECF0] ${
                          index === 0 ? "text-left" : "text-center"
                        }`}
                      >
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((row: Complaint, idx: number) => (
                    <tr
                      key={idx}
                      className="border-b last:border-b-0 border-[#EAECF0] bg-white hover:bg-[#F0F4F8]/80 cursor-pointer"
                      onClick={() =>
                        navigate(`/complaint-resolve-details/${row.id}`)
                      }
                    >
                      <td className="px-6 py-3 text-[0.625rem] text-[#475467] border-x border-[#EAECF0] text-left whitespace-nowrap">
                        {row.account}
                      </td>
                      <td className="px-6 py-3 text-[0.625rem] text-[#475467] border-x border-[#EAECF0] text-center whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-6 py-3 text-[0.625rem] text-[#475467] border-x border-[#EAECF0] text-center whitespace-nowrap">
                        {row.date}
                      </td>
                      {tab !== "Pending" && (
                        <td className="px-6 py-3 text-[0.625rem] text-[#475467] border-x border-[#EAECF0] text-center whitespace-nowrap">
                          11/14/2024 10:27:43
                        </td>
                      )}
                      <td className="px-6 py-3 text-[0.625rem] text-[#475467] border-x border-[#EAECF0] text-center whitespace-nowrap">
                        {row.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination />
          </div>

          <div className="block w-full h-10 border border-transparent" />
        </div>
      </div>
    </div>
  );
};
