import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import profile from "../assets/image 116.png";
import { CaretDown } from "phosphor-react";

const Nav = () => {
  return (
    <div className="">
      <Navbar className="flex justify-center px-2 border-none">
        <NavbarContainer>
          <NavbarBrand className="flex gap-2 cursor-pointer">
            <div>
              <img
                className="rounded-full w-12 h-12"
                src={profile}
                alt="keep"
              />
            </div>
            <div>
              <h6 className="font-semibold flex justify-between items-center">
                <span>sagar soni</span>
                <span>
                  <CaretDown />
                </span>
              </h6>
              <p className="text-gray-500">sagar@gmail.com</p>
            </div>
          </NavbarBrand>
          <NavbarList>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem active>Get Started</NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>Figma</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem active>Get Started</NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
      <hr />
    </div>
  );
};

export default Nav;
