import React, {useState, useEffect} from 'react';
import RecipeCard from './Recipecard';
import StepsCard from './Stepscard';
import Rating from './Rating'

function Recipepage ({sRecipe}) {
    const [steps, setSteps] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${sRecipe.id}/steps`)
          .then(r => r.json())
          .then(setSteps)
      }, [])
      function createSteps() {
        return steps.map(step => <StepsCard key={step.id} step={step} />)
      }

    return(
    <div>
        <RecipeCard name={sRecipe.name} id={sRecipe.id} />
        {createSteps()}
        <Rating />


    </div>
    )
}

export default Recipepage;