import React, {useState, useEffect} from "react";
import IngredientCard from "./Ingredientcard";
import RecipeCard from "./Recipecard";
import { useNavigate } from "react-router-dom";


function ListPage({user}){
    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/users/${user.id}/list`)
          .then(r => r.json())
          .then(setList)
      }, [])

      function createRecipeCards() {
        return list.map(recipe => <RecipeCard key={recipe.id} name={recipe.name} id={recipe.id} /> )
    }

    function handleHome(){
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