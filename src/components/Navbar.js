import React from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import Avatar from "@mui/material/Avatar";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { user } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navitems">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "dodgerblue" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "dodgerblue" : "",
            };
          }}
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "dodgerblue" : "",
            };
          }}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "dodgerblue" : "",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      {user ? <Logout /> : <Login />}
      <Avatar
        className="avatar"
        alt="User Avatar"
        src={user ? `${user.picture}` : "/static/images/avatar/1.jpg"}
      />
    </nav>
  );
};
