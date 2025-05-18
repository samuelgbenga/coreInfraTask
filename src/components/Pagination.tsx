export const Pagination = () => {
  return (
    <div className="flex justify-between items-center h-[52px] py-2 px-6 rounded-bl-[4px] rounded-br-[4px] bg-white border border-[#EAECF0]">
      <span className="text-sm text-[#344054]">Page 1 of 20</span>
      <div className="flex gap-2">
        {["Previous", "Next"].map((btnName, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-[#D0D5DD] rounded-[4px] text-sm text-[#344054] bg-white font-medium cursor-pointer duration-200 transition-colors hover:bg-[#475467] hover:text-white hover:border-[#475467]"
          >
            {btnName}
          </button>
        ))}
      </div>
    </div>
  );
};
