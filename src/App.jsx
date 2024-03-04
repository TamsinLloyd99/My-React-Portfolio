import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import contact from "./components/Contact";
import header from "./components/Header";
import home from "./components/HomePage";
import projects from "./components/Projects";

function App() {
  // return (
  <Router>
    <div className="App">
      <header />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </div>
  </Router>;
}

export default App;

//use react router
