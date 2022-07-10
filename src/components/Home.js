import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="home-container">
      <div className="info-container">
        <h1>Our Digital Cookbook</h1>
        <ul>
          <li>Check out recipes other users have created</li>
          <li>Create and manage your recipes in the dashboard</li>
          <li>Search for any recipes by name or category</li>
          <li>No apps, no downloads, what a piece of cake!</li>
        </ul>
        <button className="homebtn" onClick={() => loginWithRedirect()}>
          Get Started
        </button>
      </div>
    </section>
  );
};
