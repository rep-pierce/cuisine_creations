import React, {useState, useEffect} from 'react';
import RecipeCard from './Recipecard';
import StepsCard from './Stepscard';
import Rating from './Rating'
import { useNavigate } from "react-router-dom";
import IngredientCard from "./Ingredientcard"

function Recipepage ({sRecipe, user, rate, totalCalories, setTotalCalories, setRate, setInRecipe, inRecipe}) {
    const [steps, setSteps] = useState([])
    // const [ingredients, setIngredients] = useState([])
    const navigate = useNavigate()
    console.log(sRecipe)
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${sRecipe.id}/steps`)
          .then(r => r.json())
          .then(setSteps)
      }, [])

    // useEffect(() => {
    //   fetch(`http://localhost:9292/recipes/${sRecipe.id}/ingredients`)
    //     .then(r => r.json())
    //     .then(setIngredients)
    // }, [])

    function createSteps() {
      return steps.map(step => <StepsCard key={step.id} step={step} />)
    }
    function handleHome(){
      setInRecipe(false)
      navigate('/')
    }
    // function handleIngredients(){
    //   return ingredients.map(ingredient => <IngredientCard ingredientName={ingredient.name} ingredient={ingredient} />)
    // }

    return(
    <div>
        <RecipeCard name={sRecipe.name} id={sRecipe.id} picture={sRecipe.picture} setInRecipe={setInRecipe} inRecipe={inRecipe}/>
        
        <h2>Steps</h2>
        {createSteps()}
        <Rating sRecipe={sRecipe} user={user} rate={rate} setRate={setRate}/>
        <button onClick={handleHome}>Return to Homepage</button>

    </div>
    )
}

export default Recipepage;