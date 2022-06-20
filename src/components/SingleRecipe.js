import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const SingleRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    axios
      .get(`https://digitalcookbookapi.herokuapp.com/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(recipe);

  return (
    <section>
      {recipe && (
        <div key={recipe.id}>
          <p>{recipe.image}</p>
          <p>Name: {recipe.name}</p>
          <p>Author: {recipe.author}</p>
          <p>Description: {recipe.description}</p>
          <p>Category: {recipe.category}</p>
          <ul>
            Steps
            {recipe.steps.map((step, index) => {
              return (
                <li key={index}>
                  {step.number}: {step.details}
                </li>
              );
            })}
          </ul>
          <Link to="/recipes">Back to Recipes</Link>
        </div>
      )}
    </section>
  );
};
