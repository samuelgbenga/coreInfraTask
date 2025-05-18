import React, { Fragment, useContext, useRef } from "react";
import {
  FilePlusIcon,
  CloseIcon,
  DropdownIcon,
  UploadIcon,
} from "../assets/svgs";
import { Context } from "@/context/context";

interface LogComplaintModalProps {
  open: boolean;
  onClose: () => void;
  initialValues?: Partial<{
    account: string;
    name: string;
  }>;
}

const categories = [
  "Card Dispute",
  "Fraud",
  "Unauthorized Transaction",
  "Other",
];

export const ComplaintLogModal: React.FC<LogComplaintModalProps> = ({
  open,
  onClose,
  initialValues,
}) => {
  const [category, setCategory] = React.useState("");
  const [account, setAccount] = React.useState(initialValues?.account || "");
  const [name, setName] = React.useState(initialValues?.name || "");
  const [details, setDetails] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setComplaintsData } = useContext(Context);

  if (!open) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComplaintsData((prev) => [
      {
        id: `CMP${String(prev.length + 1).padStart(3, "0")}`,
        account: account,
        name: name,
        date: new Date().toLocaleString(),
        category: category,
        details: details || "No details provided",
        branch: "Head Office",
        submissionDate: new Date().toLocaleString(),
        status: "Pending",
        resolvedBy: "",
        attachment: "None",
        resolutionDate: "",
      },
      ...prev,
    ]);
    onClose();
    setCategory("");
    setAccount("");
    setDetails("");
    setName("");
  };

  return (
    <Fragment>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg overflow-y-auto" />

      {/* Modal */}
      <div className="bg-white rounded-xl z-[60] shadow-[0px_20px_24px_-4px_#10182814] w-[85%] max-w-[31rem] mx-auto fixed top-1/2 -translate-y-1/2 inset-x-0 animate-fadeIn">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-4 pt-4">
          <div className="flex gap-4">
            <span className="w-12 h-12 flex justify-center items-center rounded-[10px] border border-[#EAECF0]">
              <FilePlusIcon className="text-[#344054]" />
            </span>

            <div className="flex flex-col">
              <span className="font-bold text-lg">Log Complaint</span>
              <span className="text-[#475467] text-sm">
                Select category and fill in details
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="text-gray-400 hover:text-gray-700 text-2xl cursor-pointer mt-1"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="pt-5 px-6 space-y-4">
            {/* Category Dropdown */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Category
              </label>
              <div className="relative">
                <button
                  type="button"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between"
                  onClick={() => setDropdownOpen((v) => !v)}
                  tabIndex={0}
                >
                  {category || "Select category from dropdown"}
                  <DropdownIcon className="w-4 h-4 ml-2 mt-2 text-gray-400" />
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
              <label
                htmlFor="account"
                className="block text-sm text-gray-600 mb-1"
              >
                Account Number*
              </label>
              <input
                id="account"
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            {/* Customer Name */}
            <div>
              <label
                htmlFor="customer"
                className="block text-sm text-gray-600 mb-1"
              >
                Customer Name*
              </label>
              <input
                id="customer"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
              />
            </div>
            {/* Complaint Details */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm text-gray-600 mb-1"
              >
                Complaint Details*
              </label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                rows={3}
                placeholder="Describe complaint...."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 resize-none"
              />
            </div>
            {/* File Upload */}
            <div>
              <label
                htmlFor="file"
                className="block text-sm text-gray-600 mb-1"
              >
                Upload File (optional)
              </label>
              <label
                className="w-full border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center px-4 py-6 text-center cursor-pointer bg-gray-50 hover:border-blue-300"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <input
                  id="file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center gap-2">
                  <span className="w-10 h-10 bg-white shadow-[0px_1px_2px_0px_#1018280D] flex justify-center items-center">
                    <UploadIcon className="" />
                  </span>

                  {file ? (
                    <span className="text-gray-700 text-sm">{file.name}</span>
                  ) : (
                    <span>
                      <span className="text-[#014DAF] font-medium cursor-pointer">
                        Click to upload
                      </span>{" "}
                      <span className="text-xs text-gray-400">
                        or drag and drop <br />
                        PDF, JPG (max. 10mb)
                      </span>
                    </span>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="flex justify-center px-6 pb-6">
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#014DAF] cursor-pointer hover:bg-[#1456a0] text-white font-semibold rounded-lg py-3 mt-2 text-base shadow"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
