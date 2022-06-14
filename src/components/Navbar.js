import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navitems">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </div>{" "}
      <Avatar
        className="avatar"
        alt="User Avatar"
        src="/static/images/avatar/1.jpg"
      />
    </nav>
  );
};
