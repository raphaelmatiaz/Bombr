"use client"
import LinkToProfile from "../LinkToProfile/LinkToProfile"
import FriendSuggestions from "../FriendSuggestions/friendSuggestions"
import SuggestedProfile from "../suggestedProfile/suggestedProfile"
import styles from './aside.module.css'
// import { PrismaClient } from "@prisma/client";
// import { User } from "../../types/user";
// import { getUsers } from "../../lib/getUsers";
import { useEffect, useState } from "react";
import  User from "@/types/user";
import Link from "next/link";
const Aside = ()  => {

    // const users = await getUsers();
    // console.log(users)
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

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
                    {users.map((user) => (
                        
                      <SuggestedProfile key={user.id} id={user.id} name={user.name ?? ''} username={user.username ?? ''} fullName={user.fullName ?? ''}></SuggestedProfile>
                     
                    ))}
                </ul>
            </FriendSuggestions>
        </span>
    )
}

export default Aside