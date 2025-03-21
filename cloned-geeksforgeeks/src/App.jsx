import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection from "./components/Sahil/Homesection";
import { useState } from "react";
import Navbar from "./components/Bhanu/Bhanu";
import Layout from "./components/Layout";
import Introduction from "./components/Topics/Introduction";
const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Introduction");
  return (
    // <Router>
    //   <div>
    //     <Yash />
    //     <div className="flex ">
    //       <Sidebar setSelectedTopic={setSelectedTopic} />
    //       <Homesection selectedTopic={selectedTopic} />
    //       {/* <Navbar /> */}
    //     </div>
    //   </div>
    //   {/* <Routes>
    //     <Route path="/bhanu" element={<Navbar />}></Route>
    //   </Routes> */}
    // </Router>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homesection />} />
          <Route path="/html-introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
