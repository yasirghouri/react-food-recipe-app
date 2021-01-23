import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Recipe from "./components/Recipe/Recipe";
import Alert from "./components/Alert/Alert";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (!result.data.more) {
        setQuery("");
        setAlert("No Food With Such Name");
        setRecipes([]);
      } else {
        console.log(result);
        setRecipes(result.data.hits);
        setAlert("");
        setQuery("");
      }
    } else {
      setAlert("Please Enter Food Name");
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="app">
      <h1>Food Recipe App</h1>
      <form className="app__search-form" onSubmit={formSubmitHandler}>
        {alert && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search Food"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      <div className="app__recipes">
        {recipes &&
          recipes.map((recipe, idx) => {
            return <Recipe key={idx} recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
