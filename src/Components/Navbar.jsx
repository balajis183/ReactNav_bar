import React from "react";
import "../Styles/NavStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-brand">My Brand</div>
      <div className="nav-links">
        <Link to="/"> Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about"> About us</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/products">Products</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
