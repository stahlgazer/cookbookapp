import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = () => {
  const { user } = useAuth0();
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios
      .get("https://digitalcookbookapi.herokuapp.com/recipes")
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(recipes);

  return (
    <section>
      <h2>Welcome to the Dashboard</h2>
      <Link to="/create">Create New Recipe</Link>
      <h3>Your Recipes</h3>
      {recipes &&
        recipes
          .filter((items) => items.author === user.nickname)
          .map((created, index) => {
            return (
              <div key={index}>
                <p>{created.name}</p>
                <p>{created.category}</p>
                <p>{created.author}</p>
                <p>{created.description}</p>
                <p>{created.ingredients}</p>
                <p>{created.image}</p>
                <Link to={`edit/${created.id}`}>Edit</Link>
                <button>Delete</button>
              </div>
            );
          })}
    </section>
  );
};
