import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="home-container">
      <div className="info-container">
        <h1>Digital Cookbook</h1>
        <ul>
          <li>
            Create recipes and manage all of your recipes in your Dashboard
            while having complete control to create or update and delete
            anything you've created.
          </li>
          <li>
            Explore recipes other users have created in order to get some
            inspiration, or add some of your own!
          </li>

          <li>
            Search any recipe created by another member using recipe name,
            category, or author.
          </li>
        </ul>
        <button className="homebtn" onClick={() => loginWithRedirect()}>
          Get Started
        </button>
      </div>
    </section>
  );
};
