import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RecipeList = () => {
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
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <p>name: {recipe.name}</p>
              <p>author: {recipe.author}</p>
              <p>info: {recipe.description}</p>
              <p>{recipe.image}</p>
              <p>{recipe.category}</p>
              <Link to="/">Back Home</Link>
            </div>
          );
        })}
    </section>
  );
};
