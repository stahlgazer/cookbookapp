import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="home-container">
      <div className="info-container">
        <h1>Our Digital Cookbook</h1>
        <ul>
          <li>
            A single place to create and manage your recipes, as well as check
            out recipes other users have created.
          </li>
          <li>
            Manage all of your recipes in your dashboard, while having complete
            control to update and delete anything you've created.
          </li>
          <li>Search any recipe created by recipe name or category.</li>
        </ul>
        <button className="homebtn" onClick={() => loginWithRedirect()}>
          Get Started
        </button>
      </div>
    </section>
  );
};
