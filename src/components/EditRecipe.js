import React from "react";
import { Link } from "react-router-dom";

export const EditRecipe = () => {
  return (
    <section>
      <h2>Edit Recipe</h2>
      <Link to="/dashboard">Back to Dashboard</Link>
    </section>
  );
};
