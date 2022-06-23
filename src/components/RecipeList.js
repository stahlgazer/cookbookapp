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
    <section className="recipe-section">
      <div className="filters-container">
        <button onClick={() => setSearchCategory("")}>All</button>
        <button onClick={() => setSearchCategory("breakfast")}>
          Breakfast
        </button>
        <button onClick={() => setSearchCategory("lunch")}>Lunch</button>
        <button onClick={() => setSearchCategory("dinner")}>Dinner</button>
        <button onClick={() => setSearchCategory("dessert")}>Dessert</button>
        <button onClick={() => setSearchCategory("snack")}>Snack</button>
      </div>
      <div className="search-container">
        <label>Search by Recipe Name: </label>
        <input
          value={searchCategory}
          type="text"
          name="search"
          onChange={(e) => setSearchCategory(e.target.value)}
        ></input>
        <button onClick={() => setSearchCategory("")}>Clear</button>
      </div>
      <div className="recipes-container">
        {recipes &&
          recipes
            .filter((values) => {
              if (searchCategory === "") {
                return values;
              }
              if (values.category.includes(searchCategory)) {
                return values;
              }
              if (values.name.includes(searchCategory)) {
                return values;
              } else return false;
            })
            .map((recipe) => {
              return (
                <div className="recipes-cards" key={recipe.id}>
                  <img
                    className="recipe-cards-photo"
                    alt="recipe preview"
                    src={recipe.image}
                  />
                  <p>Name: {recipe.name}</p>
                  <p>Author: {recipe.author}</p>
                  <p>Description: {recipe.description}</p>
                  <p>Category: {recipe.category}</p>
                  <Link to={`/recipes/${recipe.id}`}>View</Link>
                </div>
              );
            })}
      </div>
    </section>
  );
};
