import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

const UpdateUser = () => {
  const [user, setUser]=useState(null)
  const eleRef=useRef()
 
    const  {query}=useRouter()

 async function UpdateUserHandler(){
    const name=eleRef.current.childNodes[0].value
    const age=eleRef.current.childNodes[1].value
    const password=eleRef.current.childNodes[2].value
    const response = await  fetch(`/api/users/${query?.updateID}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, age, password })
  });
  const data = await response.json()
}
  

    useEffect(()=>{
        async function getUserHandler() {
            const res = await fetch(`/api/users/${query?.updateID}`);
            const {user} = await res.json();
            setUser(user);
          }
          getUserHandler()
    },[])
  return (
    <form  ref={eleRef}>
    <input type="text" name='name' placeholder='name' required defaultValue={user?.name??''}/>
    <input type="text" name='age' placeholder='age' required defaultValue={user?.age??''}/>
    <input  type="text" name='password' placeholder='password'  defaultValue={user?.password??''}/>
    <input onClick={()=>UpdateUserHandler()} value='send'/>
</form>
  )
}

export default UpdateUser