import React, {useState, useEffect} from "react";
import IngredientCard from "./Ingredientcard";
import RecipeCard from "./Recipecard";
import { useNavigate } from "react-router-dom";


function ListPage({user, list, setList, inList, setInList }){
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user.id}/list`)
          .then(r => r.json())
          .then(setList)
      }, [])

      function createRecipeCards() {
        return list.map(recipe => <RecipeCard user={user} list={list} setList={setList} inList={inList} key={recipe.id} recipe={recipe} name={recipe.name} id={recipe.id} /> )
    }

    function handleHome(){
        setInList(false)
        navigate('/')
    }

    return(
    <div>
        {createRecipeCards()}
        <button onClick={handleHome}>Return to All Recipes</button>
    </div>
    )

}
export default ListPage