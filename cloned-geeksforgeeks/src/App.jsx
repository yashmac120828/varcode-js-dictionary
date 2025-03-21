import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homesection from "./components/Sahil/Homesection";
import Layout from "./components/Layout";
import Introduction from "./components/Topics/Introduction";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route inside Layout */}
          <Route index element={<Homesection />} />
          <Route path="html-introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
