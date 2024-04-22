import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const { query } = useRouter();
  useEffect(() => {
    async function getUser() {
      const response = await fetch(`/api/users/${query.id}`);
      const { user } = await response.json();
      setUser(user);
    }
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div className="">
          <h1>id:{user?.id}</h1>
          <h1>name:{user?.name}</h1>
          <h1>age:{user?.age}</h1>
        </div>
      )}
    </>
  );
};

export default User;
