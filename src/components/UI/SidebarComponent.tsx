import {
  ChartPie,
  CheckSquare,
  FileSearch,
  FileText,
  Gear,
  Heart,
  HouseLine,
  Info,
  Lifebuoy,
  MagnifyingGlass,
  PersonSimple,
  PresentationChart,
  Stack,
  Users,
} from "phosphor-react";
import {
  Avatar,
  Input,
  InputIcon,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarItem,
  SidebarList,
} from "keep-react";
import { Link } from "react-router-dom";

export const SidebarComponent = () => {
  return (
    <Sidebar className="shadow-none rounded-none h-screen">
      <SidebarBody className="h-fit">
        <Link to="" className="flex justify-center items-center my-12">
          <span className="text-4xl text-blue-400 font-semibold uppercase">
            Logo
          </span>
        </Link>
        <SidebarList>
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <HouseLine size={20} />
            Home
          </SidebarItem>
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <Users size={20} />
            New Listing
          </SidebarItem>
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <MagnifyingGlass size={20} />
            Search
          </SidebarItem>
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <FileText size={20} />
            About
          </SidebarItem>
          <div className="pb-4">
            <SidebarItem className="hover:bg-[#D4E9FF]">
              <Heart size={20} />
              Favorites
            </SidebarItem>
          </div>
          <hr className="pb-4" />
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <Info size={20} />
            Help Center
          </SidebarItem>
          <SidebarItem className="hover:bg-[#D4E9FF]">
            <Gear size={20} />
            Settings
          </SidebarItem>
        </SidebarList>
      </SidebarBody>
      {/* <SidebarFooter className="block">
        <SidebarItem className="hover:bg-[#D4E9FF]">
          <Lifebuoy size={20} />
          Support
        </SidebarItem>
        <SidebarItem>
          <Gear size={20} />
          Settings
        </SidebarItem>
      </SidebarFooter> */}
    </Sidebar>
  );
};
