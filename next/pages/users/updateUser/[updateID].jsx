import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UpdateUser = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const { query } = useRouter();

  async function UpdateUserHandler(e) {
    e.preventDefault();
    if (name.trim().length < 2 || !age.trim() || password.trim().length < 5) {
      return alert("data not valid");
    }

    const response = await fetch(`/api/users/${query?.updateID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, password }),
    });
    const data = await response.json();
  }

  useEffect(() => {
    async function getUserHandler() {
      const res = await fetch(`/api/users/${query?.updateID}`);
      const { user } = await res.json();
      setName(user?.name);
      setAge(user?.age);
      setPassword(user?.password);
      setUser(user);
    }
    getUserHandler();
  }, []);
  return (
    <form>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="name"
        required
        defaultValue={user?.name ?? ""}
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        type="text"
        name="age"
        placeholder="age"
        required
        defaultValue={user?.age ?? ""}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        name="password"
        placeholder="password"
        defaultValue={user?.password ?? ""}
      />
      <button onClick={(e) => UpdateUserHandler(e)}>update</button>
    </form>
  );
};

export default UpdateUser;
