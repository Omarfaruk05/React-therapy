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

const Nav = () => {
  // const [name, setName] = useState<string | null | undefined>();
  // const [email, setEmail] = useState<string | null | undefined>();
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

  // useEffect(() => {
  //   const user = auth.currentUser;

  //   setName(user?.displayName);
  //   setEmail(user?.email);
  // }, [name, email]);

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
                <span>{name}</span>
                <span>
                  <CaretDown />
                </span>
              </h6>
              <p className="text-gray-500">{email}</p>
            </div>
          </NavbarBrand>
          <NavbarList>
            <NavbarItem className="rounded-full w-12 h-12 flex p-1 justify-center items-center border border-gray-300">
              <Bell size={32} />
            </NavbarItem>
            <Button
              onClick={handleLogOut}
              size="md"
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
          <NavbarCollapseBtn />
          <NavbarCollapse>
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
