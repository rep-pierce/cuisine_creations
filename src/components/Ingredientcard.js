import React from "react";

function IngredientCard({ingredientName, ingredient, setInRecipe, inRecipe}){

    return(
    <div>
        <p>{ingredientName}</p>
        { inRecipe ? `calories per gram: ${ingredient.calories}`: null }

    </div>
    )

}
export default IngredientCard

