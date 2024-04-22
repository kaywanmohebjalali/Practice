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
        users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`} >
            <p >name : {user.name}</p>
            <p>age : {user.age}</p>
            <button onClick={(e)=>deleteUserHandler(e,user.id)}>delete</button>
            <Link href={`/users/updateUser/${user.id}`}>update</Link>
            
            <hr />
          </Link>
        ))}
    </div>
    <Link href='/users/createUser'>create user</Link>
        </section>
  );
}

export default users;
