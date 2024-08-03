/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { SidebarComponent } from "../components/UI/SidebarComponent";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <aside className="hidden md:block">
          <SidebarComponent />
        </aside>
        <div className="w-full">
          <Nav />
          <main className="bg-[#D4E9FF]/30 h-full w-full p-8">
            {" "}
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
