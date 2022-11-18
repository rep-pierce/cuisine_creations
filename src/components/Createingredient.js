import React, {useState} from "react";

function CreateIngredient({ form, setForm, name, setName, calories, setCalories, picture, setPicture}){
    
    function handleSubmit(e){
        e.preventDefault()
        const newIngredient={
            name: name,
            calories: calories,
            picture: picture
        }
        fetch("http://localhost:9292/ingredients", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newIngredient),
          })
          setCalories(0)
          setPicture('')
          setName('')
          setForm(!form)
          alert("You have added an ingredient to the database!")
          //window.location.href=window.location.href
        }

    return(
        <div >
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={((e) => setName(e.target.value))} />
            </div>
            <div>
                <label>Calories per Gram:</label>
                <input type="integer" name="calories" value={calories} onChange={((e) => setCalories(e.target.value))} />
            </div>
            <div>
                <label>Picture:</label>
                <input type="text" name="picture" value={picture} onChange={((e) => setPicture(e.target.value))} />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
    )

}
export default CreateIngredient