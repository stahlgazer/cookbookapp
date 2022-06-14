import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeList } from "../src/components/RecipeList";
import { Dashboard } from "./components/Dashboard";
import { SharedLayout } from "./components/SharedLayout";
import { Home } from "./components/Home";
import { Error } from "./components/Error";
import { Contact } from "./components/Contact";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
