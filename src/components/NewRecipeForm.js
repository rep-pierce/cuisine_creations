import React, {useEffect, useState} from "react";

function NewRecipeForm({user, newRecipeName, setNewRecipeName, newRecipePicture, setNewRecipePicture, recipes, setRecipes}){
    console.log(newRecipeName)
    console.log(user.id)

    function handleSubmit(e) {
        e.preventDefault()
        const newRecipe={
            name: newRecipeName,
            picture: newRecipePicture,
            user: user.id
        }
        fetch("http://localhost:9292/recipes",{
            method:"POST",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
        .then((r) => r.json())
        .then(setRecipes([...recipes,newRecipe]))
        setNewRecipeName('')
        setNewRecipePicture('')
        alert('You made a new Recipe!')
        

    }


    return(
        <div>
            <p>New Recipe Form</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Recipe Name: </label>
                    <input type="text" name="newRecipeName" value={newRecipeName} onChange={(e)=> setNewRecipeName(e.target.value)} />
                </div>
                <div>
                    <label>Recipe Picture: </label>
                    <input type="text" name="newRecipePicture" value={newRecipePicture} onChange={(e)=> setNewRecipePicture(e.target.value)} />
                </div>
                <input className='button' type="submit"/>
                
            </form>

        </div>
    )
}
export default NewRecipeForm