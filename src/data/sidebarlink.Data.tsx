import {
  BranchIcon,
  RolesIcon,
  UserIcon,
  CardSchemeIcon,
  CardProfileIcon,
  CardRequestIcon,
  StockIcon,
  CardsIcon,
  BlockUnblockCardIcon,
  GenerationPinIcon,
  ComplaintsIcon,
  ComplaintsResolveIcon,
  AuthListIcon,
  AuthQueueIcon,
  TrailIcon,
  AccountIcon,
} from "@/assets/svgs";
import { JSX } from "react";

export interface ISidebarLinks {
  label: string;
  icon: JSX.Element;
  to: string[];
}

export const sidebarLinks: ISidebarLinks[] = [
  { label: "Branches", icon: <BranchIcon />, to: ["/branches"] },
  { label: "Roles", icon: <RolesIcon />, to: ["/roles"] },
  { label: "Users", icon: <UserIcon />, to: ["/users"] },
  { label: "Card Scheme", icon: <CardSchemeIcon />, to: ["/card-scheme"] },
  { label: "Card Profile", icon: <CardProfileIcon />, to: ["/card-profile"] },
  { label: "Card Request", icon: <CardRequestIcon />, to: ["/card-request"] },
  { label: "Stock", icon: <StockIcon />, to: ["/stock"] },
  { label: "Cards", icon: <CardsIcon />, to: ["/cards"] },
  {
    label: "Block/Unblock Card",
    icon: <BlockUnblockCardIcon />,
    to: ["/block-unblock-card"],
  },
  {
    label: "Generate/Reissue Pin",
    icon: <GenerationPinIcon />,
    to: ["/generate-pin"],
  },
  {
    label: "Complaints: Log",
    icon: <ComplaintsIcon />,
    to: ["/complaints-log"],
  },
  {
    label: "Complaints: Resolve",
    icon: <ComplaintsResolveIcon />,
    to: ["/complaints-resolve"],
  },
  {
    label: "Authorization List",
    icon: <AuthListIcon />,
    to: ["/authorization-list"],
  },
  {
    label: "Authorization Queue",
    icon: <AuthQueueIcon />,
    to: ["/authorization-queue"],
  },
  { label: "Trail", icon: <TrailIcon />, to: ["/trail"] },
  { label: "Account", icon: <AccountIcon />, to: ["/account"] },
];
