import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import htmlTopics from "../../utils/HTMLSidebar";

const Sidebar = () => {
  const navigate = useNavigate();

  // Function to navigate when a topic is clicked
  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="py-3 pl-0 pr-0 min-w-40 w-[20%] border-r border-gray-200 h-screen bg-white">
      <h2 className="p-2 text-2xl font-bold text-red-600 border-b border-gray-300 sticky top-0 bg-white">
        varCODE HTML Tutorial
      </h2>

      <div className="h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar p-1">
        <ul className="space-y-2 w-full hover:cursor-pointer">
          {htmlTopics && htmlTopics.length > 0 ? (
            htmlTopics.map((topic, index) => (
              <li
                key={index}
                className="p-2 hover:bg-red-200 hover:font-medium cursor-pointer transition-all"
                onClick={() => handleNavigation(topic.link)}
              >
                {topic.title}
              </li>
            ))
          ) : (
            <p className="p-2 text-gray-500">Loading topics...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
