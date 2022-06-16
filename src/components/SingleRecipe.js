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
          <p>name: {recipe.name}</p>
          <p>author: {recipe.author}</p>
          <p>info: {recipe.description}</p>
          <p>{recipe.image}</p>
          <p>{recipe.category}</p>
          <Link to="/recipes">Back to Recipes</Link>
        </div>
      )}
    </section>
  );
};
