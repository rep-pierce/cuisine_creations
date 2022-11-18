import React,  {useState, useEffect} from 'react';
import IngredientCard from './Ingredientcard';
import { useNavigate } from "react-router-dom";

function RecipeCard ({ name, id, setsRecipe, recipe, user, setList, list, inList}) {
    const [rating, setRating] = useState(0)
    const [ingredients, setIngredients] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${id}/rating`)
          .then(r => r.json())
          .then(setRating)
      }, [])

    useEffect(() => {
      fetch(`http://localhost:9292/recipes/${id}/ingredients`)
        .then(r => r.json())
        .then(setIngredients)
    }, [])

    function createIngredientCard() {
        return ingredients.map(ingredient => <IngredientCard key={ingredient.id} ingredient={ingredient} />)
    }
    function handleClick() {
        setsRecipe(recipe)

        navigate('/recipe')
    }
    function handleListAdd(){
        const newList = {
            user: user.id,
            recipe: recipe.id
        }
        console.log(newList)
        console.log(list)

        fetch("http://localhost:9292/lists", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newList),
          })
          .then(r => r.json())
          .then(setList([...list, newList]))

          alert("Recipe has been added to your list!")
    }

    function handleDeleteList(){
        fetch(`http://localhost:9292/lists/${id}/${user.id}`,{
            method: "DELETE",
        })
        .then(r => r.json())
        .then(setList(list.filter(item => item.name != recipe.name)))

        alert("You have removed this item from your list!")
    }

    return(
    <div className='Recipe-card'>
        <div onClick={handleClick}>
            <h1>Recipe</h1>
            <p>{name}</p>
            <p>Rating: {rating.toFixed(1)}</p>
            <h2>Ingredients</h2>
            {createIngredientCard()}
        </div>
        <button className='button' onClick={inList? handleDeleteList : handleListAdd}>{inList ? "Remove from List" : "Add to your list!"}</button>
    </div>
    )
}

export default RecipeCard;