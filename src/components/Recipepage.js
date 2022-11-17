import React, {useState, useEffect} from 'react';
import RecipeCard from './Recipecard';
import StepsCard from './Stepscard';

function Recipepage ({recipe}) {
    const [steps, setSteps] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9292/recipes/${recipe.id}/steps`)
          .then(r => r.json())
          .then(setSteps)
      }, [])
      function createSteps() {
        return steps.map(step => <StepsCard key={step.id} step={step} />)
      }

    return(
    <div>
        <RecipeCard name={recipe.name} id={recipe.id} />
        {createSteps()}


    </div>
    )
}

export default Recipepage;