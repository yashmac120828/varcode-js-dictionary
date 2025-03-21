import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const subNavLinks = [
  { name: "DSA with JS", path: "/dsa-js" },
  { name: "JS Tutorial", path: "/js-tutorial" },
  { name: "JS Interview Questions", path: "/js-interview" },
  { name: "JS String", path: "/js-string" },
  { name: "JS Array", path: "/js-array" },
  { name: "JS Object", path: "/js-object" },
  { name: "JS Operator", path: "/js-operator" },
  { name: "JS Date", path: "/js-date" },
  { name: "JS Projects", path: "/js-projects" },
  { name: "JS Functions", path: "/js-functions" },
  { name: "JS Scope", path: "/js-scope" },
  { name: "JS Hoisting", path: "/js-hoisting" },
  { name: "JS Closures", path: "/js-closures" },
  { name: "JS Promises", path: "/js-promises" },
  { name: "JS Async/Await", path: "/js-async-await" },
  { name: "JS Event Loop", path: "/js-event-loop" },
  { name: "JS Callbacks", path: "/js-callbacks" },
  { name: "JS Prototypes", path: "/js-prototypes" },
  { name: "JS Classes", path: "/js-classes" },
  { name: "JS Inheritance", path: "/js-inheritance" },
  { name: "JS Modules", path: "/js-modules" },
  { name: "JS Fetch API", path: "/js-fetch-api" },
  { name: "JS Web Storage", path: "/js-web-storage" },
  { name: "JS LocalStorage", path: "/js-localstorage" },
  { name: "JS SessionStorage", path: "/js-sessionstorage" },
  { name: "JS JSON", path: "/js-json" },
  { name: "JS AJAX", path: "/js-ajax" },
  { name: "JS DOM Manipulation", path: "/js-dom" },
  { name: "JS Forms & Validation", path: "/js-forms" },
  { name: "JS Regular Expressions", path: "/js-regex" },
  { name: "JS Error Handling", path: "/js-error-handling" },
  { name: "JS Debugging", path: "/js-debugging" },
  { name: "JS ES6 Features", path: "/js-es6" },
  { name: "JS Set & Map", path: "/js-set-map" },
  { name: "JS WeakSet & WeakMap", path: "/js-weakset-weakmap" },
  { name: "JS Symbols", path: "/js-symbols" },
  { name: "JS Iterators & Generators", path: "/js-iterators-generators" },
  { name: "JS WebSockets", path: "/js-websockets" },
  { name: "JS Service Workers", path: "/js-service-workers" },
  { name: "JS IndexedDB", path: "/js-indexeddb" },
  { name: "JS Performance Optimization", path: "/js-performance" },
  { name: "JS Functional Programming", path: "/js-functional" },
  { name: "JS Reactive Programming", path: "/js-reactive" },
  { name: "JS Web Components", path: "/js-web-components" },
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
    <nav className="relative bg-gray-800 text-white py-2 px-4 shadow-md flex items-center">
      <button
        className="absolute left-0 px-2 py-1 rounded-md z-10"
        onClick={() => scrollNav("left")}
      >
        <FaChevronLeft size={20} />
      </button>

      <div
        ref={navRef}
        className="flex space-x-4 overflow-x-auto whitespace-nowrap px-10 scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {subNavLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        className="absolute right-0 px-2 py-1 rounded-md z-10"
        onClick={() => scrollNav("right")}
      >
        <FaChevronRight size={20} />
      </button>
    </nav>
  );
};

export default SubNav;
