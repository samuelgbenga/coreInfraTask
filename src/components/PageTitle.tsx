export const PageTitle = ({
  title,
  isLog = true,
}: {
  title: string;
  isLog?: boolean;
}) => {
  return (
    <div className="flex flex-col h-[63.5px] w-full space-y-[0.6875rem]">
      <h1 className="text-lg font-medium m-0 p-0 text-[#101828]">{title}</h1>

      <p className="text-[#475467] text-sm m-0 p-0">
        {isLog
          ? "View details of logged complaints and log new ones here."
          : "View details of treated complaints and resolve pending ones here."}
      </p>
      <div className="w-full h-[8px] border-b border-[#98A2B3]" />
    </div>
  );
};
