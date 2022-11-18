import React from "react";

function AllIngredientCard({ ingredient }){

    return(
    <div className = 'Ingredient-card'>
        <span><p>Name: {ingredient.name} | Calories per Gram: {ingredient.calories}</p></span>
    </div>
    )

}
export default AllIngredientCard