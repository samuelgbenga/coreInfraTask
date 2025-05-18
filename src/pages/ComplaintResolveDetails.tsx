import Header from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { ComplaintsResolveIcon } from "@/assets/svgs";
import { PageTitle } from "@/components/PageTitle";
import { complaints } from "../data/complaintsData";
import { BackArrow } from "@/components/BackArrow";
import { NoComplaint } from "@/components/NoComplaint";
import { useContext, useEffect } from "react";
import { Context } from "@/context/context";

export const ComplaintResolveDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const complaint = complaints.find((c) => c.id === id);
  const { sidebarLinks, setSidebarLinks } = useContext(Context);

  const handleGoBack = () => {
    navigate("/complaints-resolve");
  };

  if (!complaint) {
    return <NoComplaint goBack={handleGoBack} />;
  }

  useEffect(() => {
    const existLink = sidebarLinks.find(
      (lnk) => lnk.label === "Complaints: Resolve"
    );

    if (!existLink) return;
    const existLinkIdx = sidebarLinks.indexOf(existLink);
    if (existLinkIdx !== -1) {
      sidebarLinks[existLinkIdx] = {
        ...sidebarLinks[existLinkIdx],
        to: [sidebarLinks[existLinkIdx].to[0], `/complaint-resolve-details/${id}`],
      };

      setSidebarLinks(sidebarLinks);
    }
  }, [id, sidebarLinks]);

  return (
    <div className="flex flex-col w-full h-full">
      <Header icon={<ComplaintsResolveIcon />} title="Complaints: Resolve" />

      <div className="px-5 pt-2 pb-8 flex-1 overflow-y-auto">
        <div className="max-w-[95.625rem] w-full h-full mx-auto flex flex-col space-y-4">
          <PageTitle title="Complaints: Resolve" />

          <div className="bg-white rounded-xl border border-gray-200 p-6 w-full">
            <div className="max-w-[62.625rem] w-full">
              <div className="">
                {BackArrow({ onClick: handleGoBack })}
                <h2 className="text-lg font-semibold mb-4">
                  Complaint Details
                </h2>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
                <div className="md:max-w-112 w-full space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Complaint Category
                    </label>
                    <input
                      value={complaint.category}
                      readOnly
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Account Number
                    </label>
                    <input
                      value={complaint.account}
                      readOnly
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
                <div className="md:max-w-112 w-full space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Branch
                    </label>
                    <input
                      value={complaint.branch}
                      readOnly
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Customer Name
                    </label>
                    <input
                      value={complaint.name}
                      readOnly
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-1">
                  Complaint Details
                </label>
                <textarea
                  value={complaint.details}
                  readOnly
                  rows={3}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">
                      Submission Date
                    </span>
                    <span className="text-gray-800">
                      {complaint.submissionDate}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">
                      Resolved By
                    </span>
                    <span className="text-gray-800">-</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">
                      Resolution Date
                    </span>
                    <span className="text-gray-800">-</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">
                      Status
                    </span>
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                        complaint.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">
                      Attachment
                    </span>
                    <span className="text-gray-800">
                      {complaint.attachment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block w-full h-10 border border-transparent" />
        </div>
      </div>
    </div>
  );
};
