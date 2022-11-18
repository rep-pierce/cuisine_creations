import React from "react";

function IngredientCard({ingredientName, ingredient, setInRecipe, inRecipe}){

    return(
    <div className = 'Ingredient-card'>
        <p>{ingredientName}</p>
        { inRecipe ? `calories per gram: ${ingredient.calories}`: null }

    </div>
    )

}
export default IngredientCard

