import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PageviewIcon from "@mui/icons-material/Pageview";

export const Dashboard = () => {
  const { user } = useAuth0();
  const [recipes, setRecipes] = useState();
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    axios
      .get("https://digitalcookbookapi.herokuapp.com/recipes")
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err));
  }, [deleted]);
  console.log(recipes);
  console.log(user);

  const handleDelete = (id) => {
    axios
      .delete(`https://digitalcookbookapi.herokuapp.com/recipes/${id}`)
      .then((res) => {
        console.log(res);
        setDeleted(deleted + 1);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <h2>Welcome back, {user.nickname}!</h2>
      <Link to="/create" className="create-recipe-btn">
        Create Recipe
      </Link>
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
                    <img alt="recipe thumbnail preview" src={created.image} />
                  </div>
                  <div className="dashboard-btn-container">
                    <Link className="view" to={`/recipes/${created.id}`}>
                      <p>View</p>
                      <PageviewIcon style={{ color: "dodgerblue" }} />
                    </Link>
                    <Link className="edit" to={`/edit/${created.id}`}>
                      <p>Edit</p>
                      <EditIcon style={{ color: "green" }} />
                    </Link>

                    <button onClick={() => handleDelete(created.id)}>
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
