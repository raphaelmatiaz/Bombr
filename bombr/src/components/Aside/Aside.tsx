"use client"
import LinkToProfile from "../LinkToProfile/LinkToProfile"
import FriendSuggestions from "../FriendSuggestions/friendSuggestions"
import SuggestedProfile from "../suggestedProfile/suggestedProfile"
import styles from './aside.module.css'
import { useEffect, useState } from "react";
import  User from "@/types/user";
import { useSession } from "next-auth/react"
const Aside = ()  => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();
  
    useEffect(() => {
        async function fetchUsers() {
          try {
            const response = await fetch("/api/users");
            if (!response.ok) throw new Error("Failed to fetch users");

            const data: User[] = await response.json();
            setUsers(data);
          } catch (err) {
            setError((err as Error).message);
          }
        }

        fetchUsers();
      }, []);

      if (error) return <p>Error: {error}</p>;
      console.log(users)

      if (users.length === 0) return <p>Loading...</p>;

    return(
        <span className={`${styles.asideWrapper}`} id="getOutaHere">

            <LinkToProfile></LinkToProfile>

            <FriendSuggestions>
            <ul>
              {session && users.filter((user) => user.email !== session.user?.email).map((user) => (
              <SuggestedProfile key={user.id} id={user.id} name={user.name ?? ''} username={user.username ?? ''} fullName={user.fullName ?? ''}></SuggestedProfile>
              ))}
            </ul>
            </FriendSuggestions>
        </span>
    )
}

export default Aside