
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  const [users, setUsers] = useState(null);

  async function getUserHandler() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getUserHandler();
  }, []);

  return (
    <>

        <Link href='/users'>users</Link>

    
    </>
  );
}
