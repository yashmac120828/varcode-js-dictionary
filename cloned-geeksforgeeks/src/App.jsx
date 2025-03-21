import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Yash from "./components/Yash/Yash";
import Sidebar from "./components/Hariram/Sidebar";
import Homesection from "./components/Sahil/Homesection"
import { useState } from "react";
const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("Introduction");
  return (
    
    <Router>
      <div>
        <Yash />
        <div className="flex ">
        <Sidebar setSelectedTopic={setSelectedTopic} />
        <Homesection selectedTopic={selectedTopic} />
          </div>
      </div>
    </Router>
  );
};

export default App;
