import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="home-container">
      <div className="info-container">
        <h1>Our Digital Cookbook</h1>
        <ul>
          <li>A single place to create and explore recipes</li>
          <li>Check out recipes other users have created</li>
          <li>Manage your recipes in the dashboard</li>
          <li>Search recipes by name or category</li>
        </ul>
        <button className="homebtn" onClick={() => loginWithRedirect()}>
          Get Started
        </button>
      </div>
    </section>
  );
};
