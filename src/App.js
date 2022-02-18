import React from "react";

import "./App.css";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
import Blogs from "./Pages/Blogs/blogs";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
