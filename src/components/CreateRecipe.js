import React, { useState } from "react";
import { CreateInfo } from "./CreateInfo";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const CreateRecipe = () => {
  // create recipe + steps form

  const { user } = useAuth0();
  const [stepInput, setStepInput] = useState({});
  const [steps, setSteps] = useState([]);
  const [recipe, setRecipe] = useState({
    name: "",
    author: user.nickname,
    description: "",
    image: "",
    category: "",
    ingredients: "",
  });
  // post recipe .then post steps for recipe

  const submitRecipe = (e) => {
    e.preventDefault();
    axios
      .post("https://digitalcookbookapi.herokuapp.com/recipes", recipe)
      .then((response) => {
        let recipeId = response.data.created;
        steps.forEach((step) => (step.recipe_id = recipeId));
        return axios.post(
          `https://digitalcookbookapi.herokuapp.com/steps/${recipeId}`,
          steps
        );
      })
      .then((data) => {
        console.log("Final Response:", data);
      })
      .catch((err) => console.log("error:", err));
  };

  const handleRecipeChange = (e) => {
    setRecipe((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleStepsInput = (e) => {
    setStepInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const AddStep = () => {
    setSteps((steps) => [...steps, stepInput]);
  };
  console.log(recipe);
  console.log(stepInput);
  console.log(steps);

  return (
    <section>
      <CreateInfo />
      <section className="create-form-container">
        <div className="steps-form-container">
          <h2>Current Steps</h2>
          {steps.length > 0 ? (
            <ul>
              {steps.map((item, index) => (
                <li key={index}>
                  Step #{item.number}: {item.details}
                </li>
              ))}
            </ul>
          ) : (
            <h4>Add Some Steps!</h4>
          )}

          <form>
            <label>
              Step Number:
              <input
                name="number"
                type="number"
                onChange={handleStepsInput}
              ></input>
            </label>
            <label>
              Step Details:
              <input
                name="details"
                type="text"
                onChange={handleStepsInput}
              ></input>
            </label>
            <button type="reset" onClick={AddStep}>
              Add Step
            </button>
          </form>
        </div>
        <div className="recipe-form-container">
          <form>
            <label>
              Recipe Name:
              <input
                required
                name="name"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>
            <label>
              Description:
              <input
                required
                name="description"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>
            <label>
              Category:
              <input
                required
                name="category"
                type="text"
                onChange={handleRecipeChange}
              ></input>
              <label>
                Ingredients
                <input
                  required
                  name="ingredients"
                  type="text"
                  onChange={handleRecipeChange}
                ></input>
              </label>
            </label>
            <label>
              Image Link:
              <input
                required
                name="image"
                type="text"
                onChange={handleRecipeChange}
              ></input>
            </label>

            <button type="submit" onClick={submitRecipe}>
              Create Recipe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};
