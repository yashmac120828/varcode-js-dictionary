import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = ({ setSelectedTopic }) => {
  const jsTopics = [
    { title: "JavaScript Basics", subtopics: ["Introduction", "Syntax", "Hello World"] },
    { title: "JS Variables & Datatypes", subtopics: ["var, let, const", "Primitive Types", "Type Conversion"] },
    { title: "JS Operators", subtopics: ["Arithmetic", "Comparison", "Logical"] },
    { title: "JS Loops", subtopics: ["for", "while", "do-while"] },
    { title: "JS Functions", subtopics: ["Function Declaration", "Arrow Functions", "Callbacks"] },
    { title: "JavaScript Basics", subtopics: ["Introduction", "Syntax", "Hello World"] },
    { title: "JS Variables & Datatypes", subtopics: ["var, let, const", "Primitive Types", "Type Conversion"] },
    { title: "JS Operators", subtopics: ["Arithmetic", "Comparison", "Logical"] },
    { title: "JS Loops", subtopics: ["for", "while", "do-while"] },
    { title: "JS Functions", subtopics: ["Function Declaration", "Arrow Functions", "Callbacks"] },
    { title: "JavaScript Basics", subtopics: ["Introduction", "Syntax", "Hello World"] },
    { title: "JS Variables & Datatypes", subtopics: ["var, let, const", "Primitive Types", "Type Conversion"] },
    { title: "JS Operators", subtopics: ["Arithmetic", "Comparison", "Logical"] },
    { title: "JS Loops", subtopics: ["for", "while", "do-while"] },
    { title: "JS Functions", subtopics: ["Function Declaration", "Arrow Functions", "Callbacks"] },
    { title: "JavaScript Basics", subtopics: ["Introduction", "Syntax", "Hello World"] },
    { title: "JS Variables & Datatypes", subtopics: ["var, let, const", "Primitive Types", "Type Conversion"] },
    { title: "JS Operators", subtopics: ["Arithmetic", "Comparison", "Logical"] },
    { title: "JS Loops", subtopics: ["for", "while", "do-while"] },
    { title: "JS Functions", subtopics: ["Function Declaration", "Arrow Functions", "Callbacks"] },
    { title: "JavaScript Basics", subtopics: ["Introduction", "Syntax", "Hello World"] },
    { title: "JS Variables & Datatypes", subtopics: ["var, let, const", "Primitive Types", "Type Conversion"] },
    { title: "JS Operators", subtopics: ["Arithmetic", "Comparison", "Logical"] },
    { title: "JS Loops", subtopics: ["for", "while", "do-while"] },
    { title: "JS Functions", subtopics: ["Function Declaration", "Arrow Functions", "Callbacks"] },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [activeSubtopic, setActiveSubtopic] = useState(null); // Track the active submenu item

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-3 pl-3 pr-2 w-[22%] border-r border-gray-200 h-screen bg-white">
      <h2 className="p-2 text-xl font-bold text-red-700 border-b border-gray-300 sticky top-0 bg-white">
        JavaScript Tutorial
      </h2>

      <div className="h-[calc(100vh-50px)] overflow-y-auto custom-scrollbar p-1">
        <ul className="space-y-2 w-full hover:cursor-pointer">
          {jsTopics.map((topic, index) => (
            <li key={index} className="relative">
              {/* Main topic section */}
              <div
                className={`flex justify-between items-center p-2 cursor-pointer transition-all hover:font-bold ${openIndex === index ? "bg-red-200 font-bold" : "hover:bg-red-100"
                  }`}
                onClick={() => toggleDropdown(index)}
              >
                <span onClick={() => setSelectedTopic(topic.title)}>{topic.title}</span>

                {/* Rotating icon with smooth transition */}
                <span className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  <IoIosArrowDown />
                </span>
              </div>

              {/* Submenu section */}
              {openIndex === index && (
                <ul className="pl-4 text-sm transition-all duration-300">
                  {topic.subtopics.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className={`p-1 pl-2 mt-1 cursor-pointer transition-all rounded-md ${activeSubtopic === sub
                          ? "bg-red-200 font-semibold"
                          : "hover:bg-red-200 hover:font-semibold"
                        }`}
                      onClick={() => {
                        setSelectedTopic(sub);
                        setActiveSubtopic(sub);
                      }}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;