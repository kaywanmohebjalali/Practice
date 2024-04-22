import Link from "next/link";
import { useEffect, useState } from "react";

function users() {
  const [users, setUsers] = useState(null);


  async function getUserHandler() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  async function deleteUserHandler(e,id){
    e.preventDefault()
     const response = await fetch(`/api/users/${id}`,{
      method:"DELETE"
     })
     const data =await response.json()
     if(data){
       
      getUserHandler()
     }
     
    }

  useEffect(() => {

    getUserHandler();
  }, []);

  return (
    <section>

    <div>
      <hr />
      {users &&
        users?.map((user) => (
          <div key={user?.id} >

          <Link  href={`/users/${user.id}`} >name : {user?.name}</Link>
            <p>age : {user?.age}</p>
            <button onClick={(e)=>deleteUserHandler(e,user.id)}>delete</button>
            <Link href={`/users/updateUser/${user.id}`}>update</Link>
            
            <hr />
          
          </div>
        ))}
    </div>
    <Link href='/users/createUser'>create user</Link>
        </section>
  );
}

export default users;
