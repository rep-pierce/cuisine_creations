import React, {useState, useEffect} from 'react';
import RecipeCard from './Recipecard';
import StepsCard from './Stepscard';

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
        <h2>Steps</h2>
        {createSteps()}


    </div>
    )
}

export default Recipepage;