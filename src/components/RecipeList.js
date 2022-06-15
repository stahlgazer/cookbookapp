import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RecipeList = () => {
  const [recipes, setRecipes] = useState();
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://digitalcookbookapi.herokuapp.com/recipes")
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(recipes);

  return (
    <section>
      <button onClick={() => setSearchCategory("")}>All</button>
      <button onClick={() => setSearchCategory("breakfast")}>Breakfast</button>
      <button onClick={() => setSearchCategory("lunch")}>Lunch</button>
      <button onClick={() => setSearchCategory("dinner")}>Dinner</button>
      <button onClick={() => setSearchCategory("dessert")}>Dessert</button>
      {recipes &&
        recipes
          .filter((values) => {
            if (searchCategory === "") {
              return values;
            }
            if (values.category.includes(searchCategory)) {
              return values;
            } else return false;
          })
          .map((recipe) => {
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
