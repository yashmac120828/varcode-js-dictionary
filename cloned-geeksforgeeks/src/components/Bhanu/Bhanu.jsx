import React, { useState, useEffect } from "react";
import { FaSearch, FaBell, FaGoogle } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Dropdown arrows


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Persist dark mode state
  });
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State for search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false); // State for courses dropdown
  const [showTutorialsDropdown, setShowTutorialsDropdown] = useState(false);
  const [showHtmlCssDropdown, setShowHtmlCssDropdown] = useState(false); // Added for HTML/CSS Dropdown
  const [showJavaScriptDropdown, setShowJavaScriptDropdown] = useState(false); // Added JavaScript Dropdown


  // Apply dark mode styles when toggled
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
    } else {
      document.body.classList.remove("bg-gray-900", "text-white");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Show Login Modal
  const handleSignIn = () => {
    setShowLogin(true);
  };

  // Close Login Modal
  const closeModal = () => {
    setShowLogin(false);
  };

  // Handle Bell Icon Click
  const handleBellClick = () => {
    if (!isLoggedIn) {
      setShowLogin(true); // Show login modal if not signed in
    } else {
      setShowNotifications(!showNotifications); // Toggle notifications if signed in
    }
  };

  // Toggle Search Bar
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setSearchQuery(""); // Reset search input when opening/closing
  };

  // Toggle Courses Dropdown
  const toggleCoursesDropdown = () => {
    setShowCoursesDropdown((prev) => !prev);
    setShowTutorialsDropdown(false);
    setShowHtmlCssDropdown(false);
    setShowJavaScriptDropdown(false);
  }

  // Toggle Tutorials Dropdown
  const toggleTutorialsDropdown = () => {
    setShowTutorialsDropdown((prev) => !prev);
    setShowCoursesDropdown(false);
    setShowHtmlCssDropdown(false);
    setShowJavaScriptDropdown(false);
  }

  // Toggle HTML/CSS Dropdown 
  const toggleHtmlCssDropdown = () => {
    setShowHtmlCssDropdown((prev) => !prev);
    setShowCoursesDropdown(false);
    setShowTutorialsDropdown(false);
    setShowJavaScriptDropdown(false);
  }

  // Toggle JavaScript Dropdown
  const toggleJavaScriptDropdown = () => {
    setShowJavaScriptDropdown((prev) => !prev);
    setShowCoursesDropdown(false);
    setShowTutorialsDropdown(false);
    setShowHtmlCssDropdown(false);
  }
  

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
        {/* Left Side: Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            {/* Courses Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600"
              onClick={() => setShowCoursesDropdown(!showCoursesDropdown)}>
              Courses
              {showCoursesDropdown ? (
                <IoIosArrowUp className="ml-1 inline" />
              ) : (
                <IoIosArrowDown className="ml-1 inline" />
              )}

              {/* Dropdown Menu */}
              {showCoursesDropdown && (
                <ul className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg text-gray-800 p-2 z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">DSA to Development</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">For Working Professionals</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">For Students</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Full Stack Development</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Data Science Program</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">All Courses</li>
                </ul>
              )}
            </li>
            <li className="relative cursor-pointer hover:text-red-600"
              onClick={toggleTutorialsDropdown}>
              Tutorials
              {showTutorialsDropdown ? <IoIosArrowUp className="ml-1 inline" /> : <IoIosArrowDown className="ml-1 inline" />}

              {/* Dropdown Menu */}
              {showTutorialsDropdown && (
                <ul className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg text-gray-800 p-2 z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Web Development using Python</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">ML & Data Science</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Data Structures & Algorithms</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">System Design</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Interview Corner</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Languages</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">CS Subjects</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">DevOps And Linux</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">School Learning</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">GATE</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">GeeksforGeeks Videos</li>
                </ul>
              )}
            </li>
            <li className="relative cursor-pointer hover:text-red-600" onClick={toggleHtmlCssDropdown}>
              HTML/CSS {showHtmlCssDropdown ? <IoIosArrowUp className="ml-1 inline" /> : <IoIosArrowDown className="ml-1 inline" />}
              {showHtmlCssDropdown && (
                <ul className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg text-gray-800 p-2 z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">HTML Basics</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">CSS Grid & Flexbox</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Responsive Design</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Animations & Transitions</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">CSS Preprocessors</li>
                </ul>
              )}
            </li>
            <li className="relative cursor-pointer hover:text-red-600" onClick={() => setShowJavaScriptDropdown(!showJavaScriptDropdown)}>
              JavaScript {showJavaScriptDropdown ? <IoIosArrowUp className="ml-1 inline" /> : <IoIosArrowDown className="ml-1 inline" />}
              {showJavaScriptDropdown && (
                <ul className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg text-gray-800 p-2 z-10">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">JavaScript Basics</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Top JavaScript Projects</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">JS Frameworks</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">jQuery</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">ES6</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">TypeScript Tutorial</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">ReactJS Tutorial</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">ReactJS Frameworks</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Node.js Tutorial</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Express.js Tutorial</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Interview Corners</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
          <span className="text-black">VAR</span>
          <span className="text-red-600">CODE</span> <span className="text-black">EDU</span>
          <span className="text-red-600">TECH</span>
        </div>

        {/* Right Side: Icons & Sign In */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FaSearch
            className="text-gray-600 cursor-pointer hover:text-black"
            onClick={toggleSearch}
          />
          
          {/* Dark Mode Toggle */}
          <BsMoon
            className={`cursor-pointer ${darkMode ? "text-red-400" : "text-gray-600"} hover:text-black`}
            onClick={toggleDarkMode}
          />
          
          {/* Bell Icon with Conditional Logic */}
          <FaBell className="text-gray-600 cursor-pointer hover:text-black" onClick={handleBellClick} />

          {/* Sign In Button (Hide if Logged In) */}
          {!isLoggedIn && (
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* Search Bar (Appears when search icon is clicked) */}
      {showSearch && (
        <div className="fixed top-14 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-3 rounded-md flex items-center space-x-2 w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded text-black bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <AiOutlineClose className="text-gray-600 cursor-pointer hover:text-black" onClick={toggleSearch} />
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative text-black">
            {/* Close Button */}
            <button className="absolute top-3 right-3 text-black" onClick={closeModal}>
              <AiOutlineClose size={20} />
            </button>

            {/* varCODE Logo */}
            <div className="flex justify-center mb-4">
              <img src="../VARCODE_IMG.png" alt="varCODE Logo" className="h-12" />
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Signin to <span className="text-black">var</span>
              <span className="text-red-600">CODE</span>
            </h2>
            <p className="text-black text-sm mb-4 text-center">Welcome back! Please signin to your account</p>

            {/* Social Login Buttons */}
            <button
              className="w-full flex items-center justify-center bg-white text-black border border-gray-300 py-2 mb-3 rounded-lg hover:bg-gray-100 shadow-sm"
              onClick={() => {
                setIsLoggedIn(true);
                setShowLogin(false);
              }}
            >
              <img
                src="../Google_logo.png"
                alt="Google Logo"
                className="h-5 w-5 mr-2"
              />

              <span className="font-medium">Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center my-3">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Login Form */}
            <div>
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full p-2 mb-3 border rounded text-black bg-white"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-2 mb-3 border rounded text-black bg-white"
              />
              <div className="flex justify-between items-center mb-3">
                <label className="flex items-center text-black">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <span className="text-black hover:text-red-500 cursor-pointer">Forgot Password</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={() => {
                  setIsLoggedIn(true);
                  setShowLogin(false);
                }}
              >
                Sign In
              </button>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              Don’t have an account?
              <span className="text-black hover:text-red-500 cursor-pointer"> Sign up</span>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
