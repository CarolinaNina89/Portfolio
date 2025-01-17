import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
