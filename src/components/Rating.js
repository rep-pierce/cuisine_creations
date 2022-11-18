import React, {useState} from 'react';

function Rating ({sRecipe, user, rate, setRate}) {

    function handleSubmit(e){
        e.preventDefault()

        const newRating={
            rate: rate,
            recipe: sRecipe.id,
            user: user.id
        }
        console.log(newRating)
        fetch("http://localhost:9292/ratings", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newRating),
          })
          alert("You have Rated this Recipe!")
        
    }
    console.log("outside", rate)
    function handleChange(e){
        e.preventDefault()
        setRate(e.target.value)
    }
    return(
    <div className='Rating-div'>
        <form className='Rating-form' onSubmit={handleSubmit} >
            <label><strong>Rate this Recipe</strong></label>
            <select onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <div>
                <input className='button' type="submit" />    
            </div>            
        </form>
        
    </div>
    )
}

export default Rating;