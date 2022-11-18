import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import AllIngredientCard from "./AllIngredientCard";
import CreateIngredient from "./Createingredient";

function IngredientPage({form, setForm, name, setName, calories, setCalories, picture, setPicture }){
    const [allIngredients, setAllIngredients] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:9292/ingredients`)
        .then(r => r.json())
        .then(setAllIngredients)
    }, [form])
    function listIngredients(){
        return allIngredients.map(ingredient => <AllIngredientCard key={ingredient.id} ingredient={ingredient} />)
    }
    function handleHome(){
        navigate('/')
    }
    function handleCreateForm(){
        return <CreateIngredient allIngredients={allIngredients} setAllIngredients={setAllIngredients} form={form} setForm={setForm} name={name} setName={setName} calories={calories} setCalories={setCalories} picture={picture} setPicture={setPicture} />
    }
    function createForm(){
        setForm(!form)
    }
    return(
        <div>
            <button className='button' onClick={createForm}>Add Ingredient to the Database</button>
            { form ? handleCreateForm() : null }
            {listIngredients()}
            <button className="button" onClick={handleHome}>Return to Homepage</button>
        </div>
    )
}

export default IngredientPage