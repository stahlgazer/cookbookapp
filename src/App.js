import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeList } from "../src/components/RecipeList";
import { SingleRecipe } from "../src/components/SingleRecipe";
import { Dashboard } from "./components/Dashboard";
import { SharedLayout } from "./components/SharedLayout";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Support } from "./components/Support";
import { CreateRecipe } from "./components/CreateRecipe";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.scss";

function App() {
  return (
    <Auth0Provider
      domain="dev-vmhaa30k.us.auth0.com"
      clientId="ISWfohXdV2UzeaRWsHSVojI9dVse50cP"
      redirectUri={`${window.location.origin}/recipes`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipes/:id" element={<SingleRecipe />} />
            <Route path="/create" element={<CreateRecipe />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
