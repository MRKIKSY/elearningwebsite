import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Company from "./components/Company-section/Company";
import Testimonials from "./components/Testimonial/Testimonials";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
      
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="company" element={<Company />} />
          <Route path="testimonials" element={<Testimonials />} />
         

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

