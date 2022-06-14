import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};
