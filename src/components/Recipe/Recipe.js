import React, { useState } from "react";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        More Info..
      </a>
      <button onClick={() => setShow(!show)}>ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
