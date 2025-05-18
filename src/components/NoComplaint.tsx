import { ComplaintsIcon } from "@/assets/svgs";
import { PageTitle } from "./PageTitle";
import Header from "./Header";

export const NoComplaint = ({ goBack }: { goBack: () => void }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header icon={<ComplaintsIcon />} title="Complaints: Log" />
      <div className="px-5 pt-2 pb-8 flex-1 overflow-y-auto">
        <div className="max-w-[95.625rem] w-full h-full mx-auto flex flex-col space-y-4">
          <PageTitle title="Complaints: Log" />
          <div className="bg-white rounded-[4px] border border-gray-200 p-6 w-full">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Complaint Not Found
              </h2>
              <p className="text-gray-600 mb-4">
                The requested complaint could not be found.
              </p>
              <button
                onClick={goBack}
                className="text-[#1976D2] hover:text-[#1456a0] font-medium cursor-pointer"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
