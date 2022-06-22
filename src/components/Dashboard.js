import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
      <div className="dashboard-recipes-container">
        <div className="dashboard-titles">
          <h3>Name</h3>
          <h3>Category</h3>
          <h3>Description</h3>
          <h3>Ingredients</h3>
          <h3>Image</h3>
        </div>
        {recipes &&
          recipes
            .filter((items) => items.author === user.nickname)
            .map((created, index) => {
              return (
                <div className="dashboard-recipe" key={index}>
                  <div className="dashboard-recipe-details">
                    <p>{created.name}</p>
                    <p>{created.category}</p>
                    {created.description.length < 50 ? (
                      <p>{created.description}</p>
                    ) : (
                      <p>{created.description.substring(0, 47) + "..."}</p>
                    )}

                    <p>{created.ingredients}</p>
                    <p>{created.image}</p>
                  </div>
                  <div className="dashboard-btn-container">
                    <Link to={`/edit/${created.id}`}>
                      <p>Edit</p>
                      <EditIcon style={{ color: "green" }} />
                    </Link>

                    <button>
                      <p>Delete</p>
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};
