import { Complaint, complaints } from "@/data/complaintsData";
import { ISidebarLinks, sidebarLinks } from "@/data/sidebarlink.Data";
import { createContext, Dispatch, ReactNode, useState } from "react";

interface IContextState {
  show: boolean;
  setShow: Dispatch<React.SetStateAction<boolean>>;
  showFilterModal: boolean;
  setShowFilterModal: Dispatch<React.SetStateAction<boolean>>;
  sidebarLinks: ISidebarLinks[];
  setSidebarLinks: Dispatch<React.SetStateAction<ISidebarLinks[]>>;
  complaintsData: Complaint[];
  setComplaintsData: Dispatch<React.SetStateAction<Complaint[]>>;
}

const defaultValue = {
  show: true,
  setShow: () => {},
  sidebarLinks,
  setSidebarLinks: () => {},
  showFilterModal: false,
  setShowFilterModal: () => {},
  complaintsData: complaints,
  setComplaintsData: () => {},
};

export const Context = createContext<IContextState>(defaultValue);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    show: sh,
    showFilterModal: sfm,
    sidebarLinks: sls,
    complaintsData: cpd,
  } = defaultValue;
  const [show, setShow] = useState(sh);
  const [showFilterModal, setShowFilterModal] = useState(sfm);
  const [sidebarLinks, setSidebarLinks] = useState(sls);
  const [complaintsData, setComplaintsData] = useState(cpd);

  return (
    <Context.Provider
      value={{
        show,
        setShow,
        showFilterModal,
        setShowFilterModal,
        sidebarLinks,
        setSidebarLinks,
        complaintsData,
        setComplaintsData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
