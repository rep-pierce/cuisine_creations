import React from "react";

function IngredientCard({ingredient}){

    return(
    <div>
        <p>{ingredient.name}</p>
        <p>calories</p>
        <p>{ingredient.calories}</p>
    </div>
    )

}
export default IngredientCard

