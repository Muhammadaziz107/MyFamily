import React from "react";

import "./App.css";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
import About from "./Pages/About/about"

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
