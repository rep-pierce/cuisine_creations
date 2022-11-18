import React, {useState, useEffect} from 'react';
import NewRecipeForm from './NewRecipeForm';

function UserCard ({user, password, setPassword, setLoggedin, setUser, users, setUsers, newRecipeName, setNewRecipeName, newRecipePicture, setNewRecipePicture, recipes, setRecipes}) {
    const[btntoggle, setBtntoggle] =useState(false)

    function handleBtnClick() {
        setBtntoggle(!btntoggle)
        console.log(btntoggle)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: password
              
            }),
          })
            
    }
    function handleClick() {
        fetch(`http://localhost:9292/users/${user.id}`,{
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then((deletedUser)=> setUsers(users.filter(user => user.id !== deletedUser.id)))
        setLoggedin(false)
        setUser({})
        // window.location.href=window.location.href
    
        
    }

    return(
    <div className ="User-card-div">
        <h3>Profile</h3>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Username: {user.username}</p>
        <form onSubmit={handleSubmit}>
            <label>Change Password:</label>
                <input
                value = {password}
                type ="text"
                placeholder = "New Password"
                onChange={(e)=> setPassword(e.target.value)}
                />
            
            <button className='button' type="submit">Submit</button>
        </form>
        <button className='button' onClick={handleClick}>Delete User</button>
        <button className='button' onClick={handleBtnClick}>{btntoggle ? 'Close Form' : 'Create Recipe' }</button>
        {btntoggle ? <NewRecipeForm user={user} newRecipeName={newRecipeName} setNewRecipeName={setNewRecipeName} newRecipePicture={newRecipePicture} setNewRecipePicture={setNewRecipePicture} recipes={recipes} setRecipes={setRecipes}/> : null}
        
    </div>
    )
}

export default UserCard;
