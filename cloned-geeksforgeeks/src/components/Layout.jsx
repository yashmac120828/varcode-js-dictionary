import React from "react";
import Navbar from "./Bhanu/Bhanu";
import Yash from "../components/Yash/Yash";
import Sidebar from "./Hariram/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <div>
      <div className="top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="fixed top-[60px] left-0 w-full z-40">
        <Yash />
      </div>
      {/* <div className="w-full flex flex-row flex-wrap w-[250px] h-screen fixed top-[100px] left-0 bg-gray-100 shadow-lg overflow-y-auto">
        <Sidebar />
        <Outlet />
      </div> */}
       <div className="flex w-full " style={{ marginTop:"100px " }}>  
          <div className='w-full flex flex-row flex-wrap h-screen fixed top-[120px] left-0 bg-gray-100 shadow-lg overflow-y-auto'>
          <Sidebar />
          <Outlet />
          </div> 
      </div>
    </div>
  );
};

export default Layout;
