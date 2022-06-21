import React, { useState } from "react";
import { CreateInfo } from "./CreateInfo";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateRecipe = () => {
  // create recipe + steps form
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [stepInput, setStepInput] = useState({
    number: "",
    details: "",
  });
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
        navigate("/dashboard");
      })
      .catch((err) => console.log("error:", err));
  };

  const handleRecipeChange = (e) => {
    setRecipe((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleStepsInput = (e) => {
    setStepInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const AddStep = (e) => {
    e.preventDefault();
    setSteps((steps) => [...steps, stepInput]);
    setStepInput({
      number: "",
      details: "",
    });
    document.getElementById("add-steps-form").reset();
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

          <form id="add-steps-form">
            <label>
              Step Number:
              <input
                required
                name="number"
                type="number"
                onChange={handleStepsInput}
              ></input>
            </label>
            <label>
              Step Details:
              <input
                required
                name="details"
                type="text"
                onChange={handleStepsInput}
              ></input>
            </label>
            <button
              type="submit"
              disabled={stepInput.number === "" || stepInput.details === ""}
              onClick={AddStep}
            >
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
              <select
                defaultValue="default"
                name="category"
                required
                onChange={handleRecipeChange}
              >
                <option value="default" hidden disabled>
                  -- Select an Option --
                </option>
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
                required
                name="ingredients"
                type="text"
                onChange={handleRecipeChange}
              ></input>
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

            <button
              disabled={
                recipe.name === "" ||
                recipe.description === "" ||
                recipe.image === "" ||
                recipe.category === "" ||
                recipe.ingredients === ""
              }
              type="submit"
              onClick={submitRecipe}
            >
              Create Recipe
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};
