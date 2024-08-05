import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import profile from "../assets/image 116.png";
import { Bell, CaretDown, SignOut } from "phosphor-react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase.init";
import { useNavigate } from "react-router-dom";
import photo from "../assets/image 116.png";
import { SidebarComponent } from "../components/UI/SidebarComponent";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    localStorage.removeItem("name");

    navigate("/login");
  };

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  return (
    <div className="">
      <Navbar className="flex justify-center px-2 border-none">
        <NavbarContainer className="relative">
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
                <span>{name}</span>
                <span>
                  <CaretDown />
                </span>
              </h6>
              <p className="text-gray-500">{email}</p>
            </div>
          </NavbarBrand>
          <NavbarList>
            <NavbarItem className="rounded-full w-8 h-8 flex p-1 justify-center items-center border border-gray-300">
              <Bell size={32} />
            </NavbarItem>
            <Button
              onClick={handleLogOut}
              size="xs"
              variant="outline"
              className="text-lg text-red-500 bg-none outline-none border-none  hover:bg-red-200"
            >
              Log Out
              <SignOut
                size={20}
                className="ml-3 text-red-500 bg-red-300 rounded-full w-8 h-8 p-1"
              />
            </Button>
          </NavbarList>

          <div className="lg:hidden flex gap-5">
            <Bell className=" w-6 h-6 text-gray-500" />
            <NavbarCollapseBtn />
          </div>
          <NavbarCollapse className="absolute -top-[21px] -right-[11px] md:-right-[31px] rounded-none   w-fit p-0 m-0 ">
            <NavbarCollapseBtn className="absolute p-2" />
            <div className="space-y-1 text-white bg-[#156BCA] m-0 pt-7 pb-5 pl-16 pr-5 w-full  grid grid-cols-1 justify-items-end">
              <div className=" text-right mt-20">
                <img
                  className="rounded-full h-16 w-16 text-right"
                  src={photo}
                  alt=""
                />
              </div>
              <h4 className="text-2xl font-semibold">{name}</h4>
              <p className="text-black">{email}</p>
            </div>
            <div>
              <SidebarComponent />
            </div>
            <NavbarItem
              onClick={handleLogOut}
              className="flex mx-auto bg-red-200  w-full justify-center rounded-none text-lg text-red-500 bg-none outline-none border-none  hover:bg-red-200"
            >
              Log Out
              <SignOut
                size={20}
                className="ml-3 text-red-500 bg-red-300 rounded-full w-8 h-8 p-1"
              />
            </NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
      <hr />
    </div>
  );
};

export default Nav;
