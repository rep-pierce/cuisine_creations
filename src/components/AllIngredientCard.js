import React, {useState} from "react";

function AllIngredientCard({ ingredient, loggedin, recipes, user }){
    const [add, setAdd] = useState(false)
    const [addAmount, setAddAmount] = useState(false)
    const [sRecipeID, setsRecipeID] = useState(null)
    const [amount, setAmount] = useState(0)
    const myrecipes = recipes.filter(recipe => recipe.user_id == user.id)
    
    function handleChange(e){
        e.preventDefault()
        if (e.target.value == 'none' ){
            setAddAmount(false)
        }else{
            setAddAmount(true)
            setsRecipeID(e.target.value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        const newJoinir = {
            ingredient: ingredient.id,
            recipe: sRecipeID,
            amount: amount
        }
        fetch(`http://localhost:9292/joinirs`, {
        method:"POST",
        headers:{
            "content-Type": "application/json",
        },
        body: JSON.stringify(newJoinir),
        })
        alert(`You have added ${amount} grams of ${ingredient.name} to your recipe!`)
        setAmount(0)
        setAddAmount(false)
        setAdd(false)
        
    }

    function createAmount(){
        return(
            <form onSubmit={handleSubmit}>
                <label>Amount in grams:</label>
                <input type='integer' name="amount" value={amount} onChange={((e) => setAmount(e.target.value))} />
                <input className="button" type='submit' />
            </form>
        )
    }
    function createOptions(){
        return(
            <select onChange={handleChange}>
                <option value={'none'}>none</option>
                {myrecipes.map(recipe => <option value={recipe.id}>{recipe.name}</option>)}
            </select>
        )
    }
    function handleAdd(){
        setAdd(!add)
        setAddAmount(false)
    }

    return(
    <div className = 'Ingredient-card'>
        <span><p>Name: {ingredient.name} | Calories per Gram: {ingredient.calories} { loggedin ? <button className="button" onClick={handleAdd}>Add to one of your Recipes</button> : null} { add ? createOptions() : null } { addAmount ? createAmount() : null }</p></span>
    </div>
    )

}
export default AllIngredientCard