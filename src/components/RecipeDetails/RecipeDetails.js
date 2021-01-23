import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map((ingredient, idx) => {
    return (
      <ul key={idx} className="recipeDetails__ingredient-list">
        <li className="recipeDetails__ingredient-text">{ingredient.text}</li>
        <li className="recipeDetails__ingredient-weight">
          Weight - {ingredient.weight}
        </li>
      </ul>
    );
  });
};

export default RecipeDetails;
