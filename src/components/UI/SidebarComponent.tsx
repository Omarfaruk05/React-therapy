import {
  FileText,
  Gear,
  Heart,
  HouseLine,
  Info,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { Sidebar, SidebarBody, SidebarItem, SidebarList } from "keep-react";

export const SidebarComponent = () => {
  return (
    <Sidebar className="sticky top-0 shadow-none rounded-none border-none w-fit h-fit">
      <SidebarBody>
        <SidebarList className="overscroll-contain">
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
