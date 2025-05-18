import React, { Fragment, useContext, useState } from "react";
import { FilterIcon, CloseIcon, DropdownIcon } from "../assets/svgs";
import { Context } from "@/context/context";

const categories = [
  "Card Dispute",
  "Fraud",
  "Unauthorized Transaction",
  "Other",
];

export const ComplaintFilterModal = () => {
  const [category, setCategory] = useState("Card Dispute");
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {
    showFilterModal,
    setShowFilterModal,
    complaintsData,
    setComplaintsData,
  } = useContext(Context);

  const handleClose = () => {
    setShowFilterModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredComplaints = complaintsData.filter(
      (data) =>
        data.category === category ||
        data.account === account ||
        data.name === name
    );
    setComplaintsData(filteredComplaints);
    handleClose();
  };

  return (
    <Fragment>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={
          `fixed inset-0 z-50 bg-black/70 backdrop-blur-lg overflow-y-auto` +
          (showFilterModal ? "opacity-70 block" : "opacity-0 hidden")
        }
      />

      <div
        className={
          `bg-white rounded-2xl shadow-xl w-[85%] max-w-124 mx-auto p-6 z-[60] fixed top-1/2 -translate-y-1/2 inset-x-0 animate-fadeIn` +
          (showFilterModal ? "opacity-100 block" : "opacity-0 hidden")
        }
      >
        <div className="flex items-start justify-between gap-4 px-4 pt-4">
          <div className="flex gap-4">
            <span className="w-12 h-12 flex justify-center items-center rounded-[10px] border border-[#EAECF0]">
              <FilterIcon className="text-[#344054]" />
            </span>

            <div className="flex flex-col">
              <span className="font-bold text-lg">Filter</span>
              <span className="text-[#475467] text-sm">
              Select conditions and apply
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="text-gray-400 hover:text-gray-700 text-2xl cursor-pointer mt-1"
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-5 px-6">
          {/* Category Dropdown */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Category</label>
            <div className="relative">
              <button
                type="button"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between text-left"
                onClick={() => setDropdownOpen((v) => !v)}
                tabIndex={0}
              >
                {category || "Select category from dropdown"}
                <DropdownIcon className="w-4 h-4 ml-2 mt-1 text-gray-400" />
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow z-10">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setCategory(cat);
                        setDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {/* Account Number */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Account Number
            </label>
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2"
            />
          </div>
          {/* Customer Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#014DAF] cursor-pointer hover:bg-[#1456a0] text-white font-semibold rounded-lg py-3 mt-2 text-base shadow"
          >
            Apply
          </button>
        </form>
      </div>
    </Fragment>
  );
};
