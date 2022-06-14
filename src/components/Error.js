import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return <section>
    <h2>404</h2>
    <p>page not found</p>
    <Link to="/">go back home</Link>
  </section>;
};
