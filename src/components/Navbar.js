import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"></img>
      </Link>
      <Link className="nav-list" to="/cars">
        Hundai Subcription
      </Link>
      <Link className="nav-list" to="/cars">
        Mahindra Subcription
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-list" to="/faqs">
        FAQ's
      </Link>

      <Link className="nav-list" to="/login">
        Login or Signup
      </Link>
    </div>
  );
};
