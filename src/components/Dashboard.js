import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <section>
      <h2>Welcome to the Dashboard</h2>
      <Link to="/create">Create New Recipe</Link>
    </section>
  );
};
