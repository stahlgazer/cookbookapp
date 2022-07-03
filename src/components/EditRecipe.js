import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const EditRecipe = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [updated, setUpdated] = useState(0);
  const [stepInput, setStepInput] = useState();

  // grab recipe details and steps into default state
  useEffect(() => {
    axios
      .get(`https://digitalcookbookapi.herokuapp.com/recipes/${id}`)
      .then((response) => setRecipe(response.data))
      .catch((err) => console.log(err));
  }, [id, updated]);
  console.log("recipe: ", recipe);

  // handle recipe form input change
  const handleRecipeChange = (e) => {
    setRecipe((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  // send recipe post with the specific data from new user input
  const updateRecipe = (e) => {
    e.preventDefault();
    axios
      .put(`https://digitalcookbookapi.herokuapp.com/recipes/${id}`, {
        name: recipe.name,
        author: user.nickname,
        description: recipe.description,
        ingredients: recipe.ingredients,
        category: recipe.category,
        image: recipe.image,
      })
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        navigate("/dashboard");
      });
  };

  // submit changes, add step, edit step, delete step

  const handleStepChange = (e) => {
    setStepInput(() => ({ [e.target.name]: e.target.value }));
  };

  const onStepUpdate = (stepId) => {
    axios
      .put(
        `https://digitalcookbookapi.herokuapp.com/steps/${stepId}`,
        stepInput
      )
      .then((res) => {
        console.log(res);
        setUpdated(updated + 1);
        setStepInput("");
        document.getElementById("steps-update").value = "";
      })
      .catch((err) => console.log(err));
  };

  // display state/steps in edit form
  return (
    <section>
      <h2>Edit Recipe</h2>
      {recipe ? (
        <div>
          <h3>Steps</h3>
          <ul>
            {recipe.steps.map((step) => {
              return (
                <li key={step.id}>
                  {step.number}: {step.details}
                  <input
                    id="steps-update"
                    type="text"
                    name="details"
                    onChange={handleStepChange}
                  />
                  <button onClick={() => onStepUpdate(step.id)}>Update</button>
                </li>
              );
            })}
          </ul>
          <form>
            <label>
              Recipe Name:
              <input
                value={recipe.name}
                required
                name="name"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>

            <label>
              Description:
              <input
                value={recipe.description}
                required
                name="description"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>

            <label>
              Category:
              <select
                value={recipe.category}
                name="category"
                required
                onChange={handleRecipeChange}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
              </select>
            </label>

            <label>
              Ingredients:
              <input
                value={recipe.ingredients}
                required
                name="ingredients"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>

            <label>
              Image:
              <input
                value={recipe.image}
                required
                name="image"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>
            <button
              disabled={
                recipe.name === "" ||
                recipe.description === "" ||
                recipe.image === "" ||
                recipe.category === "" ||
                recipe.ingredients === ""
              }
              type="submit"
              onClick={updateRecipe}
            >
              Update Recipe
            </button>
          </form>
        </div>
      ) : null}

      <Link to="/dashboard">Cancel</Link>
    </section>
  );
};
