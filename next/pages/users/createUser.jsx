import React, { useRef, useState } from 'react'

const CreateUser = () => {
const [name, setName]=useState("")
const [age, setAge]=useState("")
const [password, setPassword]=useState("")



async function createUserHandler(e){
  e.preventDefault()
  console.log( Boolean(password.trim().length<8))
  if(name.trim().length<2 || !age.trim() || password.trim().length<5){
    return alert('data not valid')
  }

    const response = await  fetch(`/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, password })
    });
const data = await response.json()
if(response.status===201){
  setName("")
  setAge("")
  setPassword("")

}

  
}

  return (
    <form >
        <input onChange={e=>setName(e.target.value)} type="text" name='name' placeholder='name' value={name} required/>
        <input onChange={e=>setAge(e.target.value)} type="text" name='age' placeholder='age' value={age} required/>
        <input onChange={e=>setPassword(e.target.value)} type="text" name='password' placeholder='password' value={password} required/>
        <button onClick={e=>createUserHandler(e)} >register</button>
    </form>
  )
}

export default CreateUser