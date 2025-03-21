import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, ChevronDown } from "lucide-react";

const navItems = [
  { title: "Courses", link: "/courses" },
  { title: "Tutorials", link: "/tutorials" },
  { title: "HTML/CSS", link: "/html-css" },
  { title: "JavaScript", link: "/javascript" },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4 mb-0.5 shadow-md">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold">VarCode</h1>
        {navItems.map((item, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setDropdown(dropdown === item.title ? null : item.title)}
              className="flex items-center space-x-1 hover:text-gray-300 transition"
            >
              <span>{item.title}</span>
              <ChevronDown size={16} />
            </button>
            {dropdown === item.title && (
              <div className="absolute top-10 left-0 bg-white text-gray-800 w-48 shadow-lg rounded-md py-2">
                <Link to={`${item.link}/1`} className="block px-4 py-2 hover:bg-gray-200">Topic 1</Link>
                <Link to={`${item.link}/2`} className="block px-4 py-2 hover:bg-gray-200">Topic 2</Link>
                <Link to={`${item.link}/3`} className="block px-4 py-2 hover:bg-gray-200">Topic 3</Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-6">
        <Search size={20} className="cursor-pointer hover:text-gray-400" />
        <div className="relative cursor-pointer">
          <Bell size={20} className="hover:text-gray-400" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white px-2 py-1 rounded-full">46</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
