import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h1>Alpha Bookings</h1>
      </div>

      <nav className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
