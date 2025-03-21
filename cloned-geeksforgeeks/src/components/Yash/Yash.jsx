import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const subNavLinks = [
  { name: "HTML Tutorial", path: "/html-tutorial" },
  { name: "HTML Exercises", path: "/html-exercises" },
  { name: "HTML Tags", path: "/html-tags" },
  { name: "HTML Attributes", path: "/html-attributes" },
  { name: "Global Attributes", path: "/html-global-attributes" },
  { name: "Event Attributes", path: "/html-event-attributes" },
  { name: "HTML Interview Questions", path: "/html-interview-questions" },
  { name: "HTML DOM", path: "/html-dom" },
  { name: "DOM Audio/Video", path: "/html-dom-audio-video" },
  { name: "HTML 5", path: "/html5" },
  { name: "HTML Examples", path: "/html-examples" },
  { name: "Color Picker", path: "/html-color-picker" },
  { name: "A to Z Guide", path: "/html-a-to-z-guide" },
  { name: "HTML Formatter", path: "/html-formatter" },
];

const SubNav = () => {
  const navRef = useRef(null);

  const scrollNav = (direction) => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative bg-gray-800  text-white py-2 px-4 shadow-md flex items-center overflow-hidden">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 px-2 py-1 rounded-md bg-gray-900 bg-opacity-50 text-white z-10 hover:bg-opacity-70 transition"
        onClick={() => scrollNav("left")}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Scrollable Nav Links */}
      <div
        ref={navRef}
        className="flex space-x-4 overflow-x-auto px-10 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE/Edge
        }}
      >
        {subNavLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition whitespace-nowrap"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 px-2 py-1 rounded-md bg-gray-900 bg-opacity-50 text-white z-10 hover:bg-opacity-70 transition"
        onClick={() => scrollNav("right")}
      >
        <FaChevronRight size={20} />
      </button>
    </nav>
  );
};

export default SubNav;
