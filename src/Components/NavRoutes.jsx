import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Login from "../pages/Login";
import MyEffect from "./MyEffect"
import Products from "../pages/Products";
function NavRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<MyEffect/>} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
