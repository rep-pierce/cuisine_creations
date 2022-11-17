import React from 'react';

function NewUserCard ({sUsn, sU, sA, sP, age, username, usersname, password, users, setUsers, setUsersname, setAge, setUsername, setPassword}) {
    function handleSubmit(e){
        e.preventDefault()
        const newUser={
            name: usersname,
            age: age,
            username: username,
            password: password
        }
        fetch("http://localhost:9292/users", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newUser),
          })
          .then((r) => r.json())
          .then(setUsers([...users, newUser]))
          sA(0)
          sUsn('')
          sU('')
          sP('')
        }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="usersname" value={usersname} onChange={setUsersname} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="integer" name="age" value={age} onChange={setAge} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="uname" value={username} onChange={setUsername} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={password} onChange={setPassword} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
            <p>You must log in after creating your new user!</p>
        </div>
        )
}

export default NewUserCard;