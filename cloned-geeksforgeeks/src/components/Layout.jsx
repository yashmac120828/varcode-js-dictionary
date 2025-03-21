import React from "react";
import Yash from "../components/Yash/Yash";
import Sidebar from "./Hariram/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Yash />
      <div className="w-full flex flex-row flex-wrap">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
