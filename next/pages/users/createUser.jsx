import React, { useRef } from 'react'

const CreateUser = () => {
const nameRef = useRef()
const ageRef = useRef()
const passwordRef = useRef()


async function createUserHandler(){
 
  const name=nameRef.current.value
  const age=ageRef.current.value
  const password=passwordRef.current.value

  const response = await  fetch(`/api/users`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, password })
});
const data = await response.json()
if(data){
 nameRef.current.value=''
  ageRef.current.value=''
 passwordRef.current.value=''
}
}

  return (
    <form >
        <input ref={nameRef} type="text" name='name' placeholder='name' required/>
        <input ref={ageRef} type="text" name='age' placeholder='age' required/>
        <input ref={passwordRef} type="text" name='password' placeholder='password' required/>
        <input onClick={()=>createUserHandler()} value='send'/>
    </form>
  )
}

export default CreateUser