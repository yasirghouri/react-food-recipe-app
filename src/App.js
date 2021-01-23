import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Recipe from "./components/Recipe/Recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;
  const getData = async () => {
    const result = await axios.get(url);
    console.log(result);
    setRecipes(result.data.hits);
    setQuery("");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="app">
      <h1>Food Recipe App</h1>
      <form className="search-form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes &&
          recipes.map((recipe, idx) => {
            return <Recipe key={idx} recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
