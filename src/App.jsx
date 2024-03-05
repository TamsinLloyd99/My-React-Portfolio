import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RenderPage from "./components/RenderPage";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";


function App() {
  return (
  <Router>
    <div className="App">
      <RenderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

//use react router
