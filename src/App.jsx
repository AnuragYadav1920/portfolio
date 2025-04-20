import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from "../src/exports/AllComponents";
import * as Pages from "../src/exports/AllPages";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Components.Navbar />
      <Routes>
        <Route path="/" element={<Pages.Home/>} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/education" element={<Pages.Education />} />
        <Route path="/experience" element={<Pages.Experience />} />
        <Route path="/skills" element={<Pages.Skills />} />
        <Route path="/projects" element={<Pages.Projects />} />
        <Route path="/contact" element={<Pages.Contact />} />
        <Route path="/trainings" element={<Pages.Training />} />
        <Route path="/certification" element={<Pages.Certification />} />
        <Route path="*" element={<Pages.NoPage />} />
      </Routes>
      <Components.Footer />
    </BrowserRouter>
  );
};

export default App;
