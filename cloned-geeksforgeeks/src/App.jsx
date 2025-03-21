import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Yash from "./components/Yash/Yash";
import Sidebar from "./components/Hariram/Sidebar";
import Homesection from "./components/Sahil/Homesection";
import { useState } from "react";
import Navbar from "./components/Bhanu/Bhanu";
const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Introduction");
  return (
    <Router>
      <div>
        <Yash />
        <div className="flex ">
          <Sidebar setSelectedTopic={setSelectedTopic} />
          <Homesection selectedTopic={selectedTopic} />
          {/* <Navbar /> */}
        </div>
      </div>
      {/* <Routes>
        <Route path="/bhanu" element={<Navbar />}></Route>
      </Routes> */}
    </Router>
  );
};

export default App;
