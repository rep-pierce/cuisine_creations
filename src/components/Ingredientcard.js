import React from "react";

function IngredientCard({ingredient}){

    return(
    <div className = 'Ingredient-card'>
        <p>{ingredient.name}</p>
        <p>calories</p>
        <p>{ingredient.calories}</p>
    </div>
    )

}
export default IngredientCard

