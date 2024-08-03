/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { SidebarComponent } from "../components/UI/SidebarComponent";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block w-[280px]">
          <SidebarComponent />
        </div>
        <div className="w-full">
          <Nav />
          <main className="grid grid-cols-1 bg-[#D4E9FF]/30 py-4 md:p-8">
            {" "}
            <Outlet />
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
